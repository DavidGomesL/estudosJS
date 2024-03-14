//--------------IFCE - Exercicio If/Else -----------
//1. Escreva	 um	 programa	 para	 ler	 2	 valores	 (considere	 que	 	 não	 serão	
//informados	valores	iguais)	e	escrever	o	maior	deles.

//let num1 = 4;
//let num2 = 3;
//
//if (num1 > num2) {
//    console.log(num1);
//} else if (num1 < num2) {
//    console.log(num2);
//}
//-------------------------------------------------

//2. Escreva	 um	 programa	 para	 ler	 o	 ano	 de	 nascimento	 de	 uma	 pessoa	 e	
//escrever	 uma	 mensagem	 que	 diga	 se	 ela	 poderá	 ou	 não	 votar	 este	 ano	
//(não	é	necessário	considerar	o	mês	em	que	ela	nasceu).

//let anoNasc = 2009;
//let anoAtual =2024;
//let podeVotar = anoAtual - anoNasc;

//if (podeVotar >= 16) {
//    console.log(`Poderá votar este ano.`)
//} else if (podeVotar < 16) {
//    console.log(`Não poderá votar este ano.`)
//}
//-------------------------------------------------

//3. Escreva	 um	 programa	 que	 verifique	 a	 validade	 de	 uma	 senha	 fornecida	
//pelo	 usuário.	 A	 senha	 válida	 é	 o	 número	 1234.	Devem	 ser	impressas	 as	
//seguintes	mensagens:	
//ACESSO	PERMITIDO	caso	a	senha	seja	válida.	
//ACESSO	NEGADO	caso	a	senha	seja	inválida.

//let senha = 1244;

//if (senha === 1234) {
//    console.log(`ACESSO PERMITIDO.`)
//} else if (senha !== 1234) {
//    console.log(`ACESSO NEGADO.`)
//}
//--------------------------------------------------

//4. As	maçãs	 custam	 R$	 0,30	 cada	 se	 forem	 compradas	menos	 do	 que	 uma	
//dúzia,	 e	 R$	 0,25	 se	 forem	 compradas	 pelo	 menos	 doze.	 Escreva	 um	
//programa	 que	 leia	 o	 número	 de	 maçãs	 compradas,	 calcule	 e	 escreva	 o	
//valor	total	da	compra.

//let qtdMacas = 11;
//let valorUnid = 0.30;
//let valorVarejo = 0.25;

//if (qtdMacas >= 12) {
//   console.log(`Foi comprado ${qtdMacas} maçãs e o valor total da compra é R$ ${(qtdMacas * valorVarejo).toFixed(2)} reais.`);
//} else if (qtdMacas < 12) {
//    console.log(`Foi comprado ${qtdMacas} maçãs e o valor total da compra é R$ ${(qtdMacas * valorUnid).toFixed(2)} reais.`);
//}
//---------------------------------------------------

//5. Escreva	 um	 programa	 para	 ler	 3	 valores	 inteiros	 (considere	 que	 	 não	
//    serão	lidos	valores	iguais)	e	escrevê-los	em	ordem	crescente.

//let valor1 = 4;
//let valor2 = 6;
//let valor3 = 3;

//if (valor1 < valor2 && valor2 < valor3) {
//    console.log(valor1, valor2, valor3)
//} else if (valor1 > valor2 && valor2 > valor3) {
//   console.log(valor3, valor2, valor1)
//} else if (valor1 < valor2 && valor1 > valor3) {
//    console.log(valor3, valor1, valor2)
//} else if (valor1 === valor2 || valor2 === valor3 || valor1 === valor3) {
//    console.log(`Não é possível ler a ordem dos números.`)
//}
//----------------------------------------------------

//6. Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo	 //(codificado	 da	 seguinte	 forma:	
//    1:feminino	 	 2:masculino)	 de	 uma	 pessoa,	 construa	 um	 programa	 que	
//    calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes	
//    Fórmulas:	
//    - para	homens:	(72.7	*	Altura)	– 58	
//    - para	mulheres:	(62.1	*	Altura)	– 44.7	
    
//let feminino = 1;
//let masculino = 2;
//let sexo;
//let altura = 1.75;
//let pesoIdealfeminino = (62.1 * altura) - 44.7;
//let pesoIdealHomem = (72.7 * altura) - 58;

//if (sexo === feminino) {
//    console.log(`Seu peso ideal é ${pesoIdealfeminino.toFixed(2)} kg.`);
//} else if (sexo === masculino) {
//    console.log(`Seu peso ideal é ${pesoIdealHomem.toFixed(2)} kg.`);
//} else {
//    console.log(`Escolha um sexo.`)
//}
//-----------------------------------------------

//7. Escreva	um	programa	para	ler	o	número	de	lados	de	um	polígono	regular	
//e	a	medida	do	lado	(em	cm).	Calcular	e	imprimir	o	seguinte:	
//− Se	o	número	de	lados	for	igual	a	3	escrever	TRIÂNGULO	e	o	valor	da	
//área
//− Se	o	número	de	lados	for	igual	a	4	escrever	QUADRADO	e	o	valor	da	
//sua	área.	
//− Se	o	número	de	lados	for	igual	a	5	escrever	PENTÁGONO.

//let numLadosPoligono = 5;
//let medidaLado = 8;
//let areaTriagulo = ((medidaLado**2) * Math.sqrt(3))/4;
//let areaQuadrado = medidaLado**2;

//if (numLadosPoligono === 3) {
 //   console.log(`TRIANGULO e sua área é ${areaTriagulo.toFixed(2)}.`);
//} else if (numLadosPoligono === 4) {
 //   console.log(`QUADRADO e sua área é ${areaQuadrado.toFixed(2)}.`);
//} else if (numLadosPoligono === 5) {
//    console.log(`PENTÁGONO.`);
//};
//-------------------------------------------------

//8. Acrescente	 as	 seguintes	 mensagens	 à	 solução	 do	 exercício	 anterior	
//conforme	o	caso.	
//− Caso	 o	 número	 de	 lados	 seja	 inferior	 a	 3	 escrever	 NÃO	 É	 UM	
//POLÍGONO.	
//− Caso	o	número	de	lados	seja	superior	a	5	escrever	POLÍGONO	NÃO	
//IDENTIFICADO.

//let numLadosPoligono = 2;

//if (numLadosPoligono < 3) {
//    console.log(`NÃO É UM POLÍGONO.`)
//} else if (numLadosPoligono > 5) {
//    console.log(`POLÍGONO NÃO IDENTIFICADO.`)
//}
//--------------------------------------------------

//9. Escreva	um	programa	para	ler	3	valores	inteiros	e	escrever	o	maior	deles.	
//Considere	que	o	usuário	não	informará	valores	iguais.

//let valor1 = 15;
//let valor2 = 16;
//let valor3 = 8;

//if (valor1 > valor2 && valor1 > valor3) {
//    console.log(valor1);
//} else if (valor1 < valor2 && valor2 > valor3) {
//    console.log(valor2);
//} else if (valor1 < valor2 && valor2 < valor3) {
//    console.log(valor3);
//} else if (valor1 > valor2 && valor1 < valor3) {
//    console.log(valor3);
//}
//------------------------------------------------

//10. Escreva	 um	 programa que	 leia	 as	 medidas	 //dos	 lados	 de	 um	 triângulo	 e	
//escreva	se	ele	é	Equilátero,	Isósceles	ou	Escaleno.	Sendo	que:	
//− Triângulo	Equilátero:	possui	os	3	lados	iguais.	
//− Triângulo	Isóscele:	possui	2	lados	iguais.	
//− Triângulo	Escaleno:	possui	3	lados	diferentes.

//let lado1 = 10;
//let lado2 = 15;
//let lado3 = 5;

//if (lado1 === lado2 && lado1 === lado3) {
//    console.log(`TRIÂNGULO EQUILÁTERO.`);
//} else if (lado1 === lado2 || lado1 === lado3) {
//    console.log (`TRIÂNGULO ISÓSCELES.`);
//} else if (lado1 !== lado2 && lado2 === lado3) {
//    console.log (`TRIÂNGULO ISÓSCELES.`);
//} else if (lado1 !== lado2 && lado2 !== lado3) {
//    console.log(`TRIÂNGULO ESCALENO.`);
//}
//--------------------------------------------------

//11. Escreva	 um	 programa	 que	 leia	 o	 valor	 de	 3	 ângulos	 de	 um	 triângulo	 e	
//escreva	 se	 o	 triângulo	 é	 Acutângulo,	 Retângulo	 ou	 Obtusângulo.	 Sendo	
//que:	
//− Triângulo	Retângulo:	possui	um	ângulo	reto.	(igual	a	90º)
//− Triângulo	Obtusângulo:	possui	um	ângulo	obtuso.	(maior	que90º)	
//− Triângulo	Acutângulo:	possui	três	ângulos	agudos.	(menor	que	90º)

//let triangulo = [80, 90, 60]
//
//if (triangulo.includes(90)) {
//    console.log(`TRIÂNGULO RETANGULO.`);
//} else if (triangulo.some(angulo => angulo > 90)) {
//    console.log(`TRIÂNGULO OBTUSÂNGULO.`)
//} else if (triangulo.some(angulo => angulo < 90)) {
//    console.log(`TRIÂNGULO ACUTÂNGULO.`)
//}

//obs: O método 'Includes()' vai verificar se no array têm um algum ângulo de 90 graus. 
//obs²: O método 'some()' vai verificar se há algum ângulo maior ou menor que 90 graus.
//----------------------------------------------------------------

//Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
//
//    salários até R$ 280,00 (incluindo) : aumento de 20%
//    salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//    salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
//    salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
//    o salário antes do reajuste;
//    o percentual de aumento aplicado;
//    o valor do aumento;
//    o novo salário, após o aumento.

//let salario = 2500;
//
//if (salario <= 280) {
//
//    let percentual = 1.2 - 1;
//    let valorAumento = salario * 0.2;
//    let novoSalario = salario + valorAumento;
//
//    console.log(`O salário atual é R$ ${salario}, o percentual de //aumento foi de ${percentual.toFixed(2)}%, o valor do aumento foi //de R$ ${valorAumento.toFixed(2)} e o novo salário é R$ $//{novoSalario.toFixed(2)}.`)
//} else if (salario > 280 && salario <= 700) {
//
//    let percentual = 1.15 - 1;
//    let valorAumento = salario * 0.15;
//    let novoSalario = salario + valorAumento;
//
//    console.log(`O salário atual é R$ ${salario}, o percentual de //aumento foi de ${percentual.toFixed(2)}%, o valor do aumento foi //de R$ ${valorAumento.toFixed(2)} e o novo salário é R$ $//{novoSalario.toFixed(2)}.`)

//}//else if (salario > 700 && salario <= 1500) {

//    let percentual = 1.10 - 1;
//    let valorAumento = salario * 0.10;
 //   let novoSalario = salario + valorAumento;
//
//    console.log(`O salário atual é R$ ${salario}, o percentual de //aumento foi de ${percentual.toFixed(2)}%, o valor do aumento foi //de R$ ${valorAumento.toFixed(2)} e o novo salário é R$ $//{novoSalario.toFixed(2)}.`)
//
//} else if (salario > 1500) {
//
//    let percentual = 1.05 - 1;
//    let valorAumento = salario * 0.05;
//    let novoSalario = salario + valorAumento;
//
//    console.log(`O salário atual é R$ ${salario}, o percentual de //aumento foi de ${percentual.toFixed(2)}%, o valor do aumento foi //de R$ ${valorAumento.toFixed(2)} e o novo salário é R$ $//{novoSalario.toFixed(2)}.`)

//}
//-----------------------------------------------------------------
//2)Faça um script que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:
//
//      Média de Aproveitamento  Conceito
//      Entre 9.0 e 10.0                      A
//      Entre 7.5 e 9.0                        B
//      Entre 6.0 e 7.5                        C
 //     Entre 4.0 e 6.0                        D
//      Entre 4.0 e zero                      E
//    O algoritmo deve mostrar numa janela de alertas notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

let a;







