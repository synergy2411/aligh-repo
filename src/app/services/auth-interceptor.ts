import { Injectable } from "@angular/core";
import { HttpInterceptor, 
    HttpRequest, 
    HttpHandler, 
    HttpEvent} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>>{
        console.log("Intercepted", req);
        return next.handle(req);
    }
}