import express from 'express';
import Debug from 'debug';
import jwt from 'jsonwebtoken';

const app = express.Router();
const debug = new Debug('platzi-overflow:auth');

const secreta  = 'miclave';

const usuarios = [
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



app.post('/signin',(req,res,next)=>{
  // cuando nos registremos, del body obtendremos el email y pass
  const {email, password}  = req.body;
  const usuario = findUsuarioByEmail(email);

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

// POST /api/auth/signup para salvar usuario..
app.post('/signup',(req,res)=>{
  // los parametro q me envias desde formulario de creacion, desde signup
  const {nombre, apellido,email,password} = req.body;

  const usuario = {
    _id: +new Date(),
    nombre,
    apellido,
    email,
    password
  }

  debug(`Creando el nuevo usuario: ${usuario.nombre}`);
  // agregamos al array(por ahora..)
  usuarios.push(usuario);
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

// creamos el token
const  crearToken = (usuario)=> jwt.sign({usuario},secreta ,{expiresIn:86400});
// buscamos el usuario via email
const findUsuarioByEmail = e => usuarios.find(({email}) => email === e );

// compara pass,passcliente es la q ingreso el usuario y passUsu es la q realmente es.
function comparaPassword(passwordCliente,passwordUsuario){
  return passwordCliente === passwordUsuario;
}

function handlerFalloLogin(res,message){
  return res.status(401).json({
    message: 'Fallo el Login.',
    error: message || 'Email y Password no son correcto.'
  });
}

export default app;
