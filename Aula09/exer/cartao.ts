import {metodosDePagamento} from "./metodosDePagamento"
import {carrinho} from "./index"
import * as rd from 'readline-sync'
export class Cartao implements metodosDePagamento{
    nome: string;
    pagar() {
        rd.keyInYN("O seu total é R$",carrinho,", gostaria de pagar com",this.nome+"?")
    }
}
