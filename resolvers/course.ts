import { CourseResultResolvers } from "../types/resolvers";

const courseResultResolvers: CourseResultResolvers.Resolvers = {
  __resolveType: obj =>
    obj.type === "PRIMARY" ? "PrimaryCourse" : "SecondaryCourse"
};

export default {
  CourseResult: courseResultResolvers
};
