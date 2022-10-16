import { Injectable } from  '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable()
export class LogInterceptor implements HttpInterceptor{

  public  timeStart: number = 0;
  public timeStop: number = 0;
  public diff: number = 0;
    intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
        this.timeStart = new Date().getTime();
       
        console.log(req.urlWithParams);
        return next.handle(req).pipe(tap((response)=>{
            if(response instanceof HttpResponse){
                this.timeStop = new Date().getTime();
                this.diff =  this.timeStop - this.timeStart;
                console.log("duree de la requete : " + this.diff + " ms");
     
                
            }
        }));
    }
}