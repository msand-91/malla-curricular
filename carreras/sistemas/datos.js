/* ============================================================================
   datos.js — Ingeniería de Sistemas y Computación, plan 2A74 (2023), UNAL Bogotá
   Fuentes:
     - Malla del plan de estudios 2A74 (Área Curricular de Ing. de Sistemas e
       Industrial; Acuerdo 006 de 2023 del CF de Ingeniería): semestre, código,
       créditos, agrupación y componente de cada casilla, y el grafo de
       prerrequisitos (flechas con círculos numerados).
     - Catálogo de asignaturas del SIA (plan 2A74): tipología y créditos de las
       98 asignaturas del plan; con eso se verificaron códigos y créditos.
     - PEP (plan 2879, 2014): los 12 énfasis / rutas curriculares sugeridas.
   ========================================================================== */

/* --- Componentes de formación ------------------------------------------- */
/* La malla distingue «sin opciones» (fijas) y «con opciones» (sustituibles por
   una equivalente): fundamentación 15 + 36 = 51, disciplinar 54 + 27 = 81,
   libre elección 33 → 165. La tipología del SIA reparte lo disciplinar en 13
   obligatorias (39) + trabajo de grado (6) y el resto como optativas (36); aquí
   se sigue al SIA, que es lo que se aplica en la inscripción. Nivelación
   (Matemáticas Básicas, Lecto-Escritura, Inglés I–IV = 20) no cuenta.       */
const COMPONENTES = {
  FO: { id: 'FO', nombre: 'Fundamentación sin opciones', corto: 'Fund. fija', creditos: 15, color: '#e9b949' },
  FP: { id: 'FP', nombre: 'Fundamentación con opciones', corto: 'Fund. con opciones', creditos: 36, color: '#f6d992' },
  DO: { id: 'DO', nombre: 'Disciplinar obligatoria', corto: 'Disc. oblig.', creditos: 39, color: '#4f9d69' },
  DP: { id: 'DP', nombre: 'Disciplinar con opciones', corto: 'Disc. con opciones', creditos: 36, color: '#9fce9a' },
  TG: { id: 'TG', nombre: 'Trabajo de grado', corto: 'Trabajo de grado', creditos: 6, color: '#3f6fb5' },
  LE: { id: 'LE', nombre: 'Libre elección (electivas)', corto: 'Libre elección', creditos: 33, color: '#b07bc4' },
  NV: { id: 'NV', nombre: 'Nivelación (no cuenta en los créditos)', corto: 'Nivelación', creditos: 20, color: '#c9c9d4', noCuenta: true },
};

const TOTAL_CREDITOS = 165;

/* --- Agrupaciones (las de la malla) --------------------------------------- */
const AREAS = {
  matematicas: 'Matemáticas',
  probabilidad: 'Probabilidad y estadística',
  fisica: 'Física',
  ciencias_comp: 'Ciencias de la computación',
  economicas: 'Ciencias económicas y administrativas',
  software: 'Métodos y tecnologías de software',
  infraestructura: 'Infraestructura computacional, de comunicaciones y de información',
  comp_aplicada: 'Computación aplicada',
  inteligentes: 'Sistemas inteligentes',
  modelos: 'Sistemas, modelos, optimización y simulación',
  contexto: 'Contexto profesional y proyectos de ingeniería',
  grado: 'Trabajo de grado',
  idioma: 'Nivelación',
};

/* ============================================================================
   PLAN DE ESTUDIOS (la ruta estándar de la malla 2A74)
   ----------------------------------------------------------------------------
   Las casillas «con opciones» (comp FP / DP) traen la asignatura que sugiere la
   malla; se puede sustituir por una equivalente del catálogo editándola.
   pre / co: del grafo de la malla (todas las flechas de los semestres I–VIII).
   ========================================================================== */
const PLAN_BASE = [
  /* ---------------------------- Semestre I ------------------------------- */
  { id: '1000004', cod: '1000004', nombre: 'Cálculo diferencial', cr: 4, sem: 1, comp: 'FP', area: 'matematicas', pre: [], co: [],
    preEsp: 'Matemáticas Básicas (1000001) aprobada, o exención por el examen de admisión', nota: 'Casilla «con opciones»: el SIA admite también Cálculo diferencial en una variable (2016377).' },
  { id: '2025975', cod: '2025975', nombre: 'Introducción a la ingeniería de sistemas y computación', cr: 3, sem: 1, comp: 'DO', area: 'contexto', pre: [], co: [] },
  { id: '2015734', cod: '2015734', nombre: 'Programación de computadores', cr: 3, sem: 1, comp: 'DP', area: 'software', pre: [], co: [],
    nota: 'La malla la llama «Programación». Casilla «con opciones»: alternativa en el SIA, Introducción a las ciencias de la computación y a la programación (2026573).' },
  { id: '2016703', cod: '2016703', nombre: 'Pensamiento sistémico', cr: 3, sem: 1, comp: 'DO', area: 'modelos', pre: [], co: [] },
  { id: '1000089', cod: '1000089', nombre: 'Cátedra nacional de inducción y preparación para la vida universitaria', cr: 2, sem: 1, comp: 'LE', area: null, pre: [], co: [],
    nota: 'La malla la ubica como libre elección de 2 créditos en el primer semestre (código 1000089-B).' },
  { id: '1000001', cod: '1000001', nombre: 'Matemáticas Básicas', cr: 4, sem: 1, comp: 'NV', area: 'idioma', pre: [], co: [],
    nota: 'Nivelación: solo para quien la exige el examen de admisión. No cuenta en los 165 créditos.' },

  /* ---------------------------- Semestre II ------------------------------ */
  { id: '1000019', cod: '1000019', nombre: 'Fundamentos de mecánica', cr: 4, sem: 2, comp: 'FO', area: 'fisica', pre: ['1000004'], co: [] },
  { id: '1000005', cod: '1000005', nombre: 'Cálculo integral', cr: 4, sem: 2, comp: 'FP', area: 'matematicas', pre: ['1000004'], co: [],
    nota: 'Casilla «con opciones»: alternativa en el SIA, Cálculo integral en una variable (2015556).' },
  { id: '1000003', cod: '1000003', nombre: 'Álgebra lineal', cr: 4, sem: 2, comp: 'FP', area: 'matematicas', pre: ['1000004'], co: [],
    nota: 'Casilla «con opciones»: alternativa en el SIA, Álgebra lineal básica (2015555).' },
  { id: '2016375', cod: '2016375', nombre: 'Programación orientada a objetos', cr: 3, sem: 2, comp: 'DO', area: 'software', pre: ['2015734'], co: [] },
  { id: '1000002', cod: '1000002', nombre: 'Lecto-Escritura', cr: 4, sem: 2, comp: 'NV', area: 'idioma', pre: [], co: [],
    nota: 'Nivelación: solo para quien la exige el examen de admisión. No cuenta en los 165 créditos.' },
  { id: '1000044', cod: '1000044', nombre: 'Inglés I', cr: 3, sem: 2, comp: 'NV', area: 'idioma', pre: [], co: [],
    nota: 'Nivelación: 12 créditos de inglés (I a IV) que no cuentan en los 165. Semestral (1000044); también virtual (1000048) e intensivo.' },

  /* ---------------------------- Semestre III ----------------------------- */
  { id: '1000017', cod: '1000017', nombre: 'Fundamentos de electricidad y magnetismo', cr: 4, sem: 3, comp: 'FO', area: 'fisica', pre: ['1000005'], co: [] },
  { id: '1000006', cod: '1000006', nombre: 'Cálculo en varias variables', cr: 4, sem: 3, comp: 'FP', area: 'matematicas', pre: ['1000005'], co: [],
    nota: 'Casilla «con opciones»: alternativa en el SIA, Cálculo vectorial (2015162).' },
  { id: '2025963', cod: '2025963', nombre: 'Matemáticas discretas I', cr: 4, sem: 3, comp: 'FP', area: 'ciencias_comp', pre: [], co: [] },
  { id: '2016353', cod: '2016353', nombre: 'Bases de datos', cr: 3, sem: 3, comp: 'DP', area: 'infraestructura', pre: ['2016375'], co: [] },
  { id: '2016698', cod: '2016698', nombre: 'Elementos de computadores', cr: 3, sem: 3, comp: 'DP', area: 'infraestructura', pre: ['2025975'], co: [] },
  { id: '1000045', cod: '1000045', nombre: 'Inglés II', cr: 3, sem: 3, comp: 'NV', area: 'idioma', pre: ['1000044'], co: [] },

  /* ---------------------------- Semestre IV ------------------------------ */
  { id: '1000013', cod: '1000013', nombre: 'Probabilidad y estadística fundamental', cr: 3, sem: 4, comp: 'FP', area: 'probabilidad', pre: ['1000005'], co: [],
    nota: 'Casilla «con opciones»: alternativa en el SIA, Probabilidad (2015178).' },
  { id: '2015703', cod: '2015703', nombre: 'Ingeniería económica', cr: 3, sem: 4, comp: 'FP', area: 'economicas', pre: ['1000005'], co: [],
    nota: 'Casilla «con opciones»: alternativa en el SIA, Ingeniería económica y análisis de riesgo (2025986).' },
  { id: '2025964', cod: '2025964', nombre: 'Matemáticas discretas II', cr: 4, sem: 4, comp: 'FP', area: 'ciencias_comp', pre: ['2025963'], co: [] },
  { id: '2016699', cod: '2016699', nombre: 'Estructuras de datos', cr: 3, sem: 4, comp: 'DO', area: 'software', pre: ['2016375'], co: [] },
  { id: '2016697', cod: '2016697', nombre: 'Arquitectura de computadores', cr: 3, sem: 4, comp: 'DO', area: 'infraestructura', pre: ['2016698'], co: [] },
  { id: '1000046', cod: '1000046', nombre: 'Inglés III', cr: 3, sem: 4, comp: 'NV', area: 'idioma', pre: ['1000045'], co: [] },

  /* ---------------------------- Semestre V ------------------------------- */
  { id: '2025970', cod: '2025970', nombre: 'Modelos y simulación', cr: 3, sem: 5, comp: 'DP', area: 'modelos', pre: ['1000013', '2016375', '1000006', '2025964'], co: [] },
  { id: '2015702', cod: '2015702', nombre: 'Gerencia y gestión de proyectos', cr: 3, sem: 5, comp: 'FP', area: 'economicas', pre: ['2015703'], co: [],
    nota: 'Casilla «con opciones»: alternativa en el SIA, Diseño, gestión y evaluación de proyectos (2016028).' },
  { id: '2025967', cod: '2025967', nombre: 'Redes de computadores', cr: 3, sem: 5, comp: 'DO', area: 'infraestructura', pre: ['1000017', '2016699', '2016697'], co: [] },
  { id: '2016701', cod: '2016701', nombre: 'Ingeniería de software I', cr: 3, sem: 5, comp: 'DO', area: 'software', pre: ['2016699', '2016703', '2016353'], co: [] },
  { id: '2015174', cod: '2015174', nombre: 'Introducción a la teoría de la computación', cr: 4, sem: 5, comp: 'FO', area: 'ciencias_comp', pre: ['2025963'], co: [] },
  { id: '1000047', cod: '1000047', nombre: 'Inglés IV', cr: 3, sem: 5, comp: 'NV', area: 'idioma', pre: ['1000046'], co: [] },

  /* ---------------------------- Semestre VI ------------------------------ */
  { id: '2025971', cod: '2025971', nombre: 'Optimización', cr: 3, sem: 6, comp: 'DP', area: 'modelos', pre: ['2025970'], co: [] },
  { id: '2025982', cod: '2025982', nombre: 'Sistemas de información', cr: 3, sem: 6, comp: 'DP', area: 'infraestructura', pre: ['2016703', '2016353'], co: [] },
  { id: '2015970', cod: '2015970', nombre: 'Métodos numéricos', cr: 3, sem: 6, comp: 'FP', area: 'ciencias_comp', pre: ['1000006'], co: [],
    nota: 'Casilla «con opciones»: alternativa en el SIA, Análisis numérico I (2019072).' },
  { id: '2016702', cod: '2016702', nombre: 'Ingeniería de software II', cr: 3, sem: 6, comp: 'DO', area: 'software', pre: ['2016701', '2025967'], co: [] },
  { id: '2016696', cod: '2016696', nombre: 'Algoritmos', cr: 3, sem: 6, comp: 'FO', area: 'ciencias_comp', pre: ['2015174', '1000013', '2025964', '2016699'], co: [] },
  { id: '2016707', cod: '2016707', nombre: 'Sistemas operativos', cr: 3, sem: 6, comp: 'DO', area: 'infraestructura', pre: ['2016697'], co: [] },

  /* ---------------------------- Semestre VII ----------------------------- */
  { id: '2025969', cod: '2025969', nombre: 'Modelos estocásticos y simulación en computación y comunicaciones', cr: 3, sem: 7, comp: 'DO', area: 'modelos', pre: ['2025971'], co: [] },
  { id: '2025983', cod: '2025983', nombre: 'Arquitectura de infraestructura y gobierno de TICs', cr: 3, sem: 7, comp: 'DO', area: 'infraestructura', pre: ['2016702'], co: [] },
  { id: '2025994', cod: '2025994', nombre: 'Teoría de la información y sistemas de comunicación', cr: 3, sem: 7, comp: 'DP', area: 'infraestructura', pre: ['1000013', '2025967'], co: [],
    nota: 'La malla la llama «Información y comunicaciones».' },
  { id: '2016716', cod: '2016716', nombre: 'Arquitectura de software', cr: 3, sem: 7, comp: 'DO', area: 'software', pre: ['2016702'], co: [] },
  { id: '2025995', cod: '2025995', nombre: 'Introducción a los sistemas inteligentes', cr: 3, sem: 7, comp: 'DP', area: 'inteligentes', pre: ['2016696'], co: [],
    nota: 'La malla la llama «Sistemas inteligentes».' },
  { id: '2025966', cod: '2025966', nombre: 'Lenguajes de programación', cr: 3, sem: 7, comp: 'DP', area: 'software', pre: ['2016699', '2015174'], co: [] },

  /* ---------------------------- Semestre VIII ---------------------------- */
  { id: '2024045', cod: '2024045', nombre: 'Taller de proyectos interdisciplinarios', cr: 3, sem: 8, comp: 'DP', area: 'contexto', pre: [], co: [],
    preEsp: 'Requisito especial (*) según la malla: consúltalo con la coordinación (habitualmente, un porcentaje del plan aprobado)', nota: 'La malla lo llama «Taller interdisciplinario de creación y gestión».' },
  { id: '2025972', cod: '2025972', nombre: 'Introducción a la criptografía y a la seguridad de la información', cr: 3, sem: 8, comp: 'DP', area: 'infraestructura', pre: ['2016696'], co: [],
    nota: 'La malla la llama «Codificación, criptografía y seguridad de la información».' },
  { id: '2016722', cod: '2016722', nombre: 'Computación paralela y distribuida', cr: 3, sem: 8, comp: 'DO', area: 'infraestructura', pre: ['2016696'], co: [],
    nota: 'La malla imprime el código 2025968, que no existe en el plan 2A74 del SIA; el SIA la tiene como 2016722 (disciplinar obligatoria).' },
  { id: '2025960', cod: '2025960', nombre: 'Computación visual', cr: 3, sem: 8, comp: 'DP', area: 'comp_aplicada', pre: ['2016696'], co: [],
    nota: 'La malla la llama «Computación aplicada».' },
  { id: 'ELE_8_1', cod: null, nombre: 'Electiva (libre elección)', cr: 4, sem: 8, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },

  /* ---------------------------- Semestre IX ------------------------------ */
  { id: 'ELE_9_1', cod: null, nombre: 'Electiva (libre elección)', cr: 4, sem: 9, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
  { id: 'ELE_9_2', cod: null, nombre: 'Electiva (libre elección)', cr: 4, sem: 9, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
  { id: 'ELE_9_3', cod: null, nombre: 'Electiva (libre elección)', cr: 4, sem: 9, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
  { id: 'ELE_9_4', cod: null, nombre: 'Electiva (libre elección)', cr: 4, sem: 9, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },

  /* ---------------------------- Semestre X ------------------------------- */
  { id: '2025974', cod: '2025974', nombre: 'Trabajo de grado', cr: 6, sem: 10, comp: 'TG', area: 'grado', pre: [], co: [],
    preEsp: 'Haber aprobado la fundamentación y el componente disciplinar obligatorio (regla general de la Universidad)',
    nota: 'Tres modalidades en el SIA, todas de 6 créditos: trabajos investigativos (2025974), práctica de extensión (2025973) y asignaturas de posgrado (2016843). Cambia el código desde «Editar asignatura» según la tuya.' },
  { id: 'ELE_10_1', cod: null, nombre: 'Electiva (libre elección)', cr: 4, sem: 10, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
  { id: 'ELE_10_2', cod: null, nombre: 'Electiva (libre elección)', cr: 4, sem: 10, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
  { id: 'ELE_10_3', cod: null, nombre: 'Electiva (libre elección)', cr: 4, sem: 10, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
];

/* ============================================================================
   CATÁLOGO: asignaturas «con opciones» del plan 2A74 según el SIA
   (fundamentación optativa 20, disciplinar optativa 38), agrupadas por tema
   para poder filtrar. La agrupación no es oficial.
   ========================================================================== */
const CATALOGO = [
  /* ------- Fundamentación con opciones (SIA: FUND. OPTATIVA) -------- */
  { cod: '1000004', nombre: 'Cálculo diferencial', grupo: 'fundamentacion', linea: 'Matemáticas' },
  { cod: '2016377', nombre: 'Cálculo diferencial en una variable', grupo: 'fundamentacion', linea: 'Matemáticas' },
  { cod: '1000005', nombre: 'Cálculo Integral', grupo: 'fundamentacion', linea: 'Matemáticas', pre: ['1000004'] },
  { cod: '2015556', nombre: 'Cálculo integral en una variable', grupo: 'fundamentacion', linea: 'Matemáticas' },
  { cod: '1000006', nombre: 'Cálculo en varias variables', grupo: 'fundamentacion', linea: 'Matemáticas', pre: ['1000005'] },
  { cod: '2015162', nombre: 'Cálculo vectorial', grupo: 'fundamentacion', linea: 'Matemáticas' },
  { cod: '1000003', nombre: 'Álgebra Lineal', grupo: 'fundamentacion', linea: 'Matemáticas', pre: ['1000004'] },
  { cod: '2015555', nombre: 'Álgebra lineal básica', grupo: 'fundamentacion', linea: 'Matemáticas' },
  { cod: '2015168', nombre: 'Fundamentos de matemáticas', grupo: 'fundamentacion', linea: 'Matemáticas' },
  { cod: '2015181', nombre: 'Sistemas numéricos', grupo: 'fundamentacion', linea: 'Matemáticas' },
  { cod: '2025963', nombre: 'Matemáticas discretas I', grupo: 'fundamentacion', linea: 'Ciencias de la computación' },
  { cod: '2025964', nombre: 'Matemáticas discretas II', grupo: 'fundamentacion', linea: 'Ciencias de la computación', pre: ['2025963'] },
  { cod: '2015970', nombre: 'Métodos numéricos', grupo: 'fundamentacion', linea: 'Ciencias de la computación' },
  { cod: '2019072', nombre: 'Análisis numérico I', grupo: 'fundamentacion', linea: 'Ciencias de la computación' },
  { cod: '1000013', nombre: 'Probabilidad y estadística fundamental', grupo: 'fundamentacion', linea: 'Probabilidad y estadística' },
  { cod: '2015178', nombre: 'Probabilidad', grupo: 'fundamentacion', linea: 'Probabilidad y estadística' },
  { cod: '2015703', nombre: 'Ingeniería económica', grupo: 'fundamentacion', linea: 'Ciencias económicas y administrativas' },
  { cod: '2025986', nombre: 'Ingeniería económica y análisis de riesgo', grupo: 'fundamentacion', linea: 'Ciencias económicas y administrativas' },
  { cod: '2015702', nombre: 'Gerencia y gestión de proyectos', grupo: 'fundamentacion', linea: 'Ciencias económicas y administrativas' },
  { cod: '2016028', nombre: 'Diseño, gestión y evaluación de proyectos', grupo: 'fundamentacion', linea: 'Ciencias económicas y administrativas' },

  /* ------- Nivelación -------- */
  { cod: '1000001', nombre: 'Matemáticas Básicas', grupo: 'nivelacion', linea: 'Nivelación', nota: 'Solo para quien la exige el examen de admisión. No cuenta en los 165 créditos.' },
  { cod: '1000002', nombre: 'Lecto-Escritura', grupo: 'nivelacion', linea: 'Nivelación', nota: 'Solo para quien la exige el examen de admisión. No cuenta en los 165 créditos.' },

  /* ------- Disciplinares con opciones: software y programación -------- */
  { cod: '2015734', nombre: 'Programación de computadores', grupo: 'software', linea: 'Programación' },
  { cod: '2026573', nombre: 'Introducción a las ciencias de la computación y a la programación', grupo: 'software', linea: 'Programación' },
  { cod: '2025966', nombre: 'Lenguajes de programación', grupo: 'software', linea: 'Programación' },
  { cod: '2027642', nombre: 'Compiladores', grupo: 'software', linea: 'Programación' },
  { cod: '2027628', nombre: 'Teoría de lenguajes formales', grupo: 'software', linea: 'Programación' },

  /* ------- Infraestructura, datos y seguridad -------- */
  { cod: '2016353', nombre: 'Bases de datos', grupo: 'infraestructura', linea: 'Datos e información' },
  { cod: '2027641', nombre: 'Análisis de bases de datos', grupo: 'infraestructura', linea: 'Datos e información' },
  { cod: '2025982', nombre: 'Sistemas de información', grupo: 'infraestructura', linea: 'Datos e información' },
  { cod: '2016053', nombre: 'Sistemas de Información Gerencial', grupo: 'infraestructura', linea: 'Datos e información' },
  { cod: '2016698', nombre: 'Elementos de computadores', grupo: 'infraestructura', linea: 'Computadores y comunicaciones' },
  { cod: '2016492', nombre: 'Comunicaciones', grupo: 'infraestructura', linea: 'Computadores y comunicaciones' },
  { cod: '2025994', nombre: 'Teoría de la información y sistemas de comunicacion', grupo: 'infraestructura', linea: 'Computadores y comunicaciones' },
  { cod: '2025972', nombre: 'Introducción a la criptografía y a la seguridad de la Información', grupo: 'infraestructura', linea: 'Seguridad y criptografía' },
  { cod: '2027311', nombre: 'Introducción a la criptografía y a la teoría de información', grupo: 'infraestructura', linea: 'Seguridad y criptografía' },
  { cod: '2027310', nombre: 'Criptografía', grupo: 'infraestructura', linea: 'Seguridad y criptografía' },
  { cod: '2027313', nombre: 'Teoría de Codificación', grupo: 'infraestructura', linea: 'Seguridad y criptografía' },

  /* ------- Sistemas inteligentes y computación aplicada -------- */
  { cod: '2025995', nombre: 'Introducción a los sistemas inteligentes', grupo: 'inteligentes', linea: 'Sistemas inteligentes' },
  { cod: '2027631', nombre: 'Introducción a la inteligencia artificial', grupo: 'inteligentes', linea: 'Sistemas inteligentes' },
  { cod: '2016748', nombre: 'Inteligencia artificial', grupo: 'inteligentes', linea: 'Sistemas inteligentes' },
  { cod: '2023251', nombre: 'Inteligencia artificial y mini-robots', grupo: 'inteligentes', linea: 'Sistemas inteligentes' },
  { cod: '2028837', nombre: 'Matemáticas del aprendizaje de máquinas', grupo: 'inteligentes', linea: 'Sistemas inteligentes' },
  { cod: '2025960', nombre: 'Computación visual', grupo: 'inteligentes', linea: 'Computación aplicada' },

  /* ------- Modelos, optimización y simulación -------- */
  { cod: '2025970', nombre: 'Modelos y simulación', grupo: 'modelos', linea: 'Modelos y simulación' },
  { cod: '2025971', nombre: 'Optimización', grupo: 'modelos', linea: 'Modelos y simulación' },
  { cod: '2015173', nombre: 'Introducción a la optimización', grupo: 'modelos', linea: 'Modelos y simulación' },
  { cod: '2017293', nombre: 'Modelación matemática', grupo: 'modelos', linea: 'Modelos y simulación' },
  { cod: '2019082', nombre: 'Modelos matemáticos I', grupo: 'modelos', linea: 'Modelos y simulación' },

  /* ------- Hardware y electrónica -------- */
  { cod: '2016498', nombre: 'Electrónica digital I', grupo: 'hardware', linea: 'Hardware' },
  { cod: '2016788', nombre: 'Tecnología digital', grupo: 'hardware', linea: 'Hardware' },
  { cod: '2016753', nombre: 'Microcontroladores', grupo: 'hardware', linea: 'Hardware' },

  /* ------- Gestión, economía y contexto -------- */
  { cod: '2024045', nombre: 'Taller de proyectos interdisciplinarios', grupo: 'gestion', linea: 'Contexto profesional' },
  { cod: '2016615', nombre: 'Taller de invención y creatividad', grupo: 'gestion', linea: 'Contexto profesional' },
  { cod: '2026551', nombre: 'Creación y gestión de empresas', grupo: 'gestion', linea: 'Gestión y economía' },
  { cod: '2016007', nombre: 'Fundamentos de administración', grupo: 'gestion', linea: 'Gestión y economía' },
  { cod: '2016741', nombre: 'Finanzas', grupo: 'gestion', linea: 'Gestión y economía' },
  { cod: '2016037', nombre: 'Finanzas avanzadas', grupo: 'gestion', linea: 'Gestión y economía' },
  { cod: '2016600', nombre: 'Gestión tecnológica', grupo: 'gestion', linea: 'Gestión y economía' },
  { cod: '2016599', nombre: 'Gestión de la ciencia, la tecnología y la innovación', grupo: 'gestion', linea: 'Gestión y economía' },
];

const GRUPOS_CATALOGO = {
  fundamentacion: 'Fundamentación con opciones',
  nivelacion: 'Nivelación',
  software: 'Software y programación',
  infraestructura: 'Infraestructura, datos y seguridad',
  inteligentes: 'Sistemas inteligentes y computación aplicada',
  modelos: 'Modelos, optimización y simulación',
  hardware: 'Hardware y electrónica',
  gestion: 'Gestión, economía y contexto',
};

/* Grupos disciplinares (para cupos genéricos 'disciplinar', si se añaden) */
const GRUPOS_DISCIPLINARES = ['software', 'infraestructura', 'inteligentes', 'modelos', 'hardware', 'gestion'];

/* ============================================================================
   ÉNFASIS / RUTAS CURRICULARES SUGERIDAS (PEP, plan 2879, 2014)
   ----------------------------------------------------------------------------
   Ninguna es obligatoria. Cada ruta propone asignaturas para llenar los cupos
   de libre elección (y sustituir casillas «con opciones»). Los nombres se
   verificaron por código en losestudiantes.com; los marcados porConfirmar se
   tomaron del texto del PEP y conviene confirmarlos en el SIA. Muchas no
   aparecen hoy en el plan 2A74 del SIA: la app indica si están en la oferta.
   ========================================================================== */
const RUTAS = [
  { id: 'ISW', nombre: 'Ingeniería de Software', descripcion: 'Desarrollo y arquitectura de software: bases de datos avanzadas, patrones, aplicaciones móviles, minería de datos.',
    asignaturas: [
      { cod: '2019765', nombre: 'Bases de datos avanzadas', porConfirmar: true },
      { cod: '2019762', nombre: 'Algoritmia avanzada', porConfirmar: true },
      { cod: '2019772', nombre: 'Temas avanzados en ingeniería de software I', porConfirmar: true },
      { cod: '2019795', nombre: 'Ingeniería de software avanzada', porConfirmar: true },
      { cod: '2016732', nombre: 'Patrones de software', porConfirmar: true },
      { cod: '2019773', nombre: 'Mineria De Datos' },
      { cod: '2026213', nombre: 'Desarrollo de aplicaciones móviles', porConfirmar: true },
    ] },
  { id: 'SINT', nombre: 'Sistemas Inteligentes', descripcion: 'Aprendizaje de máquina, recuperación de información, lingüística computacional, neurociencia computacional.',
    asignaturas: [
      { cod: '2019818', nombre: 'Sistemas Inteligentes' },
      { cod: '2026442', nombre: 'Lingüística computacional', porConfirmar: true },
      { cod: '2019779', nombre: 'Recuperación de información', porConfirmar: true },
      { cod: '2016379', nombre: 'Inferencia Estadistica' },
      { cod: '2026484', nombre: 'Computational neuroscience', porConfirmar: true },
      { cod: '2012033', nombre: 'Aprendizaje de máquina', porConfirmar: true },
    ] },
  { id: 'TELECOM', nombre: 'Telecomunicaciones', descripcion: 'Señales, campos electromagnéticos, líneas y antenas, comunicaciones ópticas y negocios en telecomunicaciones.',
    asignaturas: [
      { cod: '2016487', nombre: 'Campos Electromagneticos' },
      { cod: '2016503', nombre: 'Lineas Y Antenas' },
      { cod: '2025783', nombre: 'Optoelectrónica y comunicaciones ópticas', porConfirmar: true },
      { cod: '2023708', nombre: 'Ingenieria De Nuevos Negocios En Telecomunicaciones' },
      { cod: '1000007', nombre: 'Ecuaciones Diferenciales' },
      { cod: '2016506', nombre: 'Señales Y Sistemas I' },
      { cod: '2016509', nombre: 'Taller De Ingenieria Electronica' },
      { cod: '2016489', nombre: 'Circuitos Electricos I' },
    ] },
  { id: 'BIOINF', nombre: 'Bioinformática y Computación Bioinspirada', descripcion: 'Bioinformática, vida artificial, aprendizaje de máquina y estadística aplicada sobre una base de biología general.',
    asignaturas: [
      { cod: '1000009', nombre: 'Biologia General' },
      { cod: '2016839', nombre: 'Bioinformática', porConfirmar: true },
      { cod: '2012033', nombre: 'Aprendizaje de máquina', porConfirmar: true },
      { cod: '2019779', nombre: 'Recuperación de información', porConfirmar: true },
      { cod: '2025439', nombre: 'Programacion Y Algoritmos En Bioinformatica' },
      { cod: '2012046', nombre: 'Vida artificial', porConfirmar: true },
      { cod: '2020933', nombre: 'Metodos Estadisticos Aplicados' },
      { cod: '2016379', nombre: 'Inferencia Estadistica' },
    ] },
  { id: 'BIOMED', nombre: 'Ingeniería Biomédica', descripcion: 'Señales y sistemas, circuitos, procesamiento de imágenes y fundamentos de ingeniería biomédica.',
    asignaturas: [
      { cod: '1000009', nombre: 'Biologia General' },
      { cod: '2016509', nombre: 'Taller De Ingenieria Electronica' },
      { cod: '2016489', nombre: 'Circuitos Electricos I' },
      { cod: '1000007', nombre: 'Ecuaciones Diferenciales' },
      { cod: '2016506', nombre: 'Señales Y Sistemas I' },
      { cod: '2016765', nombre: 'Fundamentos de ingeniería biomédica', porConfirmar: true },
      { cod: '2015159', nombre: 'Variable Compleja' },
      { cod: '2016507', nombre: 'Señales Y Sistemas Ii' },
      { cod: '2023644', nombre: 'Procesamiento de imágenes', porConfirmar: true },
    ] },
  { id: 'HW', nombre: 'Hardware', descripcion: 'Circuitos, electrónica análoga y digital, sistemas embebidos y verificación de sistemas digitales.',
    asignaturas: [
      { cod: '2016509', nombre: 'Taller De Ingenieria Electronica' },
      { cod: '2016489', nombre: 'Circuitos Electricos I' },
      { cod: '2016495', nombre: 'Electronica Analoga I' },
      { cod: '2001880', nombre: 'Tecnología digital', porConfirmar: true },
      { cod: '2016499', nombre: 'Electronica Digital Ii' },
      { cod: '2016512', nombre: 'Verificacion De Sistemas Digitales' },
      { cod: '2016505', nombre: 'Sistemas embebidos', porConfirmar: true },
    ] },
  { id: 'CIENCOMP', nombre: 'Ciencias de la Computación', descripcion: 'Matemáticas para computación: lógica, conjuntos, combinatoria, grafos, álgebra abstracta, análisis real y numérico.',
    asignaturas: [
      { cod: '2026519', nombre: 'Ecuaciones en diferencias y sistemas dinámicos', porConfirmar: true },
      { cod: '2026555', nombre: 'Álgegra Abstracta y Computacional' },
      { cod: '2015155', nombre: 'Introduccion Al Analisis Real' },
      { cod: '2015150', nombre: 'Analisis Numerico' },
      { cod: '2015156', nombre: 'Logica Matematica' },
      { cod: '2025819', nombre: 'Introduccion A La Teoria De Conjuntos' },
      { cod: '2026548', nombre: 'Introducción al análisis combinatorio', porConfirmar: true },
      { cod: '2015184', nombre: 'Teoría de Grafos' },
      { cod: '2015177', nombre: 'Modelos matemáticos', porConfirmar: true },
    ] },
  { id: 'MODOPTSIM', nombre: 'Modelos, Optimización y Simulación', descripcion: 'Modelos matemáticos, optimización, simulación de procesos, logística, costos y economía.',
    asignaturas: [
      { cod: '2016592', nombre: 'Economia General' },
      { cod: '2016610', nombre: 'Sistemas De Costos' },
      { cod: '2016379', nombre: 'Inferencia Estadistica' },
      { cod: '2007975', nombre: 'Análisis real', porConfirmar: true },
      { cod: '2015150', nombre: 'Analisis Numerico' },
      { cod: '2025987', nombre: 'Modelos Estocasticos Para Procesos De Manufactura Y Sistemas De Servicios' },
      { cod: '2016605', nombre: 'Logistica' },
      { cod: '2025988', nombre: 'Taller De Simulacion Procesos De Manufactura Y Sistemas De Servicios' },
      { cod: '2015177', nombre: 'Modelos matemáticos', porConfirmar: true },
    ] },
  { id: 'VISIOROBOT', nombre: 'Visión y Robótica', descripcion: 'Señales, electrónica, variable compleja y robótica para visión artificial y robótica.',
    asignaturas: [
      { cod: '2015159', nombre: 'Variable Compleja' },
      { cod: '2016507', nombre: 'Señales Y Sistemas Ii' },
      { cod: '2016770', nombre: 'Robotica' },
      { cod: '1000007', nombre: 'Ecuaciones Diferenciales' },
      { cod: '2016506', nombre: 'Señales Y Sistemas I' },
      { cod: '2016509', nombre: 'Taller De Ingenieria Electronica' },
      { cod: '2016489', nombre: 'Circuitos Electricos I' },
      { cod: '2016495', nombre: 'Electronica Analoga I' },
    ] },
  { id: 'CREDIGMEDANIM', nombre: 'Medios Digitales y Animación', descripcion: 'Medios digitales, videojuegos, animación y fundamentos tecnológicos del diseño (con la Facultad de Artes).',
    asignaturas: [
      { cod: '2016093', nombre: 'Taller De Enfasis En Animacion Y Narrativas Audiovisuales I' },
      { cod: '2026511', nombre: 'Desarrollo De Videojuegos' },
      { cod: '2016749', nombre: 'Introduction to data science and data visualization', porConfirmar: true },
      { cod: '2016083', nombre: 'Produccion En Medios Digitales' },
      { cod: '2016091', nombre: 'Taller De Enfasis En Multimedia E Imagen Digital I' },
      { cod: '2016070', nombre: 'Fundamentos Tecnologicos: Formatos Y Medidas' },
      { cod: '2016071', nombre: 'Fundamentos Tecnologicos: Tipometria' },
      { cod: '2016069', nombre: 'Fundamentos Tecnologicos: Color Y Produccion' },
    ] },
  { id: 'DATASCI', nombre: 'Ciencia de Datos', descripcion: 'Ciencia de datos: aprendizaje de máquina, minería de datos, inferencia y regresión, bases de datos avanzadas.',
    asignaturas: [
      { cod: '2019779', nombre: 'Recuperación de información', porConfirmar: true },
      { cod: '2012033', nombre: 'Aprendizaje de máquina', porConfirmar: true },
      { cod: '2016749', nombre: 'Introduction to data science and data visualization', porConfirmar: true },
      { cod: '2016360', nombre: 'Analisis De Regresion' },
      { cod: '2016379', nombre: 'Inferencia Estadistica' },
      { cod: '2019773', nombre: 'Mineria De Datos' },
      { cod: '2019765', nombre: 'Bases de datos avanzadas', porConfirmar: true },
    ] },
  { id: 'TIC', nombre: 'TIC y Gobierno Electrónico', descripcion: 'Gestión de TIC y gobierno electrónico: gestión de TI, geomática, calidad de servicio y gerencia de proyectos públicos.',
    asignaturas: [
      { cod: '2026538', nombre: 'Taller Aplicado Al Gobierno Electronico' },
      { cod: '2026502', nombre: 'Gestion De Las Tecnologias De Informacion' },
      { cod: '2011263', nombre: 'Geomática', porConfirmar: true },
      { cod: '2026537', nombre: 'La Calidad De Servicio En El Gobierno Electronico' },
      { cod: '2026231', nombre: 'Tecnologias De Informacion Y Gobierno Electronico' },
      { cod: '2026440', nombre: 'Gerencia De Proyectos Aplicado Al Gobierno Electronico' },
      { cod: '2026208', nombre: 'Introduccion Al Gobierno Electronico' },
    ] },
];

/* ============================================================================
   Notas sobre los datos y sus fuentes
   ========================================================================== */
const INCONSISTENCIAS = [
  { asig: 'Prerrequisitos: transcritos del grafo de la malla', detalle: 'La malla 2A74 dibuja los prerrequisitos con círculos numerados (el número a la derecha de una casilla la identifica; los que entran por la izquierda son sus requisitos). Se transcribieron todas las flechas de los semestres I a VIII: p. ej. Redes de computadores exige Fundamentos de electricidad y magnetismo, Estructuras de datos y Arquitectura de computadores; Modelos y simulación exige Probabilidad, Programación orientada a objetos, Cálculo en varias variables y Matemáticas discretas II; Algoritmos exige Introducción a la teoría de la computación, Probabilidad, Matemáticas discretas II y Estructuras de datos, y es a su vez requisito de Sistemas inteligentes, Criptografía, Computación paralela y Computación visual; Ingeniería de software II exige Ingeniería de software I y Redes, y es requisito de Arquitectura de software y de Arquitectura de infraestructura. Dos dudas: Matemáticas discretas I no tiene flecha de entrada legible (se deja sin requisito) y el Taller de proyectos lleva un asterisco de «requisito especial» que la malla no detalla. Los semestres IX y X son libre elección y trabajo de grado.' },
  { asig: 'Sin opciones / con opciones', detalle: 'La malla marca cada casilla como fundamentación (B) o disciplinar (C), y distingue «sin opciones» (fijas: 15 + 54) y «con opciones» (36 + 27, sustituibles por una equivalente). El SIA, en cambio, clasifica las asignaturas del plan como fund. obligatoria (4), fund. optativa (20), disciplinar obligatoria (13) y disciplinar optativa (38); la app sigue al SIA para el componente de cada asignatura, y las casillas «con opciones» traen la asignatura que la malla sugiere, con su alternativa anotada en la ficha. Cambiar una casilla por su alternativa: «Editar asignatura» → código y nombre.' },
  { asig: 'Créditos por componente', detalle: 'Malla: fundamentación 51, disciplinar 81, libre elección 33 = 165 (la cabecera imprime también «167» y «164» en distintas versiones). Con la tipología del SIA: fund. sin opciones 15 (Fund. de mecánica, Fund. de electricidad y magnetismo, Introducción a la teoría de la computación, Algoritmos), fund. con opciones 36, disciplinar obligatoria 39 (13 asignaturas), disciplinar con opciones 36, trabajo de grado 6, libre elección 33. Nivelación 20 (Matemáticas Básicas 4, Lecto-Escritura 4, Inglés I–IV 12) no cuenta.' },
  { asig: 'Códigos que difieren entre la malla y el SIA', detalle: 'Computación paralela y distribuida: la malla imprime 2025968; en el plan 2A74 del SIA está como 2016722 (se usa este). «Información y comunicaciones» es Teoría de la información y sistemas de comunicación (2025994); «Computación aplicada» es Computación visual (2025960); «Sistemas inteligentes» es Introducción a los sistemas inteligentes (2025995); «Taller interdisciplinario de creación y gestión» es Taller de proyectos interdisciplinarios (2024045); «Programación» es Programación de computadores (2015734).' },
  { asig: 'Énfasis / rutas curriculares', detalle: 'El PEP (plan 2879, 2014) publica 12 rutas sugeridas: Ingeniería de software, Sistemas inteligentes, Telecomunicaciones, Bioinformática, Ingeniería biomédica, Hardware, Ciencias de la computación, Modelos/optimización/simulación, Visión y robótica, Medios digitales y animación, Ciencia de datos y TIC/gobierno electrónico. Ninguna es obligatoria: cada una llena los cupos con opciones y las electivas con asignaturas concretas. Muchas de esas asignaturas no aparecen hoy en el plan 2A74 del SIA (p. ej. Aprendizaje de máquina, Minería de datos, Robótica); si quieres seguir un énfasis, búscalas en Libre elección o en el SIA y añádelas a tus cupos.' },
  { asig: 'Trabajo de grado', detalle: 'Tres modalidades en el SIA, todas de 6 créditos: 2025974 (trabajos investigativos, la que usa la app), 2025973 (práctica de extensión) y 2016843 (asignaturas de posgrado).' },
];
