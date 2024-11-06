import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service'; 
import { Movie } from '../models/movie';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
 selector: 'app-movie',
 standalone: true,
 imports: [FormsModule, CommonModule],
 providers: [MovieService],
 templateUrl: './movie.component.html',
 styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {


 movie: Movie = {
   id: 0,
   title: '',
   synopsis: '',
   year: 0,
   cover: ''
 };


 constructor(
   private route: ActivatedRoute,
   private MovieService: MovieService,
   private router: Router
 ) {}


 ngOnInit(): void {
   const id = +this.route.snapshot.paramMap.get('id')!;
   this.loadMovie(id);
 }


 loadMovie(id: number): void {
   this.MovieService.getMovieById(id).subscribe({
     next: (movie: Movie) => (this.movie = movie),
     error: () => {
       console.error('Error al cargar el ítem');
     }
   });
 }


 updateMovie(): void {
   if (this.movie && this.movie.id) {
     this.MovieService.updateMovie(this.movie.id, this.movie).subscribe({
       next: () => {
         this.router.navigate(['/catalog']);
       },
       error: (error: Error) => console.error('Error al actualizar el ítem:', error)
     });
   }
 }
}
