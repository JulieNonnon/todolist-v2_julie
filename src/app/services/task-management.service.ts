import { Injectable } from '@angular/core';


// SERVICE GESTION DES TACHES

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {

  constructor() { }

// Tableau todo / liste de tâche vide
todoListArray: any [] = []


// CREATETASK(): Création nouvelle liste de tâches (vide au lancement) -> dans le Local Storage

private createTask() {
  const newTask =  JSON.stringify([]);
  localStorage.setItem('tâche crée : ', newTask)
}

// GETTASK(): Récupération de la liste de tâches enregistrées en local

  public getTask(){
    const task = localStorage.getItem("task");
    if(task) {
      return JSON.parse(task);
    } else {
      // création nouvelle liste de tâche si aucune n'existe
      this.createTask(); 
      this.getTask(); 
    }      
  }



// SAVETASK(): Sauvegarde de la liste de tâches dans le Local Storage

  private saveTask(savedTask: { id: any; content: any; category: string; isUrgent: boolean}) {
    localStorage.setItem('tâche sauvegardée : ', JSON.stringify(savedTask));
  }

// ADDTASK(): Ajoute tâche à la liste

  public addTask(addedTask: { id: any; content: any; category: string; isUrgent: boolean}) {
    // récupérer la liste des tâches du Local Storage:
    const task = this.getTask();
    // ajout de la nouvelle tâche en début de liste avec unshift
    task.unshift(addedTask);
    // ajout de cette nouvelle tâche dans le Local Storage
    localStorage.setItem('nouvelle tâche: ', JSON.stringify(task));
    // màj de la nouvelle liste de tâche
    this.saveTask(task);
  }



}