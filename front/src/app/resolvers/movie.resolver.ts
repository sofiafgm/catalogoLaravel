import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';

export const movieResolver: ResolveFn<Movie> = (route) => {
  const movieService = inject(MovieService);
  return movieService.getMovieById(Number(route.paramMap.get('id')!));
};
