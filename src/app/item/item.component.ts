import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() id = 0;
  @Input() name = 'vide';
  @Input() job = 'vide';
  @Input() age = 999;
  @Input() imagePath = '';

  constructor() { }

  ngOnInit(): void {
  }

}
