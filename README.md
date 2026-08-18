# Mallas curriculares interactivas — UNAL Sede Bogotá

Una sola app para varias carreras: **Química** (plan 2519), **Biología** (2513), **Ingeniería de
Sistemas y Computación** (2A74) y **Medicina Veterinaria** (2555). Marca lo aprobado, mira qué
puedes inscribir, elige optativas, genera un plan de los semestres que faltan y **arma y optimiza
el horario con la oferta real del SIA**.

- Portada con el selector de carrera: [index.html](index.html) → `/quimica/`, `/biologia/`, `/sistemas/`, `/veterinaria/`.
- Sin servidor ni build: HTML + CSS + JS estáticos. El avance se guarda en el navegador, por carrera.

## Estructura

```
index.html                 portada (generada)
<slug>/index.html          la app de cada carrera (generada desde app/plantilla.html)
app/plantilla.html         la interfaz, una sola vez; los textos por carrera vienen de carrera.js
js/app.js  css/            motor, planificador, editor, horario, optimizador (genérico)
carreras/<slug>/           lo específico de cada carrera:
   carrera.js                nombre, plan del SIA, textos, clave de guardado   [a mano]
   datos.js                  plan de estudios, catálogo de optativas y notas    [a mano]
   oferta.js sia.js electivas.js losestudiantes.js   generados desde el SIA / losestudiantes
   fuentes/  tests/  CONTEXTO.md
herramientas/              scripts; todos aceptan --carrera=<slug>
tests/correr.js            corre las pruebas de todas las carreras
dist/                      paquetes autocontenidos por carrera
```

## Herramientas

```bash
node herramientas/generar.js                                # <slug>/index.html + portada
node herramientas/catalogo-sia.js --carrera=quimica plan    # asignaturas del plan en el SIA
node herramientas/catalogo-sia.js --carrera=quimica sincronizar   # oferta → carreras/quimica/oferta.js
node herramientas/catalogo-sia.js --carrera=quimica electivas     # electivas.js desde la libre elección
node herramientas/catalogo-sia.js --carrera=quimica fichas        # sia.js (créditos, descripción) desde oferta.js
node herramientas/sia.js --carrera=quimica enriquecer       # fichas completas cuando «Contenido de asignaturas» responda
node herramientas/verificar-losestudiantes.js --carrera=quimica --catalogo
node herramientas/sincronizar-profesores.js --carrera=quimica     # profesores y reseñas
node herramientas/estado-sia.js                              # ¿qué servicios del SIA responden?
node herramientas/empaquetar.js --carrera=quimica            # dist/malla-quimica.html
node tests/correr.js [--carrera=quimica]
```

Para añadir una carrera: crea `carreras/<slug>/carrera.js` y `datos.js`, corre `catalogo-sia.js
sincronizar`, `electivas`, `fichas` y `verificar-losestudiantes.js`, y luego `generar.js`.

---

---

## Cómo funciona la app (igual para todas las carreras)

Abre la página de tu carrera en el navegador. No necesita servidor ni conexión: el avance se guarda
en `localStorage` **por carrera**, y desde **Mi avance** puedes exportarlo e importarlo como `.json`
(útil para pasarlo de un dispositivo a otro, porque el guardado va por navegador y dominio).

| Pestaña | Para qué sirve |
|---|---|
| **Malla** | Todas las asignaturas en sus semestres. Clic en una para marcarla *cursando*, *aprobada* u *homologada / exenta*, asignarle una optativa, ver qué desbloquea y abrir sus profesores, reseñas y grupos del semestre. **✎ Editar malla** permite arrastrar entre semestres, cambiar créditos, código o requisitos, y añadir o quitar asignaturas; los cambios son diferencias sobre la malla oficial y **Restaurar malla original** las revierte sin perder el avance. |
| **Mi avance** | Créditos por componente contra los exigidos, cuántas puedes inscribir ya y semestres restantes. |
| **Plan sugerido** | Genera los semestres que faltan con tope de créditos configurable. **Ruta crítica** prioriza aquello de lo que más depende el resto; **Orden de la malla** sigue el semestre sugerido. Un bloque indivisible (una práctica de 20 créditos, unas rotaciones clínicas encadenadas) recibe su propio semestre. |
| **Optativas** | Las asignaturas opcionales del plan con créditos reales, descripción del SIA y sus prerrequisitos; el cupo al que asignes una hereda sus requisitos. |
| **Electivas** | Las de libre elección del componente 2CLE de la sede, con búsqueda por tema. |
| **Horario** | Arma el horario con la **oferta real del SIA** (grupos, profesores, salones y cupos): varios escenarios comparables, optimizador de grupos y **«¿Qué cabe en mis huecos?»**. |
| **Notas y fuentes** | De dónde sale cada dato y qué falta por confirmar. |

## Profesores y reseñas (losestudiantes.com)

Al abrir una asignatura verás los profesores que la dictan, con su calificación promedio, la nota
promedio que reportan quienes reseñan y la reseña pública de cada uno (texto, pros, contras, periodo
y dificultad).

Actualmente: **Química 83 materias y 1087 profesores** (995 con reseña), **Biología 76 y 950** (825),
**Sistemas 79 y 1327** (1166) y **Veterinaria 69 materias**. Actualizados el 2026-08-18.

```bash
node herramientas/verificar-losestudiantes.js --carrera=<slug> --catalogo   # códigos y enlaces
node herramientas/sincronizar-profesores.js --carrera=<slug>                # profesores y reseñas
node herramientas/sincronizar-profesores.js --carrera=<slug> --fichas       # solo calificaciones y reseñas
```

El primero resuelve a qué página corresponde cada código SIA. El segundo obtiene la lista de cada
materia (la página es Next.js y la trae en `__NEXT_DATA__`, así que basta un `fetch`; **ya no hace
falta Chrome**, como sí ocurría antes de agosto de 2026) y luego la ficha de cada profesor. Solo se
muestra la reseña pública: el resto pide sesión iniciada en el sitio, y losestudiantes.com no envía
cabeceras CORS, de ahí que todo se cachee en un archivo que la app carga como `<script>`.

## Optativas y electivas no son lo mismo

Las **optativas** llenan cupos concretos del plan (fundamentación optativa, disciplinares, líneas de
profundización); las **electivas** son los créditos de **libre elección**, que admiten casi cualquier
asignatura de la Universidad — incluidas optativas que curses de más. Cada carrera lo explica con sus
números en la pestaña correspondiente.

## Catálogo oficial del SIA

El catálogo público «Contenido de asignaturas» del SIA Bogotá es de libre acceso: **no pide
credenciales**. De ahí se traen los datos que los PDF no tienen — créditos reales, descripción,
temario y unidad académica — y quedan en `carreras/<slug>/sia.js`.

```bash
node herramientas/sia.js buscar <texto>                      # busca asignaturas por nombre
node herramientas/sia.js ver <código>                       # ficha completa de una
node herramientas/sia.js --carrera=<slug> enriquecer        # cruza la malla y el catálogo → sia.js
node herramientas/estado-sia.js                             # ¿qué servicios responden sin sesión?
```

### Oferta del semestre: grupos, horarios y cupos

El *Buscador de cursos* sigue en mantenimiento, pero el **Catálogo de asignaturas** en su ruta
nueva (`sia.unal.edu.co/Catalogo/…`) sí responde sin sesión y trae, por plan y tipología, cada
asignatura con sus grupos, profesores, horarios, salones y cupos. De ahí sale `oferta.js` de cada carrera,
que alimenta la pestaña **Horario** y el bloque «Oferta en el SIA» de cada ficha.

```bash
node herramientas/catalogo-sia.js --carrera=<slug> plan           # asignaturas del plan en el SIA
node herramientas/catalogo-sia.js --carrera=<slug> ver <código>   # grupos y horarios de una
node herramientas/catalogo-sia.js --carrera=<slug> libre [plan]   # libre elección: 2CLE de la sede, o de un plan
node herramientas/catalogo-sia.js --carrera=<slug> sincronizar    # descarga todo → oferta.js (~10 min)
```

Es una aplicación Oracle ADF sin URLs por asignatura; el script reproduce sus peticiones parciales
(POST con `Adf-Window-Id=winnoloop`, ViewState encadenado, sesión por cookie) sin necesitar Chrome.
Los detalles no obvios están comentados en la cabecera del script. Los cupos son los del día de la
consulta; conviene resincronizar cerca de la inscripción. Como el resto: acceso anónimo, **nunca
se piden credenciales**.

Los códigos `1000xxx` (Cálculo Diferencial, Química Orgánica I…) no tienen ficha en este catálogo:
aparecen como registros vacíos. No significa que no existan, solo que su contenido no está
publicado ahí.

## Compartir y abrir en el celular

```bash
node herramientas/empaquetar.js --carrera=<slug>
```

Genera dos archivos con todo dentro (CSS, JS, datos e imágenes embebidas), sin dependencias externas:

- `dist/malla-<slug>.html` — **para publicar.** Solo el contenido, sin `<html>`/`<head>`/`<body>`.
- `dist/malla-<slug>-autonoma.html` — **para mandar por chat o copiar al celular.** Documento completo
  con `<!doctype>` y `viewport`; se abre con doble clic, incluso sin internet.

## Fuentes

- **Mallas y acuerdos de plan de estudios** de cada programa (en `carreras/<slug>/fuentes/`):
  semestres, agrupaciones, créditos, prerrequisitos y correquisitos.
- **Catálogo de asignaturas del SIA** — códigos, créditos, tipologías y la oferta del semestre
  (grupos, horarios, salones y cupos). Acceso público: **nunca se piden credenciales**.
- **losestudiantes.com** — profesores, calificaciones y reseñas.

Cada carrera detalla en su pestaña **Notas y fuentes** las diferencias entre su acuerdo y el catálogo
actual del SIA. **Confirma siempre en el SIA antes de inscribir.**

## Pruebas

```bash
npm install jsdom --no-save   # solo para tests/ui.test.js
node tests/logica.test.js     # integridad de datos + validación del planificador
node tests/ui.test.js         # render e interacción con jsdom
```

Ninguna herramienta necesita navegador: todas usan `fetch`. Para las pruebas basta
`npm install jsdom --no-save`.

`logica.test.js` verifica que las referencias entre asignaturas existan, que los créditos por
componente cuadren con los 158 totales, y que en varios escenarios (desde cero, con semestres
aprobados, con distintos topes de crédito, y sobre una malla editada) el plan generado no viole
ningún prerrequisito ni correquisito y cubra todas las asignaturas. También cubre la edición:
mover, editar créditos, eliminar con limpieza de referencias, añadir, y detección de ciclos.

`ui.test.js` ejercita la interfaz completa con jsdom: render, marcar aprobadas, pestañas,
planificador, catálogo, filtros, arrastrar y soltar, los botones ‹ › de mover, el editor (incluidos
los casos que debe rechazar), restaurar la malla, y el panel de profesores con sus reseñas.
