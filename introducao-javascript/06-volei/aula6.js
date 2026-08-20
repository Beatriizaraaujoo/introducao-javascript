//Operações Ternário 
//condição ? "se verdade" : "se falso"
const setsTimeA = 3;
const setsTimeB = 1;
const resultado = setsTimeA > setsTimeB ? "Time A Venceu!":"Time B Venceu";
console.log(resultado);
document.getElementById("resultado").textContent = resultado;