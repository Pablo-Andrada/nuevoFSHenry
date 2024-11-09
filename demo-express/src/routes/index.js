//aca van a estar definidas las rutas atraves de las cuales nos podemos comunicar

//Tengo definida la solicitud a GET/users => controlador (se lo va a pedir al controlador)

const {testControler} = require("../controllers/index");
const { Router } = require("express");

const router = Router();

router.get("/", testControler);

module.exports = router;