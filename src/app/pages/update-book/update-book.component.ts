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
 constructor(public myEditBook:BooksService){}

 updateBook(title:string,type:string,author:string,price:number,photo:string,id_book:number, id_user:number):void{
    let bookEd = new Book(id_book,id_user,title,type,author,price,photo);
    let edit = this.myEditBook.edit(bookEd);
    let mensajeOk = 'El libro ' + bookEd.title +  ' ha sido editado correctamente';
    let mensajeKo = 'Debe indicar el numero de id del libro o poner uno existente';

    if(edit){
      this.myEditBook.muestraMensaje(false,mensajeOk)
    }else{
      this.myEditBook.muestraMensaje(true,mensajeKo)
    }
 
  }
}
