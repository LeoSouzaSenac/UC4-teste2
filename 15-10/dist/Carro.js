"use strict";
/*
    Crie a classe Carro
    Siga as instruções para criá-la usando de exemplo a classe Cachorro.

    O carro deve ter:
    marca, tipo, ano

    O que o carro faz:
    - ele anda
    - ele buzina

    Depois de criar a classe, crie 3 carros diferentes no 'index.ts', chame seus atributos em console.log e chame seus métodos.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    // Atributos
    marca;
    tipo;
    ano;
    constructor(marca, tipo, ano) {
        this.marca = marca;
        this.tipo = tipo;
        this.ano = ano;
    }
    // Métodos
    andar() {
        console.log(`O carro da marca ${this.marca} está andando!`);
    }
    buzinar() {
        console.log(`O carro do tipo ${this.tipo} está buzinando!`);
    }
}
exports.Carro = Carro;
