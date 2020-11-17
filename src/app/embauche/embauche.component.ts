import { Component, OnInit } from '@angular/core';
import { EmbaucheService } from './services/embauche.service';
import { CvService } from './../cv/services/cv.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  personnes = [];
  constructor(
    embaucheService: EmbaucheService,
    ) {
      this.personnes = embaucheService.getEmbauches();
    }

  ngOnInit(): void {
  }

}
