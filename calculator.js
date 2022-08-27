"use strict";

const numButtons = document.querySelectorAll(".num__buttons");
const output = document.querySelector(".output");
const operators = document.querySelectorAll(".top__buttons");
const clearBtn = document.querySelector(".clear");
const dotBtn = document.querySelector(".dot");
const sumBtn = document.querySelector(".sum__button");

numButtons.forEach((number, i) =>
  number.addEventListener("click", () => {
    output.innerHTML += number.innerHTML;
  })
);

operators.forEach((sign, i) =>
  sign.addEventListener("click", () => {
    output.innerHTML += ` ${sign.innerHTML} `;
  })
);

clearBtn.addEventListener("click", () => {
  output.innerHTML = "";
});

dotBtn.addEventListener("click", () => {
  output.innerHTML += dotBtn.innerHTML;
});

const calculate = () => {
  const calcArr = output.innerHTML.split(" ");
  operateNums(calcArr);
};

let calcedNums = 0;

const operateNums = (calcArr) => {
  if (calcArr.length > 2) {
    let num1 = Number(calcArr[0]);
    let operand = calcArr[1];
    let num2 = Number(calcArr[2]);

    switch (operand) {
      case "+":
        console.log(num1, num2);
        calcedNums = num1 + num2;
        break;
      case "-":
        calcedNums = num1 - num2;
        break;
      case "x":
        calcedNums = num1 * num2;
        break;
      case "÷":
        calcedNums = num1 / num2;
        break;
    }
    calcArr.slice(3);
    calcArr.unshift(calcedNums);
  }
  console.log(calcedNums[0]);
};

sumBtn.addEventListener("click", calculate);
