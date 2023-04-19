import path from "path";
import {Sequelize} from "sequelize-typescript"


const db = 'sfccdb'
const username = 'root'
const password = 'thankgod'
console.log(path.join(`./${__dirname}`,'../models'))

export const sequelize = new Sequelize(db, username, password, {
   host: '127.0.0.1',
   dialect: 'mysql',
   port: 3306,
   models: [path.join(`./${__dirname}`,'../models')]
   // models: [__dirname + '../models'] 
});