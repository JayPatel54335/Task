import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './Myproject/task/task.component';
import { AboutComponent } from './Myproject/about/about.component';
import { HomeComponent } from './Myproject/valid/home.component';
import { HandlingComponent } from './Myproject/handling/handling.component';

const routes: Routes = [
  {path:'',component:TaskComponent},
  {path:'home',component:HomeComponent},
  {path:'handling',component:HandlingComponent},
  {path:'about',component:AboutComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
