import express from 'express';
import { requerid } from '../middleware/index';
import { pregunta } from '../db-api';
import { handleError } from '../utils';
import { preguntaMiddleware } from '../middleware/pregunta';
import { Usuario } from '../models';

const app = express.Router();

// GET api/preguntas/:id
// agregamos un middleware para buscar "pregunta" del id correspondiente.. 
app.get('/:id',preguntaMiddleware,async (req,res)=>{
  try {
    const { id } = req.params;
    // const preg = await pregunta.findById(id);
    // const preg = preguntas.find(({_id}) => _id === +id) // +id : lo que hace es convertirlo en numero
    res.status(200).json(req.pregunta); // req.pregunta viene del middleware(preguntaMiddleware)
  } catch (error) {
    handleError('Un error ha ocurrido en obtener la pregunta',error,res);
  }

});

// para obtener todas las respuestas..
// GET api/preguntas
app.get('/',async (req,res)=>{
  try {
    const {sort} = req.query;
    console.log(sort);
    const preguntas = await pregunta.findAll(sort)
    res.status(200).json(preguntas);
  } catch (error) { 
    handleError('Un error ha ocurrido en obtener todas las preguntas',error,res);
  }
});



// para crear un pregunta
// POST api/preguntas/
app.post('/',requerid, async (req,res)=>{
  const {titulo, descripcion , icon }  = req.body;
  const p = {
    titulo,
    descripcion,
    icon,
    usuario: req.usuario._id //req.usuario._id viene del middleware requerid. Mongo transforma(mapea) id d string a nro
  }
  try {
    const preguntaSalvada = await pregunta.crear(p);
    res.status(200).json(preguntaSalvada);
  } catch (error) {
    handleError('Un error ha ocurrido al salvar la pregunta, intetelo nuevamente.',error,res);
  }
  
});

// para responder a una pregunta
// POST  /api/preguntas/:id/respuestas
app.post('/:id/respuestas',requerid,preguntaMiddleware , async (req,res)=>{
  try {
    // console.log('del body: ',req.usuario);
    // obtengo los datos
    const r = req.body;
    const p = req.pregunta; // viene del middleware
    // las almacenno en la respuesta
    r.fechaCreada = new Date();
    r.usuario = new Usuario(req.usuario);

    // grabo en la preg la respuesta obtenida
    const nuevaRespuesta = await pregunta.crearRespuesta(p,r);
    
    // devuelvo 
    res.status(200).json(nuevaRespuesta);
    
  } catch (error) {
    handleError('Un error ha ocurrido al salvar la respuesta, intetelo nuevamente.',error,res);
    
  }
});

export default app;