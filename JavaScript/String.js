/* String -> cadeia de caracteres */

// Delimitacoes comuns - " " e ' '
// ( a partir do ECMA 2015 foi implementado a adicao de crases ` ` (usadas em template string) )

const escola = "teste"
console.log(escola.charAt(4)) // retornou no console: e

// charAt -> pega o char no index

// char  -> t | e | s | t | e
// index -> 0 | 1 | 2 | 3 | 4

console.log(escola.charCodeAt(4)) // retorna o valor da character dentro da tabela unicode/ascii 
// retornou no console: 101

//com o .indexOf(), o que ocorre é que ele pega o char value e retorna o index
// .substring - subtrai o index selecionado, e printa o resto da string

console.log(escola.substring(1)) // retornou no console: este -> ( (t)este )
// t <- (nao printa)    | e | s | t | e
// 0 <- (nao printa no) | 1 | 2 | 3 | 4
// e possivel pegar um range tambem, onde ele seleciona um comeco e um fim dentro da string (0, 3)

// concatenacao 
const escola2 = "aldo"
console.log('Escola '.concat(escola2).concat("!")) // retornou no console: Escola aldo!
// ao inves do .concat e possivel usar o sinal de " + " tambem, mas cuidado pois ele e usado em Number tambem

// Replace - pega o index, e troca o character desse index pelo escolhido
// em string array, e possivel gerar arrays usando .split, assim criando mais possibilidades de usos com a string

/* Template strings (ECMA 2015) */
// com template string e possivel interpolar, coisa que nao e convencional da string por nativo no JS

let nome = "jorge"
const template = `hello ${nome}!`
console.log(template.toUpperCase()) // retornou no console: HELLO JORGE!
// curiosidade .toUpperCase() -> torna tudo CAPS dentro da string