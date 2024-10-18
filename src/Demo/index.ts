import express from 'express'
import sequelize from './db-connection';
import { demoUserRoutes } from './users/userRoute';

const app = express();

app.use(express.json());

const PORT = 3000


app.use('/Demo', demoUserRoutes);


const main = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection to database established successfully.");
        await sequelize.sync({force: true});

        app.listen(PORT, () => {
        console.log(`Server in ready on port ${PORT}`);
        })
    }
    catch{
        console.log('No fue posible la conexion a la base de datos o la ejecucion del proyecto')
    }
}

main();