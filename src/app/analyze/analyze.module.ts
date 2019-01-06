import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { AnalyzeComponent } from './analyze.component';


@NgModule({
  imports: [SharedModule],
  declarations: [AnalyzeComponent]
})
export class AnalyzeModule {}
