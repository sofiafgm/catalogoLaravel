import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  providers: [MovieService],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];

  constructor(public data: MovieService) {}

  ngOnInit(): void {
    this.data.getMovies().subscribe(
      (data: Movie[]) => {
        this.movies = data;
      },
      (error: any) => {
        console.error('Error fetching movies', error);
      }
    );
  }

  editMovie(movie: Movie): void {
    this.data.editMovie(movie);
  }

  deleteMovie(id: number): void {
    this.data.deleteMovie(id).subscribe(
      () => {
        this.movies = this.movies.filter(movie => movie.id !== id);
      },
      (error: any) => {
        console.error('Error deleting movie', error);
      }
    );
  }
}
