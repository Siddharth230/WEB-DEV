const { Router } = require("express");
const { userMiddleware } = require("../middlewares/user");
const { logger } = require("../middlewares/logger");
const { purchaseModel, courseModel } = require("../db");

const courseRouter = Router();

courseRouter.post("/purchase", logger, userMiddleware, async function (req, res) {
  const userId = req.userId;

  const courseId = req.body.courseId;

  const purchase = await purchaseModel.create({
    userId,
    courseId
  })

  res.json({
    message: "Course purchased",
    purchase
  })

  console.log(purchase);
})

courseRouter.get("/library", logger, async function(req, res) {
  const courses = await courseModel.find({})
  res.json({
    message: "All available courses library endpoint",
    courses
  })
  console.log(courses);
})


module.exports = {
  courseRouter: courseRouter
}