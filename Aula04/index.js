"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rd = require("readline-sync");
var nome = rd.question("what is the person's name? ");
var idade = rd.question("what is the person's age? ");
var carteira = rd.keyInYN("does this person have a licence? ");
function dirigir(x1, x2, x3) {
    if ((x2 >= 18) && x3) {
        console.log(x1, "can drive");
    }
    else {
        console.log(x1, "can't drive");
    }
}
dirigir(nome, idade, carteira);
