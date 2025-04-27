// getElementById
function capturarComId() {
  var titulo = document.getElementById("tituloPrincipal");
  titulo.style.color = "red";
}

// getElementsByTagName
function capturarComTag() {
  var todosParagrafos = document.getElementsByTagName("p");
  for (var i = 0; i < todosParagrafos.length; i++) {
    todosParagrafos[i].style.fontSize = "18px";
  }
}

// getElementsByClassName
function capturarComClasse() {
  var paragrafosComClasse = document.getElementsByClassName("minhaClasse");
  for (var i = 0; i < paragrafosComClasse.length; i++) {
    paragrafosComClasse[i].style.fontWeight = "bold";
  }
}

// querySelector
function capturarComQuerySelector() {
  var primeiroParagrafoComClasse = document.querySelector(".minhaClasse");
  primeiroParagrafoComClasse.style.backgroundColor = "yellow";
}

// querySelectorAll
function capturarComQuerySelectorAll() {
  var todosOsParagrafos = document.querySelectorAll("p");
  todosOsParagrafos.forEach(function (paragrafo) {
    paragrafo.style.fontStyle = "italic";
  });
}
