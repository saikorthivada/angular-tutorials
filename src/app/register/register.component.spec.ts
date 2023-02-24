import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [
        {provide: ActivatedRoute, useValue: {
          queryParams: jasmine.createSpyObj('queryParams', ['subscribe'])
        }}
      ]
    })
    .compileComponents();

    activatedRoute = TestBed.inject(ActivatedRoute);

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Register query params check', fakeAsync(() => {
    (activatedRoute.queryParams.subscribe as jasmine.Spy).and.callFake((callback) => callback({name: 'sai', age: 27}));

    tick();
    activatedRoute.queryParams.subscribe((res) => {
      expect(res.name).toEqual('sai');
      expect(res.age).toEqual(27);
    })
  }))
});
