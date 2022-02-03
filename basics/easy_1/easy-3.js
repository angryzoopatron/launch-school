const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Enter the length of the room in meters:');
let length = readline.question();
prompt('Enter the width of the room in meters:');
let width = readline.question();

let sqMeters = length * width;
let sqFeet = sqMeters * 10.7639;



console.log(`The area of the room is ${sqMeters.toFixed(2)} square meters (${sqFeet.toFixed(2)} square feet)`)