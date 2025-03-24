import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Vehicle } from "../entities/Vehicle";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "demo_typeorm",
    // dropSchema: true,   //esta linea sirve para reiniciar la base de datos, es decir los usuarios y vehicles
    synchronize: true,
    logging: false,
    entities: [User, Vehicle],
    subscribers: [],
    migrations: [],
});

export const UserModel = AppDataSource.getRepository(User);
export const VehicleModel = AppDataSource.getRepository(Vehicle);