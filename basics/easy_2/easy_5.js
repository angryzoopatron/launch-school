const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`)
}

prompt('Enter first number:');
let num1 = Number(readline.question());

prompt('Enter second number:');
let num2 = Number(readline.question());

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${Math.pow(num1, num2)}`);
