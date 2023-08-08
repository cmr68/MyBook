import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "form-register", component: FormRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
