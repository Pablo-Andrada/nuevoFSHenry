//Aqui vamos a definir las rutas a traves de las cuales nos podemos comunicar

//Tengo definida la solicitud a GET/users => controlador

const { Router } = require('express');
const { testController } = require('../controllers/index');
const router = Router();

router.get('/', testController);


module.exports = router;