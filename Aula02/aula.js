const rd = require('readline-sync')
/*
const num1 = Number(rd.question('incira um numero: '))
const num2 = Number(rd.question('incira outro numero: '))
console.log(num1 + num2)
*/
nota1 = Number(rd.question('insira a primeira nota: '))
nota2 = Number(rd.question('insira a segunda nota: '))
nota3 = Number(rd.question('insira a terceira nota: '))
avr = Math.floor((nota1+nota2+nota3)/3)
console.log(`A média das notas é ${avr}.`)