let nomeCompleto = document.getElementById("nome-completo");

function boasVindas(nome) {
  alert("Seja bem vindo " + nome);
}

document.getElementById("btn-boas-vindas").onclick = function () {
  boasVindas(nomeCompleto.value);
};
