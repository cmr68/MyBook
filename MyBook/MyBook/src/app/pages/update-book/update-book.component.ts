import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit{
 public books: Book[];

 constructor(public myEditBookService:BooksService){}
  
  ngOnInit(): void {
  }

 updateBook(title:string,type:string,author:string,price:number,photo:string,id_book:number, id_user:number):void{
    let bookEd = new Book(id_book,id_user,title,type,author,price,photo);
    let mensajeOk = 'El libro ' + bookEd.title +  ' ha sido editado correctamente';
    let mensajeKo = 'Debe indicar el numero de id del libro o poner uno existente';
    console.log("bookEd: ",bookEd);
    
    this.myEditBookService.edit(bookEd).subscribe((data:Respuesta)=>{
      if(!data.error){
        console.log("libro editado", data);
        this.myEditBookService.muestraMensaje(false,mensajeOk);
      }else{
        console.log("error al editar");
        this.myEditBookService.muestraMensaje(true,mensajeKo);
      }
    })
 
  }

  // updateBook(title:string,type:string,author:string,price:number,photo:string,id_book:number, id_user:number):void{
  //   let bookEd = new Book(id_book,id_user,title,type,author,price,photo);
  //   let edit = this.myEditBookService.edit(bookEd);
  //   let mensajeOk = 'El libro ' + bookEd.title +  ' ha sido editado correctamente';
  //   let mensajeKo = 'Debe indicar el numero de id del libro o poner uno existente';

  //   if(edit){
  //     this.myEditBookService.muestraMensaje(false,mensajeOk)
  //   }else{
  //     this.myEditBookService.muestraMensaje(true,mensajeKo)
  //   }
 
  // }
}
