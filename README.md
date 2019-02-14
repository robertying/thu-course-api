[![Build Status](https://travis-ci.org/robertying/thu-course-api.svg?branch=master)](https://travis-ci.org/robertying/thu-course-api)

# THU Course API

GraphQL API for Courses of Tsinghua University

## Static catalog

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

## Development

Run

```shell
npm install
cd scripts && npm install
```

to install dependencies

### Newer courses

Run

```shell
npm run crawl
```

in Tsinghua networks to get the latest semester's courses
