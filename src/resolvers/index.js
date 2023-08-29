import query from "./Query.js";
import game from './Game.js';
import author from "./Author.js";
import review from "./Reviews.js";
import mutation from "./Mutation.js";

const resolver = {
    Query: query,
    Game: game,
    Review: review,
    Author: author,
    Mutation: mutation
}

export default resolver;