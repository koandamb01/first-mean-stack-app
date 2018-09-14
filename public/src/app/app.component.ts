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
    newTask: any;
    updateTask: any;
    message: string;
    EditShow = false;
    DetailShow = false;
    show = false;
    taskDetail: any;
    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        let initObserve = this._httpService.getTasks();
        initObserve.subscribe(response => {
            this.tasks = response['data'];
            this.message = '';
        });

        this.newTask = {
            'title': '',
            'description': '',
            'completed': false
        }
    }

    onSubmit() {
        let observe = this._httpService.postTask(this.newTask);
        observe.subscribe(response => {
            console.log(response);
            this.message = response['message'];
            this.ngOnInit()
        });
    }

    showForm(task) {
        this.EditShow = true;
        this.show = false;
        this.DetailShow = false;
        this.updateTask = task
    }

    update() {
        let observe = this._httpService.putTask(this.updateTask._id, this.updateTask);
        observe.subscribe(response => {
            this.message = response['message'];
            this.EditShow = false;
            this.ngOnInit()
        });
    }

    delete(task) {
        let observe = this._httpService.deleteTask(task._id);
        observe.subscribe(response => {
            this.ngOnInit()
        });
    }


    TaskDetail(task) {
        this.show = false;
        this.EditShow = false;
        this.DetailShow = true;
        this.taskDetail = task;
    }
}