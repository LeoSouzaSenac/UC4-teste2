"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    // Atributos
    nome;
    vida = 50;
    forca;
    //arma:Arma
    constructor(nome, forca) {
        this.nome = nome;
        this.forca = forca;
        //this.arma = arma
    }
    curar() {
        this.vida += 10;
        if (this.vida > 100) {
            this.vida = 100;
        }
    }
    perderVida(dano) {
        this.vida -= dano;
        if (this.vida < 0) {
            this.vida = 0;
        }
    }
    curarOutroPersonagem(per) {
        per.vida += 10;
        if (per.vida > 100) {
            per.vida = 100;
        }
        console.log(`O personagem ${per.nome} foi curado por ${this.nome}.
            \nVida de ${per.nome}: ${per.vida}.`);
    }
}
exports.Personagem = Personagem;
// 1)
// Crie uma nova classe chamada Arma
// arma deve ter nome e ataque
// não esqueça do constructor
// 2)
// Dentro da classe personagem, crie o atributo arma (do tipo Arma)
// chame ele no constructor de Personagem também
// 3)
// Modifique o método 'atacar' da classe Personagem para usar o dano da arma
