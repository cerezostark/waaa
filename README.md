# Guía para Personalizar y Desplegar tu Página de San Valentín

🌟 **Bienvenido/a** 🌟

Esta guía te ayudará a personalizar y desplegar tu propia página de San Valentín en GitHub Pages. No necesitas experiencia en programación, sigue los pasos y sorprende a esa persona especial. ❤️

---

## 1. Personalización de la Página

### 📚 Cambiar el Título de la Página

1. Abre el archivo `index.html` en un editor de texto.
2. Busca la línea:
   ```html
   <title>TE AMO</title>
   ```
3. Cambia `TE AMO` por el título que prefieras, por ejemplo:
   ```html
   <title>Feliz San Valentín, Mi Amor</title>
   ```
4. Guarda los cambios.

### 🎶 Modificar la Letra de la Canción

1. Abre `index.html`.
2. Busca la sección:
   ```html
   <div id="lyrics-container">
   ```
3. Modifica las líneas dentro de las etiquetas `<p class="lyric-line">`, por ejemplo:
   ```html
   <p class="lyric-line">Quiero</p>
   <p class="lyric-line">Decirte que te amo</p>
   <p class="lyric-line">Con todo mi corazón</p>
   ```
4. Guarda los cambios.

### 🎵 Cambiar la Cancion

1. Reemplaza el archivo `sin-magulliar.mp3` en la carpeta `song` con tu canción personalizada.
2. En `index.html`, busca:
   ```html
   <source src="song/sin-maquillar.mp3" type="audio/mpeg">
   ```
3. Cambia `sin-maquillar.mp3` por el nombre de tu archivo:
   ```html
   <source src="song/mi-cancion.mp3" type="audio/mpeg">
   ```
4. Guarda los cambios.

### ⏳ Ajustar los Tiempos de la Letra

1. Abre `index.js`.
2. Modifica los tiempos en la sección:
   ```javascript
   const lyricTimes = [
      0,      // "Quiero"
      2.5,    // "Parar un momento"
      // ... más tiempos
   ];
   ```
3. Ajusta los tiempos según tu canción.
4. Guarda los cambios.

---

## 2. Desplegar la Página en GitHub

### 📚 Crear un Repositorio en GitHub

1. Inicia sesión en [GitHub](https://github.com/) y crea un nuevo repositorio.
2. Asigna un nombre y configúuralo como público.
3. Haz clic en **Create repository**.

### 💪 Subir tu Proyecto a GitHub

1. Abre la carpeta de tu proyecto.
2. Ejecuta en la terminal:
   ```bash
   git init
   git add .
   git commit -m "Primer commit"
   git remote add origin https://github.com/tu-usuario/tu-repositorio.git
   git push -u origin main
   ```

### 💌 Configurar GitHub Pages

1. Ve a la pestaña **Settings** en tu repositorio.
2. Desplázate a **Pages**.
3. En **Source**, selecciona la rama `main` y guarda.
4. Espera unos minutos para obtener el enlace de tu página.