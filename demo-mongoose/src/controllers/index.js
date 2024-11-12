//En este módulo van a estar definidas las funciones que establecen LA LÓGICA DE NEGOCIO de cada una de las rutas


//Para esa ruta GET /users =>

// vamos a ir a la base de datos a pedir informacion de los usuarios
// y responder al cliente con la informacion obtenida

const userControler = (req,res) => {
    res.status(200).send("estamos recibiendo una respuesta de los usuarios")    
}
const postControler = (req,res) => {
    res.status(200).send("estamos recibiendo una respuesta de los posteos")
}


module.exports = {
    userControler,
    postControler
};