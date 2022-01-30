let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// Create a new array that contains all of the above values, but in an un-nested format:

let arr = [].concat(...flintstones); // need to remember this

console.log(arr);
