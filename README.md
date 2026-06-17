# 🌤️ Aplicación de Clima - Mi Proyecto

Una aplicación web moderna que muestra información del clima en diferentes ciudades de la región de Biobío, Chile.

## 📋 Descripción

**Proyecto Clima** es una aplicación web diseñada para mostrar el clima actual y el pronóstico semanal de ciudades de la región del Biobío, Chile. La temática se centra en localidades urbanas de la zona, con datos de temperatura, sensación térmica, estado del cielo, viento y humedad.

En la versión actual los datos se modelan localmente y la interfaz está pensada para integrarse fácilmente con una API meteorológica real en el futuro.

## 🧩 Modelo de Datos

El clima se organiza en un arreglo llamado `lugares` dentro de `assets/js/data.js`. Cada objeto de lugar contiene:

- `id` y `nombre` de la ciudad
- `tempActual`, `sensacion` y `estadoActual`
- `viento`, `humedad` e `icono`
- `pronosticoSemanal`: un arreglo de 7 días con `dia`, `min`, `max` y `estado`

La aplicación usa este modelo para generar las tarjetas de ciudades, la vista de detalles y el pronóstico semanal en cada localidad.

## 📊 Estadísticas calculadas

En esta versión la app calcula estadísticas semanales en `assets/js/detalles.js` a partir del `pronosticoSemanal` del lugar seleccionado:

- `Máxima semanal`: temperatura máxima entre los 7 días
- `Mínima semanal`: temperatura mínima entre los 7 días
- `Promedio semanal`: promedio de las temperaturas máximas de la semana

También muestra un resumen textual que describe el rango de temperaturas esperado para la semana.

## 🎨 Metodología de Estilos

La aplicación utiliza la metodología **BEM (Block, Element, Modifier)** para la nomenclatura de clases CSS, lo que facilita la mantenibilidad y escalabilidad del código de estilos.

## 🏗️ Estructura SASS

El proyecto emplea la arquitectura **7-1 de Sass**, que organiza los estilos en parciales modulares:

- **abstracts/**: Variables y mixins reutilizables.
- **base/**: Estilos base como reset, tipografía y generales.
- **components/**: Estilos para componentes específicos como botones, tarjetas de clima, etc.
- **layout/**: Estilos para el layout general (header, footer, main).
- **pages/**: Estilos específicos para páginas individuales (home, about).
- **themes/**: Temas y variaciones de color para css.
- **vendors/**: Estilos de bibliotecas externas como Bootstrap y jQuery UI.

## 🌍 Ciudades Disponibles

La aplicación incluye información sobre las siguientes ciudades:

- Antuco
- Chiguayante
- Concepción
- Coronel
- Lebu
- Los Ángeles
- Lota
- San Pedro de la Paz
- Santa Juana
- Talcahuano
- Tomé
- Yumbel

## 🏗️ Estructura del Proyecto

```
proyecto-clima/
├── home.html                      # Página principal del listado de ciudades
├── about.html                     # Página sobre el proyecto
├── detalles.html                  # Página de detalles que recibe un id por URL
├── assets/
│   ├── css/
│   │   ├── main.css               # Estilos compilados desde Sass
│   │   └── main.css.map           # Mapa de origen para depuración
│   ├── img/
│   │   ├── cielo-azul-fondo-clima-nubes_261642-70.avif
│   │   └── iconos-clima-nublado-lluvioso-soleado.png
│   └── js/
│       ├── data.js                # Datos de los lugares y pronóstico semanal
│       ├── home.js                # Lógica de la página home
│       ├── detalles.js            # Lógica de la página de detalles y estadísticas
│       └── script.js              # Lógica común / botón de ayuda
├── sass/                          # Código Sass fuente
│   ├── abstracts/
│   ├── base/
│   ├── components/
│   ├── layout/
│   ├── pages/
│   ├── themes/
│   ├── vendors/
│   └── main.scss                  # Archivo principal de Sass
└── README.md                      # Este archivo
```

## 🚀 Características

- ✨ Interfaz responsiva y moderna
- 🎨 Diseño atractivo con imágenes de fondo
- 📱 Compatible con dispositivos móviles
- 🔍 Búsqueda de ciudades
- 📊 Información detallada del clima por localidad
- 🎯 Navegación intuitiva

## 💻 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y diseño responsivo
- **Sass** - Preprocesador CSS para mantener estilos modulares y escalables
- **JavaScript (Vanilla)** - Interactividad
- **Bootstrap 5.3.8** - Framework de CSS para diseño responsivo
- **AVIF** - Formato de imagen optimizado

## 📖 Cómo Usar

1. **Abrir la aplicación**
   - Haz clic en `home.html` para acceder a la página principal.

2. **Navegar**
   - Utiliza la barra de navegación para moverte entre páginas.
   - Selecciona una ciudad para ver detalles específicos del clima.

3. **Ver detalles**
   - Cada ciudad tiene su propia página con información específica. En estos momentos se modificó para integrar JavaScript para preparla para integración de API futura, por lo que sólo hay una hoja que se modificará para que la misma interactúe para cada localidad.
   - Al abrir la página base, esta sólo cuenta con un modelado de la pagina final, para ver cómo queda con JavaScript es necesario que tenga al final de html? el id=numero de la localidad, a modo de ejemplo: http://127.0.0.1:3000/detalles.html?id=3. De esta forma se carga la configuracion realizada con JavaScript.
   - Si accedes desde el menú o desde las cards del home, lo anterior no aplica, ya que, ya están cargadas con su id para un mejor manejo de la app.

4. **Ver About**
   - La página "About" contiene información sobre el proyecto.

## 🎯 Páginas Principales

| Página | Descripción |
|--------|-------------|
| `home.html` | Página inicio con las ciudades disponibles |
| `about.html` | Información sobre el proyecto |
| `detalles-*.html` | Detalles específicos del clima de cada ciudad incluyendo un pronóstico semanal, estadística de la temperatura y resumen del clima del día |

## 🔧 Instalación

No requiere instalación para usarlo en el navegador. Simplemente:

1. Descarga o clona el repositorio
2. Abre `home.html` en tu navegador web
3. ¡Disfruta explorando el clima!

> Si trabajas en el desarrollo, los estilos se mantienen en el directorio `sass/` y se compilan en `assets/css/main.css`. 

## 📝 Desarrollo

El proyecto fue desarrollado como parte del Bootcamp Front End, demostrando habilidades en:

- Maquetación HTML
- Estilos CSS avanzados con Sass
- JavaScript vanilla
- Diseño responsivo
- Uso de frameworks modernos

Si editas estilos, modifica los archivos en `sass/` y vuelve a compilar para actualizar `assets/css/main.css`.

## 🤝 Contribuciones

Este proyecto fue desarrollado durante el bootcamp. Las sugerencias y mejoras son bienvenidas.

## 📄 Licencia

Este proyecto es de uso educativo.

Para acceder al repositorio en Github--> [gh Vanne-TD/weather-frontend-m4](https://github.com/Vanne-TD/Weather-frontend-m4.git)


---

**Creado durante:** Bootcamp Front End Trainee
**Última actualización:** Mayo 2026
