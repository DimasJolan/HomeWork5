"use strict";

const arr = [];
const arrNumbers = [];
const arrNegative = [];

let answer;
let average;
let negative;

while (true) {
  answer = (prompt("Вводите значения до тех пор, пока не захотите узнать результаты в консоли. Для этого нажмите cancel. Если Вы введете пустую строку , то код автоматически буде остановлен.") || "").trim();
  if (answer === null || answer === " " || answer === "") break;
  arr.push(answer);
}

function isFloat (num) {
  return !isNaN(+num) && (+num % 1);
}


for ( let i = 0; i < arr.length; i ++) {
  const value = arr[i];

  if (!isNaN(value)) {
    arrNumbers.push(value);
    arrNumbers.sort(function(a, b) {return a - b})
  }
  if (!isNaN(value) && value < 0 ) {
    arrNegative.push(value);
    negative = arrNegative.length;
  }
  else negative = 0;
  
}

let amountOfEvenNumbersGreaterThanZero = arrNumbers.filter(number => number > 0 && !(number % 2)).length;

average = arrNumbers.reduce((accumulator, current) => {
  if (Number.isInteger(+current)) {
    return accumulator + +current
  }

  return accumulator;
}, 0) / arrNumbers.length;

let fractionSumm = arrNumbers.reduce((accumulator, current) => {
  if (isFloat(current)) {
    return accumulator + +current;
  }
  return accumulator;
}, 0);

let object = {
  allValues: arr,

  elements: arr.length,

  minInteger: arrNumbers[0],

  maxInteger: arrNumbers[arrNumbers.length - 1],

  arithmeticMean: average,

  evenPositiveIntegerElements: amountOfEvenNumbersGreaterThanZero,

  negativeElements: negative,

  fractionSum: fractionSumm,
}

console.log(object);
