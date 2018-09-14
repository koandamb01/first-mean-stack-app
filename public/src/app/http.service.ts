import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getTasks() {
    return this._http.get('/tasks');
  }

  getTask(id) {
    return this._http.get('/task/' + id);
  }

  postTask(newTask) {
    return this._http.post('/task', newTask);
  }

  putTask(id, updateTask) {
    return this._http.put('/task/' + id, updateTask);
  }

  deleteTask(id) {
    return this._http.delete('/task/' + id)
  }
}
