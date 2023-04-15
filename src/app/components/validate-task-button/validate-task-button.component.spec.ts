import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateTaskButtonComponent } from './validate-task-button.component';

describe('ValidateTaskButtonComponent', () => {
  let component: ValidateTaskButtonComponent;
  let fixture: ComponentFixture<ValidateTaskButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateTaskButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateTaskButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
