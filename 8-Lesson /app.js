// Numbers

// ->  Numbers types 
// Intiger - butun sonlar
// Float - kasr sonlar

// let a = 1000000 // 1 million
// let b = 1_000_000_000 // Underscore '-' - kuzga oson va chunarli uqiliw ucun ishlatiladi boshqa hech qanaqa hususiyati yo'q
// console.log(a, b);
// console.log(a == b);
// Ikkalasiniyam natijasi bir xil buladi va bir biriga teng boladi

// Float - kasir sonlar, kasir qisimga kiruvchi qanaqa son bolsa hammasini ifodalashda manashu floatdan foydalanamiz
// let fr = 1.2
// let fl = 1.3

// Number constakori - taksistlar 5.700 yokida 5.600 qilsa 5.000 ming bersam didi yani wunaqa vaqti biz sonni assosiy qismini yokida kasr qismini olishga har doim ehtiyoj sezamiz manusha vaqtlarda bizaga Number Constraktiri kire boladi!

// Number methods!
let fl = '1.3s'; // Bu  narsa raqamas wuning ucun Parse qilib berolmidi 
console.log(Number(fl)); // Bu qismida NaN Beradi chunki harif qatanshgan 
// Alternativ sifatida biz
console.log(parseInt(fl)); // ParseInT - butun qismini obersa, kasr soni faqat butun qismini olib beradi, qaregacha raqam bolsa ushergacha raqam chiqaradi uyogini Ignore qiladi
console.log(parseFloat(fl)); // Float - raqamni uzini, son qanaqa qisimda bo'lsa soni olib beradi, qaregacha raqam bolsa ushergacha raqam chiqaradi uyogiga String chiqaradi

//  let a = '1';
//  let b = 3;
 // Agar bitassi Raqam bitasi Number bu avtamatik typing String utkazib ikkta String yomon yon joylashtirib quyadi
//  console.log(parseInt(a) + b);
//  console.log(+a + b);

// Error 
//  let c = '1_000_000_000';
//  let d = 3;
//  console.log(+c + d);
// NaN will be Answer
 
// (e) represents 0
// 1 Billion has 9 zeros - '1e9' = 1_000_000_000
// let a = 10
// let b = 1e1 // Agar 1e2 disaylik 1 dab keyin 2 ta 0 bor diga, agar 1e5 disaylik 1 dan keyin 5 ta 0 bor digani
console.log(a + b); // Javob 20 Chiqadi sababi 10 + 1e1 digani 1 dan keyib 1 ta 0 bor digani
// 1e1 = 10
// 1e-1 = 0.1
// 1e-5 = 0.0001

// let a = 0.3
// let b = 0.2
// let c = 0.1
// console.log(c + b);

// rgba - dunyodegi barcha rang rgba dan tashkil topgan
// Binary ni Decimale qisimga utqizsaylikham boladi

// Math keywords - matimatik ammalani qushishda yordam beradi

// let a = 1.99
// PI
console.log(Math.PI);// 3.141592653589793
// Floor
console.log(Math.floor(a)); // Floor sondi butun qismini ovoladi
// Ceal
console.log(Math.ceil(a)); // Ceil szga qanaqa son beriwidan qati nazar eng yukorisini oladi
// Round
console.log(Math.round(a)); // Floor bilan ceal di altirnnativ hisoblanadi, agar sonni kasir qismi 5 va undan yuqori bo'lsa sonni asli qismini yuqoriga kutaradi, kasir qismini tashlab uzagini kutaradi, agar son 5 dan kichik bo'lsa 4 yoki undan kichik bolarkan bo'lsa Floor ga uhwab ishlidi, agar 5 dan yuqori bo'lsa Cealga uhwab ishlidi. Math.floor bilan Math.cealni dynamic ususli.
// let a = 1.4 // 1
// let b = 1.6 // 2
// Absalute - Abs
console.log(Math.abs(a));// Absaluate qisqartma shakli (abs) Son (+) buladimi (-) buladimi farqi yo'q

// Binary
// console.log(parsentInt('0010', 2));
 // 0000
 // 0001
 // 0010
 // 0011
 // 0100
 // 0101
//
let a = -1.5 // 1.5
let b = 1.5 // 1.5
// Trunc and Floor test with Negative
console.log(Math.trunc()); // Trunc sonni kasr qismini tushirib qoldiradi
// let a = -1.5 // -1
// let b = 1.5 // 1
// Trunc vs Fllor, Ceil and Round
console.log(Math.floor(a)); // Floor sondi butun qismini ovoladi
// let a = -1.5 // -2
// let b = 1.5 // 1
// Trunc vs Floorning, round, ceil farqi (-) minusli son buganida hardoim son nma bulishdan qati nazar kasr qismini tashlab yuboradida butun sonnini oladi, A ceil, floor, round esa tepaga intiladi agar 1.5 bulsa 2 ciqaradi.
// Random
console.log(Math.random(a)); // Random omad show uynidi, 1 bilan 0 di orasidegi raqami ciqarib beradi, demak bu bir lik son agar 100 ligka utqizishimiz uchun 100 ga ko'paytiramz
console.log(Math.random(a) * 100); // 12.35354
// ParsenInt with Random
console.log(parseInt(Math.random(a)* 100)); // 34 // ParseInt quysaylik butun son qaytaradi
// Min(numbers)
console.log(Math.min()); // Min eng kichik soni chiqarib beradi
console.log(Math.min(1, 3, 5, 6, 56, 75, 76, 36, 79)); // 1
// Max(numbers)
console.log(Math.max()); // Max eng katta soni chiqarib beradi
console.log(Math.min(1, 3, 5, 6, 56, 75, 76, 36, 79)); // 79
// Pow 
console.log(2 ** 4); // 16
console.log(Math.pow(2, 4)); // 16 // Pow darajasi
// Sign(number)
console.log(Math.sign(14)); // Sign(number) - return 1 if +, -1 if -, 0 if 0
// Sign Examples
console.log(Math.sign(3)); // 1
console.log(Math.sign(-3)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign('-3')); // -1
// Sqrt() 
console.log(Math.sqrt(4)); // 2 // Sqrt sonni kvadrdi
// Cbrt()
console.log(Math.cbrt(8)); // 2 // Cbrt sonni 3nchi darajasi

// Number Methods
let c = 3
console.log(c.toString); // Raqami stringa uzgartirib beradi
 // toStringni Binaryga utgazish uchun (qavus ichiga parametir yoziladi)
console.log(c.toString(2)); // 11
// Binaryni Numberga uzgartirish uchun parsenInt ishlatamiz
let d = 3
console.log(parseInt(d.toString(2), 2)); // 3
// isNaN 
console.log(isNan(12)); // false // isNaN Malumotni isNaN yoki isNaN masligini ifodalab beradi, True yoki Falsge qaytadi
// Example 
console.log(isNaN(12 * 'fed')); // true // chunki bundan qaytadigan amal NaN ga return qiladi
// toPrecision(prec)
let f = 3.123456
console.log(f.toPrecision(f)); //3.123456 // toPrecsison raqamlarni necgta songa kesib olishni aytib beradi
// Examples
console.log(f.toPrecision(2)); // 3.1 // 3 bilan 1 ta son bor dib chunadi chunki biz parametirga 2 dp yozdik agar 4 dip yozgamizida 3.123 dp chiqaradi
// To Fixed vs To Precision, to bilan boshlanadigan numbers String javob chiqadi
let g = 1.234567
console.log(g.toFixed(2)); // 1.23 // toFixed kasirdan keyin malumatni obkeb beradi
console.log(g.toPrecision(2)); // 1.2 // toPrecision raqamalani nechta songa kesib aytib beradi