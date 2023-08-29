const author = {
    reviews({ id }, args, { db }) {
        return db.reviews.filter(review => review.author_id === id)
    }
}

export default author;