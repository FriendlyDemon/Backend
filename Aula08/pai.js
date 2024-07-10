"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pai = void 0;
var pai = /** @class */ (function () {
    function pai(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    pai.prototype.andar = function () {
        console.log(this.nome, 'andou até a cozinha');
    };
    return pai;
}());
exports.pai = pai;
