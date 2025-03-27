const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "random34"
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

app.post("/signup", logger, function (req,res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password
  })

  res.json({
    message: "You are signed up"
  })

  console.log(users);
})

app.post("/signin", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;

  for(let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password){
      foundUser = users[i]
    }
  }

  // const user = users.find(function(user) {
  //   if (user.username == username && user.password == password) {
  //     return true;
  //   } else { 
  //     return false;
  //   }
  // })

  if (foundUser) {
    const token = jwt.sign({
      username: username
    }, JWT_SECRET);

    //foundUser.token = token;

    res.json({
      token: token
    })
  } else {
    res.status(403).send({
      message: "Invalid username or password"
    })
  }
  console.log(users);
})

function auth(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_SECRET);
  if (decodedData.username) {
    req.username = decodedData.username;
    next();
  } else {
    res.json({
      messages: "You are not logged in"
    })
  }
}

app.get("/me", logger, auth, function (req,res) {
  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == req.username) {
      foundUser = users[i]
    }
  }

  //const user = user.find(user => user.username === username);

  if (foundUser) {
    res.json({
      username: foundUser.username
    })
  } else {
    res.json({
      message: "token invalid"
    })
  }
})

app.listen(3000); 