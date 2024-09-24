// function waitFor3S(resolve) {
//   setTimeout(resolve, 10000);
// }

// function setTimeoutPromisified() {
//   return new Promise(waitFor3S);
// }

// function main() {
//   console.log("main is called");
// }

// setTimeoutPromisified().then(main);

function random(resolve) {
  setTimeout(resolve, 10000); //resolve is also a function
}

let p = new Promise(random); //supposed to return u something eventually

//using the eventual value returned by the promise
function callback() {
  console.log("promise succeded");
}

p.then(callback);

const fs = require("fs");
function cleanFile(filePath, cb) {
  return new Promise(function (resolve) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      data = data.trim();
      fs.writeFile(filePath, data, function () {
        resolve();
      });
    });
  });
}

async function main() {
  await cleanFile("WEEK 2/a.txt");
  console.log("Done cleaning file");
}

main();
