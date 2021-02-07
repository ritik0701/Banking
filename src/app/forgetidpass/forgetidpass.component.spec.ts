import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetidpassComponent } from './forgetidpass.component';

describe('ForgetidpassComponent', () => {
  let component: ForgetidpassComponent;
  let fixture: ComponentFixture<ForgetidpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetidpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetidpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
