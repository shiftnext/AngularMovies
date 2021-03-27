import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;
  genres = [{id: 1, name: 'Drama'}, {id: 2, name: 'Action'}];

  movies = [
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

  originalMovies = this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheater: false
    });

    this.form.valueChanges
      .subscribe(values => {
        this.movies = this.originalMovies;
        this.filterMovies(values);
      });
  }

  filterMovies(values: any){
    if (values.title){
      console.log(values.title);
      console.log(this.movies);
      this.movies = this.movies.filter(movie => movie.title.toLowerCase().indexOf(values.title.toLowerCase()) !== -1);
    }
  }

  clearForm() {
    this.form.reset();
  }
}
