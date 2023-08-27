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
    }
}

export default resolver;