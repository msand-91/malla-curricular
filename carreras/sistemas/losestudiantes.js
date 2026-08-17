/* ============================================================================
   losestudiantes.js — GENERADO AUTOMÁTICAMENTE, no editar a mano.
   Fuente: losestudiantes.com · verificado el 2026-08-17
   Regenerar con:  node herramientas/verificar-losestudiantes.js
   ========================================================================== */

const LE_BASE_PROFESOR = 'https://losestudiantes.com/universidad-nacional/professors/';
const LE_VERIFICADO = '2026-08-17';

/* código SIA -> { nombre tal como aparece allí, url de la materia } */
const LOSESTUDIANTES = {
  "1000001": {
    "nombre": "Matematicas Basicas",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000001"
  },
  "1000002": {
    "nombre": "Lecto-Escritura",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000002"
  },
  "1000003": {
    "nombre": "Algebra Lineal",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000003"
  },
  "1000004": {
    "nombre": "Calculo Diferencial",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000004"
  },
  "1000005": {
    "nombre": "Calculo Integral",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000005"
  },
  "1000006": {
    "nombre": "Calculo En Varias Variables",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000006"
  },
  "1000013": {
    "nombre": "Probabilidad Y Estadistica Fundamental",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000013"
  },
  "1000017": {
    "nombre": "Fundamentos De Electricidad Y Magnetismo",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000017"
  },
  "1000019": {
    "nombre": "Fundamentos De Mecanica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000019"
  },
  "1000044": {
    "nombre": "Ingles I- Semestral",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000044"
  },
  "1000045": {
    "nombre": "Ingles Ii - Semestral",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000045"
  },
  "1000046": {
    "nombre": "Ingles Iii - Semestral",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000046"
  },
  "1000047": {
    "nombre": "Ingles Iv- Semestral",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000047"
  },
  "1000089": {
    "nombre": "Cátedra nacional de inducción y preparación para la vida universitaria",
    "url": "https://losestudiantes.com/universidad-nacional/courses/catedra-nacional-de-induccion-y-preparacion-para-la-vida-universitaria"
  },
  "2015162": {
    "nombre": "Calculo Vectorial",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015162"
  },
  "2015168": {
    "nombre": "Fundamentos De Matematicas",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015168"
  },
  "2015174": {
    "nombre": "Introduccion A La Teoria De La Computacion",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015174"
  },
  "2015178": {
    "nombre": "Probabilidad",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015178"
  },
  "2015181": {
    "nombre": "Sistemas Numericos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015181"
  },
  "2015555": {
    "nombre": "Algebra Lineal Basica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015555"
  },
  "2015556": {
    "nombre": "Calculo Integral En Una Variable",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015556"
  },
  "2015702": {
    "nombre": "Gerencia Y Gestion De Proyectos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015702"
  },
  "2015703": {
    "nombre": "Ingenieria Economica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015703"
  },
  "2015734": {
    "nombre": "Programacion De Computadores",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015734"
  },
  "2015970": {
    "nombre": "Metodos Numericos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015970"
  },
  "2016007": {
    "nombre": "Fundamentos De Administracion",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016007"
  },
  "2016028": {
    "nombre": "Diseño, Gestion Y Evaluacion De Proyectos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016028"
  },
  "2016037": {
    "nombre": "Finanzas Avanzadas",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016037"
  },
  "2016053": {
    "nombre": "Sistemas De Informacion Gerencial",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016053"
  },
  "2016353": {
    "nombre": "Bases De Datos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016353"
  },
  "2016375": {
    "nombre": "Programacion Orientada A Objetos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016375"
  },
  "2016377": {
    "nombre": "Calculo Diferencial En Una Variable",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016377"
  },
  "2016492": {
    "nombre": "Comunicaciones",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016492"
  },
  "2016498": {
    "nombre": "Electronica Digital I",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016498"
  },
  "2016600": {
    "nombre": "Gestion Tecnologica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016600"
  },
  "2016615": {
    "nombre": "Taller De Invencion Y Creatividad",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016615"
  },
  "2016696": {
    "nombre": "Algoritmos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016696"
  },
  "2016697": {
    "nombre": "Arquitectura De Computadores",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016697"
  },
  "2016698": {
    "nombre": "Elementos De Computadores",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016698"
  },
  "2016699": {
    "nombre": "Estructuras De Datos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016699"
  },
  "2016701": {
    "nombre": "Ingenieria De Software I",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016701"
  },
  "2016702": {
    "nombre": "Ingenieria De Software Ii",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016702"
  },
  "2016703": {
    "nombre": "Pensamiento Sistemico",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016703"
  },
  "2016707": {
    "nombre": "Sistemas Operativos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016707"
  },
  "2016716": {
    "nombre": "Arquitectura De Software",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016716"
  },
  "2016722": {
    "nombre": "Computacion Paralela Y Distribuida",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016722"
  },
  "2016741": {
    "nombre": "Finanzas",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016741"
  },
  "2016748": {
    "nombre": "Inteligencia artificial",
    "url": "https://losestudiantes.com/universidad-nacional/courses/inteligencia-artificial"
  },
  "2016753": {
    "nombre": "Microcontroladores",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016753"
  },
  "2016788": {
    "nombre": "Tecnologia Digital",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016788"
  },
  "2017293": {
    "nombre": "Modelacion Matematica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017293"
  },
  "2019072": {
    "nombre": "Analsis Numerico I",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2019072"
  },
  "2019082": {
    "nombre": "Modelos Matematicos I",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2019082"
  },
  "2023251": {
    "nombre": "Inteligencia Artificial Y Mini-Robots",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2023251"
  },
  "2024045": {
    "nombre": "Taller De Proyectos Interdisciplinarios",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2024045"
  },
  "2025960": {
    "nombre": "Computacion Visual",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025960"
  },
  "2025963": {
    "nombre": "Matematicas Discretas I",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025963"
  },
  "2025964": {
    "nombre": "Matematicas Discretas Ii",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025964"
  },
  "2025966": {
    "nombre": "Lenguajes De Programacion",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025966"
  },
  "2025967": {
    "nombre": "Redes De Computadores",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025967"
  },
  "2025969": {
    "nombre": "Modelos Estocasticos Y Simulacion En Computacion Y Comunicaciones",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025969"
  },
  "2025970": {
    "nombre": "Modelos Y Simulacion",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025970"
  },
  "2025971": {
    "nombre": "Optimizacion",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025971"
  },
  "2025972": {
    "nombre": "Introduccion A La Criptografia Y A La Seguridad De La Informacion",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025972"
  },
  "2025974": {
    "nombre": "Trabajo De Grado - Modalidad Trabajos Investigativos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025974"
  },
  "2025975": {
    "nombre": "Introduccion A La Ingenieria De Sistemas Y Computacion",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025975"
  },
  "2025982": {
    "nombre": "Sistemas De Informacion",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025982"
  },
  "2025983": {
    "nombre": "Arquitectura De Infraestructura Y Gobierno De Tics",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025983"
  },
  "2025986": {
    "nombre": "Ingenieria Economica Y Analisis De Riesgo",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025986"
  },
  "2025994": {
    "nombre": "Teoria De La Informacion Y Sistemas De Comunicacion",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025994"
  },
  "2025995": {
    "nombre": "Introduccion A Los Sistemas Inteligentes",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025995"
  },
  "2026551": {
    "nombre": "Creacion Y Gestion De Empresas",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2026551"
  },
  "2026573": {
    "nombre": "Introducción a las Ciencias de la Computación y la programación",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2026573"
  },
  "2027310": {
    "nombre": "Criptografía",
    "url": "https://losestudiantes.com/universidad-nacional/courses/criptografia"
  },
  "2027313": {
    "nombre": "Teoría de Codificación",
    "url": "https://losestudiantes.com/universidad-nacional/courses/teoria-de-codificacion"
  },
  "2027628": {
    "nombre": "Teoría de Lenguajes Formales",
    "url": "https://losestudiantes.com/universidad-nacional/courses/teoria-de-lenguajes-formales"
  },
  "2027641": {
    "nombre": "Análisis de bases de datos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/analisis-de-bases-de-datos"
  },
  "2027642": {
    "nombre": "Compiladores",
    "url": "https://losestudiantes.com/universidad-nacional/courses/compiladores"
  },
  "2028837": {
    "nombre": "Matemáticas del aprendizaje de máquinas",
    "url": "https://losestudiantes.com/universidad-nacional/courses/matematicas-del-aprendizaje-de-maquinas"
  }
};
