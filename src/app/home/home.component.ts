import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private movieService : MovieService,
              private router:Router) { }

  ngOnInit() {
  }
  
  FetchMovies(){
    let searchInput = (<HTMLInputElement>document.querySelector('#searchInput')).value;
     this.movieService.GetMovies(searchInput);
     this.router.navigate(['/search']);
  }
}
