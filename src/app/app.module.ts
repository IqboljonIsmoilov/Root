import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BookManagerComponent} from './book-manager/book-manager.component';
import {TaskManagerComponent} from './task-manager/task-manager.component';
import {ContactComponent} from './contact/contact.component';
import {TaskAddComponent} from './task-add/task-add.component';
import {TaskItemComponent} from './task-item/task-item.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookManagerComponent,
    TaskManagerComponent,
    ContactComponent,
    TaskAddComponent,
    TaskItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
