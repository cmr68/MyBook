import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //PADRE-HIJO
  @Output() deleteBook = new EventEmitter<Book>();
  @Input() bookFather: Book;
  @Input() even: boolean;

  constructor(){}
  deleteBookEvent(){
    this.deleteBook.emit(this.bookFather);
  }
  ngOnInit():void{}
  
}
