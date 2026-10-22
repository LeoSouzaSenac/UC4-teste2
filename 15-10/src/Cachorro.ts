// Toda classe sempre começa com letra maiúscula
// a palavra 'export' permite que outros arquivos importem e usem esta classe
// a palavra 'class' inicia a declaração da classe
// depois, colocamos o nome da classe, que deve ser IGUAL ao nome do arquivo, seguido de chaves
export class Cachorro {
    // todo o código da classe vai aqui dentro
    // Atributos são as coisas que um cachorro tem
    // são como variáveis, só que sem const e sem let

    nome:string
    peso:number
    raca:string

    // Toda classe precisa de um método especial chamado 'constructor'
    // É ele que recebe os valores de nome, peso, raca, etc e cria o objeto.
    constructor(meuNome:string, meuPeso:number, minhaRaca:string){
        this.nome = meuNome
        this.peso = meuPeso
        this.raca = minhaRaca
    }

    // Métodos são funções. Elas são as coisas que o cachorro faz.
    latir():void {
        console.log(`${this.nome}: au au au!"`)
    }

    comer():void {
        console.log(`${this.nome}: nham nham!`)
    }

}