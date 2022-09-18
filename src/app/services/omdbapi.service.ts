import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../Movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OmdbapiService {
  private apiUrl: string = 'https://www.omdbapi.com/?apikey=97fbde85';

  constructor(private http: HttpClient) {}


  getMovie(title: string, type: string, year: number): Observable<Movie> {
    const url = `${this.apiUrl}&t=${title}&y=${year}&type=${type}`;
    return this.http.get<Movie>(url);
  }

  getMovieByTitle(title: string, type: string): Observable<Movie> {
    const url = `${this.apiUrl}&t=${title}&type=${type}`;
    return this.http.get<Movie>(url);
  }

  getMovieById(id: string): Observable<Movie> {
    const url = `${this.apiUrl}&i=${id}`;
    return this.http.get<Movie>(url);
  }
}
