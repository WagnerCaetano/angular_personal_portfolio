import { Component, OnInit } from '@angular/core';
import { TechCardComponent } from './tech-card/tech-card.component';

export interface KnowledgeCardInterface {
  rate: number;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-knowledge-cards',
  templateUrl: './knowledge-cards.component.html',
  styleUrls: ['./knowledge-cards.component.scss'],
})
export class KnowledgeCardsComponent implements OnInit {
  cardList: KnowledgeCardInterface[] = [
    {
      description: 'Mastering',
      icon: 'angular.svg',
      rate: 5,
    },
    {
      description: 'Mastering',
      icon: 'java.svg',
      rate: 5,
    },
    {
      description: 'Advanced',
      icon: 'spring.svg',
      rate: 4,
    },
    {
      description: 'Intermediary',
      icon: 'docker.svg',
      rate: 3,
    },
    {
      description: 'Intermediary',
      icon: 'typescript.svg',
      rate: 3,
    },
    {
      description: 'Intermediary',
      icon: 'grafana.svg',
      rate: 3,
    },
    {
      description: 'Intermediary',
      icon: 'cypress.svg',
      rate: 3,
    },
    {
      description: 'Mastering',
      icon: 'jest.svg',
      rate: 5,
    },
    {
      description: 'Intermediary',
      icon: 'npm.svg',
      rate: 3,
    },
    {
      description: 'Advanced',
      icon: 'vscode.svg',
      rate: 4,
    },
    {
      description: 'Mastering',
      icon: 'git.svg',
      rate: 5,
    },
    {
      description: 'Advanced',
      icon: 'intellij.svg',
      rate: 4,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
