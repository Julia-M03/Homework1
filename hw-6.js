//1.
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if (numbs[i] == 10) {
        break;
    }
}

//2.
console.log([1, 5, 4, 10, 0, 3].indexOf(4));

//3.
const number = [1, 3, 5, 10, 20];
console.log(number.join(' '));

//4.
let products = [];
for (let x = 0; x < 3; x++) {
    products[x] = [];

    for (let y = 0; y < 3; y++) {
        products[x].push(1);
    }
}
consol.log(products);

//5.
let z = [1, 1, 1];

z.push(2, 2, 2);
consol.log(z);

//6.
let c = [9, 8, 7, 'a', 6, 5];
let d = c.sort();

consol.log(d);
consol.log(d.pop());
consol.log(d);

//7.
let f = [9, 8, 7, 6, 5];
let user = prompt('Угадай число:');

if (f.includes(Number(user))) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//8.
let g = 'abcdef';
let h = g.split('').reverse().join('');
console.log(h);

//9.
const arr = [[1, 2, 3,], [4, 5, 6]];
const fletArr = arr.flat();
console.log(fletArr);

//10.
let num = [5, 8, 1, 3, 2, 4, 6, 7, 9, 10];

for (let k = 0; k < num.length - 1; k++) {
    console.log(num[k] + num[k + 1]);
}

//11.
function numbersSquare(array) {
    return array.map(el => el ** 2);
}
console.log(array);

//12.
function getLengthWords(array) {
    return array.map(el => el.length);
}
console.log(array);

//13.
function filterPositive(array) {
    return array.filter(value => {
        if (value < 0) {
            return true;
        } else {
            return false;
        }
    });
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2])); 