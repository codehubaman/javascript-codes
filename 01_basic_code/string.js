

// const names = "aman"
// const repoCnt = 40;

// // way of writing  string in  string literal
// console.log(names + " has " + repoCnt + " repositories on Github");

// // back ticks and it is used  for  string  and palce is for placeholders
// console.log(` ${names} has ${repoCnt} repositories on Github  `); // output aman has 40 repositories on Github


// // another way to declaring string 

// console.log(names[0]);
const game = new String("cricket");

// console.log(game.toLowerCase()); // output cricket

// console.log(game .length); // output CRICKET


// console.log(game.charAt(3)); // output i

// console.log(game.indexOf("i")); // output 3

// console.log(game.slice(3, 4)); // output c   start index 3 and end index 4

console.log(game.slice(-5, -2));
// console.log(game.substring(0, 3)); // output cri


// // trim : remove the white spaces   from the string
// console.log(game.trim()); // output cricket

// // split : split the string into array

// console.log(game.split("")); // output [ 'c', 'r', 'i', 'c', 'k', 'e', 't' ]

// console.log(game.split("c")); // output [ 'ri', 'cket' ]

console.log(game.split("i")); // output [ 'cr', 'cket' ]

// console.log(game.split("").reverse()); // output [ 't', 'e', 'k', 'c', 'i', 'r', 'c' ]


// // replace : replace the string with another string

// console.log(game.replace("i", "o")); // output crocket



const url = "http://www.google.com";

console.log(url.replace("www", "o")); // output crocket
console.log(url);
