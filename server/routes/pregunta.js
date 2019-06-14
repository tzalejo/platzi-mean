import express from 'express';
import {
  requerid,preguntasMiddleware, preguntaMiddleware,preguntas
} from '../middleware/index';

const app = express.Router();

// para obtener todas las respuestas..
// GET api/preguntas
app.get('/',preguntasMiddleware,(req,res)=>{
    res.status(200).json(req.preguntas);
});

// GET api/preguntas/:id
// agregamos un middleware para buscar "pregunta" del id correspondiente.. 
app.get('/:id',preguntaMiddleware,(req,res)=>{
  // const { id } = req.params;
  // const preg = preguntas.find(({_id}) => _id === +id) // +id : lo que hace es convertirlo en numero
  res.status(200).json(req.pregunta); // req.pregunta viene del middleware

});

// para crear un pregunta
// POST api/preguntas/
app.post('/',requerid,preguntaMiddleware,(req,res)=>{
  const pregunta = req.body;
  pregunta._id = +new Date();
  pregunta.usuario = req.usuario; // viene del middleware

  pregunta.fechaCreada = new Date();
  pregunta.respuesta = [];
  preguntas.push(pregunta); // req viene del middleware preguntaMiddleware
  res.status(200).json(pregunta);
});


// POST  /api/preguntas/:id/respuestas
app.post('/:id/respuestas',requerid,preguntaMiddleware,(req,res)=>{
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