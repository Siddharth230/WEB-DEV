const { Router } = require("express");
const {z} = require("zod");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const mongoose = require("mongoose");

const { adminModel, courseModel } =require("../db");
const { adminMiddleware } = require("../middlewares/admin");
const { logger } = require("../middlewares/logger");
const { JWT_ADMIN_SECRET } = require("../config");

mongoose.connect(process.env.DATABASE_URL);
const adminRouter = Router();


adminRouter.post("/signup", logger, async function (req, res) {
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
    
    const admin = await adminModel.create({
      email,
      password: hash,
      firstName,
      lastName
    })
      
    res.json({
      message: "You are now signed up as ADMIN"
    })

    console.log(admin);
  } catch(err) {
    res.status(500).json({
      message: "Invalid credentials"
    })
  }
})

adminRouter.post("/signin", logger, async function (req, res) {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({
    email: email,
  })

  const passwordMatch = await argon2.verify(admin.password, password,);

  if(admin && passwordMatch) {
    const token = jwt.sign({
      id: admin._id.toString()
    }, JWT_ADMIN_SECRET);
    res.json({
      message: "Admin signed in successfully",
      token
    })
  } else {
    res.status(403).json({
      message: "Incorrect credentials"
    })
  }
})

adminRouter.post("/course",logger, adminMiddleware, async function (req, res) {
  const adminId = req.adminId;

  const { title, description, imageURL, price } = req.body;

  const course = await courseModel.create({
    title,
    description,
    imageURL, //how can you build a pipeline for user to upload images and don't need URL from them
    price,
    creatorId: adminId
  })

  res.json({
    message: "Course created",
    courseId: course._id
  })
  console.log(course);
})

adminRouter.put("/course", logger, adminMiddleware, async function (req, res) {
  const adminId = req.adminId;

  const { title, description, imageURL, price, courseId } = req.body;

  const course = await courseModel.updateOne({
    _id: courseId,
    creatorId: adminId
  },{
    title,
    description,
    imageURL,
    price,
  })

  res.json({
    message: `Course Updated`,
    courseId
  })

  console.log(course);
})

adminRouter.get("/course/bulk", logger, adminMiddleware, async function (req, res) {
  const adminId = req.adminId;

  const courses = await courseModel.find({
    creatorId: adminId
  })

  res.json({
    message: "All the courses created by you",
    courses
  })

  console.log(courses);
})

module.exports = {
  adminRouter: adminRouter
}