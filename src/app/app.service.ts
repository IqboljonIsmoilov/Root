import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

import {HttpClient} from "@angular/common/http";
import {TaskDTO} from "./dto/taskDTO";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {

  }

  public getTaskJson(): Observable<Array<TaskDTO>> {
    return this.http.get<Array<TaskDTO>>('assets/taslk-list.json');
  }
}
