import {Pregunta} from '../models';

import Debug from 'debug';
const debug = new Debug('platzi-overflow:db-api:preguntas');
export default{
  // esto va hacer es pedir al modelo de preguntas todas las preguntas q encuentre en la bd
  findAll: async ()=>{ 
    debug('Encontrando todas las preguntas');
    return await Pregunta.find().populate('respuestas') // si no pasame ningun parametro trea todo..y si queres las pregun con las respuestas es el populate
  },
  findById: async(idPregunta)=>{
    debug(`Encontrando una pregunta por id = ${idPregunta}`);
    return await Pregunta
      .findOne({idPregunta})
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
  }
}