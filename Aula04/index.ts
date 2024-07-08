import * as rd from 'readline-sync'

let nome:string=rd.question("what is the person's name? ")
let idade:number=rd.question("what is the person's age? ")
let carteira:boolean=rd.keyInYN("does this person have a licence? ")

function dirigir(x1:string,x2:number,x3:boolean):any{

    if ((x2>=18) && x3){
        console.log(x1,"can drive")
    } else {
        console.log(x1,"can't drive")
}}
dirigir(nome,idade,carteira)