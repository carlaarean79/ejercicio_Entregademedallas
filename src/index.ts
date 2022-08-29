import "./styles.css";
let puest;
oNro = document.getElementById("puestonro");
let btn = document.getElementById("btn");
let para = document.getElementById("posicion");
let span = document.getElementById("puestonro");

let posicionDeLlegada: number = puestoNro.value;

btn.addEventListener("click", function () {
  if (puestoNro.value == 1) {
    console.log("Medalla de oro");
    para.innerText = "Posición N° 1. Recibe Medalla de oro";
  } else {
    if (puestoNro.value == 2) {
      console.log("Medalla de plata");
      para.innerText = "Posición N° 2. Recibe Medalla de plata";
    } else {
      if (puestoNro.value == 3) {
        console.log("medalla de broce");
        para.innerText = "Posición N° 3. Recibe Medalla de bronce";
      } else {
        console.log("Enregar mención por participar");
        para.innerText = "Entregar mención de participación";
      }
    }
  }
});
