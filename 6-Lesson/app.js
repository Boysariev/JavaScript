// Objects
// Key and Value
// Dynamic access to keys
// Deleting, creating and editing the elements
// Object.freeze() vs Object.seal()
// Abbrivation
// Object assign
// In

// Object -> 1
// let info = {}
// console.log(info);

// Object -> 2
// let studentScore = new Object()
// console.log(studentScore);

// Key and Value
// let info = {
//     name: 'Nursulton',
//     adress: 'Chilonzor',
//     phoneNumber: 888888888
// }
// console.log(info);

// Dynamic access to keys
let info = {
    "full name": 'Nursulton',
    name: 'Nursulton',
    adress: 'Chilonzor',
    phoneNumber: 888888888
}
 info.name = 'Boysariev'
console.log(info);
// .
// console.log(info.name);
// ['']
// console.log(info['name']);

// . vs ['']
// console.log(info["full name"]);
