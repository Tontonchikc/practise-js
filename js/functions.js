//функції поділяют на такі типи як
//1 спосіб - оголошення функції (function declaration)

//створення(оголошення) функції
// function ім'я (парметри) {
//     тіло функції(код який треба виконати)
//  return результат
// }

// ім'яФункції(аргументи)



//2 спосіб - функціональний вираз


// const nameFunction = function (парметри) {
//     тіло функції(код який треба виконати)
//  return результат
// }




//3 спосіб - підвид функціонального виразу,стрілкові функції 

//const nameFunction = (параметри) => {
//     тіло функції(код який треба виконати)
//  return результат
// }



function sumNumbers(number1, number2) {
    const sum = number1 + number2
    return sum
}


const result = sumNumbers(3, 1);
console.log(result);

const result2 = sumNumbers(5, 3)

console.log(result2);

const difNumbers = function (x, y) {
    return x- y

}

const resultDivXY =difNumbers(3, 2);
console.log(resultDivXY);




const multipleNumbers = (a,b) => {
 return a * b
}


const resultMultiplie = multipleNumbers(6, 5);

console.log(resultMultiplie);




const showMessageFunction= () => {
    return "Вітаємо,ви зареєстровані"
}

console.log(showMessageFunction());