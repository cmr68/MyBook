import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit{
  public myForm: FormGroup;
  public myUser: User[];

  constructor( private formBuilder: FormBuilder, private myUserService: UserService){
    this.buildForm();
  }

  public register(){
    this.myUser = this.myForm.value;
    console.log(this.myUser);
   
    let newUser = new User(
                          this.myUser[0].nombre,
                          this.myUser[0].apellido,
                          this.myUser[0].email,
                          this.myUser[0].foto,
                          this.myUser[0].password
                          );
    //Llamar a la funcion register
    this.myUserService.register(newUser[0]).subscribe((sql:Respuesta)=>{
      console.log(sql);
      if(sql.error){
        console.log("ERROR EN USER CONSTRUCTOR");
      }else{
        //HE PUESTO SQL[0]
        this.myUser = sql[0].dataUser;
        console.log("sql.dataUser",sql.dataUser);
        
      }
    });
  }

  private buildForm(){
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      email: [, [ Validators.required, Validators.email]],
      foto: ['',Validators.required],
      password:[, [Validators.required, Validators.minLength(minPassLength)]],
      password2:[,[Validators.required, this.checkPasswords]]
    });
  }

  private checkPasswords(control: AbstractControl){
    let resultado = {matchPassword: true};

    if (control.parent?.value.password == control.value)
      resultado = null;

    return resultado;
  }

  ngOnInit(): void {
    
  }
}
