import { Component, OnInit } from '@angular/core';
import { CardComponentInterface } from 'src/shared/components/card/card.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  cardData: CardComponentInterface = {
    title: 'How I started',
    buttonType: 'normal',
  };

  constructor() { }

  ngOnInit() {
  }

}
