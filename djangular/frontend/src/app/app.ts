import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  private api = inject(ApiService);
  movies: any[] = [];

  newMovie = { title: '', desc: '', year: 0 };

  constructor() {
    this.getMovies();
  }

  getMovies() {
    this.api.getAllMovies().subscribe({
      next: data => {
        this.movies = data;
      },
      error: err => console.error(err)
    });
  }

  addMovie() {
    this.api.createMovie(this.newMovie).subscribe({
      next: () => {
        this.newMovie = { title: '', desc: '', year: 0 };
        this.getMovies();
      },
      error: err => console.error(err)
    });
  }

  deleteMovie(id: number) {
    this.api.deleteMovie(id).subscribe({
      next: () => this.getMovies(),
      error: err => console.error(err)
    });
  }

}
