import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/catalog">Movies Catalog</a></li>
        <li><a routerLink="/add">Add Movie</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    nav {
      background: #333;
      padding: 1rem;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 1rem;
    }
    a {
      color: white;
      text-decoration: none;
    }
    a:hover {
      color: #ddd;
    }
  `]
})
export class NavbarComponent {}
