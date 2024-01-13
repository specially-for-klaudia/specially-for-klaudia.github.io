import { Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { YesComponent } from './yes/yes.component';
import { NoComponent } from './no/no.component';

export const routes: Routes = [
  {
    path: '',
    component: QuestionComponent,
  },
  {
    path: 'yes',
    component: YesComponent,
  },
  {
    path: 'no',
    component: NoComponent,
  }
];
