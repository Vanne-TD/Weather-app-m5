// weatherApp.js
class WeatherApp {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.lugares = [
            { id: 1, nombre: "Yumbel", lat: -37.0833, lon: -72.5667 },
            { id: 2, nombre: "Los Ángeles", lat: -37.4697, lon: -72.3537 },
            { id: 3, nombre: "Santa Juana", lat: -37.1725, lon: -73.0033 },
            { id: 4, nombre: "Concepción", lat: -36.827, lon: -73.0503 },
            { id: 5, nombre: "Chiguayante", lat: -36.9167, lon: -73.0167 },
            { id: 6, nombre: "San Pedro de la Paz", lat: -36.8333, lon: -73.1167 },
            { id: 7, nombre: "Talcahuano", lat: -36.7167, lon: -73.1167 },
            { id: 8, nombre: "Tomé", lat: -36.6167, lon: -72.9667 },
            { id: 9, nombre: "Lota", lat: -37.0833, lon: -73.1667 },
            { id: 10, nombre: "Coronel", lat: -37.0167, lon: -73.1333 },
            { id: 11, nombre: "Lebu", lat: -37.6167, lon: -73.65 },
            { id: 12, nombre: "Antuco", lat: -37.3333, lon: -71.6833 },
        ];

        this.data = [];
    }

    // ============================
    // CARGAR CLIMA PARA HOME
    // ============================
    async cargarLugares() {
        const resultados = [];

        for (const lugar of this.lugares) {
            try {
                const clima = await this.apiClient.getClimaActual(lugar.lat, lugar.lon);

                if (clima) {
                    resultados.push({
                        id: lugar.id,
                        nombre: lugar.nombre,
                        tempActual: Math.round(clima.main.temp),
                        sensacion: Math.round(clima.main.feels_like),
                        estadoActual: clima.weather[0].description,
                        viento: `${clima.wind.speed} km/h`,
                        humedad: `${clima.main.humidity}%`,
                        icono: `https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`,
                    });
                }
            } catch (error) {
                console.error("Error cargando clima de:", lugar.nombre, error);
            }
        }

        this.data = resultados;
    }

    // ============================
    // RENDER HOME
    // ============================
    renderHome() {
        const contenedor = document.getElementById("contenedor-cards");
        contenedor.innerHTML = "";

        this.data.forEach((lugar) => {
            contenedor.innerHTML += `
        <div class="col-12 col-md-6 col-lg-3">
          <article class="card h-100 weather-card weather-card--bg text-light text-center shadow-sm">
            <div class="card-body p-4 d-flex flex-column">

              <h2 class="h4 mb-0">${lugar.nombre}</h2>

              <p class="weather-card__temp-display my-3">
                ${lugar.tempActual}°C
                <img src="${lugar.icono}" alt="Icono clima" class="weather-card__icon">
              </p>

              <p>Sensación: <strong>${lugar.sensacion}°C</strong></p>

            <p class="h5 fw-bold text-dark">${this.capitalizar(lugar.estadoActual)}</p>


              <div class="mt-auto pt-3">
                <a href="detalles.html?id=${lugar.id}" class="btn weather-card__button text-white w-75">
                  Ver más
                </a>
              </div>

            </div>
          </article>
        </div>
      `;
        });
    }

    capitalizar(texto) {
        return texto.charAt(0).toUpperCase() + texto.slice(1);
    }

    // ============================
    // CARGAR DETALLE
    // ============================
    async cargarDetalleLugar(id) {
        const lugar = this.lugares.find((l) => l.id === id);

        const clima = await this.apiClient.getClimaActual(lugar.lat, lugar.lon);
        const pronostico = await this.apiClient.getPronostico(lugar.lat, lugar.lon);

        if (!clima || !pronostico) {
            alert("Error al cargar datos");
            return;
        }

        this.renderDetalle(lugar, clima, pronostico);
    }

    // ============================
    // RENDER DETALLE
    // ============================
    renderDetalle(lugar, clima, pronostico) {
        document.getElementById("detalle-nombre").textContent = lugar.nombre;

        document.getElementById("detalle-temp").textContent =
            `${Math.round(clima.main.temp)}°C`;
        document.getElementById("detalle-icono").src =
            `https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`;
        document.getElementById("detalle-sensacion").textContent =
            `${Math.round(clima.main.feels_like)}°C`;
        document.getElementById("detalle-viento").textContent =
            `${clima.wind.speed} km/h`;
        document.getElementById("detalle-humedad").textContent =
            `${clima.main.humidity}%`;

        // PRONÓSTICO (primeros 7 bloques de 3 horas)
        const contenedor = document.getElementById("pronostico-semanal");
        contenedor.innerHTML = "";

        const dias = pronostico.list.slice(0, 7);

        dias.forEach((item) => {
            const fecha = new Date(item.dt * 1000);
            const dia = fecha.toLocaleDateString("es-ES", { weekday: "short" });

            contenedor.innerHTML += `
        <div class="col-12 col-md-4 col-lg-1">
          <article class="weather-weekly__day text-center">
            <p class="fw-bold mb-1 small">${dia}</p>
            <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png" width="40">
            <p class="small mb-0 mt-2">${Math.round(item.main.temp_max)}° / ${Math.round(item.main.temp_min)}°</p>
          </article>
        </div>
      `;
        });

        // ESTADÍSTICAS
        const stats = this.calcularEstadisticas(dias);
        document.getElementById("stats-max").textContent =
            `Máxima semanal: ${stats.max}°C`;
        document.getElementById("stats-min").textContent =
            `Mínima semanal: ${stats.min}°C`;
        document.getElementById("stats-prom").textContent =
            `Promedio semanal: ${stats.promedio}°C`;

        document.getElementById("resumen-clima").textContent =
            `Esta semana en ${clima.name} tendremos temperaturas entre ${stats.min}°C y ${stats.max}°C, con un promedio de ${stats.promedio}°C.`;
    }

    calcularEstadisticas(lista) {
        const max = Math.max(...lista.map((d) => d.main.temp_max));
        const min = Math.min(...lista.map((d) => d.main.temp_min));
        const promedio = (
            lista.reduce((acc, d) => acc + d.main.temp, 0) / lista.length
        ).toFixed(1);

        return { max, min, promedio };
    }
}
