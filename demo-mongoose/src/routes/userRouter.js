const { Router } = require("express");
const userControler = require("../controllers/userController");
const validateUser = require("../middleware/validateUser");

const userRouter = Router();

userRouter.get("/", userControler.getAllUser);
userRouter.get("/byName", userControler.getUserByName);
userRouter.get("/:id",userControler.getUserById)
userRouter.post("/", validateUser ,userControler.createUser);


module.exports = userRouter;