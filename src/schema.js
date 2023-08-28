const typeDefs = `#graphql

type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
}

type Game {
    id: ID!
    name: String!
    platform: [String!]!
    reviews(filter: Filter): [Review!]
}

type Review {
    id: ID!
    rating: Int!
    content: String!
    author_id: String!
    game_id: String!
    author: Author!
    game: Game!
}

type Query {
    reviews(filter: Filter) : [Review]
    review(id:ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id:ID!) : Author
}

input Filter {
    authorVerified: Boolean
}
`

export default typeDefs

/**
 * - We have applied filter in two places. One in the Query type and other in the Game type.
 *   Since reviews is the query type resolver we keep it in the filter
 *   But getting the filtered reviews of the specific game is part of the Game type. so we need to 
 *   keep filter in the Game type itself.
 */