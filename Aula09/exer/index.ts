import { Frutas } from "./frutas";
import { Livros } from "./livros";
import { Eletronico } from "./eletronico";
import { Cartao } from "./cartao";
import * as rd from 'readline-sync'
let open = true
let carrinhoP:Array<string> = []
let carrinhoC:Array<number> = []
let carrinhoN:Array<number> = []

function info(produto: number) {
    let info1 = estoque[produto][0]["nome"]
    let info2 = estoque[produto][0]["preco"]
    return `${info1}  R$${info2}`
}
function estoqueLista() {
    for (let i:number = 0, a = new Array; i <= estoque.length; i++) {
        if (i != estoque.length) { a.push(info(i)) } else { return a }
    }
}
function estoqueQuantia(produto:string,quantidade:number) {
    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i][0]["nome"] == produto) { estoque[i][1] -= quantidade}
    }
}
function addCarrinho(produto: string, quantidade: number,preco:number) {
    if (carrinhoP.includes(produto)) {
        let indexCarrinho = carrinhoP.indexOf(produto)
        carrinhoN[indexCarrinho] += quantidade
        estoqueQuantia(produto,quantidade)
    } else {
        carrinhoP.push(produto)
        carrinhoC.push(preco)
        carrinhoN.push(quantidade)
        estoqueQuantia(produto,quantidade)

    }
}
function comprar() {
    let produto = rd.keyInSelect(estoqueLista(), "O que voce gostaria de comprar?   "),
        quantidade = Number(rd.questionInt(`Temos ${estoque[produto][1]} em estoque, quantos voce gostaria de comprar? `))
        ,preco=estoque[produto][0]["preco"]
    if (quantidade > Number(estoque[produto][1])) { console.log("Erro. Não pode comprar mais do que temos em estoque.") } else {
        addCarrinho(estoque[produto][0]["nome"], quantidade,preco)
    }
}

function verCarrinho() {

    for(let i=0,total=0;i<=carrinhoP.length;i++){
        if (i!=carrinhoP.length){
            total += carrinhoC[i]*carrinhoN[i]
            console.log(`${carrinhoP[i]}, R$${carrinhoC[i]} x ${carrinhoN[i]} = ${carrinhoC[i]*carrinhoN[i]}`)
        }
        else {console.log("Total="+total)}
    }
}
function menu() {
    let select=Number(rd.keyInSelect(menuA,"O que voce gostaria de fazer? "))
    if (select>=0){
    eval(menuB[select])()
    } else {open=false}
}
let menuA=["Comprar","Ver Carrinho","Pagar"]
let menuB=["comprar","verCarrinho","pagar"]
const bananaCaturra: Frutas = new Frutas("banana", 1.5, "Banana Caturra", 100, 7)
const fahrenheit451: Livros = new Livros("romance/scifi", 20, "Fahrenheit 451", 1000, "Ray Bradbury")
const nokia1220: Eletronico = new Eletronico("celular", 200, "Nokia 1220", 150, "Nokia")
let estoque:Array<object|number> = [[bananaCaturra, 20], [fahrenheit451, 10], [nokia1220, 5]]

while (open == true) {
    if (carrinhoP == undefined) {
        comprar()
    } else {
        menu()
    }
}
export { carrinhoP, carrinhoC, carrinhoN , verCarrinho}