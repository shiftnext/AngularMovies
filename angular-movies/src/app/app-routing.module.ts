import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateActorsComponent } from './actors/create-actors/create-actors.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateComponent } from './genres/create/create.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';
import { CreateMovieComponent } from './moives/create-movie/create-movie.component';
import { EditMovieComponent } from './moives/edit-movie/edit-movie.component';
import { MoviesListComponent } from './moives/movies-list/movies-list.component';
import { CreateMovieTheaterComponent } from './movie-theaters/create-movie-theater/create-movie-theater.component';
import { EditMovieTheaterComponent } from './movie-theaters/edit-movie-theater/edit-movie-theater.component';
import { IndexMovieTheaterComponent } from './movie-theaters/index-movie-theater/index-movie-theater.component';
import { FilterComponent } from './movies/filter/filter.component';

const routes: Routes = [
  {path: '', component: HomeComponent }
  , {path: 'genres', component: IndexGenresComponent }
  , {path: 'genres/create', component: CreateComponent }
  , {path: 'genres/edit/:id', component: EditGenreComponent }

  , {path: 'actors', component: IndexActorsComponent }
  , {path: 'actors/create', component: CreateActorsComponent }
  , {path: 'actors/edit/:id', component: EditActorComponent }


  , {path: 'movietheaters', component: IndexMovieTheaterComponent }
  , {path: 'movietheaters/create', component: CreateMovieTheaterComponent }
  , {path: 'movietheaters/edit/:id', component: EditMovieTheaterComponent }

  , {path: 'moives/create', component: CreateMovieComponent }
  , {path: 'moives/edit/:id', component: EditMovieComponent }
  , {path: 'movies/filter', component: FilterComponent }

  , {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
