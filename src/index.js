import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from './schema.js';
import resolver from "./resolver.js";
import { config } from "dotenv";

config();
const port = process.env.SERVER_PORT;

const server = new ApolloServer({

    typeDefs: typeDefs,
    resolvers: resolver
})

const { url } = await startStandaloneServer(server, {
    listen: {
        port: port
    }
})

console.log(`Apollo Server listening in the url : ${url} `)