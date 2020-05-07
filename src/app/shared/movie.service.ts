import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { MovieType } from './movieType.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieList = [];
  constructor(private _http: HttpClient) {  
    
  }

  GetMovies(searchVal:string){
   
  this._http 
  .get('https://api.themoviedb.org/3/search/movie',{
  params: {
    api_key: 'bd485c6f6e25c230e7e0cd73d0bbb20c',
    query: searchVal
  }})
  // .pipe(map(responseData => {
  //   return Object.entries(responseData);
  // }))
  .subscribe((movie: any) => {
    // console.log(movie.results);
   this.movieList = movie.results;
  //  console.log(this.movieList);
  })
  }
  GetMovieDetails(id: string){
    this._http 
  .get('https://api.themoviedb.org/3/movie/'+id+'/images',{
  params: {
    api_key: 'bd485c6f6e25c230e7e0cd73d0bbb20c',
  }})
  .subscribe(movieDetail => {
    console.log("moviedetails",movieDetail)
  })
  }
}

