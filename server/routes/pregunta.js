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

// cuando sea api/preguntas
app.get('/',(req,res)=>{
  res.status(200).json(preguntas);
});

//cuando se api/preguntas/:id
app.get('/:id',(req,res)=>res.status(200).json(pregunta));

export default app;