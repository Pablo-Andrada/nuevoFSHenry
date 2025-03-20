import { Request, Response } from "express";
import { Vehicle } from "../entities/Vehicle";
import { createVehicleService, getVehiclesService } from "../services/vehiclesServices";

// export const createUser = async (req: Request, res: Response) => { 
//     const { name, email,age, active } = req.body;
//     const newUser: User = await createUserService({ name, email, age, active });
//     res.status(201).json(newUser);
// };

export const createVehicle = async (req: Request, res: Response) => {
    const { id,brand, color, model, year } = req.body;
    const newVehicle: Vehicle = await createVehicleService({ id,brand, color, model, year });
    res.status(201).json(newVehicle);
};

export const getVehicles = async (req: Request, res: Response) => { 
    const vehicles: Vehicle[] = await getVehiclesService();
    res.status(200).json(vehicles);
}