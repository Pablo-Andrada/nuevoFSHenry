const { Router } = require("express");
const { userControler } = require("../controllers");

const userRouter = Router();

userRouter.get("/", userControler);

module.exports = userRouter;