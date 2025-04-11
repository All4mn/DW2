//1)---------------------------------
console.log("EX1");
function coordenadas(x, y) {
  switch (true) {
    case x == 0 && y == 0:
      return "Origem";
    case x == 0:
      return "eixo x";
    case y == 0:
      return "eixo y";
    case x > 0 && y > 0:
      return "Q1";
    case x < 0 && y > 0:
      return "Q2";
    case x < 0 && y < 0:
      return "Q3";
    case x > 0 && y < 0:
      return "Q4";
  }
}
console.log(coordenadas(4.5, -2.2));
console.log(coordenadas(0.1, 0.1));
console.log(coordenadas(0, 0));

//2)---------------------------------
console.log("EX2");
function triangulo(x, y, z) {
  let ordem = [x, y, z];
  let resposta1 = "";
  let resposta2 = "";
  ordem.sort((a, b) => b - a);
  if (ordem[0] >= ordem[1] + ordem[2]) {
    return "NÃO FORMA TRIANGULO";
  }
  if (Math.pow(ordem[0], 2) == Math.pow(ordem[1], 2) + Math.pow(ordem[2], 2)) {
    return "TRIANGULO RETANGULO";
  }
  if (Math.pow(ordem[0], 2) > Math.pow(ordem[1], 2) + Math.pow(ordem[2], 2)) {
    resposta1 = "TRIANGULO OBTUSANGULO";
  } else if (
    Math.pow(ordem[0], 2) <
    Math.pow(ordem[1], 2) + Math.pow(ordem[2], 2)
  ) {
    resposta1 = "TRIANGULO ACUTANGULO";
  }
  if (x == y || y == z || x == z) resposta2 = "TRIANGULO ISOSCELES";
  else if (x == y && y == z) resposta2 = "TRIANGULO EQUILATERO";
  return `${resposta1}, ${resposta2}`;
}
console.log(triangulo(7, 5, 7));
console.log(triangulo(6, 6, 10));
console.log(triangulo(6, 6, 6));
console.log(triangulo(5, 7, 2));
console.log(triangulo(6, 8, 10));

//3)---------------------------------
console.log("EX3");
function newSalario(salario) {
  let valor = salario;
  let percent = 0;
  let aumento = 0;
  let newValor = 0;
  switch (true) {
    case valor <= 400:
      percent = 15;
      break;
    case 400 < valor && valor <= 800:
      percent = 12;
      break;
    case 800 < valor && valor <= 1200:
      percent = 10;
      break;
    case 1200 < valor && valor <= 2000:
      percent = 7;
      break;
    case valor > 2000:
      percent = 4;
  }
  aumento = valor * (percent / 100);
  newValor = valor + aumento;
  return `Novo salario: ${newValor.toFixed(
    2
  )}, Reajuste ganho: ${aumento.toFixed(2)}, Em porcentagem: ${percent.toFixed(
    2
  )}%`;
}
console.log(newSalario(400));
console.log(newSalario(800.01));
console.log(newSalario(2000));

//4)---------------------------------
console.log("EX4");
function palindromo(palavra) {
  p1 = palavra;
  p2 = palavra.split("").reverse().join("");
  if (p1.toLowerCase() == p2.toLowerCase()) {
    return true;
  }
  return false;
}
console.log(palindromo("arara"));
