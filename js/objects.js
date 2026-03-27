// const game = {
//   name: "Metro 2033",

//   year: Number(2010),

//   description:
//     "Metro 2033 is a post-apocalyptic first-person shooter video game with elements of survival horror and stealth, developed by the Ukrainian studio 4A Games and published by the American company THQ in March 2010. The game is an interpretation of the novel of the same name by Russian writer Dmitry Glukhovsky.",

//   heroes: ["Artem", "Burbon", "Hunter"],
//   showHeroes() {
//     for (const val of this.heroes) Х
//     console.log(hero)
//   }

// };

// console.log(game.year);
// console.log(game["name"]);
// game.creator = "4AGames";
// console.log(game.creator);
// delete game.description;
// console.log(game);

// const createGame = (gameName, gameYear) => {
//     return {}
// }

// game.showYeroes();

// Створіть об'єкт "person" з властивостями "name", "age", "gender". Додайте до об'єкту метод, який буде виводити на екран повідомлення про особистість зі значеннями всіх властивостей.

const person = {
  name: "Dima",
  age: "12",
  gender: "Male",

  showInfo() {
    console.log(`Ім'я ${this.name}. Вік ${this.age}. Стать ${this.gender} `);
  },
};

person.showInfo();

const car = {
  brand: "Kia",
  model: "Sportage",
  developeYear: "1993",
  color: "White",

  carInfo() {
    alert(
      `This is ${this.color} ${this.brand} ${this.model}, ${this.developeYear}`,
    );
  },
};

car.carInfo();

// const movie = {
//   title: "The Housemaid",
//   director: "Pol Fig",
//   year: 2025,
//   genre: "psychology thriller"

//   showDirectorName
// }

// 1.Створіть об'єкт "book" з властивостями "title", "author", "year" та "genre". Додайте до об'єкту метод, який дозволить змінювати значення властивостей. Метод приймає ключ та нове значення властивості.

const book = {
  title: "The lord of Flies",
  author: "William Golding",
  year: 1953,
  genre: "antiutopia",

  changeInfo(key, value) {
    if (key in this) {
      this[key] = value;
    } else {
      console.error("Такої властивості не існує");
    }
  },
};

book.changeInfo("genre", "drama");

const restaurant = {
  name: "IFe126",
  cuisine: "France",
  adress: "Shewchenko",
  rating: 5,

  changeAdress(newAdress) {
    if (newAdress !== "") {
      this.adress = newAdress;
    } else {
      console.error("Нова адреса не повина бути порожня");
    }
  },

  changeRating(newRating) {
    if (newRating >= 0 && newRating <= 5) {
      this.rating = newRating;
    } else {
      console.error(" Рейтинг може бути від 0 до 5");
    }
  },
};

const students = [
  {
    name: "Sonya",
    age: 17,
    gender: "female",
    grade: 80,
  },
  {
    name: "Luka",
    age: 13,
    gender: "male",
    grade: 90,
  },
  {
    name: "Dima",
    age: 13,
    gender: "male",
    grade: 75,
  },
  {
    name: "Anton",
    age: 14,
    gender: "male",
    grade: 100,
  },
  {
    name: "Yaroslav",
    age: 15,
    gender: "male",
    grade: 95,
  },
  {
    name: "Roma",
    age: 13,
    gender: "male",
    grade: 95,
  },
];

function average(studentsArr) {
  let sum = 0;
  for (const student of studentsArr) {
    sum += student.grade;
  }
  const result = Math.round(sum / studentsArr.lenght);
  return result;
}

const cart = {
  items: [
    { name: "🍎", price: 50 },
    { name: "🍇", price: 70 },
    { name: "🍋", price: 60 },
    { name: "🍓", price: 110 },
  ],
  getItems() {
    return this.items;
  }, //повертає список товарів
  add(product) {}, // додає товар
  remove(productName) {}, // видаляє товар
  clear() {}, //очищає корзину
  countTotalPrice() {}, //рахує загальну вартість
};
