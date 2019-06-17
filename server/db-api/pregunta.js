import {Pregunta, Respuesta} from '../models';
import Debug from 'debug';

const debug = new Debug('platzi-overflow:db-api:preguntas');
export default{
  // esto va hacer es pedir al modelo de preguntas todas las preguntas q encuentre en la bd
  findAll: (sort)=>{ 
    debug('Encontrando todas las preguntas');
    return Pregunta.find().populate('respuestas').sort(sort) // si no pasame ningun parametro trea todo..y si queres las pregun con las respuestas es el populate
  },
  // busca en el modelo la pregunta = id 
  findById: (id)=>{
    debug(`Buscando la pregunta con id = ${id}`);
    return Pregunta
    .findOne({_id:id})
    .populate('usuario')
    .populate({
      path:'respuestas',
      option: {sort: '-createAt'},// me trae los mas nuevo hasta los mas viejos (respuestas)
      // para respuesta haga un populate de los usuarios
      populate: {
        path: 'usuario',
        model: 'Usuario'
      }
    });
  },
  // crea una pregunta
  crear: (preg)=>{
    debug(`Creando una pregunta ${preg}`);
    const pregunta = new Pregunta(preg);
    return pregunta.save();
  },
  //crea una respuesta
  crearRespuesta: async (miPregunta,miRespuesta)=>{
    try {
      debug(`Creando una repuesta a la pregunta `);
      const respuesta = new Respuesta(miRespuesta);
      const respuestaGuardada = await respuesta.save();
      miPregunta.respuestas.push(respuestaGuardada);
      await miPregunta.save();
      
      return respuestaGuardada;
    } catch (error) {
      console.log(error);
    }

  } 
}