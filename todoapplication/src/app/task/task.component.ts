import { Component,OnInit,Input} from '@angular/core';
import { Headers, Http,Response,RequestOptions } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

public form: FormGroup;
public errorMessage: string;
public flag: boolean;
public title: string;

  constructor(fb: FormBuilder,private ts: TodoService) {
         this.form = fb.group({
            'tittle': new FormControl("", Validators.required),
            'description': new FormControl("", Validators.required)
        });
    }
  ngOnInit() {
    this.flag =false;
  }
  onSubmit() {
    this.form.addControl("status", new FormControl('Pending'));
    this.ts.saveTask(this.form.value);
    this.form.reset();
    this.flag =true;
    }
}
