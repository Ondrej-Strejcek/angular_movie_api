import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesService {
  private favoriteMovies: string[] = [];
  private subject = new Subject<any>();
  private favorite = new Subject<any>();

  constructor() { }

  getMovies(){
    return this.subject.asObservable();
  }

  toggleMovie(id: string){
    if(!this.favoriteMovies.includes(id)){
      this.favoriteMovies.push(id);
      this.subject.next(this.favoriteMovies);
    }else{
      this.favoriteMovies = this.favoriteMovies.filter(e => e !== id)
      this.subject.next(this.favoriteMovies);
    }
    this.favorite.next(this.favoriteMovies.includes(id));
  }

  isFavorite(id: string){
    return this.favorite.asObservable();
  }
  

}
