import {Animal} from "./Animal"
export class Dog extends Animal{
    breed:string
    constructor(name:string,weight:number,breed:string){
        super(name,weight)
        this.breed=breed
    }
    bark():void {
        console.log("auau")
    }
}
