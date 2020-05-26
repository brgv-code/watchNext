import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { MovieType } from '../shared/movieType.model';
import { ActivatedRoute, Router } from '@angular/router';
// import { DurationPipe } from '../shared/time.pipe';

 
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit,AfterViewInit {

  constructor(private _movie: MovieService,
              private _route: ActivatedRoute,
              private elemRef: ElementRef,
              private router: Router) {
                this.id = this._route.snapshot.params['id'];
                this.router.routeReuseStrategy.shouldReuseRoute = () => false;
               }
  // @Input('id') id: string;
  id: string;
  movie: any = []; 
  actors: any = [];
  path: string;
  public element;
  recommendations: any = [];
  

  ngAfterViewInit(){
    this.element = this.elemRef.nativeElement;
  }
  ngOnInit() {
  this.getMoviefromService(this.id);
    
  }

toggle(event) {
  let checkbox = document.getElementById('checkbox');
  let gallery = document.getElementById('gallery-container');
  if(event.currentTarget.checked) {
    gallery.classList.add('toggle');
  } else {
    gallery.classList.remove('toggle');
  }

  // console.log(event.currentTarget.checked);
}

  // getBgImagePath() {
  //   let path = 'https://image.tmdb.org/t/p/w1280/'+this.movie.poster_path;
  //   console.log("Path",path);
  //   return path;
  // }

  getMoviefromService(id){
   this._movie.GetMovieDetails(this.id)
   .subscribe( moviedetail => {
     this.movie = moviedetail;
     this.actors = this.movie.credits.cast;
     this.recommendations = this.movie.recommendations.results;
     console.log(this.recommendations[0].poster_path);
     if(this.movie.backdrop_path) {
     this.path = 'https://image.tmdb.org/t/p/w1280/'+this.movie.backdrop_path;
     } else {
       this.path = '../../assets/images/bg_search.jpg';
     }
    console.log("movie Details", this.movie);
    // console.log('actors=>',this.actors );
    
   });
  }

//   sliderLeft(){
//     // const leftArrow = document.getElementById('left-arr').addEventListener('click',this.sliderLeft);
   
//    const actorsList = this.element.querySelectorAll('.actor-card') ;
//    for (let i = 0; i < actorsList.length; i++) {
//      let len = 120;
//     actorsList[i].style.transform = "translateX(-"+len+"%)";
//     // len = len + 100;
    
// }
//   // actorsList.forEach( () => {
//   //   actorsList.classList.add('slide');
//   // });

//   }
//   sliderRight(){
//     const actorsList = this.element.querySelectorAll('.actor-card') ;
//     for (let i = 0; i < actorsList.length; i++) {
//       let len = 120;
//      actorsList[i].style.transform = "translateX("+len+"%)";
//     //  len = len + 100;
//   }
// }


}
