# ❤️ 22 días para nosotros

Página web romántica con 22 sorpresas y desbloqueo automático por fecha.

## Fecha configurada

- Inicio: 1 de septiembre de 2026
- Aniversario: 22 de septiembre de 2026
- Zona horaria utilizada: Ecuador (America/Guayaquil)

## Estructura

nuestros_22_dias/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── foto01.jpg
│   ├── foto02.jpg
│   ├── foto03.jpg
│   └── foto-final.jpg
└── music/
    └── nuestra-cancion.mp3

Las imágenes y la música son opcionales. Puedes reemplazarlas con tus archivos.

## Cómo abrirla

1. Extrae la carpeta.
2. Coloca tus fotos en `images/`.
3. Coloca tu canción en `music/nuestra-cancion.mp3`.
4. Abre `index.html` en Chrome, Edge o Firefox.

## Cómo personalizar los 22 días

Abre `script.js` y busca:

const surprises = [

Cada objeto corresponde a un día.

Puedes cambiar:
- icon
- title
- text
- image

Ejemplo:

{
  icon: "📸",
  title: "Nuestro primer viaje",
  text: "Aquí escribes la historia...",
  image: "images/mi-foto.jpg"
}

## Importante sobre la fecha

El código calcula el día utilizando la zona horaria `America/Guayaquil`.

El 1 de septiembre se desbloquea el Día 1.
El 2 de septiembre se desbloquean los días 1 y 2.
...
El 22 de septiembre quedan disponibles los 22 días.

Para probar un día futuro sin esperar, puedes cambiar temporalmente START_DATE en script.js o modificar getCurrentDay(), pero vuelve a dejar los valores originales antes de entregársela.
