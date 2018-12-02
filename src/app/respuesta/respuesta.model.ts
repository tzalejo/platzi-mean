import { Pregunta } from "../pregunta/pregunta.model";

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