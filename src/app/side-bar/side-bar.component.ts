import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  user = {
    img: "https://api.adorable.io/avatars/100/john-doe.png",
    alt: "",
    name: "John Doe"
  };

  times = [
    "10:00 AM - 11:00 AM",
    "11:30 AM - 12:30 AM",
    "1:00 PM - 2:00 PM"
  ]

  @Input('showSideBar') showSideBar: boolean;

  @Output() hideSideBar = new EventEmitter<boolean>();
  sideHideBtn() {
    this.hideSideBar.emit(true);
  }

}
