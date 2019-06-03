import express from 'express';
import { pregunta } from './routes';
const app = express();

// si estemos en un entorno de desarrollo
// node_env indica en que entonrno estamos
if (process.env.NODE_ENV==='development'){
  app.use((req,res,next)=>{
    //seteamos el Header para que cualquiera dominio puede accedesr a los datos..
    // obs: el entonrno de desarrolo lo indiamos en el package.json 
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
  })
}
app.use('/api/preguntas',pregunta);

export default app;