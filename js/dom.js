console.dir(document);
// const list = document.querySelector("[data-list]");
// const lists = document.querySelectorAll(".list");

// const link = document.querySelector("[data-link]");

// const passwordField = document.querySelector("#password");

// const passwordBtn = document.querySelector("#passwordBtn");

// passwordBtn.addEventListener("click", () => {
//   passwordField.type = "text";
// });

// const img = document.querySelector("[data-img]");

const element = document.querySelector(".js-title");
console.log(element);

const titleText = element.textContent;
console.log(titleText);

// style
element.style.color = "red";
element.style.fontsize = "32px";

//classlist

console.dir(element.classList);

// // - повертає true або false, в залежності від того, чи є в елемента клас cls
element.classList.contains("title");
// // ===========================================
// //- додає клас cls в список класів елемента
element.classList.add("new-class");
// // ===========================================

// //- видаляє клас cls зі списку класів елемента
element.classList.remove("new-class");
// // ===========================================

// //- якщо класу cls немає, додає його, якщо є, видаляє
element.classList.toggle("old-class");
// // ===========================================

// //- замінює існуючий клас на зазначений
element.classList.replace("old-class", "new-class");

const navList = document.querySelector(".site-nav");
console.log(navList);


console.dir(navList)


const firstA = navList.children[0].children[0]
firstA.classList.add("siteNavLink")


const firstLink = navList.querySelectorAll("a")[0];
console.log(firstLink); 




