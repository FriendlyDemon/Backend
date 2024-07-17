import {SaborPizza} from "./sabor"
import {TamanhoPizza} from "./tamanho"
import {Pizza} from "./pizza"
let portuguesa:Pizza=new Pizza(SaborPizza.portuguesa,TamanhoPizza.m,50)
console.log(portuguesa.pizza())