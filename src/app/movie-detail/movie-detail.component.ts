import { Component, OnInit } from '@angular/core';
import { movies } from '../../content/movie.mock-data';
import { genreType } from '../../content/movie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movies = movies;
  moviesSorted = [];
  movie: any;
  genresType = genreType;

  constructor(private route: ActivatedRoute) { 
    
  }

  onStar = "https://gidonline.fun/ico/rating_on.png";
  halfStar = "https://gidonline.fun/ico/rating_half.png";
  offStar = "https://gidonline.fun/ico/rating_off.png";
  
  ind = [1,2,3,4,5,6,7,8,9,10];

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.movie = movies[+params.get('id') - 1];
      
      this.moviesSorted = this.movies.filter(movie => {
        return movie.key !== this.movie.key
          && movie.genres.some(genre => this.movie.genres.includes(genre));
      })
    });
    
  }

  getRate(value: string, index: number): string {
    if (+value > index ) return this.onStar;
    else if (+value < index && +value > index - 1) return this.halfStar;
    else return this.offStar;
  }

}
