const review = {
    author(parent, args, { db }) {
        return db.authors.find(author => author.id === parent.author_id)
    },
    game(parent, args, { db }) {
        return db.games.find(game => game.id === parent.game_id)
    }
}

export default review;