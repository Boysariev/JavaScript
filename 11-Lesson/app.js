// Filter
// Find 
// Filter vs Find
// Sort
// Every
// Some
// Array.from

// forEach
// Map
// Fill
// copyWithin
// Flat
// flatMap
// Reduce


// Filter malumotlarni biz bergan shartga mos kelganini qoldiradi shartimizga mos kelmaganini chiqarib yuboradi, CallBack function qabul qiladi
// let num = [1, 2, 3, 4, 5, 6, 7]
// let ar = ['Orange', 'Apple', 'Kiwi']
// ar.filter((value, index) =>{
//     console.log(value, index); // Orange 0, Apple 1, Kiwi 2
// })


// Filter hardoim uzidan qiymat qaytaradi, hardoim return qiytaradi, return dan keyingi yoziladigan malumot muxum
// let num = [1, 2, 3, 4, 5, 6, 7]
// let ar = ['Orange', 'Apple', 'Kiwi']
// let res = ar.filter((value, index) =>{
//     console.log(value, index);
//     // if(value.includes('a')) 
//     return value.includes('e');
// })
// console.log(res);
    // console.log(value, index);


// Find vs Filter 

// Filter har bir malumotga birma bir kir chiqadi, malumotni topsa ham boshqa malumotlarni tekshirib chiqyapti
// let num = [1, 2, 3, 4, 5, 6, 7]
// let ar = ['Orange', 'Apple', 'Kiwi']
// let res = num.filter((value, index) => {
//     console.log(value);
//     return value === 3;
// })
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// [3]

// Find topmoqchi bugani narsezi toptizmi boldi boshqasini tekshirib utirmaydi, array ichhida qaytarmidi
// let num = [1, 2, 3, 4, 5, 6, 7]
// let ar = ['Orange', 'Apple', 'Kiwi']
// let res = num.find((value, index) => {
//     console.log(value);
//     return value === 3;
// });
// 1
// 2
// 3
// 3


// Sort malumotlani joylashish urnini o'zgartiradi, 0 dan 9 gacha bugan raqamni tugri sartirovka qiladi agar 9 dan katta bularkan bulsa sartirovka buzuladi
// let num = [4, 2, 3, 5, 9, 1, 7]
// let ar = ['Orange', 'Apple', 'Kiwi']
// num.sort()
// console.log(num);
// [1, 2, 3, 4, 5, 7, 9]

// Sortda agar 9 dan baland son buladigan bulsa biz callBack functiondan foydlanamiz va callBack fun hardoim returnga qaytishi kerak
// let num = [43, 67, 23, 34, 19, 61, 77]
// let ar = ['Orange', 'Apple', 'Kiwi']
// num.sort((a, b) => b - a) // [77, 67, 61, 43, 34, 23, 19] // katasidan boshlab kichkinasiga qarab sartirovka qilib beradi
// num.sort((a, b) => a - b) // [19, 23, 34, 43, 61, 67, 77] // kichkiniasidan boshlab katasiga qarab sartirovka qilib beradi
// console.log(num);

// Sortda stringni tugri almashtirish uchun localCopmare() ishlatiladi
// let ar = ['Orange', 'Apple', 'Kiwi']
// ar.sort((a, b) => a.localeCompare(b))
// console.log(ar);


// Every hammasi digan manoni bildiradi, callBack fun oladi, agar hammasi true bulsa true qayataradi agar bitasi false buladigan bulsa false qaytaradi
// let num = [43, 67, 23, 4, 19, 61, 77]
// let ar = ['Orange', 'Apple', 'Kiwi']
// let res = num.every((value)=>value > 0) // false chunki bita -34 raqam bor
// let res = num.every((value)=>value > 0) // true chunki hammsi + son
// console.log(res); 


// Some check some if item and return true
// let num = [43, 67, 23, -4, 19, 61, 77]
// let ar = ['Orange', 'Apple', 'Kiwi']
// let res = num.every((value)=>value > 0) // false chunki bita -34 raqam bor
// let res = num.every((value)=>value > 0) // true
// console.log(res); // false


// Array from bizaga array yasab beradi, birinchisi array bulishi kerak ikkinchisi callBack fun, string va array qabul qoladi nomer olmaydi bush array chiqaradi
// let ar = Array.from('Nursulton')
// console.log(ar); // ['N', 'u', 'r', 's', 'u', 'l', 't', 'o', 'n'] 

// Stringni Number utgazishimiz uchun callback func foydalanamiz Number qushimchasi bilan
// let num = '12345'
// let ar = Array.from(num, (v) => Number(v))
// console.log(ar); // [1, 2, 3, 4, 5]


// forEach vs Map

// forEach callBack function oladi, bunda biz return digan chuncha yo'q, for ga oxshaydi, 
// Syntx
// array.forEach(function(currentValue, index, arr), thisValue)
// let num = [2, 3, 5, 56, 66, 76, 68]
// let res = num.forEach((value, index)=> {
//     console.log(value);
//     return true;
// })
// console.log(res); // undefiend qaytaradi, return hech qanaqa rol uynamidi

// Map hamma holata malumot qaytaradi
// let num = [2, 3, 5, 56, 66, 76, 68]
// let res = num.map((value, index)=> {
//     console.log(value);
//     return true;
// })
// console.log(res); // [true, true, true, true, true, true, true] yangi array qaytaradi, returnda nma dip yozselik ushani qaytaradi


// Fill (value, startIndex, endIndex) - filling, urniga joylashtirganimzda ishlatiladi
// let num = [1, 2, 3, 5, 6]
// num.fill(3, 2, 3)
// console.log(num); // [1, 2, 3, 5, 6] 4 ni urniga 3 quydik


// copyWithin 3 ta parametr qabul qiladi(tardgetpos, start, end), indexni joylarini uzgartirish, biz qancha malumot kesob olasak urniga joylashashadi
// let num = [1, 2, 3, 5, 6]
// num.copyWithin(0, 3, 5)
// console.log(num); // [5, 6, 3, 5, 6]


// Flat
// let num = [[1, [2, [3], 5], 6]]
// console.log(num.flat(2)); // [1, 2, 3, 4, 5, 6] // qavuslani delete qilib tashlaydi
// Aagar malumotni ichida nechta qavus qatnashganini bilmasak biz (infinity) dan foyldalanamaiz
// console.log(num.flat(Infinty));


// FlatMap callback function
// let num = [2, 3, 5, 56, 66, 76, 68]
// let res = num.flatMap((v) => v)
// console.log(res);

// let arr1 = [1, 2, 3, 4];

// arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

// arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// выравнивается только один уровень
// arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]


// Reduce  callBack function oladi
// let n = [2, 3, 5, 56, 66, 76, 68]
// let res = n.reduce((cur, value) => {
//     console.log( cur, value);
//     return 1;
// }, 0);
// console.log(res);
// 0 2
// 1 3
// 1 5
// 1 56
// 1 66
// 1 76
// 1 68
// 1

let n = [2, 3, 5, 56, 66, 76, 68]
let res = n.reduce((cur, value) => {
    console.log( cur, value);
    return cur + value;
}, 0);
console.log(res);
// 0 2
// 2 3
// 5 5
// 10 56
// 66 66
// 132 76
// 208 68
// 276