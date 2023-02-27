// String
let a = 233423
let b = '233423'
let c = "233423"
let d = `233423`
// Special chatacters
// let text = 'Webbrain \"IT\ Center'
// let text = 'Webbrain \"IT\" \in Center'
let str = 'Webbrain IT Center'
// let num = "1234567"

console.log([0]);
console.log(str.length);

// Accessing chars
// - by index [] - only positive numbers
// - by .at - can get minus value
// - by .charAt(index) - not minus value

console.log(str[0]);
// at vs charAt
console.log(str.at(0));
console.log(str.charAt(0));

console.log(str.at(-1)); // ohiri dan boshlab ayirish kire
console.log(str.charAt(-1)); // charAt faqat musbat raqam bilan ishlidi

// Methods
// -.length
// .at()
// indexOf() // shu suz bormi textda digan raqamini chiqaradi ciqaradi agar numasa -1 raqamini chiqarib beradi agar hamma suz bolsa 0 chiqaradi 
// lastIndexOf() // ohiridan boshlab keshirishni bowlaydi
// toUpperCase() // hammasini katta haripta yoziladi
// toLowerCase() // hammasini kichkina haripta yoziladi
// includes() // faqat true falsega qaytaradi
// endsWith() // anashu suz bilan tugidimi
// startsWith() // agar raqam tugri malumot kiritirgan bosa true noturi bo'lsa false chiqaradi
// Damvomi nuqata bo'lsa misol uchun (...) bo'lsa .padStart vs .padEnd() ishlatiladi
// .padEnd(count value) // 
console.log(str.padEnd('.', 10)); // birinchi suzdi tekshiradi agar so'z berilgan sondan kam b'olsa ... qushib quyadi ohiriga
console.log(str.padStart('.', 10)); // birinchi suzdi tekshiradi agar so'z berilgan sondan kam b'olsa ... qushib quyadi boshiga
// slice(0, 3) // textni kesib olishda ishlatiladi qaysi malumotdan qaysi malumotgacha kesib olish
// sunstr() // 
console.log(str.substr(2, 3)); // bbr // 2 dan boshlab 3 ni ham oladi
// sunstring() + va - malumatni qabul Qilmaydi
console.log(str.substring(2, 3)); // // 2 dan boshlab 3 gacha malumatni kesiib oladi, katta kichiklini almashtirib quysaylik avatamat tarishda oladi
console.log(str.substring(3, 1)) // 1 dan uchgacha
console.log(str.substring(2, -6)) // agar minus bo'lsa 0 dan keyingi qismigacha oladi
// eval() // arifmetik amamlni bajaradi
console.log(eval(2*4+4));
// trim() // boshi va ohiridegi bo'sh joylani ob tashlaudi faqat boshi va ohiridisidegi
let be = ' nursulton '
console.log(be.trim().length); //nursulton//
// trimEnd() // faqat ohiridegi bo'sh joyni o'chiradi
console.log(be.trimEnd().length); //  nursulton//
// trimEnd() // faqat boshidegi bo'sh joyni o'chiradi
console.log(be.trimStart().length); //nursulton  //
// split() // stringni arrayga utgazib beradi
// let num = "1234567"
console.log(num.split()); // ['1234567']
console.log(num.split().length); // 1 // sababi hammsi bita arrayda 
console.log(num.split("")); // ['1', '2', '3', '4', '5', '6', '7'] // hammasini alohida arrayga joylashtirib beradi
console.log(num.split().length); // 8 // sababi hammsi bita bita arraydan tashkil toogan
console.log(num.split(" ")); // ['1', '2', '3', '', '4', '5', '6', '7'] // hammasini alohida arrayga joylashtirib beradi
console.log(num.split().length); // 9 // sababi bo'sh element bolsa uniham hisoblaydi
let num = "1,234,567" // sanoq sistemaga achratilgan
console.log(num.split(",")); // ['1', '234', '567'] // virgul korgan joyda alohida element qiladi
// concat() - concinitaion qisqartrimasi, malumtlani bir biriga qushishda ishlatiladi
console.log(num.concat(str));
// strinRaw() // back teg
let sr = string.raw`ceded
cdscd
cdcvd
cdcd`
console.log(sr); // ceded
// cdscd
// cdcvd
// cdcd // stringraw da nma yozgan bulsak usha javob chiqadi
// search()
console.log(str.indexOf("ad")); // 12
console.log(str.search("ad")); // 12 
// indexOf() vs search()
console.log(str.indexOf("a", 7)); // 7dan keyngi a ni qidir diganimzda (,) raqam yoziladi 
console.log(str.search(/B/i)); // regeks foydalansak boladi, indexOf dan regeik foydalanaib bolmaydi
// Loop, for of - valueni chiqarib beradi, string ichida har bir malumotni chiqarib beradi
for(n of num) {
    console.log(n);
}
// LocalCompare() // 
console.log(str.localeCompare('web')); // 1 // web digab so'z bulsa 1 chiqaradi, 100 === 100 teng bolsa 0 chiqaradi, agar unaqa so'z bolmasa -1 chiqaradi
