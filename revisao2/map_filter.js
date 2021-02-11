//Arrays e seus métodos
//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
var number = [4, 9, 16, 25];
let raiz = number.map((numero) => {
  return numero * numero;
});
console.log(raiz);

//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
var numbers = [65, 44, 12, 4];
let mult = numbers.map((numero) => {
  return numero * 10;
});

console.log(mult);

//A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
var ages = [32, 33, 16, 40];
let idade = ages.filter((age) => {
  return age >= 18;
});
onsole.log(idade);
