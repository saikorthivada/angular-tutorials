import { Location } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let componentInstance: AppComponent;
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

    TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    componentInstance = fixture.componentInstance;
  });

  it('Navigation to login and register', fakeAsync(() =>{
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let loginBtn: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#login_id');
      let loginPage: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#login_para');

      expect(loginPage).toBeNull();

      loginBtn.click();

      tick();

      expect(location.path()).toEqual('/login/1');

      let afterLoginNavigation: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#login_para');

      expect(afterLoginNavigation).not.toBeNull();

      let register: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#register_id');
      let registerPage: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#register_para');

      expect(registerPage).toBeNull();

      register.click();

      tick();

      expect(location.path()).toEqual('/register?name=sai&age=27');

      let afterRegisterNavigation: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#register_para');

      expect(afterRegisterNavigation).not.toBeNull();
    })
  }))
});
