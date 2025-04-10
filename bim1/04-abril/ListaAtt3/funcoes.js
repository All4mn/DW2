//1)
function coordenadas(x, y) {
  switch (true) {
    case x == 0 && y == 0:
      return "O ponto está na origem 0";
    case x == 0:
      return "O ponto está no eixo x";
    case y == 0:
      return "O ponto está no eixo y";
    case x > 0 && y > 0:
      return "O ponto está no primeiro quadrante";
    case x > 0 && y < 0:
      return "O ponto está no segundo quadrante";
    case x < 0 && y < 0:
      return "O ponto está no terceiro quadrante";
    case x < 0 && y > 0:
      return "O ponto está no quarto quadrante";
  }
}
console.log(coordenadas(0, 0));
console.log(coordenadas(2312, 0));
console.log(coordenadas(0, -533));
console.log(coordenadas(2312, -533));

//2)
function triangulo(x, y, z) {
  let ordem = [x, y, z];
  ordem.sort((a, b) => a - b);
}
