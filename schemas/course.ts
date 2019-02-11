import { gql } from "apollo-server-express";

const courseType = gql`
  # "课程接口"
  # interface Course @abstractEntity(discriminatorField: "type") {
  #   "ID"
  #   id: ID!

  #   "课程号"
  #   No: String! @column

  #   "课序号"
  #   index: String! @column

  #   "课程名"
  #   name: String! @column

  #   "主讲教师"
  #   teacher: Teacher! @embedded

  #   "开课院系"
  #   department: String! @column
  # }

  "课程类型"
  enum CourseType {
    PRIMARY
    SECONDARY
  }

  "一级选课课程"
  type PrimaryCourse
    @entity(additionalFields: [{ path: "_id?", type: "ObjectID" }]) {
    "课程类型"
    type: CourseType! @column

    "ID"
    id: ID!

    "课程号"
    No: String! @column

    "课序号"
    index: String! @column

    "课程名"
    name: String! @column

    "主讲教师"
    teacher: Teacher! @embedded

    "开课院系"
    department: String! @column

    "学分"
    credit: Int! @column

    "本科生课容量"
    undergraduateCapacity: Int! @column

    "研究生课容量"
    graduateCapacity: Int! @column

    "上课时间"
    classTime: String! @column

    "选课文字说明"
    registrationDescription: String @column

    "课程特色"
    features: String @column

    "年级"
    grade: String @column

    "是否二级选课"
    secondaryRequired: Boolean! @column

    "重修是否占容量"
    standaloneRehearsal: Boolean! @column

    "是否选课时限制"
    registrationRestriction: Boolean! @column

    "本科文化素质课组"
    culturalQualityCategory: String @column
  }

  "二级选课课程"
  type SecondaryCourse
    @entity(additionalFields: [{ path: "_id?", type: "ObjectID" }]) {
    "课程类型"
    type: CourseType! @column

    "ID"
    id: ID!

    "课程号"
    No: String! @column

    "课序号"
    index: String! @column

    "课程名"
    name: String! @column

    "主讲教师"
    teacher: Teacher! @embedded

    "开课院系"
    department: String! @column

    "二级课序号"
    secondaryIndex: String @column

    "排课模式"
    arrangementMode: String @column

    "选课模式"
    registrationMode: String @column

    "项目组数"
    projectCount: Int @column

    "必修项目数"
    compulsoryProjectCount: Int @column
  }
`;

export default courseType;
