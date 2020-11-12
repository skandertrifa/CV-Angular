import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personne = {};
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  processPersonneData(personne) {
    console.log(personne);
    this.personne = personne;
  }

}
