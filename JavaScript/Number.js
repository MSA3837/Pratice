const peso1 = 1;

const peso2 = Number('2'); //Numbers servem para ambos os tipos de variaveis, seja inteiro ou float

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));

//use a funcao .toFixed pra ter um controle maior das casas decimais

const val = 12.929318;
console.log(val.toFixed(2)); // curiosidade - o numero foi arredondado no output

//e a funcao .toString para retornar o valor como string
// .toString -> em binario

//typeof -> retorna o tipo de variavel

/*  Alguns cuidados
    - Qualquer numero divido por zero nao da erros, mas gera o infinito
    - E possivel fazer operacoes matematicas usando tipo string com numeros
    - Nao e possivel chamar o literal + funcao, o literal precisa estar em parenteses ex. ( console.log(10.48).toFixed(2); )
    - Pontos flutuantes possuem certas imprecisoes com calculos, pra evitar problemas de desempenho na linguagem
*/