export enum Job {
    staff = 1 ,
    manager,
    president,
    chairperson
}

export class Person {
    id : number
    firstName : string;
    lastName : string;
    birthday : string;
    address : string;
    job : Job;
    constructor(id:number,firstName:string,lastName:string,birthday:string,address:string,job:Job) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.birthday = birthday
        this.address = address
        this.job = job
    }





}