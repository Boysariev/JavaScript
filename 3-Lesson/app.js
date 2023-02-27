// IF ELSE
// if yozishimis shart (condition yozishimis shart nma bo'lsa ham faqat true false qaytaradigan) {qanqa ish bajarmoqchimiz bo'lsak ushani yozishimiz shart}
// let light = true
// // let light = false
// // Bu agar ikkta holat ifodalagnimzda if(true/false) {console.log()} else {console.log()} ishlatiladi
// if (light) {
//     console.log('light on'); // agar true bo'lsa light on holat ishlidi
// } else {
//     console.log('light off'); // agar false bo'lsa light off holat ishlidi, else dan sung faqat {guli qvus ochiladi, sababi bu agar boshqa variant bomasa wunda ishlatamiz}
// }
// let light = 'on'
// light = 'demaged'
// light = 'off'

// Else If vs Else => farqi agar else if bo'lsa birinchisini kurib true bo'lsa keyngisini tekshirib utirmaydi, lekin else dan foydalansak bita bita tekshirib chiqadi.
// else if = if () {} => davomini si dip chunuladi
// if(light === 'on') {
//     console.log('light is working');
// } else if (light === 'off') {
//     console.log('light is not working');
// } else if (light === 'demaged'){
//     console.log('light is demaged');
// }

// Example
// Else har doim if ni tugaganligin bildiradi
// Agar holatamizda faqat console.log bita bo'lsa {guli qavus yoziwimiz shart bulmydi}
// let weather = 30
// if(0 > weather) {
//     console.log('havo juda sovuq');
// } else if (0 < weather && 10 >= weather) {
//     console.log('havo issiq');
// } else if (10 < weather && 20 > weather) {
//     console.log('havo juda issiq');
// } else {
//     console.log('bunday malumot mavjud emas');
// }

// Ternary operators faqat ikkta holat boganda ishlatiladi va true va else bulsa ishlatiladi
// ? console.log() :  synt
// if () and ? birxil

// let light = true 
// if(light){
//     console.log('turn on');
// } else {
//     console.log('turn off');
// }
// console.log sung hardoim : ikkta nuqata yozilishi shart ternary operators da bu else manosini beradi yozilmasa error beradi 
// if true                   else digani false
// light? console.log('tunr on') : console.log('turn off');

let temp = 0
console.log(1 || temp); // 1
console.log(temp || 1); // 1

console.log(1 && temp); // 0
console.log(temp && 1); // 0

// null and undefiend kelsa false qabul qiladi agar null bilan undefiend bolmasa true qabul qiladi
console.log(1 ?? temp); // 1
console.log(temp ?? 1); // 0