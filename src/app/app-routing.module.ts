import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { HomeComponent } from './pages/home/home.component';
import { PorfileComponent } from './pages/porfile/porfile.component';
import { BooksComponent } from './component/books/books.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "books", component: BooksComponent},
  {path: "form-register", component: FormRegisterComponent},
  {path: "profile", component: PorfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
