"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// como exportamos a classe, nós agora podemos importá-la
const Cachorro_1 = require("./Cachorro");
const Carro_1 = require("./Carro");
// para criar um objeto, criamos uma variável que deve ser do tipo da classe (Cachorro)
// depois, usamos a palavra 'new' para criar um novo Cachorro
// dentro dos parênteses, precisamos colocar todas as informações que o constructor pede
const meuCachorro = new Cachorro_1.Cachorro("Tobby", 10.50, "Vira-lata");
const outroCachorro = new Cachorro_1.Cachorro("Rex", 20.00, "Pitbull");
// agora, podemos acessar as informações do cachorro. Por exemplo, para ver o nome:
console.log(meuCachorro.nome);
console.log(outroCachorro.nome);
console.log(meuCachorro.raca);
console.log(outroCachorro.raca);
// posso também chamar os métodos para ver o que o cachorro faz:
meuCachorro.latir();
const carro1 = new Carro_1.Carro("Ferrari", "Testarossa", 1989);
console.log(carro1.marca);
console.log(carro1.tipo);
console.log(carro1.ano);
carro1.andar();
carro1.buzinar();
