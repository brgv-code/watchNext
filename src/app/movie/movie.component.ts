import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { MovieType } from '../shared/movieType.model';
import { ActivatedRoute } from '@angular/router';

 
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
  ngOnInit() {
  
this.getMoviefromService(this.id);
    
  }

  getMoviefromService(id){
   this._movie.GetMovieDetails(this.id)
   .subscribe( moviedetail => {
     this.movie = moviedetail;
    console.log("movie Details", moviedetail);
   });
  }


}
