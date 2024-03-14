//1.
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));


//2.
function isPositive(num) {
    return num > 0;
}

function isMale(gender) {
    if (gender === 'male') {
        return gender;
    }
}

function filter(arr, ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peoples = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(peoples, isMale));


//3.
const timer = () => {
    let newDate = new Date();
    console.log(newDate);
    const interval = setInterval(() => {
        newDate.setSeconds(newDate.getSeconds() + 3);
        console.log(newDate);
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('Прошло 30 секунд')
    }, 30000)
}
timer(30);

//4.
function delayForSecond(callback) {
    setTimeout(callback, 1000);
    callback();
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})


//5.
function delaySecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log('Привет, ${name}!');
}

delaySecond(() => sayHi('Глеб'));

