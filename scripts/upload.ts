// tslint:disable: no-console

import * as fs from "fs";
import { request } from "graphql-request";
import * as path from "path";

const url = "https://api.robertying.io/graphql";

const primaryKeys: any = {
  开课院系: "department",
  课程号: "No",
  课序号: "index",
  课程名: "name",
  学分: "credit",
  主讲教师: "teacher",
  本科生课容量: "undergraduateCapacity",
  研究生课容量: "graduateCapacity",
  上课时间: "classTime",
  选课文字说明: "registrationDescription",
  课程特色: "features",
  年级: "grade",
  是否二级选课: "secondaryRequired",
  重修是否占容量: "standaloneRehearsal",
  是否选课时限制: "registrationRestriction",
  本科文化素质课组: "culturalQualityCategory"
};

const secondaryKeys: any = {
  课程号: "No",
  课序号: "index",
  课程名: "name",
  主讲教师: "teacher",
  开课院系: "department",
  二级课序号: "secondaryIndex",
  排课模式: "arrangementMode",
  选课模式: "registrationMode",
  项目组数: "projectCount",
  必修项目数: "compulsoryProjectCount"
};

const primaryCourses = JSON.parse(
  fs.readFileSync(
    path.resolve(
      __dirname,
      "../courses/undergraduate-primary-courses-2018-2019-2.json"
    ),
    "utf8"
  )
);

const primaryUploadCourses = primaryCourses.map((course: any) => {
  const convertedCourse = {} as any;
  Object.keys(course).forEach(
    key => (convertedCourse[primaryKeys[key]] = course[key])
  );
  return {
    ...convertedCourse,
    credit: parseInt(convertedCourse.credit, 10) || 0,
    teacher: { name: convertedCourse.teacher },
    undergraduateCapacity:
      parseInt(convertedCourse.undergraduateCapacity, 10) || 0,
    graduateCapacity: parseInt(convertedCourse.graduateCapacity, 10) || 0,
    secondaryRequired:
      convertedCourse.secondaryRequired === "否" ? false : true,
    standaloneRehearsal:
      convertedCourse.standaloneRehearsal === "否" ? false : true,
    registrationRestriction:
      convertedCourse.registrationRestriction === "是" ? true : false
  };
});

const secondaryCourses = JSON.parse(
  fs.readFileSync(
    path.resolve(
      __dirname,
      "../courses/undergraduate-secondary-courses-2018-2019-2.json"
    ),
    "utf8"
  )
);

const secondaryUploadCourses = secondaryCourses.map((course: any) => {
  const convertedCourse = {} as any;
  Object.keys(course).forEach(
    key => (convertedCourse[secondaryKeys[key]] = course[key])
  );
  return {
    ...convertedCourse,
    teacher: { name: convertedCourse.teacher },
    projectCount: parseInt(convertedCourse.projectCount, 10) || 0,
    compulsoryProjectCount:
      parseInt(convertedCourse.compulsoryProjectCount, 10) || 0
  };
});

(async () => {
  await uploadPrimary();
  await uploadSecondary();
})();

async function uploadPrimary() {
  const mutation = `
mutation ($courses: [AddPrimaryCourseInput!]!) {
    addPrimaryCourses(courses: $courses) {
      success
      message
      courses {
        ... on PrimaryCourse {
          id
          name
          teacher{
            name
          }
        }
      }
    }
  }
`;

  const chunk = 100;
  for (let i = 0; i < primaryUploadCourses.length; i += chunk) {
    const variables = {
      courses: primaryUploadCourses.slice(i, i + chunk)
    };

    const data = await request(url, mutation, variables);
    console.log(JSON.stringify(data, undefined, 2));
  }
}

async function uploadSecondary() {
  const mutation = `
mutation ($courses: [AddSecondaryCourseInput!]!) {
    addSecondaryCourses(courses: $courses) {
      success
    }
  }
`;

  const chunk = 100;
  for (let i = 0; i < secondaryUploadCourses.length; i += chunk) {
    const variables = {
      courses: secondaryUploadCourses.slice(i, i + chunk)
    };

    const data = await request(url, mutation, variables);
    console.log(JSON.stringify(data, undefined, 2));
  }
}
