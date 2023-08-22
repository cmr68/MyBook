import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public book1: Book;
  public book2: Book;
  public book3: Book;
  public book4: Book;
  public books: Book[];

  constructor(){
    this.book1 = new Book (0,0,"Primer libro", "Tapa blanda", "Autor1", 20, "https://correos-marketplace.ams3.cdn.digitaloceanspaces.com/prod-new/uploads/correos-marketplace-shop/1/product/42464-hypp15nz-libro-el-corazon-helado-almudena-grandes-5.jpg"),
    this.book2 = new Book (31152,562,"Segundo libro", "Tapa blanda", "Autor2", 20, "https://correos-marketplace.ams3.cdn.digitaloceanspaces.com/prod-new/uploads/correos-marketplace-shop/1/product/42464-hypp15nz-libro-el-corazon-helado-almudena-grandes-5.jpg"),
    this.book3 = new Book (31152,562,"Tercer libro", "Tapa blanda", "Autor3", 20, "https://correos-marketplace.ams3.cdn.digitaloceanspaces.com/prod-new/uploads/correos-marketplace-shop/1/product/42464-hypp15nz-libro-el-corazon-helado-almudena-grandes-5.jpg"),
    this.book4 = new Book (31152,562,"Cuarto libro", "Tapa blanda", "Autor3", 20, "https://correos-marketplace.ams3.cdn.digitaloceanspaces.com/prod-new/uploads/correos-marketplace-shop/1/product/42464-hypp15nz-libro-el-corazon-helado-almudena-grandes-5.jpg")

    this.books = [this.book1, this.book2, this.book3, this.book4];
  }

  public addBook(title:string,type:string,author:string,price:number,photo:string,id_book:number, id_user:number){
    let newBook = new Book(id_book,id_user,title,type,author,price,photo);
    this.books.push(newBook);
  }
}
