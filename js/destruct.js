const book = {
  title: "The lord of Flies",
  author: "William Golding",
  year: 1953,
  genre: "antiutopia",
  status: "sold",
};

const bookTitle = book.title;
const bookAuthor = book.author;

// const { title: titleOfBook, author, status = "not"} = book;


// console.log(bookAuthor, bookTitle);
// console.log(author,titleOfBook, status);


const { title, author, ...box} = book
console.log(title, author)
console.log(box);
console.log(book);


const options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true


  };

//   const {size:{width, height}} = options.size;
//   console.log(width, height);


//   function setOptions({extra:ex}) {
//     return ex;
//   }
//   console.log(setOptions(options));



//   const gameEntries = Object.entries(game)
// //   const firsEntry = gameEntries[0];
// //   const [value, key] = firsEntry;
// //   console.log(`key ${key} value ${value}`)
// //   for (const [key,value] of gameEntries) {
// //     console.log(`key: ${key} /n value: ${value}`)
// //   }

// const [, secondaryEntry] = gameEntries;



const interstellar = {
  title: "Interstellar",
  originalTitle: "Interstellar",
  releaseYear: 2014,
  genre: ["Sci-Fi", "Drama", "Adventure"],
  durationMinutes: 169,
  director: "Christopher Nolan",
  writers: ["Jonathan Nolan", "Christopher Nolan"],
  musicComposer: "Hans Zimmer",
  cinematography: "Hoyte van Hoytema",
  productionCompanies: ["Paramount Pictures", "Warner Bros."],
  budgetUSD: 165000000,
  boxOfficeUSD: 701800000,
  imdbRating: 8.7,
  rottenTomatoes: 73,
  metacritic: 74,
  mainCast: [
    "Matthew McConaughey",
    "Anne Hathaway",
    "Jessica Chastain",
    "Michael Caine",
    "Mackenzie Foy"
  ],
  mainCharacter: "Joseph Cooper",
  setting: {
    time: "Future (near dystopian Earth)",
    locations: ["Earth", "Saturn orbit", "Gargantua system"]
  },
  themes: [
    "Survival of humanity",
    "Love transcending time and space",
    "Relativity",
    "Sacrifice",
    "Parenthood"
  ],
  plotSummary: "A team travels through a wormhole in search of a new home for humanity.",
  hasOscar: true,
  oscarsWon: 1,
  famousQuote: "Love is the one thing that transcends time and space.",
  scientificConcepts: [
    "Black holes",
    "Time dilation",
    "Wormholes",
    "Gravity"
  ],
  soundtrackStyle: "Organ-heavy, emotional, minimalistic",
  endingType: "Open / philosophical",
  rewatchValue: "High",
  complexityLevel: "Very high",
  emotionalImpact: "Severe",
  memePotential: "Murph!!!",
  isMindBlowing: true
};


const returnRewatchValue({rewatchValue:rewatchMovie}) => rewatchMovie
   

 console.log(returnRewatchValue(interstellar));
