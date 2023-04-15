import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTaskButtonComponent } from './modify-task-button.component';

describe('ModifyTaskButtonComponent', () => {
  let component: ModifyTaskButtonComponent;
  let fixture: ComponentFixture<ModifyTaskButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyTaskButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyTaskButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
