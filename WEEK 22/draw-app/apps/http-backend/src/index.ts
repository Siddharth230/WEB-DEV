import argon2 from "argon2";
import express from "express";
import dotenv from "dotenv";import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { CreateRoomSchema, CreateUserSchema, SignInSchema } from "@repo/common/types";

dotenv.config();
const app = express();

app.use(express.json())


app.post("/signup", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const parsedDataWithSuccess = CreateUserSchema.safeParse(req.body);

    if (!parsedDataWithSuccess) { 
      return res.status(400).json({
        message: "Invalid inputs",
      })
    }

    // const existingUserEmail = 

    // const existingUsername = 

    const hash = await argon2.hash(password, { type: argon2.argon2id })

    const user = ({
      username,
      email,
      password: hash
    })

    res.json({
      message: "You are signed up", 
    })
  } catch (e) {
    res.status(500).json({
      message: "Invalid credentials"
    })
  }
})

app.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  const parsedDataWithSuccess = SignInSchema.safeParse(req.body);

  if (!parsedDataWithSuccess) {
    return res.status(400).json({
      message: "Invalid inputs"
    })
  }

  // const user 

  // const passwordMatch = await argon2.verify(user.password, password)

  if (user && passwordMatch) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRET
    )
    res.json({
      token,
    })
  } else {
    res.status(403).json({
      message: "Incorrect credentials"
    })
  }

  // console.log(user.email)
})

app.post("/room", middleware, (req, res) => {
  const data = CreateRoomSchema.safeParse(req.body);

  if (!data.success) {
    res.json({
      message: "Incorrect inputs"
    })
    return;
  }
  
  // db call
  
  res.json({  
    roomId: 123
  })
})

app.listen(3001)