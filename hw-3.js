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
   case '1':
      console.log('зима');
      break;
   case '2':
      console.log('зима');
      break;
   case '3':
      console.log('весна');
      break;
   case '4':
      console.log('весна');
       break;
   case '5':
      console.log('весна');
      break;
   case '6':
      console.log('лето');
      break;
   case '7':
      console.log('лето');
      break;
   case '8':
      console.log('лето');
      break;
   case '9':
      console.log('осень');
      break;
   case '10':
      console.log('осень');
      break;
   case '11':
      console.log('осень');
      break;
   case '12':
      console.log('зима');
      break;
   default:
      console.log('Ошибка');
}

