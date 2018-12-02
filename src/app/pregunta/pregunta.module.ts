export class Pregunta{
  titulo:string;
  descripcion: string;
  createAd?: Date;
  icon?: string;
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
  }
}