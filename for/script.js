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


