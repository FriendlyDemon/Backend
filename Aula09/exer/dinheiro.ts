import { metodosDePagamento } from "./metodosDePagamento"
import {carrinhoP, carrinhoC,carrinhoN} from "./index"
import * as rd from 'readline-sync'

export class Dinheiro implements metodosDePagamento {
    nome: string;
    constructor(name:string){
        this.nome=name
    }
    pagar() {
        rd.keyInYN(`Pague o caixa`)
        carrinhoP.length=0,carrinhoC.length=0,carrinhoN.length=0
    }
}