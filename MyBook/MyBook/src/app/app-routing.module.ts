import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { HomeComponent } from './pages/home/home.component';
import { PorfileComponent } from './pages/porfile/porfile.component';
import { BookComponent } from './pages/book/book.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { FormLoginComponent } from './component/form-login/form-login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "books", component: BookComponent},
  {path: "addBook", component: AddBookComponent},
  {path: "updateBook", component: UpdateBookComponent},
  {path: "register", component: RegisterComponent},
  {path: "form-register", component: FormRegisterComponent},
  {path: "login", component: FormLoginComponent},
  {path: "form-login", component: FormLoginComponent},
  {path: "user", component: PorfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
