const game = {
    reviews({ id }, { filter }, { reviews, authors }) {
        const hasFilter = filter?.authorVerified !== undefined ? true : false;
        const filteredReviews = reviews.filter(review => review.game_id === id);

        if (!hasFilter) return filteredReviews;

        const verifiedAuthorsSet = new Set();

        authors.forEach(author => {
            if (author.verified === filter.authorVerified) verifiedAuthorsSet.add(author.id);
        })

        return filteredReviews.filter(review => {
            return verifiedAuthorsSet.has(review.author_id);
        })
    }
}

export default game;