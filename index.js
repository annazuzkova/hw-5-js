"use strict";
//1
// let drink;
// const select = document.querySelector("#select");
// const handlerSelect = () => {
//   switch (select.value) {
//     case "coffee":
//       drink = "Кава";
//       break;
//     case "tea":
//       drink = "Чай";
//       break;
//     case "juise":
//       drink = "Сік";
//       break;
//   }
//   alert(`ви вибрали ${drink}`);
// };
// select.addEventListener("change", handlerSelect);

//2
// const input = document.querySelector("#input");
// const button = document.querySelector("#button");
// const handlerCheckNameOfWeek = () => {
//   switch (input.value) {
//     case "понеділок":
//     case "вівторок":
//     case "середа":
//     case "четверг":
//     case "п`ятниця":
//       alert("це рабочий день");
//       break;
//     case "субота":
//     case "неділя":
//       alert("це вихідний");
//       break;
//     default:
//       alert("ви невірно ввели назву дня");
//   }
// };
// button.addEventListener("click", handlerCheckNameOfWeek);
//3
// const input = document.querySelector("#input");
// const button = document.querySelector("#button");
// const handlerNumberOfMounth = () => {
//   switch (input.value) {
//     case "1":
//     case "2":
//     case "12":
//       alert("зима");
//       break;
//     case "3":
//     case "4":
//     case "5":
//       alert("весна");
//       break;
//     case "6":
//     case "7":
//     case "8":
//       alert("літо");
//       break;
//     case "9":
//     case "10":
//     case "11":
//       alert("осінь");
//       break;
//   }
// };
// button.addEventListener("click", handlerNumberOfMounth);
//4
// const input = document.querySelector("#input");
// const button = document.querySelector("#button");
// const hanglerNumbersOfDays = () => {
//   switch (input.value) {
//     case "1":
//     case "3":
//     case "5":
//     case "7":
//     case "8":
//     case "10":
//     case "12":
//       alert("31");
//       break;
//     case "4":
//     case "6":
//     case "9":
//     case "11":
//       alert("30");
//       break;
//     case "2":
//       alert("28/29");
//       break;
//   }
// };
// button.addEventListener("click", hanglerNumbersOfDays);
//5
// const input = document.querySelector("#input");
// const button = document.querySelector("#button");
// const handlerColor = () => {
//   switch (input.value) {
//     case "зелений":
//       alert("йти");
//       break;
//     case "жовтий":
//       alert("чекати");
//       break;
//     case "червоний":
//       alert("стоп");
//       break;
//     default:
//       alert("або колір введений невірно або значення для нього немае");
//   }
// };
// button.addEventListener("click", handlerColor);
const firstNumber = document.querySelector("#first-number");
const secondNumber = document.querySelector("#second-number");
const button = document.querySelector("#button-calculator");
const select = document.querySelector("#select");
let number;
const handlerCalculator = () => {
  switch (select.value) {
    case "+":
      number = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
      alert(number);
      break;
    case "-":
      number = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
      alert(number);
      break;
    case "*":
      number = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
      alert(number);
      break;
    case "/":
      number = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
      alert(number);
      break;
  }
  if (select.value === "/" && secondNumber.value === "0") {
    document.body.style.backgroundColor = "black";
    alert("я ж казала що вселенна схлопнеться");
  }
};
button.addEventListener("click", handlerCalculator);
