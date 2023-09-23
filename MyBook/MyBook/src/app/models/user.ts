export class User {
              public id_user: number;
              public nombre:string;
              public apellido:string;
              public email:string;
              public foto:string;
              public password:string
  constructor(
               nombre:string,
               apellido:string,
               email:string,
               foto:string,
               password:string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.foto = foto;
    this.password = password;
  }

  nombreCompleto(){
    return this.nombre + " " + this.apellido;
    
  }
}
