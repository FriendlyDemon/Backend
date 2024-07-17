import {SaborPizza} from "./sabor"
import {TamanhoPizza} from "./tamanho"
export class Pizza{
    private sabor:SaborPizza;
    private tamanho:TamanhoPizza;
    private preco:number;
    constructor(sabor:SaborPizza,tamanho:TamanhoPizza,preco:number){
        this.sabor=sabor
        this.tamanho=tamanho
        this.preco=preco
    }
    pizza(){return `Pizza ${this.sabor}, Tamanho ${this.tamanho}, Preço ${this.preco}`}
}