export class User {
    public nombre:string;
    public apellido:string;
    public email:string;
    public photo:string;
    public password:string;

  constructor(nombre:string, apellido:string, email:string, photo:string, password:string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.photo = photo;
    this.password = password;
  }

  nombreCompleto(){
    return this.nombre + " " + this.apellido;
    
  }
}
