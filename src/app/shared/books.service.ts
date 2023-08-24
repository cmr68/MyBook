import { Injectable, ɵallowSanitizationBypassAndThrow } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books:Book []; 
  constructor() {
    
    this.books = [
      new Book (10,0,"Primer libro", "Tapa blanda", "Autor1", 20, "https://correos-marketplace.ams3.cdn.digitaloceanspaces.com/prod-new/uploads/correos-marketplace-shop/1/product/42464-hypp15nz-libro-el-corazon-helado-almudena-grandes-5.jpg"),
      new Book (43464,562,"Segundo libro", "Tapa blanda", "Autor2", 20, "https://correos-marketplace.ams3.cdn.digitaloceanspaces.com/prod-new/uploads/correos-marketplace-shop/1/product/42464-hypp15nz-libro-el-corazon-helado-almudena-grandes-5.jpg"),
      new Book (67884,562,"Tercer libro", "Tapa blanda", "Autor3", 20, "https://correos-marketplace.ams3.cdn.digitaloceanspaces.com/prod-new/uploads/correos-marketplace-shop/1/product/42464-hypp15nz-libro-el-corazon-helado-almudena-grandes-5.jpg"),
      new Book (31152,562,"Cuarto libro", "Tapa blanda", "Autor3", 20, "https://correos-marketplace.ams3.cdn.digitaloceanspaces.com/prod-new/uploads/correos-marketplace-shop/1/product/42464-hypp15nz-libro-el-corazon-helado-almudena-grandes-5.jpg")
    ];
   }
getAll(): Book[]{
  return this.books;
}

getOne(id_libro: number): Book{
  let oneBook:Book = this.books.find(book => book.id_book == id_libro);
  return oneBook; 
}

add(newbook: Book): void{
  this.books.push(newbook);
}

edit(editBook: Book): boolean{
  let bool = false;
  let updateBook = this.books.map(book => 
    book.id_book === editBook.id_book ? editBook : book);
  
  if(updateBook !== this.books){
    this.books = updateBook;
    bool = true;
  }
  return bool;
}

delete(deleteBook: number): boolean{
  let initialLength = this.books.length;
  this.books = this.books.filter(book => book.id_book !== deleteBook);
  return this.books.length < initialLength;
}

muestraMensaje(mensaje:string){
    alert(mensaje);
}

}
