"use strict";
// Criem uma classe Personagem que tenha:
// nome
// vida
// dinheiro
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = require("./Personagem");
// coloque todos os atributos como 'private'
// crie um método que mostra a vida (exemplo: mostrarVida())
// crie um método que modifica a vida (exemplo: mudarVida(vida:number))
const personagem = new Personagem_1.Personagem("Fulaninho", 100, 10);
console.log(personagem.getVida()); // 100
personagem.setVida(-50);
console.log(personagem.getVida()); // 0
personagem.setNome("Jo");
console.log(personagem.getNome());
