import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TimeService {
 



  constructor(public http: HttpClient) {

  }

  getData():void {

    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((data: any) => {
        console.log(data)
      })
  }
}
