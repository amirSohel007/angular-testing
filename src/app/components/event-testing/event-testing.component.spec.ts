import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventTestingComponent } from './event-testing.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('EventTestingComponent', () => {
  let component: EventTestingComponent;
  let fixture: ComponentFixture<EventTestingComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventTestingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger increment method with proper value', () => {
    const h3 = de.query(By.css('h3'));
    const btn = de.query(By.css('#btnClick'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.numCount).toEqual(parseInt(h3.nativeElement.innerText));
  });
});
