import { Component, OnInit } from '@angular/core';

import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrls: ['./seach.component.sass']
})
export class SeachComponent implements OnInit {
  movies = []

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
  getMovieDetail(event){
    // const movieID = document.querySelectorAll('.movieCard');
    console.log(event);
  }

}
