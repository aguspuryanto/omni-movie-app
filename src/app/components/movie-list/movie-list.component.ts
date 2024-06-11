import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  searchText: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.filteredMovies = movies;
    });
  }

  filterMovies(): void {
    this.filteredMovies = this.movies.filter(movie =>
      movie.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
