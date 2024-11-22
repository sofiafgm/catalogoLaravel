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
          <h1 class="display-4 text-light fw-bold mb-4">Bienvenido a Movie Finder</h1>
          <p class="lead text-light-emphasis mb-5">Descubre nuestro catálogo de películas, una selección diversa que
           abarca desde los últimos estrenos de taquilla hasta los clásicos
           imperdibles. Explora géneros como acción, drama, comedia, ciencia
           ficción y más, con títulos cuidadosamente escogidos para todos los
           gustos. Ya sea que busques emociones intensas, risas sin parar o
           historias conmovedoras, aquí encontrarás la película perfecta para
           cada ocasión. ¡Sumérgete en el mundo del cine y disfruta de una
           experiencia inolvidable!
</p>
          
          <div class="ratio ratio-16x9 mb-5">
            <iframe 
              src="https://www.youtube.com/embed/geFGdmu9dhQ" 
              title="El Universo en Pausa: ¿Estamos Viviendo en una Realidad Congelada? #dateunvlog" 
              allowfullscreen>
            </iframe>
          </div>
          
          <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
            <a class="btn btn-light btn-lg px-5 py-3" routerLink="/catalog" routerLinkActive="active">
              Todas las Películas
            </a>
            <a class="btn btn-light btn-lg px-5 py-3" routerLink="/add" routerLinkActive="active">
              Agregar Película
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {} 