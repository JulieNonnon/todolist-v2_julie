import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListTasksComponent } from './todo-list-tasks.component';

describe('TodoListTasksComponent', () => {
  let component: TodoListTasksComponent;
  let fixture: ComponentFixture<TodoListTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
