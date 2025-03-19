import { Request, Response } from "express";
import { createUserService, getUsersService, deleteUserService,getUserByIdService } from "../services/usersServices";
import IUser from "../interfaces/IUser";

export const createUser = async (req: Request, res: Response) => { 
    const { name, email,age, active } = req.body;
    const newUser: IUser = await createUserService({ name, email, age, active });
    res.status(201).json(newUser);
};

export const getUsers = async (req: Request, res: Response) => { 
    const users: IUser[] = await getUsersService();
    res.status(200).json(users);
};

export const getUsersById = async (req:Request , res:Response) => {
    const { id } = req.params;
    const user: IUser|null = await getUserByIdService(Number(id));
    res.status(200).json(user);
}

export const deleteUser = async (req:Request,res:Response) => {
    const { id } = req.body;
    await deleteUserService(id);
    res.status(200).json({message:"Eliminado con éxito"})
 };