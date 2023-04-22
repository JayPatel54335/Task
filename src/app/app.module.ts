import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './Myproject/task/task.component';
import { AboutComponent } from './Myproject/about/about.component';
import { HomeComponent } from './Myproject/valid/home.component';
import { HandlingComponent } from './Myproject/handling/handling.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AboutComponent,
    HomeComponent,
    HandlingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
