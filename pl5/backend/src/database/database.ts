import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();

console.log(Number(process.env.PORT))

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    logging: false,
    entities: ["src/models/*.ts"],
})