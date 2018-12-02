export class Usuario{
  constructor(
    public primerNombre : string,
    public segundoNombre : string
  ){}
  public fullNombres(){
    return `${this.primerNombre} ${this.segundoNombre}`; 
  }
}