const hello = ["h", "e", "l", "l", "o"]

const helloStr = hello.reduce((acc, element) => acc + element, "")

console.log(helloStr);

const fruits = [
  {
    name: "mango",
    color: "orange",
    taste: "sour",
  },
  {
    name: "apple",
    color: "red",
    taste: "sweet",
  },
  {
    name: "pear",
    color: "yellow",
    taste: "sour",
  },
  {
    name: "melon",
    color: "yellow",
    taste: "sweet and sour",
  },
];



const filterFruits = fruits.reduce((acc, element) => {
    if (element.taste === "sour") {
        acc.push(element)
    }
    return acc
}
);













