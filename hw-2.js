//1.
let a = 20;
alert(a);

//2.
let date = 2007;
alert(date);

//3.
let userName = 'Brendan Eich';
alert(userName);

//4.
let x = 10;
let y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

//5.
let z = 2;
let result = z ** 5;
alert(result);

//6.
let b = 9;
let c = 2;
alert(b % c);

//7.
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//8.
let age = prompt('Сколько вам лет?');
alert(age);

//9.
let user = {
    name: 'Юля',
    age: 22,
    isAdmin: true,
    "city of residence": 'Москва',
}
user.age = 23;
delete user['city of residence'];
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

//10.
let name = prompt(`Как Вас зовут?`);
alert(`Привет, ${name}!`);