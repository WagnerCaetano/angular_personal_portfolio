import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tech-card',
  templateUrl: './tech-card.component.html',
  standalone: true,
	imports: [NgbRatingModule, CommonModule,],
  styleUrls: ['./tech-card.component.scss']
})
export class TechCardComponent implements OnInit {

  @Input()
  rate!: number;
  @Input()
  icon!: string ;
  @Input()
  description!: string;

  constructor() { }

  ngOnInit() {
  }

}
