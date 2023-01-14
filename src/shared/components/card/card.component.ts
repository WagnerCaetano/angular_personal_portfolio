import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  data: CardComponentInterface = { title: "Title", icon: { name: 'bi bi-arrow' }, buttonType: 'normal'}; 

  @Output()
  clickEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  clickEventEmit(event: boolean) {
    this.clickEvent.emit(event);
  }

}
