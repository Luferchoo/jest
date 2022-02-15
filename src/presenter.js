import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const firstMult = document.querySelector("#primer");
const secondMult = document.querySelector("#segundo");
const formMult = document.querySelector("#multiplicar-form");
const divMult = document.querySelector("#resultadomult-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

formMult.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber1 = Number.parseInt(firstMult.value);
  const secondNumber1 = Number.parseInt(secondMult.value);

  divMult.innerHTML = "<p>" + multiplicar(firstNumber1, secondNumber1) + "</p>";
});
