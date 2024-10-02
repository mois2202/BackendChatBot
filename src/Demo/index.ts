import express from 'express'
import { demoUserRoutes } from './routes/userRoute';

const app = express();
app.use(express.json());

const PORT = 3000

app.get('/users', (_req, res) => {
    console.log('users get')
    res.send('Correct')
})

app.use('Demo', demoUserRoutes);


app.listen(PORT, () => {
    console.log(`Server in ready on port ${PORT}`);
})

