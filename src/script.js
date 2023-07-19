const fields = document.querySelectorAll(".field");
const upperLeft = fields[0];
const upperMiddle = fields[1];
const upperRight = fields[2];
const centerLeft = fields[3];
const center = fields[4];
const centerRight = fields[5];
const bottomLeft = fields[6];
const bottomMiddle = fields[7];
const bottomRight = fields[8];
const winningPositionsRows = [
  //rows
  [upperLeft, upperMiddle, upperRight],
  [centerLeft, center, centerRight],
  [bottomLeft, bottomMiddle, bottomRight],
];
const winningPositionsColumns = [
  [upperLeft, centerLeft, bottomLeft],
  [upperMiddle, center, bottomMiddle],
  [upperRight, centerRight, bottomRight],
];
const winningPositionsDiagonally = [
  [upperLeft, center, bottomRight],
  [upperRight, center, bottomLeft],
];
let isEnd;
let index = 1;
fields.forEach((field) => {
  field.addEventListener("click", function () {
    if (index % 2 != 0) {
      field.classList.remove("oTarget");
      field.classList.add("xTarget");
      field.innerHTML = "X";
    } else {
      field.classList.remove("xTarget");
      field.classList.add("oTarget");
      field.innerHTML = "O";
    }

    checkXWin();
    checkOWin();
    checkDraw();

    index++;
    console.log(field.classList);
  });
});
//LOGIC
function checkXWin() {
  //Rows
  if (
    upperLeft.classList.contains("xTarget") &&
    upperMiddle.classList.contains("xTarget") &&
    upperRight.classList.contains("xTarget")
  ) {
    winningPositionsRows[0].forEach((upperHorizontally) => {
      upperHorizontally.style.backgroundColor = "RED";
    });
    setTimeout(redWin, "800");
  }
  if (
    centerLeft.classList.contains("xTarget") &&
    center.classList.contains("xTarget") &&
    centerRight.classList.contains("xTarget")
  ) {
    winningPositionsRows[1].forEach((centerHorizontally) => {
      centerHorizontally.style.backgroundColor = "RED";
    });
    setTimeout(redWin, "800");
  }
  if (
    bottomLeft.classList.contains("xTarget") &&
    bottomMiddle.classList.contains("xTarget") &&
    bottomRight.classList.contains("xTarget")
  ) {
    winningPositionsRows[2].forEach((bottomHorizontally) => {
      bottomHorizontally.style.backgroundColor = "RED";
    });
    setTimeout(redWin, "800");
  }
  //Columns
  if (
    upperLeft.classList.contains("xTarget") &&
    centerLeft.classList.contains("xTarget") &&
    bottomLeft.classList.contains("xTarget")
  ) {
    winningPositionsColumns[0].forEach((firstColumn) => {
      firstColumn.style.backgroundColor = "RED";
    });
    setTimeout(redWin, "800");
  }
  if (
    upperMiddle.classList.contains("xTarget") &&
    center.classList.contains("xTarget") &&
    bottomMiddle.classList.contains("xTarget")
  ) {
    winningPositionsColumns[1].forEach((secondColumn) => {
      secondColumn.style.backgroundColor = "RED";
    });
    setTimeout(redWin, "800");
  }
  if (
    upperRight.classList.contains("xTarget") &&
    centerRight.classList.contains("xTarget") &&
    bottomRight.classList.contains("xTarget")
  ) {
    winningPositionsColumns[2].forEach((lastColumn) => {
      lastColumn.style.backgroundColor = "RED";
    });
    setTimeout(redWin, "800");
  }
  //Diagonally

  if (
    upperLeft.classList.contains("xTarget") &&
    center.classList.contains("xTarget") &&
    bottomRight.classList.contains("xTarget")
  ) {
    winningPositionsDiagonally[0].forEach((firstDiag) => {
      firstDiag.style.backgroundColor = "RED";
    });
    setTimeout(redWin, "800");
  }
  if (
    upperRight.classList.contains("xTarget") &&
    center.classList.contains("xTarget") &&
    bottomLeft.classList.contains("xTarget")
  ) {
    winningPositionsDiagonally[1].forEach((firstColumn) => {
      firstColumn.style.backgroundColor = "RED";
    });
    setTimeout(redWin, "800");
  }
}
function checkOWin() {
  //Rows
  if (
    upperLeft.classList.contains("oTarget") &&
    upperMiddle.classList.contains("oTarget") &&
    upperRight.classList.contains("oTarget")
  ) {
    winningPositionsRows[0].forEach((upperHorizontally) => {
      upperHorizontally.style.backgroundColor = "BLUE";
    });
    setTimeout(blueWin, "800");
  }
  if (
    centerLeft.classList.contains("oTarget") &&
    center.classList.contains("oTarget") &&
    centerRight.classList.contains("oTarget")
  ) {
    winningPositionsRows[1].forEach((centerHorizontally) => {
      centerHorizontally.style.backgroundColor = "BLUE";
    });
    setTimeout(blueWin, "800");
  }
  if (
    bottomLeft.classList.contains("oTarget") &&
    bottomMiddle.classList.contains("oTarget") &&
    bottomRight.classList.contains("oTarget")
  ) {
    winningPositionsRows[2].forEach((bottomHorizontally) => {
      bottomHorizontally.style.backgroundColor = "BLUE";
    });
    setTimeout(blueWin, "800");
  }
  //Columns
  if (
    upperLeft.classList.contains("oTarget") &&
    centerLeft.classList.contains("oTarget") &&
    bottomLeft.classList.contains("oTarget")
  ) {
    winningPositionsColumns[0].forEach((firstColumn) => {
      firstColumn.style.backgroundColor = "BLUE";
    });
    setTimeout(blueWin, "800");
  }
  if (
    upperMiddle.classList.contains("oTarget") &&
    center.classList.contains("oTarget") &&
    bottomMiddle.classList.contains("oTarget")
  ) {
    winningPositionsColumns[1].forEach((secondColumn) => {
      secondColumn.style.backgroundColor = "BLUE";
    });
    setTimeout(blueWin, "800");
  }
  if (
    upperRight.classList.contains("oTarget") &&
    centerRight.classList.contains("oTarget") &&
    bottomRight.classList.contains("oTarget")
  ) {
    winningPositionsColumns[2].forEach((lastColumn) => {
      lastColumn.style.backgroundColor = "BLUE";
    });
    setTimeout(blueWin, "800");
  }
  //Diagonally

  if (
    upperLeft.classList.contains("oTarget") &&
    center.classList.contains("oTarget") &&
    bottomRight.classList.contains("oTarget")
  ) {
    winningPositionsDiagonally[0].forEach((firstDiag) => {
      firstDiag.style.backgroundColor = "BLUE";
    });
    setTimeout(blueWin, "800");
  }
  if (
    upperRight.classList.contains("oTarget") &&
    center.classList.contains("oTarget") &&
    bottomLeft.classList.contains("oTarget")
  ) {
    winningPositionsDiagonally[1].forEach((firstColumn) => {
      firstColumn.style.backgroundColor = "BLUE";
    });
    setTimeout(blueWin, "800");
  }
}
function redWin() {
  isEnd = true;
  alert("Drużyna X Wygrała!");
  window.location.reload();
}
function blueWin() {
  isEnd = true;
  alert("Drużyna O Wygrała!");
  window.location.reload();
}
function checkDraw() {
  if (index === 9 && !isEnd) {
    // Sprawdź, czy wszystkie pola zostały wypełnione i nie ma wygranej
    isEnd = true;
    setTimeout(function () {
      alert("Remis!");
      window.location.reload();
    }, "800");
  }
}
