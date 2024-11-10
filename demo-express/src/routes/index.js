//aca van a estar definidas las rutas atraves de las cuales nos podemos comunicar

//Tengo definida la solicitud a GET/users => controlador (se lo va a pedir al controlador)

const { Router } = require("express");
const { userRouter } = require("./userRouter");
const { postRouter } = require("./postRouter");

const router = Router();

router.use("/users", userRouter);
router.use("/posts", postRouter);

module.exports = router;