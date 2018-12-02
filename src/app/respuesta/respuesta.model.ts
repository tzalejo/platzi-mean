import { Pregunta } from "../pregunta/pregunta.model";
import{ Usuario} from '../auth/Usuario.model';

export class Respuesta {
  constructor(
    public descripcion : string,
    public pregunta: Pregunta,
    public fechaCreada?: Date,
    public usuario?:Usuario

  ) {
    
  }

}