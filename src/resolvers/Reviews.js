const review = {
    author(parent, args, { authors }) {
        return authors.find(author => author.id === parent.author_id)
    },
    game(parent, args, { games }) {
        return games.find(game => game.id === parent.game_id)
    }
}

export default review;