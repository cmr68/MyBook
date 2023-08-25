import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit{
  user: User;
  public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.buildForm();
    this.user = new User("","","","","");
  }
  private buildForm()
  {
    const minPassLength = 0;

    this.myForm = this.formBuilder.group({
      nombre: [, Validators.required],
      email: [, [ Validators.required, Validators.email]],
      password:[, [Validators.required, Validators.minLength(minPassLength)]],
      password2:[,[Validators.required, this.checkPasswords]],
    });
  }
  public register() 
  {
    this.user = this.myForm.value;
    console.log(this.user);
  }

  private checkPasswords(control: AbstractControl)
  {
    let resultado = {matchPassword: true};
    if (control.parent?.value.password == control.value)
      resultado = null;
    return resultado;
  }

//   private otroValidador(control: AbstractControl) {
//     const password = this.myForm.get('password').value;
//     return control.value === password ? null : { noCoinciden: true };
// }

  onSubmit(form:NgForm){
    console.log(form.value);
    console.log(this.user);
  }

  ngOnInit(): void {
    
  }
}
