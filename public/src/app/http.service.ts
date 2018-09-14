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

  postTask() {
    let body = {
      "title": "Angular first Restful API post",
      "description": "This shit is lit!",
      "completed": false,
    }

    return this._http.post('/task', body);
  }

  putTask(id) {
    let updateBody = {
      "title": "Angular first Upates",
      "description": "This shit is working!",
      "completed": true,
    }

    return this._http.put('/task/' + id, updateBody);
  }

  deleteTask(id) {
    return this._http.delete('/task/' + id)
  }
}
