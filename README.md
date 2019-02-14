[![Build Status](https://travis-ci.org/robertying/thu-course-api.svg?branch=master)](https://travis-ci.org/robertying/thu-course-api)

# THU Course API

GraphQL API for Courses of Tsinghua University

## Static Catalog

You can find courses corresponding with certain semesters in [courses](./courses)

|  Semester   |                        Undergraduate                        |                          Graduate                           |
| :---------: | :---------------------------------------------------------: | :---------------------------------------------------------: |
| 2018-2019-2 | <ul><li>[x] 一级选课课程</li><li>[x] 二级选课课程</li></ul> | <ul><li>[ ] 一级选课课程</li><li>[ ] 二级选课课程</li></ul> |

## GraphQL APIs

Endpoint: https://api.robertying.io/graphql

Directly visit `https://api.robertying.io/graphql` to get an interactive API query editor to see API schemas and try simple queries on the fly

For example, to query all primary courses' names and credits of a teacher using [graphql-request](https://github.com/prisma/graphql-request):

```js
import { request } from "graphql-request";

const query = `
    query {
        courses(type: PRIMARY, teacher: "李国林") {
            ... on PrimaryCourse {
                name
                credit
            }
        }
    }
`;

request("https://api.robertying.io/graphql", query).then(data =>
  console.log(data)
);
```

To query all secondary courses' names and teachers of a department:

```js
import { request } from "graphql-request";

const query = `
    query {
        courses(type: SECONDARY, department: "电子工程系") {
            ... on SecondaryCourse {
                name
                teacher {
                    name
                }
            }
        }
    }
`;

request("https://api.robertying.io/graphql", query).then(data =>
  console.log(data)
);
```

Besides using [graphql-request](https://github.com/prisma/graphql-request) for simple scripts, you can also use clients such as [react-apollo](https://github.com/apollographql/react-apollo) or [relay](https://github.com/facebook/relay)

See [Learn GraphQL](https://graphql.org/learn/) for more info on GraphQL

## Key Pairs

For primary courses:

```js
const primaryKeys = {
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
```

For secondary courses:

```js
const secondaryKeys = {
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
```

## Development

Run

```shell
npm install
cd scripts && npm install
```

to install dependencies

### New Courses

Run

```shell
npm run crawl
```

in Tsinghua networks to get the latest semester's courses
