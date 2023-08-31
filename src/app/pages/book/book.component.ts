import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent{
  public books: Book [];

  constructor(private myBookService: BooksService){
    this.myBookService.getAll().subscribe((data:Respuesta) =>{
      console.log(data);
      if(data.error){
        this.myBookService.muestraMensaje(true,"No hay libros registrados")
      }else{
        this.books = data.data;
      } 
    });
  }

  deleteBook(bookToDelete:number):void{
    console.log("numero id para delete: ",bookToDelete);
    
    this.myBookService.delete(bookToDelete).subscribe((resp:Respuesta)=>{
      if(resp.error){
        this.myBookService.muestraMensaje(true,"El libro no existe");
        console.log("entra en error deleteBook de book.component.ts");
        
      }else{
        this.books = resp.data;
        console.log("entra en else deleteBook de book.component.ts",this.books);
      }
    })
  }

  searchBook(search_id_book:number){
    console.log("num search_id: ", search_id_book);
    
    if(search_id_book){
      this.myBookService.getOne(search_id_book).subscribe((data:Respuesta)=>{
        this.books = [data.data_book];
      });
    }else{
      this.myBookService.getAll().subscribe((data:Respuesta)=>{
        this.books = data.data;
      });
    }
  }
}

