import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string;
  public logueado: boolean;
  public user: User;

  constructor(private toastr: ToastrService, private http: HttpClient) { 
    this.logueado = false;
  }

  //Post register
  register(user: User):Observable<Object>{
    this.url = "http://localhost:4000/register";
    return this.http.post(this.url,user)
  }

  //Post user
  login(user: User):Observable<Object>{
    this.url = "http://localhost:4000/login";
    return this.http.post(this.url,user)
  }

  muestraMensaje(error:boolean, mensaje:string){
    if(error===false){
      this.toastr.success(mensaje,"", {timeOut:2000, positionClass: 'toast-top-center'});
    }else{
      this.toastr.error(mensaje,"", {timeOut:2000, positionClass: 'toast-top-center'});
    }
  }

  edit(usuario:User):Observable<Object>{
    this.url = "http://localhost:4000/user";
    return this.http.put(this.url,usuario)
  }
  isLoggedIn(){
    return this.logueado;
  }
}


