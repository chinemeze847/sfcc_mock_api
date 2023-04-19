import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { sequelize } from "./instances/sequelize"
import routes from './routes';

const app = express();
app.use(express.json())

// create database pool
dotenv.config();

if(!process.env.PORT){
    process.exit(1);
}
const port = parseInt(process.env.PORT as string)

app.use('/api', routes);


//App is listening on
app.listen(port, () => {
  console.log(`SFCC API app listening at http://localhost:${port}`)
  sequelize.authenticate().then(async() => {
    console.log("database connected")

    try {
        await sequelize.sync({force: true, alter: {drop: false}})
        console.log("I am executing...")
    } catch (error) {
        console.log(error.message)
    }

}).catch( (e: any) => {
    console.log(e.message)
})
});