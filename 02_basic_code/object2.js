
// const user = new Object();

// user.name = "John Doe";



// const obj1 = {
//     1: "a",
//     description: {
//         name: "Jane Doe",
//         age: 30,
//         city: "New York"
//         , freeWork: {
//             hobbies: ["reading", "painting"]
//         }
//     }

// }
// console.log(obj1.description.freeWork.hobbies[1]);
// const obj2 = { 2: "b" }
// const obj3 = { 3: "c" }
// // there is problem of putting of object ke anadar object
// const obj5 = { obj1, obj2, obj3 };
// // console.log(obj5); //{ obj1: { '1': 'a' }, obj2: { '2': 'b' }, obj3: { '3': 'c' } }


// // better way to assign objects to new object.assign(target,source)
// const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);

// // ++++++++++++++best way to assign objects  is SPREAD OPERATOR

// const obj6 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj6);



// // ++++++++++ array of objects ++++++++++++++++
// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     }]
// // const tinderUser = new Object()
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false


// //users[1].email
// // console.log(tinderUser);

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "aman"
// }

// // course.courseInstructor
// //++++++++++++++++   OBJECT  DESTRUCTURING  ++++++++++++++++
// const { courseInstructor: instructor } = course;

// // console.log(courseInstructor);
// console.log(instructor);

// // json format from API
// // {
// //     "name": "hitesh",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]




// if (true) {
//     let a = 45;
//     //console.log(a);
// }
// console.log(a);
