import { gql } from "apollo-server-express";

const mutationType = gql`
  "教师输入"
  input TeacherInput {
    "姓名"
    name: String!

    "院系"
    department: String
  }

  "新增一级选课课程的输入"
  input AddPrimaryCourseInput {
    "课程号"
    No: String!

    "课序号"
    index: String!

    "课程名"
    name: String!

    "主讲教师"
    teacher: TeacherInput!

    "开课院系"
    department: String!

    "学分"
    credit: Int!

    "本科生课容量"
    undergraduateCapacity: Int

    "研究生课容量"
    graduateCapacity: Int

    "上课时间"
    classTime: String

    "选课文字说明"
    registrationDescription: String

    "课程特色"
    features: String

    "年级"
    grade: String

    "是否二级选课"
    secondaryRequired: Boolean!

    "重修是否占容量"
    standaloneRehearsal: Boolean!

    "是否选课时限制"
    registrationRestriction: Boolean!

    "本科文化素质课组"
    culturalQualityCategory: String
  }

  "新增二级选课课程的输入"
  input AddSecondaryCourseInput {
    "课程号"
    No: String!

    "课序号"
    index: String!

    "课程名"
    name: String!

    "主讲教师"
    teacher: TeacherInput!

    "开课院系"
    department: String!

    "二级课序号"
    secondaryIndex: String

    "排课模式"
    arrangementMode: String

    "选课模式"
    registrationMode: String

    "项目组数"
    projectCount: Int

    "必修项目数"
    compulsoryProjectCount: Int
  }

  "更新一级选课课程的输入"
  input UpdatePrimaryCourseInput {
    "课程号"
    No: String

    "课序号"
    index: String

    "课程名"
    name: String

    "主讲教师"
    teacher: TeacherInput!

    "开课院系"
    department: String

    "学分"
    credit: Int

    "本科生课容量"
    undergraduateCapacity: Int

    "研究生课容量"
    graduateCapacity: Int

    "上课时间"
    classTime: String

    "选课文字说明"
    registrationDescription: String

    "课程特色"
    features: String

    "年级"
    grade: String

    "是否二级选课"
    secondaryRequired: Boolean

    "重修是否占容量"
    standaloneRehearsal: Boolean

    "是否选课时限制"
    registrationRestriction: Boolean

    "本科文化素质课组"
    culturalQualityCategory: String
  }

  "更新二级选课课程的输入"
  input UpdateSecondaryCourseInput {
    "课程号"
    No: String

    "课序号"
    index: String

    "课程名"
    name: String

    "主讲教师"
    teacher: TeacherInput!

    "开课院系"
    department: String

    "二级课序号"
    secondaryIndex: String

    "排课模式"
    arrangementMode: String

    "选课模式"
    registrationMode: String

    "项目组数"
    projectCount: Int

    "必修项目数"
    compulsoryProjectCount: Int
  }

  "修改课程的响应结果"
  type CourseMutationResponse {
    "是否修改成功"
    success: Boolean!

    "附加信息，包含可能的错误提示"
    message: String

    "返回修改后的课程数组，也可能不返回任何结果"
    courses: [CourseResult]
  }

  type Mutation {
    "新增一级选课课程"
    addPrimaryCourses(
      courses: [AddPrimaryCourseInput!]!
    ): CourseMutationResponse

    "新增二级选课课程"
    addSecondaryCourses(
      courses: [AddSecondaryCourseInput!]!
    ): CourseMutationResponse

    "删除课程"
    removeCourses(ids: [ID!]!): CourseMutationResponse

    "更新一级选课课程"
    updatePrimaryCourse(
      id: ID!
      update: UpdatePrimaryCourseInput!
    ): CourseMutationResponse

    "更新二级选课课程"
    updateSecondaryCourse(
      id: ID!
      update: UpdateSecondaryCourseInput!
    ): CourseMutationResponse
  }
`;

export default mutationType;
