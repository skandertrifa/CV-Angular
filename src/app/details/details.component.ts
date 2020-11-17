import { Component, Input, OnInit } from '@angular/core';
import { EmbaucheService } from './../embauche/services/embauche.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() personne = {
    id: 3,
    name: 'soltane',
    job: 'Student',
    age: 35,
    imagePath: ''
  };
  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
  }
  embaucheClick(): void {
    const message = this.embaucheService.addToEmbauche(this.personne);
    if (message === 'error') {
      window.alert('déjà embauché');
    }
  }

}
