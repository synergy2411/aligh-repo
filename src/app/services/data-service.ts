import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';

@Injectable()
export class DataService{
    counter : number = 0;
    getUserData(){
        
        return USER_DATA;
    }
}