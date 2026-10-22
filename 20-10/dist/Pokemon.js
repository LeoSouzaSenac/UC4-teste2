"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    nome;
    vida;
    ataque;
    poder;
    constructor(nome, vida, ataque, poder) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.poder = poder;
    }
    falar() {
        console.log(`${this.nome} `.repeat(3));
    }
    atacar(poke) {
        poke.vida -= this.ataque;
        this.verificarVida(poke);
        console.log(`${poke.nome} foi atacado por ${this.nome} e perdeu ${this.ataque} de vida.`);
    }
    atacarComPoder(poke) {
        poke.vida -= this.poder.ataque;
        this.verificarVida(poke);
        console.log(`${poke.nome} foi atacado por ${this.nome} usando ${this.poder.nome} e perdeu ${this.poder.ataque} de vida.`);
    }
    verificarVida(poke) {
        if (poke.vida < 0) {
            poke.vida = 0;
        }
        if (poke.vida > 100) {
            poke.vida = 100;
        }
    }
}
exports.Pokemon = Pokemon;
