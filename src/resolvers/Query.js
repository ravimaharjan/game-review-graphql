const query = {
    games(parent, { id }, { games }) {
        return games
    },
    game(parent, args, { games }) {
        return games.find(game => game.id === args.id)
    },

    authors(parent, args, { authors }) {
        return authors
    },
    author(parent, args, { authors }) {
        return authors.find(author => author.id === args.id)
    },
    reviews(parent, args, { reviews }) {
        return reviews
    },
    review(parent, args, { reviews }) {
        return reviews.find((review) => review.id === args.id)
    }
}

export default query;