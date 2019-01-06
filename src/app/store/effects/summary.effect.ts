import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as SummaryAction from '../actions/summary.action';
import { SummaryService } from '@app/core/services/summary.service';

@Injectable()
export class SummaryEffect {
  constructor(
    private actions$: Actions,
    private summaryService: SummaryService,
    private router: Router
  ) {}

  @Effect()
  analyzeContent$ = this.actions$
    .ofType(SummaryAction.ANALYZE_CONTENT)
    .map((action: SummaryAction.AnalyzeContent) => action.payload)
    .exhaustMap(payload =>
      this.summaryService
        .analyzeContent(payload)
        .map((data: any) => new SummaryAction.AnalyzeContentSuccess(data))
        .catch(err => of(new SummaryAction.AnalyzeContentError(err)))
    );

  @Effect({ dispatch: false })
  analyzeContentSuccess$ = this.actions$
    .ofType(SummaryAction.ANALYZE_CONTENT_SUCCESS)
    .do(() => this.router.navigate(['/summary']));

  @Effect()
  stylizeImage$ = this.actions$
    .ofType(SummaryAction.STYLIZE_IMAGE)
    .map((action: SummaryAction.StylizeImage) => action.payload)
    .exhaustMap(payload =>
      this.summaryService
        .stylize(payload)
        .map((data: any) => new SummaryAction.StylizeImageSuccess(data))
        .catch(err => of(new SummaryAction.StylizeImageError(err)))
    );

  @Effect()
  Addtag$ = this.actions$
    .ofType(SummaryAction.ADD_TAG)
    .map((action: SummaryAction.AddTag) => action.payload)
    .exhaustMap(payload =>
      this.summaryService
        .Tag(payload)
        .map((data: any) => new SummaryAction.AddTagSuccess(data))
        .catch(err => of(new SummaryAction.AddTagError(err)))
    );
}
