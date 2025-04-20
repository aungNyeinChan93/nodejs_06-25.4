import express from 'express';
import TestRouter from './routes/testRoutes.mjs';

const PORT = 3000;
const app = express();
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use('/api/test', TestRouter);

