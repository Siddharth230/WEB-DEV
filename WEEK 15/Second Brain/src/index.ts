import express from 'express';
import { ContentModel, start, UserModel } from './db';
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from './config';
import { userMiddleware } from './middleware';

const app = express();
app.use(express.json());

start();

app.post("/api/v1/signup", async (req, res) => {
  // zod validation & hash the password
  const username = req.body.username;
  const password = req.body.password;
  
  try {
    await UserModel.create({
      username,
      password
    })

    res.json({
      message: "User Signed up"
    })
  } catch (e) {
    res.status(411).json({
      message: "User already exists"
    })
  }
})

app.post("/api/v1/signin",async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await UserModel.findOne({
    username,
    password
  })

  if (existingUser) {
    const token = jwt.sign({
      id: existingUser.id
    }, JWT_PASSWORD)
    res.json({
      token
    })
  } else { 
    res.status(403).json({
      message: "Incorrect credentials"
    })
  }
})

app.post("/api/v1/content", userMiddleware , async (req, res) => {
  const title = req.body.title;
  const link = req.body.link; 
  await ContentModel.create({
    title,
    link,
    //@ts-ignore
    userId: req.userId,
    tags: []
  })

  res.json({
    message: "Content added"
  })
})

app.get("/api/v1/content", userMiddleware, async (req, res) => {
  //@ts-ignore
  const userId = req.userId;

  const content = await ContentModel.find({
    userId 
  }).populate("userId", "username")

  res.json({
    content
  })
})

app.delete("/api/v1/content", async (req, res) => {
  const contentId = req.body.contentId;

  await ContentModel.deleteMany({
    contentId,
    //@ts-ignore
    userId: req.userId
  }) 

  res.json({
    message: "Deleted"
  })
})

app.post("/api/v1/secondBrain/share", (req, res) => {
  
})

app.get("/api/v1/secondBrain/:shareLink", (req, res) => {
  
})

app.listen(3000);