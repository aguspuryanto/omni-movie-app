import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  movies: Movie[] = [];
  
  searchForm = this.formBuilder.group({
    query: ''
  });

  constructor(private movieService: MovieService, private formBuilder: FormBuilder) { }

  searchMovies(event: any): void {
    event.preventDefault();
    // console.log(this.searchForm.value);
    // console.log("You entered: ", event.target.value);
    this.movieService.getMovies().subscribe(movies => {
      // this.movies = movies.find(movie => movie.name === event.target.value);
      this.movies = movies.filter(movie => movie.name === event.target.value);
    });
  }

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.searchForm.value);
  }
}
