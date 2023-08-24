import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { HomeComponent } from './pages/home/home.component';
import { PorfileComponent } from './pages/porfile/porfile.component';
import { BookComponent } from './pages/book/book.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "books", component: BookComponent},
  {path: "addBook", component: AddBookComponent},
  {path: "updateBook", component: UpdateBookComponent},
  {path: "form-register", component: FormRegisterComponent},
  {path: "user", component: PorfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
