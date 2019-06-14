 
//  const pregunta = {
//   _id: 1,
//   titulo : '¿Cómo reutilizar un componente android?',
//   descripcion: 'Miren esta es mi pregunta..',
//   fechaCreada: new Date(),
//   icon: 'devicon-android-plain',
//   respuestas:[],
//   usuario:{
//     nombre:'Alejnadro',
//     apellido: 'Valenzuela',
//     email: 'tzalejo@gmail.com',
//     password:'123456'
//   }
// }

// export const preguntas = new Array(10).fill(pregunta);

// export const  preguntasMiddleware = (req,res,next) =>{
//   req.preguntas = preguntas; // +id : lo que hace es convertirlo en numero
//   next();
// }
// // este middleware ecuentra una pregunta a partir del paramentro q le llega..
// export const  preguntaMiddleware = (req,res,next) =>{
//   const { id } = req.params;
//   req.pregunta = preguntas.find(({_id}) => _id === +id); // +id : lo que hace es convertirlo en numero
//   next();
// }

