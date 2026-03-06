// // console.dir(Number)
// // console.dir(Math)
// // console.dir(String)
// // console.dir(Boolean)

// const message = "Hello world!"
// const worldsList = message.split("")
// console.log(worldsList)

// const friends = ['Anton', 'Andrew', 'Egor']
// // const myFriends = friends.join(", ")
// // console.log(myFriends)
// // const friendsMessage = `My friends: ${myFriends}`
// // console.log(friendsMessage)

// // const friendsMessage = `My friends: ${friends.join(", ")}`
// // console.log(friendsMessage)

// // const positionAndrew = friends.indexOf('Andrew');
// // console.log(positionAndrew);

// // const isEgorFriend = friends.includes("Egor");
// // console.log(isEgorFriend);
// // const isLuksFriend = friends.includes("Luka");
// // console.log(isLuksFriend)

// // const oldFriend = ["Dima", "Yaroslav", "Misha"]
// // const nowFriends = ["Sasha", "Tania"]
// // const newFriends = ["Kusia", "Anton", "Arsen"]
// // const allFriends = oldFriend.concat(nowFriends.concat(newFriends))
// // console.log(allFriends);

// // const title = 'Top 10 benefints of React framework'.toLowerCase();
// // const titleSplited = title.split('');
// // const titleJoin = titleSplited.join('-');
// // console.log(titleJoin);


// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// let sum = 0;

// for (let i = 0; i < array1.length;i++){
//     for(let j = 0;j < array2.length;j++){
//         sum += array1[i] + array2[j]
//     }
// }
// console.log(sum);

// const hobby = ["art", "sport", "IT"]
// console.log(hobby);

// //метод push додає елемент в кінець масиву
// hobby.push("games", "CS2");
// console.log(hobby);

// //метод pop видаляє останій елемент масиву
// const x = hobby.pop();
// console.log(x)
// console.log(hobby);


// //метод unshift додає елемент на початку масиву
// hobby.unshift("Math", "Languges");
// console.log(hobby);

// //метод shift видаляэ елемент на початку масива
// hobby.shift();
// console.log(hobby);



// const food = ["egg", "apple", "peach", "pear", "milk"];

// //додавання
// food.splice(0,0, 'banana');
// console.log(food);

// //видалення
// food.splice(1,1);
// console.log(food);


// //11 slice
// //Метод slice вирізає з масива потрібні елемнти і закидає іх в потрібний масив

// const numbers = [1, 2, 50, 76];
// const lastNumbers = numbers.slice(2, 2);
// console.log(numbers);
// const copyNumbers = numbers.slice();
// console.log(copyNumbers)

const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles.splice(1,1, 'Класика');
const firstElement = styles.shift();
console.log(firstElement);
styles.unshift( 'Реп', 'Реггі');
console.log(styles);