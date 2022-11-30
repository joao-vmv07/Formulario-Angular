import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  task: Task = new Task(0, "Digite a descrição.", true);
  title: string = 'Nova tarefa';

  constructor(private acitivateRoute: ActivatedRoute, private router: Router, private taskService: TaskService) {

  }
  ngOnInit(): void {
    const id = this.acitivateRoute.snapshot.paramMap.get('id');
    if (id) {
      this.task = this.taskService.getById(parseInt(id));
      this.title = 'Alterando Tarefa';
    }
  }
  onSubmit() {
    this.taskService.save(this.task);
    this.router.navigate(['']);
  }
}

