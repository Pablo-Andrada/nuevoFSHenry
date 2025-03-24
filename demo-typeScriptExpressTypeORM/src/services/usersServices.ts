import { AppDataSource, UserModel } from "../config/data-source";
import UserDto from "../dto/UserDto";
import { User } from "../entities/User";
import IUser from "../interfaces/IUser";

let users: IUser[] = [];
let id: number = 1;

export const createUserService = async (userData: UserDto):Promise<User>  => { 
    const user = await UserModel.create(userData);
    const result = await UserModel.save(user)
    return user;


    // // recibir los datos del usuario
    // // crear un nuevo usuario
    // const newUser: IUser = {
    //     id,
    //     name: userData.name,
    //     email: userData.email,
    //     age:userData.age,
    //     active: userData.active
    // }
    // // incluir al nuevo usuario dentro dle arreglo
    // users.push(newUser);
    // id++;
    // // retornar el objeto creado
    // return newUser;
};

export const getUsersService = async (): Promise<User[]> => {
    const users = await UserModel.find({
        relations: {
            vehicles:true
        }
    });
    return users;
 };
export const getUserByIdService = async (id: number): Promise<User | null> => {
    const user = await UserModel.findOneBy({ id });
    return user;
}
export const deleteUserService = async (id: number):Promise<void> => {
    users = users.filter((user:IUser) => {
        return user.id !== id;
    })
 };