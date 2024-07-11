"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(children) {
        this.children = children;
    }
    Person.prototype.howManyChildren = function () {
        console.log("This person has".concat(this.children, " children."));
    };
    return Person;
}());
exports.Person = Person;
