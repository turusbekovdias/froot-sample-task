import { Component, OnInit } from '@angular/core';
import {movies} from '../../content/movie.mock-data'; 
import {genreType} from '../../content/movie.model'; 
@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  constructor() { }

  movies = movies;
  genres = genreType;
  
  ngOnInit() {
  }


  

}
