//Escreva uma função chamada soma que aceita dois números como parâmetros e retorna a soma deles.

//function soma (a,b) { 
//    return a + b;
//} //A função está recebendo dois parâmetros e retornando a soma deles.

//let resultado = soma(6,5); //A variável está recebendo a função e atribuindo dois números como novos parâmentros.
//console.log(resultado); //Vai imprimir no console o resultado da variável
//---------------------------------------------------------------
//Escreva uma função chamada maiorNumero que aceita três números como parâmetros e retorna o maior deles.

//function maiorNumero (a,b,c) { //Está recebendo 3 parâmetros
//Está sendo dada as condições que serão verificadas na função
//    if(a > b && a > c) {
//        return(a);
//    } else if (a < b && b > c) {
//        return(b);
//    } else if(a < c && b < c) {
//        return(c)
//    };
//}

//let numero = maiorNumero(110,190,25); //A variável está executando a função atribuindo novos parâmetros
//console.log(numero); //Imprimi no console o resultado da variável.
//---------------------------------------------------------------
//Escreva uma função chamada inverterString que aceita uma string como parâmetro e retorna a string invertida.
//A função está recebendo como parâmetro uma string
//function inverterString (string) {
//    let strInverterString = ""; //Irá receber a string que for usada no parâmetro da função
    //Está recebendo o tamanho da string e pecorrendo-a através de um loop investido
 //   for(let i = string.length - 1; i >= 0; i--) {
//        strInverterString += string[i]; //Está incrementando a váriavel com o index da rodada
//    }
//    return strInverterString; //Retorna a váriavel com a string completa
//}

//let frase = inverterString("Olá, mundo!"); //Atribui uma nova string como parâmetro da função
//console.log(frase); //Imprimi o resultado no console.
//-------------------------------------------------------------
//Escreva uma função chamada calcularFatorial que aceita um número como parâmetro e retorna o fatorial desse número.
//A função recebe como parâmetro fatorial
//function calcularFatorial(fatorial) {
    //condição que retorna 1, caso o número fatorado seja 0 ou 1
 //   if (fatorial === 0 || fatorial === 1) {
 //       return 1;
//    } else { //Condição que retorna resultado fatorial de números maiores que 1
 //   let resultado = fatorial;
//    let primeiroMultiplicador = fatorial - 1;
//    for(let i = primeiroMultiplicador; i > 1; i--) {
//        resultado *= i; //atribuição de multiplicação composta
//        console.log(resultado) //imprime cada resultado da multiplicação da atribuição da vez
//    }
    
//    return resultado;
//    }
//}

//console.log(calcularFatorial(5)); //imprime no console o resultado do novo parâmetro

