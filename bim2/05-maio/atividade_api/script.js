const isbn = document.getElementById("isbn").value
const url = `https://brasilapi.com.br/api/isbn/v1/${isbn}`

function buscarLivro(){
    fetch(url)
        .then((resposta)=>{return resposta.json()})
        .then((dados))

}