import { gql } from "apollo-server-express";

const teacherType = gql`
  "教师"
  type Teacher @entity(embedded: true) {
    "姓名"
    name: String! @column

    "院系"
    department: String
  }
`;

export default teacherType;
