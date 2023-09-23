import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-porfile',
  templateUrl: './porfile.component.html',
  styleUrls: ['./porfile.component.css']
})
export class PorfileComponent {
  public myUser: User;

  constructor(private myUserService: UserService){
    this.myUser = this.myUserService.user;    
  }

  enviar(nuevoNombre: HTMLInputElement, 
    nuevoApe: HTMLInputElement,
    nuevoEmail: HTMLInputElement,
    nuevaFoto: HTMLInputElement){
      
    this.myUser.nombre = nuevoNombre.value;
    this.myUser.apellido = nuevoApe.value;
    this.myUser.email = nuevoEmail.value;
    this.myUser.foto = nuevaFoto.value;
}

}