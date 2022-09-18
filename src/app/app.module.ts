import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { MovieSearchComponent } from './components/core/movie-search/movie-search.component';
import { FavoriteMoviesComponent } from './components/core/favorite-movies/favorite-movies.component';
import { HomeComponent } from './views/core/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FavoriteMovieComponent } from './components/core/favorite-movie/favorite-movie.component';
import { MovieComponent } from './views/core/movie/movie.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CircleBtnComponent } from './components/core/circle-btn/circle-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MovieSearchComponent,
    FavoriteMoviesComponent,
    HomeComponent,
    FavoriteMovieComponent,
    MovieComponent,
    CircleBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
