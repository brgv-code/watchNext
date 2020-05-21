import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { MovieType } from '../shared/movieType.model';
import { ActivatedRoute } from '@angular/router';
import { DurationPipe } from '../shared/time.pipe';

 
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {

  constructor(private _movie: MovieService,
              private _route: ActivatedRoute) {
                this.id = this._route.snapshot.params['id'];
               }
  // @Input('id') id: string;
  id: string;
  movie: any = []; 
  path: string;
  ngOnInit() {
  
this.getMoviefromService(this.id);
    
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
     this.path = 'https://image.tmdb.org/t/p/w1280/'+this.movie.backdrop_path;
    console.log("movie Details", moviedetail);
   });
  }


}
