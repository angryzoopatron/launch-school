const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(integer) {
  if (integer === 0) {
    return '0';
  }
  let num = integer;
  let stringNumber = '';

  while (num > 0) {
    let mod = num % 10;
    stringNumber += NUMBERS[mod];
    num = Math.floor(num / 10);
  }
  return stringNumber.split('').reverse().join('');
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"