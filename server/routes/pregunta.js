import express from 'express';

const app = express.Router();

const usuarioActual = {
  nombre:'Alejandro',
  apellido: 'Valenzuela',
  email: 'tzalejo@gmail.com',
  password:'123456'
}

// este middleware ecuentra una pregunta a partir del paramentro q le llega..
function preguntaMiddleware(req,res,next){
  const { id } = req.params;
  req.pregunta = preguntas.find(({_id}) => _id === +id); // +id : lo que hace es convertirlo en numero
  next();
}

// definimos el usuario actual(q se logeo)
function usuarioMiddleware(req,res,next){
  req.usuario = usuarioActual;
  next();
}

const pregunta = {
  _id: 1,
  titulo : '¿Cómo reutilizar un componente android?',
  descripcion: 'Miren esta es mi pregunta..',
  fechaCreada: new Date(),
  icon: 'devicon-android-plain',
  respuestas:[],
  usuario:{
    nombre:'Alejnadro',
    apellido: 'Valenzuela',
    email: 'tzalejo@gmail.com',
    password:'123456'
  }
}

const preguntas = new Array(10).fill(pregunta);

// GET api/preguntas
app.get('/',(req,res)=>{
    res.status(200).json(preguntas);
});

// GET api/preguntas/:id
// agregamos un middleware para buscar "pregunta" del id correspondiente.. 
app.get('/:id',preguntaMiddleware,(req,res)=>{
  // const { id } = req.params;
  // const preg = preguntas.find(({_id}) => _id === +id) // +id : lo que hace es convertirlo en numero
  res.status(200).json(req.pregunta); // req.pregunta viene del middleware

});

// POST api/preguntas/
app.post('/',usuarioMiddleware,(req,res)=>{
  const pregunta = req.body;
  pregunta._id = +new Date();
  pregunta.usuario = req.usuario; // viene del middleware

  pregunta.fechaCreada = new Date();
  pregunta.respuesta = [];
  preguntas.push(pregunta);
  res.status(200).json(pregunta);
});

// POST  /api/preguntas/:id/respuestas
app.post('/:id/respuestas',preguntaMiddleware,usuarioMiddleware,(req,res)=>{
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