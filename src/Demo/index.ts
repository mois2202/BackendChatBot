import express from 'express'
import { demoUserRoutes } from './users/userRoute';

const app = express();

app.use(express.json());

const PORT = 3000


app.use('/Demo', demoUserRoutes);



app.listen(PORT, () => {
    console.log(`Server in ready on port ${PORT}`);
})

