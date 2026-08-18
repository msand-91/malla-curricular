/* ============================================================================
   carrera.js — Química (plan 2519), UNAL Sede Bogotá.
   Lo leen la app (título, textos, clave de guardado) y las herramientas de
   línea de comandos (qué plan consultar en el SIA). Todo lo demás es genérico.
   ========================================================================== */
const CARRERA = {
  nombre: 'Química',
  titulo: 'Malla Curricular · Pregrado en Química',
  subtitulo: 'Universidad Nacional de Colombia · Sede Bogotá · 158 créditos',
  tema: 'quimica',        // color, icono y fondo (js/temas.js)
  slug: 'quimica',
  plan: '2519',
  sede: /1101 SEDE BOGOT/,
  facultad: /2050 FACULTAD DE CIENCIAS$/,
  claveLS: 'mallaQuimicaUNAL.v1',
  archivoAvance: 'avance-malla-quimica.json',
  agente: 'malla-unal/1.0',
  textos: {
    buscaCatalogo: 'Buscar por tema: catálisis, nanotubos, enzimas…',
    catalogo: 'Las 67 optativas de la malla de apoyo, con sus <b>créditos reales</b>, la descripción y el contenido oficial del SIA, y el profesor mejor calificado de cada una. La búsqueda entra también en las descripciones, así que puedes buscar por tema. Para asignar una optativa a un cupo, ábrelo desde la pestaña <b>Malla</b>. Las marcadas con ⚠ tienen el código mal impreso en el PDF.',
    electivas: '<b>Electivas ≠ optativas.</b> Estas son las de <b>libre elección</b>: los 32 créditos que puedes llenar con casi cualquier asignatura de la Universidad. Las <b>optativas</b> son otra cosa — van a los 3 créditos de fundamentación optativa y a los 18 de disciplinar optativa, y están en la pestaña anterior.',
    ejemploPar: 'Electroquímica Analítica + su laboratorio',
    fuentes: '<b>Malla Curricular Pregrado Química.pdf</b> — documento oficial de la Facultad de Ciencias (semestres, créditos, prerrequisitos y correquisitos).<br><b>Malla completa.pdf</b> — «Tu malla curricular de confianza», Grupos de Estudio Autónomo (grafo de dependencias, códigos faltantes y catálogo completo de optativas).<br><b>losestudiantes.com</b> — tercera fuente, usada para verificar los códigos y para enlazar cada asignatura con sus profesores y reseñas.<br>',
    notas: 'Los dos documentos no coinciden en algunos códigos. Abajo está cada diferencia y qué dato usa esta app.',
  },
};
