var Character = /** @class */ (function () {
    function Character(nome, tipo, forca, saude) {
        this.name = nome;
        this.type = tipo;
        this.strength = forca;
        this.health = saude;
    }
    Character.prototype.attack = function (alvo) {
        if (this.strength >= alvo.health) {
            console.log("".concat(this.name, " ataca ").concat(alvo.name, " e causa ").concat(alvo.health, " de dano"));
            console.log("".concat(alvo.name, " est\u00E1 morto"));
            alvo.health = 0;
        }
        else {
            alvo.health -= this.strength;
            console.log("".concat(this.name, " ataca ").concat(alvo.name, " e causa ").concat(this.strength, " de dano"));
        }
    };
    Character.prototype.checkHealth = function () {
        if (this.health != 0) {
            console.log("".concat(this.name, " tem ").concat(this.health, " pontos de vida"));
        }
        else {
            console.log("".concat(this.name, " est\u00E1 morto"));
        }
    };
    return Character;
}());
var guerreiro = new Character("Aragorn", "pc", 20, 100);
var monstro = new Character("Uruk-Hai", "npc", 50, 30);
monstro.checkHealth();
guerreiro.attack(monstro);
monstro.checkHealth();
guerreiro.attack(monstro);
