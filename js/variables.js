'use strict'


console.log('test');
const myName = 'Luka';
console.log(myName);
// Змінні можна створити 2 способами:
// 1) const x = 2; - через const змінну в якій значення не можна змінювати
const flower = 'rose';
console.log(flower);
// flower = 'lilia' буде помилка бо const не можна змінити
// number = 5 буде помилка оскільки такої зміної не існує
// 2) let y = 5; через let створили значення яке можна змінювати скільки завгодно
let y = 10;
console.log(y);
y = 15
console.log(y)
y = 'test';
console.log(y)
y = 20
console.log(y)

//ми не можемо звернутися до змынноъ до ъъ створення
const z = 0;
console.log(z);

const d = z + y;
console.log(y);