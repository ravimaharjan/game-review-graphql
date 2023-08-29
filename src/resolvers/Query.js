const query = {
    games(parent, args, { db }) {
        return db.games
    },
    game(parent, args, { db }) {
        return db.games.find(game => game.id === args.id)
    },

    authors(parent, args, { db }) {
        return db.authors
    },
    author(parent, args, { db }) {
        return db.authors.find(author => author.id === args.id)
    },
    reviews(parent, args, { db }) {
        const { filter } = args;

        // check if authorVerified filter is specified.
        const hasVerifiedFilter = filter?.authorVerified !== undefined ? true : false;
        console.log('args', args);
        if (!hasVerifiedFilter) return db.reviews;

        const verifiedAuthorSet = new Set();
        //first get the authors that match the verified flag set by the client.
        db.authors.forEach((author) => {
            if (author.verified === filter.authorVerified)
                verifiedAuthorSet.add(author.id);

        })
        // filter the reviews where authors are verified.
        const filteredReviews = db.reviews.filter(review => verifiedAuthorSet.has(review.author_id))
        return filteredReviews;

    },
    review(parent, args, { db }) {
        return db.reviews.find((review) => review.id === args.id)
    }
}

export default query;