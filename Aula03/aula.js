
rd = require('readline-sync')
let l=0
const listaUsuarios=["joao","paulo","cesar","gustavo"],
listaSenhas={joao:"112233",paulo:"000000",cesar:"310675",gustavo:"123456"},
dud=["positivo_ou_negativo","login","calculadora","maior"],
funcs={
positivo_ou_negativo: function(){
    num1 = Number(rd.question("Insira um numero:  "))
    if (num1 >0){
        console.log("O número é positivo.")
    } else if (num1<0){
        console.log("O número é negativo.")
    } else {
        console.log("O número é zero.")
}},
login:function(){
    while (l==0) {
    login=rd.question("Insira seu login: ")

    if (listaUsuarios.includes(login)) {
        let senha=rd.question("Insira sua senha: ")
        if (listaSenhas[login] === senha){
            l=1
            console.log("Olá "+login)
        } else {console.log("senha errada")}
    } else {console.log("login não existe")}
}},
calculadora:function(){
    num31=Number(rd.question("digite o primeiro numero: "))
    op32=rd.question("digite a operacao (+,-,*ou/): ")
    num32=Number(rd.question("digite o segundo numero: "))
    if (op32=="-") {total= num31-num32}
    else if (op32=="+") {total= num31+num32}
    else if (op32=="*") {total= num31*num32}
    else if (op32=="/") {total= num31/num32}
    else {console.log("erro")}
    console.log(total)
},
maior:function(){
    num41=rd.question("digite um numero: ")
    num42=rd.question("digite outro numero: ")
    num43=rd.question("digite o ultimo numero: ")
    maX=Math.max(num41,num42,num43)
    console.log("O maior número é",maX)
}}

funcs[dud[(rd.keyInSelect(dud, "Qual funcao voce gostaria de usar? "))]]
