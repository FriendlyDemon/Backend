import {metodosDePagamento} from "./metodosDePagamento"
import {carrinhoC,carrinhoN, verCarrinho} from "./index"
import * as rd from 'readline-sync'
let total:number
for(let i=0,t=0;i<=carrinhoN.length;i++){
    if (i!=carrinhoN.length){
        t += carrinhoC[i]*carrinhoN[i]
    }
    else {let total= t}
}
verCarrinho
export class Cartao implements metodosDePagamento{
    nome: string;
    pagar() {
        rd.keyInYN(`O seu total é R$${total} gostaria de pagar com ${this.nome}? `)
    }
}