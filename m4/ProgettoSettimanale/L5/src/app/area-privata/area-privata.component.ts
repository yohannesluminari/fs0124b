import { Component, OnInit } from '@angular/core';
import { IMovies } from '../models/i-movies';
import { IUser } from '../models/i-user';
import { AuthService } from '../auth/auth.service';

interface MovieWithLikeStatus extends IMovies {
  isLiked: boolean;
}

@Component({
  selector: 'app-area-privata',
  templateUrl: './area-privata.component.html',
  styleUrls: ['./area-privata.component.scss']
})
export class AreaPrivataComponent implements OnInit {
  movies: MovieWithLikeStatus[] = [];
  currentUser: IUser | null = null;

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.getMovies().subscribe(movies => {
      this.movies = movies.map(movie => ({
        ...movie,
        isLiked: this.currentUser && this.currentUser.FavouriteFilms ?
          this.currentUser.FavouriteFilms.some(favMovie => favMovie.id === movie.id) :
          false
      }));
    });

    const userData = localStorage.getItem('accessData');
    if (userData) {
      const accessData = JSON.parse(userData);
      this.currentUser = accessData.user;
    }
  }

  toggleLike(movie: MovieWithLikeStatus): void {
    movie.isLiked = !movie.isLiked;

    if (this.currentUser) {
      if (!this.currentUser.FavouriteFilms) {
        this.currentUser.FavouriteFilms = [];
      }

      const index = this.currentUser.FavouriteFilms.findIndex(favMovie => favMovie.id === movie.id);
      if (index !== -1) {
        this.currentUser.FavouriteFilms.splice(index, 1);
      } else {
        this.currentUser.FavouriteFilms.push(movie);
      }

      localStorage.setItem('accessData', JSON.stringify({ accessToken: '', user: this.currentUser }));
    }
  }
}
