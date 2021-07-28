function createColoredSquares(numOfSquares) {
  const mainContainer = document.querySelector(".main-container");
  function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }
  const colorSquare = document.querySelector(".colored-square");

  console.log(colorSquare);
  for (i = 0; i < numOfSquares; i++) {
    mainContainer.innerHTML += `<div class="colored-square" style="background-color: ${
      "#" + randomColor()
    }"></div>`;
  }
}

createColoredSquares(100);
