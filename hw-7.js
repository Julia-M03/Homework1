//1.
const answer = 'js';
console.log(answer.toUpperCase());

//2.
function searchStart(arr, str) {
    return arr.filter(el => el.toLowerCase(str).startsWith(str));
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

//3.
function getRandomInt1() {
    return Math.floor(32.58884);
}

console.log(getRandomInt1());

function getRandomInt2() {
    return Math.ceil(32.58884);
}

console.log(getRandomInt2());

function getRandomInt3() {
    return Math.round(32.58884);
}

console.log(getRandomInt3());

//4.
const numbers = [52, 53, 49, 77, 21, 32];

console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

//5.
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandomInt(1, 10));

//6. 
function getRandomArrNumbers(n) {
    let arr = [];
    const length = Math.floor(n / 2);

    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (n + 1)));
    }
    return arr;
}
console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

let num = Number(prompt('Введите целое число'));
const arr = (num, min, max) => new Array(num).fill(0).map(el => Math.floor(Math.random() * (max - min + 1)) + min);
console.log(arr((Math.floor(num / 2)), 0, num));

//7.
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandomInt(10, 100));

//8.
let currentDate = new Date();

console.log(currentDate);

//9.
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

//10. 
function getDateTime(fullDate) {
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let myDate = new Date();
    return `Дата: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} - ${days[myDate.getDay()]} Время: ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`;
}
console.log(getDateTime(2024, 2, 28));


//11.
function listGame() {
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    list = list.sort(() => Math.random() - 0.5);
    alert(list);
    let question1 = prompt("Чему равнялся первый элемент массива?");
    let question2 = prompt("Чему равнялся последний элемент массива?");

    if (question1 === list[0] && question2 === list[list.length - 1]) {
        alert('Вы угадали оба элемента! Поздравляем!');
    } else if ((question1 === list[0] || question2 === list[list.length - 1])) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно');
    }
}


