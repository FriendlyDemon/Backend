import {metodosDePagamento} from "./metodosDePagamento"
import {carrinho} from "./index"
export class Cartao implements metodosDePagamento{
    nome: string;
    pagar() {
        console.log("O seu total é R$",carrinho["total"],", gostaria de pagar")
    }
}
