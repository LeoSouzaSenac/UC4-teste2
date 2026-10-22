import {Poder} from "./Poder"


export class Pokemon {
    nome:string
    private vida:number
    private ataque:number
    private poder:Poder

    constructor(nome:string, vida:number, ataque:number, poder:Poder){
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.poder = poder
    }

    public falar():void{
        console.log(`${this.nome} `.repeat(3))      
    }

    atacar(poke:Pokemon):void{
        poke.vida -= this.ataque

        this.verificarVida(poke)

        console.log(`${poke.nome} foi atacado por ${this.nome} e perdeu ${this.ataque} de vida.`)
    }

    atacarComPoder(poke:Pokemon):void {
        poke.vida -= this.poder.ataque

        this.verificarVida(poke)

        console.log(`${poke.nome} foi atacado por ${this.nome} usando ${this.poder.nome} e perdeu ${this.poder.ataque} de vida.`)

    }

    verificarVida(poke:Pokemon):void{
        if (poke.vida < 0) {
            poke.vida = 0
        }

        if (poke.vida > 100) {
            poke.vida = 100
        }
    }



}