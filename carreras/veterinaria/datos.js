/* ============================================================================
   datos.js — Medicina Veterinaria (plan 2555), UNAL Sede Bogotá
   Fuentes:
     - Malla curricular del programa (Facultad de Medicina Veterinaria y de
       Zootecnia): 12 semestres, agrupaciones y créditos por componente.
     - Acuerdo del plan de estudios, con las modificaciones de los Acuerdos CF
       80 de 2018, 85, 96, 97 y 101 de 2020 y 3 de 2023: códigos, créditos,
       obligatoriedad, prerrequisitos y correquisitos de cada agrupación.
       Transcrito de sus tablas el 2026-08-18.
     - Catálogo de asignaturas del SIA (plan 2555): verificación de códigos y
       créditos (69 asignaturas) y oferta del semestre.
   ========================================================================== */

/* --- Componentes de formación ------------------------------------------- */
/* Del plan: fundamentación 35 obligatorios + 3 optativos = 38; disciplinar 120
   obligatorios (incluye los 10 del trabajo de grado) + 10 optativos = 130;
   libre elección 41 → 209 créditos. Aquí el trabajo de grado va como
   componente propio (110 + 10) para verlo aparte; los totales no cambian.
   La nivelación (inglés, matemáticas básicas, lecto-escritura) no cuenta.   */
const COMPONENTES = {
  FO: { id: 'FO', nombre: 'Fundamentación obligatoria', corto: 'Fund. oblig.', creditos: 35, color: '#e9b949' },
  FP: { id: 'FP', nombre: 'Fundamentación optativa', corto: 'Fund. optativa', creditos: 3, color: '#f6d992' },
  DO: { id: 'DO', nombre: 'Disciplinar obligatoria', corto: 'Disc. oblig.', creditos: 110, color: '#4f9d69' },
  DP: { id: 'DP', nombre: 'Disciplinar optativa', corto: 'Disc. optativa', creditos: 10, color: '#9fce9a' },
  TG: { id: 'TG', nombre: 'Trabajo de grado', corto: 'Trabajo de grado', creditos: 10, color: '#3f6fb5' },
  LE: { id: 'LE', nombre: 'Libre elección', corto: 'Libre elección', creditos: 41, color: '#b07bc4' },
  NV: { id: 'NV', nombre: 'Nivelación (no cuenta en los créditos)', corto: 'Nivelación', creditos: 12, color: '#c9c9d4', noCuenta: true },
};

const TOTAL_CREDITOS = 209;

/* --- Agrupaciones del acuerdo -------------------------------------------- */
const AREAS = {
  intro_vet: 'Introducción a la veterinaria',
  quimica: 'Química',
  morfo: 'Morfofisiología',
  biologia: 'Biología',
  estadistica: 'Bioestadística y genética',
  produccion: 'Producción',
  farmaco: 'Farmacología y toxicología',
  bases: 'Bases de la enfermedad',
  preclinicas: 'Preclínicas',
  cirugia: 'Cirugía e imagenología',
  epidemiologia: 'Epidemiología y salud pública',
  clinicas: 'Clínicas',
  socioeconomica: 'Socioeconómica',
  campo: 'Trabajo de campo',
  grado: 'Trabajo de grado',
  flexible: 'Componente flexible',
  idioma: 'Nivelación',
};

/* ============================================================================
   PLAN DE ESTUDIOS (12 semestres)
   ----------------------------------------------------------------------------
   pre / co       prerrequisitos y correquisitos del acuerdo
   preEsp         requisito en texto (no evaluable automáticamente)
   preFund        exige el 100 % del componente de fundamentación
   preCreditos    umbral de créditos: { comps | areas, min }, todas las reglas
   ranura         cupo genérico: grupos del catálogo que admite
   ========================================================================== */
const PLAN_BASE = [
  /* ---------------------------- Semestre I ------------------------------- */
  { id: 'BIO_OPT', cod: null, nombre: 'Biología (optativa)', cr: 3, sem: 1, comp: 'FP', area: 'biologia', pre: [], co: [], ranura: ['biologia_opt'],
    nota: 'Eliges una de tres: Biología general (1000009), Biología molecular y celular (1000010) o Fundamentos de ecología (1000011). Es prerrequisito de Biofísica, Anatomía comparada, Histología y embriología, Biología molecular avanzada, Inmunología y Suelos y plantas.' },
  { id: '1000041', cod: '1000041', nombre: 'Química básica', cr: 3, sem: 1, comp: 'FO', area: 'quimica', pre: [], co: [] },
  { id: '2017048', cod: '2017048', nombre: 'Bioética y bienestar en salud animal', cr: 3, sem: 1, comp: 'FO', area: 'intro_vet', pre: [], co: [] },
  { id: '2017066', cod: '2017066', nombre: 'Introducción a las ciencias veterinarias', cr: 2, sem: 1, comp: 'FO', area: 'intro_vet', pre: [], co: [] },
  { id: 'ELE_1_1', cod: null, nombre: 'Libre elección', cr: 3, sem: 1, comp: 'LE', area: 'flexible', pre: [], co: [], ranura: ['libre'] },
  { id: '1000044', cod: '1000044', nombre: 'Inglés I', cr: 3, sem: 1, comp: 'NV', area: 'idioma', pre: [], co: [],
    nota: 'Nivelación: los 12 créditos de inglés (I a IV) no cuentan en los 209 del plan. Modalidad semestral (1000044); también existe virtual (1000048) e intensivo (1000052).' },

  /* ---------------------------- Semestre II ------------------------------ */
  { id: '2017046', cod: '2017046', nombre: 'Anatomía comparada', cr: 5, sem: 2, comp: 'FO', area: 'morfo', pre: ['2017066', 'BIO_OPT'], co: ['2017063'] },
  { id: '2017063', cod: '2017063', nombre: 'Histología y embriología', cr: 4, sem: 2, comp: 'FO', area: 'morfo', pre: ['2017066', 'BIO_OPT'], co: ['2017046'] },
  { id: '1000042', cod: '1000042', nombre: 'Bioquímica básica', cr: 3, sem: 2, comp: 'FO', area: 'quimica', pre: ['1000041'], co: [] },
  { id: '2017049', cod: '2017049', nombre: 'Biofísica', cr: 2, sem: 2, comp: 'FO', area: 'morfo', pre: ['BIO_OPT'], co: [] },
  { id: '1000012', cod: '1000012', nombre: 'Bioestadística fundamental', cr: 3, sem: 2, comp: 'FO', area: 'estadistica', pre: [], co: [],
    preEsp: 'Clasificación en Matemáticas Básicas (o haberla aprobado)' },
  { id: 'ELE_2_1', cod: null, nombre: 'Libre elección', cr: 3, sem: 2, comp: 'LE', area: 'flexible', pre: [], co: [], ranura: ['libre'] },
  { id: '1000045', cod: '1000045', nombre: 'Inglés II', cr: 3, sem: 2, comp: 'NV', area: 'idioma', pre: ['1000044'], co: [] },

  /* ---------------------------- Semestre III ----------------------------- */
  { id: '2017061', cod: '2017061', nombre: 'Fisiología', cr: 5, sem: 3, comp: 'FO', area: 'morfo', pre: ['2017046', '2017063', '1000042', '2017049'], co: [] },
  { id: '2017050', cod: '2017050', nombre: 'Biología molecular avanzada', cr: 2, sem: 3, comp: 'FO', area: 'biologia', pre: ['1000042', 'BIO_OPT'], co: ['2017065'] },
  { id: '2017065', cod: '2017065', nombre: 'Inmunología', cr: 2, sem: 3, comp: 'DO', area: 'bases', pre: ['BIO_OPT', '1000042'], co: ['2017050'] },
  { id: 'PROD_1', cod: null, nombre: 'Optativa de producción', cr: 2, sem: 3, comp: 'DP', area: 'produccion', pre: [], co: [], ranura: ['produccion'],
    nota: 'La malla sugiere aquí Suelos y plantas (2017092). La agrupación Producción exige 8 créditos: Nutrición (obligatoria, 2) más 6 en optativas.' },
  { id: 'ELE_3_1', cod: null, nombre: 'Libre elección', cr: 3, sem: 3, comp: 'LE', area: 'flexible', pre: [], co: [], ranura: ['libre'] },
  { id: '1000046', cod: '1000046', nombre: 'Inglés III', cr: 3, sem: 3, comp: 'NV', area: 'idioma', pre: ['1000045'], co: [] },

  /* ---------------------------- Semestre IV ------------------------------ */
  { id: '2017062', cod: '2017062', nombre: 'Genética', cr: 3, sem: 4, comp: 'FO', area: 'estadistica', pre: ['1000012', '2017050'], co: [] },
  { id: '2017097', cod: '2017097', nombre: 'Virología', cr: 3, sem: 4, comp: 'DO', area: 'bases', pre: ['2017050', '2017065', '2017061'], co: [] },
  { id: '2017047', cod: '2017047', nombre: 'Bacteriología y micología', cr: 3, sem: 4, comp: 'DO', area: 'bases', pre: ['2017050', '2017065', '2017061'], co: [] },
  { id: '2017077', cod: '2017077', nombre: 'Parasitología', cr: 4, sem: 4, comp: 'DO', area: 'bases', pre: ['2017050', '2017065', '2017061'], co: [] },
  { id: '2017076', cod: '2017076', nombre: 'Nutrición', cr: 2, sem: 4, comp: 'DO', area: 'produccion', pre: ['1000042', '2017061'], co: [] },
  { id: '1000047', cod: '1000047', nombre: 'Inglés IV', cr: 3, sem: 4, comp: 'NV', area: 'idioma', pre: ['1000046'], co: [] },

  /* ---------------------------- Semestre V ------------------------------- */
  { id: '2017088', cod: '2017088', nombre: 'Semiología', cr: 3, sem: 5, comp: 'DO', area: 'preclinicas', pre: ['2017077', '2017047', '2017097'], co: ['2017064'] },
  { id: '2017060', cod: '2017060', nombre: 'Farmacología', cr: 4, sem: 5, comp: 'DO', area: 'farmaco', pre: ['2017047', '2017077', '2017097'], co: [] },
  { id: '2017067', cod: '2017067', nombre: 'Mecanismos de enfermedad', cr: 4, sem: 5, comp: 'DO', area: 'bases', pre: ['2017077', '2017097', '2017047', '2017076'], co: [] },
  { id: '2017064', cod: '2017064', nombre: 'Imagenología', cr: 1, sem: 5, comp: 'DO', area: 'cirugia', pre: [], co: ['2017088'] },
  { id: 'PROD_2', cod: null, nombre: 'Optativa de producción', cr: 2, sem: 5, comp: 'DP', area: 'produccion', pre: [], co: [], ranura: ['produccion'],
    nota: 'La malla la llama «Optativo (SP1)» y sugiere Sistemas de producción I (2017089).' },
  { id: '2017091', cod: '2017091', nombre: 'Sociedades rurales', cr: 3, sem: 5, comp: 'DO', area: 'socioeconomica', pre: [], co: [], preFund: true,
    preEsp: 'Aprobar el 100 % de los créditos del componente de fundamentación (38 créditos)' },
  { id: 'ELE_5_1', cod: null, nombre: 'Libre elección', cr: 3, sem: 5, comp: 'LE', area: 'flexible', pre: [], co: [], ranura: ['libre'] },

  /* ---------------------------- Semestre VI ------------------------------ */
  { id: '2017052', cod: '2017052', nombre: 'Cirugía I', cr: 4, sem: 6, comp: 'DO', area: 'cirugia', pre: ['2017088', '2017064', '2017060'], co: ['2017078'] },
  { id: '2017078', cod: '2017078', nombre: 'Patología clínica', cr: 3, sem: 6, comp: 'DO', area: 'bases', pre: ['2017067', '2017088'], co: ['2017052'] },
  { id: '2017079', cod: '2017079', nombre: 'Patología sistémica', cr: 4, sem: 6, comp: 'DO', area: 'bases', pre: ['2017067', '2017088'], co: [] },
  { id: 'PROD_3', cod: null, nombre: 'Optativa de producción', cr: 2, sem: 6, comp: 'DP', area: 'produccion', pre: [], co: [], ranura: ['produccion'],
    nota: 'La malla la llama «Optativo (SP2)» y sugiere Sistemas de producción II (2017090).' },
  { id: '2017255', cod: '2017255', nombre: 'Política agropecuaria', cr: 3, sem: 6, comp: 'DO', area: 'socioeconomica', pre: ['2017091'], co: [] },
  { id: 'ELE_6_1', cod: null, nombre: 'Libre elección', cr: 3, sem: 6, comp: 'LE', area: 'flexible', pre: [], co: [], ranura: ['libre'] },

  /* ---------------------------- Semestre VII ----------------------------- */
  { id: '2017053', cod: '2017053', nombre: 'Cirugía II', cr: 2, sem: 7, comp: 'DO', area: 'cirugia', pre: ['2017052'], co: [] },
  { id: '2017093', cod: '2017093', nombre: 'Toxicología', cr: 3, sem: 7, comp: 'DO', area: 'farmaco', pre: ['2017060', '2017079', '2017078'], co: [] },
  { id: '2017058', cod: '2017058', nombre: 'Epidemiología', cr: 3, sem: 7, comp: 'DO', area: 'epidemiologia', pre: ['2017079', '1000012'], co: [] },
  { id: '2017074', cod: '2017074', nombre: 'Medicina aviar', cr: 3, sem: 7, comp: 'DO', area: 'preclinicas', pre: ['2017079', '2017060', '2017078'], co: [] },
  { id: '2017080', cod: '2017080', nombre: 'Planeación y evaluación de empresas agropecuarias', cr: 2, sem: 7, comp: 'DO', area: 'socioeconomica', pre: ['2017255'], co: [] },
  { id: '2017059', cod: '2017059', nombre: 'Extensión y desarrollo rural', cr: 1, sem: 7, comp: 'DO', area: 'socioeconomica', pre: ['2017255'], co: [] },

  /* ---------------------------- Semestre VIII ---------------------------- */
  { id: '2017070', cod: '2017070', nombre: 'Medicina interna de pequeños', cr: 2, sem: 8, comp: 'DO', area: 'preclinicas', pre: ['2017093'], co: [] },
  { id: '2017072', cod: '2017072', nombre: 'Medicina interna de rumiantes', cr: 2, sem: 8, comp: 'DO', area: 'preclinicas', pre: ['2017053'], co: ['2017084', '2017068'] },
  { id: '2017087', cod: '2017087', nombre: 'Salud pública', cr: 4, sem: 8, comp: 'DO', area: 'epidemiologia', pre: ['2017058', '2017093'], co: [] },
  { id: '2017068', cod: '2017068', nombre: 'Salud de hato', cr: 3, sem: 8, comp: 'DO', area: 'preclinicas', pre: ['2017058'], co: ['2017084'],
    preCreditos: [{ areas: ['produccion'], min: 8 }],
    preEsp: 'Aprobar 8 créditos de la agrupación de Producción' },
  { id: '2017084', cod: '2017084', nombre: 'Teriogenología I', cr: 2, sem: 8, comp: 'DO', area: 'preclinicas', pre: ['2017058'], co: ['2017068'] },
  { id: 'LP_1', cod: null, nombre: 'Línea de profundización I', cr: 3, sem: 8, comp: 'LE', area: 'flexible', pre: [], co: [], ranura: ['libre'],
    nota: 'De los 41 créditos de libre elección, 6 deben cursarse en las líneas de profundización que defina el programa: primero la Línea I y después la Línea II de la misma área.' },
  { id: 'TC_1', cod: null, nombre: 'Trabajo de campo (optativo)', cr: 2, sem: 8, comp: 'DP', area: 'campo', pre: ['2017255'], co: [], ranura: ['campo'],
    nota: 'La agrupación Trabajo de campo exige 4 créditos: dos salidas de 2. Se programan fuera de las semanas del calendario académico.' },

  /* ---------------------------- Semestre IX ------------------------------ */
  { id: '2017069', cod: '2017069', nombre: 'Medicina interna de equinos', cr: 2, sem: 9, comp: 'DO', area: 'preclinicas', pre: ['2017053', '2017072'], co: [] },
  { id: '2017071', cod: '2017071', nombre: 'Medicina interna de porcinos', cr: 2, sem: 9, comp: 'DO', area: 'preclinicas', pre: ['2017058', '2017087'], co: [] },
  { id: '2017073', cod: '2017073', nombre: 'Medicina interna de silvestres', cr: 2, sem: 9, comp: 'DO', area: 'preclinicas', pre: ['2017058', '2017074', '2017087'], co: [] },
  { id: '2017085', cod: '2017085', nombre: 'Teriogenología II', cr: 2, sem: 9, comp: 'DO', area: 'preclinicas', pre: ['2017084'], co: [] },
  { id: 'LP_2', cod: null, nombre: 'Línea de profundización II', cr: 3, sem: 9, comp: 'LE', area: 'flexible', pre: [], co: [], ranura: ['libre'],
    nota: 'Debe ser de la misma área que la Línea de profundización I.' },
  { id: 'TC_2', cod: null, nombre: 'Trabajo de campo (optativo)', cr: 2, sem: 9, comp: 'DP', area: 'campo', pre: ['2017255'], co: [], ranura: ['campo'] },

  /* ---------------------------- Semestre X ------------------------------- */
  { id: '2017054', cod: '2017054', nombre: 'Clínica de grandes animales', cr: 8, sem: 10, comp: 'DO', area: 'clinicas', pre: ['2017069'], co: ['2017056'],
    nota: 'Las asignaturas de la agrupación Clínicas duran 20 semanas y son correquisitos entre sí: se inscriben las cuatro en el mismo semestre.' },
  { id: '2017056', cod: '2017056', nombre: 'Clínica de pequeños animales', cr: 8, sem: 10, comp: 'DO', area: 'clinicas', pre: [], co: ['2017055'] },
  { id: '2017055', cod: '2017055', nombre: 'Clínica de la reproducción', cr: 8, sem: 10, comp: 'DO', area: 'clinicas', pre: [], co: ['2017086'] },
  { id: '2017086', cod: '2017086', nombre: 'Rotación por laboratorios', cr: 8, sem: 10, comp: 'DO', area: 'clinicas', pre: [], co: ['2017054'] },

  /* ---------------------------- Semestre XI ------------------------------ */
  { id: 'PRACT', cod: null, nombre: 'Práctica integrada', cr: 20, sem: 11, comp: 'LE', area: 'flexible', pre: [], co: [], ranura: ['practicas'],
    preCreditos: [{ comps: ['FO', 'FP'], min: 38 }, { comps: ['DO', 'DP'], min: 120 }],
    preEsp: 'Haber aprobado los 38 créditos de Fundamentación y 120 del componente Disciplinar o profesional',
    nota: 'Dura 20 semanas y vale 20 créditos, que salen del componente de libre elección. Se elige entre las prácticas que ofrece el programa, preferiblemente de la misma línea de profundización.' },

  /* ---------------------------- Semestre XII ----------------------------- */
  { id: '2017249', cod: '2017249', nombre: 'Trabajo de grado', cr: 10, sem: 12, comp: 'TG', area: 'grado', pre: [], co: [],
    preCreditos: [{ comps: ['DO', 'DP'], min: 88 }],
    preEsp: 'Aprobar 88 créditos del componente de Formación Disciplinar o Profesional',
    nota: 'Modalidad alterna en el acuerdo: Trabajo de grado - Asignaturas de posgrado (2017250), también de 10 créditos. Cambia el código desde «Editar asignatura» si es la tuya.' },
];

/* ============================================================================
   CATÁLOGO: asignaturas opcionales del plan
   Los prerrequisitos son los del acuerdo; el cupo al que asignes una los hereda.
   ========================================================================== */
const CATALOGO = [
  /* ------- Biología de fundamentación: eliges una -------- */
  { cod: '1000009', nombre: 'Biología general', grupo: 'biologia_opt', linea: 'Biología (una de tres)' },
  { cod: '1000010', nombre: 'Biología molecular y celular', grupo: 'biologia_opt', linea: 'Biología (una de tres)' },
  { cod: '1000011', nombre: 'Fundamentos de ecología', grupo: 'biologia_opt', linea: 'Biología (una de tres)' },

  /* ------- Producción (6 créditos optativos de los 8 de la agrupación) -------- */
  { cod: '2017092', nombre: 'Suelos y plantas', grupo: 'produccion', linea: 'Producción', pre: ['BIO_OPT', '1000042'] },
  { cod: '2017089', nombre: 'Sistemas de producción I', grupo: 'produccion', linea: 'Producción', pre: ['2017076', '2017062'] },
  { cod: '2017090', nombre: 'Sistemas de producción II', grupo: 'produccion', linea: 'Producción', pre: ['2017076', '2017062'] },
  { cod: '2017137', nombre: 'Nutrición y alimentación I', grupo: 'produccion', linea: 'Producción', pre: ['1000042'] },
  { cod: '2016847', nombre: 'Medicina de peces', grupo: 'produccion', linea: 'Producción', pre: ['2017062'] },
  { cod: '2017132', nombre: 'Mercadeo agropecuario', grupo: 'produccion', linea: 'Producción', pre: ['2017091'] },
  { cod: '2017083', nombre: 'Producción de bovinos de leche', grupo: 'produccion', linea: 'Producción (no está en el plan del SIA)', pre: ['2017076'], fueraDelSia: true },
  { cod: '2017082', nombre: 'Producción de bovinos de carne', grupo: 'produccion', linea: 'Producción (no está en el plan del SIA)', pre: ['2017076'], fueraDelSia: true },
  { cod: '2025807', nombre: 'Producción porcina', grupo: 'produccion', linea: 'Producción (no está en el plan del SIA)', pre: ['2017062', '2017076'], fueraDelSia: true },
  { cod: '2026248', nombre: 'Problemática ambiental', grupo: 'produccion', linea: 'Producción (no está en el plan del SIA)', pre: ['2017062'], fueraDelSia: true },

  /* ------- Trabajo de campo (4 créditos) -------- */
  { cod: '2017096', nombre: 'Trabajo de campo Quindío', grupo: 'campo', linea: 'Trabajo de campo', pre: ['2017255'] },
  { cod: '2017095', nombre: 'Trabajo de campo Los Llanos', grupo: 'campo', linea: 'Trabajo de campo', pre: ['2017255'] },
  { cod: '2017094', nombre: 'Trabajo de campo Costa Atlántica', grupo: 'campo', linea: 'Trabajo de campo', pre: ['2017255'] },

  /* ------- Prácticas integradas (20 créditos, semestre XI) -------- */
  { cod: '2022947', nombre: 'Práctica integrada Acuicultura III', grupo: 'practicas', linea: 'Prácticas integradas' },
  { cod: '2026755', nombre: 'Prácticas integradas en toxicología acuática', grupo: 'practicas', linea: 'Prácticas integradas' },
  { cod: '2022948', nombre: 'Práctica integrada Ciencia y tecnología de alimentos III', grupo: 'practicas', linea: 'Prácticas integradas' },
  { cod: '2022949', nombre: 'Práctica integrada Mercadeo agropecuario', grupo: 'practicas', linea: 'Prácticas integradas' },
  { cod: '2022950', nombre: 'Práctica integrada Sistemas de producción lechera III', grupo: 'practicas', linea: 'Prácticas integradas' },
  { cod: '2022951', nombre: 'Prácticas integradas reproducción animal', grupo: 'practicas', linea: 'Prácticas integradas' },
  { cod: '2022952', nombre: 'Prácticas integradas medicina aviar y producción avícola', grupo: 'practicas', linea: 'Prácticas integradas' },
  { cod: '2022953', nombre: 'Prácticas integradas medicina de rumiantes', grupo: 'practicas', linea: 'Prácticas integradas' },
  { cod: '2022954', nombre: 'Prácticas integradas en medicina equina', grupo: 'practicas', linea: 'Prácticas integradas' },
  { cod: '2022955', nombre: 'Prácticas integradas medicina y cirugía de pequeños animales', grupo: 'practicas', linea: 'Prácticas integradas' },
  { cod: '2022956', nombre: 'Prácticas integradas medicina y producción porcina', grupo: 'practicas', linea: 'Prácticas integradas' },
  { cod: '2022957', nombre: 'Prácticas integradas salud pública e infectología', grupo: 'practicas', linea: 'Prácticas integradas' },
  { cod: '2022958', nombre: 'Prácticas integradas animales silvestres y de laboratorio', grupo: 'practicas', linea: 'Prácticas integradas' },
  { cod: '2026111', nombre: 'Prácticas integradas en patología veterinaria', grupo: 'practicas', linea: 'Prácticas integradas' },

  /* ------- Nivelación (no cuenta en los créditos del plan) -------- */
  { cod: '1000001', nombre: 'Matemáticas Básicas', grupo: 'nivelacion', linea: 'Nivelación',
    nota: 'Solo para quien la exige el examen de admisión. Es el requisito de clasificación de Bioestadística fundamental.' },
  { cod: '1000002', nombre: 'Lecto-Escritura', grupo: 'nivelacion', linea: 'Nivelación',
    nota: 'Solo para quien la exige el examen de admisión. No cuenta en los 209 créditos.' },
];

const GRUPOS_CATALOGO = {
  biologia_opt: 'Biología de fundamentación (eliges una)',
  produccion: 'Optativas de producción',
  campo: 'Trabajos de campo',
  practicas: 'Prácticas integradas',
  nivelacion: 'Nivelación',
};

/* Grupos que puede recibir un cupo genérico marcado como 'disciplinar' */
const GRUPOS_DISCIPLINARES = ['produccion', 'campo'];

/* ============================================================================
   Notas sobre los datos y sus fuentes
   ========================================================================== */
const INCONSISTENCIAS = [
  { asig: 'Prerrequisitos y correquisitos: del acuerdo del plan', detalle: 'Están transcritos de las tablas del acuerdo (con las modificaciones de los Acuerdos CF 80 de 2018, 85, 96, 97 y 101 de 2020 y 3 de 2023), agrupación por agrupación. Incluye los correquisitos, que en esta carrera son muchos: Anatomía comparada ↔ Histología y embriología; Biología molecular avanzada ↔ Inmunología; Semiología ↔ Imagenología; Cirugía I ↔ Patología clínica; Salud de hato ↔ Teriogenología I; y las cuatro Clínicas del semestre X, que son correquisitos en cadena y por eso se inscriben juntas. También los requisitos por créditos: Salud de hato exige 8 créditos de la agrupación Producción, la Práctica integrada exige 38 de Fundamentación y 120 del Disciplinar, y el Trabajo de grado 88 del Disciplinar; la app los evalúa con tus créditos aprobados.' },
  { asig: 'Requisitos que dependen de una asignatura optativa', detalle: 'Varias asignaturas exigen «Biología general o Biología molecular y celular o Fundamentos de ecología»: en la app eso es el cupo <b>Biología (optativa)</b> del semestre I, así que basta con elegir una de las tres y marcarla aprobada. Igual con Producción: los tres cupos optativos aceptan cualquier asignatura de esa agrupación y heredan sus prerrequisitos (p. ej. Sistemas de producción I exige Nutrición y Genética).' },
  { asig: 'Créditos por componente', detalle: 'Del plan: fundamentación 35 obligatorios + 3 optativos = 38 (16,7 % + 1,4 %); disciplinar o profesional 120 + 10 optativos = 130 (57,4 % + 4,8 %); libre elección 41 (19,6 %). Total 209, de los cuales el 19,6 % es flexible. En la app el Trabajo de grado (10) se muestra como componente propio y el disciplinar obligatorio queda en 110, que es lo mismo. Los 12 créditos de inglés y la nivelación (Matemáticas Básicas, Lecto-Escritura) no cuentan.' },
  { asig: 'Libre elección: 41 créditos, no todos libres', detalle: 'De los 41: <b>20</b> son la Práctica integrada del semestre XI, <b>6</b> las dos Líneas de profundización (la II debe ser de la misma área que la I) y los <b>15</b> restantes son cupos libres (semestres I, II, III, V y VI). Si tomas una línea de profundización de otro programa, la petición la estudia el comité asesor de carrera.' },
  { asig: 'Diferencias entre el acuerdo y el catálogo actual del SIA', detalle: 'Cuatro optativas de Producción que lista el acuerdo no aparecen hoy en el plan 2555 del SIA: Producción de bovinos de leche (2017083), Producción de bovinos de carne (2017082), Producción porcina (2025807) y Problemática ambiental (2026248). En la app salen marcadas; confírmalas en el SIA antes de contar con ellas. El SIA sí ofrece Nutrición y alimentación I (2017137) y Medicina de peces (2016847), que también están en el acuerdo.' },
  { asig: 'Trabajo de campo', detalle: 'Las tres salidas (Quindío, Los Llanos y Costa Atlántica) exigen Política agropecuaria; la de Costa Atlántica lleva además Clínica de grandes animales como correquisito, así que en la práctica va en el semestre X. Se programan fuera de las semanas del calendario académico.' },
  { asig: 'Trabajo de grado', detalle: 'Dos códigos de 10 créditos: 2017249 (Trabajo de grado, el que usa la app) y 2017250 (Asignaturas de posgrado). Ambos exigen 88 créditos aprobados del componente disciplinar.' },
];
