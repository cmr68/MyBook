import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  public books: Book[];

  constructor(private myBookService: BooksService){
    this.myBookService.getAll().subscribe((resp:Respuesta) =>{
      console.log(resp);
      if(resp.error){
        this.myBookService.muestraMensaje(true,"No hay libros registrados")
      }else{
        this.books = [resp.data];
      } 
    });
    // this.books = this.myBookService.getAll();
  }

  // deleteBook(bookToDelete:Book):void{
  //   this.myBookService.delete(bookToDelete.id_book);
  //   this.books = this.myBookService.getAll();
  // }

  deleteBook(bookToDelete:number):void{
    this.myBookService.delete(bookToDelete).subscribe((resp:Respuesta)=>{
      if(resp.error){
        this.myBookService.muestraMensaje(true,"El libro no existe")
      }else{
        this.books = [resp.data];
      }
    })
  }

  // searchBook(search_id_book:number){
  //   if(this.myBookService.getOne(search_id_book)){
  //     this.books = [this.myBookService.getOne(search_id_book)]
  //   }else{
  //     this.myBookService.getAll();
  //     this.myBookService.muestraMensaje(true,`El id_book: ${search_id_book} no se ha encontrado`);
  //   }  
  // }

  searchBook(search_id_book:number){
    this.myBookService.getOne(search_id_book).subscribe((resp:Respuesta)=>{
      if(resp.error){
        this.myBookService.muestraMensaje(true,"El libro no existe")
      }else{
        this.books = [resp.data];
      }
    });
  }
}

