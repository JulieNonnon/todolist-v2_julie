// import { Injectable } from '@angular/core';


// // SERVICE GESTION DES TACHES

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskManagementService {

//   constructor() { }

// // Tableau todo / liste de tâche vide
// todoListArray: any [] = []


// // CREATETASK(): Création nouvelle liste de tâches (vide au lancement) -> dans le Local Storage

// private createTask() {
//   const newTask =  JSON.stringify([]);
//   localStorage.setItem('tâche crée : ', newTask)
// }

// // SAVETODOLIST(): Sauvegarde de la liste de todos 
// saveTodoList(todoListArray: any []) {
//   localStorage.setItem('todoList', JSON.stringify(todoListArray));
// }

// // GETTASK(): Récupération de la liste de tâches enregistrées en local

//   getTask(){
//     const task = localStorage.getItem("task");
//     if(task) {
//       return JSON.parse(task);
//     } else {
//       // création nouvelle liste de tâche si aucune n'existe
//       this.createTask(); 
//       this.getTask(); 
//     }      
//   }


// // ADDTASK(): Ajoute tâche à la liste

//   addTask(addedTask: { id: any; content: any; category: string; isUrgent: boolean}) {
//     // récupérer la liste des tâches du Local Storage:
//     const task = this.getTask();
//     // ajout de la nouvelle tâche en début de liste avec unshift
//     task.unshift(addedTask);
//     // ajout de cette nouvelle tâche dans le Local Storage
//     this.saveTodoList(task);
//   }

// //GETHISTORYTASK : Récupération de l'historique des tâches


// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {

  constructor() { }

  // Tableau de tâches (localStorage key: "todoList")
  private readonly STORAGE_KEY = 'todoList';

  // Initialise une liste vide dans le localStorage si aucune n'existe
  private createTask() {
    const initialTasks = JSON.stringify([]);
    localStorage.setItem(this.STORAGE_KEY, initialTasks);
  }

  // Sauvegarde la liste des tâches
  private saveTodoList(todoListArray: any[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todoListArray));
  }

  // Récupère la liste des tâches depuis le localStorage
  getTask(): any[] {
    const task = localStorage.getItem(this.STORAGE_KEY);
    if (task) {
      return JSON.parse(task);
    } else {
      this.createTask();
      return [];
    }
  }

  // Ajoute une nouvelle tâche
  addTask(newTask: { id: number; content: string; category: string; isUrgent: boolean }) {
    const tasks = this.getTask();
    tasks.unshift(newTask);
    this.saveTodoList(tasks);
  }

  // next step : Déplacer les tâches terminées dans l'historique


}
