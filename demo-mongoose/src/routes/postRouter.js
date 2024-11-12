const { Router } = require("express");
const postControler = require("../controllers/postController")

const postRouter = Router();

postRouter.get("/", postControler.getAllPost);



module.exports = postRouter;