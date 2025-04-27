var lamp = document.getElementById("lampada");

function mudar(lampada) {
  if (lampada.src.includes("off")) {
    lampada.src = "imgLamp/lampada-on.jpg";
  } else {
    lampada.src = "imgLamp/lampada-off.jpg";
  }
}

lamp.onclick = function () {
  mudar(lamp);
};
