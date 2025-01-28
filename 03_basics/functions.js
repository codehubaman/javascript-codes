

// function addTwo(nums) {
//     return nums + 2;
// }

// console.log(addTwo(5)); // output 7

// // expression add also called function 
// const add = function(nums2)
// {
//     return nums2 + 2;
// }

// console.log(add(5)); // output 7

// ++++++++++++++++Spread operator++++++++++++++++

function calculateCartPrice(a, b, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))    // output [ 500, 2000 ]