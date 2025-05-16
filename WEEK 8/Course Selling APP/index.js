require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();
app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/home-page.html")
})
app.get("/signup", function(req, res) {
  res.sendFile(__dirname + "/public/signup-page.html")
})

app.get("/signin", function(req, res) {
  res.sendFile(__dirname + "/public/signin-page.html")
})

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);
  app.listen(3000);
  console.log("listening on port 3000")
}
function hello() {
  console.log("Added changes");
}
main();

hello();