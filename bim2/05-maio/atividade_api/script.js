function buscarLivro() {
  const isbn = document.getElementById("isbn").value;
  const url = `https://brasilapi.com.br/api/isbn/v1/${isbn}`;
  
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.name) {
        alert("ISBN não encontrado.");
        return;
      }
      document.getElementById("titulo").value = data.title;
      document.getElementById("autor").value = data.authors;
      document.getElementById("publicadora").value = data.publisher;
      document.getElementById("ano").value = data.year;
      document.getElementById("paginas").value = data.page_count;
      document.getElementById("localizacao").value = data.location;
    })
    .catch((error) => {
      console.error(error);
      alert("Erro ao buscar o ISBN. Tente novamente mais tarde.");
    });
}
