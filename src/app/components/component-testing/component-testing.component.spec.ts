import { TestBed } from '@angular/core/testing';
import { ComponentTestingComponent } from './component-testing.component';

describe('TestingComponent Testing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [],
      providers: [],
    }).compileComponents();
  });

  it('Should render testing component', () => {
    let fixture = TestBed.createComponent(ComponentTestingComponent);
    let app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Should work sum method properly', () => {
    let fixture = TestBed.createComponent(ComponentTestingComponent);
    let app = fixture.componentInstance;
    expect(app.sum(2, 4)).toEqual(6);
  });
});
