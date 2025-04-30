const body = document.body;
const main = document.getElementById("main");
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const change = document.getElementById("change");
const whiteBlackButton = document.getElementById("white_black");
const guitar = document.getElementById("guitar");
const allText = document.querySelectorAll("h1, p");
let fontSize = 16;
let currentGuitarColor = "black";
plus.onclick = function () {
  console.log("Збільшилась усе");
  fontSize = fontSize + 2;
  body.style.fontSize = fontSize + "px";
};
minus.onclick = function () {
  console.log("Зменшилось усе");
  fontSize -= 2;
  body.style.fontSize = fontSize + "px";
};
change.onclick = function () {
  console.log("Змінилась тема");
  const currentBg = getComputedStyle(body).backgroundColor;

  if (currentBg === "rgb(0, 0, 0)") {
    body.style.backgroundColor = "rgb(216, 216, 216)";
    main.style.backgroundColor = "white";
    header.style.backgroundColor = "#f9f2f2";
    footer.style.backgroundColor = "#f9f2f2";
    body.style.color = "black";
    allText.forEach(function (el) {
      el.style.color = "black";
    });
  } else {
    body.style.backgroundColor = "black";
    main.style.backgroundColor = "#333";
    header.style.backgroundColor = "#222";
    footer.style.backgroundColor = "#222";
    body.style.color = "white";
    allText.forEach(function (el) {
      el.style.color = "white";
    });
  }
};
whiteBlackButton.onclick = function () {
  console.log("Змінилася гітара");
  if (currentGuitarColor === "black") {
    guitar.src = "/img/white.png";
    guitar.alt = "White Les Paul";
    currentGuitarColor = "white";
  } else {
    guitar.src = "/img/black.png";
    guitar.alt = "Black Les Paul";
    currentGuitarColor = "black";
  }
};

// const text = "Hello world it`s my program"// "Hello","world","it`s","my","program"
// let words = text.split(" ");//[ 'Hello', 'world', 'it`s', 'my', 'program' ]
// console.log(words);
// let newSentence = "";
// // for(let i=0; i<words.length;i++){
// //     console.log(words[i]);
// // }
// for (let word of words) {
//     newSentence = newSentence + word.split('').reverse().join('') + " ";
// }
// console.log(newSentence);

// for (let i = 1; i <= 30; i++)
//   if (i % 15 === 0) {
//     console.log("ТриП’ять");
//   } else if (i % 3 === 0) {
//     console.log("Три");
//   } else if (i % 5 === 0) {
//     console.log("П’ять");
//   } else {
//     console.log(i);
//   }

let number = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}