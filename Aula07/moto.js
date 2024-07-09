"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(_marca, _velocidadeM, _cor) {
        this.marca = _marca;
        this.velocidadeM = _velocidadeM;
        this.cor = _cor;
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
