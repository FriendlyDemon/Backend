"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./carro");
var moto_1 = require("./moto");
var meuCarro = new carro_1.Carro("VW", 110, "preto");
var minhaMoto = new moto_1.Moto("Hitachi", 160, "preta");
function getVel(obj) {
    return obj.velocidadeM;
}
function getVelo() {
    return this.velocidadeM;
}
function setVel(novaVelocidadeM) {
    if (novaVelocidadeM > 0) {
        this.velocidadeM = novaVelocidadeM;
    }
    else {
        console.log("Velocidade m\u00E1xima tem que ser maior que 0");
    }
}
;
meuCarro.horn();
minhaMoto.color();
console.log(getVel(meuCarro));
setVel.call(meuCarro, 200);
console.log(getVelo.call(meuCarro));
