import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteMoviesComponent } from './favourite-movies.component';

describe('FavouriteMoviesComponent', () => {
  let component: FavouriteMoviesComponent;
  let fixture: ComponentFixture<FavouriteMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavouriteMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavouriteMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
