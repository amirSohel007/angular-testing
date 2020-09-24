import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentComponent } from './child-component.component';

describe('ChildComponentComponent', () => {
  let component: ChildComponentComponent;
  let fixture: ComponentFixture<ChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChildComponentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should test the output string', () => {
    component.name = 'Amir Sohel';
    fixture.detectChanges();
    let button = fixture.nativeElement.querySelector('button');
    expect(button.textContent).toBe('Amir Sohel');
  });
});
