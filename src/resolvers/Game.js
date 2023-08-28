const game = {
    reviews({ id }, args, { reviews }) {
        return reviews.filter(review => review.game_id === id)
    }
}

export default game;