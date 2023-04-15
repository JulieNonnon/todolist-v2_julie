import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-add-task',
  templateUrl: './todo-add-task.component.html',
  styleUrls: ['./todo-add-task.component.css']
})
export class TodoAddTaskComponent {

  text: string = '';
// ajouter dans input #newItem: (keyup.enter)="addItem(newItem.value); newItem.value = ''"


}
