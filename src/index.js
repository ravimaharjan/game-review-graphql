import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from './schema.js';
import resolver from './resolvers/index.js'
import { config } from "dotenv";
import db from './db.js';

config();
const port = process.env.SERVER_PORT ? process.env.SERVER_PORT : 4000;

const server = new ApolloServer({

    typeDefs: typeDefs,
    resolvers: resolver,
})

const { url } = await startStandaloneServer(server, {
    listen: {
        port: port
    },
    context: async () => ({
        db
    })

})

console.log(`Apollo Server listening in the url : ${url} `)
