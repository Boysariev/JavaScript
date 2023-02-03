// First Task

let browser = 'Safari'

switch (Safari) {
    case 'Edge':
        console.log('You have got the ${browser}');
        break;
    case 'Chrome':
        console.log('You have got ${browser}');    
        break;
    case 'Friefox':
        console.log('You have got ${browser}');
        break;
    case 'Safari':
        console.log('You have got ${browser}');
        break;
    case 'Opera':
        console.log('You have got ${browser}');
    default:
        console.log('We hope that this page looks ok!');            
}

// Second Task

let a = 1
a = 0
a = 1
a = 2

if (a == 0) console.log(0);
if (a == 1) console.log(1);
if (a == 2 || a == 3) console.log(2, 3);

// Third Task

let i = 3;

while (i) {
    console.log(i--);// 2, 1
} // finished coming to 0 and turns to false when it comes zero

// Fourth Task

i = 0;

while (i++ < 5) {
    console.log(i); // 1, 2, 3, 4
}
// 0 dan boshlangan sababli  ++inkriment bor edi

// Fives Task

i = 0

while (i++ < 5) {
    console.log(i); // 1, 2, 3, 4, 5
}

// Six task

for (let i = 0; i < 3; i++) {
    console.log('number ${i}');
}

i = 0
while (i < 3) {
    console.log('number ${i}');
    i++
} 
