"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    Animal.prototype.eat = function (quantity) {
        console.log("the animal has eaten" + quantity);
    };
    return Animal;
}());
exports.Animal = Animal;
