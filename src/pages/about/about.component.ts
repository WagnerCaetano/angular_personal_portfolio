import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardComponentInterface } from 'src/shared/components/card/card.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  cardData: CardComponentInterface = {
    title: 'How I started',
    buttonType: 'normal',
  };

  constructor(
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      setTimeout(() => {
        fragment && document.querySelector('#'+fragment)?.scrollIntoView({behavior: 'smooth'})
      }, 300);
    });
  }
}
