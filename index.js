let idade = 18;
const anoNascimento = 2006;
let anoAtual = 2024;
const nomeCompleto = "Isabeli Cristina";

console.log("Meu nome é " + nomeCompleto + " nascida no ano de " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos");

anoAtual = anoAtual + 1;
console.log(anoAtual);

idade = idade  + 1;
console.log(idade);


// Agência de viagens Nova Zelândia, Alemanha, São Paulo, Pará,Rio de Janeiro
const listaDeDestinos = new Array(
  "Nova Zelândia", 
  " Alemanha", 
  " São Paulo",
  " Pará",
  " Rio de Janeiro"
);
console.log(listaDeDestinos);
console.log(listaDeDestinos[4]); 
listaDeDestinos.push("Coronel Vivida");
listaDeDestinos.push("Curitiba");
listaDeDestinos.push("Rio Branco");
listaDeDestinos.push("Berlin");
console.log(listaDeDestinos);



const idadeComprador = 17;


if(idadeComprador >= 18) {
  console.log("Comprador maior de idade");
  console.log("Destinos disponíveis: " + listaDeDestinos);
} else {
 console.log("Infelizmente, não será finalizado o procedimento, pois idade informada é menor de 18 anos de idade.");
  console.log("não sera finalizado devido idade");
}
