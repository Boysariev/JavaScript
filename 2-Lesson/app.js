// Type Convertions => malumotlarni tipini uzgartirish
// console.log(1 + '1'); // 11 => number + string = string
// console.log(1 + +'1'); // 2 => number + +string = number

// Number constructor 
// let a = '1'
// let b = '1.2'
// let c = '1.2s'
// console.log(Number(a)); // 1 // it turn on Number
// console.log(Number(b)); // 1.2 // it turns to Number
// console.log(Number.parseFloat(b)) // 1.2 // it takes all numbers
// console.log(Number.parseFloat(c)) // 1.2 // it doesnot matter if added word on number parseFloat can ignore words and takes only numbers
// shorts way
// console.log(parseFloat(c)) // 1.2
// parseInt => takes only first main number for example:
// let a = '1.2'
// console.log(Number.parseInt(a)); // 1

// Boolean Constructor
// true // 1, " ", "ixtiyoriySatr"
// false // 0, undefiend, null, ''
console.log(Boolean(1)); // true
console.log(Boolean(" ")); // true 
console.log(Boolean("0")); // true 
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false 
console.log(Boolean(null)); // false

// Arithmetic Operators => +, -, *, /, **, %
console.log( 1 + 4); // 5
console.log( 1 * 4); // 4
console.log( 1 - 4); // -3
console.log( 1 / 4); // 0.25
console.log( 1 % 4); // 1
console.log( 3 ** 4); // 3 * 3 * 3 * 3 => 3 ** 4

// Incriment vs Dicriment
// let a = 5
// a++ => postfix increment => a = a + 1
console.log(a++); // 5
console.log(a); // 6
// ++a => prefix increment => a = a + 1
console.log(++a);
// a-- => posfix decrement => a = a - 1
// --a => prefix ecrement => a = a - 1

// let b = 10;
b++; // 11
++b; // 12
b--; // 11
b++; // 12
++b; // 13
b--; // 12
++b; // 13
b++; // 14
console.log(b++); // 14++
console.log(b); // 15

// Obrivatinos
let num = 5;
// num * num => num ta

// Comparision faqat true falsega qaytadi
let a = 10;
let b = 11
let c = 11

console.log(a < b); // true
console.log(a > b); // flase
console.log(c < b); // flase c b dan kichkinamas
console.log(c <= b); // true
console.log(c >= b); // true
console.log(c == b); // c b ga tengmi
// console.log(c =< b); // error