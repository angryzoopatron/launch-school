function stringToInteger(string) {
  let numArr = [];
  for (let i = 0; i < string.length; i += 1) {
    if (string.charAt(i) == 1) {
      numArr.push(1);
    } else if (string.charAt(i) == 2) {
      numArr.push(2);
    } else if (string.charAt(i) == 3) {
      numArr.push(3);
    } else if (string.charAt(i) == 4) {
      numArr.push(4);
    } else if (string.charAt(i) == 5) {
      numArr.push(5);
    } else if (string.charAt(i) == 6) {
      numArr.push(6);
    } else if (string.charAt(i) == 7) {
      numArr.push(7);
    } else if (string.charAt(i) == 8) {
      numArr.push(8);
    } else if (string.charAt(i) == 9) {
      numArr.push(9);
    } else if (string.charAt(i) == 0) {
      numArr.push(0);
    } else {
      break;
    }
  }
  let num = 0;
  numArr.forEach(digit => (num = (10 * num) + digit));
  return num;
}

function stringToSignedInteger(string) {
  let sign = 0;
  let newString = '';
  if (string.includes('-')) {
    sign = -1;
    newString = string.slice(1);
  } else if (string.inclues('+')) {
    sign = 1;
    newString = string.slice(1);
  }

  return (stringToInteger(newString) * sign);
}

console.log(stringToSignedInteger('-570') === -570);