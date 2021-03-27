import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-movies';
  moviesInTheaters;
  moviesFutureRelease;

  @Input()
  movies;

  ngOnInit(): void{
    this.moviesInTheaters = [
      {
        title: 'Spider-Man',
        releaseDate: new Date(),
        price: 1400.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMjVmMDc3YjktODIwYi00YmNjLWI0ZjgtODEyMDY4NTYwNWM2XkEyXkFqcGdeQWFsZWxvZw@@._V1_UX477_CR0,0,477,268_AL__QL50.jpg'
      },
      {
        title: 'Moana',
        releaseDate: new Date('2021-03-21'),
        price: 1400.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BNGZjOTc1MzMtMjI2Mi00MDk3LWFkODEtYjdiZGRkYTdmZDk5XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UY268_CR3,0,182,268_AL__QL50.jpg'
      }
    ];

    this.moviesFutureRelease = [
      {
        title: 'Troy',
        releaseDate: new Date(),
        price: 1400.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTk5MzU1MDMwMF5BMl5BanBnXkFtZTcwNjczODMzMw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
      },
      {
        title: 'Titanic',
        releaseDate: new Date('2021-03-21'),
        price: 1400.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
      }
    ];
  }
}
