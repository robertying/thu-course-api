// tslint:disable: no-console

import * as fs from "fs";
import * as ProgressBar from "progress";
import * as puppeteer from "puppeteer";
import * as readline from "readline";

(async () => {
  /**
   * Read credentials
   */
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const username = await new Promise<string>(resolve =>
    rl.question("Username: ", answer => resolve(answer))
  );
  const password = await new Promise<string>(resolve =>
    rl.question("Password: ", answer => resolve(answer))
  );
  rl.close();

  /**
   * Launch puppeteer
   */
  printProgress("Launching puppeteer...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  /**
   * Login
   */
  printProgress("Logging in...");
  await page.goto("http://academic.tsinghua.edu.cn/", {
    waitUntil: "networkidle2"
  });
  await page.type(".nrb.left.yahei", username);
  await page.type(".ipt.left.yahei", password);
  await Promise.all([
    page.waitForNavigation({ waitUntil: "networkidle2" }),
    page.click("#logining")
  ]);

  /**
   * Navigate to registration
   */
  printProgress("Navigating to registration...");
  await page.goto(
    "http://zhjw.cic.tsinghua.edu.cn/xkBks.vxkBksXkbBs.do?m=main",
    { waitUntil: "networkidle2" }
  );

  /**
   * Find left-side menu
   */
  const treeFrame = page.frames().find(frame => frame.name() === "tree");
  if (!treeFrame) {
    console.error('Error: cannot find frame "tree"');
    process.exit(1);
  }
  const documentHandle = await treeFrame!.evaluateHandle("document");

  /**
   * Get coursesUrls
   */
  const primaryHrefHandle = await treeFrame!.evaluateHandle(
    document => document.querySelector('a[href*="一级课开课信息"]').href,
    documentHandle
  );
  const primaryClassCoursesUrl = (await primaryHrefHandle.jsonValue()) as string;
  const secondaryHrefHandle = await treeFrame!.evaluateHandle(
    document => document.querySelector('a[href*="二级课开课信息"]').href,
    documentHandle
  );
  const secondaryClassCoursesUrl = (await secondaryHrefHandle.jsonValue()) as string;

  /**
   * Get primary class courses
   */
  await getCourses(page, "primary", primaryClassCoursesUrl);

  /**
   * Get secondary class courses
   */
  await getCourses(page, "secondary", secondaryClassCoursesUrl);

  /**
   * Cleanup
   */
  await browser.close();
})();

async function getCourses(
  page: puppeteer.Page,
  type: "primary" | "secondary",
  coursesUrl: string
) {
  await page.goto(coursesUrl, { waitUntil: "networkidle2" });

  /**
   * Get total pages
   */
  const paginationText = (await page.$eval(
    ".yeM.yahei",
    el => el.innerText
  )).toString();
  const pageTotal = parseInt(
    paginationText.substring(
      paginationText.indexOf("共") + 2,
      paginationText.indexOf("（") - 2
    ),
    10
  );

  /**
   * Setup progress bar
   */
  const bar = new ProgressBar(":bar :current/:total", {
    complete: "=",
    incomplete: " ",
    width: 50,
    total: pageTotal
  });
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);
  bar.interrupt(`Crawling undergraduate's ${type} class courses...`);

  /**
   * Crawling
   */
  let allCourses: object[] = [];
  for (let index = 0; index < pageTotal; index++) {
    const courses = await getTableInfo(page, type);
    allCourses = [...allCourses, ...courses];
    bar.tick();

    await Promise.all([
      page.waitForNavigation({ waitUntil: "networkidle2" }),
      page.evaluate(`turn(${index + 2})`)
    ]);
  }

  /**
   * Write to json file
   */
  const semester = coursesUrl.substring(
    coursesUrl.indexOf("p_xnxq") + 7,
    coursesUrl.indexOf("&", coursesUrl.indexOf("p_xnxq") + 7)
  );
  fs.writeFile(
    `courses/undergraduate-${type}-courses-${semester}.json`,
    JSON.stringify(allCourses),
    err => {
      if (err) {
        console.error(
          `Error: writing to "undergraduate-${type}-courses-${semester}.json" failed`
        );
      } else {
        console.log(
          `Successfully written to "undergraduate-${type}-courses-${semester}.json"`
        );
      }
    }
  );
}

async function getTableInfo(
  page: puppeteer.Page,
  type: "primary" | "secondary"
): Promise<any> {
  return page.$eval(
    "table",
    (table, { type: t }) => {
      const courses: any[] = [];

      const headers = Array.from(table.rows[0].cells).map((cell: any) => {
        const child = cell.children[0];

        return child.children[0] && child.children[0].title
          ? child.children[0].title.trim()
          : child.innerText.trim();
      });

      for (let r = 1, n = table.rows.length; r < n; r++) {
        const course = {} as any;

        for (let c = 0, m = table.rows[r].cells.length; c < m; c++) {
          if (t === "primary" && c === 13) {
            continue;
          }
          if (t === "secondary" && (c === 0 || c === 11)) {
            continue;
          }

          const cell = table.rows[r].cells[c];
          const children = cell.children;
          course[headers[c]] =
            children.length !== 0
              ? children[0].title
                ? children[0].title.trim()
                : children[0].innerText.trim()
              : cell.innerText.trim();
        }

        courses.push(course);
      }

      return courses;
    },
    { type }
  );
}

function printProgress(progress: string) {
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);
  process.stdout.write(progress);
}
