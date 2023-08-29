import { v4 as uuid } from "uuid";

const mutation = {
    addAuthor(parent, { input }, { authors }) {
        const { name, verified } = input;
        const id = uuid()
        const newAuthor = {
            id,
            name,
            verified
        }
        authors.push(newAuthor)
        return newAuthor;
    },

    addGame(parent, { input }, { games }) {
        const { name, platform } = input;
        const newGame = {
            id: uuid(),
            name,
            platform
        }
        games.push(newGame);
        return newGame;
    },

    addReview(parent, { input }, { reviews }) {
        const { rating, author_id, game_id, content } = input;
        const newReview = {
            id: uuid(),
            rating,
            content,
            author_id,
            game_id
        }
        reviews.push(newReview);
        return newReview;
    },

    deleteAuthor(parent, { id }, { db }) {
        const initialLength = db.authors.length;
        db.authors = db.authors.filter(author => author.id !== id);
        const afterDeleteLength = db.authors.length;

        const deleted = initialLength !== afterDeleteLength ? true : false;

        // What we are trying to do here is set the author to null for reviews
        // when the author is deleted. But it will not work. Out schema requires
        // reviews to have author.
        // The better way to handle the deleted author in the reviews would be 
        // to check if author is valid or not in backend and send flag to UI.

        // db.reviews = db.reviews.map(review => {
        //     if (review.author_id === id) {
        //         return {
        //             ...review,
        //             author_id: null
        //         }
        //     } else {
        //         return review
        //     }
        // })
        return deleted
    },
    deleteReview(parent, { id }, { db }) {
        const initialLength = db.reviews.length;
        db.reviews = db.reviews.filter(review => review.id !== id);
        const afterDeleteLength = db.reviews.length;

        const deleted = initialLength !== afterDeleteLength ? true : false;
        return deleted;
    },

    deleteGame(parent, { id }, { db }) {
        const initialLength = db.games.length;
        db.games = db.games.filter(game => game.id !== id);
        const afterDeleteLength = db.games.length;

        // delete the corresponding reviews of the game
        db.reviews = db.reviews.filter(review => review.game_id !== id);

        const deleted = initialLength !== afterDeleteLength ? true : false;
        return deleted;
    }
}

export default mutation;