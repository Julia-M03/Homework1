function monthNumber(season) {
    let result = Number(prompt("Введите номер месяца"));

    if (season == 1 || season == 2 || season == 12) {
        return 'Зима';
    } else if (season >= 3 && season <= 5) {
        return 'Весна';
    } else if (season >= 6 && season <= 8) {
        return 'Лето';
    } else if (season >= 9 && season <= 11) {
        return 'Осень';
    } else {
        return 'Ошибка';
    }
 }