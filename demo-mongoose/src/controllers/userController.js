const userService = require("../services/userService");
const catchAsync = require("../utils/catchAsync");

const getAllUser = async (req, res) => {
    const users = await userService.getUsers();
    res.status(200).json(users)
};
const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    res.status(200).json(user);
};
const getUserByName = async (req, res) => {
    const { name } = req.body;
    const user = await userService.findUserByName(name);
    res.status(200).json(user);
};
const addVehicle = async (req, res) => {
    const { userId, vehicleId } = req.body;
    await userService.addVehicle({ userId, vehicleId });
    res.status(200).json({ message: "Todo correcto" })
};
const createUser = async (req, res) => {
    const { name, email, age } = req.body;
    const newUser = await userService.createUser({ name, email, age });
    res.status(201).json(newUser)
};

module.exports = {
    getAllUser: catchAsync(getAllUser),
    getUserById: catchAsync(getUserById),
    getUserByName: catchAsync(getUserByName),
    addVehicle: catchAsync(addVehicle),
    createUser: catchAsync(createUser),
}