import { Injectable, ɵallowSanitizationBypassAndThrow } from '@angular/core';
import { Book } from '../models/book';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books:Book []; 
  private url = "http://localhost:4000/books"
  constructor(private toastr: ToastrService, private http: HttpClient) {
    
    this.books = [];
   }
  
  //Get API REST
  getAll():Observable<Object>{
    return this.http.get(this.url);
  }

  getOne(id_libro: number):Observable<Object>{
    console.log("id_libro de getOne en service: ",id_libro);
    console.log("enlace: ", this.url +"/"+ id_libro);
    
    return this.http.get(this.url +"/"+ id_libro);
  }

  //post API REST
  addBook(newbook: Book):Observable<Object>{
    return this.http.post(this.url,newbook);
  }

  edit(editBook: Book):Observable<Object>{
    return this.http.put(this.url,editBook);
  }

  delete(id_book: number): Observable<Object>{
    return this.http.request('delete', this.url, {body:{id_book:id_book}});
  }

  muestraMensaje(error:boolean, mensaje:string){
    if(error===false){
      this.toastr.success(mensaje,"", {timeOut:2000, positionClass: 'toast-top-center'});
    }else{
      this.toastr.error(mensaje,"", {timeOut:2000, positionClass: 'toast-top-center'});
    }
  }

}
