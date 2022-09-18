import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/Movie';
import { OmdbapiService } from 'src/app/services/omdbapi.service';
import { Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FavoriteMoviesService } from 'src/app/services/favorite-movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: Movie;
  loading: boolean = true;
  faHeart = faHeart;
  crossHeart= faHeartCircleXmark;
  movies: string[];
  favorite: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: OmdbapiService,
    private favoriteMovies: FavoriteMoviesService
  ) {}

  animate(): void {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.batch('.animate_right', {
      onEnter: (batch) =>
        gsap.fromTo(
          batch,
          {
            opacity: 0,
            x: 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
          }
        ),
    });

    ScrollTrigger.batch('.animate', {
      onEnter: (batch) =>
        gsap.fromTo(
          batch,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.15,
          }
        ),
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const title: string = params['title'];
      const type: string = params['type'];
      const year: number = params['year'];
      if (String(year) == 'NaN') {
        this.apiService.getMovieByTitle(title, type).subscribe((data) => {
          if (data.Response == 'False') {
            this.router.navigateByUrl(`/`);
          }
          this.movie = data;
          this.loading = false;
          this.animate();
          this.favoriteMovies
            .isFavorite(data.imdbID)
            .subscribe((isFavorite) => (this.favorite = isFavorite));
        });
      } else {
        this.apiService.getMovie(title, type, year).subscribe((data) => {
          if (data.Response == 'False') {
            this.router.navigateByUrl(`/`);
          }
          this.movie = data;
          this.loading = false;
          this.animate();
          this.favoriteMovies
            .isFavorite(data.imdbID)
            .subscribe((isFavorite) => (this.favorite = isFavorite));
        });
      }
    });
  }

  likeMovie(id: string): void {
    this.favoriteMovies.toggleMovie(id);
  }
}
