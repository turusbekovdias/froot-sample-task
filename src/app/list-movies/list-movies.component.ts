import { Component, OnInit } from '@angular/core';
import {movies} from '../../content/movie.mock-data'; 
import {genreType, GenreType} from '../../content/movie.model'; 
import {Subject} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  constructor() { }

  movies = movies;
  moviesSorted = movies;

  title$ = new Subject<string>()

  genres = [ genreType.drama, 
             genreType.action, 
             genreType.adventure, 
             genreType.biography, 
             genreType.comedy,
             genreType.crime,
             genreType.history,
             genreType.scifi,
             genreType.sport, 
             genreType.thriller, 
             genreType.mystery ];
  
  ind = [1,2,3,4,5,6,7,8,9,10];
  
  onStar = "https://gidonline.fun/ico/rating_on.png";
  halfStar = "https://gidonline.fun/ico/rating_half.png";
  offStar = "https://gidonline.fun/ico/rating_off.png";

  ngOnInit() {
    this.title$
    .pipe(map(value => value.toUpperCase()))
      .subscribe(value => {
        this.moviesSorted = 
          this.movies.filter(movie => movie.name.toUpperCase().includes(value));
      });
    }

  getGenres(value: GenreType[]) {
    value.map(item => item)
  }

  getRate(value: string, index: number): string {
    if (+value > index ) return this.onStar;
    else if (+value < index && +value > index - 1) return this.halfStar;
    else return this.offStar;
  }

  sortByGenre(value: string) {
    this.moviesSorted = [];
    if (value === 'all') {
      this.moviesSorted = this.movies;
      return;
    }
    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].genres.indexOf(value) !== -1) {
        this.moviesSorted.push(this.movies[i]);
      }
    }
  }

  search(value) {
    console.log(value);
  }

}
