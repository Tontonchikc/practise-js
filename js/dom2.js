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




























const container = document.querySelector("[data-container]");
const text = document.createElement("p");

text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

text.classList.add("text");

container.before(text);

const input = document.createElement("input");

// input.type = "text";

input.placeholder = "Please, input the number";

input.setAttribute("type", "number");

console.log(input.hasAttribute("placeholder"));

console.log(input.getAttribute("type"));

input.removeAttribute("placeholder");

console.log(input.attributes);

container.append(input);



const input = document.createElement("input");
// input.type = "text";
// input.placeholder = "please, input the text";
input.setAttribute("type", "number");
console.log(input);
console.log(input.hasAttribute("placeholder"));

console.log(input.getAttribute("type"));

// input.removeAttribute("placeholder");

console.log(input.attributes);

const container = document.querySelector("[data-container]");
container.append(input);
const content = "Hello world!";

const html = <h3 class="title"> ${content} </h3>;
container.innerHTML = html;

// container.append(input);
const colorPickerOptions = [
  { label: "red", color: "  #F44336" },
  { label: "green", color: "  #4CAF58" },
  { label: "blue", color: "  #2196F3" },
  { label: "grey", color: "  #607D88" },
  { label: "pink", color: "  #E91E63" },
  { label: "indigo", color: "  #3F51B5" },
];

const container = document.querySelector("[data-container]");
const html = colorPickerOptions
  .map(
    (button) =>
      <button style="color:${button.color}">${button.label}</button>,
  )
  .join("");
console.log(html);
container.innerHTML = html;











