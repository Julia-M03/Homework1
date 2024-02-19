//1.
 function numberMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

//2.
 function printNumber(n) {
    if (n % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

//3.
 function numberSquare(x) {
    console.log(x ** 2);
}

 function numberSquare(x) {
    return (x ** 2);
}

//4.
 function userAge() {
    let age = Number(prompt('Сколько Вам лет?'));

    if (age <= 0) {
        console.log(`Вы ввели неправильное значение`);
    } else if (age <= 12) {
        console.log(`Привет, друг!`);
    } else {
        console.log(`Добро пожаловать!`);
    }
}

//5.
 function multNumber(c, d) {
    if (isNaN(c) || isNaN(d)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return c * d;
    }
}

//6.
 function cubeNumber() {
    let y = prompt('Введите число');
    y = Number(y);

    if (isNaN(y)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${y} в кубе равняется ${y ** 3}`;
    }
}

//7.
 function getСircleArea() {
    return Math.PI * this.radius ** 2;
  }
 function getСirclePerimeter() {
    return 2 * Math.PI * this.radius;
  }
  
  const circle1 = {
    radius: 5,
  
    getArea: getСircleArea,
    getPerimeter: getСirclePerimeter,
  };
  
  const circle2 = {
    radius: 3,
  
    getArea: getСircleArea,
    getPerimeter: getСirclePerimeter,
  };
  
  console.log(circle1.getArea());
  console.log(circle1.getPerimeter());
  console.log(circle2.getArea());
  console.log(circle2.getPerimeter());

//8.
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
