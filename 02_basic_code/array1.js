
let arr1 = [1, 2, 3, 4];

let arr2 = new Array(1, 2, 3, 4);

// console.log(arr1);  // output [1, 2, 3, 4]
// console.log(arr2);  // output [1, 2, 3, 4]

// ++++++++++++++length property+++++++++++++++
// console.log(arr1.length); // output 4


// push method and pop method

arr1.push(5);  // add 5 at the end of array
// console.log(arr1); // output [1, 2, 3, 4, 5]

arr1.pop();  // remove last element from array
// console.log(arr1); // output [1, 2, 3, 4]

arr1.unshift(8);  // add 8 at the beginning of array
//console.log(arr1); // output [8, 1, 2, 3, 4]

arr1.shift();  // remove first element from array
// console.log(arr1); // output [1, 2, 3, 4]

// indexOf method
//console.log(arr1.indexOf(3)); // output 2

// slice and splice method

let arr3 = arr1.slice(1, 3);
console.log("Array1:", arr1); // output [1, 2, 3, 4]
console.log(arr3); // output [2, 3] 

let arr4 = arr1.splice(1, 2); // remove 2 elements from index 1

console.log("Array1", arr1); // output [1, 4]
console.log(arr4); // output [2, 3]
// concat method
let arr5 = arr1.concat(arr2);
console.log(arr5); // output [1, 4, 1, 2, 3, 4]
// original array remains same
console.log(arr1); // output [1, 4]

// string conversion 

let str = arr1.toString();
console.log(str); // output 1,4

// array conversion to string

let arr7 = [1, 2, 3, 4].join(",");
console.log(arr7); // output 1,2,3,4

let arr6 = str.split(",");
console.log(arr6); // output [ '1', '4' ]   // convert string to array 



