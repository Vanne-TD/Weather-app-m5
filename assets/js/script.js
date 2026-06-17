// ===============================
// BOTÓN DE AYUDA
// ===============================
const btnAyuda = document.getElementById("ayuda");
const panelAyuda = document.getElementById("panel-ayuda");
const cerrarAyuda = document.getElementById("cerrar-ayuda");

if (btnAyuda && panelAyuda && cerrarAyuda) {
  btnAyuda.addEventListener("click", () => {
    panelAyuda.classList.add("is-visible");
  });

  cerrarAyuda.addEventListener("click", () => {
    panelAyuda.classList.remove("is-visible");
  });
}

