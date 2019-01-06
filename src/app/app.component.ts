import { Title } from '@angular/platform-browser';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

// RxJS
import { filter } from 'rxjs/operators/filter';
import { Observable } from 'rxjs/Observable';

import { routerTransition } from '@app/core';
import { environment as env } from '@env/environment';

import * as fromRoot from '@app/store/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements OnInit {
  @HostBinding('class') componentCssClass;
  loading: Observable<any>;
  year = new Date().getFullYear();

  /* navigation = [
    { link: 'about', label: 'About' },
    { link: 'features', label: 'Features' },
    { link: 'examples', label: 'Examples' }
  ];

  navigationSideMenu = [
    ...this.navigation,
    { link: 'analyze', label: 'Settings' }
  ]; */

  constructor(
    private router: Router,
    private titleService: Title,
    public store: Store<fromRoot.AppState>
  ) {
    this.loading = this.store.select(fromRoot.getLoadingState);
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof ActivationEnd))
      .subscribe((event: ActivationEnd) => {
        let lastChild = event.snapshot;

        while (lastChild.children.length) {
          lastChild = lastChild.children[0];
        }

        const { title } = lastChild.data;

        this.titleService.setTitle(
          title ? `${title} - ${env.appName}` : env.appName
        );
      });
  }
}
