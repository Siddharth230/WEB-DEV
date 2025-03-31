const express = require('express');
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

const {UserModel, TodoModel} = require("./db");
const {auth, JWT_SECRET} = require("./auth");
const {hashedPassword, verifyPassword} = require("./hash")

mongoose.connect("")

const app = express();
app.use(express.json());

const users = [];
/*[
    {
      username: "Siddharth",
      password: "1239012",
      token: "afdUJND432c2eu2"
    }
  ] 
*/

function logger(req, res, next) {
  console.log(req.method + "request came");
  next();
}

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/Public/index.html")
})

app.post("/signup", logger, hashedPassword, async function (req,res) {
    const user = await UserModel.create({
      email: email,
      password: hash,
      name: name
    })

    res.json({
      message: "You are signed up"
    })
    console.log(user);
})


app.post("/signin", logger, verifyPassword, async function (req, res) {
  if (user && passwordMatch) {
    const token = jwt.sign({
      id: user._id.toString()
    }, JWT_SECRET);

    res.json ({
      token
    })
  } else { 
    res.status(403).json({
      message: "Incorrect credentials"
    })
  }
})

app.post("/todo", auth,async function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    userId,
    title,
    done
  });
  
  res.json({
    message: "Todo created"
  })
})

app.get("/todos", auth, async function(req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId
  })

  res.json({
    todos
  })
})

app.listen(3000);  