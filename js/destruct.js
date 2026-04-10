// const book = {
//   title: "The lord of Flies",
//   author: "William Golding",
//   year: 1953,
//   genre: "antiutopia",
//   status: "sold",
// };

// const bookTitle = book.title;
// const bookAuthor = book.author;

// // const { title: titleOfBook, author, status = "not"} = book;


// // console.log(bookAuthor, bookTitle);
// // console.log(author,titleOfBook, status);


// const { title, author, ...box} = book
// console.log(title, author)
// console.log(box);
// console.log(book);


// const options = {
//     size: {
//       width: 100,
//       height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true


//   };

// //   const {size:{width, height}} = options.size;
// //   console.log(width, height);


// //   function setOptions({extra:ex}) {
// //     return ex;
// //   }
// //   console.log(setOptions(options));



// //   const gameEntries = Object.entries(game)
// // //   const firsEntry = gameEntries[0];
// // //   const [value, key] = firsEntry;
// // //   console.log(`key ${key} value ${value}`)
// // //   for (const [key,value] of gameEntries) {
// // //     console.log(`key: ${key} /n value: ${value}`)
// // //   }

// // const [, secondaryEntry] = gameEntries;



// const interstellar = {
//   title: "Interstellar",
//   originalTitle: "Interstellar",
//   releaseYear: 2014,
//   genre: ["Sci-Fi", "Drama", "Adventure"],
//   durationMinutes: 169,
//   director: "Christopher Nolan",
//   writers: ["Jonathan Nolan", "Christopher Nolan"],
//   musicComposer: "Hans Zimmer",
//   cinematography: "Hoyte van Hoytema",
//   productionCompanies: ["Paramount Pictures", "Warner Bros."],
//   budgetUSD: 165000000,
//   boxOfficeUSD: 701800000,
//   imdbRating: 8.7,
//   rottenTomatoes: 73,
//   metacritic: 74,
//   mainCast: [
//     "Matthew McConaughey",
//     "Anne Hathaway",
//     "Jessica Chastain",
//     "Michael Caine",
//     "Mackenzie Foy"
//   ],
//   mainCharacter: "Joseph Cooper",
//   setting: {
//     time: "Future (near dystopian Earth)",
//     locations: ["Earth", "Saturn orbit", "Gargantua system"]
//   },
//   themes: [
//     "Survival of humanity",
//     "Love transcending time and space",
//     "Relativity",
//     "Sacrifice",
//     "Parenthood"
//   ],
//   plotSummary: "A team travels through a wormhole in search of a new home for humanity.",
//   hasOscar: true,
//   oscarsWon: 1,
//   famousQuote: "Love is the one thing that transcends time and space.",
//   scientificConcepts: [
//     "Black holes",
//     "Time dilation",
//     "Wormholes",
//     "Gravity"
//   ],
//   soundtrackStyle: "Organ-heavy, emotional, minimalistic",
//   endingType: "Open / philosophical",
//   rewatchValue: "High",
//   complexityLevel: "Very high",
//   emotionalImpact: "Severe",
//   memePotential: "Murph!!!",
//   isMindBlowing: true
// };


// const returnRewatchValue({rewatchValue:rewatchMovie}) => rewatchMovie
   

//  console.log(returnRewatchValue(interstellar));


 const user = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
}


const {name, age, email} = user;
console.log(name, age, email);


const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  features: ['power windows', 'rear camera', 'navigation'],
  safety: {
    airbags: true,
    antilock_brakes: true,
    stability_control: true
  }
}


const { make, model, year, features, safety: {airbags}} = car;
console.log(`${make}, ${model}, ${year},features: ${features},airbags ${airbags}`);


// Деструктуризувати об’єкт movie. Дістати в окрему зміну першого актора зі списку.
const movie = {
  title: 'The Shawshank Redemption',
  director: {
    name: 'Frank Darabont',
    nationality: 'American'
  },
  actors: ['Tim Robbins', 'Morgan Freeman'],
  release_year: 1994,
  ratings: {
    imdb: 9.3,
    rotten_tomatoes: 90 
  }
}

const { title, director: {name: directiorName, nationality},  actors:[firstActor], release_year, ratings: {imdb, rotten_tomatoes}} = movie;
console.log(title,directiorName, nationality, firstActor, release_year,imdb, rotten_tomatoes);



const address = {
  street: 'Main St',
  city: 'New York',
  country: 'USA'
};


function getObject(country) {
  return country;
}

console.log(getObject(address));

const data = {
  users: [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 17 },
    { name: 'Bob', age: 30 }
  ]
};
function getUserName({ users }) {
  const names = [];
  for (const { name } of users) {
    names.push(name);
  }
  return names;
}
console.log(getUserName(data));



const courses = {
  total: 3,
  list: [
    { title: 'JavaScript Basics', hours: 10 },
    { title: 'React Advanced', hours: 20 },
    { title: 'Node.js Fundamentals', hours: 15 }
  ]
};


function calcAllHours ({ list:courseslist }) {
  let res = 0;
  for (const { hours } of courseslist) {
    res += calcAllHours
  }
  return res;
}

console.log(calcAllHours(courses));




const userProfile = {
  name: 'John Doe',
  address: {
    street: '123 Main St',
    city: 'Los Angeles',
    country: 'USA'
  }
};


function findStreet(address) {
  const { street, city = "Невідоме місто", country = "Невідома країна" } = address
  return [city, country]
}


console.log(findStreet(userProfile));





