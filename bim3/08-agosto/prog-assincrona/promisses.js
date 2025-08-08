
function buscarUsuario(){
    console.log("usuario encontrado")
}

buscarUsuario().then(
()=> console.log("executado")
).catch(
    ()=> console.log("falhou")
)