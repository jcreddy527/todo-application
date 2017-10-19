import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-taskupdate',
  templateUrl: './taskupdate.component.html',
  styleUrls: ['./taskupdate.component.css']
})
export class TaskupdateComponent implements OnInit {

  public tasklist =[];
   public type ='Pending';
  constructor(private ts: TodoService) { }

  ngOnInit() {
    this.ts.getAllTasks().subscribe(jsondata => {
            this.tasklist=jsondata 
    })
  }

utask(task:any) {
  task.status = this.type;
  console.log(task);
    this.ts.updateTask(task);
  }

  dtask(id:any) {
    this.ts.deleteTask(id);
  }

  statustype(event:any){
    console.log(event.target.value)
    this.type = event.target.value;
  }
}
