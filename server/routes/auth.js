import express from 'express';
import Debug from 'debug';
import { crearToken } from '../middleware/index';
import {Usuario} from '../models';
import {
  hashSync as hash,
  compareSync as comparaPassword
} from 'bcryptjs';
const app = express.Router();
const debug = new Debug('platzi-overflow:routes/auth');

// logueo
app.post('/signin',async (req,res,next)=>{
  // cuando nos registremos, del body obtendremos el email y pass
  const {email, password}  = req.body;
  // console.log({email, password} )
  const usuario = await Usuario.findOne({email});
  // console.log(usuario);
  if(!usuario){
    debug(`Usuario con email ${email} no existe`);
    // para indica q el usuario no pudo logear
    return handlerFalloLogin(res)
  }
  // verfivico el pass
  if(!comparaPassword(password,usuario.password)){
    debug(`Password son distintas: ${password} !== ${usuario.password}`);
    return handlerFalloLogin(res,'El correo y la contraseña no coinciden')
  }

  // el usu existe y la pass q se obtuvo machea con la pass q esta en el sistema
  const token = crearToken(usuario);

  res.status(200).json({
    message: 'Login correcto',
    token,
    usuarioId: usuario._id,
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    email: usuario.email
  })
});

// registro
// POST /api/auth/signup para salvar usuario..
app.post('/signup',async (req,res)=>{
  // los parametro q me envias desde formulario de creacion, desde signup
  const {nombre, apellido,email,password} = req.body;

  const u  = new Usuario({
    nombre,
    apellido,
    email,
    password: hash(password,10)
  });

  debug(`Creando el nuevo usuario: ${u}`);
  // guardamos el usuario
  const usuario = await u.save();

  // creamos el token
  const token = crearToken(usuario);
  // respondemos un 200 q se creo el usuario
  res.status(200).json({
    message:'Usuario generado satisfactoriamente',
    token,
    usuarioId: usuario._id,
    nombre,
    apellido,
    email
  });
});

function handlerFalloLogin(res,message){
  return res.status(401).json({
    message: 'Fallo el Login.',
    error: message || 'Email y Password no son correcto.'
  });
}

export default app;
