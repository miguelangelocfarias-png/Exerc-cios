//declaração de dados
let entradaIdade: string;
let idade: number;
let final: any;
//entrada de dados
entradaIdade= prompt ('Digite a sua idade:')!;
idade= parseInt(entradaIdade,10);
//processamento
final= 18-idade
//saída de dados
if(final>0){
    console.log(`Faltam ${final} anos para vocer estar apto para tirar sua CNH!`);
}else{
    console.log(`Voce está ${final} parar tirar sua CNH!`)
}
