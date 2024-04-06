import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovies } from '../models/i-movies';


@Component({
  selector: 'app-area-privata',
  templateUrl: './area-privata.component.html',
  styleUrls: ['./area-privata.component.scss']
})
export class AreaPrivataComponent implements OnInit {
  movies: IMovies[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.http.get<IMovies[]>('http://localhost:3000/movies')
      .subscribe(movies => {
        this.movies = movies;
      });
  }
}
