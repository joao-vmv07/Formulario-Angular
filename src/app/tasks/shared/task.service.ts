import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root' //Criar instancia na raiz Angular
})
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'Tarefa 1', completed: false },
    { id: 2, description: 'Tarefa 2', completed: true },
    { id: 1, description: 'Tarefa 3', completed: false },
    { id: 2, description: 'Tarefa 4', completed: true }
  ];
  constructor() { }

  getAll() {
    return this.tasks;
  }

  getById(id: number): Task {
    const task = this.tasks.find((task) => task.id == id);
    return task || new Task(0, "Default", true);
  }

  save(task: Task) {
    if (task.id) {
      this.editTask(task);
    } else {
      this.createTask(task);
      this.tasks.push(task);
    }
  }

  delete(id: number) {
    const taskIndex = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(taskIndex, 1);
  }

  private createTask(task: Task) {
    const lastId = this.tasks[this.tasks.length - 1].id;
    task.id = lastId + 1;
    task.completed = false;
  }

  private editTask(task: Task) {
    const TaskArr = this.getById(task.id);
    TaskArr.description = task.description;
    TaskArr.completed = task.completed;
  }
}
