import express from 'express';
import bodyParser  from 'body-parser';
import { pregunta,auth } from './routes';
const app = express();

// para poder leer todo lo q  venga en formato json desde el cliente..
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));// para q nuestro servidor pueda leer todo lo q venga en utf-8

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
  });
}
app.use('/api/preguntas',pregunta);
app.use('/api/auth',auth);

export default app;