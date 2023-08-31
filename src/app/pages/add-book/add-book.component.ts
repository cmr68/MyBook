import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
import { Route } from '@angular/router';
import { Respuesta } from 'src/app/models/respuesta';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{
  public book: Book;

  constructor(public bookService:BooksService){}

  ngOnInit(): void {
  }

  //Funcion llamada post para añadir libro
  addBook(title:string,type:string,author:string,price:number,photo:string,id_book:number, id_user:number):void{
    
    if(id_book == 0 || title =="" || type =="" || author =="" || price == 0 || photo == ""){
      this.bookService.muestraMensaje(true,"Falta un campo obligatorio");
    }else{
      let newBook = new Book(id_book,id_user,title,type,author,price,photo);
    
      //Mensaje toast
      let mensajeOk = `El libro ' + ${newBook.title} +  ' ha sido añadido correctamente`;
      let mensajeKo = 'Debe indicar el numero de id del libro o poner uno que no exista';    

      this.bookService.addBook(newBook).subscribe((data:Respuesta)=>{
        if(!data.error){
          this.bookService.muestraMensaje(false,mensajeOk);
        }else{
          this.bookService.muestraMensaje(true,mensajeKo)
        }
      });
    }
  }
}
