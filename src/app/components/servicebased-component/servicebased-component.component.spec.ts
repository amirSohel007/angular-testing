import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicebasedComponentComponent } from './servicebased-component.component';
import { AuthService } from './components.service';

describe('ServicebasedComponentComponent', () => {
  let component: ServicebasedComponentComponent;
  let fixture: ComponentFixture<ServicebasedComponentComponent>;
  let authService: AuthService;
  let h3: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServicebasedComponentComponent],
      providers: [AuthService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicebasedComponentComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
    h3 = fixture.nativeElement.querySelector('.salary__staus');
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called isAuth method and return Slary slip', () => {
    spyOn(authService, 'isAuth').and.returnValue(true);
    let salSlip = component.getSalarySlip();
    expect(salSlip).toEqual('Salary slip');
    expect(authService.isAuth).toHaveBeenCalled();
  });

  it('should called not called isAuth method and return No logged in', () => {
    spyOn(authService, 'isAuth').and.returnValue(false);
    let salSlip = component.getSalarySlip();
    expect(salSlip).toEqual('No logged in');
  });

  it('Should update the value of html H3 tag after trigger getSalarySlip method', () => {
    component.getSalarySlip();
    fixture.detectChanges();
    expect(h3.textContent).toBe(component.salaryStatus);
  });
});
