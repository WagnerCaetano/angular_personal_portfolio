import { Component, Input, OnInit } from '@angular/core';
import { IconInterface } from '../button/button.component';

export interface CardComponentInterface {
  title: string;
  icon?: IconInterface;
  buttonTitle?: string; 
  buttonType: "outline" | "normal";
  buttonIcon?: IconInterface;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  data: CardComponentInterface = { title: "Title", icon: { name: 'fa fa-arrow' }, buttonType: 'normal'}; 

  constructor() { }

  ngOnInit() {
  }

}
