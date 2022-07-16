import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import {HomeComponent} from "./home/home.component";
import {BookManagerComponent} from "./book-manager/book-manager.component";
import {ContactComponent} from "./contact/contact.component";
import {TaskManagerComponent} from "./task-manager/task-manager.component";
import {NotFoundError} from "rxjs";
import {NotFoundComponent} from "./not-found/not-found.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'book', component: BookManagerComponent},
  {path: 'task', component: TaskManagerComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFoundComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
