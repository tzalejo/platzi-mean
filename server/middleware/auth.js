import Debug from 'debug';
import { secreta } from '../config/index';
import jwt from 'jsonwebtoken';

const debug = new Debug('platzi-overflow:middleware/auth');


// function findUsuarioByEmail(email){
//   return usuarios.find(usuario => usuario.email === email);
// }
// creamos el token
export const  crearToken = (usuario)=> jwt.sign({usuario},secreta ,{expiresIn:86400});

export const requerid = (req,res,next)=>{
  // verificamos que el token q envia el usuario, lo vamos a validar..
  jwt.verify(req.query.token,secreta,(err,token)=>{
    if (err) {
      debug(`JWTF was not enctrypted with  our secret`);
      return res.status(401).json({
        message: 'Unauthorized',
        error: err
      });
    }
    debug(`Token verficado correctamente ${token}`);
    req.usuario = token.usuario;
    next();
  });
}