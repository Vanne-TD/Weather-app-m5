// apiClient.js
const API_KEY = "55639301e1b144878d64bc2def687854";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

class ApiClient {
async getClimaActual(lat, lon) {
  const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al obtener clima actual");
  return await res.json();
}

async getPronostico(lat, lon) {
  const url = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al obtener pronóstico");
  return await res.json();
}

}
