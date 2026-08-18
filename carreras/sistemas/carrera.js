/* ============================================================================
   carrera.js — Ingeniería de Sistemas y Computación (plan 2A74), UNAL Bogotá.
   Lo leen la app (título, textos, clave de guardado) y las herramientas de
   línea de comandos (qué plan consultar en el SIA). Todo lo demás es genérico.
   ========================================================================== */
const CARRERA = {
  nombre: 'Ingeniería de Sistemas y Computación',
  titulo: 'Malla Curricular · Ingeniería de Sistemas y Computación',
  subtitulo: 'Universidad Nacional de Colombia · Sede Bogotá · plan 2A74 (2023) · 165 créditos (+20 de nivelación)',
  tema: 'sistemas',        // color, icono y fondo (js/temas.js)
  slug: 'sistemas',
  plan: '2A74',
  sede: /1101 SEDE BOGOT/,
  facultad: /2055 FACULTAD DE INGENIER/,
  claveLS: 'mallaSistemasUNAL.v1',
  archivoAvance: 'avance-malla-sistemas.json',
  agente: 'malla-unal/1.0',
  textos: {
    buscaCatalogo: 'Buscar por tema: redes, aprendizaje, criptografía, finanzas…',
    catalogo: 'Las asignaturas «con opciones» del plan 2A74 según el Catálogo del SIA (20 de fundamentación y 38 disciplinares), con sus <b>créditos reales</b> y su descripción. Sirven para llenar los cupos de libre elección y para sustituir las casillas «con opciones» de la malla (edítalas desde su ficha). Los grupos por tema no son oficiales.',
    electivas: '<b>Electivas ≠ optativas.</b> Estas son las de <b>libre elección</b>: los 33 créditos que puedes llenar con casi cualquier asignatura de la Universidad. Las asignaturas <b>con opciones</b> del plan (fundamentación y disciplinares) están en la pestaña anterior.',
    ejemploPar: 'Programación orientada a objetos y Estructuras de datos',
    fuentes: '<b>Malla del plan de estudios 2A74 (2023)</b> — Área Curricular de Ingeniería de Sistemas e Industrial: semestres, códigos, créditos, agrupaciones y el grafo de prerrequisitos (Acuerdo 006 de 2023 del CF de Ingeniería).<br><b>PEP – anexos de rutas curriculares</b> (plan 2879, 2014): los 12 énfasis sugeridos.<br><b>Catálogo de asignaturas del SIA, plan 2A74</b> — códigos, créditos y tipología de las 98 asignaturas del plan y la oferta del semestre.<br><b>losestudiantes.com</b> — profesores y reseñas.<br>',
    notas: 'Abajo está lo que se sabe de cada fuente, lo que falta por confirmar y qué dato usa esta app.',
  },
};
