import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "demo_typeorm",
    synchronize: true,
    logging: false,
    entities: [],
    subscribers: [],
    migrations: [],
})