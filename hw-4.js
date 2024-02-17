//1.
let i = 0;

while (i < 2) {
    console.log('Привет');
    i++;
}

//2.
let a = 1;

while (a <= 5) {
    console.log(a);
    i++;
}

//3.
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

//4.
const obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400,
}

for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}

//5.
let num = 0;

for (b = 1000; b >= 50; b = b / 2) {
  num = num + 1;
  console.log(num); 
  console.log(b);
}


//6.
let firstFriday = 5;

for (let c = firstFriday; c < 31; c += 7) {
    console.log(`Сегодня пятница, ${c}-е число. Необходимо подготовить отчет.`);
}