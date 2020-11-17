import { Component, OnInit } from '@angular/core';
import { CvService } from './services/cv.service';
import { EmbaucheService } from './../embauche/services/embauche.service';
import { Personne } from './../shared/models/personne.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [CvService, EmbaucheService]
})
export class CvComponent implements OnInit {
  personne = {};
  constructor() { }

  ngOnInit(): void {
  }
  processPersonneData(personne: Personne): void {
    console.log(personne);
    this.personne = personne;
  }

}
