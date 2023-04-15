import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoHistoryTasksComponent } from './todo-history-tasks.component';

describe('TodoHistoryTasksComponent', () => {
  let component: TodoHistoryTasksComponent;
  let fixture: ComponentFixture<TodoHistoryTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoHistoryTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoHistoryTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
