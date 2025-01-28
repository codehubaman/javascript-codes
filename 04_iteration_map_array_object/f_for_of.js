//  for of loop not used in
const arr = [1, 3, 5];

// for(const key of arr){
//    console.log(key);
// }
// for of on object
const result = {
    name: "aman",
    age: 21,
    country: "India"
}
// we cannot iterate over object using for of loop because object is not iterable on for of loop
// for (const [res,val] of result) {
//    console.log(`result ${res} : value ${val}`);
// }

// for of on map 
const map = new Map();
map.set('name', "aman");
map.set('age', 21);
map.set('country', "India");

console.log(map);

for (const [key, value] of map) {
    console.log(`key ${key} : value ${value}`);
}

