import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwoStandaloneComponent } from './child-two-standalone.component';

describe('ChildTwoStandaloneComponent', () => {
  let component: ChildTwoStandaloneComponent;
  let fixture: ComponentFixture<ChildTwoStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChildTwoStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildTwoStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
