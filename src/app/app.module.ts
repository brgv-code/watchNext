import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SeachComponent } from './seach/seach.component';


import { DurationPipe } from './shared/time.pipe';
import { GestureConfig } from "../gesture-config";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    FooterComponent,
    HeaderComponent,
    SeachComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    MaterialModule
    
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [DurationPipe, { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }],
  bootstrap: [AppComponent],
})
export class AppModule { }
