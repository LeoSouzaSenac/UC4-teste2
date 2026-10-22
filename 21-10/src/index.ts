// Criem uma classe Personagem que tenha:
// nome
// vida
// dinheiro

import { Personagem } from "./Personagem";

// coloque todos os atributos como 'private'
// crie um método que mostra a vida (exemplo: mostrarVida())
// crie um método que modifica a vida (exemplo: mudarVida(vida:number))

const personagem:Personagem = new Personagem("Fulaninho", 100, 10)

console.log(personagem.getVida()) // 100
personagem.setVida(-50)
console.log(personagem.getVida()) // 0

personagem.setNome("Jo")
console.log(personagem.getNome())

// Crie uma classe chamada Cachorro
// coloque atributos no cachorro
// coloque os atributos 'private'
// crie o constructor
// crie os métodos 'getters' e os 'setters'
// crie 3 cachorros no index e chame seus métodos