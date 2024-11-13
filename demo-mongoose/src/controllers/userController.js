const userService = require("../services/userService");


module.exports = {
    getAllUser: async (req, res) => {
        try {
            const users = await userService.getUsers();
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor"
            })
        }
    },
    getUserById: async(req,res) => {
        const { id } = req.params;
        const user = await userService.getUserById(id);
        res.status(200).json(user);
    },
    getUserByName: async (req,res) => {
        const { name } = req.body;
        const user = await userService.findUserByName(name);
        res.status(200).json(user);
    } ,
    addVehicle: async(req,res) => {
        const { userId,vehicleId } = req.body;
        await userService.addVehicle({ userId, vehicleId });
        res.status(200).json({message:"Todo correcto"})
    },
    createUser: async (req, res) => {
        const { name, email, age } = req.body;
        const newUser = await userService.createUser({ name, email, age });
        res.status(201).json(newUser)
    },
}
