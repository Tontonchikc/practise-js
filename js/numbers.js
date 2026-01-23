console.dir(Number);
const x = Number(false);
console.log(x);
console.log(Number("5"));
const value = Number("5");
console.log(typeof value);
console.log(Number(null));
console.log(Number(undefined));
console.log(Number("test"));
// const result = Number(prompt("Скільки вам років"));
// console.log(result);
// const check = isNaN(result);
// console.log(check);

const testNumber = "2.545464 дробь";
const testNumber1 = Number.parseInt(testNumber);
console.log(testNumber1);

const testNumber2 = Number.parseFloat(testNumber);
console.log(testNumber2);
console.log(0.1 + 0.2);
const a = (0.1 * 10) + (0.2 * 10) / 10;
console.log(a);

console.dir(Math);
const minNumber = Math.min(1,2,22,3,44,56,67,52,42);
console.log(minNumber);
const maxNumber = Math.max(1,2,22,3,44,56,67,52,42);
console.log(maxNumber); 
const powResult = Math.pow(43, 3);
console.log(powResult);   