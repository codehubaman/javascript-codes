
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Hello from the promise');
        resolve();
    }, 2000);
}).then(() => {

    console.log('Promise Resolved');

}).catch((error) => {
    console.log('Promise rejected:', error);
});


