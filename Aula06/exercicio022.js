"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(x1, x2, x3) {
        this.marca = x1;
        this.velocidadeM = x2;
        this.cor = x3;
    }
    Moto.prototype.horn = function () {
        console.log("A moto", this.marca, "bozina");
    };
    Moto.prototype.speed = function () {
        console.log("A velocidade máxima da moto", this.marca, "é", this.velocidadeM);
    };
    Moto.prototype.color = function () {
        console.log("a cor da moto é", this.cor);
    };
    return Moto;
}());
exports.Moto = Moto;
