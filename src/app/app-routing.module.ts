import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TododetailsComponent } from './tododetails/tododetails.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {path:'details',component: TododetailsComponent},
  {path:'list', component: TodolistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
