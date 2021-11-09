//Lista de Exerciocios do dia 4.2

//Atividade 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = 0; i < numbers.length ; i+=1) {
    console.log(numbers[i]);
}

//Atividade 2

let soma = 0;

for (i = 0; i < numbers.length; i += 1) {
        soma += numbers[i];
}
console.log("A soma das variaveis é: "+soma);

//Atividade 3

let media = soma / numbers.length;

console.log("A média dos valores é: "+media);

//Atividade 4

if (media >= 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor que 20");
}

//Atividade 5

let maiorValor = 0;
for (let i = 0; i < numbers.length; i+=1) {    
   if ( maiorValor < numbers[i]){
     maiorValor = numbers[i];
    }    
}
console.log("Maior valor é: "+maiorValor);

//Atividade 6

let impares =[];

for (let i = 0; i < numbers.length; i++) {
    if ( numbers[i] % 2 == 1 ){
    impares.push(numbers[i]);
    }
}
console.log("Se houver numeros impares são: "+impares);