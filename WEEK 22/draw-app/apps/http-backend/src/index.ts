import argon2 from "argon2";
import express from "express";
import dotenv from "dotenv";import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { CreateRoomSchema, CreateUserSchema, SignInSchema } from "@repo/common/types";
import { prismaClient } from "@repo/db/client";
import cors from "cors";

dotenv.config();
const prisma = prismaClient;

const app = express();
app.use(express.json())
app.use(cors())

app.post("/signup", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const parsedData = CreateUserSchema.safeParse(req.body);

    if (!parsedData.success) {
      console.log(parsedData.error)

      return res.status(400).json({
        message: "Invalid inputs",
      })
    }
    
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username }
        ]
      }
    })
    
    if (existingUser?.email === email) {
      return res.status(400).json({ message: "Email already exists" })
    }
    
    if (existingUser?.username === username) {
      return res.status(400).json({ message: "Username already exists" })
    }

    const hash = await argon2.hash(parsedData.data.password, { type: argon2.argon2id })

    const user = await prisma.user.create({
      data: {
        username: parsedData.data.username,
        email: parsedData.data.email,
        password: hash}
    })

    console.log(user);

    res.status(201).json({
      message: "You are signed up", 
      userId: user.id
    })
  } catch (e) {
    res.status(500).json({
      message: "Invalid credentials"
    })
  }
})

app.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  const parsedData = SignInSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json({
      message: "Invalid inputs"
    })
  }

  const user = await prisma.user.findUnique({
    where: {
      username
    }
  })

  const passwordMatch = await argon2.verify(user.password, password)

  if (user && passwordMatch) {
    const token = jwt.sign(
      {
        id: user.id,
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

  console.log(user.email)
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