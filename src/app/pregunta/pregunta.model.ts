import { Respuesta } from "../respuesta/respuesta.model";

// el modelo de las pregunta para todas las preguntas..
export class Pregunta{
  titulo:string;
  descripcion: string;
  fechaCreada?: Date;
  icon?: string;
  respuesta: Respuesta[];
  constructor(
    titulo: string,
    descripcion: string,
    fechaCreada?:Date,
    icon?:string
  ){
    this.titulo=titulo;
    this.descripcion= descripcion;
    this.fechaCreada = fechaCreada;
    this.icon = icon;
    this.respuesta=[];
  }
}