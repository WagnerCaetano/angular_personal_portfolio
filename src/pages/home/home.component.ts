import { Component, OnInit } from '@angular/core';
import { IconInterface } from 'src/shared/components/button/button.component';
import { CardComponentInterface } from 'src/shared/components/card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'angular_personal_portfolio';
  leftIcon: IconInterface = { name: 'fa fa-download' };
  cardData: CardComponentInterface = { title: "A little about me", icon: { name: 'fa fa-arrow' }, buttonType: 'normal', buttonTitle: 'Continue reading' , buttonIcon: { name: 'fa fa-arrow-right'}}; 

  constructor() { }

  ngOnInit() {
  }

}
