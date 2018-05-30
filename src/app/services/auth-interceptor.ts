import { Injectable } from "@angular/core";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { HttpInterceptor, 
    HttpRequest, 
    HttpHandler, 
    HttpEvent,
    HttpHeaders,
    HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { AuthService } from "./auth-service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private authService : AuthService){}
    intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>>{
        console.log("Intercepted", req);
        const clonedReq = req.clone({
            params : new HttpParams().set("auth", this.authService.getToken() )
        })
        return next.handle(clonedReq)
            .do(response=>{
                console.log(response);
                return response;
            }).map(data=> {
                
                return data;
            });
                
    }
}