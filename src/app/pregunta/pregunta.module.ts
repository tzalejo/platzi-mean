import { Respuesta } from "../respuesta/respuesta.model";

export class Pregunta{
  titulo:string;
  descripcion: string;
  createAd?: Date;
  icon?: string;
  respuesta: Respuesta[];
  constructor(
    titulo: string,
    descripcion: string,
    createAd?:Date,
    icon?:string
  ){
    this.titulo=titulo;
    this.descripcion= descripcion;
    this.createAd = createAd;
    this.icon = icon;
    this.respuesta=[];
  }
}