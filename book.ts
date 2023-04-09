export class Book {
    id: string;
    name: string;
    constructor(id:string,name:string) {
        this.id = id
        this.name = name
    }
    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    setId(id:string){
        this.id = id
    }
    setName(name:string){
        this.name = name
    }
}

