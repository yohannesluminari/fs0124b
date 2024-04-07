import { Component, OnInit } from '@angular/core';
import { IMovies } from '../models/i-movies';
import { AuthService } from '../auth/auth.service';
import { IUser } from '../models/i-user';

@Component({
  selector: 'app-favourite-movies',
  templateUrl: './favourite-movies.component.html',
  styleUrls: ['./favourite-movies.component.scss']
})
export class FavouriteMoviesComponent implements OnInit {
  favouriteMovies: IMovies[] = [];
  currentUser: IUser | null = null;

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.user$.subscribe(user => {
      if (user) {
        this.currentUser = user;
        this.favouriteMovies = this.authSvc.getFavoriteMovies();
      }
    });
  }
  removeFromFavorites(movie: IMovies): void {
    this.authSvc.removeFromFavorites(movie);
    this.favouriteMovies = this.authSvc.getFavoriteMovies();
  }

}
