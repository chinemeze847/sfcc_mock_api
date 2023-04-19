import path from "path";
import {Sequelize} from "sequelize-typescript"


const db = 'sfccdb'
const username = 'root'
const password = 'thankgod'

export const sequelize = new Sequelize(db, username, password, {
   host: 'localhost',
   dialect: 'mysql',
   port: 3306,
   models: [path.join(`./${__dirname}`,'../models')]
   // models: [__dirname + '../models'] 
});