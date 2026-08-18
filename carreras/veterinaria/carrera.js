/* ============================================================================
   carrera.js — Medicina Veterinaria (plan 2555), UNAL Sede Bogotá.
   Lo leen la app (título, textos, clave de guardado) y las herramientas de
   línea de comandos (qué plan consultar en el SIA).
   ========================================================================== */
const CARRERA = {
  nombre: 'Medicina Veterinaria',
  titulo: 'Malla Curricular · Medicina Veterinaria',
  subtitulo: 'Universidad Nacional de Colombia · Sede Bogotá · 209 créditos · 12 semestres',
  tema: 'veterinaria',        // color, icono y fondo (js/temas.js)
  slug: 'veterinaria',
  plan: '2555',
  sede: /1101 SEDE BOGOT/,
  facultad: /2057 FACULTAD DE MEDICINA VETERINARIA/,
  claveLS: 'mallaVeterinariaUNAL.v1',
  archivoAvance: 'avance-malla-veterinaria.json',
  agente: 'malla-unal/1.0',
  textos: {
    buscaCatalogo: 'Buscar por tema: bovinos, porcina, peces, mercadeo…',
    catalogo: 'Las asignaturas <b>opcionales</b> del plan: la biología de fundamentación (eliges una de tres), las optativas de la agrupación Producción (6 créditos), los trabajos de campo (4 créditos) y las prácticas integradas. Con sus <b>créditos reales</b>, su descripción del SIA y sus prerrequisitos según el acuerdo. Para asignar una a un cupo, ábrelo desde la pestaña <b>Malla</b>.',
    electivas: '<b>Libre elección: 41 créditos</b>, de los cuales <b>20</b> son la Práctica integrada (semestre XI) y <b>6</b> las dos Líneas de profundización; los otros 15 los llenas con casi cualquier asignatura de la Universidad, que es lo que aparece en esta pestaña.',
    ejemploPar: 'Anatomía comparada e Histología y embriología',
    fuentes: '<b>Malla curricular de Medicina Veterinaria</b> — Facultad de Medicina Veterinaria y de Zootecnia: 12 semestres, agrupaciones y créditos por componente.<br><b>Acuerdo del plan de estudios</b> (con las modificaciones de los Acuerdos CF 80 de 2018, 85, 96, 97 y 101 de 2020 y 3 de 2023) — códigos, créditos, prerrequisitos y correquisitos de cada agrupación, transcritos de sus tablas.<br><b>Catálogo de asignaturas del SIA, plan 2555</b> — verificación de códigos y créditos, y oferta del semestre.<br><b>losestudiantes.com</b> — profesores y reseñas.<br>',
    notas: 'Abajo está de dónde sale cada dato, las diferencias entre el acuerdo y el catálogo actual del SIA, y qué usa esta app.',
  },
};
