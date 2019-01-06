import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ENV } from '@app/core/constants';

@Injectable()
export class SummaryService {
  constructor(private http: HttpClient) {}

  public analyzeContent(data: any): Observable<any> {
    return this.http.post(`${ENV.API_URL}/analyze-v3`, data);
  }

  public stylize(data: any): Observable<any> {
    return this.http.post(`${ENV.API_URL}/stylize`, data);
  }

  public Tag(data: any): Observable<any> {
    return this.http.post(`${ENV.API_URL1}/get-images-for-sentence`, {
      text: data.tag
    });
  }
}
