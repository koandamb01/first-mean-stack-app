import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks: string[];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    let initObserve = this._httpService.getTasks();
    initObserve.subscribe(response => {
      this.tasks = response['data'];
    });
  }
}





// this._httpService.getTasks();
    // this._httpService.getTasks() can also be call here
    // this._httpService.getTask('5b9acd5eac805216956bf094');
    // this._httpService.postTask();
    // this._httpService.putTask('5b9acd5eac805216956bf094');
    // this._httpService.deleteTask('5b9acd5eac805216956bf094');