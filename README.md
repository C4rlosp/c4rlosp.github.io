# Portfolio — Carlos Pérez | Network Engineer

Portafolio personal construido con React + react-i18next (ES/EN), desplegado en GitHub Pages.

---

## Estructura del proyecto

```
c4rlosp.github.io/
├── public/
│   ├── index.html              ← HTML base + fix de rutas para GitHub Pages
│   ├── 404.html                ← Fix para que /talks, /articles etc. no den 404
│   ├── favicon.svg             ← Ícono de la pestaña
│   └── (imágenes...)           ← Fotos, covers de artículos, etc.
├── src/
│   ├── i18n/
│   │   ├── es.json             ← Todos los textos en español
│   │   ├── en.json             ← Todos los textos en inglés
│   │   └── index.js            ← Configuración de idiomas
│   ├── components/
│   │   ├── Navbar.jsx          ← Barra de navegación
│   │   └── ArticlePage.jsx     ← Componente genérico que renderiza cualquier artículo
│   ├── pages/
│   │   ├── Home.jsx            ← Inicio + Sobre mí + Logros + Artículo destacado
│   │   ├── Projects.jsx        ← Proyectos de GitHub
│   │   ├── Talks.jsx           ← Charlas y presentaciones
│   │   ├── Articles.jsx        ← Lista de artículos publicados
│   │   ├── ArticleDetail.jsx   ← Página del artículo RPKI Ghost
│   │   └── Contact.jsx         ← Contacto y redes sociales
│   ├── App.js                  ← Rutas de la app
│   └── index.css               ← Todos los estilos
├── package.json
└── README.md
```

---

## Verificar que estás en el repo correcto

```bash
git remote -v
```

Debería ver:

```
origin  https://github.com/C4rlosp/c4rlosp.github.io.git (fetch)
origin  https://github.com/C4rlosp/c4rlosp.github.io.git (push)
```

Verifica la rama:

```bash
git branch
```

Deberías estar en `main`. Si no: `git checkout main`

---

## Correr el proyecto localmente

```bash
npm install       # solo la primera vez o si alguien agregó dependencias nuevas
npm start         # levanta el servidor en http://localhost:3000
```

---

## Modificar el contenido

Todo el texto está en dos archivos JSON:

- `src/i18n/es.json` — textos en español
- `src/i18n/en.json` — textos en inglés

Campos principales:

- `hero` — nombre, título, subtítulo
- `about` — bio
- `achievements` — logros con ícono, título y descripción
- `article` — artículo destacado en el inicio
- `projects.items` — proyectos (título, descripción, tags, link al repo)
- `talks.items` — charlas (año, título, evento, lugar, slides, video)
- `contact` — email, GitHub, LinkedIn

### Cambiar la foto de perfil

Pon la imagen en `public/` y en `src/pages/Home.jsx` cambia:

```jsx
<img src="/avatar-don-Carlos.jfif" alt="Carlos Perez" ... />
```

---

## Agregar un artículo nuevo

Son 4 pasos. El contenido va todo en los JSON, la página son 3 líneas.

### Paso 1 — Agregar contenido en los JSON

En `src/i18n/es.json` agrega una nueva clave (ej. `articulo2`). Luego haz lo mismo en `en.json` con el contenido en inglés:

```json
"articulo2": {
  "back": "← Volver a Artículos",
  "label": "Categoría",
  "author": "Por Carlos Pérez / NIC - CRIX Costa Rica",
  "date": "Mes Año",
  "title_part1": "Primera parte del título ",
  "title_part2": "segunda parte resaltada en cian",
  "content": [
    { "type": "lead",       "text": "Párrafo de introducción destacado." },
    { "type": "p",          "text": "Párrafo normal." },
    { "type": "quote",      "text": "Cita importante." },
    { "type": "p_italic",   "text": "Párrafo en cursiva." },
    { "type": "p_bold",     "text": "Párrafo en negrita." },
    { "type": "h2",         "text": "Título de sección grande" },
    { "type": "h3",         "text": "Subtítulo mediano" },
    { "type": "h4",         "text": "Subtítulo pequeño" },
    { "type": "image",      "src": "/mi-imagen.png", "alt": "descripción", "caption": "Figura 1 – ...", "subcaption": "Texto opcional", "terminal": false },
    { "type": "list",       "items": ["item 1", "item 2", "item 3"] },
    { "type": "conclusion", "title": "Conclusión", "text": "Texto de conclusión." },
    { "type": "final_quote","text": "Frase final centrada en cursiva." }
  ]
}
```

> Las imágenes van en la carpeta `public/` y se referencian como `"/nombre.png"`.

### Paso 2 — Crear la página

Crea `src/pages/Articulo2.jsx` con solo estas 5 líneas:

```jsx
import ArticlePage from '../components/ArticlePage';

export default function Articulo2() {
  return <ArticlePage articleKey="articulo2" />;
}
```

### Paso 3 — Agregar la ruta en App.js

En `src/App.js` agrega el import arriba y la ruta dentro de `<Routes>`:

```jsx
import Articulo2 from './pages/Articulo2';

<Route path="/article/articulo2" element={<Articulo2 />} />
```

### Paso 4 — Agregar la tarjeta en Articles.jsx

En `src/pages/Articles.jsx` agrega un objeto al array `articles`:

```js
{
  slug: '/article/articulo2',
  label: t('articulo2.label'),
  title: t('articulo2.title_part1') + t('articulo2.title_part2'),
  description: 'Descripción corta que aparece en la tarjeta.',
  cta: t('article.cta'),
  cover: '/mi-cover.png',
  tags: ['Tag1', 'Tag2'],
},
```

---

## Publicar cambios

```bash
git add .
git commit -m "descripción de lo que cambiaste"
git push origin main
npm run deploy
```

`npm run deploy` construye el sitio y lo publica en `https://c4rlosp.github.io`. Tarda un par de minutos en verse reflejado.

---

## Clonar el repo en una máquina nueva

```bash
git clone https://github.com/C4rlosp/c4rlosp.github.io.git
cd c4rlosp.github.io
npm install
npm start
```
