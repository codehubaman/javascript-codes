const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = myNumbers.map((n) => {
    return n * 2;
})
console.log(newNumbers);

myNumbers.forEach((n) => console.log(n)); // 1 2 3 4 5 6 7 8 9 10