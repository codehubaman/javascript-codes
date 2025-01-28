// for in loop not work on map
// on object 
const arr2 = {
    js: 'javascript',
    py: 'python',
    jv: 'java'
}

// for (const item in arr2) {
//     console.log(arr2[item]);
// }


// on map

const map = new Map();
map.set('name', "aman");
map.set('age', 21);
map.set('country', "India");

// console.log(map);

for (const [key, value] in map) {
    console.log(`key ${key} : value ${value}`);
}
// on array
const arr = [5, 6, 7];

// for (const items in arr) {
//     console.log(arr[items]);
// }



