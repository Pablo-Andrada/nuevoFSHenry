const { Router } = require("express");
const userControler = require("../controllers/userController");
const validateUser = require("../middleware/validateUser");

const userRouter = Router();

userRouter.get("/", userControler.getAllUser);
userRouter.post("/", validateUser ,userControler.createUser);


module.exports = userRouter;