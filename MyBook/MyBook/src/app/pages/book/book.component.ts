import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent{
  public books: Book [] = [];
  public id_user: number;

  constructor(private myBookService: BooksService, private myUserService: UserService){
    this.id_user = this.myUserService.user.id_user;
    this.myBookService.getAll(this.id_user).subscribe((data:Respuesta) =>{
      console.log(data);
      if(data.error){
        this.myBookService.muestraMensaje(true,"No hay libros registrados")
      }else{
        this.books = data.data;
      } 
    });
  }

  deleteBook(id_book:number):void{
    console.log("numero id para delete: ",id_book);
    
    this.myBookService.delete(id_book).subscribe((resp:Respuesta)=>{
      if(resp.error){
        this.myBookService.muestraMensaje(true,"El libro no existe");
        console.log("entra en error deleteBook de book.component.ts");
        
      }else{
        this.books = this.books.filter(book => book.id_book != id_book);
        console.log("entra en else deleteBook de book.component.ts",this.books);
      }
    })
  }

  searchBook(id_book:number){    
    if(id_book){
      this.myBookService.getOne(this.id_user,id_book).subscribe((data:Respuesta)=>{
        // this.books = [data.data_book];
        this.books = data.data;
      });
    }else{
      this.myBookService.getAll(this.id_user).subscribe((data:Respuesta)=>{
        this.books = data.data;
      });
    }
  }
}

