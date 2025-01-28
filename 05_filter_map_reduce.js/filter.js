const myNums = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

myNums.filter((num) =>
    num > 10
)

console.log(myNums);
// forEach as a filter
const myCoding = [];

myCoding.forEach((num) => {
    if (num > 10) {
        myCoding.push(num);
    }
})


const book = [{
    title: "harry potter",
    author: "j.k.rowling",
    price: 120
},
{
    title: "the secret",
    author: "tom hanks",
    price: 100
},
{
    title: "the secret", author: "tom hanks", price: 100
}
]

// we have to return because we open the scope

const cheapBooks = book.filter((bk) => {
    return bk.price < 110;
})

console.log(cheapBooks);