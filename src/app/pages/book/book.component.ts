import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  public books: Book[];

  constructor(private myBooks: BooksService){
    this.books = this.myBooks.getAll();
  }
  deleteBook(bookToDelete:Book):void{
    this.myBooks.delete(bookToDelete.id_book);
    this.books = this.myBooks.getAll();
  }

  searchBook(search_id_book:number){
    if(this.myBooks.getOne(search_id_book)){
      this.books = [this.myBooks.getOne(search_id_book)]
    }else{
      this.myBooks.getAll();
      this.myBooks.muestraMensaje(true,`El id_book: ${search_id_book} no se ha encontrado`);
    }  
  }
}

