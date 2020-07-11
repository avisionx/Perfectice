import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSideBar = false;

  toggleSideNav() {
    this.showSideBar = !this.showSideBar;
    window.scroll(0, 0);
  }
}
