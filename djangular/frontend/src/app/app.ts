import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  private api = inject(ApiService);
  movies: any[] = [];

  constructor() {
    this.getMovies();
  }

  getMovies() {
    this.api.getAllMovies().subscribe({
      next: data => {
        this.movies = data;
        console.log('Películas:', this.movies);
      },
      error: err => console.error(err)
    });
  }
}
