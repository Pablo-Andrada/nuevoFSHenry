import { VehicleModel , UserModel } from "../config/data-source"
import VehicleDto from "../dto/VehicleDto"
import { Vehicle } from "../entities/Vehicle";


export const createVehicleService =async(vehicleData: VehicleDto): Promise<Vehicle> => {
    const newvehicle = await VehicleModel.create(vehicleData);
    const result = await VehicleModel.save(newvehicle);

    // En este punto el vehiculo esta creado, pero falta indicar quien es el dueño -->.

    const user = await UserModel.findOneBy({
        id: vehicleData.userId
    });

    // if (user) {
    //     user.vehicle = newvehicle;
    //     await UserModel.save(user)
    // } else {
    //     throw Error("El usuario no existe")
    // }

    return newvehicle;
}

export const getVehiclesService = async (): Promise<Vehicle[]>  => {
    const vehicles = await VehicleModel.find();
    return vehicles;
}