import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let componentInstance: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    componentInstance = fixture.componentInstance;
  });
  it('update the model value from controller', () => {
    componentInstance.modelTest = 'update value from controller';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#modelId')
      expect(element.value).toEqual('update value from controller');
    })
  })

  it('update input field and check model test value', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#modelId');
      element.value = 'updated input value';
      element.dispatchEvent(new Event('input'));
      expect(element.value).toEqual(componentInstance.modelTest);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const paraElement: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#paraModelId');
        expect(paraElement.innerHTML).toEqual('updated input value');
        expect(paraElement.innerHTML).toEqual(componentInstance.modelTest);
      })
    })
  })

  it('check the values of get model method', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#modelId')
      element.value = 'updated value';
      element.dispatchEvent(new Event('input'));
      expect(componentInstance.modelTest).toEqual('updated value');
      expect(componentInstance.getModelValue()).toEqual('updated value');
    })
  })

  it('update the input field and model test by click event', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const btnElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#setValue');
      btnElement.click();
      expect(componentInstance.modelTest).toEqual('Updated the model value');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#modelId');
        expect(element.value).toEqual('Updated the model value');
        expect(componentInstance.getModelValue()).toEqual('Updated the model value');
      })
    })
  })
});
