import { Component, OnInit } from '@angular/core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
})
export class MovieSearchComponent implements OnInit {
  faCircleNotch = faCircleNotch;
  faMagnifyingGlass = faMagnifyingGlass;
  title: string = '';
  year: number = NaN;
  type: string = 'movie';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  find_btn_handler = () => {
    if (this.title == '') {
      return;
    }
    this.router.navigateByUrl(
      `/movie?title=${this.title}&year=${this.year}&type=${this.type}`
    );
  };
}
