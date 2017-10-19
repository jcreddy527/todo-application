import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'
@Injectable()
export class TodoService {

  httpUrl ='http://localhost:8080/todoapplication/todo/';
  constructor(private _http: Http) { }

   getAllTasks(): Observable<any[]> {
       return this._http.
            get(this.httpUrl +"/tasks").
            map((response: Response) =>
                <any[]>response.json()
            ).
            catch(this.handleError)
    }

     saveTask(body : any){                       
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method : 'POST'});
        this._http.post(this.httpUrl+'create', JSON.stringify(body), options)
        .map(res => console.log(res.json))
        .subscribe((res) => console.log("Done")); 
    }
    updateTask(body : any){                       
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method : 'PUT'});
        this._http.put(this.httpUrl+'update', JSON.stringify(body), options)
        .map(res => console.log(res.json))
        .subscribe((res) => console.log("Done")); 
    }
    deleteTask(id : any){                       
        
        this._http.delete(this.httpUrl+'delete/'+id)
        .map(res => console.log(res.json))
        .subscribe((res) => console.log("Done")); 
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server Error')
    }

 private extractData(res: Response) {
        let body = res.json()
        return body.fields || {}
    }


}
