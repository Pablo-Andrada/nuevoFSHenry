const { Router } = require("express");
const userControler = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/", userControler.getAllUser);


module.exports = userRouter;