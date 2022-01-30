let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

// Write two one-line expressions to count the number of lower-case t characters in each of the following strings:

console.log([...statement1].filter(letter => letter === 't').length);
console.log(statement2.split('').filter(letter => letter === 't').length);

