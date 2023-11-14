import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RendelesComponent } from './rendeles/rendeles.component';
import { NovenyComponent } from './noveny/noveny.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"rendeles", component:RendelesComponent},
  {path:"", component:HomeComponent},
  {path:"noveny", component:NovenyComponent},
  {path:"**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }