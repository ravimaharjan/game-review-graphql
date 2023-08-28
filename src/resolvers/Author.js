const author = {
    reviews({ id }, args, { reviews }) {
        return reviews.filter(review => review.author_id === id)
    }
}

export default author;