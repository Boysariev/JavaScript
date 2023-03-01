
// Objectda key orqali yozib ketsaylik boladi
// let obj = {name: 'Webbrain', title: 'It Center', data: {year: 1999}}
// console.log(obj.name); // Nuqta yozmasdan name bilan titlaga access qanaqib qilinadi?
// Buning uchun Destraction objectdan foydalanamiz
// synt =>  let {} = obj
// let {name, title, age} = obj // bu objects ichidegi name bilan title olib beradi, tartibini ahamyati yo'q, structurasini yangilab qaytatan chiqarib beradi
// console.log(age);  // age bizani ishimzda yo'q agar yoq boladigan bolsa undefiend chiqaradi
//  let name = 'Webbrain' 
// Agar bizada ikkta birhil malumotchi bolsa biz bitasini nomini uzgartirishimiz kire biz bu uchin
//  let {name: newName, title, data} = obj; // : nuqta yoziladi va ikkta nuqtadan sung yangi key yozamiz
//  console.log(data.year); // bu malumotni ichiga kirishimiz uchun . bilan year dp yozishimiz kire
//  let {name: newName, title, data:{year}} = obj // agar biz datani oldidan : nuqta yozadigan bolsak keyin {} guli qavus quyadigan bolsak object ichidegi boshqa objecti distraction qilebti deydi
//  console.log(obj);


// Hudu shu narsani arrayga nisbatanham ishlatsak boladi
// Arrayda aniq index orqali yozib ketishimiz kire
// let ar = ['apple', 'orange', 'Kiwi'];
// synt => let [] = ar
// let [bir, ikki, uch] = ar
// console.log(bir); // 'apple'
// sprea operator diyiladi
// ...res agar malumot kop boladigan bolsa ...res dan foydalanamiz
// let [bir, ...res] = ar
// console.log(res); // 'orange', 'kiwi'


// Destractiondi Function parametirida ishlatib ketsak ham boladi 
// const getData = (data) => {
//     console.log(data);
// } 
// getData({name: 'web', id: 1}) // {name: 'web', id: 1 }
 
// {} qaytadan oziga tegnglash bilan bir hil boladi, lekin uni qaytarib bulmaydi
// Destraction fun => const getData = ({}) => {}
// const getData = ({ name, id }) => {
//     console.log(name, id);
// } 
// getData({name: 'web', id: 1}) // web 1

// Agar Data undefiend kursatsa Defult parametr (data ={}) shunday qilib quysak boladi object bolgandan keyib optional change ishlatib ketolamz
// Data undefiend bulsa , Nested bulsa
// const getData = (data ={}) => {
//     console.log(data?.name, id);  // Bu error beradi
// } 
// getData({name: 'web', id: 1}) // web 1

// const getData = (data) => {
//     console.log(data.name && data.name, id);  // Bu error beradi
// } 
// getData({name: 'web', id: 1}) // web 1

// let obj = {name: 'Webbrain', title: 'It Center', data: {year: 1999}}
// Object.entries(obj).map((value, index)=> {
//     console.log(value);
// }) // ['name', 'webbrain']
 // ['title', 'It Center']
 // ['data', { year: 199} ] 
// Object.entries(obj).map((valu, index)=> () {
//     console.log();
// })
 // Run time vaqtida distraction qilib ketish
//  let obj = {name: 'Webbrain', title: 'It Center', data: {year: 1999}}
//  Object.entries(obj).map(([key, value], index)=> {
//      console.log(value);
//  }) // Webbrain
 // It Center
 // {year: 1999}

 ///////////////////////////////////////////

 // New Data
 
// Constructer Data
// let data = new Date()
// console.log(data); // 2023-02-27T16:2 9:12.546Z
// // console.log(Date.now()); // 1677515527260 //  1970 yildan boshlab secundlani chiqarib beradi
// console.log(data.getTime()); // 1677515667053 // bir hil date.now
// console.log(data.getDay()); //  1 //  Dushanba
// console.log(data.getDate()); //  27 //  Kun
// console.log(data.getMonth()); //  1 //  Oy
// console.log(data.getFullYear()); //  2023 //  Yill
 
// Example
// const getToday =() => {
//     let date = new Date();
//     //                                                 + 1 chunki index 0 dan boshlanadi
//     return `Today: ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
// }
// console.log(getToday()); // Today: 27-2-2023

// const getToday = () => {
//     let date = new Date()
//     return `Today: ${date.getDay}-${}`
// }
// // 2 Example
// const getDay =(symbol) => {
//     let date = new Date();
//     //                                                 + 1 chunki index 0 dan boshlanadi
//     return `Today: ${date.getDate()}${symbol}${date.getMonth() + 1}${symbol}${date.getFullYear()}`
// }
// console.log(getDay('/')); // Today: 27/2/2023

// // 3 Example
// let weeks = ['Dushanbi', 'Seshanbi']
// let date = new Date()
// console.log(weeks[date.getDay()].slice(0,4)); // Sesh

// console.log(date.getHours()); // 22 soat
// console.log(date.getMinutes()); // 25 minut utdi
// console.log(date.getSeconds()); // 1 sekond
// console.log(date.getMilliseconds()); // 1 millisekond


//////////////////////////////////////////////////////

// Jyson - JavaScript Object Notation, Konfigiratsiya fayilari backend bilan malumot oldi berdi qilingan vaqtida ishlatiladi
// Used with APIs and Config files

// let user = {name: 'Webbrain', year: 1234567}
// // Object to JSON
// console.log(JSON.stringify(user)); // {"name":"Webbrain","year":1234567}

// Replacer
// let user = {name: 'Webbrain', year: 1234567, age: 12, data: 'Webbrain academy', founded: 1999}
// //                           value          replacer                   indentation
// console.log(JSON.stringify(user, ["name", "year", "data", "founded"], 1 )); // {"name":"Webbrain","year":1234567}
// let json = JSON.stringify(user)

// // Json to parse Default object qaytarib beradi
// let obj = JSON.parse(json)
// console.log(obj);
