export class Personagem {
    private nome: string
    private vida: number
    private dinheiro: number

    constructor(nome:string, vida:number, dinheiro:number){
        this.nome = nome
        this.vida = vida
        this.dinheiro = dinheiro
    }

    public getNome():string {
        return this.nome
    }

    public setNome(novoNome:string):void {
        if (novoNome.length < 3) {
            console.log("O nome precisa ter pelo menos 3 caracteres!")
            return
        }
        this.nome = novoNome
    }

    public getVida():number{
        return this.vida
    }

    public setVida(novaVida:number):void {
        if (novaVida < 0) {
            novaVida = 0
        }
        this.vida = novaVida
    }

    public getDinheiro():number {
        return this.dinheiro
    }

    public setDinheiro(novoDinheiro:number):void {
        this.dinheiro = novoDinheiro
    }
}