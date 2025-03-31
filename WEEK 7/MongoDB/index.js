const express = require('express');
const mongoose = require("mongoose");
const {UserModel, TodoModel} = require("./db");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

mongoose.connect("")

const JWT_SECRET = "asfqub!23823";
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

app.post("/signup", logger, async function (req,res) {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    
    const hash = await argon2.hash(password, {type: argon2.argon2id});
    
    console.log(hash);

    const user = await UserModel.create({
      email: email,
      password: hash,
      name: name
    })

    res.json({
      message: "You are signed up"
    })
    console.log(user);
  } catch (err) {
    res.status(500).json({
      message: "Error while signing up"
    })
  }
})


app.post("/signin", logger, async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
  })

  const passwordMatch = await argon2.verify(user.password, password,);

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

function auth(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_SECRET);
  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      messages: "Incorrect credentials"
    })
  }

}

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