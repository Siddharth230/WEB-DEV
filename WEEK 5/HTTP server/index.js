const express = require("express")

const app = express();

// /add/a/b
app.get("/sum/:firstNum/:secondNum", function(req, res) {
  const a = parseInt(req.params.firstNum);
  const b = parseInt(req.params.secondNum);

  res.json({
    answer: a + b
  })
})

app.get("/multiply/:firstNum/:secondNum", function(req, res) {
  const a = req.query.firstNum;
  const b = req.query.secondNum;

  res.json({
    answer: a * b  
  })
})

app.get("/sub/:firstNum/:secondNum", function(req, res) {
  const a = req.query.firstNum;
  const b = req.query.secondNum;

  res.json({
    answer: a - b 
  })
})

app.get("/divide/:firstNum/:secondNum", function(req, res) {
  const a = req.query.firstNum;
  const b = req.query.secondNum;

  res.json({
    answer: a / b
  })
})

app.listen(3000);