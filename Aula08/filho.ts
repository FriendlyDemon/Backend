import {pai} from "./pai"
export class filho extends pai{
    escola:string
    constructor(nome:string,idade:number,escola:string){
        super(nome,idade)
        this.escola=escola
    }
    estudar(){
        console.log(this.nome,"estuda na escola",this.escola)
    }
}