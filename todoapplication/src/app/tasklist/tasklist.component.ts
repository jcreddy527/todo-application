import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

 public tasklist =[];
  public stype='';
  constructor(private ts: TodoService) { }

  ngOnInit() {
    this.ts.getAllTasks().subscribe(jsondata => {
            this.tasklist=jsondata 
    })
  }
  type(event:any){
    this.stype =event.target.value;
    console.log(this.stype);
  }

}
