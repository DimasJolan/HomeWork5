"use strict";

const arr = [];
const arr2 = [];
const arr3 = [];

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
    arr2.push(value);
    arr2.sort(function(a, b) {return a - b})
  }
  if (!isNaN(value) && value < 0 ) {
    arr3.push(value);
    negative = arr3.length;
  }
  else negative = 0;
  
}

let amountOfEvenNumbersGreaterThanZero = arr2.filter(number => number > 0 && !(number % 2)).length;

average = arr2.reduce((accumulator, current) => {
  if (Number.isInteger(+current)) {
    return accumulator + +current
  }

  return accumulator;
}, 0) / arr2.length;

let fractionSumm = arr2.reduce((accumulator, current) => {
  if (isFloat(current)) {
    return accumulator + +current;
  }
  return accumulator;
}, 0);

let object = {
  allValues: arr,

  elements: arr.length,

  minInteger: arr2[0],

  maxInteger: arr2[arr2.length - 1],

  arithmeticMean: average,

  evenPositiveIntegerElements: amountOfEvenNumbersGreaterThanZero,

  negativeElements: negative,

  fractionSum: fractionSumm,
}

console.log(object);
