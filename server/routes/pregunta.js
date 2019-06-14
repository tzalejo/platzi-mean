import express from 'express';
import { requerid } from '../middleware/index';
import { pregunta } from '../db-api';
import { handleError } from '../utils';

const app = express.Router();

// para obtener todas las respuestas..
// GET api/preguntas
app.get('/',async (req,res)=>{
  try {
    const preguntas = await pregunta.findAll()
    res.status(200).json(preguntas);
  } catch (error) { 
    handleError('Un error ha ocurrido en obtener todas las preguntas',error,res);
  }
});

// GET api/preguntas/:id
// agregamos un middleware para buscar "pregunta" del id correspondiente.. 
app.get('/:id',async (req,res)=>{

  try {
    const { id } = req.params;
    const pregunta = await pregunta.findById({id});
    // const preg = preguntas.find(({_id}) => _id === +id) // +id : lo que hace es convertirlo en numero
    res.status(200).json(pregunta); // req.pregunta viene del middleware
  } catch (error) {
    handleError('Un error ha ocurrido en obtener la pregunta',error,res);
  }

});

// para crear un pregunta
// POST api/preguntas/
app.post('/',requerid,(req,res)=>{
  const pregunta = req.body;
  pregunta._id = +new Date();
  pregunta.usuario = req.usuario; // viene del middleware

  pregunta.fechaCreada = new Date();
  pregunta.respuesta = [];
  preguntas.push(pregunta); // req viene del middleware preguntaMiddleware
  res.status(200).json(pregunta);
});


// POST  /api/preguntas/:id/respuestas
app.post('/:id/respuestas',requerid,(req,res)=>{
  const respuesta = req.body;
  const preg = req.pregunta; // viene del middleware
  respuesta.fechaCreada = new Date(); // seteamos la fecha creada...
  // el usuario quien creo esta respuesta
  respuesta.usuario = req.usuario; // req.usuario lo trae el middleware
  // 
  preg.respuestas.push(respuesta);
  console.log(preg);
  res.status(201).json(respuesta)
});

export default app;