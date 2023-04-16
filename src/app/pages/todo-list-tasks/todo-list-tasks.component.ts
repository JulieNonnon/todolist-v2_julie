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
    this.getTaskList()
  }

  //Méthodes filtrage des tâches si urgence ou non:
  // some() permet de vérifier s'il existe au moins une tâche urgente (ou non) dans le tableau de tâches

    //Méthode pour affichage tâche urgente
    displayUrgentTask(): boolean {
      return this.taskManagementService.getTask().some((item: { isUrgent: any; }) => item.isUrgent);
    }

    //Méthode pour affichage autre tâche
    displayOtherTask(): boolean {
      return this.taskManagementService.getTask().some((item: { isUrgent: any; }) => !item.isUrgent);
    }

    //Méthode pour modifier une tâche
    modifyTask() {
      this.router.navigate(['/todo-add-task'])
    }


}
