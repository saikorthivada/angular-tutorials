import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let activatedRoute: ActivatedRoute;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            params: jasmine.createSpyObj('params', ['subscribe'])
          }
        }
      ]
    })
      .compileComponents();
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Login param value', fakeAsync(() => {
    (activatedRoute.params.subscribe as jasmine.Spy).and.callFake((callBack) => callBack({ id: 2 }));
    tick();
    activatedRoute.params.subscribe((res) => {
      expect(res.id).toEqual(2);
    })
  }))
});
