import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';
import { AnalyzeModule } from './analyze';
import { SummaryModule } from './summary';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// Routes
import { routes } from './app.routes';

// Reducers
import { metaReducers, Reducers } from './store/reducers';

// Effects
import { Effects } from './store/effects';

// Services
import { Services } from './core/services';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgsRevealModule } from 'ng-scrollreveal';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    // Angular
    BrowserAnimationsModule,
    BrowserModule,
    //http
    HttpClientModule,
    
    // Core & Shared
    CoreModule,
    SharedModule,
    ScrollToModule.forRoot(),

    // Features
    AnalyzeModule,
    SummaryModule,

    // Routes
    RouterModule.forRoot(routes, { useHash: true }),

    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(Reducers, { metaReducers }),

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
    EffectsModule.forRoot(Effects()),
    NgsRevealModule.forRoot()
  ],
  declarations: [AppComponent, WelcomeComponent],
  providers: [Services()],
  bootstrap: [AppComponent]
})
export class AppModule {}
