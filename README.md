# 🌤️ BioClima - Aplicación de Clima

Aplicación web desarrollada con JavaScript ES6+, Programación Orientada a Objetos (POO) y consumo real de la API de OpenWeather, que muestra el clima actual y el pronóstico para localidades de la Región del Biobío, Chile.
Toda la interfaz se genera dinámicamente desde JavaScript.

## 📋 Descripción

BioClima es una aplicación responsive que obtiene datos meteorológicos reales mediante la API de OpenWeather. 
Incluye:

- listado dinámico de localidades en `index.html`.
- tarjetas con clima actual.
- navegación hacia detalles mediante `detalles.html?id=<id>`(página `detalles.html` que recibe `id` por URL)
- módulo de ayuda interactivo disponible en todas las páginas.
- estadísticas semanales generadas desde datos reales.

## 🚀 Novedades en JavaScript ES6+

El proyecto utiliza JavaScript moderno y una arquitectura basada en clases:

✔ class ApiClient (assets/js/apiClient.js)
- Conecta con OpenWeather
- Obtiene clima actual y pronóstico
- Maneja errores con try/catch
- Devuelve datos listos para usar

✔ class WeatherApp (assets/js/weatherApp.js)
- Define las localidades (id, nombre, lat, lon)
- Gestiona la carga de datos
- Renderiza Home y Detalles
- Calcula estadísticas
- Genera alertas simples
- Controla la lógica principal de la app

✔ Otras características ES6+
- async/await
- fetch con manejo de errores
- URLSearchParams para leer parámetros
- Template literals para HTML dinámico
- Arrow functions
- Métodos de array (map, reduce, filter)
- Spread operator

## 🧠 Lógica de funcionamiento

✔ Home (home.js)

- Inicializa la app
- Solicita clima actual de cada localidad
- Renderiza tarjetas dinámicas
- Cada card enlaza a detalles.html?id=<id>

✔ Detalles (detalles.js)

Solicita:
  - clima actual
  - pronóstico en bloques de 3 horas

Renderiza:
  - temperatura actual
  - sensación térmica
  - humedad y viento
  - icono meteorológico
  - pronóstico extendido
  - estadísticas semanales
  - resumen textual
  - alertas simples, por ejemplo:
     - semana calurosa
     - semana lluviosa

✔ Manejo de errores
- Si la API falla, la app muestra un mensaje visible en pantalla.

## 📁 Estructura del proyecto

```
proyecto-clima-m5/
├── index.html                 # Página principal con listado de ciudades
├── about.html                 # Página del proyecto
├── detalles.html              # Página de detalle que recibe `id` en la URL
├── README.md                  # Documentación del proyecto
├── assets/
│   ├── css/
│   │   └── main.css           # Estilos compilados desde Sass
│   ├── img/
│   │   ├── cielo-azul-fondo-clima-nubes_261642-70.avif
│   │   └── iconos-clima-nublado-lluvioso-soleado.png
│   └── js/
│       ├── apiClient.js       # Cliente de OpenWeather
│       ├── weatherApp.js      # Lógica principal de la app
│       ├── home.js            # Inicializa el home y renderiza las cards
│       ├── detalles.js        # Carga y renderiza la página de detalle
│       └── script.js          # Panel de ayuda y comportamiento común
├── sass/                      # Código Sass fuente (arquitectura 7-1)
│   ├── abstracts/
│   ├── base/
│   ├── components/
│   ├── layout/
│   ├── pages/
│   ├── themes/
│   ├── vendors/
│   └── main.scss
```

## ✨ Características principales

- Carga de clima en tiempo real desde OpenWeather.
- Listado dinámico de localidades.
- Detalles con pronóstico en bloques de 3 horas.
- Estadísticas semanales automáticas.
- Diseño responsive con Bootstrap 5.3.8.
- Alertas simples basadas en reglas.
- Panel de ayuda interactivo.
- Arquitectura Sass 7-1 para estilos.
- DOM completamente dinámico

## 🛠️ Tecnologías utilizadas

- HTML5 semántico
- CSS3 + BEM
- Sass (arquitectura 7-1)
- JavaScript ES6+
- Programación Orientada a Objetos (POO)
- Bootstrap 5.3.8
- Fetch API + async/await
- OpenWeather API
- AVIF para optimización de imágenes

## 📌 Uso

1. Abre `index.html` en tu navegador.
2. El home cargará automáticamente el clima actual de cada localidad.
3. Haz clic en "Ver más" para abrir `detalles.html?id=<id>` con información completa.

## �️ Ejecutar localmente

- Con Python 3:
  - `python -m http.server 8000`
  - Abre `http://localhost:8000` en tu navegador.
- Con la extensión Live Server en VS Code:
  - instala Live Server (extensión)
  - haz clic en "Go Live"

Esto asegura que las solicitudes a la API y los recursos estáticos se carguen correctamente.

## �💡 Notas importantes

- `detalles.html` requiere del parámetro `id` en la URL.
- El `id` debe corresponder a una localidad definida en `assets/js/weatherApp.js`.
- Si la API no responde, el proyecto muestra un mensaje de error en consola/pantalla.

## 📚 Desarrollo

- Si editas estilos, modifica archivos en `sass/` y compila con  `sass --watch assets/css/main.css`.
- El código está preparado para futuras mejoras como:
  - búsqueda de localidades
  - pronóstico extendido
  - mejor manejo de errores y carga visual

## 🤝 Contribuciones

Proyecto desarrollado en el Bootcamp Front End. Las mejoras son bienvenidas.

## 📄 Licencia
Este proyecto es de uso educativo.

Para acceder al repositorio en Github--> [gh Vanne-TD/Weather-app-m5](https://github.com/Vanne-TD/Weather-app-m5.git)


---

**Creado durante:** Bootcamp Front End Trainee
**Última actualización:** Junio 2026