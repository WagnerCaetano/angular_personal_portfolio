import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconInterface } from 'src/shared/components/button/button.component';
import { CardComponentInterface } from 'src/shared/components/card/card.component';
import { ProjectCardComponentInterface } from 'src/shared/components/project-card/project-card.component';

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
  rightIcon: IconInterface = { name: 'bi bi-arrow-right' };
  projects: ProjectCardComponentInterface[] = [
    {
      access: '',
      view: './assets/images/work-progress.svg',
    },
    {
      access: '',
      view: './assets/images/work-progress.svg',
    },
    {
      access: '',
      view: './assets/images/work-progress.svg',
    },
  ];

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
