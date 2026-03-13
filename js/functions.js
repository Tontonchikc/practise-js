// //функції поділяют на такі типи як
// //1 спосіб - оголошення функції (function declaration)

// //створення(оголошення) функції
// // function ім'я (парметри) {
// //     тіло функції(код який треба виконати)
// //  return результат
// // }

// // ім'яФункції(аргументи)



// //2 спосіб - функціональний вираз


// // const nameFunction = function (парметри) {
// //     тіло функції(код який треба виконати)
// //  return результат
// // }




// //3 спосіб - підвид функціонального виразу,стрілкові функції 

// //const nameFunction = (параметри) => {
// //     тіло функції(код який треба виконати)
// //  return результат
// // }



// // function sumNumbers(number1, number2) {
// //     const sum = number1 + number2
// //     return sum
// // }


// // const result = sumNumbers(3, 1);
// // console.log(result);

// // const result2 = sumNumbers(5, 3)

// // console.log(result2);

// // const difNumbers = function (x, y) {
// //     return x- y

// // }

// // const resultDivXY =difNumbers(3, 2);
// // console.log(resultDivXY);




// // const multipleNumbers = (a,b) => {
// //  return a * b
// // }


// // const resultMultiplie = multipleNumbers(6, 5);

// // console.log(resultMultiplie);




// // const showMessageFunction= () => {
// //     return "Вітаємо,ви зареєстровані"
// // }

// // console.log(showMessageFunction());

// const arr = [2, 6, 8, 10, 25, 4];
// let maxNumer = arr[0];

// function maxNumbers(array) {
//   for (const number of array) {
//     if (number > maxNumber) {
//         maxNumbers = number;
//     }
//   }
//   return maxNumber;
// }


// console.log(maxNumbers(arr));







// Напиши функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:
// Myaveragescore: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)
// Для перевірки:
// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));


//1 створит зміну у якій уде зберігатись с.а.
//2 створити цикл для вирахування с.а.
//3 занйти сум чисел 
//4 поділити суму на кількість номерів
//5 створити іф який буде виводити у консоль середній бал
//6 вивести середный бал у консоль

let avarageScore;
let sum = 0;



function myAverageScore(score) {

    for (let i = 0; i < score.length; i++) {
        sum += score[i]
    }

    return sum
}


const result = myAverageScore([100, 75, 81, 96]);
avarageScore = result / [100, 75, 81, 96].length
console.log(avarageScore)

if (avarageScore > 91 && avarageScore < 100) {
    console.log("A")
}

else if (avarageScore > 81 && avarageScore < 90) {
    console.log("B")
}

else if (avarageScore > 71 && avarageScore < 80) {
    console.log("C")
}

else {console.log("D")}