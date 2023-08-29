const game = {
    reviews({ id }, { filter }, { db }) {
        const hasFilter = filter?.authorVerified !== undefined ? true : false;
        const filteredReviews = db.reviews.filter(review => review.game_id === id);

        if (!hasFilter) return filteredReviews;

        const verifiedAuthorsSet = new Set();

        db.authors.forEach(author => {
            if (author.verified === filter.authorVerified) verifiedAuthorsSet.add(author.id);
        })

        return filteredReviews.filter(review => {
            return verifiedAuthorsSet.has(review.author_id);
        })
    }
}

export default game;