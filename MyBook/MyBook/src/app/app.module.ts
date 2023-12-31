import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { PorfileComponent } from './pages/porfile/porfile.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BookComponent } from './pages/book/book.component';
import { CardComponent } from './component/card/card.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BooksService } from './shared/books.service';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { MyPipePipe } from './pipes/my-pipe.pipe';
import { RegisterComponent } from './pages/register/register.component';
import { FormLoginComponent } from './component/form-login/form-login.component';
import { LoginComponent } from './pages/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './shared/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormRegisterComponent,
    PorfileComponent,
    BookComponent,
    CardComponent,
    AddBookComponent,
    UpdateBookComponent,
    MyPipePipe,
    FormLoginComponent,
    RegisterComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
    
  ],
  providers: [BooksService,UserService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
