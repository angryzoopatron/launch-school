let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// How can you determine whether a given string ends with an exclamation mark (!)?

function hasExclamation(str) {
    if (str.includes('!')) {
        return true;
    } 
    return false;
}

console.log(hasExclamation(str1));
console.log(hasExclamation(str2));