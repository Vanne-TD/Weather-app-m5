// ===============================================
// HOME: GENERAR LAS CARDS DINÁMICAMENTE
// ===============================================
document.addEventListener("DOMContentLoaded", async () => {
  const app = new WeatherApp(new ApiClient());
  await app.cargarLugares();
  app.renderHome();
});
