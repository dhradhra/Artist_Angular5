import { Routes } from '@angular/router';

import { AnalyzeComponent } from './analyze';
import { SummaryComponent } from './summary';
import { WelcomeComponent } from '@app/welcome/welcome.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'analyze',
    component: AnalyzeComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
