import { makeExecutableSchema } from "apollo-server-express";
import { DIRECTIVES } from "graphql-codegen-typescript-mongodb";
import courseResolvers from "../resolvers/course";
import mutationResolvers from "../resolvers/mutation";
import queryResolvers from "../resolvers/query";
import courseType from "./course";
import mutationType from "./mutation";
import queryType from "./query";
import teacherType from "./teacher";

const typeDefs = [DIRECTIVES, teacherType, courseType, queryType, mutationType];

const resolvers: any = {
  ...courseResolvers,
  ...queryResolvers,
  ...mutationResolvers
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
