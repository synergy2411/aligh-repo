import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { User } from '../model/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class DataService{
    counter : number = 0;
    constructor(private http : Http,
                private httpClient : HttpClient){}
    getUserData(){
       return this.http.get("assets/data/user-data.json")
            .map((response)=>{
                console.log(response);
                return response.json().userdata;
            })
     //   return USER_DATA;
    }
    getApiData(){
        this.httpClient.get<User[]>("https://ng-app-dedd9.firebaseio.com/userdata.json")
        .subscribe(
            data=>console.log(data), 
            (err)=>console.log(err));
    }
}