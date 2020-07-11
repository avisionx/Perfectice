import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TextCircleComponent } from './text-circle/text-circle.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomButtonComponent,
    SideBarComponent,
    CalendarComponent,
    DashboardComponent,
    TextCircleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
