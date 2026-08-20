//Crie um algoritmo que, a partir da idade do candidato(a), determinar se pode ou não tirar a CNH.Caso o candidato atenda a restrição de idade, mostrar que ele está apto. Caso contrário, calcular quantos anos faltam para o candidato estar apto.
//declaração de dados
let entradaIdade: string;
let idade: number;
//entrada de dados
entradaIdade= prompt ('Digite a sua idade:')!;
idade= parseInt(entradaIdade,10);
//processamento
//saída de dados
if(idade<18){
    console.log(`Faltam ${18-idade} anos para vocer estar apto para tirar sua CNH!`);
}else{
    console.log(`Voce está ${idade} parar tirar sua CNH!`)
}
