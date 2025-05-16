const { Router } = require("express");
const {z} = require("zod");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const mongoose = require("mongoose");

const { userModel, purchaseModel, courseModel } = require("./../db");
const { userMiddleware } = require("../middlewares/user");
const { logger } = require("../middlewares/logger");
const { JWT_USER_SECRET } = require("../config");

mongoose.connect(process.env.DATABASE_URL);
const userRouter = Router(); 

userRouter.post("/signup", logger, async function (req, res) {
  try {
    const { email, password, firstName, lastName } = req.body

    const requiredBody = z.object({
      email: z.string().min(3).max(100).email(),
      password: z.string().min(8).max(100),
      firstName: z.string().min(3).max(30),
      lastName: z.string().min(3).max(30)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body)

    if(!parsedDataWithSuccess.success) {
      res.json({
        message: "Incorrect format",
        error:parsedDataWithSuccess.error
      })
      return
    }

    const hash = await argon2.hash(password, {type: argon2.argon2id});
    
    const user = await userModel.create({
      email,
      password: hash,
      firstName,
      lastName
    })
      
    res.json({
      message: "You are signed up."
    })

    console.log(user);
  } catch(err) {
    res.status(500).json({
      message: "Invalid credentials"
    })
  }
})

userRouter.post("/signin", logger, async function (req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email: email,
  })

  const passwordMatch = await argon2.verify(user.password, password,);

  if(user && passwordMatch) {
    const token = jwt.sign({
      id: user._id.toString()
    }, JWT_USER_SECRET);
    res.json({
      token
    })
  } else {
    res.status(403).json({
      message: "Incorrect credentials"
    })
  }
  console.log(user.email);
})

userRouter.get("/purchases", logger, userMiddleware, async function (req, res) {
  const userId = req.userId;

  const purchases = await purchaseModel.find({
    userId
  })

  const courseData = await courseModel.find({
    _id: { $in: purchases.map(x => x.courseId)}
  })

  res.json({
    message: "User purchases",
    purchases,
    courseData
  })
  console.log(purchases, courseData);
})

module.exports = {
  userRouter: userRouter
}