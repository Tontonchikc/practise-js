const game = {
  title: "Metro 2033 Redux",
  year: 2014,
  studio: "4A Games",
};

for (const key in game) {
  console.log(key);
  console.log(`За ключем ${key} значення ${game[key]}`);
}

console.log("gameKeys");

const gameKeys = Object.keys(game);
for (const key of gameKeys) {
  console.log(key);
  console.log(`За ключем ${key} значення  ${game[key]}`);
}

console.log("gameValues");

const gameValues = Object.values(game);
for (const value of gameValues) {
  console.log(value);
  console.log(`За ключем ${value} значення  ${game[value]}`);
}

console.log("gameEntries");

const gameEntries = Object.entries(game);
console.log(gameEntries);
for (const entry of gameEntries) {
  console.log(entry[0]);
  console.log(entry[1]);
}

const students = {
  Vad: 18,
  Max: 19,
  Oleg: 20,
  Ivan: 17,
  Dima: 18,
  Andriy: 21,
  Roman: 19,
  Taras: 22,
  Bohdan: 18,
  Artem: 20,
  Nazar: 17,
  Yuriy: 23,
  Anna: 18,
  Olena: 19,
  Iryna: 20,
  Kateryna: 21,
  Mariia: 18,
  Sofiia: 19,
  Tetiana: 22,
  Viktoriia: 20
};

const numberStudents = Object.values(students);

let sum = 0;

for (const number of numberStudents) {
    sum += number;

}
let result = sum / numberStudents.length;
console.log(result);

let res = 0;

const ageStudents = Object.entries(students)
for( const entry of ageStudents) {
    sum += res
}

x = res / students.length

console.log(x)





const newGame = {...game,title: "Metro Last Ligh Redux", year: 2014}
console.log(newGame);

const updateGame = {...newGame,title: "Metro Exodus", year: 2019}
console.log(updateGame);