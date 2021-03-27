import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from '../../Validators/firstLetterUppercase';
import { genreCreationDTO } from '../genres.Model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router) { }

  form: FormGroup;

  ngOnInit(): void {
  }

  saveChanges(genreCreationDTO: genreCreationDTO){
    //... Save the genre
    console.log(genreCreationDTO);
    this.router.navigate(['/genres']);
  }
}

