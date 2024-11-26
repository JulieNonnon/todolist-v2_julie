import { Component } from '@angular/core';
import { TaskManagementService } from 'src/app/services/task-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list-tasks',
  templateUrl: './todo-list-tasks.component.html',
  styleUrls: ['./todo-list-tasks.component.css']
})
export class TodoListTasksComponent {


  // Tableau todo / liste de tâche vide
  todoListArray: any [] = []

  constructor(
    public taskManagementService: TaskManagementService,
    public router: Router
  ) {}

  //conserver les données si actualisation
  getTaskList() {
    this.todoListArray = this.taskManagementService.getTask()
  }

  ngOnInit() {
    this.todoListArray = this.taskManagementService.getTask();
  }
  
  // Pour réutiliser dans le template, remplaçons `taskManagementService.getTask()` par `todoListArray` :
  displayUrgentTask(): boolean {
    return this.todoListArray.some(task => task.isUrgent);
  }
  
  displayOtherTask(): boolean {
    return this.todoListArray.some(task => !task.isUrgent);
  }

  markAsCompleted(taskId: number): void {
    this.taskManagementService.completeTask(taskId); //Déplace la tâche dans l'historique
    this.todoListArray = this.taskManagementService.getTask(); // Actualise la liste des tâches
    console.log(taskId);
  }
  

    //Méthode pour modifier une tâche
    modifyTask(taskId: number) {
      this.router.navigate(['/todo-add-task'], {queryParams: { id: taskId }});
    }


}
