import {supabaseClient} from "./supabaseClient"
import { useState } from "react"

function App() {

  const [tarefas,setTarefas] = useState([])

  //chamada assincrona
  const consultaTarefas = async ()=>{
    const data = await supabaseClient
                      .from('tarefas')
                      .select('*')
                      
    console.log(data)
    setTarefas(data)
  }

  return (
    <>
        <h1>React com Supabase</h1>
        <button onClick={consultaTarefas}>
          mostrar tarefas
          </button>

        <br />
        <br />
        
        <div>
          
        </div>
    </>
  )
}

export default App
