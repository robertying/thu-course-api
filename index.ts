import { ApolloServer, gql } from "apollo-server-express";
import * as express from "express";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen(23333, () =>
  console.log(`🚀  Server ready at http://localhost:23333${server.graphqlPath}`)
);
