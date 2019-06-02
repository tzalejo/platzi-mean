import express from 'express';
import { pregunta } from './routes';
const app = express();

// 
app.use('/api/preguntas',pregunta);

export default app;