import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  constructor(_http: HttpClient) { 
    _http.get('https://jsonplaceholder.typicode.com/posts')
            .subscribe(response => {
              console.log(response);
            })
  }

  ngOnInit() {
  }

}
