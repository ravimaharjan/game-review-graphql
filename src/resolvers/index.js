import query from "./Query.js";
import game from './Game.js';
import author from "./Author.js";
import review from "./Reviews.js";

const resolver = {
    Query: query,
    Game: game,
    Review: review,
    Author: author
}
console.log('resol', resolver);

export default resolver;