import { Component, Input, OnInit } from '@angular/core';
import { IconInterface } from '../button/button.component';

export interface ProjectCardComponentInterface {
  access: string;
  view: string;
}

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input()
  data: ProjectCardComponentInterface = { access: '', view: './assets/images/work-progress.svg' }; 


  constructor() { }

  ngOnInit() {
  }

}
