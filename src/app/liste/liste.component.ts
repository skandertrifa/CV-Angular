import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from './../shared/models/personne.model';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  personnes = [
    {id: 1, name: 'Skander', job: 'Student', age: 15, imagePath: '../../assets/images/rotating_card_profile2.png' },
    {id: 2, name: 'Cyrine', job: 'Mechanic ', age: 25, imagePath: '../../assets/images/rotating_card_profile.png' },
    {id: 3, name: 'Soltane', job: 'No job', age: 35, imagePath: '../../assets/images/rotating_card_profile3.png' },
  ];
  @Output() sendDataToCV = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  sendData(personne) {
    this.sendDataToCV.emit(personne);
  }

}
