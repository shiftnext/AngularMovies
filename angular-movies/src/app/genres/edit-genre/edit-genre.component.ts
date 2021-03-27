import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { genreCreationDTO } from '../genres.Model';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: genreCreationDTO = { name: 'Drama'};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(x => {
      alert(x.id);
    });
  }

  saveChanges(generCreationDTO: genreCreationDTO){
    console.log(genreCreationDTO);
    this.router.navigate(['/genres']);
  }

}
