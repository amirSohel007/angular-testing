import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SquarePipe } from './square.pipe';
import { PipeTestingComponent } from './pipe-testing.component';
import { FormsModule } from '@angular/forms';

describe('PipeTestingComponent', () => {
  let component: PipeTestingComponent;
  let fixture: ComponentFixture<PipeTestingComponent>;
  let pipeInstance: SquarePipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PipeTestingComponent, SquarePipe],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PipeTestingComponent);
    pipeInstance = new SquarePipe();
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should run component', () => {
    expect(component).toBeTruthy();
  });

  it('should excute pipe instance', () => {
    expect(pipeInstance).toBeTruthy();
  });

  it('should return square value', () => {
    expect(pipeInstance.transform(20)).toEqual(400);
  });
});
