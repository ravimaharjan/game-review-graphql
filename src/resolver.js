import { games, authors, reviews } from "./db.js";

const resolver = {
    Query: {
        games() {
            return games
        },
        game(parent, args) {
            return games.find(game => game.id === args.id)
        },

        authors() {
            return authors
        },
        author(parent, args) {
            return authors.find(author => author.id === args.id)
        },
        reviews() {
            return reviews
        },
        review(parent, args) {
            return reviews.find((review) => review.id === args.id)
        }
    },

    Game: {
        reviews(parent) {
            return reviews.filter(review => review.game_id === parent.id)
        }
    },
    Review: {
        author(parent) {
            return authors.find(author => author.id === parent.author_id)
        },
        game(parent) {
            return games.find(game => game.id === parent.game_id)
        }
    },
    Author: {
        reviews(parent) {
            return reviews.filter(review => review.author_id === parent.id)
        }
    }
}

export default resolver;