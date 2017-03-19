import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-left-side-nav',
  templateUrl: './left-side-nav.component.html',
  styleUrls: ['./left-side-nav.component.scss']
})
export class LeftSideNavComponent implements OnInit {
  @ViewChild('leftNav') sidenav;
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.sidenav.toggle();
  }
}
