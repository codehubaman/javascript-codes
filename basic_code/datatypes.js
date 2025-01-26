"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser



let Name = "aman"
let age = 21
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof Name);


// Non primitive data types

let arr = ["aman", "patel"];

// object 
let obj = {
    name: "aman",
    age: 21
}


console.log(typeof (obj));  // object

// function
const myFunction = function () {
    console.log("hello");
    console.log(typeof myFunction); // function

}
myFunction();

