import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule'},
  { path: 'mybaby', loadChildren: './mybaby/mybaby.component'},
  //{ path: 'mybaby', redirectTo: 'mybaby'}, //calisiyor
  { path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
