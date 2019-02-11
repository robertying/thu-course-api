import { gql } from "apollo-server-express";

const queryType = gql`
  "返回的课程结果"
  union CourseResult = PrimaryCourse | SecondaryCourse

  type Query {
    "返回满足条件的课程数组"
    courses(
      type: CourseType
      No: String
      index: String
      name: String
      teacher: String
      department: String
    ): [CourseResult]!

    "返回对应 id 的课程"
    course(id: ID!): CourseResult
  }
`;

export default queryType;
