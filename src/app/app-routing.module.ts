import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { TrendingComponent } from './trending/trending.component';
import { TopimdbComponent } from './topimdb/topimdb.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { EpisodesComponent } from './episodes/episodes.component';


const routes: Routes = [
  { path:'',component: HomeComponent },
  { path:'home',component: HomeComponent },
  { path:'movie',component: MovieComponent },
  { path:'trending',component: TrendingComponent },
  { path:'top-imdb',component: TopimdbComponent },
  { path:'tv-shows',component: TvshowsComponent },
  { path:'episodes',component: EpisodesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
