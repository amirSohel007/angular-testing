import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HoverFocusDirective } from './stylelist.directive';
import { DirectiveTestingComponent } from './directive-testing.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DirectiveTestingComponent', () => {
  let component: DirectiveTestingComponent;
  let fixture: ComponentFixture<DirectiveTestingComponent>;
  let inputEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveTestingComponent, HoverFocusDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectiveTestingComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('hovering over input', () => {
    inputEl.triggerEventHandler('mouseover', {});
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('orange');
  });

  it('should remove hover', () => {
    inputEl.triggerEventHandler('mouseout', {});
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('red');
  });
});
