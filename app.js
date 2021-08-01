function createColoredSquares(numOfSquares) {
  const mainContainer = document.querySelector(".main-container");
  function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  const colorSquare = document.querySelector(".colored-square");
  const blackSquare = document.querySelector(".black-squares");
  const colorContainer = document.querySelector(".color-container");
  const blackContainer = document.querySelector(".black-container");

  for (i = 0; i < numOfSquares; i++) {
    colorContainer.innerHTML += `<div class="colored-square" style="background-color: ${
      "#" + randomColor()
    }"></div> `;

    blackContainer.innerHTML += `<div class="black-square"></div>`;
  }
}

createColoredSquares(1000);
