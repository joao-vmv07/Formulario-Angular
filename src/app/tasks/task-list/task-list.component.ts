import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService){

  }
  ngOnInit(): void { //Este method Exec. na inicialização do Component
      this.tasks = this.taskService.getAll();
  }
}
