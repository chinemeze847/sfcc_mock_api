import path from "path";
import {Sequelize} from "sequelize-typescript"
import * as dotenv from 'dotenv';

dotenv.config();


const db = process.env.MY_SQL_DB_DATABASE
const username = process.env.MY_SQL_DB_USER
const password = process.env.MY_SQL_DB_PASSWORD

export const sequelize = new Sequelize(db, username, password, {
   host: 'localhost',
   dialect: 'mysql',
   port: 3306,
   models: [path.join(`./${__dirname}`,'../models')]
});