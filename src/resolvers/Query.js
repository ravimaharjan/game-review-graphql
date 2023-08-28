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
    reviews(parent, args, { reviews, authors }) {
        const { filter } = args;

        // check if authorVerified filter is specified.
        const hasVerifiedFilter = filter?.authorVerified !== undefined ? true : false;
        console.log('args', args);
        if (!hasVerifiedFilter) return this.review;

        const verifiedAuthorSet = new Set();
        //first get the verified authors
        authors.forEach((author) => {
            if (author.verified === filter.authorVerified)
                verifiedAuthorSet.add(author.id);

        })
        // filter the reviews where authors are verified.
        const filteredReviews = reviews.filter(review => verifiedAuthorSet.has(review.author_id))
        return filteredReviews;

    },
    review(parent, args, { reviews }) {
        return reviews.find((review) => review.id === args.id)
    }
}

export default query;