import { Component, OnInit } from '@angular/core';
import { TechCardComponent } from './tech-card/tech-card.component';

@Component({
  selector: 'app-knowledge-cards',
  templateUrl: './knowledge-cards.component.html',
  styleUrls: ['./knowledge-cards.component.scss']
})
export class KnowledgeCardsComponent implements OnInit {

  teste = [1,2,3]

  constructor() { }

  ngOnInit() {
  }

}
