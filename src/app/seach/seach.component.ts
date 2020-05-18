import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrls: ['./seach.component.sass']
})
export class SeachComponent implements OnInit {
  movies = [];
  movieDetail = [];

  @Output('id') id = new EventEmitter<string>() ;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

 getMovies(){
    
     return this.movies =  this.movieService.movieList;
    // console.log(this.movie  s);
    // this.movies.forEach( res => {
    //   this.movies.poster_path? this.movies
    // }) 
  }
  getMovieDetail(id){
    // const movieID = document.querySelectorAll('.movieCard');
    return  this.movieService.GetMovieDetails(id);
    // console.log(id);
  }

}
