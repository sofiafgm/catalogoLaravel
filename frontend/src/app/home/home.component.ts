import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container-fluid bg-dark min-vh-100 py-5">
      <div class="container">
        <div class="text-center">
          <h1 class="display-4 text-light fw-bold mb-4">Welcome to Movie Finder</h1>
          <p class="lead text-light-emphasis mb-5">Your ultimate destination for managing your movie collection</p>
          
          <div class="ratio ratio-16x9 mb-5">
            <iframe 
              src="https://www.youtube.com/embed/geFGdmu9dhQ" 
              title="El Universo en Pausa: ¿Estamos Viviendo en una Realidad Congelada? #dateunvlog" 
              allowfullscreen>
            </iframe>
          </div>
          
          <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
            <a routerLink="/movies" class="btn btn-primary btn-lg px-5 py-3">
              <i class="bi bi-collection-play me-2"></i>Browse Movies
            </a>
            <a routerLink="/add" class="btn btn-success btn-lg px-5 py-3">
              <i class="bi bi-plus-circle me-2"></i>Add New Movie
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {} 