import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

export async function initServer() {
  const app = express();

  app.use(bodyParser.json());

  const graphqlServer = new ApolloServer({
    typeDefs: `
      type Query {
        sayHello: String
        sayHelloTo(name: String!): String
      }
       `,
    resolvers: {  
      Query: {
        sayHello: () => 'Hello, world!',
        sayHelloTo: (parent: any,{}:{name: string} ) => `Hello, $(name)!`,
      },
    },
  });

  await graphqlServer.start();

  app.use('/graphql', expressMiddleware(graphqlServer));

  return app;
}