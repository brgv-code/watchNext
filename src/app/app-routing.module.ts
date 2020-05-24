import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SeachComponent } from './seach/seach.component';


const routes: Routes = [
  { path:'',component: HomeComponent },
  { path:'home',component: HomeComponent },
  { path:'movie/:id',component: MovieComponent },
  { path:'search',component: SeachComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
