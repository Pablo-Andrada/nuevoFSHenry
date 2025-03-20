import { VehicleModel } from "../config/data-source"
import VehicleDto from "../dto/VehicleDto"
import { Vehicle } from "../entities/Vehicle";


export const createVehicleService =async(vehicleData: VehicleDto): Promise<Vehicle> => {
    const vehicle = await VehicleModel.create(vehicleData);
    const result = await VehicleModel.save(vehicle);
    return result;
}

export const getVehiclesService = async (): Promise<Vehicle[]>  => {
    const vehicles = await VehicleModel.find();
    return vehicles;
}