import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatChipInputEvent, PageEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { SwiperComponent } from 'angular2-useful-swiper';

import * as fromRoot from '../store/reducers/index';
import * as SummaryAction from '../store/actions/summary.action';
import Typed from 'typed.js';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnDestroy {
  @ViewChild('swiper') swiper: SwiperComponent;

  config: SwiperOptions = {
    simulateTouch: false,
    spaceBetween: 30
  };

  contents: Observable<any>;
  contentSubscription: Subscription;

  mode = 'edit';
  disableView = true;

  visible = true;
  removable = true;
  addOnBlur = true;
  parentMessage: any = 0;
  hideme = [];

  // Enter, Comma
  separatorKeysCodes = [ENTER, COMMA];

  ngOnInit() {}

  ngAfterViewInit() {
    var test = this.contents.subscribe;
    for (var i = 0; i <= test.length; i++) {
      var typed = new Typed('#typed' + i, {
        strings: [
          'kids playing in beach',
          'koala climbing',
          'cat dog man woman'
        ],
        loop: true,
        typeSpeed: 80
      });
    }
  }

  test(event: any) {
    var thingToRemove = document
      .querySelector('#dvspansearch' + event)
      .remove();
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add
    if ((value || '').trim()) {
      this.store.dispatch(new SummaryAction.AddTag({ tag: value.trim() }));
    }

    // Reset
    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: any): void {
    this.store.dispatch(new SummaryAction.RemoveTag({ tag: tag }));
  }

  removeTagAllTag(): void {
    this.store.dispatch(new SummaryAction.RemoveAllTag({ tag: '' }));
  }

  search(value: any): void {
    if ((value || '').trim()) {
      this.store.dispatch(new SummaryAction.AddTag({ tag: value.trim() }));
    }
  }

  paginate(event: PageEvent) {
    this.store.dispatch(
      new SummaryAction.ActiveContentIndex({ index: event.pageIndex })
    );
    this.swiper.swiper.slideTo(event.pageIndex);
  }

  toggleMode() {
    if (this.mode === 'edit') {
      this.mode = 'view';
    } else {
      this.mode = 'edit';
      this.store.dispatch(new SummaryAction.ActiveContentIndex({ index: 0 }));
    }
  }

  constructor(public store: Store<fromRoot.AppState>) {
    this.contents = this.store.select(fromRoot.getSummaryContent);

    this.contentSubscription = this.contents.subscribe(res => {
      let selected = 0,
        total = 0;

      res.forEach(function(c) {
        if (c.image_links) {
          total++;
        }

        if (c.stylized && c.stylized.selected) {
          selected++;
        }
      });

      total === selected
        ? (this.disableView = false)
        : (this.disableView = true);
    });
  }
  download(){
    var temp = this.contents.subscribe(res => {
     console.log(res)
     var list = JSON.parse(JSON.stringify(res))
      this.downloadImage(list)
    });
  }
  downloadImage(list){
    if(list.length == 0) return;
    var element = list.pop();
    const a = document.createElement('a');
    a.href = element['stylized']['image'] || element['stylized']['selected']['full']
    a.download = 'title';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      console.log(list)
      this.downloadImage(list);
      }.bind(this), 1000)
      
  }
  ngOnDestroy() {
    this.contentSubscription.unsubscribe();
  }
}
