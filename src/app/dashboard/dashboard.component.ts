import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  testData = [
    {
      name: "Test01",
      status: "Draft",
      classrooms: [
        {
          name: "Classroom_1",
          val: 201
        }, {
          name: "Classroom_2",
          val: 40
        }, {
          name: "Classroom_3",
          val: 16
        }, {
          name: "Classroom_4",
          val: 56
        },
      ]
    },
    {
      name: "Test02",
      status: "Published",
      classrooms: [
        {
          name: "Classroom_1",
          val: 10
        }, {
          name: "Classroom_2",
          val: 50
        }, {
          name: "Classroom_3",
          val: 16
        }, {
          name: "Classroom_4",
          val: 56
        },
      ]
    },
    {
      name: "Test03",
      status: "Published",
      classrooms: [
        {
          name: "Classroom_1",
          val: 5
        }, {
          name: "Classroom_2",
          val: 16
        }, {
          name: "Classroom_3",
          val: 10
        },
      ]
    }
  ]

}
