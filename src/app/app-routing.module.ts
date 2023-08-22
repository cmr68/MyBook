import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { HomeComponent } from './pages/home/home.component';
import { PorfileComponent } from './pages/porfile/porfile.component';
import { BookComponent } from './pages/book/book.component';
// import { CardComponent } from './component/card/card.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  // {path: "card", component: CardComponent},
  {path: "books", component: BookComponent},
  {path: "form-register", component: FormRegisterComponent},
  {path: "profile", component: PorfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
