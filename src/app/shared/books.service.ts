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
    
    this.books = [
      // new Book (10,0,"Primer libro", "Tapa blanda", "Autor1", 20, ""),
      // new Book (43464,562,"Segundo libro", "Tapa blanda", "Autor2", 20, "https://correos-marketplace.ams3.cdn.digitaloceanspaces.com/prod-new/uploads/correos-marketplace-shop/1/product/42464-hypp15nz-libro-el-corazon-helado-almudena-grandes-5.jpg"),
      // new Book (67884,562,"Tercer libro", "Tapa blanda", "Autor3", 20, ""),
      // new Book (31152,562,"Cuarto libro", "Tapa blanda", "Autor3", 20, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRigg5lNzYrLCaKM24Vvbwj9dnWsKR63lUiPQ&usqp=CAU")
    ];
   }
  //Antes del API REST
  // getAll(): Book[]{
  //   return this.books;
  // }
  
  //Get API REST
  getAll():Observable<Object>{
    return this.http.get(this.url);
  }

  getOne(id_libro: number):Observable<Object>{
    return this.http.get(this.url + id_libro);
  }
  // getOne(id_libro: number):Observable<Object>{
  //   let oneBook:Book = this.books.find(book => book.id_book == id_libro);
  //   return oneBook; 
  // }

  // add(newbook: Book): void{
  //   this.books.push(newbook);
  // }
  
  //post API REST
  addBook(newbook: Book):Observable<Object>{
    return this.http.post(this.url,newbook);
  }

  // edit(editBook: Book): boolean{
  //   let bool = false;
  //   let updateBook = this.books.map(book => 
  //     book.id_book === editBook.id_book ? editBook : book);
    
  //   if(updateBook !== this.books){
  //     this.books = updateBook;
  //     bool = true;
  //   }
  //   return bool;
  // }

  edit(editBook: Book):Observable<Object>{
    return this.http.put(this.url,editBook);
  }

  // delete(deleteBook: number): boolean{
  //   let initialLength = this.books.length;
  //   this.books = this.books.filter(book => book.id_book !== deleteBook);
  //   return this.books.length < initialLength;
  // }
  delete(deleteBook: number): Observable<Object>{
    return this.http.request('delete', this.url, {body:{id_book:deleteBook}});
  }

  muestraMensaje(error:boolean, mensaje:string){
    if(error===false){
      this.toastr.success(mensaje,"", {timeOut:2000, positionClass: 'toast-top-center'});
    }else{
      this.toastr.error(mensaje,"", {timeOut:2000, positionClass: 'toast-top-center'});
    }
  }

}
