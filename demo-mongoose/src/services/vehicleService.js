const Vehicle = require("../models/Vehicle");

module.exports = {
    getAllVehicle: async () => {
        const vehicles = await Vehicle.find();
        return vehicles;
    },
    createVehicle: async (patente,marca) => {
        const newVehicle = await Vehicle.create(patente,marca);
        return newVehicle;
    }
}