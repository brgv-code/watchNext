import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  constructor( private movieService: MovieService,
                private router: Router) { }

  ngOnInit() {
  }

  FetchMovies(){
    let searchInput = (<HTMLInputElement>document.querySelector('#searchInput'));
    
    searchInput.classList.toggle('expand');
    searchInput.placeholder = "search for movies";
    console.dir(searchInput);
    if(searchInput.value) {
     this.movieService.GetMovies(searchInput.value);
     this.router.navigate(['/search']);
     console.dir(searchInput);
     searchInput.placeholder = "";
     this.input.nativeElement.value = '';
    } 
     
  }
  getPopularMovies() {
    this.movieService.getPopularMovies();
    this.router.navigate(['/search']);
  }

}
