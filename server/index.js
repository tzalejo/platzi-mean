import http from 'http';
// import Debug from 'debug';
import app from './app';
// traemos mongoose para la conexion d mongo
import mongoose from 'mongoose';
import { mongoUrl } from './config';

const PORT = 3000;
// const debug = new Debug('platzi-overflow:root');
var debug = require('debug')('platzi-overflow:root');

// primero vamos a conectar a mongo
async function start(){
  await mongoose.connect(mongoUrl,{ useNewUrlParser: true, useCreateIndex: true });
  
  app.listen(PORT,()=>{
    debug(`Escuchando desde Servidor puerto ${PORT}`);
  });
}

start();