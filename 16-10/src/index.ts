import { Arma } from "./Arma";
import { Personagem } from "./Personagem";


/* const personagem:Personagem = new Personagem("Xablau", 25)

console.log(personagem.vida) // 50

personagem.curar()

console.log(personagem.vida) // 60

personagem.perderVida(2)

console.log(personagem.vida) // 45

personagem.curar()
personagem.curar()
personagem.curar()
personagem.curar()
personagem.curar()
personagem.curar()
personagem.curar()
personagem.curar()

console.log(personagem.vida) */


/* const personagem_1:Personagem = new Personagem("Xablau", 5)
const personagem_2:Personagem = new Personagem("Xonas", 4) */

/* personagem_1.curarOutroPersonagem(personagem_2) */

const nome:string = "Leonardo"


/* const arma:Arma = new Arma("Espada", 50)
const arma2:Arma = new Arma("Machado", 49)
const arma3:Arma = new Arma("Lança", 51)

const per:Personagem = new Personagem("Fulano", 7, arma)
const per1:Personagem = new Personagem("Ciclano", 6, arma3)
const per2:Personagem = new Personagem("Beltrano", 8, arma2)

// string é um tipo. Logo, podemos criar um array deste tipo
const nomes:string[] = ["Leonardo", "Reuel", "Matheus"]
// number é um tipo. Logo, também podemos criar um array deste tipo
const numeros:number[] = [99, 108, 59]
// Se "Personagem" também é um tipo, não podemos criar um array de Personagens?
const personagens:Personagem[] = [per, per1, per2]
per.atacar(per2) */

const arma:Arma = new Arma("Espada", 5)
const personagem:Personagem = new Personagem("Robereto", 10, arma)