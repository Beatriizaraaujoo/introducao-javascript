//combinando booleano e ternário 

const nomePet = "Lumi";
const vacinado = true;
const castrado = true;
const idadeMeses = 8;
const podeAdotar = vacinado && castrado && idadeMeses>=2;

const mensagem = podeAdotar 
? `${nomePet} está pronto para adoção!`
: `${nomePet} ainda precisa de + cuidado antes da adoção` ; 

console.log(mensagem);
document.getElementById("resultado").textContent = mensagem;
