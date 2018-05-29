import { Comment } from './comment';

export interface User {
    firstName : string;
    lastName : string;
    dob : Date;
    income : number;
    company : string;
    isWorking : boolean;
    img : string; 
    vote : number;
    address? : string;
    mobile? : number;
    comments : Comment[];
}