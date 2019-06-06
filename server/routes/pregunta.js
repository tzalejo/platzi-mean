import express from 'express';

const app = express.Router();

const pregunta = {
  _id: 1,
  titulo : '¿Cómo reutilizar un componente android?',
  descripcion: 'Miren esta es mi pregunta..',
  fechaCreada: new Date(),
  icon: 'devicon-android-plain',
  respuesta:[],
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
app.get('/:id',(req,res)=>{
  const { id } = req.params;
  const preg = preguntas.find(({_id}) => _id === +id) // +id : lo que hace es convertirlo en numero
  res.status(200).json(preg)

});

// POST api/preguntas/
app.post('/',(req,res)=>{
  const pregunta = req.body;
  pregunta._id = +new Date();
  pregunta.usuario ={
    email: 'tzalejo@gmail.com',
    password : '1234',
    nombre: 'alejandro',
    apellido: 'valenzuela'
  }
  pregunta.fechaCreada = new Date();
  pregunta.respuesta = [];
  preguntas.push(pregunta);
  res.status(200).json(pregunta);
}) 
export default app;