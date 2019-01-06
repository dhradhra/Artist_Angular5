import { Component,OnInit,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import {STORIES} from './../Assets/story_data';

import * as fromRoot from '../store/reducers/index';
import * as SummaryAction from '../store/actions/summary.action';
import { HttpClient } from '@angular/common/http/src/client';
import { Story } from '@app/Assets/story';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss']
})
export class AnalyzeComponent {
  text: string;
  title: string;
  cardTitle:string;


  stories = STORIES;

 selectedStory:Story;


  constructor(public store: Store<fromRoot.AppState>) {

   
  }



  analyze() {
    this.store.dispatch(new SummaryAction.AnalyzeContent({ text: this.text, title: this.title }));
  }


  onSelect(story:Story):void{

    this.selectedStory=story;
    console.log("selected",this.selectedStory);
   this.title=this.selectedStory.Title;
   this.text=this.selectedStory.Body;
  }

  onClear(story:Story):void{
    this.title="";
    this.text="";

  }

}
