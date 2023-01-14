import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconInterface } from 'src/shared/components/button/button.component';
import { CardComponentInterface } from 'src/shared/components/card/card.component';
import { ProjectCardComponentInterface } from 'src/shared/components/project-card/project-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'angular_personal_portfolio';
  leftIcon: IconInterface = { name: 'bi bi-download' };
  rightIcon: IconInterface = { name: 'bi bi-arrow-right' };
  skills: { cardData: CardComponentInterface; text: string }[] = [
    {
      cardData: {
        title: 'Quick learning',
        icon: { name: './assets/icons/smartphone.svg' },
        buttonType: 'normal',
      },
      text: 'One of the most important skill to me is being able to learn by myself, I think that it makes me better at understanding things and connecting ideas. ',
    },
    {
      cardData: {
        title: 'Problem solving',
        icon: { name: './assets/icons/solving.svg' },
        buttonType: 'normal',
      },
      text: 'I consider myself great at problem solving, everytime that I have a challenge or task that is new to me feels exciting to discover and learn, makes me go through the problem until I can find a reasonable solution. ',
    },
    {
      cardData: {
        title: 'Coworking',
        icon: { name: './assets/icons/teammate.svg' },
        buttonType: 'normal',
      },
      text: 'I believe that collabore to my co-workers carrer is as important as evolve on myself, it makes me capable of learn more, explain better and think in ways that didn’t have thought before. ',
    },
  ];
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
  cardData: CardComponentInterface = {
    title: 'A little about me',
    buttonType: 'normal',
    buttonTitle: 'Continue reading',
    buttonIcon: { name: 'bi bi-arrow-right' },
  };

  constructor(private readonly router: Router) {}

  ngOnInit() {}

  goToReading() {
    this.router.navigate(['about'], {fragment: 'aboutMeHistory'});
  }
}
