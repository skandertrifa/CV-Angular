import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { ItemComponent } from './item/item.component';
import { Directex3Directive } from './ex3/directex3.directive';
import { Ex3Component } from './ex3/ex3/ex3.component';
import { TodoComponent } from './ex4/todo/todo.component';
import { EmbaucheComponent } from './embauche/embauche.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeComponent,
    DetailsComponent,
    ItemComponent,
    Directex3Directive,
    Ex3Component,
    TodoComponent,
    EmbaucheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
