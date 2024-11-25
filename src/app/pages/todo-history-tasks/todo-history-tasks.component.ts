import { Component, OnInit } from '@angular/core';
import { TaskManagementService } from 'src/app/services/task-management.service';

@Component({
  selector: 'app-todo-history-tasks',
  templateUrl: './todo-history-tasks.component.html',
  styleUrls: ['./todo-history-tasks.component.css']
})
export class TodoHistoryTasksComponent implements OnInit{

  historyList: any[] = [];

  constructor(private taskManagementService: TaskManagementService) {}

  ngOnInit(): void {
    this.getHistoryList();
  }

  // récupérer les tâches terminées
  getHistoryList(): void {
    this.historyList = this.taskManagementService.getHistory();
  }

  // Vérifier si existence de tâches terminées
  hasCompletedTasks(): boolean {
    return this.historyList.length > 0;
  }

  // Invalider une tâche terminée et la remettre sur la page accueil
  cancelCompleted(taskId: number): void {
    this.taskManagementService.cancelTask(taskId); // récupère la tâche la tâche annulée
    this.getHistoryList(); // actualise la liste des tâches terminées
  }

}
