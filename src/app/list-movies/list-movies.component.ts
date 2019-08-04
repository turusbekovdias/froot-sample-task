import { Component, OnInit } from '@angular/core';
import {movies} from '../../content/movie.mock-data'; 
import {genreType, GenreType} from '../../content/movie.model'; 
@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  constructor() { }

  movies = movies;
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
  }

  getGenres(value: GenreType[]) {
    value.map(item => item)
  }

  getRate(value: string, index: number): string {
    if (+value > index ) return this.onStar;
    else if (+value < index && +value > index - 1) return this.halfStar;
    else return this.offStar;
  }

  

}
