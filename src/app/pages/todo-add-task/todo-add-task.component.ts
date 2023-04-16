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
   })
    console.log(this.todoListArray)
  }


  // Méthode pour création nouvelle tâche:

  addNewTask() {
    let newTask = this.taskForm.value;
    console.log(newTask)

    // Elements récupérés pour création de la tâche dans mon tableau
    let taskDetail = {
      id: this.todoListArray.length + 1,
      category: this.pickCategory,
      content: newTask.todoForm,
      isUrgent: newTask.urgent
    }

    // ajout de la tâche dans mon tableau
    this.todoListArray.unshift(taskDetail);
    console.log(this.todoListArray)
    // ajout de la tâche dans le local Storage via mon service taskManagement
    this.taskManagementService.addTask(taskDetail);

    this.router.navigate(['/'])
}
}