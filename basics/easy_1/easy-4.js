const readline = require('readline-sync');

console.log('Please enter total bill:');
let bill = parseFloat(readline.question());

console.log('Please enter tip percentage:')
let percentage = parseFloat(readline.question());

let tip = bill * (percentage / 100);
let total = bill + tip;

console.log(`The tip is $${tip}`);
console.log(`The total is $${total}`);
