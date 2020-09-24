import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutoutTestComponent } from './input-outout-test.component';

describe('InputOutoutTestComponent', () => {
  let component: InputOutoutTestComponent;
  let fixture: ComponentFixture<InputOutoutTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputOutoutTestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutoutTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should test the input string', () => {
    component.username = 'Amir Sohel';
    fixture.detectChanges();
    expect(component.username).toBe('Amir Sohel');
  });
});
