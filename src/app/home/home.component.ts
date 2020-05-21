import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  sliderSelector = <HTMLElement[]><any>document.querySelectorAll('.home__background');
  arrowLeft = document.querySelector('#arrow-left');
  arrowRight = document.querySelector('#arrow-right');
  currentSlide = 0;
  constructor(private movieService : MovieService,
              private router:Router) { 
               
              }

  ngOnInit() {
    this.startSlide();
  }
  
  FetchMovies(){
    let searchInput = (<HTMLInputElement>document.querySelector('#searchInput')).value;
     this.movieService.GetMovies(searchInput);
     this.router.navigate(['/search']);
  }

  resetSlider() {
    for( let i = 0; i < this.sliderSelector.length; i++) {
      this.sliderSelector[i].style.visibility = 'hidden';
    }
  }
  
  startSlide() {
    this.resetSlider();
    // this.sliderSelector[0].style.display = 'block';
  }
  nextSlide() {
    this.arrowRight.addEventListener('click', () => {
      this.currentSlide++;
    })
  }
}
