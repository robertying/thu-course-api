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
