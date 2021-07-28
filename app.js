const mainContainer = document.querySelector(".main-container");
const coloredSquare = document.querySelector(".colored-square");
const randomColor = Math.floor(Math.random() * 16777215).toString(16);

for (i = 0; i < 10; i++) {
  coloredSquare.style.backgroundColor = "#" + randomColor;
}

console.log(coloredSquare);
