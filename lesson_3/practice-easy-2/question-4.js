let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and " in front of it.

let fourScoreAnd = 'Four score and ' + famousWords;

let fourScoreOr = 'Four score and '.concat(famousWords);

console.log(fourScoreAnd);
console.log(fourScoreOr);

