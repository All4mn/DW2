import { useState } from 'react'
import './styles/global.css'
import './styles/theme.css'

function App() {
  return(
    <div class="container">
      <h1>Contador</h1>
      <div class="counter-display" id="counter">0</div>
      <div class="buttons">
        <button class="btn-decrease" onclick="decreaseCounter()">-</button>
        <button class="btn-increase" onclick="increaseCounter()">+</button>
      </div>
      <button class="btn-reset" onclick="resetCounter()">Reset</button>
    </div>
  )
}
export default App
