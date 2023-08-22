import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-porfile',
  templateUrl: './porfile.component.html',
  styleUrls: ['./porfile.component.css']
})
export class PorfileComponent {
  public myUser: User;

  constructor(){
    this.myUser = new User("Francisca", "Perez", "francisaPE@gmail.com", "https://s.t13.cl/sites/default/files/styles/manualcrop_850x475/public/t13/field-imagen/2022-01/1641311995-una-mujer-de-23-aos-y-su-beb-mueren-pisoteados-por-un-elefante.jpg.jpeg?itok=D0CS9-vw","123456");
    
  }

  enviar(nuevoNombre: HTMLInputElement, 
    nuevoApe: HTMLInputElement,
    nuevoEmail: HTMLInputElement,
    nuevaFoto: HTMLInputElement){
      
    this.myUser.nombre = nuevoNombre.value;
    this.myUser.apellido = nuevoApe.value;
    this.myUser.email = nuevoEmail.value;
    this.myUser.photo = nuevaFoto.value;

}

}
