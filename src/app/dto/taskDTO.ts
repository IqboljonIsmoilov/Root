export class TaskDTO {
  public id: number = 0;
  public title: string;
  public content: string;
  public status = false;


  constructor() {
    this.title = '';
    this.content = '';
  }
}
