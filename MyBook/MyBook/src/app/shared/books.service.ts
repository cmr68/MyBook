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
  getAll(id_user:number):Observable<Object>{
    // http://localhost:4000/books?id_user=1
    return this.http.get(this.url+"?id_user="+id_user);
  }

  getOne(id_user:number, id_book: number):Observable<Object>{
    console.log("id_libro de getOne en service: ",id_book);
    // http://localhost:4000/books?id_user=1&id_book=7
    return this.http.get(this.url+"?id_user="+id_user+"&id_book="+id_book);
  }

  //post API REST
  addBook(newbook: Book):Observable<Object>{
    return this.http.post(this.url,newbook);
  }

  edit(editBook: Book):Observable<Object>{
    return this.http.put(this.url,editBook);
  }

  delete(id_book: number): Observable<Object>{
    console.log(id_book);
    
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
