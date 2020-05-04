import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import {  MatToolbarModule, 
          MatIconModule,
          MatListModule, 
          MatButtonModule,
          MatSidenavModule,
          MatCardModule,
          MatInputModule
        } from  '@angular/material';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { TrendingComponent } from './trending/trending.component';
import { TopimdbComponent } from './topimdb/topimdb.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    TvshowsComponent,
    TrendingComponent,
    TopimdbComponent,
    EpisodesComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MDBBootstrapModule.forRoot()
    
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
