export class Usuario{
  constructor(
    public email: string,
    public password: string,
    public nombre? : string,
    public apellido? : string
  ){}
  public fullNombres(){
    return `${this.nombre} ${this.apellido}`; 
  }
}