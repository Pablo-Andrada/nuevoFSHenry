//En este módulo estan las funciones que definen la LÓGICA DE NEGOCIO de cada una de las rutas
//                                                            ||
//                                      Me va a decir QUE tengo que hacer pero NO lo va hacer


//Para esa ruta GET/ users =>
// Vamos a ir a la base de datos a pedir la información de los usuarios Y
// Y responder al cliente con la informacion obtenida.


//El controlador tambien va a manejar errores

const userController = (req,res) => {
  res.status(200).send("Estamos recibiendo correctamente una solicitud a users")    
}
const postController = (req,res) => {
  res.status(200).send("Estamos recibiendo correctamente una solicitud a posts")    
}

module.exports = {
  userController,
  postController
};