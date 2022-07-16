import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskDTO} from "../dto/taskDTO";

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  @Output() public addTaskEvent = new EventEmitter<TaskDTO>();
  @Output() public updateTaskEvent = new EventEmitter<TaskDTO>();

  public taskDTO = new TaskDTO();

  constructor() {
  }

  ngOnInit(): void {
  }

  createTask() {
    if (this.taskDTO.title.length < 2 || this.taskDTO.content.length < 2) {
      alert("Mazgi fill all the inputs")
      return;
    }
    this.addTaskEvent.emit(this.taskDTO);
    this.taskDTO = new TaskDTO();
  }

  updateTask() {
    this.updateTaskEvent.emit(this.taskDTO);
    this.taskDTO = new TaskDTO();
  }

  cancel() {
    this.taskDTO = new TaskDTO();
  }

  selectTask(task: TaskDTO) {
    this.taskDTO.id = task.id;
    this.taskDTO.title = task.title;
    this.taskDTO.content = task.content;
    this.taskDTO.status = task.status;
  }
}
