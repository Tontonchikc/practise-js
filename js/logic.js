'use strict'

// const number1 = prompt("Введіть перше число");
// const number2 = prompt("Введіть друге число");
// console.log(number1 === "1" && number2 === "2");

console.log(5 && 1 && 3);
console.log(5 && 0 && 3);
console.log(1 > 0 && null && 2 && undefined);
console.log(0 && 5 && 3 && 1 > 0);
const message = "I'm Anton";
console.log(2 + 3 && message.includes("Anton") && "Anton in the string");
const number = Number(prompt ("Pick a number"));
console.log(number > 3 && number < 10 );

console.log(null || 5 + 3 || undefined);

