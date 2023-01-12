import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent, CardComponent, FooterComponent, HeaderComponent, ProjectCardComponent],
  exports: [ButtonComponent, CardComponent, FooterComponent, HeaderComponent, ProjectCardComponent]
})
export class ComponentsModule { }
