import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskDTO } from '../dto/taskDTO';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() public taskDTO: TaskDTO;
  @Output() deleteTaskEvent = new  EventEmitter<TaskDTO>();
  @Output() updateTaskEvent = new  EventEmitter<TaskDTO>();

  constructor() {
    this.taskDTO = new TaskDTO();
  }

  ngOnInit(): void {
  }

  delete(task: TaskDTO) {
  this.deleteTaskEvent.emit(task);
  }

  update(task: TaskDTO) {
    this.updateTaskEvent.emit(task);

  }
}
