const a = 6;
const b = 4;
const c = 8;
const triangulo = 180;

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
