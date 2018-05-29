import { User } from "../model/user";

export const USER_DATA : User[] =  [{
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Dec 1, 1963"),
    income : 50000,
    company : "Microsoft",
    isWorking : true,
    img : 'assets/images/bill.jpg', 
    vote : 120,
    mobile : 9877654321,
    comments : [{
        stars : 3,
        body : "I like Mr. Gates!",
        author : "test@test.com"
    },{
        stars : 4,
        body : "I Love Mr. Gates!",
        author : "abc@test.com"
    }]
},{
    firstName : "Steve",
    lastName : "Jobs",
    dob : new Date("Dec 11, 1963"),
    income : 0,
    company : "Apple",
    isWorking : false,
    img : 'assets/images/steve.png', 
    vote : 180,
    mobile : 9877654321,
    comments : [{
        stars : 3,
        body : "I like Mr. Steve!",
        author : "test@test.com"
    },{
        stars : 4,
        body : "I Love Mr. Steve!",
        author : "abc@test.com"
    }]
},{
    firstName : "Tim B.",
    lastName : "Lee",
    dob : new Date("Aug 13, 1963"),
    income : 40000,
    company : "World Wide Web",
    isWorking : true,
    img : 'assets/images/tim.jpg', 
    vote : 150,
    comments : [{
        stars : 3,
        body : "I like Mr. Tim!",
        author : "test@test.com"
    },{
        stars : 4,
        body : "I Love Mr. Tim!",
        author : "abc@test.com"
    }]
}]