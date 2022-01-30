let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

// Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

function sliceHouse(str) {
    return str.slice(0, str.indexOf('house'));
}

console.log(sliceHouse(advice));