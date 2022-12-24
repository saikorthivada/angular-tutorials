import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let componentInstance: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppComponent,
        ProfileComponent,
        HeaderComponent,
        FormsModule
      ],
      declarations: [
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    componentInstance = fixture.componentInstance;
  });

  it('Passing data from profile component to header component', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const profileNameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#profileInput');
    profileNameElement.value = 'Updated profile name';
    profileNameElement.dispatchEvent(new Event('input'));

    const profileNameReceiverMock = spyOn(componentInstance, 'profileNameReceiver').and.callThrough();

    fixture.detectChanges();
    await fixture.whenStable();

    const updateButon: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#updateProfileBtn');
    updateButon.click();

    fixture.detectChanges();
    await fixture.whenStable();
    
    expect(profileNameReceiverMock).toHaveBeenCalledTimes(1);
    expect(componentInstance.profileName).toEqual('Updated profile name');

    const profileLabelElement: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#profileLabel');
    expect(profileLabelElement.innerHTML).toEqual('My Profile Name - Updated profile name');
  })
});
