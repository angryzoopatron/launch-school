function oddities(arr) {
  let arrCopy = [];
  for (let i = 0; i < arr.length; i += 1) {
    if ((i + 1) % 2 !== 0) {
      arrCopy.push(arr[i]);
    }
  }
  return arrCopy;
}

function extraEvens(arr) {
  let arrCopy = [];
  for (let i = 1; i < arr.length; i += 2) {
    arrCopy.push(arr[i]);
  }
  return arrCopy;
}




console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(extraEvens([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(extraEvens([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(extraEvens(["abc", "def"])); // logs ['abc']
console.log(extraEvens([123])); // logs [123]
console.log(extraEvens([])); // logs []