import { ApolloServer } from "apollo-server-express";
import * as dotenv from "dotenv";
import * as express from "express";
import { getDB } from "./db";
import schema from "./schemas/schema";

(async () => {
  dotenv.config();

  const db = await getDB();

  const server = new ApolloServer({
    schema,
    context: ({ req }: any) => {
      const token = req.headers.authorization || "";
      return { canMutate: token === process.env.ENGINE_API_KEY, db };
    },
    engine: {
      apiKey: process.env.ENGINE_API_KEY
    },
    introspection: true,
    playground: true
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
