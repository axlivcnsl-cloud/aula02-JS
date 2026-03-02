let primeiroNumero = parseInt(Math.random()*10);
let segundoNumero = parseInt(Math.random()*10);
let resultado = primeiroNumero + segundoNumero;
console.log(primeiroNumero, segundoNumero);
console.log(resultado);
// exibindo na página - Para ISSO CRIAMOS UMA VARIÁVEL QUE RECEBE UM ELEMENTO HTML
document.getElementById("elPrimeiroNumero").textContent = `Primeiro número sorteado = ${primeiroNumero}`;
document.getElementById("elSegundoNumero").textContent = `Segundo número sorteado = ${segundoNumero}`;
document.getElementById("resultadoSoma").textContent = `${primeiroNumero} + ${segundoNumero} = ${resultado}`;

resultado = primeiroNumero - segundoNumero;
document.getElementById("resultadoSubtracao").textContent = `${primeiroNumero} - ${segundoNumero} = ${resultado}`;

resultado = primeiroNumero * segundoNumero;
document.getElementById("resultadoMultiplicacao").textContent = `${primeiroNumero} * ${segundoNumero} = ${resultado}`;

resultado = primeiroNumero / segundoNumero;
document.getElementById("resultadoDivisao").textContent = `${primeiroNumero} / ${segundoNumero} = ${resultado.toFixed(1)}`;

resultado = primeiroNumero % segundoNumero;
document.getElementById("resultadoModulo").textContent = `${primeiroNumero} % ${segundoNumero} = ${resultado.toFixed(1)}`;

resultado = primeiroNumero === segundoNumero;
document.getElementById("igualdade").textContent = `${primeiroNumero} === ${segundoNumero} = ${resultado}`;

resultado = primeiroNumero !== segundoNumero;
document.getElementById("desigualdade").textContent = `${primeiroNumero} !== ${segundoNumero} = ${resultado}`;

resultado = primeiroNumero >= segundoNumero;
document.getElementById("maiorigual").textContent = `${primeiroNumero} >= ${segundoNumero} = ${resultado}`;

resultado = primeiroNumero <= segundoNumero;
document.getElementById("menorigual").textContent = `${primeiroNumero} <= ${segundoNumero} = ${resultado}`;

resultado = primeiroNumero < segundoNumero;
document.getElementById("menor").textContent = `${primeiroNumero} < ${segundoNumero} = ${resultado}`;

resultado = primeiroNumero > segundoNumero;
document.getElementById("maior").textContent = `${primeiroNumero} > ${segundoNumero} = ${resultado}`;

resultado = (primeiroNumero >= segundoNumero) || (segundoNumero >= 3);
document.getElementById("operadorOU").textContent = `${primeiroNumero} >= ${segundoNumero} || ${segundoNumero} >= 3 = ${resultado}`;

resultado = (primeiroNumero >= segundoNumero) && (segundoNumero >= 3);
document.getElementById("operadorE").textContent = `${primeiroNumero} >= ${segundoNumero} && ${segundoNumero} >= 3 = ${resultado}`;

resultado = !((primeiroNumero >= segundoNumero) && (segundoNumero >= 3));
document.getElementById("operadorNAO").textContent = `(${primeiroNumero} >= ${segundoNumero} && ${segundoNumero} >= 3) = ${resultado}`;