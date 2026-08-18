# Contexto del proyecto `mallacurricular`

Documento de traspaso para otra sesión de trabajo (p. ej. `copilatorioquimico`).
Ruta absoluta: `/home/msand91/proyectos/mallacurricular`

---

## Qué es

App web para planear el avance en el **pregrado de Química de la Universidad Nacional
de Colombia, sede Bogotá**. Sirve para marcar lo aprobado, ver qué se puede inscribir,
elegir optativas y electivas, y generar un plan de los semestres que faltan respetando
prerrequisitos y correquisitos.

Es **HTML + CSS + JavaScript sin dependencias**: se abre con doble clic en `index.html`,
funciona sin servidor y sin conexión. El avance se guarda en `localStorage` del navegador
(se puede exportar/importar como `.json`).

Publicada también como página con enlace propio:
<https://claude.ai/code/artifact/dbc29dde-0158-42e1-a898-73ae8fef5a6f>
(privada: solo se abre con la cuenta `jorgeivansandoval@gmail.com`, o compartiéndola desde
el menú de la propia página).

## El plan de estudios en números

**158 créditos**, 53 elementos en la malla (34 asignaturas con código + 19 cupos genéricos):

| Componente | Créditos | Cupos |
|---|---:|---:|
| Fundamentación obligatoria | 40 | — |
| Fundamentación optativa | 3 | 1 |
| Disciplinar obligatoria | 57 | — |
| Disciplinar optativa | 18 | 7 |
| Trabajo de grado | 8 | — |
| Libre elección (electivas) | 32 | 11 |

**Optativas ≠ electivas**, y es una distinción que importa: las *optativas* llenan los 3
créditos de fundamentación optativa y los 18 de disciplinar optativa (por área de química);
las *electivas* son los 32 créditos de libre elección, que admiten casi cualquier asignatura
de la Universidad — **incluidas optativas que se cursen de más**.

## Fuentes de datos y su fiabilidad

| Fuente | Qué aporta | Estado |
|---|---|---|
| `malla_oficial.pdf` (Facultad de Ciencias) | Semestres, créditos, prerrequisitos | Autoritativo, pero con erratas |
| `malla_apoyo.pdf` (Grupos de Estudio Autónomo) | Grafo de dependencias, códigos faltantes, catálogo de optativas | Complementario, con erratas propias |
| **SIA público** (`siabog.unal.edu.co`) | Créditos reales, descripción, temario, vigencia, planes relacionados | Autoritativo. «Contenido de asignaturas» (a veces da 502) |
| **Catálogo de asignaturas del SIA** (`sia.unal.edu.co/Catalogo/…`) | Oferta del semestre: grupos, profesores, horarios, salones, cupos, por plan y tipología | Autoritativo. Es ADF; se consulta con `herramientas/catalogo-sia.js` |
| **losestudiantes.com** | Profesores por materia, calificación, nota promedio, una reseña pública | De terceros, útil como contraste |

Los dos PDF **se contradicen en varios códigos**. Todas las diferencias están documentadas en
`INCONSISTENCIAS` (13 entradas) dentro de `js/datos.js`, y se muestran en la pestaña
*Notas y fuentes* de la app. Hallazgos que valen para cualquier trabajo con estos datos:

- **Química Estructural es `2015599`**, no `2029267` como imprime el PDF oficial (ese código
  pertenece al Lab. de Electroquímica Analítica). Confirmado contra el SIA y losestudiantes.
- Códigos que el PDF oficial no imprime y se recuperaron: `1000028` (Principios de Química
  Inorgánica), `2015587` (Lab. Química Orgánica II), `2015589` (Lab. Química Inorgánica).
- El PDF de apoyo **repite cinco códigos** en asignaturas distintas. Se resolvieron contra
  losestudiantes: `2015734`→Programación de computadores, `2015709`→Comunicación oral y escrita,
  `2016139`→Música y sociedad, `2015600`→Química metalorgánica, `2022919`→Lab. química agrícola.
  Las demás que los llevaban tienen el código mal y su código real no aparece en ninguna malla.
- `2015540` **no es Mineralogía**, es «Acción colectiva y movimientos sociales».
- Las asignaturas con código `1000xxx` **no tienen ficha en el catálogo público del SIA**
  (14 de las 34 de la malla). Existen, pero la UNAL no publica su contenido ahí.

### Cambios de requisitos vigentes (julio 2026)

Tres laboratorios pasaron de **correquisito a prerrequisito** de su teórica, según reportó
la persona usuaria. Los PDF todavía los muestran como correquisitos:

- Lab. de Electroquímica Analítica → exige **Electroquímica Analítica** aprobada
- Lab. de Métodos Ópticos → exige **Fundamentos de Espectroscopía**
- Laboratorios optativos de cromatografía → exigen **Cromatografía**

Consecuencia: ya no cabían en el semestre que les asigna la malla impresa, así que **la malla
por defecto se reordenó** al semestre más temprano en que son posibles: Lab. de Métodos Ópticos
IV→V, Lab. de Electroquímica Analítica V→VI, Optativa de Química Analítica VI→VII. De paso se
corrigió un problema anterior: la Optativa de Bioquímica exigía el Lab. de Bioquímica estando
ambos en VIII, así que pasó al IX, y una electiva bajó del IX al VIII para compensar.

Resultado: 158 créditos intactos, semestres I–IX entre 15 y 18 créditos, y **ninguna asignatura
por delante de sus requisitos**. Las movidas llevan el campo `semPDF` con el semestre que les da
la malla impresa, y lo muestran en su ficha.

## Estructura del código

```
index.html                     estructura de la interfaz (7 pestañas)
css/estilos.css                estilos, tema claro/oscuro, responsive
js/datos.js                    PLAN_BASE, CATALOGO (67 optativas), INCONSISTENCIAS  [a mano]
js/app.js                      motor de prerrequisitos, planificador, editor, UI
js/sia.js                      77 fichas del SIA (75 con descripción)          [generado]
losestudiantes.js              83 materias, 1087 profesores, 995 con reseña   [generado]
js/electivas.js                117 electivas de libre elección (116 vigentes)  [generado]
js/oferta.js                   oferta del semestre: plan 2519 + libre elección 2CLE, con grupos y horarios  [generado]
datos/electivas-listado.txt    listado copiado a mano del Departamento de Electivas
herramientas/*.js              scripts de línea de comandos (ver abajo)
tests/logica.test.js           integridad de datos + validación del planificador
tests/ui.test.js               interfaz completa con jsdom
dist/*.html                    dos paquetes autocontenidos (~1 MB)
```

`js/datos.js` es el **único archivo de datos escrito a mano**. Los otros tres se regeneran.

### Herramientas

```bash
node herramientas/estado-sia.js                    # ¿qué servicios del SIA responden?
node herramientas/sia.js <código|texto>            # consultar el catálogo del SIA
node herramientas/catalogo-sia.js sincronizar      # oferta del semestre (grupos, horarios, cupos) → js/oferta.js
node herramientas/catalogo-sia.js ver <código>     # grupos y horarios de una asignatura
node herramientas/verificar-losestudiantes.js      # códigos y enlaces
node herramientas/sincronizar-profesores.js        # profesores y reseñas (solo fetch)
node herramientas/sincronizar-profesores.js --fichas  # solo calificaciones y reseñas (fetch)
node herramientas/electivas.js importar            # lee datos/electivas-listado.txt y lo valida
node herramientas/empaquetar.js                    # genera dist/
node tests/logica.test.js && node tests/ui.test.js # pruebas
```

Dependencias solo para desarrollo: `npm install jsdom --no-save`. La app en sí no necesita nada.

## El planificador

`planificar(maxCr, modo, respetarNivel)` en `js/app.js` genera los semestres que faltan:

- Respeta prerrequisitos y correquisitos, y **agrupa los pares que deben inscribirse juntos**.
- Modo *ruta crítica*: prioriza por profundidad en el grafo de dependencias (de qué depende más).
- Modo *orden de la malla*: sigue el semestre sugerido.
- `respetarNivel` evita programar una optativa de 8º semestre en el primero solo porque no
  tiene prerrequisitos formales.

Las pruebas verifican en 8 escenarios que el plan generado no viole ningún requisito, no exceda
el tope de créditos y cubra todas las asignaturas.

## Límites conocidos

- **Los horarios ya están (agosto 2026), pero cacheados.** El *Buscador de cursos* sigue en
  mantenimiento, pero el *Catálogo de asignaturas* en la ruta `/Catalogo/` responde sin sesión y
  trae grupos, profesores, horarios, salones y cupos. `herramientas/catalogo-sia.js` lo consulta
  reproduciendo las peticiones ADF (claves: `Adf-Window-Id=winnoloop`, POST a la ruta sin
  `;PortalJSESSION`, ViewState encadenado, User-Agent que NO sea de navegador o ADF devuelve una
  página «loopback»). Los cupos son los del día de la sincronización. La pestaña **Horario** usa
  esos datos: asignaturas «cursando» + añadidas a mano, un grupo por actividad, semana con cruces.
- **No hay conexión en vivo con el SIA ni con losestudiantes.** Ninguno envía cabeceras CORS,
  así que el navegador bloquea cualquier consulta desde la página — y más aún desde `file://`.
  Todos los datos externos se traen desde la línea de comandos y quedan cacheados en archivos `.js`.
- **Las reseñas están limitadas a la pública.** losestudiantes oculta el resto tras iniciar sesión
  (típicamente 1 visible de varias).
- **El listado de electivas se copia a mano.** Su página declara 120 materias pero solo entrega 18
  sin sesión; el resto llega por carga perezosa que no se puede disparar automáticamente.
- **El avance se guarda por navegador.** No se sincroniza entre dispositivos; hay exportar/importar.
- **Nunca se piden credenciales del SIA**, y no se debe hacer.

## Cosas que se pueden reutilizar

Si el otro proyecto necesita datos de asignaturas de la UNAL, aquí ya están resueltos:

- `herramientas/sia.js` — consulta el catálogo público del SIA (búsqueda por nombre o código);
  maneja la codificación ISO-8859-1 y las entidades HTML del sitio, que es la parte molesta.
- `js/sia.js`, `js/electivas.js`, `js/losestudiantes.js` — datos ya descargados y validados.
- El criterio del SIA para libre elección: en «Planes Relacionados», los códigos `2PEL`
  (Programa de Electivas) o `2CLE` (Componente de Libre Elección). El plan de Química es `2519`.
