import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskManagementService } from 'src/app/services/task-management.service';

@Component({
  selector: 'app-todo-add-task',
  templateUrl: './todo-add-task.component.html',
  styleUrls: ['./todo-add-task.component.css']
})
export class TodoAddTaskComponent {

  // Tableau todo / liste de tâche vide
  todoListArray: any [] = []
  
  //Déclaration du formulaire taskForm
  taskForm!: FormGroup;

  //ngModel
  pickCategory!: string;

  constructor(  
    public taskManagementService: TaskManagementService,
    private formBuilder: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    //initialisation de tous les formControlName de notre formulaire taskForm
    this.taskForm = this.formBuilder.group({
      categoryForm: [null],
      todoForm:[null],
      urgentForm: [false] //par défault
   });
    console.log(this.todoListArray)

    // vérification si un paramètre id est présent pour permettre la modification
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.currentTaskId = +params['id'];
  
        // Récupération de la tâche à modifier
        const taskToEdit = this.taskManagementService.getTaskById(this.currentTaskId);
        if (taskToEdit) {
          this.taskForm.patchValue({
            categoryForm: taskToEdit.category,
            todoForm: taskToEdit.content,
            urgentForm: taskToEdit.isUrgent
          });
          this.pickCategory = taskToEdit.category; // Synchroniser ngModel pour les catégories
        }
      }
    });
  }

  // Méthode pour création nouvelle tâche:
  addNewTask() {
    const formValue = this.taskForm.value;
    console.log(formValue)

    // Elements récupérés pour création de la tâche dans mon tableau
    const taskDetail = {
      id: Date.now(), // ID unique basé sur la timestamp
      category: formValue.categoryForm,
      content: formValue.todoForm,
      isUrgent: formValue.urgentForm || false
    }

    // ajout de la tâche dans le local Storage via mon service taskManagement
    this.taskManagementService.addTask(taskDetail);
    console.log(this.todoListArray)

    // redirection vers page d'accueil
    this.router.navigate(['/'])
  }

  isEditMode = false; // Permet de savoir si on modifie une tâche
  currentTaskId: number | null = null; // Stocke l'ID de la tâche en cours de modification

  updateTask() {
    if (this.currentTaskId !== null) {
      const updatedTask = {
        id: this.currentTaskId,
        category: this.taskForm.value.categoryForm,
        content: this.taskForm.value.todoForm,
        isUrgent: this.taskForm.value.urgentForm
      };
  
      this.taskManagementService.updateTask(updatedTask);
      this.router.navigate(['/']);
    }
  }
  

}
