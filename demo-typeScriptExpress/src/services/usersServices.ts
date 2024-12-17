import UserDto from "../dto/UserDto";
import IUser from "../interfaces/IUser";

const users: IUser[] = [];
let id: number = 1;

export const createUserService = async (userData: UserDto): Promise<IUser> => { 
    // recibir los datos del usuario
    // crear un nuevo usuario
    const newUser: IUser = {
        id,
        name: userData.name,
        email: userData.email,
        active: userData.active
    }
    // incluir al nuevo usuario dentro dle arreglo
    users.push(newUser);
    id++;
    // retornar el objeto creado
    return newUser;
};

export const getUsersService = async (): Promise<IUser[]> => {
    return users;
 };

export const deleteUserService = async () => { };