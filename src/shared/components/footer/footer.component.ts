import { Component, OnInit } from '@angular/core';

export interface LinkInteface {
  title: string;
  page: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  links: LinkInteface[] = [{ title: 'Inicio', page: 'home' }, { title: 'Sobre Mim', page: 'about' }, { title: 'Habilidades', page: 'skills' }, { title: 'Projetos', page: 'projects' }];

  constructor() { }

  ngOnInit() {

  }

}
