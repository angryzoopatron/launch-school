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

function signedIntegerToString(integer) {
  let sign = '';
  if (integer > 0) {
    sign = '+';
  } else if (integer < 0) {
    integer *= -1;
    sign = '-';
  }

  let signedString = integerToString(integer);

  return sign + signedString;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");