'use strict'


console.log('test');
const myName = 'Luka';
console.log(myName);
// Змінні можна створити 2 способами:
// 1) const x = 2; - через const змінну в якій значення не можна змінювати
//якщо ми спробуємо змінити дані змінній,створеній через const,то буде помилка
// const a = 0
// a = 1
// console.log(a)
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

//ми не можемо звернутися до змінної до її створення
const z = 0;
console.log(z);

const d = z + y;
console.log(y);


//існує сім простих типів даних(примітивів): Число, рядок, буль, undefined, null, symbol, bigint.Та один складний: це object(масив та фуекція - це теж об'єкт)
const myCat = 'Мурчик';
console.log(myCat); //Цей метод виводить інформацію в консоль
console.log(typeof myCat); //Оператор typeof дивиться який тип даних укладений у змінну
const quantityProduct = '10';
console.log(typeof quantityProduct,'Це кількість продуктів');
const priceProduct = 5;
console.log(typeof priceProduct, 'Це ціна продукту');
// const isStudent = confirm("Ти студент?");
// console.log(isStudent);
// alert("Дякую за відповідь :)");
// alert(myCat);
// const age = prompt("Скільки вам років")
// console.log(age)


