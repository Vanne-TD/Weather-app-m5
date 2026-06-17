document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const app = new WeatherApp(new ApiClient());
  await app.cargarDetalleLugar(id);
});

