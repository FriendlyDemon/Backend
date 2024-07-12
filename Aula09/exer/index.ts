import { Frutas } from "./frutas";
import { Livros } from "./livros";
import { Eletronico } from "./eletronico";
import * as rd from 'readline-sync'
let open=true
let carrinho=new Array
function addToCart(produto:string,quantidade:number){
    if(carrinho.includes(produto)){
        quantidade += carrinho[produto].num
    } else {
        carrinho.push[produto]={name:eval(`${produto}`).nome,num:quantidade}
    }
}

function comprarProduto(){}
function verCarrinho(){}
function pagar(){}
let func=[comprarProduto(),verCarrinho(),pagar()]
const bananaCaturra:Frutas=new Frutas("banana",1.5,"Banana Caturra",100,7)
const fahrenheit451:Livros=new Livros("romance/scifi",20,"Fahrenheit 451",1000,"Ray Bradbury")
const nokia1220:Eletronico=new Eletronico("celular",200,"Nokia 1220",150,"Nokia")
let estoque={"Banana Caturra":20,"Fahrenheit 451":10,"Nokia 1220":5}
export {carrinho}
while (open==true){
    let op1=rd.keyInSelect(func, "O que voce gostaria de fazer? ")
    let op2=func[op1]
}
