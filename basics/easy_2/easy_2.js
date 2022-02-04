const readline = require('readline-sync');

function yellAtMe(string) {
  if (string.includes('!')) {
    return `HELLO ${string.slice(0, string.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`;
  } else {
    return `Hello ${string}.`
  }
}