import { useState } from "react";
import "./Calculo.css";

export default function Calcular() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);
  let resultado = "";

  if (imc < 18.5) {
    resultado = "Baixo peso";
  } else if (18.5 <= imc && imc < 24.9) {
    resultado = "Peso normal";
  } else if (24.9 <= imc && imc < 29.9) {
    resultado = "Excesso de peso";
  } else if (29.9 <= imc && imc < 34.9) {
    resultado = "Obesidade de classe 1";
  } else if (34.9 <= imc && imc < 39.9) {
    resultado = "Obesidade de classe 2";
  } else if (imc > 39.9) {
    resultado = "Obesidade de classe 3";
  }

  return (
    <div id="container">
      <div id="box">
        <div>
          <p>IMC</p>
          <input
            type="number"
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Peso (kg)"
          />
          <input
            type="number"
            onChange={(e) => setAltura(e.target.value / 100)}
            placeholder="Altura (cm)"
          />
        </div>
        <button
          className="Botao"
          onClick={() => {
            setImc((peso / (altura * altura)).toFixed(2));
          }}
        >
          Calcular IMC
        </button>
      </div>
      <div>
        <p>Seu IMC: {imc}</p>
        <p>Categoria: {resultado}</p>
      </div>
    </div>
  );
}
