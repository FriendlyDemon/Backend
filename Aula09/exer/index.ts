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
        carrinho.push[produto]={name:produto,num:quantidade}
    }
}

const bananaCaturra:Frutas=new Frutas("banana",1.5,"Banana Caturra",100,7)
const fahrenheit451:Livros=new Livros("romance/scifi",20,"Fahrenheit 451",1000,"Ray Bradbury")
const nokia1220:Eletronico=new Eletronico("celular",200,"1220",150,"Nokia")
let estoque={"banana caturra":20,"fahrenheit451":10,"nokia1220":5}