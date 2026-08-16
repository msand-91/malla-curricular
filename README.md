# Malla curricular interactiva — Pregrado en Química, UNAL Bogotá

App web para planear el avance en el plan de estudios: marcar lo aprobado, ver
qué se puede inscribir, elegir optativas del catálogo y generar un plan de los
semestres que faltan respetando prerrequisitos y correquisitos.

Si vienes de otro proyecto y necesitas entender este de una sola lectura, empieza por
[CONTEXTO.md](CONTEXTO.md).

## Uso

Abre [index.html](index.html) directamente en el navegador (doble clic). No
necesita servidor ni conexión. El avance se guarda en `localStorage` del
navegador; desde **Mi avance** puedes exportarlo e importarlo como `.json`.

## Qué hace

| Pestaña | Para qué sirve |
|---|---|
| **Malla** | Las 53 asignaturas en sus 10 semestres. Clic en una para marcarla *cursando* / *aprobada*, asignarle una optativa, ver qué desbloquea y abrir sus profesores y reseñas. «Resaltar cadena» muestra todo lo que depende de ella. **✎ Editar malla** permite arrastrar asignaturas entre semestres, cambiar créditos, código o requisitos, y añadir o quitar asignaturas. |
| **Mi avance** | Créditos por componente contra los exigidos, cuántas asignaturas puedes inscribir ya, semestres restantes y las 4 asignaturas más críticas. |
| **Plan sugerido** | Genera semestre a semestre lo que queda, con tope de créditos configurable. **Ruta crítica** prioriza aquello de lo que más depende el resto; **Orden de la malla** sigue el semestre sugerido. |
| **Electivas** | Las 117 electivas de **libre elección** (los 32 créditos), contrastadas una a una con el SIA: vigencia, créditos, descripción. Búsqueda por tema y asignación a cupos con un botón. |
| **Optativas** | Las 67 optativas con sus **créditos reales**, la descripción y el contenido oficial del SIA, y el profesor mejor calificado de cada una. La búsqueda entra dentro de las descripciones, así que sirve para buscar por tema (*catálisis*, *enzimas*, *nanotubos*). |
| **Horario** | Arma el horario del semestre con la **oferta real del SIA**: grupos, profesores, salones y cupos. Entran solas las asignaturas marcadas *cursando*; puedes añadir cualquier otra. Eliges grupo y la semana se pinta con los cruces en rojo. |
| **Notas y fuentes** | Las diferencias entre los dos PDF y qué dato usa la app en cada caso. |

## Adaptar la malla

El botón **✎ Editar malla** entra en modo edición. Ahí puedes arrastrar cualquier asignatura a
otro semestre (incluso a uno nuevo al final), abrirla para cambiar nombre, código, créditos,
componente, prerrequisitos y correquisitos, o añadir y eliminar asignaturas.

Los cambios se guardan **como diferencias sobre la malla de los PDF**, nunca encima de ella: las
asignaturas movidas o editadas quedan marcadas con ✎ y **Restaurar malla original** las devuelve
todas a su sitio sin perder tu avance. El editor rechaza los ciclos de prerrequisitos
(A depende de B y B de A), y el planificador y los contadores de créditos se recalculan solos
sobre la malla que tengas.

## Profesores y reseñas (Los Estudiantes)

Al abrir cualquier asignatura verás **los profesores que la dictan**, con su calificación promedio,
la nota promedio que reportan quienes reseñan, y cuántas reseñas tiene cada uno. Los que tienen
reseña pública se despliegan para leerla ahí mismo, con sus pros, contras, periodo y dificultad.

Actualmente: **83 materias, 306 profesores, 273 con reseña pública.**

**Solo se muestra la reseña pública de cada profesor**; el resto pide sesión iniciada en el sitio
(suele ser 1 visible de varias). Y losestudiantes.com no envía cabeceras CORS, así que el navegador
bloquea cualquier consulta hecha desde otra página — más aún desde un archivo abierto con `file://`.
Por eso los datos se traen **una vez, desde la línea de comandos**, y quedan cacheados en
`js/losestudiantes.js`.

```bash
node herramientas/verificar-losestudiantes.js --catalogo   # códigos y enlaces  (fetch)
node herramientas/sincronizar-profesores.js                # todo              (necesita Chrome)
node herramientas/sincronizar-profesores.js --fichas       # solo calificaciones y reseñas (fetch)
```

El primero resuelve a qué página corresponde cada código SIA. El segundo obtiene los profesores en
dos fases: la lista de cada materia no viene en el HTML del servidor —se carga con JavaScript— así
que se renderiza con Chrome headless; luego pide la ficha de cada profesor, que esa sí es HTML del
servidor, para sacar calificación, nota promedio y la reseña pública. Con `--fichas` se salta la
primera fase y solo refresca la segunda: no necesita navegador y es mucho más rápido.
Todos trabajan de a una página con pausa entre peticiones.

El listado de cada materia muestra hasta unos 9 profesores, que es lo que publica el panel del
sitio; los demás se ven entrando al enlace.

De paso, el primer script sirve como **tercera fuente para validar los códigos**: así se
confirmaron los que la malla oficial no imprime y se resolvieron los cinco códigos que la malla de
apoyo repite (ver *Notas y fuentes* en la app).

## Optativas y electivas no son lo mismo

Tres bolsas distintas de créditos, y la app las separa:

| Tipo | Créditos | Cupos | Pestaña |
|---|---:|---:|---|
| Fundamentación optativa | 3 | 1 | **Optativas** |
| Disciplinar optativa | 18 | 7 | **Optativas** |
| Libre elección (electivas) | 32 | 11 | **Electivas** |

El catálogo de electivas se arma desde `datos/electivas-listado.txt` (copiado del Departamento de
Electivas de losestudiantes.com, porque su página declara 120 materias pero solo entrega 18 sin
sesión iniciada, y el resto llega por carga perezosa que no se puede disparar). Cada código se
contrasta luego con el SIA:

```bash
node herramientas/electivas.js importar          # lee el listado y lo valida contra el SIA
node herramientas/electivas.js buscar <tema>...  # añade más por tema
node herramientas/electivas.js listar            # muestra lo guardado
```

El SIA marca en «Planes Relacionados» las de libre elección con `2PEL PROGRAMA DE ELECTIVAS` o
`2CLE COMPONENTE DE LIBRE ELECCIÓN`, y las del plan de Química con `2519` (salen con ★).
De las 117 importadas: 116 vigentes, 1 caducada, 11 sin ficha pública.

Para actualizar el listado, vuelve a copiar la página y ejecuta `importar`.

## Catálogo oficial del SIA

El catálogo público «Contenido de asignaturas» del SIA Bogotá es de libre acceso: **no pide
credenciales**. De ahí se traen los datos que los PDF no tienen — créditos reales, descripción,
temario y unidad académica — y quedan en `js/sia.js`.

```bash
node herramientas/sia.js buscar <texto>    # busca asignaturas por nombre
node herramientas/sia.js ver <código>      # ficha completa de una
node herramientas/sia.js enriquecer        # cruza la malla y el catálogo → js/sia.js
node herramientas/estado-sia.js            # ¿qué servicios están disponibles sin sesión?
```

### Oferta del semestre: grupos, horarios y cupos

El *Buscador de cursos* sigue en mantenimiento, pero el **Catálogo de asignaturas** en su ruta
nueva (`sia.unal.edu.co/Catalogo/…`) sí responde sin sesión y trae, por plan y tipología, cada
asignatura con sus grupos, profesores, horarios, salones y cupos. De ahí sale `js/oferta.js`,
que alimenta la pestaña **Horario** y el bloque «Oferta en el SIA» de cada ficha.

```bash
node herramientas/catalogo-sia.js plan             # las 84 asignaturas del plan 2519 (sin libre elección)
node herramientas/catalogo-sia.js ver <código>     # grupos y horarios de una
node herramientas/catalogo-sia.js libre [plan]     # libre elección: componente 2CLE de la sede, o de un plan
node herramientas/catalogo-sia.js sincronizar      # descarga todo → js/oferta.js (unos 10 min)
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
node herramientas/empaquetar.js
```

Genera dos archivos, ambos con todo dentro y sin dependencias externas:

- `dist/malla-quimica.html` — **para publicar.** Solo el contenido, sin `<html>`/`<head>`/`<body>`,
  porque la plataforma de publicación pone su propio esqueleto.
- `dist/malla-quimica-autonoma.html` — **para mandar por chat o copiar al celular.** Documento
  completo con `<!doctype>` y `viewport`; se abre con doble clic, incluso sin internet.

Usa el segundo para compartir el archivo: sin la etiqueta `viewport`, un celular renderizaría la
página a ancho de escritorio y se vería diminuta.

Ojo: **el avance se guarda en cada navegador por separado**. Para pasarlo de un dispositivo a otro,
usa *Exportar avance* en la pestaña **Mi avance** e impórtalo en el otro.

## Estructura del plan

158 créditos: 43 de fundamentación (40 obligatorios + 3 optativos), 83
disciplinares (57 obligatorios + 18 optativos + 8 de trabajo de grado) y 32 de
libre elección.

## Archivos

- [index.html](index.html) — estructura de la interfaz
- [js/datos.js](js/datos.js) — plan de estudios, catálogo de optativas e inconsistencias documentadas
- [js/app.js](js/app.js) — motor de prerrequisitos, planificador, editor de malla y renderizado
- [js/losestudiantes.js](js/losestudiantes.js) — generado; código SIA → materia, profesores y reseñas
- [js/sia.js](js/sia.js) — generado; fichas oficiales (créditos, descripción, temario)
- [js/oferta.js](js/oferta.js) — generado; oferta del semestre (grupos, horarios, profesores, cupos)
- [herramientas/verificar-losestudiantes.js](herramientas/verificar-losestudiantes.js) — códigos y enlaces
- [herramientas/sincronizar-profesores.js](herramientas/sincronizar-profesores.js) — profesores y reseñas
- [herramientas/sia.js](herramientas/sia.js) — catálogo oficial de asignaturas
- [herramientas/catalogo-sia.js](herramientas/catalogo-sia.js) — oferta del semestre desde el Catálogo de asignaturas
- [herramientas/estado-sia.js](herramientas/estado-sia.js) — disponibilidad de los servicios públicos
- [herramientas/empaquetar.js](herramientas/empaquetar.js) — genera los archivos de `dist/`
- [css/estilos.css](css/estilos.css) — estilos (tema claro/oscuro)
- `malla_oficial.pdf`, `malla_apoyo.pdf` — fuentes

## Fuentes

- **Malla Curricular Pregrado Química** — Facultad de Ciencias, UNAL Sede Bogotá
  (semestres, créditos, prerrequisitos y correquisitos).
- **Tu malla curricular de confianza** — Grupos de Estudio Autónomo
  (grafo de dependencias, códigos que la malla oficial no imprime y catálogo de optativas).

- **losestudiantes.com** — profesores, calificaciones y reseñas; además sirvió como tercera fuente
  para verificar códigos.
- **Catálogo público del SIA Bogotá** — créditos, descripción y temario oficiales.
- **Catálogo de asignaturas del SIA** — oferta del semestre: grupos, horarios, profesores y cupos.

Los dos PDF no coinciden en varios códigos. La pestaña **Notas y
fuentes** lista cada diferencia y el criterio aplicado. **Confirma siempre en el
SIA antes de inscribir.**

## Pruebas

```bash
npm install jsdom --no-save   # solo para tests/ui.test.js
node tests/logica.test.js     # integridad de datos + validación del planificador
node tests/ui.test.js         # render e interacción con jsdom
```

`herramientas/sincronizar-profesores.js` y las capturas de pantalla necesitan además
`npm install puppeteer && npx puppeteer browsers install chrome`.

`logica.test.js` verifica que las referencias entre asignaturas existan, que los créditos por
componente cuadren con los 158 totales, y que en varios escenarios (desde cero, con semestres
aprobados, con distintos topes de crédito, y sobre una malla editada) el plan generado no viole
ningún prerrequisito ni correquisito y cubra todas las asignaturas. También cubre la edición:
mover, editar créditos, eliminar con limpieza de referencias, añadir, y detección de ciclos.

`ui.test.js` ejercita la interfaz completa con jsdom: render, marcar aprobadas, pestañas,
planificador, catálogo, filtros, arrastrar y soltar, los botones ‹ › de mover, el editor (incluidos
los casos que debe rechazar), restaurar la malla, y el panel de profesores con sus reseñas.
