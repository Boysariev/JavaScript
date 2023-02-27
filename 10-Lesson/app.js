// Array
// Array decloration
// let ar = []
// console.log(ar); // []

// biz ichiga elementlar qushishimiz kerak
// let str = {name: "Nursulton", surnName: 'Boysariev', course: 2}
// let univ = [str, str, str, str, str]
// console.log(univ); 
// Answer
// [
//     { name: 'Nursulton', surnName: 'Boysariev', course: 2 },
//     { name: 'Nursulton', surnName: 'Boysariev', course: 2 },
//     { name: 'Nursulton', surnName: 'Boysariev', course: 2 },
//     { name: 'Nursulton', surnName: 'Boysariev', course: 2 },
//     { name: 'Nursulton', surnName: 'Boysariev', course: 2 }
// ]
// Array indexda tashkil topgan a Object esa key and value dan tashkil topgan
//bitta array ichida bo'lsa hammasi bir boladi agar tashkarisida bo'lsa 2 nchi array boladi
// let univ = [[1, 2, 3, 4], 5]
// console.log(univ[0]);  // [1, 2, 3, 4]
// console.log(Object.keys(str)) // Keylarini chiqarib beradi
// console.log(Object.values(str)) // Value chiqarib beradi
// console.log(Object.entries(str)) // Nested arrayni chiqarib beradi
// console.log(Object.fromEntries([[ // Key and Value bulishi kerak faqat array holatida
//     'name', 'Nursulton'],
//     ['course', 2]
//   ])
// ); // Nested arraydan object yasab beradi

// New array
// let arr = new Array(4, 4)
// let name = new Array('webrrain')
// console.log(arr); // [4, 4]
// console.log(name); // ['webbrain]

// Ikkta arrayni bir biriga qushib chiqamz
// let ar = [1, 2, 3, 4]
// let ar1 = [4, 5, 6]
// console.log(ar.concat(ar1)); // Concat ar ni malumotini ar1 birga qushib quy digani
// console.log(ar.toString()); // toString arrayni string uzgartirib beradi

// Compression
// NaN premetive hard doim refrence qaytardi
// Malumotlar arrayni ichida bo'lsa
// if (ar.length) {
//     console.log('We have data');
// } else {
//     console.log('We have data');
// }

// [] == 0 // true 
// [] == '0' // false
// '' == 0 // true 
// '' == '0' // false

// Loops

// let ar = ['Orange', 'Apple', 'Kiwi']

// for(v in ar) { 
//     console.log(v); // in manashu malumotni indexini chiqaradi
// } // 0 1 2
// for(v of ar) {
//     console.log(v); // of manashu malumotni valuesi
// } // Orange Apple Kiwi

// Array Methods

// Push ohurudan malumot qushishni boshlaydi 
// let ar = ['Orange', 'Apple', 'Kiwi'];
// ar.push('Graphe')

// Unshift boshidan malumot qushishni boshlaydi
// ar.unshift('Style')

// shu malumotlani teskarisi

// Shift malumotni boshidan ayirishni bowlayadi
// ar.shift()

// Pop malumotni ohiridan olib tashlaydi
// ar.pop()
// console.log(ar)

// Slice vs Splice arrayni malumotini kesib olish uchun ishlatiladi
// let ar = ['Orange', 'Apple', 'Kiwi'];
let num = [1, 2, 3, 4, 5, 6, 7, 8]
// Slice
// console.log(num.slice(1, 4)); // 2, 3, 4 //  nechinchi indexdan boshlab kesib boshlimiz
                      // count
// Splice
// console.log(num.splice(1, 4)); // 2, 3, 4, 5//  nechinchi indexdan boshlab obshiy kesib oladi 

// indexOf nechicnhi qatorda turganini kursatadi bo'lmasa -1 chiqaradi
console.log(num.indexOf(4)); // 3 nchi qatorda turibti
 
// Includes true false qaytaradi
console.log(num.includes(5)); // true

// Reverse arrayni teskarisiga uzgartirib beradi
console.log(num.reverse()); // [8, 7, 6, 5, 4, 3, 2, 1]

// Join string uzgartirib beradi
console.log(num.join(' ')); // 8, 7, 6, 5, 4, 3, 2, 1
