var vetor1 = [] //melhor
var vetor2 = new array()

var vetor = [1,2,3,4,5]
vetor.length = 3 //apaga os elementos do 3 para frente -----> saida: [1,2,3]
vetor.length = 0 // -----> saida: []
vetor.length = 5 // -----> saida: [ <5 empity> ]

//método join() (converte os elementos de um array em strings)
var a = [1,2,3] 
var a1 = a.join() // => "1,2,3" (usa a virgula como padrao)
var a2 = a.join(" ") // => "1 2 3"
var a3 = a.join("") // => "123"

//método reverse()
var b = [1,2,3]
b.reverse() // => [3,2,1]

//método sort() (ordena um array em ordem alfabética ou númerica por padrão)
var c = ["banana","cherry","apple"]
c.sort() // => ["apple","apple","cherry"]

//método concat() (cancatena elementos no array, incluso outros arrays)
//método slice() (corta um array)
let d = [1,2,3,4,5]
d.slice(0,3) // => [1,2,3]

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//1
function ordernar(vet){
    let vetor = vet
    for(let i = 0;i <= vetor.length;i++){
        for(let k = i+1;k <= vetor.length;k++){
            if (vetor[i]<vetor[k]){
                let aux = vetor[i]
                vetor[i] = vetor[k]
                vetor[k] = aux
            }
        } 
    }
    return vetor
}