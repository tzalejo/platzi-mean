import { Respuesta } from "../respuesta/respuesta.model";

// el modelo de las pregunta para todas las preguntas..
export class Pregunta{
  _id?: string;
  titulo:string;
  descripcion: string;
  fechaCreada?: Date;
  icon?: string;
  respuestas: Respuesta[];
  constructor(
    titulo: string,
    descripcion: string,
    fechaCreada?:Date,
    icon?:string
  ){
    this._id = '2';
    this.titulo=titulo;
    this.descripcion= descripcion;
    this.fechaCreada = fechaCreada;
    this.icon = icon;
    this.respuestas=[];
  }
}