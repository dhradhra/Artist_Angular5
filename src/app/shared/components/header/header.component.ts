import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  public isVisible : Boolean
  constructor(public router: Router) { 
    router.events.subscribe((val) => {
      if (this.router.url == '/'){
        this.isVisible =  false
      }
      else{
        this.isVisible = true
      }
    });

  }

  ngOnInit() { 
    if (this.router.url == '/') {
      this.isVisible = false
    }
  }

  toggleSidenav() {
    this.sidenavToggle.emit();
  }
}
