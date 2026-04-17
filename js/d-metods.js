const number = [1, 2, 3, 4, 5, 6, 7];

number.forEach((number, index, arr) => {
  console.log(`elemnt ${number}, Index ${index},Array ${arr}`);
});

const num2 = number.map((num) => num * num);
console.log(num2);

const users = [
  {
    name: "Mango",
    isActive: true,
    age: 15,
  },
  {
    name: "banan",
    isActive: true,
    age: 16,
  },
  {
    name: "pear",
    isActive: false,
    age: 40,
  },
  {
    name: "Watermelon",
    isActive: false,
    age: 25,
  },
];

const newUser = users.map((user) => {
  return { name: user.name, isActive: !user.isActive };
});

console.log(newUser);

const activeUsers = users.filter((user) => user.isActive);

const inActive = users.filter((user) => !user.isActive);

console.log(activeUsers, inActive);

const youngUsers = users.filter((user) => user.age < 20);

console.log(youngUsers);





const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];


function getName(player) {
return player.name
}


const names = players.map(getName)
console.log(names);


function updatePoints (player) {
  return {...player, points: Math.round(player.points * 1.1)}
}
const newPoints = players.map(updatePoints);
console.log(newPoints);
