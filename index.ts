import { ApolloServer } from "apollo-server-express";
import * as dotenv from "dotenv";
import * as express from "express";
import { DIRECTIVES } from "graphql-codegen-typescript-mongodb";
import { getDB } from "./db";
import courseResolvers from "./resolvers/course";
import mutationResolvers from "./resolvers/mutation";
import queryResolvers from "./resolvers/query";
import courseType from "./schemas/course";
import mutationType from "./schemas/mutation";
import queryType from "./schemas/query";
import teacherType from "./schemas/teacher";

(async () => {
  dotenv.config();

  const db = await getDB();

  const typeDefs = [
    DIRECTIVES,
    teacherType,
    courseType,
    queryType,
    mutationType
  ];

  const resolvers: any = {
    ...courseResolvers,
    ...queryResolvers,
    ...mutationResolvers
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      db
    },
    engine: {
      apiKey: process.env.ENGINE_API_KEY
    }
  });
  const app = express();
  server.applyMiddleware({ app });

  app.listen(23333, () =>
    // tslint:disable-next-line: no-console
    console.log(
      `🚀  Server ready at http://localhost:23333${server.graphqlPath}`
    )
  );
})();
