import Debug from 'debug';
import { secreta } from '../config/index';
import jwt from 'jsonwebtoken';

const debug = new Debug('platzi-overflow:middleware/auth');

export const usuarios = [
  {
    nombre:'Alejandro',
    apellido: 'Valenzuela',
    email: 'tzalejo@gmail.com',
    password:'1234',
    _id :123
  }
]

// function findUsuarioByEmail(email){
//   return usuarios.find(usuario => usuario.email === email);
// }
// creamos el token
export const  crearToken = (usuario)=> jwt.sign({usuario},secreta ,{expiresIn:86400});

// buscamos el usuario via email
export const findUsuarioByEmail = e => usuarios.find(({email}) => email === e );
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