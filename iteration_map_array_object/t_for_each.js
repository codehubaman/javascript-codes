const coding = ["js", "css", "html", "python", "java"];

coding.forEach((item, index, coding) => {

    console.log(`${index + 1} :  ${item}`);
});


// for each loop take function as callback

// it take 3 arguments
// 1. current item in array
// 2. index of current item in array
// 3. array it's looping over

function PrintMe(item) {
    console.log(item);
}

coding.forEach(PrintMe);