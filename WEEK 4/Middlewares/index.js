const express = require('express');

const app = express();

// function that returns a boolean if the age of th person is more than 14

function isOldEnough(age) {
  if (age >= 14) {
    return true;  
  } else {
    return false;
  }
}

function isOldEnoughMiddleware(req, res, next) {
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg:"Sorry you are not of age yet ",
    })
  }
}

app.get("/ride2", function (req, res) {
  if (isOldEnough(req.query.age)){
    res.json({
      msg:"You have successfully riden the ride 2."
    })
  } else {
    res.status(411).json({
      msg:"Sorry you are not of age yet."
    })
  }
})

app.get("/ride1", function (req, res) {
  if (isOldEnough(req.query.age)){
    res.json({
      msg:"You have successfully riden the ride 1."
    })
  } else {
    res.status(411).json({
      msg:"Sorry you are not of age yet."
    })
  }
})

app.listen(3000);