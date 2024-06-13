// 152.

function roundNumber(number, digits) {
  return Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits);
}

console.log(roundNumber(2.12456, 2));

// 153.

function reverseChar(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

console.log(reverseChar("hello"));

// 154.

function createObject(key, value) {
  let obj = {};
  obj[key] = value;
  return obj;
}

console.log(createObject("name", "john"));

// 155.

// 156.

// 157.

function redirect() {
  window.location.href = "https://www.w3schools.com";
}

// 158.

function createFunc() {
  return function (a, b, c) {
    return a + b + c;
  };
}

const newFunction = createFunc();
console.log(newFunction(1, 2, 3));

// 159.
// Write a JavaScript program to get an array of lines from the specified file.

// const fs = require("fs");

function getLines(filename) {
  // test.txt
}

// console.log(getLines("test.txt"));

// 160.

function filterArray(array, iterator) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (iterator(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

console.log(filterArray([1, 2, 3, 4, 5], (x) => x != 4 && x != 1));

// 161.

function removedElements(array, iterator) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!iterator(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

console.log(removedElements([1, 2, 3, 4, 5], (x) => x != 4 && x != 1));

// 162.

function functionToPromise(func) {
  // .
}

// 163.
// Write a JavaScript program to convert a number in bytes to a human-readable string.

function bytesToNumber(bytes) {
  // .
}

// 181.

function getLastElement(array) {
  return array[array.length - 1];
}

console.log(getLastElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
