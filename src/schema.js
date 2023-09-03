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

type Mutation {
    addAuthor(input:addAuthorInput!):Author!
    addGame(input: addGameInput!): Game!
    addReview(input: addReviewInput!): Review!
    deleteAuthor(id: ID!): Boolean!
    deleteReview(id: ID!): Boolean!
    deleteGame(id:ID!):Boolean!
    updateAuthor(id: ID!, input: addAuthorInput!): Author!
    updateGame(id: ID!, input: addGameInput!) : Game!
    updateReview(id: ID!, input: addReviewInput!): Review!
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

input addAuthorInput {
    name: String!
    verified: Boolean!
}

input addGameInput {
    name: String!
    platform: [String!]!
}

input addReviewInput {
    rating: Int!
    content: String!
    author_id: String!
    game_id: String!
}
`

export default typeDefs

/**
 * - We have applied filter in two places. One in the Query type and other in the Game type.
 *   Since reviews is the query type resolver we keep it in the filter
 *   But getting the filtered reviews of the specific game is part of the Game type. so we need to 
 *   keep filter in the Game type itself.
 */