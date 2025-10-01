const express = require('express');
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const {z} = require("zod");

const {UserModel, TodoModel} = require("./db");
const {auth, JWT_SECRET} = require("./auth");
const {hashedPassword, verifyPassword} = require("./hash")

mongoose.connect("mongodb+srv://admin:kdGwEcRS011S2WxV@cluster0.ckpmq.mongodb.net/todo-app-database")

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

console.log("CONNECTED");

function logger(req, res, next) {
  console.log(req.method + "request came");
  next();
}

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/Public/index.html")
})

app.post("/signup", logger,  async function (req,res) {
  try {
    // Check that the password has 1 uppercase char, 1 lowercase char, 1 special char
    const requiredBody = z.object({
      email: z.string().min(3).max(100).email(), 
      name: z.string().min(3).max(100),
      password: z.string().min(5).max(30)
    })

    // const parsedData = requiredBody.parse(req.body);
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success) {
      res.json({
        message: "Incorrect format",
        error: parsedDataWithSuccess.error
      })
      return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    
    const hash = await argon2.hash(password, {type: argon2.argon2id});
  
    const user = await UserModel.create({
      email: email,
      password: hash,
      name: name
    })
  
    res.json({
      message: "You are signed up"
    })
    console.log(user);
  } catch(err) {
    res.status(500).json({
      message: "User already exists"
    })
  }
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