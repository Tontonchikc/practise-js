'use strict'

const message = 'Мій перший скрипт';
console.log(message);

const firstLetter = message[0];
console.log(firstLetter);

const messageLength = message.length;
console.log(messageLength);
// const lastLetter = message[16]; //
const lastLetter = message[message.length - 1];// використовуємо це,тому що він ав томатично знаходить останій символ
console.log(lastLetter);

// const userName = prompt("What is your name");

// const greetings = 'Hello, welcome to cabinet ' + userName; 
// const greetings = `Hello ${userName}, welcome to cabinet `
// console.log(greetings);

console.log(`Сума чисел 1 та 2 складе ${1 + 2} `)

const info = "I love Java Script";
console.log(info);
const newInfo = info.toUpperCase();
console.log(newInfo);
const smallInfo = info.toLowerCase();
console.log(smallInfo);
console.log(info);

const indexJ = info.lastIndexOf('J');
console.log(indexJ);
const wordIndex = info.indexOf('Java');
console.log(wordIndex);

const infoHaslove = info.includes("Love");
console.log(infoHaslove);
console.log(info.includes("j"))

const hasJS = info.endsWith("JavaScript");
console.log(hasJS);

const hasI = info.startsWith("i");
console.log(hasI);
console.log(info.startsWith("i love"));

// const numberHours = prompt("Ведіть к-сть хвилин") / 60;
// const days = Math.floor(numberHours / 24);
// const hours = Math.floor(numberHours % 60);
// const modHours = String(hours).padStart(2, 0);
// const minutes = numberHours % 60;
// const modMinutes = String(minutes).padStart(2, 0);
// console.log(`numberHours -> ${numberHours}`);
// console.log(`days -> ${days}`);
// console.log(`modhours -> ${modHours}`);
// console.log(`minutes -> ${minutes}`);
// console.log(`modminutes -> ${modMinutes}`); 

const userLogin = prompt('Введіть свій логін');
console.log(userLogin.length);
const userLoginTrimed = userLogin.trim();
console.log(userLoginTrimed, userLoginTrimed.lenght);
