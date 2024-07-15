import { metodosDePagamento } from "./metodosDePagamento"
import {carrinhoP, carrinhoC,carrinhoN} from "./index"
import * as rd from 'readline-sync'

export class Pix implements metodosDePagamento {
    nome: string;
    constructor(name:string){
        this.nome=name
    }
    pagar() {
        rd.keyInYN(`chave pix : tabajara@gmail.com`)
        carrinhoP.length=0,carrinhoC.length=0,carrinhoN.length=0
    }
}