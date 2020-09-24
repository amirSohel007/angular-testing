import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';
import { InjectTestingComponent } from './inject-testing.component';
import { AuthService } from '../servicebased-component/components.service';

class MockAuthService extends AuthService {
  isAuthenticated() {
    return 'Mocked';
  }
}

describe('InjectTestingComponent', () => {
  let component: InjectTestingComponent;
  let fixture: ComponentFixture<InjectTestingComponent>;
  let authService: AuthService;
  let overRideService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InjectTestingComponent],
      providers: [AuthService],
    }).compileComponents();

    // Configure the component with another set of Providers
    TestBed.overrideComponent(InjectTestingComponent, {
      set: { providers: [{ provide: AuthService, useClass: MockAuthService }] },
    });

    // create component and test fixture
    fixture = TestBed.createComponent(InjectTestingComponent);

    // get InjectTestingComponent component from the fixture
    component = fixture.componentInstance;

    // AuthService provided to the TestBed
    authService = TestBed.get(AuthService);

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should be instance of AuthService', () => {
    expect(authService instanceof AuthService).toBeTruthy();
  });

  it('Should injectservice using inject function', inject(
    [AuthService],
    (injectService: AuthService) => {
      expect(injectService).toBeTruthy();
      expect(injectService instanceof AuthService).toBeTruthy();
    }
  ));

  it('Service injected via component should be and instance of MockAuthService', () => {
    // AuthService provided by Component, (should return MockAuthService)
    overRideService = fixture.debugElement.injector.get(AuthService);
    expect(overRideService).toBeTruthy();
    expect(overRideService instanceof MockAuthService).toBeTruthy();
  });
});
