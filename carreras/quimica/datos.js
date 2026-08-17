/* ============================================================================
   datos.js — Malla curricular Pregrado en Química, UNAL Sede Bogotá
   Fuentes:
     - "Malla Curricular Pregrado Química.pdf" (oficial, Facultad de Ciencias)
     - "Malla completa.pdf" (Grupos de Estudio Autónomo — grafo + catálogo de
       optativas)
   Las inconsistencias entre ambos documentos están listadas en INCONSISTENCIAS
   y se muestran dentro de la app.
   ========================================================================== */

/* --- Componentes de formación ------------------------------------------- */
const COMPONENTES = {
  FO: { id: 'FO', nombre: 'Fundamentación obligatoria', corto: 'Fund. oblig.', creditos: 40, color: '#e9b949' },
  FP: { id: 'FP', nombre: 'Fundamentación optativa', corto: 'Fund. optativa', creditos: 3, color: '#f6d992' },
  DO: { id: 'DO', nombre: 'Disciplinar obligatoria', corto: 'Disc. oblig.', creditos: 57, color: '#4f9d69' },
  DP: { id: 'DP', nombre: 'Disciplinar optativa', corto: 'Disc. optativa', creditos: 18, color: '#9fce9a' },
  TG: { id: 'TG', nombre: 'Trabajo de grado', corto: 'Trabajo de grado', creditos: 8, color: '#3f6fb5' },
  LE: { id: 'LE', nombre: 'Libre elección (electivas)', corto: 'Libre elección', creditos: 32, color: '#b07bc4' },
};

const TOTAL_CREDITOS = 158;

/* --- Áreas del componente disciplinar ------------------------------------ */
const AREAS = {
  fundamentos: 'Fundamentos complementarios en ciencias',
  aplicada: 'Química aplicada',
  fisica: 'Química física',
  analitica: 'Química analítica',
  estructura: 'Estructura e interacciones',
  organica: 'Química orgánica',
  bioquimica: 'Bioquímica',
  grado: 'Trabajo de grado',
};

/* ============================================================================
   PLAN DE ESTUDIOS
   ----------------------------------------------------------------------------
   id       identificador interno (código SIA, o ranura genérica OPT_ / ELE_)
   cod      código SIA (null si es un cupo genérico a llenar con una optativa)
   nombre   nombre de la asignatura
   cr       créditos
   sem      semestre sugerido (1..10). Puede diferir del PDF: ver semPDF
   semPDF   semestre que le da la malla impresa, cuando hubo que reubicarla
   comp     componente (FO/FP/DO/DP/TG/LE)
   area     área temática (clave de AREAS)
   pre      prerrequisitos obligatorios (todos deben estar aprobados)
   co       correquisitos (aprobados o inscritos en el mismo semestre)
   preSug   prerrequisitos sugeridos por la malla de apoyo (no bloquean)
   preEsp   prerrequisito especial en texto (no evaluable automáticamente)
   ranura   si es un cupo genérico: grupos del catálogo que puede recibir
   nota     advertencia/aclaración mostrada en la ficha
   ========================================================================== */
const PLAN_BASE = [
  /* ---------------------------- Semestre I ------------------------------- */
  { id: '2026364', cod: '2026364', nombre: 'Química Fundamental', cr: 3, sem: 1, comp: 'FO', area: 'analitica', pre: [], co: [] },
  { id: '1000025', cod: '1000025', nombre: 'Laboratorio de técnicas básicas en química', cr: 3, sem: 1, comp: 'FO', area: 'analitica', pre: [], co: [], preSug: ['2026364'] },
  { id: '1000009', cod: '1000009', nombre: 'Biología General', cr: 3, sem: 1, comp: 'FO', area: 'fundamentos', pre: [], co: [] },
  { id: '1000004', cod: '1000004', nombre: 'Cálculo Diferencial', cr: 4, sem: 1, comp: 'FO', area: 'fundamentos', pre: [], co: [] },
  { id: '2028061', cod: '2028061', nombre: 'Introducción a la Química', cr: 3, sem: 1, comp: 'FO', area: 'analitica', pre: [], co: [],
    nota: 'También aparece en el catálogo de optativas de fundamentación (área Química).' },

  /* ---------------------------- Semestre II ------------------------------ */
  { id: '2029269', cod: '2029269', nombre: 'Análisis Químico', cr: 3, sem: 2, comp: 'FO', area: 'analitica', pre: ['2026364'], co: [] },
  { id: '2029270', cod: '2029270', nombre: 'Laboratorio de Análisis Químico', cr: 3, sem: 2, comp: 'FO', area: 'analitica', pre: ['1000025'], co: ['2029269'] },
  { id: '1000003', cod: '1000003', nombre: 'Álgebra Lineal', cr: 3, sem: 2, comp: 'FO', area: 'fundamentos', pre: [], co: [], preEsp: 'Matemáticas Básicas (solo plan de nivelación)' },
  { id: '1000005', cod: '1000005', nombre: 'Cálculo Integral', cr: 4, sem: 2, comp: 'FO', area: 'fundamentos', pre: ['1000004'], co: [] },
  { id: '1000019', cod: '1000019', nombre: 'Fundamentos de Mecánica', cr: 4, sem: 2, comp: 'FO', area: 'fundamentos', pre: [], co: [], preEsp: 'Matemáticas Básicas (solo plan de nivelación)' },

  /* ---------------------------- Semestre III ----------------------------- */
  { id: '1000028', cod: '1000028', nombre: 'Principios de Química Inorgánica', cr: 3, sem: 3, comp: 'DO', area: 'estructura', pre: ['2026364'], co: [] },
  { id: '2016058', cod: '2016058', nombre: 'Átomos y Moléculas', cr: 3, sem: 3, comp: 'DO', area: 'estructura', pre: ['1000005'], co: ['1000017'] },
  { id: '1000037', cod: '1000037', nombre: 'Fisicoquímica I', cr: 3, sem: 3, comp: 'DO', area: 'fisica', pre: ['2026364'], co: [] },
  { id: '2025338', cod: '2025338', nombre: 'Laboratorio de Fisicoquímica I', cr: 2, sem: 3, comp: 'DO', area: 'fisica', pre: [], co: ['1000037'],
    nota: 'La malla oficial imprime como correquisito 2026364 (Química Fundamental); es un error. El correquisito real es la teórica, Fisicoquímica I (1000037), igual que el Lab. de Fisicoquímica II con Fisicoquímica II.' },
  { id: '1000017', cod: '1000017', nombre: 'Fundamentos de electricidad y magnetismo', cr: 4, sem: 3, comp: 'FO', area: 'fundamentos', pre: ['1000019', '1000004'], co: [] },
  { id: '1000012', cod: '1000012', nombre: 'Bioestadística Fundamental', cr: 3, sem: 3, comp: 'FO', area: 'fundamentos', pre: [], co: [], preEsp: 'Matemáticas Básicas (solo plan de nivelación)' },

  /* ---------------------------- Semestre IV ------------------------------ */
  { id: '1000034', cod: '1000034', nombre: 'Química Orgánica I', cr: 3, sem: 4, comp: 'DO', area: 'organica', pre: ['2026364'], co: [] },
  { id: '2015576', cod: '2015576', nombre: 'Fundamentos de Espectroscopía', cr: 2, sem: 4, comp: 'DO', area: 'estructura', pre: ['2016058'], co: [] },
  { id: '1000038', cod: '1000038', nombre: 'Fisicoquímica II', cr: 3, sem: 4, comp: 'DO', area: 'fisica', pre: ['1000037'], co: [] },
  { id: '2025339', cod: '2025339', nombre: 'Laboratorio de Fisicoquímica II', cr: 2, sem: 4, comp: 'DO', area: 'fisica', pre: ['2025338'], co: ['1000038'] },
  { id: 'OPT_FUND', cod: null, nombre: 'Optativa de Fundamentación', cr: 3, sem: 4, comp: 'FP', area: 'fundamentos', pre: [], co: [], ranura: ['fundamentacion'] },
  { id: 'ELE_4_1', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 4, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },

  /* ---------------------------- Semestre V ------------------------------- */
  { id: '2029266', cod: '2029266', nombre: 'Laboratorio de Métodos Ópticos', cr: 2, sem: 5, semPDF: 4, comp: 'DO', area: 'analitica', pre: ['2015576'], co: [],
    nota: 'Reubicado del semestre IV al V. Fundamentos de Espectroscopía pasó de correquisito a prerrequisito, y esa teórica está en el semestre IV: ya no pueden cursarse juntos.' },
  { id: '1000036', cod: '1000036', nombre: 'Química Orgánica II', cr: 3, sem: 5, comp: 'DO', area: 'organica', pre: ['1000034'], co: [] },
  { id: '2015572', cod: '2015572', nombre: 'Espectroscopía Aplicada', cr: 2, sem: 5, comp: 'DO', area: 'estructura', pre: [], co: ['1000036'], preSug: ['1000028'] },
  { id: '2015599', cod: '2015599', nombre: 'Química Estructural', cr: 3, sem: 5, comp: 'DO', area: 'estructura', pre: ['1000028'], co: ['2015576'],
    nota: 'La malla oficial imprime el código 2029267 (que corresponde al Lab. de electroquímica analítica). El código correcto según la malla de apoyo es 2015599.' },
  { id: 'OPT_QF', cod: null, nombre: 'Optativa de Química Física', cr: 3, sem: 5, comp: 'DP', area: 'fisica', pre: ['1000038'], co: [], ranura: ['quimica_fisica'] },
  { id: '2029265', cod: '2029265', nombre: 'Electroquímica Analítica', cr: 2, sem: 5, comp: 'DO', area: 'analitica', pre: ['2029269', '2029270'], co: [] },

  /* ---------------------------- Semestre VI ------------------------------ */
  { id: '2029267', cod: '2029267', nombre: 'Laboratorio de Electroquímica Analítica', cr: 2, sem: 6, semPDF: 5, comp: 'DO', area: 'analitica', pre: ['2029265'], co: [],
    nota: 'Reubicado del semestre V al VI. Electroquímica Analítica pasó de correquisito a prerrequisito, y esa teórica está en el semestre V. Análisis Químico y su laboratorio se siguen exigiendo de forma indirecta, por ser prerrequisito de la teórica.' },
  { id: '1000035', cod: '1000035', nombre: 'Laboratorio de Química Orgánica I', cr: 3, sem: 6, comp: 'DO', area: 'organica', pre: [], co: ['1000034'] },
  { id: 'OPT_QO', cod: null, nombre: 'Optativa de Química Orgánica', cr: 3, sem: 6, comp: 'DP', area: 'organica', pre: ['1000036'], co: [], ranura: ['quimica_organica'] },
  { id: '2029268', cod: '2029268', nombre: 'Cromatografía', cr: 1, sem: 6, comp: 'DO', area: 'analitica', pre: ['2029270'], co: [] },
  { id: 'ELE_6_1', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 6, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
  { id: 'ELE_6_2', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 6, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },

  /* ---------------------------- Semestre VII ----------------------------- */
  { id: 'OPT_QA', cod: null, nombre: 'Optativa de Química Analítica', cr: 3, sem: 7, semPDF: 6, comp: 'DP', area: 'analitica', pre: ['2029268'], co: [], ranura: ['disciplinar'],
    nota: 'Reubicada del semestre VI al VII. Los laboratorios optativos de cromatografía pasaron a exigir Cromatografía (2029268) como prerrequisito, y esa asignatura está en el semestre VI. Además, el catálogo de optativas disciplinares no tiene un grupo "Química Analítica" explícito; se habilitan todas las disciplinares.' },
  { id: '2015595', cod: '2015595', nombre: 'Principios de Química Industrial', cr: 3, sem: 7, comp: 'DO', area: 'aplicada', pre: ['1000038'], co: [] },
  { id: '2015587', cod: '2015587', nombre: 'Laboratorio de Química Orgánica II', cr: 4, sem: 7, comp: 'DO', area: 'organica', pre: ['1000035', '2015572'], co: ['1000036'],
    nota: 'La malla oficial no imprime el código; 2015587 proviene de la malla de apoyo.' },
  { id: 'OPT_EI', cod: null, nombre: 'Optativa de Estructura e Interacciones', cr: 2, sem: 7, comp: 'DP', area: 'estructura', pre: ['2015599'], co: [], ranura: ['estructura_interacciones'],
    nota: 'La malla oficial imprime el código 2029265 (Electroquímica Analítica); es una ranura optativa, no una asignatura con código fijo.' },
  { id: '2015570', cod: '2015570', nombre: 'Bioquímica', cr: 3, sem: 7, comp: 'DO', area: 'bioquimica', pre: ['1000036'], co: [] },
  { id: 'ELE_7_1', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 7, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },

  /* ---------------------------- Semestre VIII ---------------------------- */
  { id: 'ELE_9_1', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 8, semPDF: 9, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
  { id: 'OPT_AP1', cod: null, nombre: 'Optativa I Aplicada', cr: 2, sem: 8, comp: 'DP', area: 'aplicada', pre: [], co: [], ranura: ['quimica_aplicada'] },
  { id: 'OPT_AP2', cod: null, nombre: 'Optativa II Aplicada', cr: 2, sem: 8, comp: 'DP', area: 'aplicada', pre: [], co: [], ranura: ['quimica_aplicada'] },
  { id: '2015585', cod: '2015585', nombre: 'Laboratorio de Bioquímica', cr: 4, sem: 8, comp: 'DO', area: 'bioquimica', pre: [], co: ['2015570'] },
  { id: 'ELE_8_1', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 8, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
  { id: 'ELE_8_2', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 8, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },

  /* ---------------------------- Semestre IX ------------------------------ */
  { id: 'OPT_BQ', cod: null, nombre: 'Optativa de Bioquímica', cr: 3, sem: 9, semPDF: 8, comp: 'DP', area: 'bioquimica', pre: ['2015585'], co: [], ranura: ['bioquimica'],
    nota: 'Reubicada del semestre VIII al IX. Su prerrequisito, el Laboratorio de Bioquímica, está en el semestre VIII, así que en la malla impresa era imposible de cumplir.' },
  { id: '2015589', cod: '2015589', nombre: 'Laboratorio de Química Inorgánica', cr: 4, sem: 9, comp: 'DO', area: 'estructura', pre: [], co: ['2015599'],
    nota: 'La malla oficial no imprime el código; 2015589 proviene de la malla de apoyo.' },
  { id: 'ELE_9_2', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 9, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
  { id: 'ELE_9_3', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 9, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
  { id: 'ELE_9_4', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 9, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
  { id: 'ELE_9_5', cod: null, nombre: 'Electiva (libre elección)', cr: 2, sem: 9, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },

  /* ---------------------------- Semestre X ------------------------------- */
  { id: '2015281', cod: '2015281', nombre: 'Trabajo de Grado', cr: 8, sem: 10, comp: 'TG', area: 'grado', pre: [], co: [],
    preEsp: '100 % del componente Disciplinar Obligatorio y 100 % de Fundamentación',
    nota: 'Código alterno reportado en la malla de apoyo: 2025340.' },
];

/* ============================================================================
   CATÁLOGO DE OPTATIVAS  (malla de apoyo, página 2)
   grupo: fundamentacion | quimica_fisica | estructura_interacciones |
          quimica_organica | bioquimica | quimica_aplicada
   ========================================================================== */
const CATALOGO = [
  /* ------- Optativas de fundamentación -------- */
  { cod: '1000040', nombre: 'Introducción a la ciencia de materiales', grupo: 'fundamentacion', linea: 'Química' },
  { cod: '2027211', nombre: 'Orígenes del pensamiento químico', grupo: 'fundamentacion', linea: 'Química' },
  { cod: '2028061', nombre: 'Introducción a la química', grupo: 'fundamentacion', linea: 'Química' },
  { cod: '2028653', nombre: 'Herramientas estadísticas en el laboratorio de principios de análisis químico', grupo: 'fundamentacion', linea: 'Química' },

  { cod: '2017773', nombre: 'Biología de microorganismos', grupo: 'fundamentacion', linea: 'Biología' },
  { cod: '2017775', nombre: 'Biología molecular de la célula', grupo: 'fundamentacion', linea: 'Biología' },
  { cod: '2017771', nombre: 'Análisis y modelación de sistemas', grupo: 'fundamentacion', linea: 'Biología' },

  { cod: '2015734', nombre: 'Química inorgánica farmacéutica', grupo: 'fundamentacion', linea: 'Farmacia', codErrado: true,
    nota: 'El código 2015734 pertenece a «Programación de computadores» según losestudiantes.com. El código real de esta asignatura no aparece en ninguna de las dos mallas; búscala por nombre en el SIA.' },
  { cod: '2015675', nombre: 'Introducción a la farmacia', grupo: 'fundamentacion', linea: 'Farmacia' },

  { cod: '2015734', nombre: 'Programación de computadores', grupo: 'fundamentacion', linea: 'Matemáticas y estadística', confirmado: true },
  { cod: '2015162', nombre: 'Cálculo vectorial', grupo: 'fundamentacion', linea: 'Matemáticas y estadística' },
  { cod: '2016342', nombre: 'Cálculo de ecuaciones diferenciales', grupo: 'fundamentacion', linea: 'Matemáticas y estadística' },
  { cod: '1000013', nombre: 'Probabilidad y estadística fundamental', grupo: 'fundamentacion', linea: 'Matemáticas y estadística' },
  { cod: '1000015', nombre: 'Probabilidad fundamental', grupo: 'fundamentacion', linea: 'Matemáticas y estadística' },

  { cod: '2016650', nombre: 'Fundamentos de física experimental', grupo: 'fundamentacion', linea: 'Física' },
  { cod: '1000021', nombre: 'Fundamentos de mecánica de fluidos', grupo: 'fundamentacion', linea: 'Física' },

  { cod: '2015497', nombre: 'Geodinámica interna', grupo: 'fundamentacion', linea: 'Otras ciencias' },
  { cod: '2015496', nombre: 'Geodinámica externa', grupo: 'fundamentacion', linea: 'Otras ciencias' },
  { cod: '2015734', nombre: 'Geometría elemental', grupo: 'fundamentacion', linea: 'Otras ciencias', codErrado: true,
    nota: 'El código 2015734 pertenece a «Programación de computadores» según losestudiantes.com. El código real de esta asignatura no aparece en ninguna de las dos mallas; búscala por nombre en el SIA.' },
  { cod: '2015540', nombre: 'Mineralogía', grupo: 'fundamentacion', linea: 'Otras ciencias', codErrado: true,
    nota: 'El código 2015540 pertenece a «Acción colectiva y movimientos sociales» según losestudiantes.com. Búscala por nombre en el SIA.' },

  { cod: '2016609', nombre: 'Seguridad industrial', grupo: 'fundamentacion', linea: 'Ingeniería' },
  { cod: '2015703', nombre: 'Ingeniería económica', grupo: 'fundamentacion', linea: 'Ingeniería' },
  { cod: '2015718', nombre: 'Introducción a la ingeniería química', grupo: 'fundamentacion', linea: 'Ingeniería' },
  { cod: '2017265', nombre: 'Ingeniería y desarrollo sostenible', grupo: 'fundamentacion', linea: 'Ingeniería' },

  { cod: '2017778', nombre: 'Fundamentos de investigación', grupo: 'fundamentacion', linea: 'Investigación' },

  { cod: '2016343', nombre: 'Español funcional', grupo: 'fundamentacion', linea: 'Comunicación oral y escrita' },
  { cod: '2015709', nombre: 'Taller de comprensión y producción de textos I', grupo: 'fundamentacion', linea: 'Comunicación oral y escrita', codErrado: true,
    nota: 'El código 2015709 pertenece a «Comunicación oral y escrita» según losestudiantes.com. El código real de esta asignatura no aparece en ninguna de las dos mallas; búscala por nombre en el SIA.' },
  { cod: '2015709', nombre: 'Comunicación oral y escrita', grupo: 'fundamentacion', linea: 'Comunicación oral y escrita', confirmado: true },
  { cod: '2015979', nombre: 'Análisis del discurso I', grupo: 'fundamentacion', linea: 'Comunicación oral y escrita' },
  { cod: '2017002', nombre: 'Narrativa I', grupo: 'fundamentacion', linea: 'Comunicación oral y escrita' },

  { cod: '2015800', nombre: 'Estructura de la sociedad moderna I', grupo: 'fundamentacion', linea: 'Sociedad' },
  { cod: '2018012', nombre: 'Salud y sociedad', grupo: 'fundamentacion', linea: 'Sociedad' },

  { cod: '2016007', nombre: 'Fundamentos de administración', grupo: 'fundamentacion', linea: 'Economía y administración' },
  { cod: '2016008', nombre: 'Fundamentos de contabilidad financiera', grupo: 'fundamentacion', linea: 'Economía y administración' },
  { cod: '2015270', nombre: 'Fundamentos de economía', grupo: 'fundamentacion', linea: 'Economía y administración' },

  { cod: '2016869', nombre: 'Dibujo I', grupo: 'fundamentacion', linea: 'Arte' },
  { cod: '2016139', nombre: 'Historia del arte I', grupo: 'fundamentacion', linea: 'Arte', codErrado: true,
    nota: 'El código 2016139 pertenece a «Música y sociedad en Colombia» según losestudiantes.com. El código real de esta asignatura no aparece en ninguna de las dos mallas; búscala por nombre en el SIA.' },
  { cod: '2016139', nombre: 'Música y sociedad colombiana', grupo: 'fundamentacion', linea: 'Arte', confirmado: true },
  { cod: '2016073', nombre: 'Herencias — una mirada a la historia de Colombia', grupo: 'fundamentacion', linea: 'Arte' },

  /* ------- Optativas disciplinares -------- */
  { cod: '2015577', nombre: 'Interfaces', grupo: 'quimica_fisica', linea: 'Química física' },
  { cod: '2015594', nombre: 'Modelamiento en química', grupo: 'quimica_fisica', linea: 'Química física' },
  { cod: '2015598', nombre: 'Química de sólidos', grupo: 'quimica_fisica', linea: 'Química física' },

  { cod: '2015600', nombre: 'Bioinorgánica', grupo: 'estructura_interacciones', linea: 'Estructura e interacciones', codErrado: true,
    nota: 'El código 2015600 pertenece a «Química metalorgánica» según losestudiantes.com. El código real de esta asignatura no aparece en ninguna de las dos mallas; búscala por nombre en el SIA.' },
  { cod: '2015600', nombre: 'Química metalorgánica', grupo: 'estructura_interacciones', linea: 'Estructura e interacciones', confirmado: true },
  { cod: '2026365', nombre: 'Nanomateriales y nanotecnología', grupo: 'estructura_interacciones', linea: 'Estructura e interacciones' },
  { cod: '2027544', nombre: 'Laboratorio de química inorgánica avanzada', grupo: 'estructura_interacciones', linea: 'Estructura e interacciones',
    nota: 'En el PDF el nombre aparece truncado como "Laboratorio de química".' },

  { cod: '2015596', nombre: 'Química de carbaniones', grupo: 'quimica_organica', linea: 'Química orgánica' },
  { cod: '2015597', nombre: 'Química de heterociclos', grupo: 'quimica_organica', linea: 'Química orgánica' },

  { cod: '2015575', nombre: 'Fundamentos de biología molecular', grupo: 'bioquimica', linea: 'Bioquímica' },
  { cod: '2015569', nombre: 'Bioquímica analítica', grupo: 'bioquimica', linea: 'Bioquímica' },
  { cod: '2015593', nombre: 'Microbiología', grupo: 'bioquimica', linea: 'Bioquímica' },

  { cod: '2029117', nombre: 'Gestión empresarial química', grupo: 'quimica_aplicada', linea: 'Química aplicada' },
  { cod: '2022897', nombre: 'Energía y combustibles', grupo: 'quimica_aplicada', linea: 'Química aplicada' },
  { cod: '2015581', nombre: 'Laboratorio avanzado de química industrial', grupo: 'quimica_aplicada', linea: 'Química aplicada' },
  { cod: '2022919', nombre: 'Química agrícola', grupo: 'quimica_aplicada', linea: 'Química aplicada', codErrado: true,
    nota: 'El código 2022919 pertenece a «Laboratorio de química agrícola» según losestudiantes.com. El código real de esta asignatura no aparece en ninguna de las dos mallas; búscala por nombre en el SIA.' },
  { cod: '2022919', nombre: 'Laboratorio de química agrícola', grupo: 'quimica_aplicada', linea: 'Química aplicada', confirmado: true },
  { cod: '2022902', nombre: 'Introducción a la química de alimentos', grupo: 'quimica_aplicada', linea: 'Química aplicada' },
  { cod: '2022903', nombre: 'Laboratorio de química de alimentos', grupo: 'quimica_aplicada', linea: 'Química aplicada' },
  { cod: '2022909', nombre: 'Química de hongos', grupo: 'quimica_aplicada', linea: 'Química aplicada' },
  { cod: '2022912', nombre: 'Química de polímeros', grupo: 'quimica_aplicada', linea: 'Química aplicada' },
  { cod: '2026399', nombre: 'Química de aromas', grupo: 'quimica_aplicada', linea: 'Química aplicada' },
  { cod: '2023819', nombre: 'Química de biomateriales', grupo: 'quimica_aplicada', linea: 'Química aplicada' },
  { cod: '2015582', nombre: 'Laboratorio avanzado de inorgánica', grupo: 'quimica_aplicada', linea: 'Laboratorios avanzados' },
  { cod: '2015580', nombre: 'Laboratorio avanzado de bioquímica', grupo: 'quimica_aplicada', linea: 'Laboratorios avanzados' },
  { cod: '2015606', nombre: 'Laboratorio avanzado de fisicoquímica', grupo: 'quimica_aplicada', linea: 'Laboratorios avanzados' },
  { cod: '2015583', nombre: 'Laboratorio avanzado de orgánica', grupo: 'quimica_aplicada', linea: 'Laboratorios avanzados' },
  { cod: '2027525', nombre: 'Prácticas de investigación en ciencias químicas', grupo: 'quimica_aplicada', linea: 'Laboratorios avanzados' },
];

const GRUPOS_CATALOGO = {
  fundamentacion: 'Optativas de fundamentación',
  quimica_fisica: 'Química física',
  estructura_interacciones: 'Estructura e interacciones',
  quimica_organica: 'Química orgánica',
  bioquimica: 'Bioquímica',
  quimica_aplicada: 'Química aplicada',
};

/* Grupos disciplinares (para la ranura genérica 'disciplinar') */
const GRUPOS_DISCIPLINARES = ['quimica_fisica', 'estructura_interacciones', 'quimica_organica', 'bioquimica', 'quimica_aplicada'];

/* ============================================================================
   Inconsistencias detectadas entre los dos documentos
   ========================================================================== */
const INCONSISTENCIAS = [
  { asig: 'Malla reordenada para que sea cursable', detalle: 'Al pasar tres laboratorios de correquisito a prerrequisito, quedaron ubicados en el mismo semestre que su teórica, lo que es imposible de cumplir. Se reubicaron al semestre más temprano en que sí son posibles: Laboratorio de Métodos Ópticos IV→V, Laboratorio de Electroquímica Analítica V→VI y Optativa de Química Analítica VI→VII. De paso se corrigió un problema que ya venía de antes: la Optativa de Bioquímica exigía el Laboratorio de Bioquímica estando ambos en el semestre VIII, así que pasó al IX, y una electiva bajó del IX al VIII para compensar la carga. Resultado: los 158 créditos intactos, semestres I a IX entre 15 y 18 créditos, y ninguna asignatura por delante de sus requisitos. Cada asignatura movida indica en su ficha dónde la ubica la malla impresa.' },
  { asig: 'Cambios de requisitos aplicados (laboratorios)', detalle: 'Tres laboratorios pasaron de correquisito a prerrequisito de su teórica, según el cambio vigente reportado: Laboratorio de Electroquímica Analítica (ahora exige Electroquímica Analítica aprobada), Laboratorio de Métodos Ópticos (ahora exige Fundamentos de Espectroscopía) y los laboratorios optativos de cromatografía (ahora exigen Cromatografía). Ya no pueden inscribirse en el mismo semestre que su teórica, así que el plan sugerido los corre un semestre. Los PDF de la malla todavía los muestran como correquisitos.' },
  { asig: 'Química Estructural', detalle: 'La malla oficial imprime el código 2029267, que ya está asignado al Laboratorio de Electroquímica Analítica. La malla de apoyo indica 2015599, y coincide con el prerrequisito citado por la Optativa de Estructura e Interacciones y el correquisito del Lab. de Química Inorgánica. Se usa 2015599.' },
  { asig: 'Optativa de Estructura e Interacciones', detalle: 'La malla oficial le asigna el código 2029265 (Electroquímica Analítica). Es una ranura optativa sin código propio.' },
  { asig: 'Laboratorio de Fisicoquímica I', detalle: 'La malla oficial imprime como correquisito 2026364 (Química Fundamental, semestre I). Es un error: el correquisito es la teórica, Fisicoquímica I (1000037), tal como el Lab. de Fisicoquímica II va con Fisicoquímica II. La app usa 1000037.' },
  { asig: 'Principios de Química Inorgánica / Lab. Química Inorgánica / Lab. Química Orgánica II', detalle: 'Sin código en la malla oficial. Se toman de la malla de apoyo: 1000028, 2015589 y 2015587 respectivamente.' },
  { asig: 'Laboratorio de Química Orgánica I', detalle: 'La malla de apoyo imprime 1000036 (que es Química Orgánica II). El código correcto según la malla oficial es 1000035.' },
  { asig: 'Trabajo de Grado', detalle: 'Dos códigos reportados: 2015281 (oficial) y 2025340 (apoyo, posiblemente otra modalidad).' },
  { asig: 'Códigos duplicados en el catálogo de optativas — resueltos', detalle: 'La malla de apoyo repite cinco códigos en asignaturas distintas. Contrastándolos con losestudiantes.com se pudo determinar a cuál pertenece cada uno: 2015734 → Programación de computadores; 2015709 → Comunicación oral y escrita; 2016139 → Música y sociedad en Colombia; 2015600 → Química metalorgánica; 2022919 → Laboratorio de química agrícola. Las demás asignaturas que llevaban esos códigos quedan marcadas con ⚠: su nombre es correcto pero el código no, y el verdadero no aparece en ninguna de las dos mallas.' },
  { asig: 'Mineralogía', detalle: 'La malla de apoyo la imprime como «Mineraalogía» con código 2015540, pero ese código corresponde a «Acción colectiva y movimientos sociales» según losestudiantes.com. Búscala por nombre en el SIA.' },
  { asig: 'Verificación contra una tercera fuente', detalle: 'Los códigos se contrastaron con losestudiantes.com (ejecutando herramientas/verificar-losestudiantes.js). De las 34 asignaturas del plan con código, 33 existen allí con un nombre equivalente; solo el Laboratorio de Análisis Químico (2029270) no está registrado. Esto confirma de forma independiente los códigos que la malla oficial no imprime (1000028, 2015587, 2015589) y que Química Estructural es 2015599, no 2029267.' },
  { asig: 'Optativa de Bioquímica', detalle: 'La malla oficial la ubica en el semestre VIII con prerrequisito 2015585 (Laboratorio de Bioquímica), que está en ese mismo semestre VIII. Un prerrequisito debe cursarse antes, así que en la práctica la optativa cae en el semestre IX o el laboratorio debe adelantarse. La app respeta el prerrequisito y la programa después.' },
  { asig: 'Cromatografía (laboratorio)', detalle: 'La malla de apoyo muestra un "Laboratorio de cromatografía" con código 20294(55/57) que no aparece en la malla oficial.' },
  { asig: 'Créditos de las optativas', detalle: 'Ninguno de los dos documentos indica los créditos de las asignaturas del catálogo. La app usa los créditos de la ranura del plan; puedes ajustarlos manualmente.' },
];

/* El plan editable (PLAN / PLAN_POR_ID) se construye en app.js a partir de
   PLAN_BASE más las modificaciones que guarde la persona usuaria. */
