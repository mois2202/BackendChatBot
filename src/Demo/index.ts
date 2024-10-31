import express from 'express'
import sequelize from './shared/db/dbConnection';
import { demoUserRoutes } from './users/userRoute';
import { createUserModule } from './users/createUserModule';

const PORT = 3000



const app = express();

app.use(express.json());


app.use('/Demo', demoUserRoutes);

createUserModule();

const main = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection to database established successfully.");
        await sequelize.sync({ alter: true });
    
        app.listen(PORT, () => {
          console.log(`Server is ready on port ${PORT}`);
        });
      } catch (error) {
        console.error('Error during database connection or project execution:', error);
      }
}

main();