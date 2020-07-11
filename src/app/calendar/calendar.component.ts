import { Component, OnInit } from '@angular/core';
import { Calendar } from 'calendar-base';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  curDate = {
    month: null,
    year: null,
    date: null
  };

  weekdayNames = [
    "M",
    "T",
    "W",
    "T",
    "F",
    "S",
    "S"
  ]

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  years = [...Array(71).keys()].map((x) => { return x + 1950 });

  monthCal = null;

  constructor() { }

  ngOnInit(): void {
    const calendar = new Calendar({ siblingMonths: false, weekStart: 1 });
    const today = new Date();
    this.curDate.month = this.months[today.getUTCMonth()];
    this.curDate.year = today.getFullYear();
    this.curDate.date = today.getUTCDate();
    this.monthCal = calendar.getCalendar(today.getUTCFullYear(), today.getUTCMonth());
  }

  dateChanged(date) {
    this.curDate.date = date;
  }

  monthChange(event) {
    const calendar = new Calendar({ siblingMonths: false, weekStart: 1 });
    var month = event.target.value;
    this.curDate.month = this.months[month];
    this.monthCal = calendar.getCalendar(this.curDate.year, month);
    this.curDate.date = null;
  }

  yearChange(event) {
    const calendar = new Calendar({ siblingMonths: false, weekStart: 1 });
    var year = event.target.value;
    this.curDate.year = year;
    var month = this.months.indexOf(this.curDate.month);
    this.monthCal = calendar.getCalendar(this.curDate.year, month);
    this.curDate.date = null;
  }

}
