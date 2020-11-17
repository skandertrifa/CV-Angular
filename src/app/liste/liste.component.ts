import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CvService } from './../cv/services/cv.service';
import { Personne } from './../shared/models/personne.model';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  personnes = [];

  @Output() sendDataToCV = new EventEmitter();
  constructor(cvService: CvService) {
    this.personnes = cvService.getPersonnes();
   }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  sendData(personne: Personne): void {
    this.sendDataToCV.emit(personne);
  }

}
