const express = require('express');

const app = express();

// function that returns a boolean if the age of th person is more than 14

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg:"Sorry you are not of age yet ",
    });
  }
}

app.use(isOldEnoughMiddleware); //only triggers all the endpoints below it

app.get("/ride2", function (req, res) {
    res.json({
      msg:"You have successfully ridden the ride 2."
    });
});

app.get("/ride1", function (req, res) {
    res.json({
      msg:"You have successfully ridden the ride 1."
    });
});

app.listen(3000);