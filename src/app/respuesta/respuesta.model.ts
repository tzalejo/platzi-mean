import { Pregunta } from "../pregunta/pregunta.module";

export class Usuario{
  constructor(
    public primerNombre : string,
    public segundoNombre : string
  ){}
}

export class Respuesta {
  constructor(
    public descripcion : string,
    public pregunta: Pregunta,
    public fechaCreada?: Date,
    public usuario?:Usuario

  ) {
    
  }

}