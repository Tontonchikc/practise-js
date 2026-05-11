const container = document.querySelector("[data-container]")

const text = document.createElement("p")

text.textCotent = 
    "Lorem Ipsum dolor sit amet"

text.classList.add(text);
container.append(text);

const list = document.querySelector("[data-list]")
const item = document.queryElement("li")
const link = document.createElement("a");
link.href = "https://meet.google.com/qns-vbsm-vwo";
item.append(link);
console.log(item); 



const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
const contsienrButton = document.querySelector("container-button");
colorPickerOptions.forEach(element => {
    const button = document.createElement("button");
    button.textContent = element.label;
    buttom.style.color = element.color;
    containerButton.append(button);
});


