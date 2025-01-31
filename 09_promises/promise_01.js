// promise takes  function and return object
const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Hello from the promise');
        resolve();
    }, 2000);
})
const res = promise.then(() => {

    console.log('Promise Resolved');

}).catch((error) => {
    console.log('Promise rejected:', error);
});



