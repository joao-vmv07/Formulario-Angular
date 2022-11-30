import { isPlatformWorkerApp } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent implements OnInit {
  @Input() //Atributo do meu componente
  task!: Task;

  constructor(private taskService: TaskService, private rota: Router) { }
  ngOnInit(): void {

  }
  remove(task: Task) {
    this.taskService.delete(task.id);
  }

  onCompletedCheckChange(task: Task) {
    this.taskService.save(task);
  }

  mudarRota(taskId: number) {
    this.rota.navigate(['/edit', taskId])
  }
}
