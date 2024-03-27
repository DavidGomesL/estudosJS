// Iterando sobre um array e verificando se os números são pares ou ímpares:
//let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//let pares = [];
//let impares = [];
//
//for(let i = 0; i < nums.length; i++) {
//    if(nums[i] % 2 === 0) {
//        pares.push(nums[i])
//    } else {
//        impares.push(nums[i])
//    }
//}
//console.log(pares)
//console.log(impares)
//--------------------------------------------------------------------------------
//Encontrando a soma dos números pares em um intervalo:
//let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//let soma = 0;
//
//for(let i = 0; i < nums.length; i++) {
//    
//    if(nums[i] % 2 === 0) {
//        //soma += nums[i] ///Está adcionando o número par a soma
//        console.log(soma += nums[i]) //Está mostrando a lista com o valor de soma dos número pares
//    }
//}

//console.log(soma) // Está imprimindo no console, o valor da soma total
//--------------------------------------------------------------------------
//Percorrer um array de objetos e mostrar somente os que tem preço maior que 30: 
//
//const produtos = [
//    { nome: "Camiseta", preco: 25.00 },
//    { nome: "Calça", preco: 35.00 },
//    { nome: "Boné", preco: 15.00 },
//    { nome: "Jaqueta", preco: 50.00 }
//];
//
//for(let i = 0; i < produtos.length; i++) {
//    if(produtos[i].preco > 30) { //Está verificando quais produtos possuem valor maior que 30
//        console.log(produtos[i]) //Está imprimindo os produtos que possuem valor maior que 30
//    }
//}
//----------------------------------------------------------------------------------
//Contar quantas letras 'a' há em uma string:

//let frase =  "Qual o nome do aluno?"
//let arrayFrase = frase.split(''); //Irá transformar a string em array: ["Q","u,"a","l"," ","o"," ","n","o",...]
//let contadorA = 0; //Irá ser utilizada para contagem dos elementos.
//
//for(let i = 0; i < arrayFrase.length; i++) {
//    //O "if" está aplicando a condição
//    if(arrayFrase[i] === "a") {
//        contadorA++ //Está contabilizando a cada loop do for se encontrar "a"
//    }
//}
//console.log(contadorA)
//-----------------------------------------------------------------------------------
//Maior numero de uma lista

//let lista = [12,8,2,14,16,11,23,24,25,30,31]
//let maiorNum = lista[0]; //Está iniciando a variável "maiorNum" com o primeiro elemento da lista
//
//for(let i = 0; i < lista.length; i++) {
//    //Vai verificar se o número atual é maior que o número em "maiorNum"
//    if(lista[i] > maiorNum){
//        maiorNum = lista[i] //Atualiza o "maiorNum" se o número atual for maior 
//    }
//}
//console.log(maiorNum)
//------------------------------------------------------------------------------------
//Encontrar o menor número em uma lista de números

//let lista = [12,8,2,14,16,11,23,24,25,30,31]
//let menorNum = lista[0]; //A variável "menorNum" vai iniciar com o primeiro elemento da variável "lista"
//
//for(let i = 0; i < lista.length; i++){
//    //Vai verificar se o atual numero da lista é menor que o número em "menorNum"
//    if(lista[i] < menorNum) {
//        menorNum = lista[i] //Atualiza o "menorNum" se o numero atual da "lista[i]" for menor
//    }
//}
//console.log(menorNum)
//-------------------------------------------------------------------------------------
//Filtrar números negativos em uma lista de números

//let lista = [12,8,-2,14,-16,11,-23,24,25,30,31]
//
//for(let i = 0; i < lista.length; i++) {
//    //Verifica se o atual numero da lista é menor que zero(0)
//    if(lista[i] < 0){
//        console.log(lista[i]) //Imprime no console todos os números da lista que forem menor que zero(0)
//    }
//}
//------------------------------------------------------------------------------
//Verificar se uma string contém uma determinada letra

//let frase = "Onde você mora?"
//let arrayFrase = frase.split(''); //Está transformando a string em array: ["O","n","d","e",...]
//
//for(let i = 0; i < arrayFrase.length; i++) {
//    //Verifica se o index da rodada é estritamente igual a letra "n"
//    if(arrayFrase[i] === "n") {
//        console.log(`Contém a letra "n".`) //Imprime no console a afirmação se ouver letra "n" no index
//    }
//}
//------------------------------------------------------------------------------
//Encontrar múltiplos de 5 em uma lista de números
//let lista = [12,8,2,5,16,11,23,24,25,30,31]
//
//for(let i = 0; i < lista.length; i++) {
//    //Verificar se o elemento atual, quando divido por 5, retorna resultado zero(0)
//    if(lista[i] % 5 === 0) {
//        console.log(lista[i]) //Imprime no console os números que tiveram resultado igual a zero(0)
//    }
//}
//------------------------------------------------------------------------------
//Calcular e imprimir a média de números em uma lista

//let lista = [12,8,2,5,16,11,23,24,25,30,31]
//let soma = 0;
//
//for(let i = 0; i < lista.length; i++) {
//    soma+= lista[i]  //vai calcular a soma de todos os números na lista
//}
//let media = soma / lista.length //Vai pegar o valor da soma total e dividir pelo tamanho da lista
////obs: A variável "media" precisa ser adicionada após o "for", pois caso seja colocada antes não irá conseguir pegar o tamnho da lista (lista.length) para realizar a divisão, retornando o valor zero(0)
//console.log(soma, media) //Imprime no console o valor da soma total dos números da lista e a média dos números da lista
//------------------------------------------------------------------------------
//Verificar e imprimir números divisíveis por 3 em um intervalo

//let lista = [12,8,2,5,16,11,23,24,25,30,31]
//
//for(let i = 0; i < lista.length; i++) {
//    if(lista[i] % 3 === 0) {
//        console.log(lista[i])
//    }
//}
//------------------------------------------------------------------------------
//Encontrar e imprimir números pares e ímpares separadamente em uma lista
//let lista = [12,8,2,5,16,11,23,24,25,30,31]
//let pares = []; //Variável criada para receber os números pares
//let impares = []; //Variável criada para receber os números ímpares
//
//for(let i = 0; i < lista.length; i++) {
//    //Verifica se o número atual é divisível por 2
//    if(lista[i] % 2 === 0) {
//        pares.push(lista[i]) //Está pegando os números divisiveis por 2
//    } else {
//        impares.push(lista[i]) //Está pegando os números não divisiveis por 2
//    }
//}
//console.log(pares, impares) //Imprime no console os números pares e os números ímpares separadamente
//------------------------------------------------------------------------------
//Verificar se na frase "PHP morreu" tem alguma letra e.
//let frase = "PHP morreu";
//let arrayFrase = frase.split(''); //Transforma a string da variável "frase" em array: ["P","H","P",...]
//let encontrouE = false; //Essa variavel será usada para indicar se a letra "e" foi encontrada na string
//
//for(let i = 0; i < arrayFrase.length; i++){
//    //Verifica se o elemento atual é estritamente igual a letra "e"
//    if(arrayFrase[i] === "e"){
//       encontrouE = true; //Indica que a letra "e" foi encontra na string
//       break; //Interrompe o loop assim que a letra "e" for encontrada
//    }
//}
////Verifica se a variável "encontrouE" é verdadeira
//if(encontrouE){
//    console.log(`Possui a letra "e".`) //Se encontrou a letra "e", imprime a mensagem "Possui a letra 'e'"
//} else {
//    console.log(`Não possui a letra "e".`) //Se não encontrou a letra "e", imprime a mensagem "Não possui a letra 'e'"
//}
//------------------------------------------------------------------------------
//let aluno = [
//    {
//        id:1,
//        nome:"Josefina",
//        matricula :435243,
//        notaFinal:6
//    },
//    {
//        id:2,
//        nome:"Carlos",
//        matricula :455243,
//        notaFinal:3
//    },
//    {
//        id:3,
//        nome:"Joao",
//        matricula :54313,
//        notaFinal:2
//    },
//    {
//        id:4,
//        nome:"Carlota",
//        matricula :9124810,
//        notaFinal:10
//    },
//    {
//        id:5,
//        nome:"Giusseppe",
//        matricula :75635,
//        notaFinal:8
//    },
//    {
//        id:6,
//        nome:"Joaquina",
//        matricula :231423,
//        notaFinal:4
//    },
//    {
//        id:7,
//        nome:"Marquim",
//        matricula :35253,
//        notaFinal:9
//    },
//]
//
//let alunosAprovados = [];
//let alunosReprovados = [];
//
////Quero quem me retornem os alunos que passaram por média, tomem consideração que 7 é o valor para se passar por media. Quero que me retornem a seguinte frase
//
////O aluno ... de matricula ... passou com nota ...
////Se nao 
////O aluno ... de matricula ... não passou, ligue para a diretora
//
//for(let i = 0; i < aluno.length; i++) {
//    if(aluno[i].notaFinal >= 7) {
//        alunosAprovados.push(`O aluno ${aluno[i].nome} de matricula ${aluno[i].matricula} passou com nota ${aluno[i].notaFinal}.`)
//    } else {
//        alunosReprovados.push(`O aluno ${aluno[i].nome} de matricula ${aluno[i].matricula} não passou, ligue para a diretora.`)
//    }
//};
//console.log(alunosAprovados,alunosReprovados);
//---------------------------------------------------------------------------------
//Quero que vocês calculem quantos anos bissextos existem entre 1900 - 2024

//let contadorAno = 0;
//
//for(let i = 1900; i <= 2024; i++){
//    if(i % 4 === 0){
//        contadorAno++
//    }
//};
//console.log(contadorAno);
//----------------------------------------------------------------------------------




