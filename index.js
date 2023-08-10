const buttons = document.querySelectorAll(".drum");

//USING ARRAY Of TUPLES

const array = [
  ["k", "sounds/crash.mp3"],
  ["l", "sounds/kick-bass.mp3"],
  ["j", "sounds/snare.mp3"],
  ["w", "sounds/tom-1.mp3"],
  ["a", "sounds/tom-2.mp3"],
  ["s", "sounds/tom-3.mp3"],
  ["d", "sounds/tom-4.mp3"],
];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    var buttonInnerHtml = button.innerHTML;
    makeSound2(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
});

function makeSound2(key) {
  array.forEach((element) => {
    if (key === element[0]) {
      const audio = new Audio(element[1]);
      audio.play();
    }
  });
}

document.addEventListener("keypress", (event) => {
  makeSound2(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}

//OTHER WAY TO DO

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons; i++) {

//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {

//     var buttonInnerHTML = this.innerHTML;

//     makeSound(buttonInnerHTML);

//     buttonAnimation(buttonInnerHTML);

//   });

// }

// document.addEventListener("keypress", function(event) {

//   makeSound(event.key);

//   buttonAnimation(event.key);

// });

// function makeSound(key) {

//   switch (key) {
//     case "w":
//       var tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;

//     case "a":
//       var tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;

//     case "s":
//       var tom3 = new Audio('sounds/tom-3.mp3');
//       tom3.play();
//       break;

//     case "d":
//       var tom4 = new Audio('sounds/tom-4.mp3');
//       tom4.play();
//       break;

//     case "j":
//       var snare = new Audio('sounds/snare.mp3');
//       snare.play();
//       break;

//     case "k":
//       var crash = new Audio('sounds/crash.mp3');
//       crash.play();
//       break;

//     case "l":
//       var kick = new Audio('sounds/kick-bass.mp3');
//       kick.play();
//       break;

//     default: console.log(key);

//   }
// }

// function buttonAnimation(currentKey) {

//   var activeButton = document.querySelector("." + currentKey);

//   activeButton.classList.add("pressed");

//   setTimeout(function() {
//     activeButton.classList.remove("pressed");
//   }, 100);

// }
