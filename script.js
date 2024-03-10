function monthNumber() {
    let season = prompt("Введите номер месяца");

    if (season == 1 || season == 2 || season == 12) {
        alert('Зима');
    } else if (season >= 3 && season <= 5) {
        alert('Весна');
    } else if (season >= 6 && season <= 8) {
        alert('Лето');
    } else if (season >= 9 && season <= 11) {
        alert('Осень');
    } else {
        alert('Ошибка');
    }
 }

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