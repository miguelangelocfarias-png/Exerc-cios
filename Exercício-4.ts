//DECLARAÇÃO
let entradaAF1:string;
let entradaAF2:string;
let entradaAS:string;
let af1: number;
let af2: number;
let somativa: number;
let finalAF: number;
let notaFinal: number;
//ENTRADA DE DADOS
entradaAF1= prompt('Digite a nota da sua AF1.1:')!;
entradaAF2= prompt('Digite a sua nota da AF1.2:')!;
entradaAS= prompt('Digite a sua nota da AS:')!;
af1= parseInt(entradaAF1,10);
af2= parseInt(entradaAF2,10);
somativa= parseInt(entradaAS,10);
//processamento de dados
if(af1>af2){
    finalAF=af1;
}else{
    finalAF=af2;
}
notaFinal= finalAF * 0.20 + 0.80 * somativa;
//saída de dados
console.log(`A sua média é ${notaFinal.toFixed(2)}!`);
