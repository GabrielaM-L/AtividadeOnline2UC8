//*****Sistema de contagem e classificação de alunos*****

//Declaração das variáveis:
let numeroAlunos;
let contador;
let listaAlunos;

//Atribuição de valores às variáveis:
numeroAlunos = 5;
contador = 0;
listaAlunos = ["Marina", "Frederico", "Vitor", "Ismael", "Pablo", "Erick"]

//Estrutura de laço contado + indicação se o contador é zero, par ou ímpar + nome do aluno correspondente (concatenação):
for (contador; contador < listaAlunos.length; contador++) {
    //console.log(contador)

    if (contador == 0) {
        console.log(contador + " (ZERO) - " + listaAlunos[contador])
    } else if (contador % 2 == 1) {
        console.log(contador + " (ÍMPAR) - " + listaAlunos[contador])
    } else {
        console.log(contador + " (PAR) - " + listaAlunos[contador])
    }
}

//Estrutura de laço contado + indicação se o contador é zero, par ou ímpar + nome do aluno correspondente (interpolação):

// for (contador; contador < numeroAlunos; contador++) {
//     //console.log(contador)

//     if (contador == 0) {
//         console.log(`${contador}: (ZERO) - ${listaAlunos[contador]}`);
//     } else if (contador % 2 == 1) {
//         console.log(`${contador}: (ÍMPAR) - ${listaAlunos[contador]}`);
//     } else {
//         console.log(`${contador}: (PAR) - ${listaAlunos[contador]}`);
//     }
// }

