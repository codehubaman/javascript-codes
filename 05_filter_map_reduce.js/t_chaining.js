const Value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



const newNums = Value.map((n) => n * 10).map((n) => n + 2).filter((n) => n >= 45)

console.log(newNums); // [ 52, 54, 56, 58, 60 ]


