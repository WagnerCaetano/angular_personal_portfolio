import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { KnowledgeCardsComponent } from './knowledge-cards/knowledge-cards.component';
import { TechCardComponent } from './knowledge-cards/tech-card/tech-card.component';

@NgModule({
  imports: [
    CommonModule,
    TechCardComponent
  ],
  declarations: [ButtonComponent, CardComponent, FooterComponent, HeaderComponent, ProjectCardComponent, KnowledgeCardsComponent],
  exports: [ButtonComponent, CardComponent, FooterComponent, HeaderComponent, ProjectCardComponent, KnowledgeCardsComponent]
})
export class ComponentsModule { }
