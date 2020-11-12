import { Component, Input, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
