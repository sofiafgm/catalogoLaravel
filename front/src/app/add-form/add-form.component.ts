import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
 selector: 'app-add-form',
 standalone: true,
 imports: [CommonModule, FormsModule],
 templateUrl: './add-form.component.html',
 styleUrl: './add-form.component.css'
})
export class AddFormComponent {

 movies: any[] = [];
 newMovie: {
   id?: number;
   title: string;
   synopsis: string;
   year: number;
   cover: string;
 } = {title: '', synopsis: '', year: 0, cover: ''};


 constructor( private data:MovieService, private router:Router, private route: ActivatedRoute) {
   this.route.data.subscribe(data => {
     const movie = data['movie'];
     if (movie) {
       this.newMovie = movie;
     }  
   });
 }


 addMovie(): void {
    if (!this.newMovie) return;

    if (this.newMovie.id) {
      this.data.updateMovie(this.newMovie.id, this.newMovie).subscribe({
        next: (data: any) => {
          this.router.navigate(['/catalog']);
        },
        error: (error: any) => {
          console.error('Error al actualizar la película', error);
        }
      });
    } else {
      this.data.addMovie(this.newMovie).subscribe({
        next: (data: any) => {
          this.movies.push(data);
          this.newMovie = {title: '', synopsis: '', year: 0, cover: ''};
          this.router.navigate(['/catalog']);
        },
        error: (error: any) => {
          console.error('Error al añadir la película', error);
        }
      });
    }
}
}
