import { Location } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let componentInstance: AppComponent;

  let router: Router;
  let location: Location;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    componentInstance = fixture.componentInstance;

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('Empty url check', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toEqual('/register');
  }));

  it('Login button click', fakeAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const loginBtn: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#login_btn');

      const registerlink: HTMLAnchorElement = fixture.debugElement.nativeElement.querySelector('#register_link');

      loginBtn.click();
      tick();
      expect(location.path()).toEqual('/dashboard');
      location.back();
      expect(location.path()).toEqual('');
      location.forward();
      expect(location.path()).toEqual('/dashboard');
      const isInActive = registerlink.classList.contains('active');
      expect(isInActive).toBeFalsy();

      registerlink.click();
      tick();
      expect(location.path()).toEqual('/register');
      const isActive = registerlink.classList.contains('active');
      expect(isActive).toBeTruthy();
    })
  }))
});
