import { metodosDePagamento } from "./metodosDePagamento"
import {carrinhoP, carrinhoC,carrinhoN} from "./index"
import * as rd from 'readline-sync'

export class Cartao implements metodosDePagamento {
    nome: string;
    constructor(name:string){
        this.nome=name
    }
    pagar() {
        rd.keyInYN(`Insira o cartao`)
        carrinhoP.length=0,carrinhoC.length=0,carrinhoN.length=0
    }
}