import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from 'src/app/models/respuesta';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit{
  public myUser: User;

  constructor(private formBuilder: FormBuilder, private myUserService: UserService, public router: Router){
    this.myUser = new User("","","","","");
  }

  onSubmit(form:NgForm){
    this.myUserService.login(this.myUser).subscribe((data:Respuesta)=>{
      if(data.error){
        this.myUserService.muestraMensaje(true,'Credenciales incorrectas')  
      }else{
    
        this.myUserService.user = data.dataUser;
        this.router.navigate(["/books"])
        
        this.myUserService.logueado = true;
        this.myUserService.muestraMensaje(false,'Ha iniciado sesión correctamente')  
      }
    })
  }

  ngOnInit(): void {
    
  }
}
