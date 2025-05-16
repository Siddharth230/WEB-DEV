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

app.post("/signup", function (req,res) {
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

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;

  for(let i = 0; i < users.length; i++) {
    if (users[i].username == username&& users[i].password == password){
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

app.get("/me", function (req,res) {
  const token = req.headers.token;

  const decodedInformation = jwt.verify(token, JWT_SECRET);
  
  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == decodedInformation.username) {
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