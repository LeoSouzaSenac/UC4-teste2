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

export class Carro {
    // Atributos
    marca:string
    tipo:string
    ano:number

    constructor(marca:string, tipo:string, ano:number){
        this.marca = marca
        this.tipo = tipo
        this.ano = ano
    }

    // Métodos
    andar():void {
        console.log(`O carro da marca ${this.marca} está andando!`)
    }

    buzinar():void {
        console.log(`O carro do tipo ${this.tipo} está buzinando!`)

    }
}
