import {
  Component,
  Input,
  SimpleChange,
  SimpleChanges,
  HostListener,
  ElementRef
} from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers/index';
import * as SummaryAction from '../../store/actions/summary.action';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() content: any;

  style: string;
  selected: any;
  selectedContentData = [];
  loadAPI: Promise<any>;
  @Input() childMessage: any;

  styles = [
    { value: 'smooth_ride', name: 'Smooth Ride' },
    { value: 'purple_storm', name: 'Purple Storm' },
    { value: 'yellow_collage', name: 'Yellow Collage' },
    { value: 'oily_mcoilface', name: 'Oily McOilface' },
    { value: 'dark_rain', name: 'Purple Pond' },
    { value: 'crafty_painting', name: 'Crafty Painting' },
    { value: 'post_modern', name: 'Post Modern' },
    { value: 'spagetti_accident', name: 'Spagetti Accident' },
    { value: 'creativity', name: 'Creativity' },
    { value: 'bright_sand', name: 'Bright Sand' },
    { value: 'blue_granite', name: 'Blue Granite' },
    { value: 'cinnamon_rolls', name: 'Cinnamon Rolls' },
    { value: 'dark_soul', name: 'Dark Soul' },
    { value: 'gan_vogh', name: 'Gan Vogh' },
    { value: 'purple_pond', name: 'Purple Pond' },
    { value: 'sunday', name: 'Sunday' }
  ];

  constructor(public store: Store<fromRoot.AppState>) {
    this.loadAPI = new Promise(resolve => {
      this.loadScript();
      resolve(true);
    });
  }

  ngAfterViewInit() {
    var elelength = document.querySelectorAll('.thumbnail-slider').length;
    var selectedContentStyle = '';
    if (typeof this.content.stylized !== 'undefined') {
      selectedContentStyle = this.content.stylized.style;
    }
    // for normal case
    var stateFor = false;
    for (var i = 0; i < elelength; i++) {
      var d = document.querySelector('#thumbnail-slider-' + i + ' li.active');
      if (d != null) {
        var rm = d.getAttribute('id');
        var thingToRemove = document
          .querySelector('#thumbnail-slider-' + i + ' #list-' + i + '  #' + rm)
          .remove();
        var list = document.getElementById('list-' + i);
        list.insertBefore(d, list.childNodes[0]);
        stateFor = true;
      }
    }
    // for edit case
    if (!stateFor) {
      var selectStyle = document.querySelectorAll(
        '#thumbnail-slider-' +
          this.childMessage +
          ' #list-' +
          this.childMessage +
          ' li'
      );
      var index = this.childMessage;
      var result = Object.keys(selectStyle).map(function(key) {
        var selectID = selectStyle[key].getAttribute('id');
        if (selectID == selectedContentStyle) {
          var thingToRemove = document
            .querySelector(
              '#thumbnail-slider-' +
                index +
                ' #list-' +
                index +
                '  #' +
                selectID
            )
            .remove();
          var list = document.getElementById('list-' + index);
          list.insertBefore(selectStyle[key], list.childNodes[0]);
        }
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const content: SimpleChange = changes.content;
    if (content) {
      if (content.currentValue.stylized) {
        this.style = content.currentValue.stylized.style;
        this.selected = content.currentValue.stylized.selected;
      }
    }
  }

  select(i) {
    this.store.dispatch(new SummaryAction.SelectImage({ selected: i }));
  }

  unselect() {
    this.store.dispatch(new SummaryAction.SelectImage({ selected: null }));
  }

  stylize() {
    this.store.dispatch(
      new SummaryAction.StylizeImage({
        image: this.selected,
        style: this.style
      })
    );
  }

  selectFilter(index) {
    var m = document
      .querySelector('#thumbnail-slider-' + index + ' li.active')
      .getAttribute('id');
    this.selectedContentData.push(m);

    if (m == 'original') {
      this.store.dispatch(new SummaryAction.ClearStyle());
    } else {
      this.store.dispatch(
        new SummaryAction.StylizeImage({
          image: this.selected,
          style: m
        })
      );
    }
  }

  loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; ++i) {
      if (
        scripts[i].getAttribute('src') != null &&
        scripts[i].getAttribute('src').includes('thumbnail-sliders')
      ) {
        isFound = true;
        scripts[i].parentElement.removeChild(scripts[i]);
      }
    }

    let node = document.createElement('script');
    node.src = 'assets/js/thumbnail-sliders.js';
    node.type = 'text/javascript';
    node.async = false;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  clear(i) {
    var activeFilter = document.querySelector(
      '#thumbnail-slider-' + i + ' li.active'
    );
    activeFilter.removeAttribute('class');
    var originalFilter = document.querySelector(
      '#thumbnail-slider-' + i + ' #list-' + i + ' #original'
    );
    originalFilter.setAttribute('class', 'active');
    this.store.dispatch(new SummaryAction.ClearStyle());
  }
}
