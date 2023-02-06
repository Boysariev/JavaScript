// if ()
// Switch case

let weather = 'Bulut';
weather = 'yomgir'
weather = 'quyosh'

switch(weather) {
    case 'Bulut':
        console.log('Bugun havo bulut');
        break;
    case 'Yomgir':
        console.log('Bugun havo yomgir');
        break;
    case 'Qiyosh':
        console.log('Bugun havo quypsh');   
        break;

    default: console.log('Bizda bunday malumot yuq');      
}


// For loop

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log('done');

for ( let i = 10; i >= 1; i--) {
    if (!(i % 2)) {
        console.log(i, 'Juft son');
    } else {
        console.log(i, 'Toq son');
    }
    // console.log(i, i % 2);
}
console.log('done');


for (var i = 1; i <= 10; i++) {
    if(i === 5) continue;
    console.log(i);
}

console.log(window);
// var - Global
// let - Scope

// While 
// agar true busa yuradi
// faqat bita case yoziladi

let i = 0
while(i <= 3){
    console.log(i, 'while');
}

do {
    console.log(i, 'do while');
} while(i)