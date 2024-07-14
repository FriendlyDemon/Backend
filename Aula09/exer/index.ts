import { Frutas } from "./frutas";
import { Livros } from "./livros";
import { Eletronico } from "./eletronico";
import { Cartao } from "./cartao";
import * as rd from 'readline-sync'
let open = true
let carrinho:Array<number> = []

function info(produto: number) {
    let info1 = estoque[produto][0]["nome"]
    let info2 = estoque[produto][0]["preco"]
    return `${info1}  R$${info2}`
}
function estoqueLista() {
    for (let i = 0, a = new Array; i <= estoque.length; i++) {
        if (i != estoque.length) { a.push(info(i)) } else { return a }
    }
}
function addCarrinho(produto: number, quantidade: number) {
    if (carrinho.includes(estoque[produto][0]["nome"])) {
        quantidade += carrinho[estoque[produto][0]["nome"]]
    } else {
        carrinho.push(estoque[produto][0]["nome"] = quantidade)
    }
}
function comprar() {
    let produto = rd.keyInSelect(estoqueLista(), "O que voce gostaria de comprar? "),
        quantidade = rd.questionInt(`Temos ${estoque[produto][1]} em estoque, quantos voce gostaria de comprar? `)
    if (quantidade > estoque[produto][1]) { console.log("Erro. Não pode comprar mais do que temos em estoque.") } else {
        addCarrinho(produto, quantidade)
    }
}

function verCarrinho() { }
function menu() { }
const bananaCaturra: Frutas = new Frutas("banana", 1.5, "Banana Caturra", 100, 7)
const fahrenheit451: Livros = new Livros("romance/scifi", 20, "Fahrenheit 451", 1000, "Ray Bradbury")
const nokia1220: Eletronico = new Eletronico("celular", 200, "Nokia 1220", 150, "Nokia")
let estoque = [[bananaCaturra, 20], [fahrenheit451, 10], [nokia1220, 5]]



while (open == true) {
    if (carrinho == undefined) {
        comprar()
    } else {
        menu()
    }
}
export { carrinho }