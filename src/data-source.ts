import "reflect-metadata"
import { DataSource } from "typeorm"
import { Employee } from "./entity/employee"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "hr_db",
    synchronize: false,
    logging: false,
    entities: [Employee],
    migrations: [],
    subscribers: [],
})
