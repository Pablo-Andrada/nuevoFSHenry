const { Router } = require("express");
const userControler = require("../controllers/userController");
const validateUser = require("../middleware/validateUser");
const validateId = require("../middleware/validateId");

const userRouter = Router();

userRouter.get("/", userControler.getAllUser);
userRouter.get("/byName", userControler.getUserByName);
userRouter.get("/:id",validateId, userControler.getUserById);
userRouter.put("/addVehicle", userControler.addVehicle);
userRouter.post("/", validateUser, userControler.createUser);


module.exports = userRouter;