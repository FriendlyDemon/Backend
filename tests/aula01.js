"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./carro");
var moto_1 = require("./moto");
var meuCarro = new carro_1.Carro("VW", 110, "preto");
var minhaMoto = new moto_1.Moto("Hitachi", 160, "preta");

function getVel() {
    return this.velocidadeM;
}
function setVel(novaVel) {
    if (novaVel > 0) {
        this.velocidadeM = novaVel;
    } else {
        console.log("Velocidade m\u00E1xima tem que ser maior que 0")
    }}
meuCarro.horn();
minhaMoto.color();
console.log(getVel.call(meuCarro));
setVel.call(meuCarro, 200);
console.log(getVel.call(meuCarro));
const fs = require('node:fs');
const content = "isso é um teste";
fs.writeFile('./test.txt', content, { flag: 'a+' }, err=>{})

// https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs