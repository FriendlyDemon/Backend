import {filho} from "./filho"
export class neto extends filho{
    fome:boolean
    constructor(nome:string,idade:number,escola:string,fome:boolean){
        super(nome,idade,escola)
        this.fome=fome
    }
    comer(){
        if(this.fome){
        console.log(this.nome,"está com fome")
        } else {console.log(this.nome,"está cheio")}
    }
}