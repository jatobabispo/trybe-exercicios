const a = 6;
const b = 4;
const c = 8;
const triangulo = 180;
var pecaXadrez = "Rei";
let nota = 45;
let lucro = 0;
let salario = 3000;
let inss = 0;
let ir = 0;

//Atividade 1
console.log("Atividade 1:");

console.log("A Soma de A + B = "+ (a + b));
console.log("A Subtração de A - B = "+ (a - b));
console.log("A Multiplicação de A * B = "+ (a * b));
console.log("A Divisão de A por B = "+ (a / b));
console.log("O Resto de A / B = "+ (a % b));

//Atividade 2
console.log("Atividade 2:");

if (a > b) {
    console.log("O numero maior é: "+a);
} else if (a == b) {
    console.log("Valores iguais!");
} else {
    console.log("O numero maior é: "+b);
}

//Atividade 3

console.log("Atividade 3:");

if ((a >= b && a > c)||(a > b && a >= c)){
    if (a > b && a >= c){
    console.log("O numero maior é: "+a);
    }
} else if (a == b && a == c) {
    console.log("Valores iguais!");
} else if ((b >= a && b > c) || (b > a && b >= c)) {
    console.log("O numero maior é: "+b);
} else if ((c >= a && c > b) || (c > a && c >= b)) {
    console.log("O numero maior é: "+c);
} else {
    console.log("Numeros inválidos");
} 

//Atividade 4

console.log("Atividade 4:");

if (a > 0) {
    console.log("Numero em A é Positivo");
} else if ( a == 0) {
    console.log("Numero em A é Zero");
} else {
    console.log("Numero em A é Negativo");
}

//Atividade 5

console.log("Atividade 5:");

if (a+b+c != triangulo){
    console.log("Não é um triangulo");
} else {
    console.log("É um triangulo");
}

//Atividade 6

console.log("Atividade 6:");
console.log("Qual peça de xadrez você quer informação? "+pecaXadrez);


switch (pecaXadrez.toLowerCase()) {
    case "bispo":
        console.log("Só pula em diagonal");
        break;
    case "torre":
        console.log("Anda vertical ou horizontal quantas casa desejar");
        break;
    case "rainha":
        console.log("Anda em todas as direções quantas casa quiser");
        break;
    case "rei":
        console.log("Anda um casa em qualquer direção!");
        break;
    case "peao":
        console.log("Anda 1 casa, exceto na primeira jogada, e come em diagonal pra frente.");
        break;
    case "cavalo":
        console.log("Anda em L dois passos nao diagonal e mais um passo lateral");
        break;
    default:
        console.log("Escolha uma peça válida!");
}

//Atividade 7
console.log("Atividade 7");
console.log("O percentual do aluno foi "+nota+"%");

if ( nota > 100 || nota < 0) {
    console.log("Digite uma nota válida entre 0 e 100!");
} else if ( nota >= 90 ) {
    nota = "A";
    console.log("Conceito A");
} else if ( nota >= 80) {
    nota = "B";
    console.log("Conceito = B");
} else if ( nota >= 70) {
    console.log("Conceito = C");
} else if ( nota >= 60) {
    console.log("Conceito = D");
} else if ( nota >= 50) {
    console.log("Conceito = E");
} else {
    console.log("Conceito = F");
}

//Atividade 8
console.log("Atividade 8");
console.log("Tem número par?: ")
if ( a % 2 == 0 || b % 2 == 0 || c % 2 == 0 ) {
    console.log(true);
} else {
    console.log(false);
}

//Atividade 9
console.log("Atividade 9");
console.log("Tem número impar?: ")
if ( a % 2 == 1 || b % 2 == 1 || c % 2 == 1 ) {
    console.log(true);
} else {
    console.log(false);
}

//Atividade 10
console.log("Atividade 10");

lucro = ((c - (b*1.2))*1000); // C é o preço e B o custo somado aos 20% do imposto.

console.log("Esse é o lucro da venda de 1000 unidades: R$"+lucro);

//Atividade 11
console.log("Atividade 11");

//INSS
if (salario <= 1556.94 ) {
    inss = salario * 0.08;
} else if ( salario < 2594.92 ) {
    inss = salario * 0.09;
} else if ( salario < 5189.82 ) {
    inss = salario * 0.11;
} else {
    inss = 570.88;
}


//IR
if ((salario-inss) <= 1903.98 ) {
    ir = 0;
} else if ((salario-inss) <= 2826.65 ) {
    ir = ((salario-inss)*0.075)-142.80;
} else if ((salario-inss) <= 3751.05 ) {
    ir = ((salario-inss)*0.15)-354.80;
} else if ((salario-inss) <= 4664.68 ) {
    ir = ((salario-inss)*0.225)-636.13;
} else if ((salario-inss) > 4664.68 ) {
    ir = ((salario-inss)*0.275)-869.36;
}
console.log("Salario a receber: "+((salario-inss)-ir));
