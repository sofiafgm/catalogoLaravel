import { Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { MoviesComponent } from './components/movies/movies.component';
import { movieResolver } from './resolvers/movie.resolver';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'catalog', component: MoviesComponent },
  { path: 'add', component: AddFormComponent },
  { 
    path: 'edit/:id', component: AddFormComponent,
    resolve: { movie: movieResolver }
  }
];
