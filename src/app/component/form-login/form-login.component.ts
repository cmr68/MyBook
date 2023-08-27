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
  public user: User;
  // public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    // this.buildForm();
    this.user = new User("","","","","");
  }
  // private buildForm()
  // {
  //   const minPassLength = 0;

  //   this.myForm = this.formBuilder.group({
  //     nombre: [, Validators.required],
  //     email: [, [ Validators.required, Validators.email]],
  //     password:[, [Validators.required, Validators.minLength(minPassLength)]]
  //   });
  // }

  onSubmit(form:NgForm){
    console.log(form.value);
    console.log(this.user);
    
  }

  ngOnInit(): void {
    
  }
}
