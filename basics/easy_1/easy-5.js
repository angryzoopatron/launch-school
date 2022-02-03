const readline = require('readline-sync');

function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i += 1) {
    sum += i;
  }
  return sum;
}

function productOfNumbers(num) {
  let product = 1;
  for (let i = 1; i <= num; i += 1) {
    product *= i;
  }
  return product;
}


console.log('Enter a number greater than 0:');
let number = readline.question();

console.log(`Sum or product of all numbers between 1 and ${number}?  Enter s/p.`)
let userChoice = readline.question();


if (userChoice === 's') {
  let sum = sumOfNumbers(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}`)
} else if (userChoice === 'p'){
  let product = productOfNumbers(number)
  console.log(`The product of the integers between 1 and ${number} is ${product}`)
} else {
  console.log('Invalid input');
}
