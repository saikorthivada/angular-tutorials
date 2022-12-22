import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildModularComponent } from './child-modular.component';

describe('ChildModularComponent', () => {
  let component: ChildModularComponent;
  let fixture: ComponentFixture<ChildModularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildModularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildModularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
