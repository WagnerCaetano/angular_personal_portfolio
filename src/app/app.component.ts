import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IconInterface } from 'src/shared/components/button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_personal_portfolio';
  leftIcon: IconInterface = { name: 'fa fa-download' };

  constructor(private translate: TranslateService) {
    this.useLanguage();
  }

  useLanguage(): void {
    this.translate.use(this.translate.getBrowserLang() == 'pt' ? 'pt' : 'en');
  }
}
