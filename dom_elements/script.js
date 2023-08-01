// console.log("hel");

// let title = document.getElementById("title");
// console.log(title.innerText);
// title.innerText = "tata";
// console.log(title.innerText);

// let message = "rashmi hi hi";
//title.innerHTML = `<p>${message}</p>`;

// let redDiv = document.getElementById("red");
// let yellowDiv = document.getElementById("yellow");
// let greenDiv = document.getElementById("green");

const squares = document.querySelectorAll(".colorButton");

const timesClicked = {
  red: 0,
  yellow: 0,
  green: 0,
};
squares.forEach((square) => {
  square.onclick = () => {
    timesClicked[square.value] += 1;
    square.innerText = timesClicked[square.value];
    //console.log(element.value);
  };
});

const clearGame = document.getElementById("clearButton");

const clear = () => {
  squares.forEach(sq => (sq.innerHTML = ''));
};
clearGame.onclick = () => clear();
