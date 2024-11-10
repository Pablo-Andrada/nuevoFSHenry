const { Router } = require("express");
const { postControler } = require("../controllers");

const postRouter = Router();

postRouter.get("/", postControler);



module.exports = postRouter;