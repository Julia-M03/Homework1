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

function isMale(name, gender) {
    if (gender === 'male') {
        return name + gender; 
       } 
}

function filter(arr, ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            result.push(arr[i]);
        }
    }
    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));


//3.
const timer = () => {
    let newDate = new Date();
	const interval = setInterval(() => {
		console.log(newDate);
	}, 1000 * 3);

	setTimeout(() => {
        clearInterval(interval);
        console.log('Прошло 30 секунд')
      }, 1000 * 30)
};
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
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log('Привет, ${name}!');
}

delayForSecond(() => sayHi('Глеб'));

