import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-circle',
  templateUrl: './text-circle.component.html',
  styleUrls: ['./text-circle.component.css']
})
export class TextCircleComponent {

  @Input('text') text;

}
