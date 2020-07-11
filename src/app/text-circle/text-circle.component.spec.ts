import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCircleComponent } from './text-circle.component';

describe('TextCircleComponent', () => {
  let component: TextCircleComponent;
  let fixture: ComponentFixture<TextCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
