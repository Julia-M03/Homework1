//1.
let password = 'пароль';
let question = prompt('Введите пароль');

if ( question === password ) {
    console.log("Пароль введен верно");
 } else {
    console.log("Пароль введен неправильно");
 };

//2.
 let c = 2;

 if (c > 0 && c < 10) {
    console.log("Верно"); 
 } else {
    console.log("Неверно");
 };

//3.
 let d = 60;
 let e = 150;

 if (d > 100 || e > 100) {
   console.log("Верно");
 } else {
   console.log("Неверно");
 }

//4.
 let a = '2';
 let b = '3';
 alert(Number(a) + Number(b));

//5.
var monthNumber = Number(prompt("Введите номер месяца"));

switch (monthNumber) {
   case '12':
   case '1':
   case '2':
      console.log('зима');
      break;
   case '3':
   case '4':
   case '5':
      console.log('весна');
      break;
   case '6':
   case '7':
   case '8':
      console.log('лето');
      break;
   case '9':
   case '10':
   case '11':
      console.log('осень');
      break;
   default:
      console.log('Ошибка');
}

