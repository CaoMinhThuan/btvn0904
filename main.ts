import {Person,Job} from "./user";
class PersonManager{
    persons : Person[] = []
    constructor() {
    }
    getList(){
        return this.persons
    }
    addPerson(ps:Person){
        this.persons.push(ps)
    }
    findPerson(id:number){
        let index :number = -1
        for (let i = 0; i < this.persons.length; i++) {
            if(this.persons[i].id === id){
                index = i
            }

        } if (index === -1){
            console.log('nhan vien nay khong thuoc cong ty')
        } return index
    }
    showPerson(id:number){
        let index = this.findPerson(id)
        if(this.persons[index].id === id){
            console.log(this.persons[index])

        }
        console.log('nhan vien nay khong thuoc cong ty')
    }
    deletePerson(id:number){
        let index = this.findPerson(id)
        if (this.persons[index].id === id){
            this.persons.splice(index,1)
        }
        console.log('nhan vien khong thuoc cong ty')
    }
    updatePerson(id:number,firstName:string,lastName:string,address:string){
        let index = this.findPerson(id)
        if(this.persons[index].id === id){
            let personc = this.persons[index];
            this.persons[index] = {...personc, address: address, firstName: firstName, lastName:lastName}
        }
        console.log('nhan vien khong thuoc cong ty')
    }

}
let p1 = new Person(1,'cao','camcam','18-12-2023','namdinh',1)
let p2 = new Person(2,'cao','camcam','18-12-2023','namdinh',2)
let p3 = new Person(3,'cao','camcam','18-12-2023','namdinh',3)
let  quanly = new PersonManager()
quanly.addPerson(p1)
quanly.addPerson(p2)
quanly.addPerson(p3)
quanly.updatePerson(1,'cacao','camcamcam','hn')
console.table(quanly.getList())