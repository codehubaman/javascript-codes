// // // this keyword  points to the current context  value


// // arrow function does not provide its own 'this' value, it uses the 'this' value of the surrounding scope (in this case, global scope).

// // // arrow function line 25
// // const num = {
// //     name: "aman",
// //     balance: 4500,
// //     withdraw: function () {
// //         console.log(`${this.name} balance is ${this.balance}`);
// //         // pointing  to the current context
// //         console.log(this);
// //     }
// // }

// // num.withdraw();
// // // changing the context 
// // num.name = "meet";
// // num.withdraw();

// // //this operator
// // // in nodejs environment the global content is {}  so this points to empty string
// // // console.log(this); // output {}
// // // console.log(num); // output { name: "aman", balance: 4500 }
// // console.log(this.value); // undefined



// //   ARROW FUNCTION

// function num1() {
//     let username = "aman";
//     console.log(this); // output  provides value of context 
// }
// // arrow function
// num1();
// // const num2 = () => {
// //     let username = "aman";
// //     console.log(this); // output 
// // }
// // num2();// output undefined

const num3 = function () {
    let username = "aman";
    console.log(this.username); // output undefined  
}

num3();




// // arrow function does not provide its own 'this' value, it uses the 'this' value of the surrounding scope (in this case, global scope).

// // Arrow functions do not bind their own 'this' value, they instead use the 'this' value of the surrounding scope (in this case, global scope).

// const add = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(add(2, 3)); // output 5

// const add2 = (num1, num2) => num1 + num2;

// console.log(add2(2, 3)); // output 5

// const addTwo = (num1, num2) => ({ username: "hitesh" })
// const add3 = (num1, num2) => (num1 + num2);


let i = 1, j = 1;
console.log(`${i} * ${j} = 1`);