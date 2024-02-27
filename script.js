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