const button = document.querySelector("[data-btn]");

const handleClick = () => {
  console.log("Ви клікнули на кнопку");
  document.body.style.backgroundColor = "teal";
  alert("колір змінено");
};

button.addEventListener("click", handleClick);
