import {Animal} from "./Animal"
export class Cat extends Animal{
    color:string
    constructor(name:string,weight:number,color){
        super(name,weight)
        this.color=color
    }
    pur():void {
        console.log("PrRrRrRrRrRrR")
    }
}
