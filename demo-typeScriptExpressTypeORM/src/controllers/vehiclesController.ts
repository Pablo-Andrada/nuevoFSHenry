import { Request, Response } from "express";
import { Vehicle } from "../entities/Vehicle";
import { createVehicleService, getVehiclesService } from "../services/vehiclesServices";

// export const createUser = async (req: Request, res: Response) => { 
//     const { name, email,age, active } = req.body;
//     const newUser: User = await createUserService({ name, email, age, active });
//     res.status(201).json(newUser);
// };

export const createVehicle = async (req: Request, res: Response) => {
    const {brand, color, model, year,userId } = req.body;
    const newVehicle = await createVehicleService({ brand, color, model, year,userId });
    res.status(201).json(newVehicle);
};

export const getVehicles = async (req: Request, res: Response) => { 
    const vehicles = await getVehiclesService();
    res.status(200).json(vehicles);
}