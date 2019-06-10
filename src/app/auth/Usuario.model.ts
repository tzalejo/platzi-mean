export class Usuario{
  constructor(
    public email: string,
    public password: string,
    public nombre? : string,
    public apellido? : string,
    public _id?: string
    
  ){}
  public fullNombres(){
    return `${this.nombre} ${this.apellido}`; 
  }
}