// const game = {
//   title: "Metro 2033 Redux",
//   year: 2014,
//   studio: "4A Games",
// };

// for (const key in game) {
//   console.log(key);
//   console.log(`За ключем ${key} значення ${game[key]}`);
// }

// console.log("gameKeys");

// const gameKeys = Object.keys(game);
// for (const key of gameKeys) {
//   console.log(key);
//   console.log(`За ключем ${key} значення  ${game[key]}`);
// }

// console.log("gameValues");

// const gameValues = Object.values(game);
// for (const value of gameValues) {
//   console.log(value);
//   console.log(`За ключем ${value} значення  ${game[value]}`);
// }

// console.log("gameEntries");

// const gameEntries = Object.entries(game);
// console.log(gameEntries);
// for (const entry of gameEntries) {
//   console.log(entry[0]);
//   console.log(entry[1]);
// }

// const students = {
//   Vad: 18,
//   Max: 19,
//   Oleg: 20,
//   Ivan: 17,
//   Dima: 18,
//   Andriy: 21,
//   Roman: 19,
//   Taras: 22,
//   Bohdan: 18,
//   Artem: 20,
//   Nazar: 17,
//   Yuriy: 23,
//   Anna: 18,
//   Olena: 19,
//   Iryna: 20,
//   Kateryna: 21,
//   Mariia: 18,
//   Sofiia: 19,
//   Tetiana: 22,
//   Viktoriia: 20,
// };

// const numberStudents = Object.values(students);

// let sum = 0;

// for (const number of numberStudents) {
//   sum += number;
// }
// let result = sum / numberStudents.length;
// console.log(result);

// let res = 0;

// const ageStudents = Object.entries(students);
// for (const entry of ageStudents) {
//   sum += res;
// }

// x = res / students.length;

// console.log(x);

// function countProps(obj) {
//   return Object.keys(obj).length;
// }

// const person = {
//   name: "Alice",
//   age: 30,
//   city: "Kyiv",
//   country: "Ukraine",
//   job: "Developer",
//   experience: 5,
//   skills: ["JavaScript", "React", "Node.js"],
//   isEmployed: true,
//   salary: 3000,
//   languages: { english: "B2", ukrainian: "native" },
//   hobby: "Photography",
// };

// console.log(countProps(person));

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: false },
//   { name: "Ajax", online: false },
// ];

// function findFriendByName(array, friendName) {
//   for (const friends of array) {
//     if (friendName === friends.name) {
//       return friends;
//     }
//   }
//   return null;
// }

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

// function getAllNames(array) {
//   const result = [];
//   for (const friend of array) {
//     result.push(friends.name);
//   }
//   return result;
// }
// console.log(getAllNames(friends))

// function getOnlineNames(array) {
//   const result = [];
//   for (const friend of array) {
//     if(friends.online){
//        result.push(friend.name);
//     }
//   }
//   return result
// }

// console.log(getOnlineNames(friends));

// function getOfflineFriends(array) {
//     const result = [];
//     for (const friend of array) {
//         if (!friend.online) {
//             result.push(friend.name);
//         }
//     }
//     return result;
// }
// console.log(getOfflineFriends(friends));

// const getFriendsByStatus = function (array) {
//     const onlineFriends = [];
//     const offlineFriends = [];

//     for (const friend of array) {
//         if (friend.online) {
//             onlineFriends.push(friend.name);
//         }

//         if (!friend.online) {
//             offlineFriends.push(friend.name);
//         }
//     }

//     return{onlineFriends,offlineFriends};
// };

// console.log(getFriendsByStatus(friends));

// const products = [
//   { name: "cocacola", price: 1, category: "drinks", stock: true },
//   { name: "lays", price: 1, category: "snacks", stock: false },
//   { name: "bread", price: 1, category: "bread", stock: true },
//   { name: "morshynska", price: 1, category: "drinks", stock: true },
// ];

// function countTotalPrice(products, category) {
//   let total = 0;
//   for (const product of products) {
//     if (category === product.category && product.stock) {
//       total += product.price;
//     }
//   }
//   return total;
// }

// console.log(countTotalPrice(products, "drinks"));


// const cart = [
//  { name: "🍎", price: 50 },
//  { name: "🍋", price: 60 }
// ];



// addToCart(cart, product) {
//   const res = [];
//   for (const product of cart) {
//     res.push(product);
//     }
//     res.push(newProduct);
//     return res;
// }

// function addToCart(cart, newProduct) {
//   return  [...cart, newProduct];

// }



// console.log(addToCart(cart, {name: 'cola', price: 12}));
// console.log(cart);