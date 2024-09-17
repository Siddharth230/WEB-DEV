/*
function sum(a, b) {
  return a + b;
}

let ans = sum(2, 3);
console.log(ans);
*/

/*
function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

const ans = sum(100);
console.log(ans);
*/

/*
function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);
*/

/*
const fs = require("fs");

const contents = fs.readFileSync("WEEK 2/a.txt", "utf8");
console.log(contents);

const contents1 = fs.readFileSync("WEEK 2/assignment.txt", "utf8");
console.log(contents1);
*/

/*
const fs = require("fs");

fs.readFile("WEEK 2/a.txt", "utf8", function (err, contents) {
  console.log(contents);
});

fs.readFile("WEEK 2/assignment.txt", "utf8", function (err, contents) {
  console.log(contents);
});

fs.readFile("WEEK 2/b.txt", "utf8", function (err, contents) {
  console.log(contents);
});
*/

/*
function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  let val = op(a, b);
  return val;
}

const ans = doOperation(1, 2, divide);
console.log(ans);
*/

/*
const fs = require("fs");

function print(err, data) {
  console.log(data);
}

fs.readFile("WEEK 2/a.txt", "utf-8", print);

fs.readFile("WEEK 2/b.txt", "utf-8", print);

console.log("Done!");

function readFile(filePath, encoding, op) {
  //read file
  op("Error", "hi there!");
}
*/

//const afs = require("fs");

//function print(err, data) {
//  if (err) {
//    console.log("File not found!");
//  } else {
//    console.log(data);
//  }
//}

//fs.readFile("aas.txt", "utf-8", print);

//console.log("done!");
function timeout() {
  console.log("Click the button!");
}

console.log("Hi!");

setTimeout(timeout, 1000);

console.log("Welcome to loupe.");

let c = 0;
for (let i = 0; i < 10000000; i++) {
  c = c + 1;
}

console.log("Expensive operation done!");
