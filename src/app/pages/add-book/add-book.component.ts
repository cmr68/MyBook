import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
import { Route } from '@angular/router';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent{
  public book: Book;
  constructor(public bookService:BooksService){}
  
  addBook(title:string,type:string,author:string,price:number,photo:string,id_book:number, id_user:number):void{
    let newBook = new Book(id_book,id_user,title,type,author,price,photo);
    this.bookService.add(newBook);
    this.bookService.muestraMensaje("El libro " + newBook.title + " ha sido añadido correctamente")
    
  }
}
