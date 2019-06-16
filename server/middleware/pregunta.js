import { pregunta } from '../db-api';
import {handleError} from '../utils';

//middleware para obtener la pregunta
export const preguntaMiddleware = async (req,res,next)=>{
  try {
    req.pregunta  = await pregunta.findById(req.params.id);
    next();
  } catch (error) {
    handleError('Error al hacer la respuesta, intentelo mas tarde.',error,res);
  }
}