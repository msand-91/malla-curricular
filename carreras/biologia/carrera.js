/* ============================================================================
   carrera.js — qué carrera es esta copia de la app.
   Lo leen la app (título, clave de guardado) y las herramientas de línea de
   comandos (qué plan consultar en el SIA). Todo lo demás es genérico.
   ========================================================================== */
const CARRERA = {
  nombre: 'Biología',
  titulo: 'Malla Curricular · Pregrado en Biología',
  subtitulo: 'Universidad Nacional de Colombia · Sede Bogotá · 163 créditos (+12 de inglés)',
  logo: '🌿',
  slug: 'biologia',
  plan: '2513',                                  // código del plan de estudios en el SIA
  sede: /1101 SEDE BOGOT/,                       // textos de las listas del Catálogo del SIA
  facultad: /2050 FACULTAD DE CIENCIAS$/,
  claveLS: 'mallaBiologiaUNAL.v1',               // clave de localStorage
  archivoAvance: 'avance-malla-biologia.json',
  agente: 'malla-unal/1.0',
  textos: {
    buscaCatalogo: 'Buscar por tema: aves, genética, suelos, marina…',
    catalogo: 'Las optativas del plan según el Catálogo del SIA (18 de fundamentación y 44 disciplinares), con sus <b>créditos reales</b>, la descripción oficial y el profesor mejor calificado de cada una. La búsqueda entra también en las descripciones, así que puedes buscar por tema. Para asignar una optativa a un cupo, ábrelo desde la pestaña <b>Malla</b>. Los grupos (botánica, zoología…) son una agrupación por tema, no oficial.',
    electivas: '<b>Electivas ≠ optativas.</b> Estas son las de <b>libre elección</b>: los 32 créditos que puedes llenar con casi cualquier asignatura de la Universidad. Las <b>optativas</b> son otra cosa — van a los créditos de fundamentación optativa y a los del componente disciplinar, y están en la pestaña anterior.',
    ejemploPar: 'una teórica y su laboratorio',
    fuentes: '<b>Malla Curricular Programa de Pregrado en Biología</b> — diagrama oficial de la Facultad de Ciencias (semestres, cupos y créditos por semestre; no trae códigos ni prerrequisitos).<br><b>Catálogo de asignaturas del SIA, plan 2513</b> — códigos, nombres, créditos y tipología de las 93 asignaturas del plan; de ahí sale todo el catálogo de optativas.<br><b>Acuerdo del plan de estudios</b> (régimen legal UNAL, doc. 90037) — prerrequisitos, correquisitos y créditos exigidos por agrupación, transcritos de sus tablas.<br><b>losestudiantes.com</b> — profesores y reseñas de cada asignatura.<br>',
    notas: 'Abajo está lo que se sabe de cada fuente, lo que falta por confirmar y qué dato usa esta app.',
  },
};
