import { Component, OnInit } from '@angular/core';
import { movies } from '../../content/movie.mock-data';
import { movies, genreType } from '../../content/movie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movies = movies;
  movie: any;
  genresType = genreType;

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movie = movies[+params.get('id') - 1];
    });
  }

}
