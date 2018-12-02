export class Usuario{
  constructor(
    public email: string,
    public password: string,
    public primerNombre? : string,
    public segundoNombre? : string
  ){}
  public fullNombres(){
    return `${this.primerNombre} ${this.segundoNombre}`; 
  }
}