import { SecondaryCourse } from "../types/common";
import { CourseResultResolvers } from "../types/resolvers";

const courseResultResolvers: CourseResultResolvers.Resolvers = {
  __resolveType: obj =>
    (obj as SecondaryCourse).secondaryIndex
      ? "SecondaryCourse"
      : "PrimaryCourse"
};

export default {
  CourseResult: courseResultResolvers
};
