
"use strict";

const arr = [];
const arr2 = [];
const arr3 = [];
const arr4 = [];

let answer;
let average;
let average2;
let negative;
while(answer !== null){
  answer = prompt("Вводите значения до тех пор, пока не захотите узнать результаты в консоли. Для этого нажмите cancel");
  if  (answer !== null && isFinite(answer)) {
    arr.push(answer);
  }
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
  if (!isNaN(value)){
    arr4.push(value);
  }
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

  minInteger: arr4[0],

  maxInteger: arr4[arr4.length - 1],

  arithmeticMean: average,

  evenPositiveIntegerElements: amountOfEvenNumbersGreaterThanZero,

  negativeElements: negative,

  fractionSum: fractionSumm,
}

console.log(object);
