// const myNums = [1, 2, 3];

// const myTotal = myNums.reduce((acc, currval) => {
//     console.log(`accumulator: ${acc}, current value: ${currval}`);  // for debug purpose
//     return acc + currval;
// }, 0 )

// console.log(myTotal);


const shoppingCart = [
    { name: "apple", price: 1.50 },
    { name: "banana", price: 0.75 },
    { name: "orange", price: 1.25 }

]

const total = shoppingCart.reduce((acc, item) => {
    return acc + item.price;
}, 0)

console.log(`The total cost is ${total}`);


// let total = 0;
// shoppingCart.forEach((item) => {
//     price = item.price;
//     total += price;
//     console.log(`The price of ${item.name} is ${price}`);

// })
// console.log(`The total cost is ${total}`);
