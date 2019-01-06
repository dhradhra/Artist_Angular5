import { NgModule } from '@angular/core';
import { SwiperModule } from 'angular2-useful-swiper';

import { SharedModule } from '../shared';

import { ImageComponent } from './image/image.component';
import { SummaryComponent } from './summary.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [SharedModule, SwiperModule, FlexLayoutModule],
  declarations: [ImageComponent, SummaryComponent]
})
export class SummaryModule {}
