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
    
    return this.movies = this.movieService.movieList;
    // movielist.forEach( res => {
    //   this.movieService.GetMovieDetails(res.id);
    // })
    
    
  }

}
