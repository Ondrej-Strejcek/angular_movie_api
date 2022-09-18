import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FavoriteMoviesService } from 'src/app/services/favorite-movies.service';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css'],
})
export class FavoriteMoviesComponent implements OnInit {
  favoriteMovies: string[] = [];

  constructor(private favoriteMoviesService: FavoriteMoviesService) {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.batch('.movie', {
      onEnter: (batch) =>
        {gsap.fromTo(
          batch,
          {
            opacity: 0,
            y: -25,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.15
          }
        )
      }
    });
  }
  
}
