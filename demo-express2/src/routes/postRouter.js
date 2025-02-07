const { Router } = require('express');
const { postController } = require('../controllers/index');


const userRouter = Router();
userRouter.post("/posts",postController)

module.exports = userRouter;