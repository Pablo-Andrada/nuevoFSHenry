const { Router } = require('express');
const {userController} = require('../controllers/index');

const userRouter = Router();
userRouter.get("/", userController);

module.exports = userRouter;