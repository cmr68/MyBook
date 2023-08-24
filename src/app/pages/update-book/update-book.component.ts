import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
 public books: Book;
 public edit: boolean;
 constructor(public myEditBook:BooksService){}

 updateBook(title:string,type:string,author:string,price:number,photo:string,id_book:number, id_user:number):void{
  let bookEd = new Book(id_book,id_user,title,type,author,price,photo);
  this.edit = this.myEditBook.edit(bookEd);

  if(this.edit){
    this.myEditBook.muestraMensaje("Libro" + bookEd.title + "ha sido editado correctamente")
  }else{
    this.myEditBook.muestraMensaje("Libro con id:" + bookEd.id_book + "no se ha encontrado")
  }
 }
}
