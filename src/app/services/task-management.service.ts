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
    localStorage.setItem('task', JSON.stringify(todoListArray));
  }

  // Récupère la liste des tâches actives depuis le localStorage
  getTask(): any[] {
    const task = localStorage.getItem('task');
    if (task) {
      return JSON.parse(task);
    } else {
      this.createTask(); // Crée une liste vide si aucune tâche n'existe
      return [];
    }
  }

  // Ajoute une nouvelle tâche
  addTask(newTask: { id: number; content: string; category: string; isUrgent: boolean }) {
    const tasks = this.getTask();
    tasks.unshift(newTask);
    this.saveTodoList(tasks);
  }

  // Gestion Historique

  // Déplacer les tâches terminées dans l'historique
  private readonly HISTORY_KEY = 'taskHistory'; // ajout d'une clef pour l'historique dans le local storage

  // Ajout d'une tâche à l'historique
  addToHistory(task: any) {
    const history = this.getHistory();
    history.unshift(task);
    localStorage.setItem('task', JSON.stringify(history));
  }

  // Méthode pour récupérer les tâches terminées
  getHistory(): any[] {
    const history = localStorage.getItem('history');
    return history ? JSON.parse(history) : [];
  }

  // Sauvegarder les tâches terminées
  saveHistory(historyList: any[]): void {
    localStorage.setItem('history', JSON.stringify(historyList));
  }

  // Marquer une tâche comme terminée
  completeTask(taskId: number): void {
    const tasks = this.getTask(); // récupère les tâches existantes
    const taskIndex = tasks.findIndex((task) => task.id === taskId); // trouve la tâche à compléter

    if (taskIndex !== -1) {
      //retire la tâche de la liste active
      const [completedTask] = tasks.splice(taskIndex, 1); 
      this.saveTodoList(tasks); // sauvegarde les tâches restantes
      // Ajouter la tâche à l'historique
      const history = this.getHistory();
      history.unshift(completedTask); // tâche la plus récente en haut
      this.saveHistory(history);
      //this.addToHistory(completedTask); // ajout à l'historique
    }
  }

  // Annule une tâche terminée pour la remettre dans la liste des tâches actives
  cancelTask(taskId: number): void {
    const history = this.getHistory();
    const taskIndex = history.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      //retire la tâche de l'historique
      const [canceledTask] = history.splice(taskIndex, 1);
      this.saveHistory(history);
      // Ajouter la tâche à la liste active
      const tasks = this.getTask();
      tasks.unshift(canceledTask); // Ajouter en tête
      this.saveTodoList(tasks);
    }
    
  }

  // Modification d'une tâche :

  // récupère une tâche spécifique par son id
  getTaskById(taskId: number) {
    const taskList = this.getTask();
    return taskList.find(task => task.id === taskId);
  }

  updateTask(updatedTask: any) {
    const taskList = this.getTask();
    const taskIndex = taskList.findIndex(task => task.id === updatedTask.id);
  
    if (taskIndex !== -1) {
      taskList[taskIndex] = updatedTask;
      this.saveTodoList(taskList);
    }
  }
  








}
