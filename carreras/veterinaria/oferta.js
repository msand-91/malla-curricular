/* ============================================================================
   oferta.js — GENERADO AUTOMÁTICAMENTE, no editar a mano.
   Oferta del semestre: grupos, profesores, horarios, salones y cupos.
   Fuente: «Catálogo de asignaturas» público del SIA (acceso anónimo, sin sesión).
   Consultado el 2026-08-18. Regenerar con: node herramientas/catalogo-sia.js sincronizar

   Contiene el plan 2555 (Medicina Veterinaria, todas las tipologías menos libre elección)
   y la libre elección del componente 2CLE COMPONENTE DE LIBRE ELECCIÓN de la sede Bogotá.
   334 asignaturas, 263 con grupos programados, 586 grupos.
   Los cupos son los del momento de la consulta; cambian a diario en inscripción.
   ========================================================================== */

const OFERTA_CONSULTADO = '2026-08-18';
const OFERTA_PERIODO = "2026-2";

/* código -> { cod, nombre, creditos, tipologia, actividades: [{ nombre, grupos: [
     { grupo, profesores, cupos, jornada, sesiones: [{ dia (1=lunes), inicio, fin, salon, edificio, desde, hasta }] } ] }] } */
const OFERTA = {
 "1000001": {
  "cod": "1000001",
  "codigoSIA": "1000001-B",
  "nombre": "Matemáticas Básicas",
  "creditos": 4,
  "tipologia": "NIVELACIÓN",
  "descripcion": "OBJETIVOS:\nGenerales\n¿ Brindar al estudiante los fundamentos conceptuales para abordar los cursos posteriores que requieran la matemática básica.\n¿ Promover a través de los talleres, una participación activa del estudiante en su proceso de aprendizaje matemático.\n¿ Generar un espacio y tiempo más adecuados para que el estudiante madure e interiorice los conocimientos adquiridos.\nEspecíficos\n¿ Presentar elementos básicos de lógica que permitan al estudiante incorporar formalismo y validez a sus argumentos.\n¿ Desarrollar habilidades básicas para el manejo de operaciones aritméticas y entre conjuntos\n¿ Lograr un manejo adecuado de las expresiones algebraicas.\n¿ Familiarizar al alumno con la noción de función, su representación gráfica e interpretación, y trabajar con algunas funciones fundamentales tales como las lineales, cuadráticas, exponenciales, logarítmicas y trigonométricas.\n¿ Repasar elementos de la geometría euclidiana básica y de la trigonometría elemental.\n¿ Hacer una introducción a los métodos de conteo.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000001-B)",
    "grupos": [
     {
      "grupo": "GRUPO PAET VETERINARIA",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Celimo Alexander Peña Regifo"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 34",
      "codigoGrupo": "34",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Caribe Grupo 1",
      "codigoGrupo": "CARI-01",
      "profesores": [],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "CAPILLA",
        "salon": "01",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "CAPILLA",
        "salon": "01",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Caribe Grupo 2",
      "codigoGrupo": "CARI-02",
      "profesores": [],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "CAPILLA",
        "salon": "01",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 1",
      "codigoGrupo": "TUMA-01",
      "profesores": [
       "Luisa María Arrechea Fajardo"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 2",
      "codigoGrupo": "TUMA-02",
      "profesores": [
       "Luisa María Arrechea Fajardo"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 3",
      "codigoGrupo": "TUMA-03",
      "profesores": [
       "Luisa María Arrechea Fajardo"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 4",
      "codigoGrupo": "TUMA-04",
      "profesores": [
       "JESÚS ALBERTO ANGULO CUERO"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 1",
      "codigoGrupo": "AMAZ-01",
      "profesores": [
       "Reina Isabel Baldeon Moreno"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 16,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TIC 3A",
        "salon": "14",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TIC 3A",
        "salon": "14",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 2",
      "codigoGrupo": "AMAZ-02",
      "profesores": [
       "Reina Isabel Baldeon Moreno"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 16,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TIC 5B",
        "salon": "18",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 3",
      "codigoGrupo": "AMAZ-03",
      "profesores": [
       "Reina Isabel Baldeon Moreno"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 16,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "TIC 5C",
        "salon": "19",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "TIC 5C",
        "salon": "19",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 4",
      "codigoGrupo": "AMAZ-04",
      "profesores": [
       "Reina Isabel Baldeon Moreno"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 17,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Salud Grupo 5",
      "codigoGrupo": "AMAZ-05",
      "profesores": [],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Arauca Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 2 (Arauca Presencial)",
      "codigoGrupo": "ORIN-02",
      "profesores": [
       "LAUDY KATERINE PAN PEREZ"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 3 (Arauca Presencial)",
      "codigoGrupo": "ORIN-03",
      "profesores": [
       "Vicente Carlos Pérez Álvarez"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 4 (Arauca Presencial)",
      "codigoGrupo": "ORIN-04",
      "profesores": [],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   },
   {
    "nombre": "CLASE MAGISTRAL (1000001-B)",
    "grupos": [
     {
      "grupo": "GRUPO PAET VETERINARIA",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Celimo Alexander Peña Regifo"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Ibeth Marcela Rubio Perilla"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO B INGENIERIA",
        "salon": "453-232",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO B INGENIERIA",
        "salon": "453-232",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 10",
      "codigoGrupo": "10",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Herbert Alonso Dueñas Ruiz"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO CARLOS ALBERTO BARBERI PERDOMO (PARANINFO A)",
        "salon": "401-PAR-A",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO B INGENIERIA",
        "salon": "453-232",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Jeanneth Galeano Penaloza"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO C - ANTONIO MARÍA GÓMEZ",
        "salon": "453-233",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO C - ANTONIO MARÍA GÓMEZ",
        "salon": "453-233",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Gustavo Adolfo Nieto Clavijo"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO C - ANTONIO MARÍA GÓMEZ",
        "salon": "453-233",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO C - ANTONIO MARÍA GÓMEZ",
        "salon": "453-233",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "Natalia Camila Pinzon Cortes"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO MARIA CRISTINA SALAZAR C",
        "salon": "212-121",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO 2 - STELLA TORRES DE YOUNG",
        "salon": "564-S11",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Martha Cecilia Moreno Penagos"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO B INGENIERIA",
        "salon": "453-232",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO C - ANTONIO MARÍA GÓMEZ",
        "salon": "453-233",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "Claudio Rodriguez Beltran"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUD. PRINCIPAL",
        "salon": "310-03",
        "edificio": "310 - Antonio García Nossa",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUD. PRINCIPAL",
        "salon": "310-03",
        "edificio": "310 - Antonio García Nossa",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "Gabriel Ignacio Padilla Leon"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9",
      "codigoGrupo": "9",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUD. PRINCIPAL",
        "salon": "310-03",
        "edificio": "310 - Antonio García Nossa",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Caribe Grupo 1",
      "codigoGrupo": "CARI-01",
      "profesores": [
       "Juan David Osorio Cano"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": []
     },
     {
      "grupo": "Peama - Caribe Grupo 2",
      "codigoGrupo": "CARI-02",
      "profesores": [
       "Juan David Osorio Cano"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": []
     },
     {
      "grupo": "Peama - Tumaco - Grupo 1",
      "codigoGrupo": "TUMA-01",
      "profesores": [],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 2",
      "codigoGrupo": "TUMA-02",
      "profesores": [],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 3",
      "codigoGrupo": "TUMA-03",
      "profesores": [],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 4",
      "codigoGrupo": "TUMA-04",
      "profesores": [],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 1",
      "codigoGrupo": "AMAZ-01",
      "profesores": [
       "Reina Isabel Baldeon Moreno"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 16,
      "sesiones": []
     },
     {
      "grupo": "Peama-Amazonia Salud Grupo 5",
      "codigoGrupo": "AMAZ-05",
      "profesores": [],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": []
     },
     {
      "grupo": "Peama-Amazonia-Grupo 2",
      "codigoGrupo": "AMAZ-02",
      "profesores": [
       "Reina Isabel Baldeon Moreno"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 16,
      "sesiones": []
     },
     {
      "grupo": "Peama-Amazonia-Grupo 3",
      "codigoGrupo": "AMAZ-03",
      "profesores": [
       "Reina Isabel Baldeon Moreno"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 16,
      "sesiones": []
     },
     {
      "grupo": "Peama-Amazonia-Grupo 4",
      "codigoGrupo": "AMAZ-04",
      "profesores": [
       "Jorge Andres Araujo Bernal"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 17,
      "sesiones": []
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Arauca Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 2 (Arauca Presencial)",
      "codigoGrupo": "ORIN-02",
      "profesores": [
       "LAUDY KATERINE PAN PEREZ"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 3 (Arauca Presencial)",
      "codigoGrupo": "ORIN-03",
      "profesores": [
       "Vicente Carlos Pérez Álvarez"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 4 (Arauca Presencial)",
      "codigoGrupo": "ORIN-04",
      "profesores": [],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000002": {
  "cod": "1000002",
  "codigoSIA": "1000002-B",
  "nombre": "Lecto-Escritura",
  "creditos": 4,
  "tipologia": "NIVELACIÓN",
  "descripcion": "El objetivo de este curso nivelatorio es cualificar la competencia argumentativa de los estudiantes, en lectura y escritura, por medio de la apropiación de estrategias de comprensión y expresión.\nAl finalizar el curso los estudiantes estarán en la capacidad de:\n- Identificar distintos modos discursivos presentes en un texto argumentativo.\n- Identificar la estructura argumentativa de un texto: Tesis central o hipótesis, premisas, red de relaciones entre la premisas.\n- Emitir un juicio de valor en la relación con la estructura identificada.\n- Identificar las distintas posturas que origina la argumentación contenida en el texto.\n- Construir un texto que tenga una estructura argumentativa.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000002)",
    "grupos": [
     {
      "grupo": "GRUPO PAET PALMIRA VETERINARIA",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Luisa Efigenia Hoyos Victoria"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "13:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Amazonia Grupo 1 Antropologia",
      "codigoGrupo": "AMAZ-05",
      "profesores": [
       "David Alexander Cruz Calderon"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Amazonia Grupo 2 Antropologia",
      "codigoGrupo": "AMAZ-06",
      "profesores": [
       "David Alexander Cruz Calderon"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Amazonia Grupo 3 Antropologia",
      "codigoGrupo": "AMAZ-07",
      "profesores": [
       "David Alexander Cruz Calderon"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Caribe Grupo 1",
      "codigoGrupo": "CARI-01",
      "profesores": [],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Caribe Grupo 2",
      "codigoGrupo": "CARI-02",
      "profesores": [],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 1",
      "codigoGrupo": "TUMA-01",
      "profesores": [
       "Maria Teresa Salcedo Montero"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA MODULAR 2A",
        "salon": "A-2A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 2",
      "codigoGrupo": "TUMA-02",
      "profesores": [
       "Maria Teresa Salcedo Montero"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 3",
      "codigoGrupo": "TUMA-03",
      "profesores": [
       "Maria Teresa Salcedo Montero"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 4",
      "codigoGrupo": "TUMA-04",
      "profesores": [
       "Maria Teresa Salcedo Montero"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 1",
      "codigoGrupo": "AMAZ-01",
      "profesores": [],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 2",
      "codigoGrupo": "AMAZ-02",
      "profesores": [],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 3",
      "codigoGrupo": "AMAZ-03",
      "profesores": [
       "Diego Fabián Arévalo Viveros"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA 2",
        "salon": "10",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA 2",
        "salon": "10",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 4",
      "codigoGrupo": "AMAZ-04",
      "profesores": [
       "David Felipe Guerrero Beltrán"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [
       "Carlas Lucia Castilla Lara"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 2 (Presencial)",
      "codigoGrupo": "ORIN-02",
      "profesores": [
       "Carlas Lucia Castilla Lara"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 8,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 3 (Presencial)",
      "codigoGrupo": "ORIN-03",
      "profesores": [
       "Carlas Lucia Castilla Lara"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 4 (Presencial)",
      "codigoGrupo": "ORIN-04",
      "profesores": [
       "Carlas Lucia Castilla Lara"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 5,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 5 (Presencial)",
      "codigoGrupo": "ORIN-05",
      "profesores": [
       "Carlas Lucia Castilla Lara"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000009": {
  "cod": "1000009",
  "codigoSIA": "1000009-B",
  "nombre": "Biología general",
  "creditos": 3,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "La Biología es una disciplina fundamental que estudia los seres vivos, sus procesos vitales, su diversidad, evolución e interacción con el ambiente. Este curso de pregrado proporciona una formación integral en los principios biológicos que explican la organización y funcionamiento de la vida desde el nivel molecular hasta los ecosistemas, promoviendo el pensamiento científico, sistémico y crítico.\nA lo largo del curso, los estudiantes comprenderán la estructura y función celular, la genética, la herencia, el metabolismo, la evolución, la biodiversidad, la fisiología de organismos, la ecología y las relaciones entre ciencia, sociedad y ambiente. Asimismo, se fortalecerán competencias para interpretar fenómenos biológicos, analizar problemáticas ambientales y de salud, desarrollar habilidades experimentales y aplicar el conocimiento biológico a contextos reales y multidisciplinarios.\nAl finalizar el curso, el estudiante estará en capacidad de:\n¿ Explicar los principios fundamentales de la organización biológica.\n¿ Relacionar estructura y función en los diferentes niveles de organización de la vida.\n¿ Interpretar procesos biológicos desde una perspectiva sistémica e integradora.\n¿ Aplicar conceptos biológicos en la solución de problemas ambientales, sociales y de salud.\n¿ Reconocer la importancia ética y social del conocimiento biológico en la toma de decisiones responsables.\nEste curso constituye una base esencial para programas de ciencias naturales, ciencias de la salud, ingenierías, ciencias ambientales, educación y áreas afines, favoreciendo la formación de profesionales críticos, éticos y comprometidos con la sustentabilidad y la transformación social.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000009)",
    "grupos": [
     {
      "grupo": "Grupo 2 - PEAMA Sumapaz",
      "codigoGrupo": "SUMA-02",
      "profesores": [
       "Luisa Alejandra García Galindo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Grupo 3 - BIOLOGIA",
      "codigoGrupo": "3",
      "profesores": [
       "Clara Isabel Bermudez Santana",
       "Jose Camilo Fagua Gonzalez",
       "Luis Juan Rubiano Olaya"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 58,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO LUIS EDUARDO MORA OSEJO",
        "salon": "421-138",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO LUIS EDUARDO MORA OSEJO",
        "salon": "421-138",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Grupo 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Alejandra Alvarez Zapata"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 1",
      "codigoGrupo": "TUMA-01",
      "profesores": [
       "JULIETH CRISTINA MENDOZA FORERO"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "AULA MODULAR 2A",
        "salon": "A-2A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "AULA MODULAR 2A",
        "salon": "A-2A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PEAMA- PAET Caribe Grupo 1",
      "codigoGrupo": "CARI-01",
      "profesores": [
       "Jairo Humberto Medina Calderon"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE COMPUTO (JB)",
        "salon": "398",
        "edificio": "AULAS - JARDIN BOTANICO SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE COMPUTO (JB)",
        "salon": "398",
        "edificio": "AULAS - JARDIN BOTANICO SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [
       "Néstor Fernando Perez Buitrago"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 12,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA DE CLASE ORINOQUIA 1",
        "salon": "AULA 1",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA DE CLASE ORINOQUIA 1",
        "salon": "AULA 1",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000010": {
  "cod": "1000010",
  "codigoSIA": "1000010-B",
  "nombre": "Biología molecular y celular",
  "creditos": 3,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000010)",
    "grupos": [
     {
      "grupo": "Grupo 1 Farmacia",
      "codigoGrupo": "1",
      "profesores": [
       "Claudio Jaime Gomez Alegria",
       "Angela Patricia Rojas Rojas"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO 2 - STELLA TORRES DE YOUNG",
        "salon": "564-S11",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO 2 - STELLA TORRES DE YOUNG",
        "salon": "564-S11",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama Grupo 1 Orinoquia (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [
       "Jesus Alfredo Berdugo Gutierrez"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 13,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA DE CLASE ORINOQUIA 7",
        "salon": "AULA 7",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA DE CLASE ORINOQUIA 7",
        "salon": "AULA 7",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000011": {
  "cod": "1000011",
  "codigoSIA": "1000011-B",
  "nombre": "Fundamentos de ecología",
  "creditos": 3,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "La asignatura ECOLOGIA busca dar las bases fundamentales del funcionamiento de los sistemas ecológicos a sus diferentes escalas y hacer visible las relaciones entre estos sistemas de organización a escala ecológica. El curso también pretende mostrar los t",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000011)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Ernesto Javier Puertas Dellepianes"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 118,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO LUIS EDUARDO MORA OSEJO",
        "salon": "421-138",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO LUIS EDUARDO MORA OSEJO",
        "salon": "421-138",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Mary Ruth Garcia Conde"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 75,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO LUIS EDUARDO MORA OSEJO",
        "salon": "421-138",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO LUIS EDUARDO MORA OSEJO",
        "salon": "421-138",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PEAMA - Tumaco Grupo 1",
      "codigoGrupo": "TUMA-01",
      "profesores": [
       "Adriana Milena Sanchez Martinez"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "AULA MODULAR 2A",
        "salon": "A-2A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 2A",
        "salon": "A-2A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [
       "Néstor Fernando Perez Buitrago"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 12,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 4",
        "salon": "AULA 4",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 4",
        "salon": "AULA 4",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000012": {
  "cod": "1000012",
  "codigoSIA": "1000012-B",
  "nombre": "Bioestadística fundamental",
  "creditos": 3,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000012)",
    "grupos": [
     {
      "grupo": "Grupo 1 - PEAMA Sumapaz",
      "codigoGrupo": "SUMA-01",
      "profesores": [
       "JHONIER SEBASTIAN RANGEL GUTIERREZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "Sergio Páez Moncaleano"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 45,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 4",
        "salon": "481-111",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Juan Carlos Rincon Florez"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 31,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "13:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 2",
      "codigoGrupo": "PAL-02",
      "profesores": [
       "Julia Victoria Arredondo Botero"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [
       "Miller Fernando Palta "
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 12,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "AULA DE INFORMATICA No. 1",
        "salon": "INFORMATICA",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000041": {
  "cod": "1000041",
  "codigoSIA": "1000041-B",
  "nombre": "Química básica",
  "creditos": 3,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "METODOLOGÍA: Esta asignatura se desarrollará mediante exposiciones orales por parte del profesor. Se propondrán actividades de reforzamiento y repaso (talleres y lecturas complementarias).\nOBJETIVOS:\n1. Preparar al estudiante para la interpretación de fenómenos involucrados en diferentes procesos químicos.\n2. Promover el aprendizaje y comprensión del lenguaje básico de la Química básica y orgánica como herramienta indispensable para su desarrollo profesional, su trabajo interdisciplinario y para que entienda la vida cotidiana desde la óptica de los procesos químicos.\n3. Aumentar el interés en los estudiantes por la comprensión del comportamiento de la materia a nivel atómico y molecular para que lo pueda relacionar con procesos observables a nivel macroscópico.\n4. Potencializar competencias interpretativas, propositivas y argumentativas fundamentadas en el lenguaje químico.\n5. Fomentar la integración de los conceptos de materia y energía de creciente relevancia en el presente siglo, en todas las actividades del quehacer cotidiano.\n6. Desarrollar habilidades y destrezas para la resolución de ejercicios y problemas que requieran de conocimientos de Química.\n7. Fomentar el aprendizaje de conceptos básicos de estructura molecular, nomenclatura y propiedades físicas y químicas de algunos grupos funcionales orgánicos.\n8. Promover en el estudiante el uso responsable de los conocimientos de química en su entorno, especialmente con el cuidado del medio ambiente.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 1000041 (21000041)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Diana Maria Farias Camero"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 201A",
        "salon": "451-201A",
        "edificio": "451 - Antonio García Banús",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 201A",
        "salon": "451-201A",
        "edificio": "451 - Antonio García Banús",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "12:00",
        "lugar": "SALON DE CLASE 201A",
        "salon": "451-201A",
        "edificio": "451 - Antonio García Banús",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "MARIA ALEXANDRA BADILLO BEDOYA"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "08:00",
        "lugar": "SALON DE CLASE 305",
        "salon": "451-305",
        "edificio": "451 - Antonio García Banús",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 305",
        "salon": "451-305",
        "edificio": "451 - Antonio García Banús",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 305",
        "salon": "451-305",
        "edificio": "451 - Antonio García Banús",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Grupo 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Gustavo Alvarez Saa"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "13:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama Tumaco Grupo 1",
      "codigoGrupo": "TUMA-01",
      "profesores": [
       "Adriana Milena Sanchez Martinez"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 14,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "AULA MODULAR 2A",
        "salon": "A-2A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 2A",
        "salon": "A-2A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [
       "Jhon Jairo Aragón Arias"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 2",
        "salon": "AULA 2",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 2",
        "salon": "AULA 2",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000042": {
  "cod": "1000042",
  "codigoSIA": "1000042-B",
  "nombre": "Bioquímica básica",
  "creditos": 3,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "METODOLOGIA:\nExposición de temas por parte del profesor\nEjercicios y talleres de aplicación\nLecturas complementarias\n\nOBJETIVOS:\n1. Que el estudiante conozca las estructuras de los principales compuestos de importancia biológica.\n2. Que el estudiante com",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000042)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Peama Sumapaz",
      "codigoGrupo": "SUMA-01",
      "profesores": [
       "Ronald Mauricio Garcia Gomez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": []
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "VALENTINA GUEVARA PRIETO"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "Salón de clase 5",
        "salon": "481-112",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "Salón de clase 5",
        "salon": "481-112",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET ORINOQUIA Grupo 01 (Enfermería)",
      "codigoGrupo": "ORIN-01",
      "profesores": [
       "Jhon Jairo Aragón Arias"
      ],
      "facultad": "FACULTAD DE ENFERMERÍA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 8,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Grupo 1 Medicina Veterinaria",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Diego Fernando Mejia Carmona"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Grupo 2 Medicina Veterinaria",
      "codigoGrupo": "PAL-02",
      "profesores": [
       "Diego Fernando Mejia Carmona"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Grupo 3 Medicina Veterinaria",
      "codigoGrupo": "PAL-03",
      "profesores": [
       "Viviana Cuartas Granada",
       "Fernando José Holguin Gallego"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 18,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Grupo 4 Medicina Veterinaria",
      "codigoGrupo": "PAL-04",
      "profesores": [
       "Viviana Cuartas Granada",
       "Fernando José Holguin Gallego"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000044": {
  "cod": "1000044",
  "codigoSIA": "1000044-B",
  "nombre": "Inglés I- Semestral",
  "creditos": 3,
  "tipologia": "NIVELACIÓN",
  "descripcion": "Se espera que los estudiantes al término de este primer nivel de inglés, puedan comprender textos expositivos cortos relacionados con temáticas de tipo académico y que además, puedan expresar de manera oral y escrita información de tipo personal. Con base en un listado de descriptores predeterminados, el profesor selecciona el material que puede utilizar y ayuda al estudiante a partir del uso de estrategias de aprendizaje, para que poco a poco sea él o ella quien tenga el criterio para saber qué información le sirve, por qué y cómo usarla.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000044)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Beatriz Elena Urrutia Sanchez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Yaneli Niño Osorio"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Luis Gabriel Peña Ortiz"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Liliana Marcela Guzman Aricapa"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "Beatriz Elena Urrutia Sanchez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Cesar Augusto Romero "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "JOSE JONATHAN MAESTRE HERRERA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "Beymar Leonardo Solorzano Alviz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9",
      "codigoGrupo": "9",
      "profesores": [
       "Edwin Yesid Leon Silva"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET - Amazonia Grupo 1",
      "codigoGrupo": "AMAZ-07",
      "profesores": [
       "MARIA JOSE BANQUETH GONZALEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 3B",
        "salon": "15",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 4A",
        "salon": "11",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET - Amazonia Grupo 2",
      "codigoGrupo": "AMAZ-08",
      "profesores": [
       "MARIA JOSE BANQUETH GONZALEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 5C",
        "salon": "19",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 5C",
        "salon": "19",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET - Amazonia Grupo 3",
      "codigoGrupo": "AMAZ-09",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TIC 3A",
        "salon": "14",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TIC 3A",
        "salon": "14",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET - Amazonia Grupo 4",
      "codigoGrupo": "AMAZ-10",
      "profesores": [
       "MARIA JOSE BANQUETH GONZALEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "TIC 4C",
        "salon": "16",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "TIC 4C",
        "salon": "16",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET - Amazonia Grupo 5",
      "codigoGrupo": "AMAZ-11",
      "profesores": [
       "MARIA JOSE BANQUETH GONZALEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET - Amazonia Grupo 6",
      "codigoGrupo": "AMAZ-12",
      "profesores": [
       "ADRIANA AGUILAR CASTRO"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET Caribe Grupo 01 (Enfermería)",
      "codigoGrupo": "CARI-02",
      "profesores": [
       "Keshia Hilary Howard Livingston"
      ],
      "facultad": "FACULTAD DE ENFERMERÍA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "AULA DE INNOVACION Y PENSAMIENTO CRITICO",
        "salon": "06",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "AULA DE INNOVACION Y PENSAMIENTO CRITICO",
        "salon": "06",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Carlos Eduardo Gacía Ruiz"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "S5-1090",
        "salon": "S5-1090",
        "edificio": "S5 SALONES DE CLASE",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "S5-1090",
        "salon": "S5-1090",
        "edificio": "S5 SALONES DE CLASE",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Amazonia Gruoo 6",
      "codigoGrupo": "AMAZ-06",
      "profesores": [
       "ADRIANA AGUILAR CASTRO"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Amazonia Grupo 1",
      "codigoGrupo": "AMAZ-01",
      "profesores": [
       "MARIA JOSE BANQUETH GONZALEZ"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 3B",
        "salon": "15",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 4A",
        "salon": "11",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Amazonia Grupo 2",
      "codigoGrupo": "AMAZ-02",
      "profesores": [
       "MARIA JOSE BANQUETH GONZALEZ"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 5C",
        "salon": "19",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 5C",
        "salon": "19",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Amazonia Grupo 3",
      "codigoGrupo": "AMAZ-03",
      "profesores": [
       "MARIA JOSE BANQUETH GONZALEZ"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TIC 3A",
        "salon": "14",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TIC 3A",
        "salon": "14",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Amazonia Grupo 4",
      "codigoGrupo": "AMAZ-04",
      "profesores": [
       "MARIA JOSE BANQUETH GONZALEZ"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "TIC 4C",
        "salon": "16",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "TIC 4C",
        "salon": "16",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Amazonia Grupo 5",
      "codigoGrupo": "AMAZ-05",
      "profesores": [
       "MARIA JOSE BANQUETH GONZALEZ"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 1",
      "codigoGrupo": "TUMA-01",
      "profesores": [
       "Celson Alexis Quiñones Montaño"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 2",
      "codigoGrupo": "TUMA-02",
      "profesores": [
       "Michael Antoni Quiñones Angulo"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA CEP",
        "salon": "C-1A",
        "edificio": "EDIFICIO ADMINISTRATIVO (IEP)",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 3",
      "codigoGrupo": "TUMA-03",
      "profesores": [
       "Michael Antoni Quiñones Angulo"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 4",
      "codigoGrupo": "TUMA-04",
      "profesores": [
       "Celson Alexis Quiñones Montaño"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Caribe Grupo 1",
      "codigoGrupo": "CARI-01",
      "profesores": [
       "Keshia Hilary Howard Livingston"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 2 (Presencial)",
      "codigoGrupo": "ORIN-02",
      "profesores": [
       "Claudia Marcela Arevalo Gomez"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 7,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO",
        "salon": "AUDITORIO",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO",
        "salon": "AUDITORIO",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000045": {
  "cod": "1000045",
  "codigoSIA": "1000045-B",
  "nombre": "Inglés II - Semestral",
  "creditos": 3,
  "tipologia": "NIVELACIÓN",
  "descripcion": "Se espera que los estudiantes, al término del segundo nivel, puedan comprender textos expositivos y narrativos relacionados con temáticas de tipo académico y de cultura general. Se espera que en términos de comprensión escrita, el estudiante pueda identificar relaciones de temporalidad y secuencia, de contraste y de causa y efecto. Además se espera que puedan expresar de manera oral y escrita información relacionada con la descripción detallada de lugares, de estados de salud, eventos del pasado y planes. A partir de un listado de descriptores predeterminados, el profesor selecciona el material que puede utilizar y ayuda al estudiante, a través del uso de estrategias de aprendizaje, para que poco a poco sea él o ella quien tenga el criterio para saber qué le sirve, por qué y cómo usarlo. Se cuenta con un Centro de Recursos que le brinda tanto a profesores como estudiantes un buen número de recursos para la enseñanza y aprendizaje de la lengua.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000045)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Monica Alexandra Riaño Orjuela"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 1 Peama Orinoquia (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [
       "Claudia Marcela Arevalo Gomez"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AUDITORIO",
        "salon": "AUDITORIO",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AUDITORIO",
        "salon": "AUDITORIO",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 10",
      "codigoGrupo": "10",
      "profesores": [
       "Jesica paola Rendon Alfonso"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 11",
      "codigoGrupo": "11",
      "profesores": [
       "JOSE JONATHAN MAESTRE HERRERA"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 12",
      "codigoGrupo": "12",
      "profesores": [
       "LINDA JOHANA RUIZ GOMEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 13",
      "codigoGrupo": "13",
      "profesores": [
       "Narly Yadira Pardo Cadena"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 14",
      "codigoGrupo": "14",
      "profesores": [
       "Angelica Saenz Fonseca"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 15",
      "codigoGrupo": "15",
      "profesores": [
       "Narly Yadira Pardo Cadena"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 16",
      "codigoGrupo": "16",
      "profesores": [
       "Luis Gabriel Peña Ortiz"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Cesar Augusto Romero "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Jesica paola Rendon Alfonso"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Adriana Marlen Sanchez Riaño"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "Cesar Augusto Romero "
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Sara Elisa Monsalve Patino"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "Luis Gabriel Peña Ortiz"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "Johnatan Martinez Hernandez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9",
      "codigoGrupo": "9",
      "profesores": [
       "Sara Elisa Monsalve Patino"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET - Amazonia Grupo 1",
      "codigoGrupo": "AMAZ-01",
      "profesores": [
       "ADRIANA AGUILAR CASTRO"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Carlos Eduardo Gacía Ruiz"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "13:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Amazonia Grupo 1",
      "codigoGrupo": "AMAZ-02",
      "profesores": [
       "ADRIANA AGUILAR CASTRO"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 1",
      "codigoGrupo": "TUMA-01",
      "profesores": [
       "Yarley Gisela Sanchez Quinto"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 2",
      "codigoGrupo": "TUMA-02",
      "profesores": [
       "Yarley Gisela Sanchez Quinto"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Caribe Grupo 1",
      "codigoGrupo": "CARI-01",
      "profesores": [
       "Maureen Elizabeth Hooker Oneill"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000046": {
  "cod": "1000046",
  "codigoSIA": "1000046-B",
  "nombre": "Inglés III - Semestral",
  "creditos": 3,
  "tipologia": "NIVELACIÓN",
  "descripcion": "Se espera que los estudiantes, al término del tercer nivel, puedan leer y comprender textos auténticos de tipo académico y cultural, en los que, por ejemplo, se narren eventos o se describa un concepto a través del tiempo, se presente información de tipo periodístico, se explique el desarrollo de un fenómeno a través de una línea de realaciones de causa y efecto o se presente de manera sustentada un determinado punto de vista. Además se espera que puedan expresar de manera oral y escrita información relacionada con los conceptos trabajados a partir de la comprensión de lectura, que puedan sustentar su punto de vista y hacer reporte de la información queotraspersonaslestransmitan. Se cuenta con un Centro de Recursos que le brinda tanto a profesores como estudiantes un buen número de recursos para la enseñana y aprendizaje de la lengua.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000046)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Johnatan Martinez Hernandez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 10",
      "codigoGrupo": "10",
      "profesores": [
       "Jennly Angelica Gomez Rodriguez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 11",
      "codigoGrupo": "11",
      "profesores": [
       "Angelica Saenz Fonseca"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 12",
      "codigoGrupo": "12",
      "profesores": [
       "Liliana Marcela Guzman Aricapa"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 13",
      "codigoGrupo": "13",
      "profesores": [
       "ALBA LUCIA RIAÑO RODRIGUEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 14",
      "codigoGrupo": "14",
      "profesores": [
       "Angelica Saenz Fonseca"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 15",
      "codigoGrupo": "15",
      "profesores": [
       "Luis Gabriel Peña Ortiz"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 16",
      "codigoGrupo": "16",
      "profesores": [
       "Olga Lucia Ruiz Convers"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 17",
      "codigoGrupo": "17",
      "profesores": [
       "Luis Gabriel Peña Ortiz"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 18",
      "codigoGrupo": "18",
      "profesores": [
       "Narly Yadira Pardo Cadena"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Jesica paola Rendon Alfonso"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "JESUS DAVID TORRES RODRIGUEZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Claudia Patricia Cortes Lora"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "Johnatan Martinez Hernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Johnatan Martinez Hernandez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "Jesica paola Rendon Alfonso"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "Beatriz Elena Urrutia Sanchez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9",
      "codigoGrupo": "9",
      "profesores": [
       "Beatriz Elena Urrutia Sanchez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Carlos Eduardo Gacía Ruiz"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Amazonia Grupo 1 - Antropologia",
      "codigoGrupo": "AMAZ-01",
      "profesores": [
       "ADRIANA AGUILAR CASTRO"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TIC 5A",
        "salon": "17",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TIC 5A",
        "salon": "17",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 2 (REMOTO)",
      "codigoGrupo": "TUMA-02",
      "profesores": [
       "Celson Alexis Quiñones Montaño"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Caribe Grupo 1",
      "codigoGrupo": "CARI-02",
      "profesores": [
       "Maureen Elizabeth Hooker Oneill"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000047": {
  "cod": "1000047",
  "codigoSIA": "1000047-B",
  "nombre": "Inglés IV- Semestral",
  "creditos": 3,
  "tipologia": "NIVELACIÓN",
  "descripcion": "El objetivo general de los cuatro niveles de lengua en el Programa ALEX es desarrollar la competencia comunicativa en la lengua extranjera elegida por el estudiante (con énfasis en comprensión de lectura) y, paralelamente, su capacidad para tomar decisiones con respecto al proceso de aprendizaje. Se espera que los estudiantes, al término del cuarto nivel puedan leer y comprender textos auténticos de tipo académico con mayor énfasis en reportes de tipo investigativo y argumentativo. Identifican, por lo tanto, los principales aspectos en un reporte de investigación y los argumentos y contra argumentos que aparecen en un ensayo. También participan de manera oral en debates en torno a situaciones de tipo académico y cultural y redactan textos con el rigor que se requiere para expresar su punto de vista con respecto a un tema específico y los diferentes argumentos que lo sustentan. Se cuenta con un Centro de Recursos que le brinda tanto a profesores como estudiantes un buen número de recursos para la enseñana y aprendizaje de la lengua y que se relacionan directamente con los contenidos que el curso plantea.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000047)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Cesar Augusto Romero "
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 10",
      "codigoGrupo": "10",
      "profesores": [
       "Monica Alexandra Riaño Orjuela"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 11",
      "codigoGrupo": "11",
      "profesores": [
       "Jennly Angelica Gomez Rodriguez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 12",
      "codigoGrupo": "12",
      "profesores": [
       "Claudia Patricia Cortes Lora"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 13",
      "codigoGrupo": "13",
      "profesores": [
       "Angelica Saenz Fonseca"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 14",
      "codigoGrupo": "14",
      "profesores": [
       "LINDA JOHANA RUIZ GOMEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 15",
      "codigoGrupo": "15",
      "profesores": [
       "Claudia Patricia Cortes Lora"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 16",
      "codigoGrupo": "16",
      "profesores": [
       "Narly Yadira Pardo Cadena"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 17",
      "codigoGrupo": "17",
      "profesores": [
       "Angelica Saenz Fonseca"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 18",
      "codigoGrupo": "18",
      "profesores": [
       "ALBA LUCIA RIAÑO RODRIGUEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 19",
      "codigoGrupo": "19",
      "profesores": [
       "Aida Elena Monsalve Solorzano"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Yaneli Niño Osorio"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 20",
      "codigoGrupo": "20",
      "profesores": [
       "ALBA LUCIA RIAÑO RODRIGUEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 21",
      "codigoGrupo": "21",
      "profesores": [
       "Edwin Yesid Leon Silva"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 22",
      "codigoGrupo": "22",
      "profesores": [
       "LINDA JOHANA RUIZ GOMEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Monica Alexandra Riaño Orjuela"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Claudia Patricia Cortes Lora"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "Olga Lucia Ruiz Convers"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Monica Alexandra Riaño Orjuela"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "Cesar Augusto Romero "
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "Beatriz Elena Urrutia Sanchez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9",
      "codigoGrupo": "9",
      "profesores": [
       "Sara Elisa Monsalve Patino"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET CARIBE Grupo 02 (Enfermería)",
      "codigoGrupo": "CARI-02",
      "profesores": [
       "Maureen Elizabeth Hooker Oneill"
      ],
      "facultad": "FACULTAD DE ENFERMERÍA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "AULA MULTIPLE",
        "salon": "299",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "AULA MULTIPLE",
        "salon": "299",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET Tumaco Grupo 2 (Enfermeria - Remoto)",
      "codigoGrupo": "TUMA-02",
      "profesores": [
       "Yarley Gisela Sanchez Quinto"
      ],
      "facultad": "FACULTAD DE ENFERMERÍA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 12,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET Tumaco Grupo 3 (Derecho - Remoto)",
      "codigoGrupo": "TUMA-03",
      "profesores": [
       "Yarley Gisela Sanchez Quinto"
      ],
      "facultad": "FACULTAD DE DERECHO, CIENCIAS POLÍTICAS Y SOCIALES (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-PALMIRA GRUPO 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Carlos Eduardo Gacía Ruiz"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama Tumaco Grupo 1 (Remoto)",
      "codigoGrupo": "TUMA-01",
      "profesores": [
       "Yarley Gisela Sanchez Quinto"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 5,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Caribe Grupo 1",
      "codigoGrupo": "CARI-01",
      "profesores": [
       "Keshia Hilary Howard Livingston"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "AULA MULTIPLE",
        "salon": "299",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "AULA MULTIPLE",
        "salon": "299",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000048": {
  "cod": "1000048",
  "codigoSIA": "1000048-B",
  "nombre": "Inglés I- Virtual",
  "creditos": 3,
  "tipologia": "NIVELACIÓN",
  "descripcion": "Se espera que los estudiantes al término de este primer nivel de inglés, puedan comprender textos expositivos cortos relacionados con temáticas de tipo académico y que además, puedan expresar de manera oral y escrita información de tipo personal. Con base en un listado de descriptores predeterminados, el profesor selecciona el material que puede utilizar y ayuda al estudiante a partir del uso de estrategias de aprendizaje, para que poco a poco sea él o ella quien tenga el criterio para saber qué información le sirve, por qué y cómo usarla.Este curso está dirigido a estudiantes de la Sede Bogotá, interesados en aprender o en avanzar en el aprendizaje del inglés, apoyándose en medios virtuales. El entorno virtual lo conforman los espacios proporcionados por la plataforma Blackboard ( a través de la página web de la Universidad) y las herramientas que ésta brinda (curso, foros, chats, etc.). En el entorno virtual se presentan explicaciones y contextos para comprender aspectos de la lengua y practicar conocimientos adquiridos. El entorno virtual es el eje del programa y requiere del estudiante disciplina para concentrarse en el aprendizaje y práctica del idioma.",
  "sinProgramar": true,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000048-B)",
    "grupos": []
   }
  ]
 },
 "1000049": {
  "cod": "1000049",
  "codigoSIA": "1000049-B",
  "nombre": "Inglés II - Virtual",
  "creditos": 3,
  "tipologia": "NIVELACIÓN",
  "descripcion": "Se espera que los estudiantes, al término del segundo nivel, puedan comprender textos expositivos y narrativos relacionados con temáticas de tipo académico y de cultura general.Se esperaque en términos de comprensión escrita, el estudiante pueda identificar relaciones de temporalidad ysecuencia, de contraste y de causa y efecto. Además se espera que puedan expresar de manera oral y escrita información relacionada con la descripción detallada de lugares, de estados de salud, eventos del pasado y planes. A partir de un listado de descriptores predeterminados, el profesor selecciona el material que puede utilizar y ayuda al estudiante, a través del uso de estrategias de aprendizaje, para que poco a poco sea él o ella quien tenga el criterio para saber qué le sirve, por qué y cómo usarlo. Se cuenta con un Centro de Recursos que le brinda tanto a profesores como estudiantes un buen número de recursos para la enseñana y aprendizaje de la lengua. Este curso está dirigido a estudiantes de la Sede Bogotá, interesados en aprender o en avanzar en el aprendizaje del inglés, apoyándose en medios virtuales. El entorno virtual lo conforman los espacios proporcionados por la plataforma Blackboard ( a través de la página web de la Universidad) y las herramientas que ésta brind (curso, foros, chats, etc.). En el entorno virtual se presentan explicaciones y contextos para comprender aspectos de la lengua y practicar conocimientos adquiridos. El entorno virtual es el eje del programa y requiere del estudiante disciplina para concentrarse en el aprendizaje y práctica del idioma.",
  "sinProgramar": true,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000049-B)",
    "grupos": []
   }
  ]
 },
 "1000050": {
  "cod": "1000050",
  "codigoSIA": "1000050-B",
  "nombre": "Inglés III- Virtual",
  "creditos": 3,
  "tipologia": "NIVELACIÓN",
  "descripcion": "Se espera que los estudiantes, al término del tercer nivel, puedan leer y comprender textos auténticos de tipo académico y cultural, en los que, por ejemplo, se narren eventos o se describa un concepto a través del tiempo, se presente información de tipo periodístico, se explique el desarrollo de un fenómeno a través de una línea de realaciones de causa y efecto o se presente de manera sustentada un determinado punto de vista. Además se espera que puedan expresar de manera oral y escrita información relacionada con los conceptos trabajados a partir de la comprensión de lectura, que puedan sustentar su punto de vista y hacer reporte de la información queotraspersonaslestransmitan. Se cuenta con un Centro de Recursos que le brinda tanto a profesores como estudiantes un buen número de recursos para la enseñana y aprendizaje de la lengua. Este curso está dirigido a estudiantes de la Sede Bogotá, interesados en aprender o en avanzar en el aprendizaje del inglés, apoyándose en medios virtuales. El entorno virtual lo conforman los espacios proporcionados por la plataforma Blackboard ( a través de la página web de la Universidad) y las herramientas que ésta brind (curso, foros, chats, etc.). En el entorno virtual se presentan explicaciones y contextos para comprender aspectos de la lengua y practicar conocimientos adquiridos. El entorno virtual es el eje del programa y requiere del estudiante disciplina para concentrarse en el aprendizaje y práctica del idioma.",
  "sinProgramar": true,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000050-B)",
    "grupos": []
   }
  ]
 },
 "1000051": {
  "cod": "1000051",
  "codigoSIA": "1000051-B",
  "nombre": "Inglés IV- Virtual",
  "creditos": 3,
  "tipologia": "NIVELACIÓN",
  "descripcion": "El objetivo general de los cuatro niveles de lengua en el Programa ALEX es desarrollar la competencia comunicativa en la lengua extranjera elegida por el estudiante (con énfasis en comprensión de lectura) y, paralelamente, su capacidad para tomar decisiones con respecto al proceso de aprendizaje. Se espera que los estudiantes, al término del cuarto nivel puedan leer y comprender textos auténticos de tipo académico con mayor énfasis en reportes de tipo investigativo y argumentativo. Identifican, por lo tanto, los principales aspectos en un reporte de investigación y los argumentos y contra argumentos que aparecen en un ensayo. También participan de manera oral en debates en torno a situaciones de tipo académico y cultural y redactan textos con el rigor que se requiere para expresar su punto de vista con respecto a un tema específico y los diferentes argumentos que lo sustentan. Se cuenta con un Centro de Recursos que le brinda tanto a profesores como estudiantes un buen número de recursos para la enseñana y aprendizaje de la lengua y que se relacionan directamente con los contenidos que el curso plantea. Este curso está dirigido a estudiantes de la Sede Bogotá, interesados en aprender o en avanzar en el aprendizaje del inglés, apoyándose en medios virtuales. El entorno virtual lo conforman los espacios proporcionados por la plataforma Blackboard ( a través de la página web de la Universidad) y las herramientas que ésta brind (curso, foros, chats, etc.). En el entorno virtual se presentan explicaciones y contextos para comprender aspectos de la lengua y practicar conocimientos adquiridos. El entorno virtual es el eje del programa y requiere del estudiante disciplina para concentrarse en el aprendizaje y práctica del idioma.",
  "sinProgramar": true,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000051-B)",
    "grupos": []
   }
  ]
 },
 "1000052": {
  "cod": "1000052",
  "codigoSIA": "1000052-B",
  "nombre": "Inglés Intensivo I y II",
  "creditos": 6,
  "tipologia": "NIVELACIÓN",
  "descripcion": "Se espera que los estudiantes al término de los niveles I y II puedan comprender textos expositivos cortos relacionados con temáticas de tipo académico y pueda identificar relaciones de temporalidad ysecuencia, de contraste y de causa y efecto. Los estudiantes pueden expresar de manera oral y escrita información de tipo personal e información relacionada con la descripción detallada de lugares, de estados de salud, eventos del pasado y planes. Con base en un listado de descriptores predeterminados, el profesor selecciona el material que puede utilizar y ayuda al estudiante a partir del uso de estrategias de aprendizaje, para que poco a poco sea él o ella quien tenga el criterio para saber qué información le sirve, por qué y cómo usarla.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000052-B)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Liliana Marcela Guzman Aricapa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 28,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "JOSE JONATHAN MAESTRE HERRERA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 28,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Aida Elena Monsalve Solorzano"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 28,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000053": {
  "cod": "1000053",
  "codigoSIA": "1000053-B",
  "nombre": "Inglés Intensivo III y IV",
  "creditos": 6,
  "tipologia": "NIVELACIÓN",
  "descripcion": "Se espera que los estudiantes, al término de este curso intesivo puedan leer y comprender textos auténticos de tipo académico y cultural, en los que, por ejemplo, se narren eventos o se describa un concepto a través del tiempo, se presente información de tipo periodístico, se explique el desarrollo de un fenómeno a través de una línea de realaciones de causa y efecto o se presente de manera sustentada un determinado punto de vista. Se espera además que los estudiantes puedan leer y comprender textos auténticos de tipo académico con mayor énfasis en reportes de tipo investigativo y argumentativo. Identifican, por lo tanto, los principales aspectos en un reporte de investigación y los argumentos y contra argumentos que aparecen en un ensayo. Además se espera que puedan expresar de manera oral y escrita información relacionada con los conceptos trabajados a partir de la comprensión de lectura, que puedan sustentar su punto de vista y hacer reporte de la información queotraspersonaslestransmitan. Se cuenta con un Centro de Recursos que le brinda tanto a profesores como estudiantes un buen número de recursos para la enseñana y aprendizaje de la lengua. También participan de manera oral en debates en torno a situaciones de tipo académico y cultural y redactan textos con el rigor que se requiere para expresar su punto de vista con respecto a un tema específico y los diferentes argumentos que lo sustentan. Se cuenta con un Centro de Recursos que le brinda tanto a profesores como estudiantes un buen número de recursos para la enseñana y aprendizaje de la lengua y que se relacionan directamente con los contenidos que el curso plantea. Tambien participan de manera oral en debates.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000053)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jennly Angelica Gomez Rodriguez"
      ],
      "facultad": "FACULTAD DE ARTES",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 28,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Yaneli Niño Osorio"
      ],
      "facultad": "FACULTAD DE ARTES",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 28,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Javier Rodriguez Gomez"
      ],
      "facultad": "FACULTAD DE ARTES",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Javier Rodriguez Gomez"
      ],
      "facultad": "FACULTAD DE ARTES",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "LINDA JOHANA RUIZ GOMEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 28,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Olga Lucia Ruiz Convers"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 28,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000089": {
  "cod": "1000089",
  "codigoSIA": "1000089-B",
  "nombre": "Cátedra nacional de inducción y preparación para la vida universitaria",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta asignatura de orden nacional tiene el propósito de que los estudiantes admitidos estén en capacidad de:\n1. Identificar la estructura académico-administrativa institucional y el marco normativo que rige su quehacer académico y de convivencia en la Universidad.\n2. Reconocer la importancia de las competencias académicas, emocionales y sociales para fortalecer su desempeño académico a través de los medios ofrecidos por la Universidad.\n3. Reconocer y valorar el patrimonio, símbolos institucionales y principios que conforman la identidad institucional de la Universidad.\n\nEste curso estará dirigido a estudiantes que cursan el primer periodo académico de pregrado y a los estudiantes que han ingresado por el Programa Especial de Admisión y Movilidad Académica PEAMA. Es importante que antes de inscribir el curso revise si usted cumple con este requerimiento, en caso contrario, por favor abstenerse de hacer la inscripción dado que le será eliminada.\n\nMetodología: El curso se desarrollará de forma virtual con actividades asincrónicas.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000089)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Virtual",
      "codigoGrupo": "1",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 10 - Clase Virtual",
      "codigoGrupo": "10",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 11 - Clase Virtual",
      "codigoGrupo": "11",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 12 - Clase Virtual",
      "codigoGrupo": "12",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 13 - Clase Virtual",
      "codigoGrupo": "13",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 14 - Clase Virtual",
      "codigoGrupo": "14",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 15 - Clase Virtual",
      "codigoGrupo": "15",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 16 - Clase Virtual",
      "codigoGrupo": "16",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 17 - Clase Virtual",
      "codigoGrupo": "17",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 18 - Clase Virtual",
      "codigoGrupo": "18",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 19 - Clase Virtual",
      "codigoGrupo": "19",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - Clase Virtual",
      "codigoGrupo": "2",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 20 - Clase Virtual",
      "codigoGrupo": "20",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 21 - Clase Virtual",
      "codigoGrupo": "21",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3 - Clase Virtual",
      "codigoGrupo": "3",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4 - Clase Virtual",
      "codigoGrupo": "4",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5 - Clase Virtual",
      "codigoGrupo": "5",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6 - Clase Virtual",
      "codigoGrupo": "6",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7 - Clase Virtual",
      "codigoGrupo": "7",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9 - Clase Virtual",
      "codigoGrupo": "9",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000128": {
  "cod": "1000128",
  "codigoSIA": "1000128-B",
  "nombre": "Cátedra nacional: Juntas, juntes y juntos. Apuestas desde los estudios feministas y de género",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La cátedra Juntas, juntes y juntos. Apuestas desde los estudios feministas y de género se construye para generar espacios de aprendizaje significativo que promuevan el desarrollo de capacidades de reflexión teórica, ética y práctica sobre las relaciones de género y las políticas que se generan para garantizar la equidad en la vida universitaria y a nivel nacional, desde una perspectiva situada que reconozca las diferencias por clase, raza y género. El curso propone procesos formativos con un enfoque crítico de la construcción de conocimientos, una aproximación a los conceptos y teorías vinculadas al campo de los estudios de género y feministas, y la promulgación e implementación de instrumentos pedagógicos, artÍsticos y normativos para propiciar la transformación de las relaciones asimétricas de género en la universidad y en el país.\n\nMetodología: La cátedra se desarrollará de manera virtual y/o presencial según la planeación. Cada sede tendrá un sitio de recepción de una conferencia pregrabada y los participantes estarán acompañados por un tutor, que responderá las preguntas y desarrollará actividades que enriquezcan el tema de la sesión. Los y las estudiantes deberán realizar las lecturas obligatorias del programa para cada sesión y, de ser posible, las lecturas y el material multimedia complementario. Para la evaluación se realizarán actividades multimedia y cuestionarios que deberán completar los y las participantes en alguna de las plataformas virtuales habilitadas por la Universidad que se determinará al iniciar el curso.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000128-B)",
    "grupos": []
   }
  ]
 },
 "1000129": {
  "cod": "1000129",
  "codigoSIA": "1000129-B",
  "nombre": "Cátedra Colombiana: Ciudadanía, integridad y lucha contra la corrupción",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La corrupción constituye, para la sociedad colombiana y latinoamericana, un grave problema que reclama de manera urgente estrategias que permitan su superación. A pesar de los grandes esfuerzos normativos y de gestión que han puesto en marcha muchas instituciones, la problemática persiste y en algunos espacios se profundiza. Por tanto, resulta necesario avanzar en i) una mejor comprensión del papel que deben jugar los ciudadanos en la construcción pública de la integridad y la transparencia en los más diversos ámbitos, así como en ii) una adecuada apropiación pública de las herramientas disponibles para asegurar, en todos los niveles y escenarios de acción pública, la honra de la democracia y de los derechos fundamentales. En el marco de estas necesidades, la Cátedra colombiana permanente ¿Ciudadanía, integridad y lucha contra la corrupción¿ ofrece un espacio para apropiar los fundamentos, dimensiones, estrategias y dinámicas que contribuyan a construir integridad y transparencia en todos los espacios de la vida nacional, y a potenciar sus roles en el aseguramiento del Estado social de Derecho.\nEl foco de la Cátedra se ubica en el examen INTERDISCIPLINARIO de los fundamentos, condiciones y herramientas necesarias para potenciar, sobre bases éticas robustas, la ciudadanía y, junto con ello, la cultura de la integridad y la cultura democrática. Como es bien conocido, la normatividad legal parece haber sido insuficiente para promover ambas: ciudadanía e integridad. Por ello, la Cátedra articula reflexiones que, a la vez con y más allá de lo jurídico, exploran las bases éticas, las esferas de acción social, las herramientas pedagógicas y comunicativas, y las herramientas procedurales y simbólicas necesarias para avanzar en la apropiación progresiva de la ciudadanía y de la integridad como bases de la cooperación social y el bien común.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000129-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Diego Alexander Garzon Alvarado",
       "EDUARDO ALFONSO RUEDA BARRERA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 500,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "10:00",
        "fin": "13:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000134": {
  "cod": "1000134",
  "codigoSIA": "1000134-B",
  "nombre": "Cátedra Nacional - Enarmonía: Anclajes imprescindibles para la educación inclusiva en la Universidad",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso se plantea como una caja de herramientas para comprender, en qué consiste la educación inclusiva especialmente en la universidad, como educación que transforma vidas reafirmando el desafío de una ¿Educación para todos y para todas¿, considerando la inclusión como un punto fundamental de la educación para el desarrollo de cara a los desafíos del presente.\n\nEl curso está basado en el marco de la educación superior en los llamados actuales en los que se exhorta a poner en el centro de la reflexión la necesidad de la inclusión. Desde los marcos internacionales, el objetivo 4 de desarrollo sostenible (ODS) plantea como fundamental ¿Garantizar una educación inclusiva, equitativa y de calidad que promueva la oportunidad de aprendizaje durante toda la vida y para todos¿; en los objetivos propios de la Universidad Nacional de Colombia, desde el Plan Global de Desarrollo, con la creación de la cátedra se busca aportar en la armonización de las funciones misionales para la formación integral, especialmente en el hecho de aportar a la formación de ciudadanos creativos, con responsabilidad social y pensamiento crítico, desde la base del reconocimiento de la diferencia en los espacios académicos, de investigación y extensión y en los territorios, otorgando reflexiones que incorporan elementos para la reconceptualización del Bienestar universitario, componente central del eje 4 del plan global de desarrollo.\n\nPor ello como parte de los contenidos del curso se animará a comprender desde los marcos de la educación inclusiva las diferentes dimensiones de acción que contiene, en función de situar los límites actuales y oportunidades futuras de mejoras en el contexto nacional, además de promover en los asistentes su desarrollo humano integral.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000134-B)",
    "grupos": []
   }
  ]
 },
 "1000141": {
  "cod": "1000141",
  "codigoSIA": "1000141-B",
  "nombre": "Cátedra Nacional Colombia bioazul, dos mares un país",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Cerca del 45% del territorio colombiano corresponde a áreas marinas, distribuidas tanto en el océano Pacífico como en el mar Caribe. En Colombia contamos con dos extensas líneas costeras y sistemas insulares de gran importancia, que se caracterizan por tener ecosistemas estratégicos, tales como man-glares, arrecifes de coral, costas rocosas, estuarios, lagunas costeras, playas, pastos marinos, entre otros, que albergan una gran biodiversidad y son sustento para las comunidades costeras. Pese a la riqueza, diversidad e importancia del territorio marino costero del país, los mares no tienen centralidad en los procesos de desarrollo.\nPara las diferentes versiones de la cátedra nacional \"Colombia Bioazul, Dos Mares Un País\" se plantean temas de vanguardia y discusión global concernientes a la investigación de los océanos, su protección y aprovechamiento de los recursos marinos. Las conferencias magistrales y conversatorios con la participación de profesiona-les de las diversas disciplinas de las ciencias oceánicas están pensados para que los estudiantes de to-dos los programas curriculares puedan interiorizar conocimientos y saberes que les permitan compren-der la importancia global de los océanos, conocer los ecosistemas marino-costeros de nuestro país, conocer la biodiversidad marina y reconocer su importancia, generando así sentido de pertenencia por los territorios marino-costeros e insulares de Colombia.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000141-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Nestor Hernando Campos Campos",
       "Jose Ernesto Mancera Pineda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000151": {
  "cod": "1000151",
  "codigoSIA": "1000151-B",
  "nombre": "Glaciares: dimensiones y vínculos con la criósfera colombiana",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El tiempo apremia para reconocer señales contundentes de cambios climáticos en la actualidad y en el pasado reciente, siendo los glaciares óptimos modelos. Precisamente en diciembre de 2022, la Asamblea General de las Naciones Unidas adoptó la resolución para declarar el año 2025 como el ¿Año Internacional de la Preservación de los Glaciares¿2. Se destaca así la urgente necesidad de crear conciencia sobre el conocimiento y la conservación de los glaciares, y lograr promover acciones y medidas sostenibles para su preservación. La Cátedra atenderá a las preguntas ¿a quién importan y por qué nuestros glaciares?. Los temas de cada sesión se enmarcan en los 13 mensajes claves elaborados por los organismos de las Naciones Unidas encargados del Año Internacional de la Preservación de los Glaciares en los que se destacan la importancia de los glaciares en todo el mundo. La metodología de evaluación incluye la posibilidad de realizar diferentes procesos de creación y/o investigación, por lo que se propone la realización de proyectos finales que motiven a brindar una mirada holística que tenga en cuenta los diferentes saberes, sentires, habilidades y preferencias por parte de participantes y por parte del público general. Por esto las propuestas de trabajo final se plantea que pueden ser: 1) apuesta estética grupal para una exposición para ser presentados en exposiciones de arte itinerantes o 2) generar mejoras de contenidos con información relacionada con los glaciares en plataformas de Wikimedia (p. e. wikidata, wikipedia, wikimedia commons, etc.), priorizando así el fomento de la ciencia abierta y de la libre circulación de ideas, resaltando la realidad de los distintos territorios, protegiendo el medio ambiente mediante el intercambio de conocimientos, la buena conducta y el respeto por la biodiversidad.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000151-B)",
    "grupos": []
   }
  ]
 },
 "1000152": {
  "cod": "1000152",
  "codigoSIA": "1000152-B",
  "nombre": "Salud mental, bienestar emocional y herramientas para la vida - un enfoque interprofesional.",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La cátedra Salud mental, bienestar emocional y herramientas para la vida es un espacio académico interdisciplinario que busca fomentar el reconocimiento de la diversidad cultural y el desarrollo integral de la comunidad universitaria. A través de un enfoque basado en la evidencia, esta asignatura aborda la salud mental desde una perspectiva integral, incluyendo dimensiones psicoafectivas, intelectuales y sociales.\nUno de los ejes principales de la cátedra es fortalecer las habilidades de los estudiantes para formar redes de apoyo y colaboración, entendiendo que nos construimos en lo individual desde el colectivo. En este proceso, el reconocimiento de la diversidad y de los saberes ancestrales juega un papel fundamental, ya que permite generar espacios de diálogo, integración y aprendizaje mutuo. Al tejer estas redes, no solo se enriquecen las experiencias personales y profesionales de los estudiantes, sino que también se fortalece el proyecto de universidad como un reflejo del proyecto nación, en el que la comunidad se construye desde la pluralidad y el reconocimiento de las distintas realidades que nos conforman.\nA lo largo del curso, los estudiantes analizarán problemáticas de salud mental en el contexto universitario, explorarán estrategias de afrontamiento y conocerán experiencias interprofesionales que han desarrollado acciones en diferentes ámbitos. La metodología incluirá clases magistrales, talleres y actividades experienciales diseñadas para generar reflexiones críticas y proponer soluciones aplicables a las realidades estudiantiles en las distintas sedes.\nEsta cátedra no solo busca sensibilizar sobre la importancia del bienestar mental, sino también dotar a los estudiantes de herramientas prácticas para la gestión del estrés, la promoción de hábitos saludables y el fortalecimiento del tejido social dentro de la universidad.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000152-B)",
    "grupos": []
   }
  ]
 },
 "1000157": {
  "cod": "1000157",
  "codigoSIA": "1000157-B",
  "nombre": "Cátedra Proceso Constituyente Universitario en la UNAL: perspectiva histórica, comparada y situada",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La cátedra \"Proceso Constituyente Universitario en la Universidad Nacional de Colombia: perspectiva histórica, comparada y situada\" se concibe como un espacio académico, político y pedagógico para el análisis crítico de los procesos constituyentes que han marcado las universidades públicas y privadas, articulando experiencias internacionales, nacionales y territoriales, para aterrizarlas en la realidad concreta del Proceso Constitutente Universitario actualmente en curso en la UNAL. Está orientada a fortalecer las capacidades deliberativas, analíticas y propositivas de la comunidad universitaria mediante el estudio comparado de procesos democráticos, el aprendizaje situado y la producción colaborativa de propuestas de transformación universitaria. Esta cátedra tiene como objetivo constituirse en un espacios participativos aútonomos para generar propuestas para el Proceso Constituyente Universitario actualmente en curso dentro de la UNAL.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000157-B)",
    "grupos": []
   }
  ]
 },
 "1000158": {
  "cod": "1000158",
  "codigoSIA": "1000158-B",
  "nombre": "Cátedra nacional ambiental",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Cátedra Nacional Ambiental está dirigida a estudiantes de pregrado de todas las sedes de la Universidad Nacional de Colombia. Su propósito es responder a la necesidad de fortalecer la comprensión y el conocimiento sobre lo ambiental, abordando los problemas y conflictos ambientales desde un enfoque crítico, territorial y complejo, que aporte a la construcción de la sustentabilidad.\nLa Cátedra se desarrollará a través de módulos que combinan fundamentos epistemológicos con el análisis de casos prácticos, tanto en contextos universitarios como en interacción directa con comunidades en diversos territorios.\nEsta iniciativa será liderada por los Institutos de Estudios Ambientales (IDEA) de las sedes Bogotá, Medellín, Manizales y Palmira, y contará con la participación de las sedes de Tumaco, La Paz, Amazonas y San Andrés, así como del Sistema de Gestión Ambiental de la Universidad.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000158-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Maria Del Rosario Rojas Robles"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 200,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "08:00",
        "fin": "10:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000159": {
  "cod": "1000159",
  "codigoSIA": "1000159-B",
  "nombre": "Cátedra nacional acciones por la sustentabilidad",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Colombia enfrenta una profunda crisis ambiental que se manifiesta en la pérdida de biodiversidad, el deterioro de los recursos naturales, la contaminación creciente y el aumento de la desigualdad socioambiental. En este contexto, surge la necesidad urgente de formar profesionales capaces de comprender la complejidad de los desafíos actuales y actuar de manera propositiva desde sus disciplinas y territorios.\nEn este marco, la cátedra ¿Acciones por la Sustentabilidad¿ se propone como un espacio formativo e interdisciplinario impulsado por la Red de Valorización de Residuos (REDVAR), en articulación con la Coordinación Nacional de Gestión Ambiental de la Universidad Nacional de Colombia. Esta cátedra tiene como propósito fundamental fortalecer una conciencia crítica y transformadora frente a la sustentabilidad, promoviendo la reflexión, la participación activa y la implementación de acciones concretas que contribuyan a la transición hacia sociedades más justas, resilientes y en equilibrio con la naturaleza.\nA lo largo de 16 semanas, la cátedra combina sesiones magistrales con invitados expertos en los componentes (agua, aire, biodiversidad, suelo, residuos, energía, ciudades sostenibles, Impacto social en las comunidades, Empresas sostenibles e impacto económico, Política ambiental), con espacios de acción asincrónica donde los estudiantes diseñan y desarrollan propuestas prácticas alineadas con los componentes de la conferencia y los Objetivos de Desarrollo Sostenible (ODS).",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000159-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "LUZ MARINA OCAMPO CARMONA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000160": {
  "cod": "1000160",
  "codigoSIA": "1000160-B",
  "nombre": "Cátedra Nacional de Prompt Engineering",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso introduce a los estudiantes en Prompt Engineering, la disciplina de diseñar instrucciones efectivas para interactuar con modelos de inteligencia artificial generativa. A través de un enfoque teórico-práctico, los participantes aprenderán a crear prompts optimizados, evaluar respuestas de producidas por la Inteligencia\nArtificial (IA) y aplicar estas habilidades en contextos académicos, profesionales e investigativos. El curso es interdisciplinario, útil para estudiantes de todas las áreas del conocimiento que ofrece la Universidad Nacional de Colombia.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000160-B)",
    "grupos": []
   }
  ]
 },
 "1000161": {
  "cod": "1000161",
  "codigoSIA": "1000161-B",
  "nombre": "Cátedra Pedro Nel Gómez: centros de pensamiento en ingeniería para la vida",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta asignatura propone una mirada transformadora del rol de la ingeniería en diálogo permanente con los territorios, las comunidades y los desafíos del siglo XXI. A través de una integración multidisciplinar, los estudiantes explorarán cómo la ingeniería puede contribuir activamente al desarrollo sostenible, a la innovación con sentido social y a la construcción de soluciones que respondan a las realidades locales y globales.\n\nEl curso se estructura en torno a experiencias reales, estudios de caso, metodologías participativas y herramientas tecnológicas emergentes, que permiten a los futuros ingenieros comprender el territorio no solo como un espacio físico, sino como un entramado complejo de saberes, culturas, desafíos ambientales y oportunidades de cambio.\nSe abordan temas clave como la observación del territorio para el diseño de soluciones contextualizadas, el trabajo colaborativo con comunidades, la planificación del transporte como determinante de salud pública, la transición energética desde las ciencias de la tierra, y el papel de la nanotecnología en la industria geoenergética. Además, se incorpora una perspectiva innovadora mediante el uso de inteligencia artificial (Prompt Engineering) y el enfoque de innovación transformativa para el desarrollo responsable.\n\nLa asignatura también se articula con los centros de pensamiento en medios de vida sostenibles y responsabilidad minera, fortaleciendo el vínculo entre academia, territorio e industria. Finalmente, se incorporan herramientas de neuroeducación para potenciar el aprendizaje significativo y el pensamiento crítico de los estudiantes, preparando profesionales con competencias éticas, técnicas y humanas para actuar en contextos complejos y diversos.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000161-B)",
    "grupos": []
   }
  ]
 },
 "1000162": {
  "cod": "1000162",
  "codigoSIA": "1000162-B",
  "nombre": "Cátedra Nacional: Innovación digital resiliente en la educación superior",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Cátedra de Innovación Digital Resiliente en la Universidad Nacional de Colombia (UNAL) surge como una respuesta estratégica y académicamente rigurosa a los desafíos contemporáneos que enfrenta la educación superior frente a la acelerada transformación digital. En un entorno caracterizado por la complejidad, la incertidumbre y la creciente dependencia de tecnologías emergentes, es fundamental que las instituciones universitarias no solo adopten soluciones tecnológicas, sino que desarrollen capacidades internas para liderar, adaptar y transformar de manera ética y sostenible sus procesos institucionales, pedagógicos y administrativos. En este sentido, la cátedra se consolida como un espacio de formación, reflexión crítica y creación colectiva que articula el conocimiento técnico, el análisis contextual y la acción transformadora desde un enfoque institucional.\n\nSu importancia radica en la necesidad urgente de consolidar una cultura de innovación digital con enfoque resiliente; es decir, una cultura capaz de anticiparse, adaptarse y recuperarse ante los cambios disruptivos del entorno, garantizando la continuidad educativa, la equidad digital y el fortalecimiento del bienestar universitario. La resiliencia, en este marco, no se comprende únicamente como resistencia ante la adversidad, sino como una capacidad estratégica para aprender de los desafíos, incorporar tecnologías pertinentes, rediseñar estructuras institucionales y promover una transformación con sentido humano y responsabilidad pública. En este contexto, la cátedra contribuye de manera directa a la actualización de las capacidades del estudiantado en temas como gobernanza digital, diseño ético de tecnologías, inteligencia artificial educativa, arquitectura organizacional de TI, gestión de la información, identidad digital, infraestructura tecnológica y cultura de adopción tecnológica.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000162-B)",
    "grupos": []
   }
  ]
 },
 "1000169": {
  "cod": "1000169",
  "codigoSIA": "1000169-B",
  "nombre": "Cátedra Nacional: UNESCO. 15 años del paisaje cultural cafetero como patrimonio de la Humanidad",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Cátedra Nacional \"Conmemoración de los 15 años de la Declaratoria del Paisaje Cultural Cafetero como Patrimonio Mundial\" constituye una propuesta académica interdisciplinaria orientada a fortalecer la formación integral de los estudiantes mediante el análisis crítico de las relaciones entre patrimonio cultural, patrimonio natural, sostenibilidad, memoria, identidad, desarrollo territorial y políticas públicas.\nLa propuesta responde a la necesidad de generar espacios permanentes de reflexión sobre uno de los patrimonios culturales más importantes del país, promoviendo una comprensión amplia del territorio cafetero como escenario donde convergen procesos históricos, ambientales, económicos, sociales y culturales que inciden directamente en el bienestar de millones de colombianos.\nLa Cátedra desarrollará un modelo pedagógico basado en el aprendizaje activo, el trabajo colaborativo, la resolución de problemas, la interdisciplinariedad y la apropiación social del conocimiento. Las actividades combinarán conferencias magistrales, estudios de caso, análisis documental, trabajo con comunidades, ejercicios de cartografía participativa y producción de materiales de divulgación científica y cultural.\nUno de los principales valores agregados de la propuesta consiste en la articulación entre las diferentes sedes de la Universidad Nacional de Colombia, permitiendo conformar grupos interdisciplinarios integrados por estudiantes de diversas regiones y programas académicos. Esta estrategia favorecerá el intercambio de experiencias territoriales y el reconocimiento de la diversidad cultural del país.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000169-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Julian Alejandro Osorio Osorio"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "08:00",
        "fin": "11:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000170": {
  "cod": "1000170",
  "codigoSIA": "1000170-B",
  "nombre": "Cátedra Nacional: A diez años del acuerdo de paz: realidades, debates y pendientes",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "En 2026 se cumplen diez años de la firma del Acuerdo Final de Paz entre el Estado colombiano y las FARC-EP. Esta efeméride constituye una oportunidad pedagógica excepcional para que la Universidad Nacional de Colombia reflexione colectivamente sobre los alcances, los límites y los pendientes de este proceso histórico.\n\nLa Cátedra Nacional «A diez años del acuerdo de paz: realidades, debates y pendientes» propone una lectura crítica, intersedes e interdisciplinar del conflicto colombiano y de la implementación del Acuerdo de La Habana. Organizada por la Dirección Nacional de Bienestar Universitario y la Vicerrectoría Académica, convoca a docentes, estudiantes e invitados especializados de las ocho sedes de la UNAL para construir juntos una comprensión del conflicto armado, de los avances y rezagos del Acuerdo, y de las posibilidades futuras de una paz duradera, justa y emancipatoria.\n\nLa Cátedra aborda tres grandes ejes temáticos: (I) el conflicto armado y sus factores estructurales, actores y territorios (semanas 1¿5); (II) la implementación del Acuerdo entre la promesa y los territorios (semanas 6¿11); y (III) el futuro de la paz, las economías territoriales y los horizontes emancipatorios (semanas 12¿16). A lo largo de 16 sesiones semanales de tres horas cada una, con sede anfitriona rotativa entre las ocho sedes de la UNAL, la Cátedra construye una perspectiva territorial, intergeneracional e interdisciplinar sobre la paz en Colombia.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000170-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "ALVARO RIVAS GUZMAN"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "19:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000171": {
  "cod": "1000171",
  "codigoSIA": "1000171-B",
  "nombre": "Cátedra Nacional: Liderazgo en ingeniería para el desarrollo de los territorios",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Cátedra está concebida como un laboratorio vivo para el empoderamiento social y la gestión del cambio. En un contexto global e institucional caracterizado por la hipercomplejidad y la aceleración digital, este curso trasciende la visión tradicional del liderazgo individual y centralizado, posicionándolo como un proceso colectivo, relacional y en red.\nLa asignatura se fundamenta en un enfoque práctico, experiencial y transformador, diseñado específicamente para que los ingenieros y profesionales actúen como puentes, mediadores y movilizadores en sus entornos. A través de un \"diálogo de saberes\" y un ambiente de expresión libre que valora la diversidad de perspectivas, la cátedra fomenta la construcción de alianzas estratégicas intersectoriales. De este modo, se prepara a los participantes para abordar los desafíos públicos y corporativos de la sociedad, transformando problemas sistémicos aislados en soluciones organizacionales y territoriales legítimas, viables y sostenibles.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000171-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "María Luisa Villalba Morales"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000172": {
  "cod": "1000172",
  "codigoSIA": "1000172-B",
  "nombre": "Cátedra Nacional: Formación en voluntariado universitario",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso Formación en Voluntariado Universitario constituye una propuesta de formación humanística orientada al fortalecimiento del compromiso ético, ciudadano y social de la comunidad universitaria mediante la articulación de fundamentos conceptuales, normativos y metodológicos del voluntariado con experiencias de aprendizaje en contextos comunitarios. El curso contribuye a la formación integral de los participantes al promover la integración entre el conocimiento académico, la reflexión crítica y la acción solidaria, en concordancia con los principios misionales de la Universidad Nacional de Colombia y con su responsabilidad de contribuir al desarrollo humano, social, cultural, científico y ambiental del país.\nEn el marco de las funciones de docencia, investigación y extensión, la Universidad desarrolla múltiples iniciativas de interacción con la sociedad dirigidas a atender necesidades y problemáticas de diversos territorios. Estas iniciativas involucran la participación de estudiantes, docentes, egresados y personal administrativo en procesos de acompañamiento, trabajo comunitario y servicio social que constituyen expresiones del voluntariado universitario. Sin embargo, dichas experiencias suelen desarrollarse de manera dispersa y con diferentes niveles de formación en aspectos conceptuales, éticos, organizativos y metodológicos del voluntariado.\nEn este contexto, el curso busca consolidar un espacio académico que fortalezca las capacidades institucionales para la formación de voluntarios universitarios, promoviendo prácticas fundamentadas en la responsabilidad social universitaria, el diálogo de saberes, la participación, la corresponsabilidad y el reconocimiento de la diversidad territorial y cultural del país.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000172-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Monica Reinartz Estrada"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000174": {
  "cod": "1000174",
  "codigoSIA": "1000174-B",
  "nombre": "Cátedra Nacional: Transiciones colombianas hacia la vida en común",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Colombia atraviesa un momento histórico definido por la urgencia de transformar sus estructuras productivas, sociales y ecológicas. Las recientes políticas públicas alrededor de la Reforma Agraria, el sistema de cuidados y la equidad de género y la reindustrialización trazan la hoja de ruta del Estado para la próxima década. En este escenario, la academia debe asumir el compromiso científico de abordar esta complejidad institucional para construir rutas efectivas para la territorialización de este conjunto de políticas, a través de la enseñanza, la investigación y la extensión hacia las comunidades.\n\nSobre este horizonte, esta cátedra resulta pertinente porque busca articular diferentes campos disciplinares con el ánimo de comprender las ¿transiciones¿ como procesos políticos, técnicos y socioecológicos que tiene el potencial transformador en los niveles de organización local, regional y nacional. Desde la perspectiva de economías diversas, la cátedra busca responder a la pregunta por la ¿vida en común¿, articulando la justicia territorial (reforma agraria), la sostenibilidad de la vida (cuidado y equidad) y los nuevos paradigmas productivos (reindustrialización, trabajo e Inteligencia Artificial), reconociendo los derechos humanos y la participación de las comunidades como ejes transversales para la construcción de un país más justo y democrático.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000174-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000175": {
  "cod": "1000175",
  "codigoSIA": "1000175-B",
  "nombre": "Cátedra Nacional: Cátedra de Estudios del Pacífico: ¿de qué vive la gente?",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Cátedra de Estudios del Pacífico: ¿de qué vive la gente? es una asignatura de carácter interdisciplinar, interinstitucional e intersedes, orientada al análisis crítico de las condiciones históricas, económicas, políticas, sociales, culturales y territoriales que configuran las formas de sostenimiento y reproducción de la vida en el Pacífico colombiano.\n\nLa asignatura parte de una pregunta central ¿¿de qué vive la gente en el Pacífico colombiano?¿ que no se limita a identificar ocupaciones, empleos o fuentes de ingreso. Su alcance comprende el estudio de los entramados económicos, familiares, comunitarios, políticos y territoriales mediante los cuales las personas y colectivos producen, intercambian, distribuyen y movilizan recursos, sostienen sus hogares y enfrentan contextos persistentes de desigualdad, precarización, racismo estructural, extractivismo y violencia armada.\n\nDesde esta perspectiva, la economía se entiende como una dimensión constitutiva de la vida social y no como un ámbito separado de la cultura, la política o el territorio. En consecuencia, la asignatura examina las economías campesinas y rurales, las actividades extractivas, las configuraciones empresariales, el rentismo, el rebusque, el trabajo informal, las economías ilegalizadas, las redes clientelares, los programas estatales, la cooperación internacional, los mercados culturales y étnicos, las economías religiosas, los circuitos transfronterizos, la bancarización y el endeudamiento.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000175-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Eduardo Antonio Restrepo Uribe"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000176": {
  "cod": "1000176",
  "codigoSIA": "1000176-B",
  "nombre": "Cátedra Nacional: Pensamiento negro, territorio y autonomía",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Cátedra Nacional Pensamiento Negro, Territorios y Autonomía es un espacio académico, creado para la formación, reflexión y el diálogo de los saberes. Su propósito es abordar las raíces históricas, el recorrido jurídico y cultural de las comunidades negras, afrocolombianas, raizales y palenqueras en Colombia. Tomando como pilar la Ley 70 de 1993, la cátedra expande su mirada hacia todo el sistema político, las estructuras de gobernanza y autoridades tradicionales que configuran su autonomía a través de un enfoque participativo e interdisciplinario. Este espacio fomenta un intercambio real entre la Universidad Nacional de Colombia y los distintos actores de las regiones. El objetivo es construir una lectura crítica sobre los desafíos de la legislación actual, la defensa de los derechos colectivos y las estrategias de resistencia. Busca promover la apropiación social del conocimiento como una herramienta para la toma de decisiones, el bienestar y la transformación de las realidades territoriales.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000176-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Harold Enrique Tenorio Quiñones"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2011183": {
  "cod": "2011183",
  "codigoSIA": "2011183",
  "nombre": "Intercambio academico internacional",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "DEBE ESTAR AUTORIZADO POR LA ORI PARA LA INSCRIPCIÓN DE ESTA ASIGNATURA",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2011183)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Docente Ajuste Resto "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2011283": {
  "cod": "2011283",
  "codigoSIA": "2011283",
  "nombre": "Intercambio Académico Nacional estudiante de PREGRADO",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "DEBE ESTAR AUTORIZADO POR LA ORI PARA LA INSCRIPCIÓN DE ESTA ASIGNATURA",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2011283)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Docente Ajuste Resto "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2011302": {
  "cod": "2011302",
  "codigoSIA": "2011302",
  "nombre": "Asignatura por convenio con Universidad de los Andes I - PREGRADO",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Gestión Acaddémica de este Convenio es cordinada por la División de Registro",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2011302)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Docente Ajuste Derecho "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2011303": {
  "cod": "2011303",
  "codigoSIA": "2011303",
  "nombre": "Convenio sigueme",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "DEBE ESTAR AUTORIZADO POR LA ORI PARA LA INSCRIPCIÓN DE ESTA ASIGNATURA",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2011303)",
    "grupos": []
   }
  ]
 },
 "2012698": {
  "cod": "2012698",
  "codigoSIA": "2012698",
  "nombre": "Asignatura por convenio con Universidad de los Andes II - PREGRADO",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Gestión Acaddémica de este Convenio es cordinada por la División de Registro",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2012698)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Docente Ajuste Derecho "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2014269": {
  "cod": "2014269",
  "codigoSIA": "2014269",
  "nombre": "Intercambio academico internacional prorroga",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "DEBE ESTAR AUTORIZADO POR LA ORI PARA LA INSCRIPCIÓN DE ESTA ASIGNATURA",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2014269)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Docente Ajuste Resto "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2015633": {
  "cod": "2015633",
  "codigoSIA": "2015633",
  "nombre": "El oscuro objeto del deseo en la perversión y en la histeria",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "En el surgimiento y desarrollo del psicoanálisis tienen un lugar sobresaliente la histeria y la perversión, por ello no es de extrañar la afirmación de que son las histéricas quienes inventan el Psicoanálisis y los perversos la sexualidad. Eso puede hacer pensar los efectos de este encuentro en un solo sentido, pero no es así, el Psicoanálisis altera de forma radical la comprensión y tratamiento de esas dos antiquísimas entidades. Hay entonces un trabajo de mutua influencia.\n\nFreud nos deja conceptos como  la neurósis es una perversión negativa,  el niño es un perverso polimorfo y consideraciones según las cuáles las fantasías histéricas guardan relación con realizaciones perversas, también nos señala al fetichismo como paradigma de perversión, ese legado es un esfuerzo por diferenciar e indicar cercanías. Existen distintos momentos en estas y otras elaboraciones freudianas, igualmente hay hitos como la diferencia de los sexos y la feminidad sobre los cuales gira la labor clínica y la teoría psicoanalítica. Hacer un recorrido por esos momentos con miras a situar las cuestiones que aquí interesan es una pretensión central en este curso.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2015633)",
    "grupos": [
     {
      "grupo": "Grupo 1 - 2015633",
      "codigoGrupo": "1",
      "profesores": [
       "Alvaro Daniel Reyes Gomez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "AULA 104",
        "salon": "212-104",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2015705": {
  "cod": "2015705",
  "codigoSIA": "2015705",
  "nombre": "Farsi I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso busca motivar el aprendizaje de idioma farsi, a través de procesos pedagógicos que le permitan al estudiante desde aprender nociones morfosintácticas y fonético fonológicas básicas, hasta desarrollar su competencia comunicativa en dicho idioma. Se trata asimismo, de promover la relación entre lengua y cultura y de acercamiento a otros pueblos. El desarrollo de este curso permitirá a la comunidad universitaria la opción de cursar una lengua distinta a las nueve que el Programa ALEX viene ofreciendo: Inglés, Frances, Alemán, Portugués, Italiano, Chino, Japonés, Ruso y Farsi. Además, el contacto con nuevas culturas como la de Irán permitirá el fortalecimiento en las relaciones internacionales tanto de la Universidad como del país y un mayor acercamiento y conocimiento entre las culturas.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2015705)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA 205",
        "salon": "205-205",
        "edificio": "205 - Orlando Fals Borda",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - Clase presencial",
      "codigoGrupo": "2",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA 204",
        "salon": "205-204",
        "edificio": "205 - Orlando Fals Borda",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA 102",
        "salon": "205-102",
        "edificio": "205 - Orlando Fals Borda",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2015706": {
  "cod": "2015706",
  "codigoSIA": "2015706",
  "nombre": "Farsi II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso busca motivar el aprendizaje de idioma farsu a través de procesos pedagógicos que le permitan al estudiante desde aprender nociones morfosintácticas y fonético fonológicas básicas, hasta desarrollar su competencia comunicativa en dicho idioma. Se trata asimismo, de promover la relación entre lengua y cultura y de acercamiento a otros pueblos. Al igual que en el nivel I, el desarrollo del presente curso permitirá a la comunidad universitaria continuar como el aprendizaje de esta lengua. Además, el contacto más profundo y contextualizado con la cultura de Irán.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2015706)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA 210",
        "salon": "212-210",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 104",
        "salon": "225-104",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2015725": {
  "cod": "2015725",
  "codigoSIA": "2015725",
  "nombre": "Turco I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso busca motivar el aprendizaje de idioma turco, a través de procesos pedagógicos que le permitan al estudiante desde aprender nociones morfosintácticas y fonético fonológicas básicas, hasta desarrollar su competencia comunicativa en dicho idioma. Se trata asimismo de promover la relación entre lengua y cultura y de acercamiento a otros pueblos. El desarrollo de este curso permitirá a la comunidad universitaria la opción de cursar una lengua distinta a las nueve que el Programa ALEX viene ofreciendo: Inglés, Francés, Alemán, Portugués, Italiano, Chino, Japonés, Ruso y Farsi. Además, el contacto con nuevas culturas como la de Turquía permitirá el fortalecimiento en las relaciones internacionales tanto de la Universidad como del país, y un mayor acercamiento y conocimiento entre las culturas. Se realizarán dos exámenes orales, cada uno de estos equivale a un 15% de la nota final. Además, se realizará un examen escrito dividido en cuatro áreas: escuchar, escribir, leer y hablar. Este equivale al 25%. La asistencia representa 15% en la nota final.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2015725)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "NEZAKET BAYKAL "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 206",
        "salon": "225-206",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 204",
        "salon": "205-204",
        "edificio": "205 - Orlando Fals Borda",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - Clase Presencial",
      "codigoGrupo": "2",
      "profesores": [
       "NEZAKET BAYKAL "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 205",
        "salon": "205-205",
        "edificio": "205 - Orlando Fals Borda",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 203",
        "salon": "225-203",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3 - Clase Presencial",
      "codigoGrupo": "3",
      "profesores": [
       "Betul Ozen "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 206",
        "salon": "225-206",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 204",
        "salon": "205-204",
        "edificio": "205 - Orlando Fals Borda",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2015732": {
  "cod": "2015732",
  "codigoSIA": "2015732",
  "nombre": "Turco II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso busca motivar el aprendizaje de idioma turco, a través de procesos pedagógicos que le permitan al estudiante desde aprender nociones morfosintácticas y fonético fonológicas básicas, hasta desarrollar su competencia comunicativa en dicho idioma. Se trata asimismo de promover la relación entre lengua y cultura y de acercamiento a otros pueblos. El desarrollo de este curso permitirá a la comunidad universitaria la opción de cursar una lengua distinta a las nueve que el Programa ALEX viene ofreciendo: Inglés, Francés, Alemán, Portugués, Italiano, Chino, Japonés, Ruso y Farsi. Además, el contacto con nuevas culturas como la de Turquía permitirá el fortalecimiento en las relaciones internacionales tanto de la Universidad como del país, y un mayor acercamiento y conocimiento entre las culturas. Se realizarán dos exámenes orales, cada uno de estos equivale a un 15% de la nota final. Además, se realizará un examen escrito dividido en cuatro áreas: escuchar, escribir, leer y hablar. Este equivale al 25%. La asistencia representa 15% en la nota final.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2015732)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "NEZAKET BAYKAL "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON 107",
        "salon": "225-107",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - Clase presencial",
      "codigoGrupo": "2",
      "profesores": [
       "Betul Ozen "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 410",
        "salon": "212-410",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 102",
        "salon": "225-102",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2016133": {
  "cod": "2016133",
  "codigoSIA": "2016133",
  "nombre": "Ciudad, hábitat y vivienda",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso de contexto asume el territorio como campo relacional que vincula múltiples procesos espaciales y temporales, de orden material, humano y ambiental, dentro del contexto de la problemática contemporánea, en este caso la relación entre habitat y",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2016133)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Alvaro Ibata Ceballos"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 100,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AUDITORIO 2",
        "salon": "303C-422",
        "edificio": "303 - EDIFICIO DE LAS ARTES SEDE BOGOTA",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2016253": {
  "cod": "2016253",
  "codigoSIA": "2016253",
  "nombre": "Lingüística Italiana",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "A nivel general, el curso se propone: Sensibilizar a los estudiantes sobre la lengua y la cultura italiana; Ofrecer elementos para la descripción de la lengua italiana tanto a nivel sincrónico como diacrónico. A nivel específico: Presentar las principales características de la lengua italiana desde los aspectos fonético-fonológico, morfológico, sintáctico, pragmático y sociolingüístico;\nIndicar los principales factores que han participado en el desarrollo de la lengua italiana; Presentar las principales etapas de la historia de la lengua italiana.\nMetodología: Exposiciones del profesor y de los estudiantes;\nTalleres sobre algunas de las temáticas;\nDurante el curso se analizarán textos y temáticas culturales representativas de acuerdo con cada capítulo.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2016253 (2016253)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Lingüística Italiana",
      "codigoGrupo": "1",
      "profesores": [
       "Rodolfo Suarez Ortega"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALA DE VIDEO 2",
        "salon": "229-105",
        "edificio": "229 - Howard Rochester",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA 204",
        "salon": "205-204",
        "edificio": "205 - Orlando Fals Borda",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2016274": {
  "cod": "2016274",
  "codigoSIA": "2016274",
  "nombre": "Lengua y cultura wayuu II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El objetivo de este curso es para fortalecer y ampliar lo que se ha visto en el primer nivel. Dar a conocer la vision profunda que tienen los wayuu de su entorno natural y del cosmos, en la cual, la sociedad (wayuu) hace parte integrar de esta estructura de estos dos espacios geograficos. Hablar de las diferentes actividades pragmaticas en cada ciclo del tiempo en los lugares sagrados donde se recuerda y se fortalece los lazos espirituales con el mundo natural. Plantear que el mito no es una ficcion, sino, una realidad percibida y que estos mitos es un conocimiento que le da sentido la existencia del wayuu en el universo y en el tambien se encuentra un criterio para darle un orden todo lo que existe en el mundo.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Lengua y Cultura Wayuu II (2016274)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Rafael Segundo Mercado Epieyu"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA 112",
        "salon": "212-112",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA 112",
        "salon": "212-112",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2016847": {
  "cod": "2016847",
  "codigoSIA": "2016847",
  "nombre": "Medicina de peces",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "La producción piscícola de especies de consumo y el uso de peces como biomodelos en investigación, indicadores de contaminación y mascotas (peces ornamentales) han hecho que el conocimiento en la medicina de estas especies sea cada día más necesario para el médico veterinario, zootecnista y profesional de áreas afines. La humanidad ha puesto su mira en la producción acuícola intensiva como una alternativa en la obtención de alimento de alta calidad. Sin embargo, en dichos sistemas productivos las especies son cultivadas en altas densidades de siembra generando factores de riesgo que favorecen el deterioro de la calidad del agua y la proliferación de patógenos . De otra parte, los peces pueden ofrecer características óptimas para ser utilizados como bioindicadores de contaminación acuática y ambiental ya que varios programas de monitoreo ambiental se apoyan en el uso de estas especies para hacer seguimiento a las condiciones de salubridad de los cuerpos de agua. Por ello, el conocimiento de la biología y la medicina de estas especies es igualmente importante para poder interpretar y diagnosticar los cambios generados por la exposición de estos organismos a contaminantes potenciales presentes en la agua. Finalmente, la comercialización de peces como mascotas en el mundo entero exige conocimiento en el control, prevención y tratamiento de enfermedades tanto en sistemas de gran escala abiertos al público (acuarios de exhibición) como en sistemas pequeños en los hogares de los acuariófilos. La Facultad de Medicina Veterinaria y de Zootecnia de la Universidad Nacional de Colombia, sede Bogotá, no ha sido ajena a estos desarrollos y necesidades. Por esta razón se dio la creación años atras de la Línea de Profundización en Acuicultura, la oferta de líneas de investigación en el posgrado en Salud y Producción Animal, asi como la realización periódica de seminarios y congresos de educación continuada en el área.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2016847 (2016847)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jaime Fernando Gonzalez Mantilla"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017046": {
  "cod": "2017046",
  "codigoSIA": "2017046",
  "nombre": "Anatomía comparada",
  "creditos": 5,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "La asignatura de Anatomía proveerá al estudiante un conocimiento claro sobre la forma, estructura, función y relaciones recíprocas que establecen los órganos en los animales domésticos, con un enfoque aplicado y de manera comparada. Su estudio permitirá sentar las bases de la comprensión de la estructura y función de los diferentes componentes anatómicos.\n\nLa asignatura se desarrollará mediante un componente teórico (clases magistrales) y su complemento mediante clases prácticas (anfiteatro). Lecturas obligatorias serán discutidas y evaluadas durante el curso.\n\nSe desarrollaran competencias transversales, específicas y disciplinares",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017046)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Fabian Enrique Castañeda Herrera",
       "HUGO ANDRES GUTIERREZ TRUJILLO"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 43,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "AUDITORIO DE LA FACULTAD",
        "salon": "502-7",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "AUDITORIO DE LA FACULTAD",
        "salon": "502-7",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "13:00",
        "fin": "17:00",
        "lugar": "ANFITEATRO DE ANATOMIA 1",
        "salon": "503-119",
        "edificio": "503 - Auditorio, Anfiteatro y Microbiología",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "17:00",
        "lugar": "ANFITEATRO DE ANATOMIA 1",
        "salon": "503-119",
        "edificio": "503 - Auditorio, Anfiteatro y Microbiología",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "HUGO ANDRES GUTIERREZ TRUJILLO",
       "Fabian Enrique Castañeda Herrera"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 43,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "AUDITORIO DE LA FACULTAD",
        "salon": "502-7",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "13:00",
        "fin": "17:00",
        "lugar": "ANFITEATRO DE ANATOMIA 2",
        "salon": "503-120",
        "edificio": "503 - Auditorio, Anfiteatro y Microbiología",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "ANFITEATRO DE ANATOMIA 2",
        "salon": "503-120",
        "edificio": "503 - Auditorio, Anfiteatro y Microbiología",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "17:00",
        "lugar": "ANFITEATRO DE ANATOMIA 2",
        "salon": "503-120",
        "edificio": "503 - Auditorio, Anfiteatro y Microbiología",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Maria Jose Monroy Cendales"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 32,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 2",
      "codigoGrupo": "PAL-02",
      "profesores": [
       "David Alexander Martinez Rodriguez"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 31,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "13:00",
        "fin": "18:00",
        "lugar": "LABORATORIO ANATOMIA ANIMAL",
        "salon": "90-1010",
        "edificio": "S9 LABORATORIOS ZOOTECNIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "13:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "17:00",
        "lugar": "LABORATORIO ANATOMIA ANIMAL",
        "salon": "90-1010",
        "edificio": "S9 LABORATORIOS ZOOTECNIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 3",
      "codigoGrupo": "PAL-03",
      "profesores": [
       "Juan Carlos Garcia Yela"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "12:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017047": {
  "cod": "2017047",
  "codigoSIA": "2017047",
  "nombre": "Bacteriología y micología",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "Proporcionar las bases conceptuales y prácticas que permitan al estudiante de Medicina Veterinaria el conocimiento de los microorganismos infecciosos, sus\ncaracterísticas biológicas, su importancia clínica y diagnóstico. Contribuir al conocimiento de las principales enfermedades infecciosas que pueden afectar\nespecies de relevancia económica así como su incidencia en salud y producción y su relevancia en salud pública e infectologia. Comprender los conceptos de\ncontrol microbiano que contribuyan a un buen desempeño en el campo clínico- quirúrgico. Conocer la importancia de la contaminación microbiana de los\nalimentos de origen animal, para contribuir a garantizar su inocuidad de estos desde la producción primaria. Estudiar las principales aplicaciones del uso de\nmicroorganismos en el campo de los alimentos y la biotecnología médica.\nComo objetivo terminal se espera contribuir a la formación de profesionales de la Medicina Veterinaria idóneos, responsables y éticos, con la capacidad de\nparticipar en la solución de problemas que atañen a la salud animal y la salud pública en Colombia.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017047)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Martha Cecilia Suarez Alfonso"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "LABORATORIO DE DIAGNOSTICO I - LAB. MICROBIOLOGIA",
        "salon": "503-102",
        "edificio": "503 - Auditorio, Anfiteatro y Microbiología",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "LABORATORIO DE DIAGNOSTICO I - LAB. MICROBIOLOGIA",
        "salon": "503-102",
        "edificio": "503 - Auditorio, Anfiteatro y Microbiología",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-PALMIRA GRUPO 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Santiago Monsalve Buritica"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017048": {
  "cod": "2017048",
  "codigoSIA": "2017048",
  "nombre": "Bioética y bienestar en salud animal",
  "creditos": 3,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "JUSTIFICACIÓN\nLa Facultad de Medicina Veterinaria y de Zootecnia, preocupada por velar por el bienestar animal, se propone hacer un acercamiento entre los estudiantes, la normatividad vigente, y las actividades que emplean animales vivos en docencia, producción, investigación y extensión.\n\nEn consecuencia, se plantea la creación de la cátedra de bioética y bienestar animal, acorde a la legislación nacional: Resolución 008430 de 1993, Ley 84 de 1989 y Ley 576 del 2000.\n\nOBJETIVOS\n\nGeneral\n\nIncorporar los conceptos de bioética y bienestar en el manejo y tenencia de los animales como una disciplina en el currículo de la Facultad de Medicina Veterinaria y de Zootecnia de la Universidad Nacional de Colombia.\n\nEspecíficos\n\nDesarrollar el entendimiento del bienestar animal en relación al balance emocional y fisiológico.\nGenerar la capacidad de integrar las implicaciones legales, éticas y de bienestar animal para hacer análisis crítico desde cada perspectiva de participación de los animales en el desarrollo académico científico.\nEstimular un pensamiento crítico de los temas de bienestar animal que serán desarrollados a través del curso.\nFamiliarizar a la comunidad académica con la normatividad vigente sobre los derechos de los animales, y capacitar al personal vinculado al manejo y cuidado de los animales.\n\"",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017048)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Sandra Milena Lamprea Maldonado",
       "Claudia Isabel Brieva Rico"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 19,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "AUDITORIO DE LA FACULTAD",
        "salon": "502-7",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "GRUPO 1 PAET VETERINARIA",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Raúl Andrés Molina Benavides"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 4,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017049": {
  "cod": "2017049",
  "codigoSIA": "2017049",
  "nombre": "Biofísica",
  "creditos": 2,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "El funcionamiento de los sistemas y órganos de los seres vivos tiene una sólida base en los principios y leyes de la física. Para una profesión como la Medicina Veterinaria se requiere que los fundamentos físicos tengan una integración real con los sistemas de órganos de los animales que representan un interés profesional.\n\nSin embargo, en la actualidad la biofísica ha evolucionado a un área relativamente bien definida que tiene poco que ver con la medicina, por lo menos manera directa, ya que se ha encargado de la física de las grandes biomoléculas, virus, etc. Pero durante su desarrollo incluía como una subespecialidad a la biofísica médica, en donde se busca: 1) comprender los principios de la física aplicados a las funciones corporales, y 2) comprender los principios físicos de los instrumentos usados en el diagnóstico médico. Por este motivo, el presente curso se enfocará en la biofísica médica.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017049)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Francisco Andres Olea Salgado"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "LABORATORIO F.M.V.Z.",
        "salon": "500-120",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Grupo 1 Medicina Veterinaria",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Oscar Yovany Checa Ceron"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 31,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "13:00",
        "fin": "16:00",
        "lugar": "150-2070",
        "salon": "170-22-30",
        "edificio": "S18",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Grupo 2 Medicina Veterinaria",
      "codigoGrupo": "PAL-02",
      "profesores": [
       "Juan Alejandro Vinasco Suarez"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "16:00",
        "lugar": "150-2070",
        "salon": "170-22-30",
        "edificio": "S18",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017050": {
  "cod": "2017050",
  "codigoSIA": "2017050",
  "nombre": "Biología molecular avanzada",
  "creditos": 2,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "INTRODUCCIÓN\nLA BIOLOGÍA MOLECULAR, HA TENIDO AVANCES EXTRAORDINARIOS EN LOS ÚLTIMOS 20 AÑOS. LAS TECNOLOGÍAS DE ADN RECOMBINANTE, PERMITIERON LA MANIPULACIÓN GENÉTICA (INGENIERÍA GENÉTICA) LO CUAL HA RESULTADO EN UNA REVOLUCIÓN BIOLÓGICA Y DIERON LAS BASES DE LA BIOTECNOLOGÍA Y DE MUCHAS INDUSTRIAS QUE DEPENDEN DE ÉSTA.\nLA BIOLOGÍA MOLECULAR HA JUGADO UN PAPEL SOBRESALIENTE EN EL ENTENDIMIENTO DE PROCESOS BIOLÓGICOS RELACIONADOS CON LOS ESTADOS FISIOLÓGICOS NORMALES Y LOS DE ENFERMEDAD A NIVEL INDIVIDUAL Y DE POBLACIONES. EL CONOCIMIENTO DE LA GENÉTICA MOLECULAR DE LOS DISTINTOS AGENTES ETIOLÓGICOS DE IMPORTANCIA EN LAS DIFERENTES ESPECIES ANIMALES, PROPORCIONA ELEMENTOS DE ANÁLISIS, QUE PERMITEN ESTABLECER SU EVOLUCIÓN GENÉTICA.\nEL EMPLEO DE LA BIOLOGÍA MOLECULAR A PERMITIDO UN MEJOR MANEJO DE LAS ENFERMEDADES DE LOS SERES VIVOS (HOMBRE, ESPECIES ANIMALES, PLANTAS) DESDE LA ÓPTICA DE LA PREVENCIÓN Y TRATAMIENTO DE LAS MISMAS, SIENDO EL USO DE TÉCNICAS MODERNAS DE BIOTECNOLOGÍA, DE UNA ALTA APLICACIÓN EN EL MEJORAMIENTO GENÉTICO DE ESPECIES PRODUCTIVAS (ANIMALES Y PLANTAS) MEDIANTE EL USO DE MARCADORES MOLECULARES QUE PERMITEN SELECCIONAR INDIVIDUOS SEGÚN SUS CARACTERÍSTICAS POSITIVAS DE PRODUCCIÓN O RESISTENCIA GENÉTICA A FACTORES ADVERSOS MEDIOAMBIENTALES.\n\nOBJETIVO GENERAL\nCAPACITAR A LOS ESTUDIANTES INTERESADOS EN EL TEMA, EN CONCEPTOS BÁSICOS, APLICACIONES PRÁCTICAS Y TENDENCIAS EN EL USO DE LA BIOLOGÍA MOLECULAR.\nOBJETIVOS ESPECÍFICOS\n\n- PROPORCIONAR A AQUELLOS ESTUDIANTES DE PREGRADO QUE ESTÉN INTERESADOS EN PROFUNDIZAR SOBRE LA APLICACIÓN DE LA BIOLOGÍA MOLECULAR, LAS HERRAMIENTAS QUE LE PERMITAN COMPLEMENTAR SU FORMACIÓN PROFESIONAL.\n\n- ESTABLECER LAS BASES PARA LA FORMACIÓN Y FORTALECIMIENTO DE LA MASA CRÍTICA EN ESTA ÁREA, QUE LE PERMITA AL ESTUDIANTE TENER VENTAJAS COMPARATIVAS, DENTRO DE SU FACULTAD. Y HACER PARTE DE EQUIPOS MULTIDISCIPLINARIOS DE INVESTIGACIÓN TANTO BÁSICA COMO APLICADA EN EL CAMPO DE LA BIOLOGÍA MOLECULAR.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017050)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Gloria Consuelo Ramirez Nieto",
       "Jairo Jaime Correa",
       "Javier Andres Jaimes Olaya"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "LAYDY KATERINE SERRANO MUJICA"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "13:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 2",
      "codigoGrupo": "PAL-02",
      "profesores": [
       "LAYDY KATERINE SERRANO MUJICA"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017051": {
  "cod": "2017051",
  "codigoSIA": "2017051",
  "nombre": "Odontogeriatria",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "\"El Departamento de Salud Oral y el núcleo de desarrollo académico de ODONTOGERIATRIA, tiene el propósito de establecer el estudio de los cambios biológicos, que se presentan en el adulto mayor, motivando al estudiante en el interés por el trabajo investigativo y tratamiento de las afecciones presentes en la cavidad oral.\n\nEn el área de la salud en la Tercera Edad, su manejo diagnóstico y terapéutico, se han constituido en el presente siglo en uno de los polos de desarrollo investigativo y de innovación en el manejo clínico, con más relevancia en los países en vías de desarrollo. En Colombia se ha constituido un reto para las profesiones de la salud abrir espacios de investigación y aplicación a nivel universitario y de atención institucional, para responder a las necesidades que generan el aumento de la población mayor de 60 años.\n\nLa Facultad de Odontología a través de un grupo de profesores del departamento de Salud Oral con formación en el área ha desarrollado un programa de nivelación para estudiantes de pregrado y actividades de extensión con el propósito de ampliar curricularmente los contenidos del campo geriátrico y ofrecer a los profesionales elementos de actualización en la atención de los pacientes.\n\n\n\"",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017051)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Monica Liberato Orjuela"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MARIO VILLAMIZAR REY",
        "salon": "210-201",
        "edificio": "210 - Rafael Torres Pinzón",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017052": {
  "cod": "2017052",
  "codigoSIA": "2017052",
  "nombre": "Cirugía I",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "OBJETIVOS DE LA ASIGNATURA\n1. Lograr que el estudiante comprenda los principios básicos de desinfección, antisepsia y asepsia y\npueda aplicarlos en un contexto clínico.\n2. Preparar al estudiante para llevar a cabo la anestesia general de un canino o un felino, de forma\nsegura y efectiva, así como el proceso de monitoreo de la misma.\n3. Desarrollar las competencias quirúrgicas básicas, de modo que el estudiante esté en capacidad\nde llevar a cabo los procedimientos quirúrgicos electivos más comunes en cirugía de pequeños\nanimales: suturas en general, ovariohisterectomía y orquiectomía.\n4. Familiarizar al estudiante con la realización de procedimientos quirúrgicos más complejos como\nson: laparotomía exploratoria, esplenectomía, cirugía genitourinaria y cirugía gastrointestinal.\n5. Brindar al estudiante conceptos básicos de la realización de cirugías de alta complejidad: cirugía\nortopédica y cirugía oftalmológica.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017052)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Vladimir Galindo Zamora",
       "German Dario Perez Matiz"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 24,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "SALA DE PRACTICA DE CIRUGIA DE PEQUEÑOS ANIMALES",
        "salon": "501-101",
        "edificio": "501 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "SALA DE PRACTICA DE CIRUGIA DE PEQUEÑOS ANIMALES",
        "salon": "501-101",
        "edificio": "501 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Vladimir Galindo Zamora",
       "German Dario Perez Matiz",
       "Giovanni Vargas Hernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 24,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "SALA DE PRACTICA DE CIRUGIA DE PEQUEÑOS ANIMALES",
        "salon": "501-101",
        "edificio": "501 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "SALA DE PRACTICA DE CIRUGIA DE PEQUEÑOS ANIMALES",
        "salon": "501-101",
        "edificio": "501 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017053": {
  "cod": "2017053",
  "codigoSIA": "2017053",
  "nombre": "Cirugía II",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "La asignatura busca desarrollar los conocimientos y las habilidades necesarias para resolver los problemas quirúrgicos que se presentan con mayor frecuencia en los Bovinos, Equinos, Ovinos, Caprinos y Porcinos. Se revisaran en especial, aquellas intervenciones que se puedan llevar a cabo en condiciones de campo, es decir las que no requieren facilidades quirúrgicas especializadas. Se llevaran a cabo prácticas con piezas anatómicas para los procedimientos que lo permitan y en algunos casos se utilizarán pacientes de la clínica de Grandes Animales o de los hatos de la Facultad. Se realizaran cuatro parciales teóricos asi: en la semana 3, 8, 13 y en la 16. Los parciales tendran un valor de 20%. El 20% restante será un ensayo sobre un tema de libre escogencia, relacionado con la cátedra y que deberá ser escrito a mano con una extension máxima de 5 hojas, y deberá entregarse en la semana 12.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017053)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Maria Alejandra Torres Medina"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALON DE CLASE-CLINICA EXTERNA",
        "salon": "510-104",
        "edificio": "510 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "28/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017054": {
  "cod": "2017054",
  "codigoSIA": "2017054",
  "nombre": "Clínica de grandes animales",
  "creditos": 8,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017054)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Olimpo Juan Oliver Espinosa",
       "Erika Paola Gonzalez Niño",
       "Maria Alejandra Torres Medina"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "06:00",
        "fin": "09:00",
        "lugar": "CLINICA DE GRANDES ANIMALES",
        "salon": "506-6",
        "edificio": "506 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 7,
        "diaTexto": "DOMINGO",
        "inicio": "06:00",
        "fin": "09:00",
        "lugar": "CLINICA DE GRANDES ANIMALES",
        "salon": "506-6",
        "edificio": "506 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017055": {
  "cod": "2017055",
  "codigoSIA": "2017055",
  "nombre": "Clínica de la reproducción",
  "creditos": 8,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "Rotación por la Clínica de Reproducción, que le permite al estudiante familiarizarse con la casuística, atender a los pacientes y poner en práctica los conocimientos adquiridos durante la carrera.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017055)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Karen Johanna Reina Rueda",
       "Harvey Lozano Marquez",
       "Jorge Luis Zambrano Varon",
       "Silvia Andrea Ruiz Cristancho"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "LABORATORIO DE REPRODUCCION (3)",
        "salon": "502-101",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "LABORATORIO DE REPRODUCCION (3)",
        "salon": "502-101",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "LABORATORIO DE REPRODUCCION (3)",
        "salon": "502-101",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "LABORATORIO DE REPRODUCCION (3)",
        "salon": "502-101",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "LABORATORIO DE REPRODUCCION (3)",
        "salon": "502-101",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALA DE PRACTICA DE CIRUGIA DE PEQUEÑOS ANIMALES",
        "salon": "501-101",
        "edificio": "501 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 7,
        "diaTexto": "DOMINGO",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "LABORATORIO DE REPRODUCCION (3)",
        "salon": "502-101",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017056": {
  "cod": "2017056",
  "codigoSIA": "2017056",
  "nombre": "Clínica de pequeños animales",
  "creditos": 8,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017056)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Vladimir Galindo Zamora",
       "Piero Ardani Vargas Pinto",
       "Miguel Esteban Romero Rodriguez",
       "Henry Omar Meneses Martinez",
       "Jose Manuel Lasso Delgado"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 52,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALA DE PRACTICA DE CIRUGIA DE PEQUEÑOS ANIMALES",
        "salon": "501-101",
        "edificio": "501 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "13:00",
        "lugar": "SALA DE PRACTICA DE CIRUGIA DE PEQUEÑOS ANIMALES",
        "salon": "501-101",
        "edificio": "501 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "13:00",
        "lugar": "SALA DE PRACTICA DE CIRUGIA DE PEQUEÑOS ANIMALES",
        "salon": "501-101",
        "edificio": "501 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "13:00",
        "lugar": "SALA DE PRACTICA DE CIRUGIA DE PEQUEÑOS ANIMALES",
        "salon": "501-101",
        "edificio": "501 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "13:00",
        "lugar": "SALA DE CIRUGIA DE GRANDES ANIMALES",
        "salon": "501-107",
        "edificio": "501 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "09:00",
        "fin": "13:00",
        "lugar": "SALA DE PRACTICA DE CIRUGIA DE PEQUEÑOS ANIMALES",
        "salon": "501-101",
        "edificio": "501 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017058": {
  "cod": "2017058",
  "codigoSIA": "2017058",
  "nombre": "Epidemiología",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "OBJETIVOS\n\nPROMOVER UN CAMBIO DE ACTITUD EN LO QUE TIENE QUE VER CON LA SOLUCIÓN DE LIMITANTES DE LA SALUD CON CRITERIOS COLECTIVOS, ENFOCADO TANTO A LAS MAYORÍAS SANAS COMO A LAS MINORÍAS ENFERMAS.\n\nRECONOCER Y SABER APLICAR LOS MÉTODOS Y TÉCNICAS DE LA MEDICINA PREVENTIVA AL CONOCIMIENTO DE LA SITUACIÓN DE SALUD Y ENFERMEDAD EN LAS POBLACIONES ANIMALES.\n\nFAMILIARIZAR AL ESTUDIANTE CON LOS MÉTODOS Y LAS TÉCNICAS DE CAPTURA, ANÁLISIS Y DIFUSIÓN DE INFORMACIÓN EN LOS QUE A MEDICINA PREVENTIVA Y EPIDEMIOLOGÍA SE REFIERE.\n\nMETODOLOGIA\n\nEL CURSO SE REALIZA MEDIANTE CONFERENCIAS MAGISTRALES, CONFERENCISTAS INVITADOS, EJERCICIOS PARA DESARROLLAR FUERA DEL AULA Y PRESENTACIÓN DE INFORMES, ASÍ COMO TRABAJOS ESPECIALES.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017058)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Luis Joaquin Polo Teran",
       "Myriam Acero Aguilar",
       "Nestor Yaya Lancheros"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "SALON DE CLASE-CLINICA EXTERNA",
        "salon": "510-104",
        "edificio": "510 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017059": {
  "cod": "2017059",
  "codigoSIA": "2017059",
  "nombre": "Extensión y desarrollo rural",
  "creditos": 1,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "EL SECTOR RURAL EN UN PAÍS COMO COLOMBIA CONSTITUYE UNO DE LOS PILARES PARA SU DESARROLLO, POR ESTA RAZÓN RESULTA DE GRAN IMPORTANCIA EL ANÁLISIS DE LA PROBLEMÁTICA QUE LO AFECTA. ESTE CURSO SE DIVIDE EN TRES GRANDES ÉNFASIS TEMÁTICOS. PRIMERO, EL DEBATE SOBRE LOS ASPECTOS RELACIONADOS CON LA IDEA DEL DESARROLLO Y LAS PERSPECTIVAS DEL MISMO; SEGUNDO, EL DEBATE SOBRE LA ORIENTACIÓN DEL DESARROLLO RURAL Y SUS PRINCIPALES POLÍTICAS; Y TERCERO, LA ELABORACIÓN DE UN PROYECTO PRODUCTIVO POR PARTE DE LOS ESTUDIANTES. AUNQUE LA DISCUSIÓN SOBRE ESTOS TEMAS ES MUY COMPLEJA, CON ESTE CURSO SE PRETENDE BRINDAR A LOS ESTUDIANTES ELEMENTOS PARA ASUMIR UNA POSICIÓN CRÍTICA FRENTE A ELLOS, CON EL FIN DE PROPICIAR EL DEBATE AL INTERIOR DEL GRUPO SOBRE LA ORIENTACIÓN DEL DESARROLLO RURAL EN LOS AÑOS VENIDEROS.OBJETIVO GENERAL\n\nOFRECER AL ESTUDIANTE LOS ELEMENTOS NECESARIOS PARA EL DEBATE SOBRE LOS TEMAS RELACIONADOS CON EL DESARROLLO RURAL EN COLOMBIA.\n\nOBJETIVOS ESPECIFICOS\n\n1. OFRECER AL ESTUDIANTE LOS ELEMENTOS HISTÓRICOS NECESARIOS SOBRE LA EVOLUCIÓN DE LAS TEORÍAS DEL DESARROLLO Y EN PARTICULAR DEL DESARROLLO RURAL EN NUESTRO PAÍS, PARA QUE BASADOS EN ELLOS, SE CREE UNA POSICIÓN PROPIA SOBRE ESTE TEMA EN PARTICULAR.\n2. FOMENTAR LA DISCUSIÓN ARGUMENTADA SOBRE LAS TEMÁTICAS TRATADAS, RESPETANDO LAS POSICIONES CONTRARIAS COMO PARTE DE UN EJERCICIO DE TOLERANCIA NECESARIO EN UNA SOCIEDAD QUE VIVE EN MEDIO DE UN CONTINUO CONFLICTO.\n3. ACOMPAÑAR AL ESTUDIANTE EN EL PROCESO DE ELABORACIÓN DE UN PROYECTO DE DESARROLLO, EL CUAL SEA REALIZABLE EN EL CORTO PLAZO.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017059)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Rodrigo Chaves Ladino"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017060": {
  "cod": "2017060",
  "codigoSIA": "2017060",
  "nombre": "Farmacología",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "OBJETIVOS\n\n&#61607; Adquirir conocimientos sobre los principios farmacodinámicos y farmacocinéticos\n&#61607; Que rigen la administración de los principales medicamentos veterinarios con el fin de producir los efectos clínicos deseados en los animales.\n\n&#61607; Relacionar los conocimientos farmacológicos teóricos con su administración Práctica a través de los casos clínicos que se tratan en las diferentes unidades clínicas de la Facultad y con las prácticas programadas en el desarrollo de la asignatura.\n\n&#61607; Conocer los preparados comerciales representativos del mercado colombiano en cuanto a: presentación, administración y dosificación a través de ejercicios de prescripción.\n\nNaturaleza: teórico-práctica\n\n\nMETODOLOGIA\n\nEl contenido se enseña a través de diferentes métodos de enseñanza : se utiliza la cátedra magistral, la aplicación de fármacos en animales domésticos (bovinos, equinos y pequeños animales), la presentación de casos clínicos por parte de los estudiantes para la correlación de los conocimientos teóricos y su aplicación práctica, elaboración de prescripciones sobre casos hipotéticos y la lectura de artículos seleccionados por parte del profesor.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2017060 (2017060)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "F",
      "profesores": [
       "Camilo Alberto Orozco Sanabria"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 100,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "LABORATORIO F.M.V.Z.",
        "salon": "500-120",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "LABORATORIO F.M.V.Z.",
        "salon": "500-120",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "LABORATORIO F.M.V.Z.",
        "salon": "500-120",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "LAYDY KATERINE SERRANO MUJICA"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "B/106/107",
        "salon": "S1-1070/1080",
        "edificio": "S1 CIRO MOLINA GARCÉS BLOQUE A",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017061": {
  "cod": "2017061",
  "codigoSIA": "2017061",
  "nombre": "Fisiología",
  "creditos": 5,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "OBJETIVOS:\n\n1. Preparar al estudiante para la comprensión de los principales eventos fisiológicos en las diferentes especies animales.\n2. Dar elementos para el abordaje de situaciones fisiopatológicas de interés en la práctica clínica.\n3. Dar a conocer las bases fisiológicas de los diferentes sistemas y sus potenciales aplicaciones en la producción animal.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017061)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Karen Johanna Reina Rueda",
       "Harvey Lozano Marquez",
       "Francisco Andres Olea Salgado",
       "Manuel Joaquin Rojas Barreto"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 59,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "LABORATORIO F.M.V.Z.",
        "salon": "500-120",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "LABORATORIO F.M.V.Z.",
        "salon": "500-120",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "David Alexander Martinez Rodriguez"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 2",
      "codigoGrupo": "PAL-02",
      "profesores": [
       "Lina Maria Trujillo Rojas",
       "Cesar Augusto Camacho Rozo"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017062": {
  "cod": "2017062",
  "codigoSIA": "2017062",
  "nombre": "Genética",
  "creditos": 3,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "LOS ESTUDIANTES DEBEN CONOCER LAS BASES QUÍMICAS Y FÍSICAS DE LA HERENCIA MEDIANTE LOS CUALES SE TRANSMITEN LAS CARACTERÍSTICAS DE PADRES A HIJOS, EMPLEANDO EN LO POSIBLE EJEMPLOS EN ANIMALES DOMÉSTICOS Y ENFATIZANDO EN LA PARTE QUE TENGA MAYOR APLICACIÓN EN MEDICINA VETERINARIA. LOS ESTUDIANTES ESTARÁN EN CAPACIDAD DE REALIZAR ANÁLISIS DE PEDIGRÍES PARA INFERIR LOS MECANISMOS DE CONTROL GENÉTICO DE LOS FENOTIPOS EN ESTUDIO, ADEMÁS CONOCERÁN LAS PRINCIPALES HERRAMIENTAS BIOTECNOLÓGICAS EMPLEADAS EN LA CITOGENÉTICA Y LA GENÉTICA MOLECULAR.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017062)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Carlos Alberto Martinez Niño",
       "Manuel Fernando Ariza Botero",
       "Luisa Fernanda Triana Arevalo"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 61,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 6",
        "salon": "561B-26",
        "edificio": "561B - José Velásquez Quinceno",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 6",
        "salon": "561B-26",
        "edificio": "561B - José Velásquez Quinceno",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-PALMIRA GRUPO 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Darwin Yovanny Hernández Herrera"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "13:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017063": {
  "cod": "2017063",
  "codigoSIA": "2017063",
  "nombre": "Histología y embriología",
  "creditos": 4,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "El conocimiento de la estructura de los animales domésticos es fundamental para la comprensión de la fisiología y una base imprescindible para conocer as alteraciones morfológicas que pueden verse con el microscopio óptico.\n\nLa histología, en el sentido estricto, es el estudio de los tejidos básicos constituyentes ellos, en asociación armónica, de los órganos, que a su vez forman también de una histología de los órganos que incluye su morfología como se observa en los cortes teñidos bajo el microscopio de luz o electrónico de transmisión.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017063)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Natalia Andrea Medina Torres",
       "Fabian Enrique Castañeda Herrera",
       "JUAN SEBASTIÁN SUESCÚN BOLÍVAR"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "LABORATORIO DE HISTOLOGIA Y PATOLOGIA",
        "salon": "502-104",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "LABORATORIO DE HISTOLOGIA Y PATOLOGIA",
        "salon": "502-104",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Ana Alicia Acosta Jurado"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 38,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 2",
      "codigoGrupo": "PAL-02",
      "profesores": [
       "Ana Alicia Acosta Jurado"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "17:00",
        "lugar": "S5-1160",
        "salon": "S5-1160",
        "edificio": "S5 SALONES DE CLASE",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "S5-1160",
        "salon": "S5-1160",
        "edificio": "S5 SALONES DE CLASE",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017064": {
  "cod": "2017064",
  "codigoSIA": "2017064",
  "nombre": "Imagenología",
  "creditos": 1,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "Objetivo General: Orientar al estudiante de Medicina Veterinaria para que adquiera los conocimientos necesarios que le permitan realizar, interpretar y evaluar imágenes medicas diagnosticas.\nObjetivos Específicos: Comprender los aspectos físicos, funcionamiento y propiedades básicas de los equipos utilizados en la obtención de imágenes diagnósticas.\nFamiliarizarse con los riesgos y efectos adversos para la salud de los procesos que dan como resultado la obtención de una imagen diagnóstica, de manera que el estudiante implemente las medidas de protección necesarias para la minimización de dichos efectos.\nObtener y adquirir un método organizado, estructurado y sistemático que permita interpretar y evaluar imágenes diagnósticas obtenidas a través de las principales tecnologías disponibles en medicina veterinaria como radiología, ultrasonido, endoscopia, resonancia magnética y tomografía axial computarizada.\nMetodología: El cumplimiento de los objetivos se realizará a partir de clases magistrales sobre los temas específicos del programa, talleres prácticos que familiaricen al estudiante con las imágenes y trabajos teórico prácticos orientados a la integración de los conocimientos básicos con la práctica clínica veterinaria.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017064)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Henry Omar Meneses Martinez",
       "Gabriela Moreno Arroyave",
       "Attalea Pardo Ahumada"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "Salón de clase 5",
        "salon": "481-112",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Lina Maria Trujillo Rojas"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "S5-1180",
        "salon": "S5-1180",
        "edificio": "S5 SALONES DE CLASE",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 2",
      "codigoGrupo": "PAL-02",
      "profesores": [
       "Lina Maria Trujillo Rojas"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "S5-1180",
        "salon": "S5-1180",
        "edificio": "S5 SALONES DE CLASE",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017065": {
  "cod": "2017065",
  "codigoSIA": "2017065",
  "nombre": "Inmunología",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "La asignatura está diseñada para estudiantes de pregrado que cursan la carrera de Medicina\nVeterinaria, por tanto pretende suministrar los conceptos fundamentales de la inmunidad en los\nanimales con énfasis en especies domésticas y en forma comparada con el sistema inmune humano.\nEl curso es teórico práctico, contempla aspectos anatómicos, estrategias de defensa en las barreras\nfísicas, inmunidad innata e inmunidad específica. La función de homeostasis, los mecanismos\nhumorales así como las poblaciones celulares de respuesta inmune y las estrategias desarrolladas por\nel sistema para detectar, destruir y recordar, sustancias extrañas o propias que se encuentran\nalteradas. En cuanto a regulación de la respuesta se incluyen aspectos generales, como mecanismos\nde comunicación intercelular, las principales vías de regulación humoral y celular, importancia\nhormonal y tolerancia. Como aspectos aplicados del curso se dan a conocer las bases de la inmunidad\nmaterna, preñez, lactancia e inmunidad del neonato. Vacunas. Valoración de la respuesta inmune in\nVitro. Mecanismos de daño inmunológico y pruebas cutáneas con aplicación en diagnóstico.\nEl componente práctico contempla Células inmunes, pruebas serológicas de uso en diagnostico,\naglutinación, inmunodifusión, titilación sérica de anticuerpos, anticuerpos conjugados, fagocitosis,\nseparación de linfocitos sanguíneos y Valoración de inmunidad materna en terneros.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRÁCTICA (2017065)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "JOSE LUIS RODRIGUEZ BAUTISTA"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 65,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 1",
      "codigoGrupo": "PAL01",
      "profesores": [
       "Santiago Monsalve Buritica"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017066": {
  "cod": "2017066",
  "codigoSIA": "2017066",
  "nombre": "Introducción a las ciencias veterinarias",
  "creditos": 2,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "El componente práctico de manejo animal, pretende acercar al estudiante a conceptos y habilidades necesarias y obligatorias en el quehacer del Medico Veterinario.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017066)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jorge Aristobulo Cotrino Gonzalez"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 14,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 6",
        "salon": "561B-26",
        "edificio": "561B - José Velásquez Quinceno",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 6",
        "salon": "561B-26",
        "edificio": "561B - José Velásquez Quinceno",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "GRUPO 1 PAET VETERINARIA",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Juan Carlos Garcia Yela"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 4,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [
       "Jesus Alfredo Berdugo Gutierrez"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 7",
        "salon": "AULA 7",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017067": {
  "cod": "2017067",
  "codigoSIA": "2017067",
  "nombre": "Mecanismos de enfermedad",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "En esta cátedra el estudiante profundiza, comprende y actualiza los principios fisiopatológicos, es decir los\neventos y mecanismos inherentes al fenómeno de la enfermedad en sus distintas formas. El estudiante\nfundamenta una filosofía sólida del concepto de enfermedad para implementarla en sus asignaturas\nposteriores, estudios de posgrado y la vida profesional; es decir construir la estructura metódica correcta para\nformular diagnósticos diferenciales y definitivos correlacionando cada lesión, mecanismo de lesión y los\nposibles agentes inductores de la misma.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017067)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "LUIS MAURICIO MONTOYA FLÓREZ",
       "Benjamin Doncel Diaz",
       "JUAN SEBASTIÁN SUESCÚN BOLÍVAR",
       "Jeyson Alejandro Simbaqueva Peña"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 65,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "LABORATORIO DE HISTOLOGIA Y PATOLOGIA",
        "salon": "502-104",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "08:00",
        "fin": "12:00",
        "lugar": "LABORATORIO DE HISTOLOGIA Y PATOLOGIA",
        "salon": "502-104",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Grupo 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Sandra Yulieth Marin Gómez"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "13:00",
        "fin": "16:00",
        "lugar": "B/106/107",
        "salon": "S1-1070/1080",
        "edificio": "S1 CIRO MOLINA GARCÉS BLOQUE A",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "B/106/107",
        "salon": "S1-1070/1080",
        "edificio": "S1 CIRO MOLINA GARCÉS BLOQUE A",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017068": {
  "cod": "2017068",
  "codigoSIA": "2017068",
  "nombre": "Salud de hato",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "La asignatura está diseñada para estudiantes de pregrado que cursan la carrera de Medicina Veterinaria, por tanto pretende introducir al estudiante a las metodologías asociadas al entendimiento, desarrollo e implementación del concepto del problema orientado (diagnostico basado en la evidencia) aplicado a la medicina de poblaciones. El curso busca enfatizar en el uso herramientas de tipo epidemiológico para evaluar el impacto, la evolución y el curso de las enfermedades y otras problemáticas de salud en grupos de animales de producción. Se discutirá el uso de técnicas cualitativas y cuantitativas para facilitar el análisis de la información obtenida de los hatos o grupos de animales de producción y su correcta interpretación, con el fin de orientar el diagnostico poblacional de una manera mas adecuada y eficiente. Se busca discutir elementos suficientes y técnicas para de la investigación de enfermedades, que afectan de la productividad y del bienestar en poblaciones de animales y establecer los factores de riesgo de las mismas con miras el establecimiento de medidas de control y prevención adecuadas.\nMetodología: El curso es de carácter teórico práctico y se desarrollará mediante charlas magistrales, apoyadas con ayudas audiovisuales, prácticas de manejo de datos y programas de computador, lecturas de artículos científicos, y presentación y discusión de casos clínicos.\nObjetivo:Se espera que el estudiante este en capacidad de diseñar e implementar metodologías de aproximación diagnostica poblacional con miras a elaborar planes de intervención tanto de tipo diagnóstico como terapéutico para la solución, monitoreo y evaluación de problemáticas que afectan la productividad de los diferentes sistemas de producción. Con el fin ultimo de implementar métodos de control prevención adecuados.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017068)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Karen Johanna Reina Rueda",
       "Sandra Milena Lamprea Maldonado",
       "Jorge Luis Zambrano Varon",
       "Gloria Amparo Casas Bedoya"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "15:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "15:00",
        "fin": "16:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017069": {
  "cod": "2017069",
  "codigoSIA": "2017069",
  "nombre": "Medicina interna de equinos",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "Objetivos del Curso:\n Estudiar las diferentes entidades clínicas que afectan mas comúnmente a los equinos\n El estudio de las entidades se hará desde la perspectiva de la medicina interna y un componente adecuado de la epidemiologia. Los aspectos quirúrgicos serán contemplados en las entidades que lo demanden.\n Desarrollará en los estudiantes los conocimientos y habilidades médicas que permitan un adecuado enfoque y solución de problemas tanto individuales como poblacionales\n Desarrollar habilidades en el quehacer y en el pensar Clínico\n Integrar las ciencias básicas, al pensar clínico con el objeto de diagnosticar, evolucionar, manejar, resolver, prevenir y controlar las diferentes entidades clínicas\n Contribuir en el estudiante a que se desarrolle un componente importante en el proceso de la adquisición de conocimiento de manera autónoma.\n Contribuir al proceso ético en el ejercicio de la Medicina Veterinaria en su quehacer clínico",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017069)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Olimpo Juan Oliver Espinosa",
       "Maria Alejandra Torres Medina",
       "Erika Paola Gonzalez Niño"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 52,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "Salón de clase 5",
        "salon": "481-112",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "Salón de clase 5",
        "salon": "481-112",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017070": {
  "cod": "2017070",
  "codigoSIA": "2017070",
  "nombre": "Medicina interna de pequeños",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "OBJETIVOS\n\n&#61559; Estudiar las diferentes entidades clínicas que afectan más comunmente a los animales de compañía.\n\n&#61559; Este estudio será desde la perspectiva de la Medicina Interna pero complementado con un enfoque epidemiológico.\n\n&#61559; Desarrollar en los estudiantes capacidades para resolver problemas médicos individuales y poblacionales.\n\n&#61559; Desarrollar en los estudiantes las habilidades del pensar clínico.\n\n&#61559; Que este curso sirva de integrador de las ciencias básicas al pensar clínico para así poder diagnosticar, evolucionar, manejar, resolver, prevenir y controlar las diferentes entidades clínicas.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017070)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jose Manuel Lasso Delgado",
       "Piero Ardani Vargas Pinto"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO DE LA FACULTAD",
        "salon": "502-7",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 4",
        "salon": "481-111",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017071": {
  "cod": "2017071",
  "codigoSIA": "2017071",
  "nombre": "Medicina interna de porcinos",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "La cátedra se desarrollará por medio de presentaciones magistrales, revisión y análisis de\nartículos técnico-científicos en cada tema.\nSe realizarán talleres en clase para discusiones analíticas de casos de campo integrando\naspectos de producción, clínicos, patológicos, epidemiológicos, diagnósticos diferenciales,\nherramientas para el diagnóstico, medidas de control, prevención y/eliminación.\nSe contará con la participación conferencistas invitados sobre temas particulares\nrelacionados con el programa de la asignatura.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017071)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Maria Antonia Rincon Monroy"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "Salón de clase 5",
        "salon": "481-112",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 4",
        "salon": "481-111",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017072": {
  "cod": "2017072",
  "codigoSIA": "2017072",
  "nombre": "Medicina interna de rumiantes",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "Objetivos del Curso:\n\n Estudiar las diferentes entidades clínicas que afectan más comúnmente a los rumiantes (Bovinos, Ovinos y caprinos)\n El estudio de las entidades se hará desde la perspectiva de la medicina interna y un componente adecuado de la epidemiologia. Los aspectos quirúrgicos serán contemplados en las entidades que lo demanden.\n Complementar los aspectos de la enfermedad y la sanidad en el contexto de medicina de la producción\n Desarrollará en los estudiantes los conocimientos y habilidades médicas que permitan un adecuado enfoque y solución de problemas tanto individuales como poblacionales\n Desarrollar habilidades en el quehacer y en el pensar Clínico\n Integrar las ciencias básicas, al pensar clínico con el objeto de diagnosticar, evolucionar, manejar, resolver, prevenir y controlar las diferentes entidades clínicas\n Contribuir en el estudiante a que se desarrolle un componente importante en el proceso de la adquisición de conocimiento de manera autónoma.\n Contribuir al proceso ético en el ejercicio de la Medicina Veterinaria en su quehacer clínico",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017072)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Olimpo Juan Oliver Espinosa",
       "Maria Alejandra Torres Medina",
       "Erika Paola Gonzalez Niño"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO DE LA FACULTAD",
        "salon": "502-7",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017073": {
  "cod": "2017073",
  "codigoSIA": "2017073",
  "nombre": "Medicina interna de silvestres",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "La medicina de silvestres es un campo de reciente desarrollo a nivel nacional y mundial, que ha venido incorporándose al acontecer veterinario con creciente importancia. Colombia es uno de los países con mayor riqueza de especies faunísticas, por lo tanto se hace necesario generar conocimientos sobre la fauna nativa, con miras a su mejor aprovechamiento y conservación. Por esta razón, la Facultad de Medicina Veterinaria y Zootecnia de la Universidad Nacional, afronta el reto de asumir su participación en este\ncampo.\n\nEl objetivo de la asignatura es capacitar los alumnos de la carrera de Medicina Veterinaria en aspectos de manejo y\nmedicina de especies silvestres colombianas mantenidas en cautiverio, y de especies\nexóticas consideradas mascotas de tenencia legal o de presentación frecuente en\ncolecciones zoológicas.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017073)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Sandra Milena Lamprea Maldonado",
       "Claudia Isabel Brieva Rico"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 4",
        "salon": "481-111",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 4",
        "salon": "481-111",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017074": {
  "cod": "2017074",
  "codigoSIA": "2017074",
  "nombre": "Medicina aviar",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "Con el compromiso de nutrir a la humanidad la industria avícola exige altos estándares de producción, lo que facilita la presentación de enfermedades en los sistemas de explotación afectando la sanidad animal y la calidad de huevos y carne. Esta situación exige de profesionales de alto nivel en el área. Al finalizar la cátedra los estudiantes adquirirán las competencias necesarias para identificar y diagnosticar las diferentes patologías y trastornos metabólicos que afectan a las aves, desarrollando un pensamiento crítico que lleve a la correcta toma de decisiones en la solución de problemas sanitarios y productivos en diferentes tipos de aves de corral.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017074)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Diana Marcela Alvarez Mira",
       "Arlen Patricia Gomez Ramirez"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 2",
        "salon": "561C-152",
        "edificio": "561C - BIOTERIO Y ESTABLOS DE PRODUCCION",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "Salón de clase 5",
        "salon": "481-112",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE-CLINICA EXTERNA",
        "salon": "510-104",
        "edificio": "510 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017076": {
  "cod": "2017076",
  "codigoSIA": "2017076",
  "nombre": "Nutrición",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "OBJETIVOS\n\nDespués de completar el curso el estudiante debe ser capaz de:\n\nListar y describir los principales nutrientes presentes en los recursos alimenticios usados en alimentación animal en el trópico bajo, medio y alto de Colombia.\nExplicar los procesos de digestión, absorción y utilización de los diferentes recursos alimenticios disponibles para la alimentación de aves, cerdos y bovinos.\nEsquematizar las diferentes estrategias de análisis nutricionales, químicos y microbiológicos de los recursos alimenticios y definir los procedimientos de almacenamiento y conservación.\nExplicar la importancia de las proteínas, lípidos y carbohidratos en los sistemas de alimentación.\nDiscutir los requerimientos para crecimiento, mantenimiento y producción (leche, carne, huevos y reproducción)\nBalancear diferentes tipos de dietas completas, suplementos, premezclas y núcleos en las fases productivas de aves, cerdos y bovinos (estudio de caso).\nDescribir los principales sistemas de alimentación para la producción moderna de leche, carne y huevos en condiciones tropicales (estudio de caso).",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2017076 (2017076)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Laura Bibiana Gualdron Duarte"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 57,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 6",
        "salon": "561B-26",
        "edificio": "561B - José Velásquez Quinceno",
        "desde": "28/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "SALON DE CLASE 1",
        "salon": "561C-151",
        "edificio": "561C - BIOTERIO Y ESTABLOS DE PRODUCCION",
        "desde": "28/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-PALMIRA GRUPO 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Raúl Andrés Molina Benavides"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "13:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017077": {
  "cod": "2017077",
  "codigoSIA": "2017077",
  "nombre": "Parasitología",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "1.Reconocer los principales parásitos que afectan animales domésticos, reportados en Colombia.\n2.Descripción de localización, ciclos de vida y epidemiología de las principales especies de parásitos.\n3.Reconocer los signos clínicos de las principales enfermedades parasitarias en especies domésticas.\n4.Conocer las principales técnicas de diagnóstico en Parasitología Veterinaria.\n5.Establecer los lineamientos generales sobre esquemas terapéuticos de prevención y control en la solución de problemas parasitarios.\n6.Estructurar un concepto general del problema parasitario en contextos clínicos y/o productivos.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017077)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jesus Alfredo Cortes Vecino"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 77,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "08:00",
        "fin": "10:00",
        "lugar": "Salón de clase 5",
        "salon": "481-112",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 4",
        "salon": "481-111",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-PALMIRA GRUPO 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Javier Antonio Benavides Montaño"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 61,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017078": {
  "cod": "2017078",
  "codigoSIA": "2017078",
  "nombre": "Patología clínica",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "LA ASIGNATURA PRETENDE INTEGRAR LOS CONOCIMIENTOS DE ÁREAS BÁSICAS COMO: ANATOMÍA, FISIOLOGÍA, PATOLOGÍA, SEMIOLOGÍA ENTRE OTRAS, A UN MARCO TEÓRICO DE PATOLOGÍA CLÍNICA, CON EL OBJETO DE INTERPRETAR RESULTADOS DE LABORATORIO A LA LUZ DE UN CUADRO CLÍNICO DEFINIDO SIGUIENDO EL MODELO DE PROBLEMA ORIENTADO.\n\nLA ASIGNATURA DE PATOLOGÍA CLÍNICA, PRETENDE DE MANERA PRIORITARIA DESARROLLAR EN LOS ESTUDIANTES DINÁMICAS DE ESTUDIO BASADAS EN LA CORRELACIÓN DE RESULTADOS DE LABORATORIO Y CASOS CLÍNICOS REALES. POR TAL MOTIVO NO FAVORECE LOS PROCESOS MEMORISTICOS, SINO LOS ANALÍTICOS.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017078)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "MARIA DEL PILAR USECHE CASTRO",
       "Carlos Alfonso Moreno Torres"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 54,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "SALON DE CLASE-CLINICA EXTERNA",
        "salon": "510-104",
        "edificio": "510 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "LABORATORIO DE HISTOLOGIA Y PATOLOGIA",
        "salon": "502-104",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017079": {
  "cod": "2017079",
  "codigoSIA": "2017079",
  "nombre": "Patología sistémica",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "OBJETIVOS\nSE BUSCA QUE DURANTE EL CURSO EL ESTUDIANTE:\n&sect; APRENDA LAS TÉCNICAS DE NECROPSIA, FORMA Y ENVÍO SE MUESTRAS PARA LOS DIFERENTES LABORATORIOS DE DIAGNÓSTICO ( HISTOPATOLOGÍA, TOXICOLOGÍA, MICROBIOLOGÍA Y PARASITOLOGÍA).\n&sect; ADQUIERA LA HABILIDAD PARA DESCRIBIR LAS ALTERACIONES ANATOMOPATOLÓGICAS OBSERVADAS Y PUEDA LLENAR LOS FORMATOS DE NECROPSIA RESPECTIVOS.\n&sect; DESPERTAR LA HABILIDAD DEL ESTUDIANTE PARA CORRELACIONAR LAS ALTERACIONES MACRO Y MICROSCÓPICAS Y ASÍ CONSEGUIR DIAGNÓSTICOS DIFERENCIALES DE LA CASUÍSTICA. ESTIMULAR LA CAPACIDAD INVESTIGATIVA Y CREATIVA PARA ORGANIZAR DIAGNÓSTICOS DEFINITIVOS DE LA CASUÍSTICA.\n\nSE HACE ESPECIAL ÉNFASIS PARA QUE SE REFLEXIONE EN CADA UNA DE LAS ENFERMEDADES DISCUTIDAS EN:\n IMPACTO ECONÓMICO EN LOS SISTEMAS DE PRODUCCIÓN.\n RELIEVANCIA DE LAS ENFERMEDADES EN LOS MERCADOS NACIONALES E INTERNACIONALES.\n FUNCIÓN DEL MÉDICO VETERINARIO COMO PARTE DE LA SOCIEDAD CIENTÍFICA, TECNOLÓGICA, ECONÓMICA Y ÉTICA DEL PAÍS.\n ENFERMEDADES ZOONÓTICAS Y LA IMPORTANCIA DEL MÉDICO VETERINARIO COMO ACTOR PROTAGONISTA EN LA VIGILANCIA, PREVENCIÓN, CONTROL Y EDUCACIÓN EN ESTAS ENFERMEDADES.\n SE INSISTE EN LA OBLIGACIÓN PROFESIONAL DE ENTENDER Y PRACTICAR LA OBLIGATORIEDAD DE DECLARAR AQUELLAS ENFERMEDADES QUE ASÍ EXIGEN LAS AUTORIDADES SANITARIAS DEL PAÍS.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017079)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Diana Rocio Murcia Rodriguez",
       "LUIS MAURICIO MONTOYA FLÓREZ"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "LABORATORIO DE HISTOLOGIA Y PATOLOGIA",
        "salon": "502-104",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "LABORATORIO DE HISTOLOGIA Y PATOLOGIA",
        "salon": "502-104",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "LABORATORIO DE HISTOLOGIA Y PATOLOGIA",
        "salon": "502-104",
        "edificio": "502 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017080": {
  "cod": "2017080",
  "codigoSIA": "2017080",
  "nombre": "Planeación y evaluación de empresas agropecuarias",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "Este curso pretende brindar a los estudiantes los elementos necesarios para realizar el proceso de formulación y evaluación de una empresa agropecuaria o de servicios veterinarios, de forma sencilla y clara, de manera que el futuro profesional pueda aplicar estos conceptos en el desarrollo de un proyecto real propio, o en beneficio de un tercero. En el desarrollo del curso se analizará, en primer término, el concepto de administración, su importancia y funciones. Al estudiante se le dará una introducción acerca del sector en que desarrollará su vida profesional. Se estudiarán los fundamentos de mercadeo, los aspectos relacionados con la creación de sus estrategias; y cómo crear una empresa que pueda resultar viable y exitosa. En ese sentido se le dará información básica relacionada con el proceso para la constitución de una empresa así como las exigencias de orden legal que de ellos se deriva. En segundo término, se observarán las herramientas relacionadas con los procesos de planificación y evaluación, de manera que se permita desarrollar procesos con competitividad y rentabilidad de acuerdo a los productos, bienes o servicios que se ofrezcan.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017080)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "JAIME FABIAN CRUZ URIBE"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "19:00",
        "lugar": "SALON DE CLASE 4",
        "salon": "481-111",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017084": {
  "cod": "2017084",
  "codigoSIA": "2017084",
  "nombre": "Teriogenología I",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "OBJETIVOS\n\n1. Dar a conocer al estudiante los principios generales de la reproducción animal, profundizando en el estudio de los eventos reproductivos tanto de hembras como de machos, teniendo en cuenta la fisiopatología de los eventos, el diagnóstico y la terapéutica dentro del marco de la práctica de la Ginecología, la Obstetricia y la Andrología.(Teriogenología)\n2. Capacitar al estudiante para el diseño y ejecución de programas sobre inseminación artificial y el manejo reproductivo de un hato.\n3. Dar a conocer el sistema de registros con el fin de determinar parámetros reproductivos que permitan evaluar y mejorarlos a la vez que se realiza un diagnóstico de población.\n4. Capacitar al estudiante en los diferentes métodos de diagnóstico del estado reproductivo de la hembra y el macho bovino\n5. Dar a conocer al estudiante las técnicas especiales relacionadas con el manejo de semen, embriones y fertilización in vitro. En bovinos\n6. Dar a conocer aspectos del manejo reproductivo en bovinos, y búfalos",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017084)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jorge Luis Zambrano Varon",
       "Harvey Lozano Marquez"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 52,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017085": {
  "cod": "2017085",
  "codigoSIA": "2017085",
  "nombre": "Teriogenología II",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017085)",
    "grupos": [
     {
      "grupo": "2016085",
      "codigoGrupo": "1",
      "profesores": [
       "Harvey Lozano Marquez",
       "Jorge Luis Zambrano Varon"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "Salón de clase 5",
        "salon": "481-112",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017086": {
  "cod": "2017086",
  "codigoSIA": "2017086",
  "nombre": "Rotación por laboratorios",
  "creditos": 8,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017086)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Valeria Rojas Yacaman",
       "Jorge Luis Zambrano Varon",
       "Gonzalo Jair Diaz Gonzalez",
       "Jesus Alfredo Cortes Vecino",
       "Martha Cecilia Suarez Alfonso",
       "Henry Omar Meneses Martinez",
       "Harvey Lozano Marquez",
       "HUGO ANDRES GUTIERREZ TRUJILLO",
       "Attalea Pardo Ahumada",
       "Carlos Alfonso Moreno Torres"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "17:00",
        "fin": "18:00",
        "lugar": "SALA DE CIRUGIA DE GRANDES ANIMALES",
        "salon": "501-107",
        "edificio": "501 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "17:00",
        "fin": "18:00",
        "lugar": "SALA DE CIRUGIA DE GRANDES ANIMALES",
        "salon": "501-107",
        "edificio": "501 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017087": {
  "cod": "2017087",
  "codigoSIA": "2017087",
  "nombre": "Salud pública",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "OBJETIVOS: Se espera que al terminar el módulo el estudiante esté en capacidad de:\n\n1. Analizar de manera crítica la relación medio ambiente, desarrollo económico y salud\n2. Participar en el proceso de vigilancia epidemiológica de enfermedades zoonóticas\n3. Reconocer el papel del médico veterinario en salud pública\n4. Identificar la cadena epidemiológica, diagnóstico, factores deriesgo, prevención y control de las principales zoonosis emergentes y reemergentes\n5.Identificar la cadena epidemiológica, diagnóstico, factores deriesgo, prevención y control de las principales enfermedades transmitidas por vectores\n6. Reconocer las diferencias entre estudios cuantitativos y cualitativos, conocer la metodología de algunos estudios cualitativos y aplicar uno de ellos a una situación real y de interés en salud pública\n7. Aplicar y reconocer la importancia de las normas de bioseguridad en su ejercicio práctico como futuro médico veterinario\n8. Promocionar e incorporar estilos de vida saludable\n9. Diseñar y aplicar estrategias de educación en salud, dirigidas a la comunidad",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017087)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Nestor Yaya Lancheros",
       "Martha Cecilia Suarez Alfonso",
       "Luis Joaquin Polo Teran",
       "Myriam Acero Aguilar"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE-CLINICA EXTERNA",
        "salon": "510-104",
        "edificio": "510 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "SALON DE CLASE-CLINICA EXTERNA",
        "salon": "510-104",
        "edificio": "510 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017088": {
  "cod": "2017088",
  "codigoSIA": "2017088",
  "nombre": "Semiología",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "OBJETIVOS\n\n&#61607; ENSEÑAR A LOS ALUMNOS LA PROPEDEÚTICA CLÍNICA (PROCEDIMIENTO PARA EXAMINAR ADECUADAMENTE) APROPIADA PARA PODER EXTRAER Y OBTENER INFORMACIÓN MÉDICA BÁSICA DE LOS PACIENTES QUE EN UN MOMENTO ACTÚAN CON SIGNOS CLÍNICOS DE ENFERMEDAD.\n\n&#61607; DESARROLLAR EN LOS ESTUDIANTES LA HABILIDAD PARA ELABORAR ANÁLISIS CLÍNICOS Y CRÍTICOS A PARTIR DE LOS SIGNOS DE ENFERMEDAD CON EL OBJETO DE PROPONER O PLANTEAR HIPÓTESIS QUE LLEGUEN A EXPLICAR DE UNA MANERA APROXIMADA LO QUE EN REALIDAD PRESENTA EL ANIMAL ENFERMO (PROPONER DIAGNÓSTICOS DIFERENCIALES).\n\nMETODOLOGIA\n\nPRÁCTICAS: CLASES Y TRABAJO EN CLASE, TRABAJO DIRIGIDO EN LAS CLÍNICAS.\nTEÓRICA: TERMINOLOGÍA, CONCEPTOS Y ARTÍCULOS RECOMENDADOS.\nSEMINARIOS  TALLERES.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017088)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Henry Omar Meneses Martinez",
       "Sandra Milena Lamprea Maldonado",
       "Gabriela Moreno Arroyave"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALON DE CLASE-CLINICA EXTERNA",
        "salon": "510-104",
        "edificio": "510 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALON DE CLASE-CLINICA EXTERNA",
        "salon": "510-104",
        "edificio": "510 - Conjunto Escuela de Veterinaria Federico Lleras Acosta",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-PALMIRA GRUPO 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Luis Carlos Muñoz Rodriguez"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "13:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017089": {
  "cod": "2017089",
  "codigoSIA": "2017089",
  "nombre": "Sistemas de producción I",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017089)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Gregorio Piñeros Gomez",
       "MONICA ZAYNE TORRES CRUZ"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 52,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "SALON DE CLASE 4",
        "salon": "561H-104",
        "edificio": "561H - Editorial UN",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017090": {
  "cod": "2017090",
  "codigoSIA": "2017090",
  "nombre": "Sistemas de producción II",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "Partiendo del qué hacer y perfil profesional del Médico Veterinario, centrado en tres campos específicos: Atención, protección y bienestar animal; protección de la salud humana y del entorno y Medicina de la producción y sanidad Animal. En este contexto, desde el espacio académico Sistemas de Producción I, se pretende capacitar al estudiante para identificar factores tecnológicos y no tecnológicos que determinan el óptimo desempeño, salud y bienestar animal en sistemas de producción aviar, porcina y pequeños rumiantes, comprender el gran compromiso social que es velar por la inocuidad de los productos generados en los sistemas de producción animal en procura por la seguridad alimentaria, que ampare el uso responsable de los recursos naturales asegurando la sostenibilidad del sistema.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017090)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Diana Marcela Alvarez Mira",
       "Gloria Amparo Casas Bedoya"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 57,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "10:00",
        "lugar": "SALON DE CLASE 4",
        "salon": "481-111",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "SALON DE CLASE 4",
        "salon": "481-111",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017091": {
  "cod": "2017091",
  "codigoSIA": "2017091",
  "nombre": "Sociedades rurales",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "OBJETIVOS:\nEl conocimiento de los grupos sociales que conforman la Sociedad Rural Colombiana (las diferentes formaciones regionales, las comunidades negras e indígenas, los trabajadores rurales, los empresarios agrícolas, el campesinado), la evolución y los procesos configurativos de estos grupos, el grado de desarrollo histórico y económico de nuestra sociedad rural, las diferentes formaciones socio-económicas que a su interior coexisten, y, principalmente, el reconocimiento de las culturas e ideologías propias a estos sectores sociales, es el objeto expreso de una Sociología Rural.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017091)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Rodrigo Chaves Ladino"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "13:00",
        "fin": "16:00",
        "lugar": "LABORATORIO DE FISIOLOGIA (SALON DE CLASE)",
        "salon": "500-121",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-PALMIRA GRUPO 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Clara Ines Fory Carvajal"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 51,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017092": {
  "cod": "2017092",
  "codigoSIA": "2017092",
  "nombre": "Suelos y plantas",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2017092 (2017092)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Gyovanny Alvarez Cesar"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 6",
        "salon": "561B-26",
        "edificio": "561B - José Velásquez Quinceno",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Gilberto Eduardo Marin Pimentel"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "13:00",
        "fin": "16:00",
        "lugar": "AULA 160-1050-1060",
        "salon": "G-1050-1060",
        "edificio": "G- GRANJA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Palmira Veterinaria Grupo 2",
      "codigoGrupo": "PAL-02",
      "profesores": [
       "Gilberto Eduardo Marin Pimentel"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "16:00",
        "lugar": "AULA 160-1050-1060",
        "salon": "G-1050-1060",
        "edificio": "G- GRANJA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017093": {
  "cod": "2017093",
  "codigoSIA": "2017093",
  "nombre": "Toxicología",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "1. BRINDAR EL CONOCIMIENTO BÁSICO DE LA TOXICOLOGÍA GENERAL PARA CAPACITAR AL ESTUDIANTE EN LA INTERPRETACIÓN POSTERIOR DE PROCESOS TOXICOLÓGICOS ESPECÍFICOS.\n2. REVISAR LAS PRINCIPALES INTOXICACIONES QUE SE PRESENTAN EN LOS ANIMALES DOMÉSTICOS EN EL CONTEXTO MUNDIAL Y COLOMBIANO.\n3. OFRECER UNA METODOLOGÍA PEDAGÓGICA QUE LE PERMITA AL ESTUDIANTE LA EJECUCIÓN DE ACTIVIDADES INDIVIDUALES Y EN GRUPO, TANTO EN SESIONES PRESENCIALES COMO NO PRESENCIALES\nCAPACITAR AL ESTUDIANTE EN LA COMUNICACIÓN DE TIPO CIENTÍFICO A TRAVÉS DE SEMINARIOS Y/O POSTERS Y/O ARTÍCULOS CIENTÍFICOS.\n\nMETODOLOGÍA:\n\n CLASES MAGISTRALES Y SESIONES PRÁCTICAS CONDUCIDAS POR EL PROFESOR ENCARGADO.\n\n DISCUSIÓN DE LECTURAS Y ARTÍCULOS ASIGNADOS\n\n TRABAJO AUTÓNOMO DEL ESTUDIANTE: CONSULTA DE LITERATURA ESPECIALIZADA PARA REALIZAR TALLERES Y TRABAJOS (POSTER Y ARTÍCULO INDIVIDUAL) SOBRE PRÁCTICAS.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017093)",
    "grupos": [
     {
      "grupo": "Grupo",
      "codigoGrupo": "1",
      "profesores": [
       "Jaime Fernando Gonzalez Mantilla",
       "Gonzalo Jair Diaz Gonzalez"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "SALON DE CLASE 4",
        "salon": "481-111",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "SALON DE CLASE 4",
        "salon": "481-111",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 4",
        "salon": "481-111",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017094": {
  "cod": "2017094",
  "codigoSIA": "2017094",
  "nombre": "Trabajo de campo Costa Atlántica",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017094)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "MONICA ZAYNE TORRES CRUZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "19:00",
        "lugar": "SALON DE CLASE 4",
        "salon": "481-111",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017095": {
  "cod": "2017095",
  "codigoSIA": "2017095",
  "nombre": "Trabajo de campo Los Llanos",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017095)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "MONICA ZAYNE TORRES CRUZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE",
        "salon": "561C-13",
        "edificio": "561C - BIOTERIO Y ESTABLOS DE PRODUCCION",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017096": {
  "cod": "2017096",
  "codigoSIA": "2017096",
  "nombre": "Trabajo de campo Quindío",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017096)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "MONICA ZAYNE TORRES CRUZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 4",
        "salon": "561H-104",
        "edificio": "561H - Editorial UN",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017097": {
  "cod": "2017097",
  "codigoSIA": "2017097",
  "nombre": "Virología",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "OBJETIVO\nProporcionar al estudiante conocimientos generales (teórico-prácticos) de los agentes virales y de las principales enfermedades que ocasionan en las especies domésticas, haciendo énfasis en su diagnóstico, y en las medidas que permitan prevenir, controlar y eventualmente erradicarlas, con el fin de consolidar los conceptos básicos para el ejercicio de la profesión médico veterinaria.\n\nMETODOLOGIA\nEl curso se desarrolla en dos modalidades: una teórica y otra práctica. La teoría esta sustentada en la presentación de conferencias magistrales, lectura de artículos científicos y participación del estudiante a través de la presentación de seminarios. La parte práctica se lleva a cabo a través de prácticas dirigidas y desarrolladas por los estudiantes.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017097)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Gloria Consuelo Ramirez Nieto",
       "Jairo Jaime Correa",
       "Javier Andres Jaimes Olaya"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 42,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "Salón de clase 5",
        "salon": "481-112",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Jairo Jaime Correa",
       "Gloria Consuelo Ramirez Nieto",
       "Javier Andres Jaimes Olaya"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 38,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "LABORATORIO F.M.V.Z.",
        "salon": "500-120",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-PALMIRA GRUPO 1",
      "codigoGrupo": "PAL-01",
      "profesores": [
       "Santiago Monsalve Buritica"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017132": {
  "cod": "2017132",
  "codigoSIA": "2017132",
  "nombre": "Mercadeo agropecuario",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "En la optativa de mercadeo agropecuario, se pretende dotar al estudiante de competencias analíticas y prácticas con las cuales fundamente y comprenda la forma en que está estructurado el mercadeo de los productos agropecuarios y agroindustriales, dando especial atención al producto que demanda un mercado, como objetivo de la producción, el costo que implica producirlo, al igual que las variables que permiten determinar el precio de mercado, haciéndolo competitivo frente a otros productos homogéneos (commodities) o especializados del sector agropecuario. Así mismo comprender la necesidad de impulsarlo a través de los canales de mercadeo (producción, acopio, mayorista, distribución, consumo) y la forma como la publicidad y los medios de comunicación deben hacer del producto un factor básico para el consumidor.",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017132)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Gonzalo Tellez Iregui"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 53,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "15:00",
        "lugar": "SALON DE CLASE 3",
        "salon": "561C-153",
        "edificio": "561C - BIOTERIO Y ESTABLOS DE PRODUCCION",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "SALON DE CLASE 3",
        "salon": "561C-153",
        "edificio": "561C - BIOTERIO Y ESTABLOS DE PRODUCCION",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017137": {
  "cod": "2017137",
  "codigoSIA": "2017137",
  "nombre": "Nutrición y alimentación I",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2017137 (2017137)",
    "grupos": []
   }
  ]
 },
 "2017249": {
  "cod": "2017249",
  "codigoSIA": "2017249",
  "nombre": "Trabajo de Grado",
  "creditos": 10,
  "tipologia": "TRABAJO DE GRADO",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017249)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jesus Alfredo Cortes Vecino"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 7,
        "diaTexto": "DOMINGO",
        "inicio": "21:00",
        "fin": "22:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 10",
      "codigoGrupo": "10",
      "profesores": [
       "Olimpo Juan Oliver Espinosa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "16/11/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 12",
      "codigoGrupo": "12",
      "profesores": [
       "Myriam Acero Aguilar"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "16/11/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 13",
      "codigoGrupo": "13",
      "profesores": [
       "Gloria Consuelo Ramirez Nieto"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "16/11/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 14",
      "codigoGrupo": "14",
      "profesores": [
       "Harvey Lozano Marquez"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 7,
        "diaTexto": "DOMINGO",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 17",
      "codigoGrupo": "17",
      "profesores": [
       "Claudia Isabel Brieva Rico"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "08:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 18",
      "codigoGrupo": "18",
      "profesores": [
       "Piero Ardani Vargas Pinto"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "22:00",
        "fin": "23:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 19",
      "codigoGrupo": "19",
      "profesores": [
       "Martha Cecilia Suarez Alfonso"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Maria Alejandra Torres Medina"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "21:00",
        "fin": "22:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 20",
      "codigoGrupo": "20",
      "profesores": [
       "Arlen Patricia Gomez Ramirez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 25",
      "codigoGrupo": "25",
      "profesores": [
       "Jorge Luis Zambrano Varon"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "16/11/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 26",
      "codigoGrupo": "26",
      "profesores": [
       "HUGO ANDRES GUTIERREZ TRUJILLO"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 27",
      "codigoGrupo": "27",
      "profesores": [
       "Vladimir Galindo Zamora"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "12/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 28",
      "codigoGrupo": "28",
      "profesores": [
       "Gloria Amparo Casas Bedoya"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "21/11/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 32",
      "codigoGrupo": "32",
      "profesores": [
       "Henry Omar Meneses Martinez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "16/11/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 34",
      "codigoGrupo": "34",
      "profesores": [
       "Jose Manuel Lasso Delgado"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 35",
      "codigoGrupo": "35",
      "profesores": [
       "Benjamin Doncel Diaz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Gonzalo Tellez Iregui"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Sandra Milena Lamprea Maldonado"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "Carlos Alfonso Moreno Torres"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "20:00",
        "fin": "21:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017255": {
  "cod": "2017255",
  "codigoSIA": "2017255",
  "nombre": "Política agropecuaria",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OBLIGATORIA",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2555"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2017255 (2017255)",
    "grupos": [
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "GERMAN AUGUSTO PACHON GANTIVA"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 51,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "16:00",
        "lugar": "SALA DE EDUCACION CONTINUADA - GRANDE",
        "salon": "481-103",
        "edificio": "481 - Claude Vericel Aimar",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017564": {
  "cod": "2017564",
  "codigoSIA": "2017564",
  "nombre": "Contratacion estatal",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "PRINCIPIOS DE LA CONTRATACIÓN ESTATAL, De la función administrativa, Constitucionales, De la Contratación Estatal, Transparencia.\n- Economía - Responsabilidad. - Equilibrio Contractual.\nDurante el curso se acopiará pronunciamientos jurisprudenciales qu",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2017564)",
    "grupos": []
   }
  ]
 },
 "2017792": {
  "cod": "2017792",
  "codigoSIA": "2017792",
  "nombre": "Conservación genética",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La diversidad biológica en el planeta esta siendo perdida rápidamente por las acciones directas o indirectas del hombre. La transformación de los hábitats y ecosistemas naturales, la deforestación por políticas inadecuadas de ocupación y utilización del territorio, y la construcción de obras de infraestructura y desarrollo vial sin las debidas consideraciones ambientales han sido algunas de las principales causas que han conducido a esta situación.\nLa importancia de la biodiversidad, así como la adopción de medidas para su conservación, uso sostenible y distribución de beneficios que se deriven de su utilización se consignan en el convenio sobre la diversidad Biológica, ratificado por Colombia mediante la ley 165 de 1994. La Política Nacional de biodiversidad en Colombia se fundamenta en tres estrategias: Conservación, conocimiento y utilización sostenible de la biodiversidad.\nPara los biólogos que esperen ser parte importante en la planeación de políticas futuras para la conservación y manejo de las especies, es importante tener una formación adecuada en las herramientas que se pueden obtener a partir de los datos moleculares.\nUna visión integral de los programas de conservación, requiere el uso de datos ecológicos, demográficos y genéticos (particularmente moleculares), con el fin de lograr la preservación de suficiente cantidad de diversidad evolutiva.\n\nConceptos Previos: Los estudiante deben contar con conocimientos de Biología molecular. Se recomienda cursar previamente la asignatura Biología molecular (2017523)",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017792",
    "grupos": [
     {
      "grupo": "Grupo 1 - Conservación Genética (Prof Mario Vargas R.)",
      "codigoGrupo": "1",
      "profesores": [
       "MARIO ALFONSO VARGAS RAMIREZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "SALON DE CLASE",
        "salon": "426-202",
        "edificio": "426 - Instituto de Genética",
        "desde": "24/08/2026",
        "hasta": "11/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALA DE BIOINFORMATICA (NO USAR)",
        "salon": "426-212",
        "edificio": "426 - Instituto de Genética",
        "desde": "24/08/2026",
        "hasta": "11/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017803": {
  "cod": "2017803",
  "codigoSIA": "2017803",
  "nombre": "Etnobotánica",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura, en su concepción más amplia, comprende todas las actividades que tienen que ver con los usos pasados y presentes de las plantas por parte del hombre, con énfasis en la investigación etnobotánica contemporánea en un país que como Colombia es pluriétnico, pluricultural y megadiverso. La interrrelación hombre-planta, eje del curso, se aborda desde la cultura, el tiempo y el espacio, para definir criterios de investigación y valoración del conocimiento tradicional. Igualmente, se abordan aspectos relacionados con la importancia de la vegetación para el mantenimiento de bancos de genes in situ de plantas útiles, restringidas a procesos culturales locales o subregionales, que constituyen oportunidades de riqueza, pero que se pierden por la destrucción de los ecosistemas y de los grupos culturales (sociedades indígenas y campesinas) detentadoras del conocimiento. En este marco, se proporcionan los elementos básicos, conceptuales y metodológicos, que se requieren para estudiar la vegetación en Colombia, a la luz de su importancia cultural, política y económica.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento de los cursos de Taxonomía de angiospermas con código 2017546 y Biología de plantas con código 2015877.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017803)",
    "grupos": []
   }
  ]
 },
 "2017810": {
  "cod": "2017810",
  "codigoSIA": "2017810",
  "nombre": "Fundamentos de palinología básica y aplicada",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se pretende transmitir al estudiante lo fundamental de los aspectos principales de la morfología de los granos de polen y las esporas y su aplicación en campos diferentes a la biología. Se hará una fase de introducción a la biología de la polinización. El alcance global es despertar el interés en la utilización de la Palinología como herramienta auxiliar en trabajos de investigación en áreas de la taxonomía, ecología y fisiología. Se plantea un programa teórico-práctico.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento del curso Biología de plantas con código 2015877.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017810)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jesus Orlando Rangel Churio",
       "Marisol Amaya Marquez",
       "ALEXIS JARAMILLO JUSTINICO"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 18,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DOCENTE",
        "salon": "425-102",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DOCENTE",
        "salon": "425-102",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017817": {
  "cod": "2017817",
  "codigoSIA": "2017817",
  "nombre": "Histología animal",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso está concebido para que los estudiantes adquieran un conocimiento sólido de la estructura microscocópica y submicroscópica de los tejidos y órganos representativos de los diferentes sistemas animales, con énfasis en histofisiología en cada caso. Los tejidos y órganos se estudian y analizan de acuerdo con la tendencia actual que exige un enfoque biomolecular. Los temas se complementan con literatura científica que capacite a los estudiantes para abordar el estudio histológico de prácticamente todos los organismos. Siendo un área de conocimiento de enlace con la fisiología y la biología celular uno de los objetivos es proyectar hacia el estudiante la importancia de la histología para entender en distintos niveles la estrecha relación con otras ciencias. La metodología convencional se combina con metodologías intensivas. Los temas básicos son expuestos por el profesor, utilizando un material de microfotografías y electromicrografías especialmente preparado y seleccionado para el curso. En la componente práctica se utilizan micropreparados de secciones representativas de modelos animales. Los estudiantes dispondrán de electromicrografías para el análisis correspondiente. La participación activa de los estudiantes durante el desarrollo del curso se complementa con discusión en seminario de literatura especializada, y planteamiento de problemas que serán analizados con asesoría del profesor.\n\nConceptos Previos: Se recomienda a los estudiantes cursar previamente la asignatura Biología molecular de la célula (2017775)",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2017817 (2017817)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Edwin Acosta Virguez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "LABORATORIO BIOLOGIA GENERAL",
        "salon": "421-122",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "LABORATORIO BIOLOGIA GENERAL",
        "salon": "421-122",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017949": {
  "cod": "2017949",
  "codigoSIA": "2017949",
  "nombre": "Jurisprudencia constitucional",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Es un lugar común en la enseñanza del Derecho en Colombia el situar a nuestro país como auténtico representante continental o romano germánica. La asignatura va dirigida a suministrar elementos teoricos que permitan al profesional justificar adecuadamente",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2017949)",
    "grupos": []
   }
  ]
 },
 "2020994": {
  "cod": "2020994",
  "codigoSIA": "2020994",
  "nombre": "Genetica de insectos de interes economico",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El manejo integrado de plagas y la definición de estra tegias de control biológico son aspectos críticos en todo sistema agrícola. De su éxito, depende la reduc ción en los costos de producción, la apertura de nuevos mercados a partir del mejoramiento en la calidad de los productos que se comercializan, y del cumplimiento de las normas fitosanitarias establecidas relacionadas con trazabilidad. La asignatura \"Genética de Insectos\" que aquí se propone es complementaria a las asignaturas de fundamentación \"Entomología\" y \"Manejo integrado de plagas\". Pretende que los estudiantes de Ingeniería Agronómica conozcan como es la organización genética de un insecto, tanto en su genoma nuclear como extranu clear; y establecer las implicaciones de su composición genética en la biología y comportamiento, particular mente en lo que tiene que ver con el manejo integrado de plagas. Los estudiantes comprenderán como las carac terísticas genéticas de los insectos determinan su res puesta al control (químico/biológico), a la presión por factores ambientales o antrópicos, a la distribución espacio temporal de las especies en sistemas de culti vos, entre otros. Se dictarán clases magistrales donde se abordarán temas básicos y a partir de éstos, se ha rán seminarios con artículos científicos relacionados donde se aborde la temática con insectos de interés económico. Se realizarán ensayos, trabajos y talleres rela cionados con el tema.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2020994)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Elena Luisa Margarita Brochero "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "SALON DE CLASE 130",
        "salon": "500-130",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021140": {
  "cod": "2021140",
  "codigoSIA": "2021140",
  "nombre": "Astronomía para todos",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "En este curso el estudiante ve conceptos básicos de la astronomía que empiezan con las concepciones de la esfera celeste, haciendo énfasis en la astronomía de posición, viendo coordenadas horizontales, ecuatoriales horarias, geocéntricas y heliocéntricas.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2021140)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Leonardo Castañeda Colorado"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 117",
        "salon": "413-117",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 117",
        "salon": "413-117",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - Clase Presencial",
      "codigoGrupo": "2",
      "profesores": [
       "Giovanni Alejandro Pinzon Estrada"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3 - Clase Presencial",
      "codigoGrupo": "3",
      "profesores": [
       "SANTIAGO VARGAS DOMINGUEZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021142": {
  "cod": "2021142",
  "codigoSIA": "2021142",
  "nombre": "Clima y diversidad de clima de Colombia",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Uno de los objetivos del curso es introducir a los estudiantes de Pregrado en los conocimientos básicos de la Meteorología, para que se interesen en realizar estudios de Posgrado en esta área, debido a que no se cuenta en Colombia con un Pregrado y que se",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Magistral T-P (2021142)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Raul Eduardo Gomez Torres"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 46,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 303",
        "salon": "564-303",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 303",
        "salon": "564-303",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Raul Eduardo Gomez Torres"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 46,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 303",
        "salon": "564-303",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 303",
        "salon": "564-303",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021146": {
  "cod": "2021146",
  "codigoSIA": "2021146",
  "nombre": "Biología del comportamiento animal y humano",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Proporcionar a los estudiantes la información básica que los capacite para interpretar y analizar el comportamiento animal y humano. Al mismo tiempo suministrar a los participantes la información básica sobre temas fundamentales de la investigación del co",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021146)",
    "grupos": []
   }
  ]
 },
 "2021147": {
  "cod": "2021147",
  "codigoSIA": "2021147",
  "nombre": "Biotecnologia para no biotecnologos",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "OBJETIVO:\nConstruir un escenario interdisciplinario que adopte como objeto de estudio, la biotecnología y los recursos genéticos, abordando los aspectos de bioseguridad, normas éticas, normas legales y percepción social.\n\nMETODOLOGIA\nEn la primera medi",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021147)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Nubia Carmenza Moreno Sarmiento"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AUDITORIO MULTIPLE DE POSGRADO- INST. DE BIOTECNOLOGIA",
        "salon": "224-2146",
        "edificio": "224 - Manuel Ancizar",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021149": {
  "cod": "2021149",
  "codigoSIA": "2021149",
  "nombre": "Galileo",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Asignatura de contexto sobre los orígenes de la Ciencia Moderna y, particularmente sobre la obra de Galileo Galilei. Se examinan las relaciones entre ciencias y arte, ciencia y filosofía,ciencia y tecnología y ciencia y poder. Se trabaja la relacion entre las matematicas y el mundo de los fenómenos. Las discusiones epistemologiacas se realizan paralelamente al estudio de los acontecimientos historicos. En terminos genrales se construye el escenario del cambio radical de pensamiento que hace posible la aparcion de la ciencia experimental y abre el camino a la tecnologia moderna.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021149)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Carlos Augusto Hernandez Rodriguez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 90,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "AUDITORIO JUAN HERKRATH MÜLLER",
        "salon": "476-109",
        "edificio": "476 - Juan Herkrath Muller",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021152": {
  "cod": "2021152",
  "codigoSIA": "2021152",
  "nombre": "Cuántica para todos y para todo",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso de conta de dos partes centrales:\n\nA. Historia y Fundamentos.\nB. Aplicaciones y Controversias\n\nSe hará en sesiones de dos horas a la que sigue una actividad práctica. La primera tematica (dividad por comodidad en 2) se abordará en las primeras c",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021152)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Jose Jairo Giraldo Gallo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "17:00",
        "fin": "20:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021154": {
  "cod": "2021154",
  "codigoSIA": "2021154",
  "nombre": "Espacio y poder en América Latina",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "RASTREAR LA CONSTRUCCION DE LOS ESTADOS Y MERCADOS CAPITALISTAS DE ENCLAVE, QUE EXPLICAN LA SUBORDINACION AL MERCADO MUNDIAL Y LA FRAGMENTACION SOCIAL Y TERRITORIAL INTERNAS, EN LOS SIGLOS XVIII, XIX Y XX.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORÍCA (2021154)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Dario Indalecio Restrepo Botero"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 150,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AUDITORIO PRINCIPAL",
        "salon": "310-113",
        "edificio": "310 - Antonio García Nossa",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AUDITORIO PRINCIPAL",
        "salon": "310-113",
        "edificio": "310 - Antonio García Nossa",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021160": {
  "cod": "2021160",
  "codigoSIA": "2021160",
  "nombre": "Partículas y cosmología",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Presentar de una manera divulgativa la frontera de la física de partículas y de la cosmología. Para ello presentamos un marco conceptual basado en la relatividad especial y la mecánica cuántica para luego construir los conceptos e ideas más relevantes en",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021160)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Jairo Alexis Rodriguez Lopez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 200,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021471": {
  "cod": "2021471",
  "codigoSIA": "2021471",
  "nombre": "Japonés I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que los estudiantes al término de este primer nivel de japonés, puedan comprender textos cortos relacionados con temáticas de tipo personal (nombre, ocupación) y que además, puedan expresar de manera oral y escrita información de tipo personal.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021471)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Japonés Electivo I",
      "codigoGrupo": "1",
      "profesores": [
       "Yeny Mireya Echeverria Barajas"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 27,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 105",
        "salon": "225-105",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 104",
        "salon": "225-104",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021472": {
  "cod": "2021472",
  "codigoSIA": "2021472",
  "nombre": "Japonés II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que los estudiantes, al término del segundo nivel, puedan comprender textos expositivos y narrativos relacionados con temáticas de tipo académico y de cultura general.Se espera que en términos de comprensión escrita, el estudiante pueda identifi",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021472)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Japonés Electivo II",
      "codigoGrupo": "1",
      "profesores": [
       "Yeny Mireya Echeverria Barajas"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 103",
        "salon": "225-103",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021473": {
  "cod": "2021473",
  "codigoSIA": "2021473",
  "nombre": "Japonés III",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que los estudiantes, al término del tercer nivel, puedan leer y comprender textos auténticos de tipo académico y cultural, en los que, por ejemplo, se narren eventos o se describa un concepto a través del tiempo, se presente información de tipo",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021473)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Japonés Electivo III",
      "codigoGrupo": "1",
      "profesores": [
       "Yeny Mireya Echeverria Barajas"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON 108",
        "salon": "225-108",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON 106",
        "salon": "225-106",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021478": {
  "cod": "2021478",
  "codigoSIA": "2021478",
  "nombre": "Portugues I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El objetivo es desarrollar integralmente la competencia comunicativa de lengua portuguesa a nivel de principiantes e introducir al aprendiente en aspectos de la cultura brasileña y portuguesa. Se enfatiza el aprendizaje del idioma modalidad brasileña. Se",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021478)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Portugués Electivo I",
      "codigoGrupo": "1",
      "profesores": [
       "Lina Lucia Oliveira Da Silva"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 28,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 204",
        "salon": "205-204",
        "edificio": "205 - Orlando Fals Borda",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 106",
        "salon": "225-106",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021479": {
  "cod": "2021479",
  "codigoSIA": "2021479",
  "nombre": "Portugues II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El objetivo del nivel 2 es también desarrollar integralmente la competencia comunicativa de lengua portuguesa en un nivel básico e seguir llevando al aprendiente a interesarse por los aspectos de la cultura brasileña y portuguesa. Se sigue enfatizando el",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021479)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Portugués Electivo II",
      "codigoGrupo": "1",
      "profesores": [
       "Lina Lucia Oliveira Da Silva"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA 210",
        "salon": "212-210",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALA DE VIDEO 2",
        "salon": "229-105",
        "edificio": "229 - Howard Rochester",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021480": {
  "cod": "2021480",
  "codigoSIA": "2021480",
  "nombre": "Portugués III",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "En el nivel 3 se busca la competencia comunicativa de lengua portuguesa en un nivel intermedio para seguir llevando al aprendiente a interesarse y a sumergirse en la cultura brasileña y portuguesa. Se continúa enfatizando el aprendizaje del idioma en la m",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021480)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 9,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 106",
        "salon": "225-106",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 106",
        "salon": "225-106",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021483": {
  "cod": "2021483",
  "codigoSIA": "2021483",
  "nombre": "Psicoanálisis y cultura",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La pregunta por el hombre tiene asidero desde la objetividad, lo cual permite la apertura de campos como lo es la antropología, la lingüística, la sociología, la historia, la geografía,... etc. En el campo de las ciencias humanas, campos que giran alrededor del hombre, más no por la pregunta que lo esencia, es decirlo singular.\n\nEn su seminario Jacques Lacan, acuña un concepto que introduce una dimensión más allá del campo de la objetividad de la ciencia y al que dio por llamar campo del sujeto, en el cual introduce la dimensión de lo singular, como campo de investigación propiamente psicoanalítica, clínica. Cabe anotar que tanto el estatuto del sujeto como el del objeto, cambian para el psicoanálisis, lo cual lo lleva a reordenar los que introdujo la filosofía y la ciencia-, puesto que el primero, el sujeto, es disímil al sujeto de la conciencia y de la razón, pues es efecto del lenguaje y es inconsciente, asimismo el del objeto, el cual escapa a cualquier representación de la objetividad científica, puesto que es ubicado por fuera de ésta, ya que es un objeto agalmático, mítico que escapa a la objetividad de la percepción, incluso, del cogitar de la razón, empero, no por estar por fuera del campo de lo objetivable deja de funcionar, por el contrario retorna y actúa con vehemencia.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021483)",
    "grupos": [
     {
      "grupo": "Grupo 1 (2021483)",
      "codigoGrupo": "1",
      "profesores": [
       "Beatriz Eugenia Ramos Gonzalez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "08:00",
        "fin": "11:00",
        "lugar": "AULA 104",
        "salon": "212-104",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021485": {
  "cod": "2021485",
  "codigoSIA": "2021485",
  "nombre": "Psicoanálisis y psicoterápias",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "¿Cómo cura el psicoanálisis? ¿Cuáles son los principios que sostienen la conducción de un tratamiento? ¿Qué implica el trabajo analítico? Son unos de los interrogantes que dinamizan esta asignatura para reconocer elementos fundamentales de su ética y de la lógica y estructura de su técnica, con el presupuesto básico del poder de la palabra y de la transferencia. El curso busca acercarse a las coordenadas que permiten determinar la peculiaridad del psicoanálisis como terapéutica y como experiencia singular que convoca al sujeto a una indagación sobre los determinantes inconscientes que conducen sus elecciones. Frente a las otras psicoterapias se planteará, en ciertos puntos, su contraste.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021485)",
    "grupos": [
     {
      "grupo": "Grupo 1 - (Psioanálisis y psicoterapias - 2021485)",
      "codigoGrupo": "1",
      "profesores": [
       "Carmen Lucia Diaz Leguizamon"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "08:00",
        "fin": "11:00",
        "lugar": "AULA 104",
        "salon": "212-104",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021514": {
  "cod": "2021514",
  "codigoSIA": "2021514",
  "nombre": "Amenaza, riesgo y desarrollo",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Los efectos socioeconómicos y las pérdidas humanas como consecuencia de los desastres causados por eventos naturales o antrópicos (fenómenos originados en la intervención humana), siguen aumentando en nuestros países, provocando impactos negativos en las",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021514)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Omar Joaquin Agudelo Suarez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 80,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021758": {
  "cod": "2021758",
  "codigoSIA": "2021758",
  "nombre": "Chino I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Los estudiantes deben aprender y aplicar en el habla una correcta pronunciación, acentuación y entonación acorde con la fonética de la lengua china. Igualmente aprenderán las estructuras gramaticales básicas para el primer nivel. El estudiante de ruso deb",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021758)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Chino Electivo I",
      "codigoGrupo": "1",
      "profesores": [
       "JESSICA LUCIA MORENO NOVOA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - Chino Electivo I",
      "codigoGrupo": "2",
      "profesores": [
       "JESSICA LUCIA MORENO NOVOA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021760": {
  "cod": "2021760",
  "codigoSIA": "2021760",
  "nombre": "Chino II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "En el nivel II, el curso se enfoca en los caracteres chinos aunque apoyados en el alfabeto piyin. El aprendiente puede construir oraciones simples. A nivel oral, es aprendiente se desenvuelve en situaciones de la vida cotidiana.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CHINO II(2021760)",
    "grupos": [
     {
      "grupo": "Chino Electivo II",
      "codigoGrupo": "1",
      "profesores": [
       "JESSICA LUCIA MORENO NOVOA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2021770": {
  "cod": "2021770",
  "codigoSIA": "2021770",
  "nombre": "Cátedra de derecho para estudiantes de otras carreras",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Objetivo:\nDar una visión global de los conceptos mínimos fundamentales del derecho, para contribuir a que los profesionales logren mejor comprensión de la importancia de las relaciones jurídicas y en consecuencia del ejercicio consciente de los deberes y",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Eulises Torres "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "17:00",
        "fin": "20:00",
        "lugar": "AUDITORIO 101",
        "salon": "610-101",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021849": {
  "cod": "2021849",
  "codigoSIA": "2021849",
  "nombre": "Filosofía de la Mente",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El propósito de esta asignatura es acercar al estudiante al conocimiento del autor o un tema, sus desarrollos y teorías y la forma en la cual inciden en la reflexión filosófica. El curso podrá enfocarse en aspectos puntuales, en obras específicas, en tema",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2021849 (2021849)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "19:00",
        "lugar": "AULA 203",
        "salon": "205-203",
        "edificio": "205 - Orlando Fals Borda",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022180": {
  "cod": "2022180",
  "codigoSIA": "2022180",
  "nombre": "Diseño, arte e ideología",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Definición pendiente",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2022180)",
    "grupos": []
   }
  ]
 },
 "2022188": {
  "cod": "2022188",
  "codigoSIA": "2022188",
  "nombre": "Electiva de Grabado en Linóleo- El ying yang de la imagen",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El grabado en linóleo es una técnica para producir imagen estampada y seriada a partir de una matriz blanda. Esta técnica, a pesar de lo sencilla, es de resultados altamente expresivos por las características de la matriz y por las posibilidades experimentales que ofrece tanto en negro como en color.\n\nLa creación de la imagen en linóleo, igual que en madera, requiere entender la estampa como una operación de representación visual basada en el concepto del Yin-Yang: un juego armónico donde lo oscuro contiene lo claro y lo claro contiene el oscuro. Este concepto oriental es el canon mediante el cual se penetra al mundo de la representación de las formas, especialmente al de la grafica.El objetivo del curso es experimentar y producir estampa seriada desde matrices de linóleo.\nEl taller entrega las estrategias del oficio de la construcción de matrices y copiado de la estampa sobre papel y otras diferentes superficies. Se harán experimentos con varios tipos de tintas y colorantes. Las imágenes finales están dirigidas a la creación un proyecto personal de libro de artista, con diseño, imágenes y texto del autor, impreso manualmente en el taller de la Escuela.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2022188)",
    "grupos": []
   }
  ]
 },
 "2022221": {
  "cod": "2022221",
  "codigoSIA": "2022221",
  "nombre": "Literatura y cinematografia",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022221)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Juan Diego Antonio Pablo Caicedo Gonzalez"
      ],
      "facultad": "FACULTAD DE ARTES",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 90,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "AUDITORIO 2",
        "salon": "303C-422",
        "edificio": "303 - EDIFICIO DE LAS ARTES SEDE BOGOTA",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022225": {
  "cod": "2022225",
  "codigoSIA": "2022225",
  "nombre": "Movilidad y transporte urbano",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El presente curso busca comprender las dinámicas de movilidad y transporte, observando las distintas tecnologías existentes en el contexto de algunas ciudades e intentando evaluar en cada una de ellas los impactos ambientales, sociales y económicos que es",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022225)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Ricardo Montezuma Enriquez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 100,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO 2",
        "salon": "303C-422",
        "edificio": "303 - EDIFICIO DE LAS ARTES SEDE BOGOTA",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022229": {
  "cod": "2022229",
  "codigoSIA": "2022229",
  "nombre": "Narración gráfica",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Definición pendiente",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2022229)",
    "grupos": []
   }
  ]
 },
 "2022240": {
  "cod": "2022240",
  "codigoSIA": "2022240",
  "nombre": "Promoci&ograve;n de la vida frente al uso indebido de drogas",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "ASIGNATURA QUE TIENE COMO PROPOSITO BRINDAR UN ESPACIO DE DISCUSI&Ograve;N Y ANALISIS SOBRE EL FENOMENO DEL USO DE DROGRAS. EL DESARROLLO DE LA ASIGNATURA COMTEMPLA LA FORMULACI&Ograve;N DE PROPUESTAS EN EL CAMPO DE LA PREVENCI&Ograve;N Y LA SALUD PUBLICA COMO PARTE DEL EJERC",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022240)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "NELLY ESTHER CALIZ ROMERO"
      ],
      "facultad": "FACULTAD DE ENFERMERÍA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 206",
        "salon": "228-206",
        "edificio": "228 - Nelly Garzón Alarcón",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022287": {
  "cod": "2022287",
  "codigoSIA": "2022287",
  "nombre": "Cátedra Augusto Ángel Maya",
  "creditos": 1,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "motivar y concienciar a los estudiantes sobre la importancia del medio ambiente e inducirlos a la reflexión sobre la relación existente entre la disciplina de estudio y la problemática ambiental. despertar en interés por trabajos de investigación. dar las",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORÍCA (2022287)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Liven Fernando Martinez Bernal"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 76,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AUDITORIO - Espacio restringido por seguridad - solo se utiliza para Ins. Genética",
        "salon": "426-102",
        "edificio": "426 - Instituto de Genética",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022362": {
  "cod": "2022362",
  "codigoSIA": "2022362",
  "nombre": "Práctica de Investigación",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura tiene como objetivo permitir a los estudiantes la realización de prácticas de investigación bajo la supervisión de un profesor, en el marco de un proyecto de investigación. El estudiante podrá familiarizarse con los métodos y técnicas de in",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2022362)",
    "grupos": [
     {
      "grupo": "Grupo 10 - Juan Manuel Carvajalino",
      "codigoGrupo": "10",
      "profesores": [
       "Juan Manuel Carvajalino Fernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 13 - Yih Wen Fung",
      "codigoGrupo": "13",
      "profesores": [
       "Yih Wen Fung "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 146",
        "salon": "421-146",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 21 Yaneth Muñoz",
      "codigoGrupo": "21",
      "profesores": [
       "Yaneth Del Socorro Muñoz Saba"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "10:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 23 Aldemar Acevedo",
      "codigoGrupo": "23",
      "profesores": [
       "Aldemar Alberto Acevedo Rincon"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Grupo 24 Diego Giraldo",
      "codigoGrupo": "24",
      "profesores": [
       "Diego Alonso Giraldo Cañas"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 32 - Mario Vargas Ramirez",
      "codigoGrupo": "32",
      "profesores": [
       "MARIO ALFONSO VARGAS RAMIREZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022615": {
  "cod": "2022615",
  "codigoSIA": "2022615",
  "nombre": "Alemán I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que los estudiantes al término de este primer nivel de alemán, puedan comprender textos expositivos cortos relacionados con temáticas de tipo académico y que además, puedan expresar de manera oral y escrita información de tipo personal. Con base en un listado de descriptores predeterminados, el profesor selecciona el material que puede utilizar y ayuda al estudiante a partir del uso de estrategias de aprendizaje, para que poco a poco sea él o ella quien tenga el criterio para saber qué información le sirve, por qué y cómo usarla.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022615)",
    "grupos": [
     {
      "grupo": "Aleman Electivo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Paola Andrea Murillo Serrano"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 106",
        "salon": "225-106",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 106",
        "salon": "225-106",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022616": {
  "cod": "2022616",
  "codigoSIA": "2022616",
  "nombre": "Alemán II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que los estudiantes, al término del segundo nivel, puedan comprender textos expositivos y narrativos relacionados con temáticas de tipo académico y de cultura general. Con respecto a la comprensión escrita, el estudiante podrá identificar relaciones de temporalidad y secuencia, de contraste y de causa y efecto. Además se espera que puedan expresar de manera oral y escrita información relacionada con la descripción detallada de lugares, de estados de salud, eventos del pasado y planes. A partir de un listado de descriptores predeterminados, el profesor selecciona el material que puede utilizar y ayuda al estudiante, a través del uso de estrategias de aprendizaje, para que poco a poco sea él o ella quien tenga el criterio para saber qué le sirve, por qué y cómo usarlo. Se cuenta con un Centro de Recursos que le brinda tanto a profesores como estudiantes un buen número de recursos para la enseñana y aprendizaje de la lengua.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022616)",
    "grupos": [
     {
      "grupo": "Alemán Electivo II",
      "codigoGrupo": "1",
      "profesores": [
       "Diego Gonzalez Gonzalez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022617": {
  "cod": "2022617",
  "codigoSIA": "2022617",
  "nombre": "Alemán III",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que los estudiantes, al término del tercer nivel, puedan leer y comprender textos auténticos de tipo académico y cultural, en los que, por ejemplo, se narren eventos o se describa un concepto a través del tiempo, se presente información de tipo",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022617)",
    "grupos": [
     {
      "grupo": "Alemán Electivo III",
      "codigoGrupo": "1",
      "profesores": [
       "Daniel Uriel Ventura Caceres"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 102",
        "salon": "225-102",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 104",
        "salon": "225-104",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022625": {
  "cod": "2022625",
  "codigoSIA": "2022625",
  "nombre": "Francés I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que los estudiantes al término de este primer nivel de francés, puedan comprender textos expositivos cortos relacionados con temáticas de tipo académico y que además, puedan expresar de manera oral y escrita información de tipo personal. Con bas",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022625)",
    "grupos": [
     {
      "grupo": "Francés Electivo I",
      "codigoGrupo": "1",
      "profesores": [
       "Ceymy De Los Angeles Rodriguez Forero"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 110",
        "salon": "212-110",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 103",
        "salon": "225-103",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022626": {
  "cod": "2022626",
  "codigoSIA": "2022626",
  "nombre": "Francés II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que los estudiantes, al término del segundo nivel, puedan comprender textos expositivos de tipo académico y de cultura general. Además los estudiantes expresan de manera oral y escrita información relacionada con la descripción detallada de luga",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022626)",
    "grupos": [
     {
      "grupo": "Francés Electivo II",
      "codigoGrupo": "1",
      "profesores": [
       "Nadid Hernandez Hernandez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022627": {
  "cod": "2022627",
  "codigoSIA": "2022627",
  "nombre": "Francés III",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que los estudiantes, al término del tercer nivel, puedan leer y comprender textos auténticos de tipo académico y cultural, en los que, por ejemplo, se narren eventos o se describa un concepto a través del tiempo, se presente información de tipo",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022627)",
    "grupos": [
     {
      "grupo": "Francés Electivo III",
      "codigoGrupo": "1",
      "profesores": [
       "Fabio Alejandro Pulido Sandoval"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON 102",
        "salon": "225-102",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALA DE VIDEO 1",
        "salon": "229-104",
        "edificio": "229 - Howard Rochester",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022630": {
  "cod": "2022630",
  "codigoSIA": "2022630",
  "nombre": "Italiano I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Su objetivo es desarrollar integralmente la competencia comunicativa de lengua italiana a nivel de principiantes e introducir al aprendiente en aspectos de la cultura italiana. Se abordan las cuatro habilidades constitutivas de la competencia comunicativa",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022630)",
    "grupos": []
   }
  ]
 },
 "2022631": {
  "cod": "2022631",
  "codigoSIA": "2022631",
  "nombre": "Italiano II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Su objetivo es continuar el desarrollo integral de la competencia comunicativa de lengua italiana a nivel de principiantes y avanzar en aspectos de la cultura italiana. Se abordan las cuatro habilidades constitutivas de la competencia comunicativa (compr",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022631)",
    "grupos": [
     {
      "grupo": "Grupo 2 - Italiano Electivo II",
      "codigoGrupo": "2",
      "profesores": [
       "Pablo Reyes Pozzi"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 22,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022698": {
  "cod": "2022698",
  "codigoSIA": "2022698",
  "nombre": "Cuantificacion de proteínas",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta asignatura favorece la interrelación de las ciencias básicas con la practica en diferentas carreras y así mismo porque se requiere de una fácil interpretación de la, literatura científica .\n\nEl desarrollo de la asignatura cuantificación de proteín",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": []
 },
 "2022716": {
  "cod": "2022716",
  "codigoSIA": "2022716",
  "nombre": "Metabolismo óseo",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": []
 },
 "2022733": {
  "cod": "2022733",
  "codigoSIA": "2022733",
  "nombre": "Iniciacion a estudios feministas y de género",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Con este curso introductorio se busca iniciar a las y los estudiantes en algunos de los principales debates feministas acerca de la construcción cultural de las identidades de género. Analizar los vínculos que existen entre la teória feminista y la diver",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022733)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "LIZETH CAMILA BAUTISTA TORRES"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022925": {
  "cod": "2022925",
  "codigoSIA": "2022925",
  "nombre": "Línea de profundización I en animales silvestres y de laboratorio",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022925)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Claudia Isabel Brieva Rico",
       "Sandra Milena Lamprea Maldonado"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022926": {
  "cod": "2022926",
  "codigoSIA": "2022926",
  "nombre": "Linea de profundización Acuicultura I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022926)",
    "grupos": []
   }
  ]
 },
 "2022927": {
  "cod": "2022927",
  "codigoSIA": "2022927",
  "nombre": "Linea de profundización Acuicultura II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022927)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Miguel Angel Landinez Parra"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022930": {
  "cod": "2022930",
  "codigoSIA": "2022930",
  "nombre": "Línea de profundización i en reproduccion animal",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "LAS LINEAS DE PROFUNDIZACION CONTENIDAS EN EL PLAN DE ESTUDIOS TIENEN EN CUENTA FUNDAMENTALMENTE LOS POSIBLES CAMPOS DE ACCION DEL PROFESIONAL LOS CUALES ESTAN DEFINIDOS POR LOS OBJETIVOS GENERALES DEL PROGRAMA. - HACIENDO UN RESUMEN DE LOS RECURSOS FISI",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022930)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Harvey Lozano Marquez",
       "Jorge Luis Zambrano Varon"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022931": {
  "cod": "2022931",
  "codigoSIA": "2022931",
  "nombre": "Línea de profundización i en medicina aviar y produccion avicola",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "LAS LINEAS DE PROFUNDIZACION CONTENIDAS EN EL PLAN DE ESTUDIOS TIENEN EN CUENTA FUNDAMENTALMENTE LOS POSIBLES CAMPOS DE ACCION DEL PROFESIONAL LOS CUALES ESTAN DEFINIDOS POR LOS OBJETIVOS GENERALES DEL PROGRAMA. - HACIENDO UN RESUMEN DE LOS RECURSOS FISI",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022931)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jesus Alfredo Cortes Vecino",
       "JOSE LUIS RODRIGUEZ BAUTISTA",
       "Gonzalo Jair Diaz Gonzalez",
       "Gloria Consuelo Ramirez Nieto",
       "Arlen Patricia Gomez Ramirez",
       "WILLIAM FREND OSORIO ZAMBRANO"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022932": {
  "cod": "2022932",
  "codigoSIA": "2022932",
  "nombre": "Linea de profundizacion I en medicina de pequeños animales",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Línea de profundización en Medicina Interna de Pequeños Animales, es un acercamiento formal y académico con las entidades más frecuentes que afectan a los caninos y felinos, para realizar una revisión exaustiva de las mismas y confrontarlas con publicaciones científicas que aporten información valiosa para realizar un mejor y más integral manejo de dichas enfermedades tanto desdes el punto de vista preventivo,diagnóstico y de tratamiento que permita mejorar la atención de los pacientes que posteriormente esos mismos etudiantes tendrán la oportunidad de atender durante su rotación por la Clínica para Pequeños Animales . La dinámica de la materia es la presentción de seminarios por parte de los estudiantes, siempre bajo el acompañamiento docente, los cuales son evaluables y adicionalmente charlas con invitados expertos en diferentes temas de interes los cuales han sido propuestos previamente. También se dedican algunas jornadas a la realización de prácticas ecográficas, diagnósticas y ecocardiográficas.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022932)",
    "grupos": []
   }
  ]
 },
 "2022933": {
  "cod": "2022933",
  "codigoSIA": "2022933",
  "nombre": "Línea de profundización i en medicina y produccion porcina",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022933)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jose Dario Mogollon Galvis",
       "Gloria Amparo Casas Bedoya"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022934": {
  "cod": "2022934",
  "codigoSIA": "2022934",
  "nombre": "Línea de profundización ii en medicina aviar y produccion avicola",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "LAS LINEAS DE PROFUNDIZACION CONTENIDAS EN EL PLAN DE ESTUDIOS TIENEN EN CUENTA FUNDAMENTALMENTE LOS POSIBLES CAMPOS DE ACCION DEL PROFESIONAL LOS CUALES ESTAN DEFINIDOS POR LOS OBJETIVOS GENERALES DEL PROGRAMA. - HACIENDO UN RESUMEN DE LOS RECURSOS FISI",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022934)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jesus Alfredo Cortes Vecino",
       "Arlen Patricia Gomez Ramirez",
       "JOSE LUIS RODRIGUEZ BAUTISTA",
       "Gloria Consuelo Ramirez Nieto",
       "Gonzalo Jair Diaz Gonzalez",
       "WILLIAM FREND OSORIO ZAMBRANO"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022935": {
  "cod": "2022935",
  "codigoSIA": "2022935",
  "nombre": "Linea de profundización ii en medicina de rumiantes",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2022935 (2022935)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Olimpo Juan Oliver Espinosa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022936": {
  "cod": "2022936",
  "codigoSIA": "2022936",
  "nombre": "Linea de profundizacion II en medicina de pequeños animales",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Línea de profundización en Medicina Interna de Pequeños Animales, es un acercamiento formal y académico con las entidades más frecuentes que afectan a los caninos y felinos, para realizar una revisión exaustiva de las mismas y confrontarlas con publicaciones científicas que aporten información valiosa para realizar un mejor y más integral manejo de dichas enfermedades tanto desdes el punto de vista preventivo,diagnóstico y de tratamiento que permita mejorar la atención de los pacientes que posteriormente esos mismos etudiantes tendrán la oportunidad de atender durante su rotación por la Clínica para Pequeños Animales . La dinámica de la materia es la presentción de seminarios por parte de los estudiantes, siempre bajo el acompañamiento docente, los cuales son evaluables y adicionalmente charlas con invitados expertos en diferentes temas de interes los cuales han sido propuestos previamente. También se dedican algunas jornadas a la realización de prácticas ecográficas, diagnósticas y ecocardiográficas.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022936)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Piero Ardani Vargas Pinto"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022937": {
  "cod": "2022937",
  "codigoSIA": "2022937",
  "nombre": "Línea de profundización ii en reproduccion animal",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "LAS LINEAS DE PROFUNDIZACION CONTENIDAS EN EL PLAN DE ESTUDIOS TIENEN EN CUENTA FUNDAMENTALMENTE LOS POSIBLES CAMPOS DE ACCION DEL PROFESIONAL LOS CUALES ESTAN DEFINIDOS POR LOS OBJETIVOS GENERALES DEL PROGRAMA. - HACIENDO UN RESUMEN DE LOS RECURSOS FISI",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022937)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Harvey Lozano Marquez",
       "Jorge Luis Zambrano Varon"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022941": {
  "cod": "2022941",
  "codigoSIA": "2022941",
  "nombre": "Linea de profundización i en medicina equina",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022941)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Olimpo Juan Oliver Espinosa"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022942": {
  "cod": "2022942",
  "codigoSIA": "2022942",
  "nombre": "Linea de profundización ii en medicina equina",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022942)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Olimpo Juan Oliver Espinosa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022945": {
  "cod": "2022945",
  "codigoSIA": "2022945",
  "nombre": "Línea de profundización ii en medicina y produccion porcina",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022945)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jose Dario Mogollon Galvis",
       "Gloria Amparo Casas Bedoya"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022946": {
  "cod": "2022946",
  "codigoSIA": "2022946",
  "nombre": "Linea de profundización i salud pública e infectología",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "SE ESPERA QUE AL FINALIZAR EL CURSO LAS Y LOS ESTUDIANTES ESTÉN EN CAPACIDAD DE:\n\n1. DEFINIR UNA PREGUNTA DE INVESTIGACIÓN\n2. REALIZAR UN ESTADO DEL ARTE SOBRE EL TEMA SELECCIONADO Y PRESENTARLO EN FORMA DE ARTÍCULO\n3. HACER UNA PRESENTACIÓN ORAL DEL TEMA",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022946)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Luis Joaquin Polo Teran",
       "Myriam Acero Aguilar"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022951": {
  "cod": "2022951",
  "codigoSIA": "2022951",
  "nombre": "Prácticas integradas reproduccion animal",
  "creditos": 20,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2022951)",
    "grupos": [
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Harvey Lozano Marquez"
      ],
      "facultad": "",
      "duracion": "Asignaturas semestrales con duración entre 17 y 20 semanas.",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "08:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Jorge Luis Zambrano Varon"
      ],
      "facultad": "",
      "duracion": "Asignaturas semestrales con duración entre 17 y 20 semanas.",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022952": {
  "cod": "2022952",
  "codigoSIA": "2022952",
  "nombre": "Prácticas integradas medicina aviar y produccion avicola",
  "creditos": 20,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "LAS LINEAS DE PROFUNDIZACION CONTENIDAS EN EL PLAN DE ESTUDIOS TIENEN EN CUENTA FUNDAMENTALMENTE LOS POSIBLES CAMPOS DE ACCION DEL PROFESIONAL LOS CUALES ESTAN DEFINIDOS POR LOS OBJETIVOS GENERALES DEL PROGRAMA. - HACIENDO UN RESUMEN DE LOS RECURSOS FISI",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2022952)",
    "grupos": [
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Arlen Patricia Gomez Ramirez"
      ],
      "facultad": "",
      "duracion": "Asignaturas semestrales con duración entre 17 y 20 semanas.",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "20:00",
        "fin": "21:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022953": {
  "cod": "2022953",
  "codigoSIA": "2022953",
  "nombre": "Prácticas integradas medicina de rumiantes",
  "creditos": 20,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2022953)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Olimpo Juan Oliver Espinosa"
      ],
      "facultad": "",
      "duracion": "Asignaturas semestrales con duración entre 17 y 20 semanas.",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Maria Alejandra Torres Medina"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022954": {
  "cod": "2022954",
  "codigoSIA": "2022954",
  "nombre": "Prácticas integradas en medicina equina",
  "creditos": 20,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2022954)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Olimpo Juan Oliver Espinosa"
      ],
      "facultad": "",
      "duracion": "Asignaturas semestrales con duración entre 17 y 20 semanas.",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": []
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Maria Alejandra Torres Medina"
      ],
      "facultad": "",
      "duracion": "Asignaturas semestrales con duración entre 17 y 20 semanas.",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "08:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022955": {
  "cod": "2022955",
  "codigoSIA": "2022955",
  "nombre": "Prácticas integradas medicina y cirugia de pequeños animales",
  "creditos": 20,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2022955)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Piero Ardani Vargas Pinto"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Asignaturas semestrales con duración entre 17 y 20 semanas.",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "22:00",
        "fin": "23:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Vladimir Galindo Zamora"
      ],
      "facultad": "",
      "duracion": "Asignaturas semestrales con duración entre 17 y 20 semanas.",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "12/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Henry Omar Meneses Martinez"
      ],
      "facultad": "",
      "duracion": "Asignaturas semestrales con duración entre 17 y 20 semanas.",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022956": {
  "cod": "2022956",
  "codigoSIA": "2022956",
  "nombre": "Prácticas integradas medicina y producción porcina",
  "creditos": 20,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2022956)",
    "grupos": [
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Gloria Amparo Casas Bedoya"
      ],
      "facultad": "",
      "duracion": "Asignaturas semestrales con duración entre 17 y 20 semanas.",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "08:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022957": {
  "cod": "2022957",
  "codigoSIA": "2022957",
  "nombre": "Prácticas integradas salud pública e infectología",
  "creditos": 20,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "SE ESPERA QUE AL FINALIZAR EL CURSO LAS Y LOS ESTUDIANTES ESTÉN EN CAPACIDAD DE:\n\n1. DEFINIR UNA PREGUNTA DE INVESTIGACIÓN\n2. REALIZAR UN ESTADO DEL ARTE SOBRE EL TEMA SELECCIONADO Y PRESENTARLO EN FORMA DE ARTÍCULO\n3. HACER UNA PRESENTACIÓN ORAL DEL TEMA",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2022957)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Myriam Acero Aguilar"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Asignaturas semestrales con duración entre 17 y 20 semanas.",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "21:00",
        "fin": "22:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Luis Joaquin Polo Teran"
      ],
      "facultad": "",
      "duracion": "Asignaturas semestrales con duración entre 17 y 20 semanas.",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Martha Cecilia Suarez Alfonso"
      ],
      "facultad": "",
      "duracion": "Asignaturas semestrales con duración entre 17 y 20 semanas.",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022958": {
  "cod": "2022958",
  "codigoSIA": "2022958",
  "nombre": "Prácticas integradas animales silvestres y de laboratorio",
  "creditos": 20,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2022958)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Claudia Isabel Brieva Rico"
      ],
      "facultad": "",
      "duracion": "Asignaturas semestrales con duración entre 17 y 20 semanas.",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "13:00",
        "fin": "14:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Sandra Milena Lamprea Maldonado"
      ],
      "facultad": "",
      "duracion": "Asignaturas semestrales con duración entre 17 y 20 semanas.",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "18:00",
        "fin": "19:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Carlos Alfonso Moreno Torres"
      ],
      "facultad": "",
      "duracion": "Asignaturas semestrales con duración entre 17 y 20 semanas.",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "06:00",
        "fin": "07:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "28/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022959": {
  "cod": "2022959",
  "codigoSIA": "2022959",
  "nombre": "Linea de profundización i en medicina de rumiantes",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022959)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Olimpo Juan Oliver Espinosa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022960": {
  "cod": "2022960",
  "codigoSIA": "2022960",
  "nombre": "Línea de profundización II en animales silvestres y de laboratorio",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022960)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Sandra Milena Lamprea Maldonado",
       "Claudia Isabel Brieva Rico"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022961": {
  "cod": "2022961",
  "codigoSIA": "2022961",
  "nombre": "LINEA DE PROFUNDIZACIÓN II SALUD PÚBLICA E INFECTOLOGÍAs",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "SE ESPERA QUE AL FINALIZAR EL CURSO LAS Y LOS ESTUDIANTES ESTÉN EN CAPACIDAD DE:\n\n1. DEFINIR UNA PREGUNTA DE INVESTIGACIÓN\n2. REALIZAR UN ESTADO DEL ARTE SOBRE EL TEMA SELECCIONADO Y PRESENTARLO EN FORMA DE ARTÍCULO\n3. HACER UNA PRESENTACIÓN ORAL DEL TEMA",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022961)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Luis Joaquin Polo Teran",
       "Myriam Acero Aguilar",
       "Jimmy Jolman Vargas Duarte"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2023216": {
  "cod": "2023216",
  "codigoSIA": "2023216",
  "nombre": "Introducción a la astronomía",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Estudio básico de la astronomía de posición, por tanto es necesario empezar por el estudio de la astronomía esférica para relacionar las direcciones cambiantes de los cuerpos celestes con sus posiciones sobre la superficie de la denominada esfera celeste",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2023216)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Eduard Alexis Larrañaga Rubio",
       "DAVID FELIPE BAMBAGUE SICHACA"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Eduard Alexis Larrañaga Rubio",
       "DAVID FELIPE BAMBAGUE SICHACA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023217": {
  "cod": "2023217",
  "codigoSIA": "2023217",
  "nombre": "Objetos astrofísicos",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Estudio básico de los objetos astrofísicos relevantes que se encuentran en el estudio del espacio profundo, tales como estrellas, nebulosas, cúmulos estelares (galácticos, globulares) y galaxias. Al final introduciremos algunos observables astrofísicos de",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2023217 (2023217)",
    "grupos": [
     {
      "grupo": "Grupo 01",
      "codigoGrupo": "1",
      "profesores": [
       "Benjamin Calvo Mozo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023218": {
  "cod": "2023218",
  "codigoSIA": "2023218",
  "nombre": "Mecánica celeste",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso constituye una introducción a los principios de la mecánica celeste clásica. El objetivo es visualizar la forma de resolver problemas dinámicos con fuerte inclinación hacia el movimiento de objetos que conforman el sistema solar. Hay un énfas",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2023218 (2023218)",
    "grupos": []
   }
  ]
 },
 "2023241": {
  "cod": "2023241",
  "codigoSIA": "2023241",
  "nombre": "Lengua y Cultura Wayuu I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El pueblo Wayuu, de ascendencia arawak. Localizado en la península de la Guajira. Históricamente, los españoles nunca lograron subyugar a este pueblo, que se mantuvo independiente, a pesar de haber sufrido el trabajo forzado en las explotaciones de bancos",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2023241)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Rafael Segundo Mercado Epieyu"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023243": {
  "cod": "2023243",
  "codigoSIA": "2023243",
  "nombre": "Uitoto II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso de Lengua Uitoto II es la continuación de la enseñanza impartida en el curso de Uitoto I. Se hace énfasis en los componentes lingüísticos, culturales y comunicativos. En este nivel, el estudio se sigue presentando a través de los pequeños textos",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2023243)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Norberto Farekatde Maribba"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA 112",
        "salon": "212-112",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA 112",
        "salon": "212-112",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Norberto Farekatde Maribba"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA 212",
        "salon": "212-212",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023504": {
  "cod": "2023504",
  "codigoSIA": "2023504",
  "nombre": "Neurobiologia y Fisiopatologia del Comportamiento Humano I",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Mediante un formato de \"\"Centro de Inter&egrave;s\"\" se negociar&agrave; con los participantes un temario alrededor del tema central (la neurobiolog&igrave;a del comportamiento humano) que pueda ser desarrollado a lo largo del semestre. Para el desarrollo de este temario se revi",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEÓRICA (2023504)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Manuel Joaquin Rojas Barreto",
       "Francisco Alejandro Munera Galarza",
       "Gabriel Castellanos Castañeda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "DEPARTAMENTO DE NUTRUCION HUMANA",
        "salon": "471-546",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023534": {
  "cod": "2023534",
  "codigoSIA": "2023534",
  "nombre": "Curso de Libre Elección VI",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": []
 },
 "2023912": {
  "cod": "2023912",
  "codigoSIA": "2023912",
  "nombre": "Cambio Cultural y Desarrollo Social",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El punto de partida del curso será \"\"la deshumanización del ser humano\"\" y cómo la antropologíia (y la arqueología), llamada en sus orígenes a contribuir en su supresión para lograr de nuevo la humanización, al reducirse a etnografía y centrar su preocupaci",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "BTA -01 - HELEN HENDERSO",
    "grupos": []
   }
  ]
 },
 "2023915": {
  "cod": "2023915",
  "codigoSIA": "2023915",
  "nombre": "El niño, sus síntomas y el inconsciente",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso recorrerá diversos aspectos relacionados con el niño. A partir de la significación de la infancia en la historia social y subjetiva, situaremos su función en el entramado inconsciente, reconociendo las complejidades que ello implica. Por esa vía pasaremos luego a relacionar al niño y al inconsciente con el campo de sus actividades para virar luego a la dinámica de los síntomas, para reconocerlos como mensajes cifrados de sufrimientos acallados y de goces desplegados. Ubicar al niño en su cotidianidad, en sus diversos encuentros con el Otro, en sus experiencias vitales con sus múltiples formas de expresión, permitirá enriquecer el análisis y contextualizar el campo de los síntomas.\n\nFreud se encontró con el niño en sus pacientes adultos. Al dejarlos hablar surgió su infancia y sus relaciones iniciales, tomando prioridad la vida infantil en la organización inconsciente. El sentido del psicoanálisis es el inconsciente y éste, lo sabemos, es siempre niño, infantil. El psicoanálisis inicialmente quedó proscrito para los niños y aunque Freud vislumbró la posibilidad de utilizarlo en el trabajo con pequeños, al animar al padre de Juanito en el tratamiento a su hijo, fueron otros quienes abrieron esa vía y formalizaron su conceptualización.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2023915)",
    "grupos": [
     {
      "grupo": "GRUPO 1 (2023915)",
      "codigoGrupo": "1",
      "profesores": [
       "Alvaro Daniel Reyes Gomez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "AULA 104",
        "salon": "212-104",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023919": {
  "cod": "2023919",
  "codigoSIA": "2023919",
  "nombre": "La clínica del caso",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La clínica es siempre un encuentro con lo particular. Pero esta particularidad no es transmisible como lo pueden ser otras experiencias clínicas, porque no logra constituirse en saber articulado sin disolver en el intento dicha particularidad. Esto tiene una sola razón: se trata de una experiencia caracterizada por el hecho de que hay un sujeto que toma la palabra.\nEn este sentido, lo particular es lo que sustenta el edificio teórico pero al mismo tiempo y fundamentalmente es lo que objeta, cuestiona, interroga, lo universal. Lo cual es cierto para las ciencias en general [Puede leerse esto en Thomas Khun, La estructura de las revoluciones científicas].\nTambién en el psicoanálisis, el caso, es decir cada caso, se erige como objeción e interrogante de la teoría. Puede leerse esto al revisar los llamados Cinco grandes casos de Sigmund Freud (por algo se dice a veces que son cinco grandes fra-casos, aun cuando esto se afirme las más de las veces cuando se quiere salir rápido del molesto psicoanálisis sin conocerlo. Esto tiene que ver entonces con que cada uno de dichos casos se opone en un punto al menos a servir de ejemplo, a convertirse en el de mostrar y en la demostración.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2023919)",
    "grupos": [
     {
      "grupo": "Grupo 1 - 2023919",
      "codigoGrupo": "1",
      "profesores": [
       "Alvaro Daniel Reyes Gomez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "AULA 104",
        "salon": "212-104",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2024008": {
  "cod": "2024008",
  "codigoSIA": "2024008",
  "nombre": "Psicoanálisis, sujeto y problemáticas",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El objetivo de esta asignatura es plantear un acercamiento a la articulación entre: Psicoanálisis, Sujeto, y problemáticas contemporáneas, partiendo de la lectura del concepto freudiano-lacaniano de goce, y su posible relación con lo que el mismo Lacan desarrollaría posteriormente con respecto a la formalización de su teoría de los discursos. La hipótesis, se centra, en la idea de que el cambio de un discurso a otro, implica, entre tantos otros aspectos, un viraje en el tratamiento del goce.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2024008)",
    "grupos": []
   }
  ]
 },
 "2024124": {
  "cod": "2024124",
  "codigoSIA": "2024124",
  "nombre": "Sensibilidad y pensamiento cinematografico",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El propósito es estudiar las relaciones de fondo existentes entre la reflexión, la crítica y la teoría cinematográficas con la creación, partiendo de planteamientos hechos por una serie de autores-directores, críticos y teóricos. Se analizarán estos plant",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2024124)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Juan Diego Antonio Pablo Caicedo Gonzalez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 130,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "AUDITORIO 2",
        "salon": "303C-422",
        "edificio": "303 - EDIFICIO DE LAS ARTES SEDE BOGOTA",
        "desde": "26/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2024149": {
  "cod": "2024149",
  "codigoSIA": "2024149",
  "nombre": "Bioinvasiones",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Las especies exóticas o invasoras, son especies introducidas en un hábitat no nativo como resultado de las actividades humanas.\nAlgunas de las especies exóticas se establecen en el nuevo ambiente y pueden causar cambios mayores en el ecosistema y su funcionamiento. Las especies exóticas son ahora consideradas la segunda amenaza más grave, después la destrucción de hábitat, a la biodiversidad.\nEste curso está basado en clases magistrales, dictadas por los docentes, y lecturas y revisión de temas relacionados por parte de los estudiantes, y fomentará en los estudiantes la investigación crítica sobre los aspectos ecológicos relacionados a las especies invasoras, incluyendo:\n1. Que son las especies invasoras\n2. Factores que influencian el proceso de invasión\n3. Vectores de invasión en ambientes terrestres y acuáticos\n4. Los impactos económicos y ecológicos de las invasiones biológicas\nEsto se logrará con discusiones de publicaciones selectas que enfatizan los aspectos ecológicos de las invasiones biológicas.\n\nLos objetivos de la asignatura son:\n1. Familiarizar al estudiante con el problema de las bioinvasiones\n2. Analizar los diferentes mecanismos de dispersión de las especies invasoras\n3. Analizar las características de las especies invasoras y de los hábitats que pueden facilitar una invasión.\n4. Sensibilizar los estudiantes en el tema de las bioinvasiones como problema de conservación de la biodiversidad.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2024149 (2024149)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Swanni Tatiana Alvarado Romero",
       "Brigitte Gavio ",
       "Carlos Eduardo Sarmiento Monroy"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "AULA TEORICA",
        "salon": "421-142B",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2024221": {
  "cod": "2024221",
  "codigoSIA": "2024221",
  "nombre": "Nasa yuwe y pensamiento nasa",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "\"¿ Abordar las reglas básicas que tiene el nasa yuwe a fin de lograr un nivel básico para el diálogo.\n\n¿ Desarrollar un nivel básico de las competencias comunicativas básicas como: los saludos, descripción familiar y expresiones del espacio.\n\n¿ Comprender la importancia que tiene el nasa yuwe para el pueblo nasa en su propósito por fortalecerlo y recuperarlo.\n\n¿ Conocer los principales elementos que forman parte de la cosmovisión y cosmogonía del pueblo nasa a través de su lengua.\n\"",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2024221)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "ISAAC QUILCUE PUMBA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "AULA 406",
        "salon": "212-406",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2024279": {
  "cod": "2024279",
  "codigoSIA": "2024279",
  "nombre": "Agujeros negros y maquinas del tiempo",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "\"Puede verse un agujero negro? Si se puede, como luce un agujero negro? Acaso es negro? Que se siente caer a un agujero negro? Que es un agujero de gusano? Es posible construir una maquina paraviajar en el tiempo? El curso ¿Agujeros Negros Maquinas dell Tiempo¿ permite contestar a estas y otras preguntas utilizando calculo elemental.\nA lo largo de este curso se presenta una imagen física y astronómica (pero casi sin matemáticas) de los trabajos de Relatividad de Einstein y sus aplicaciones a los agujeros negros, los agujeros de gusano y el viaje en el tiempo.\nDos objetivos principales se buscan con esta asignatura: primero, el desmistificar los agujeros negros y la naturaleza del espacio-tiempo, con el fin de que el estudiante evalúe críticamente la referencias frecuentes que se realizan acerca de estos conceptos en los medios audiovisuales y en la literatura de ciencia ficción. Segundo, se pretende dar al estudiante un vistazo a la forma en la que se conciben y desarrollan las teorías científicas.\n\"",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2024279)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Eduard Alexis Larrañaga Rubio"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2024401": {
  "cod": "2024401",
  "codigoSIA": "2024401",
  "nombre": "LE FILOSOFIA MODERNA",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El propósito de esta asignatura es acercar al estudiante al conocimiento del autor o un tema, sus desarrollos y teorías y la forma en la cual inciden en la reflexión filosófica. El curso podrá enfocarse en aspectos puntuales, en obras específicas, en temas particulares o en el detalle de discusiones sostenidas del autor en cuestión con otros autores, o de varios autores con relación al tema de estudio. En general, el profesor estará a cargo de la exposición de los temas, pero otras metodologías serán introducidas dependiendo de los objetivos que se proponga el profesor. El desarrollo del curso provee al estudiante de un conocimiento de primera mano del autor o tema del curso.Los estudiantes recibirán el programa específico de la asignatura al inicio del semestre.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2024401)",
    "grupos": []
   }
  ]
 },
 "2024461": {
  "cod": "2024461",
  "codigoSIA": "2024461",
  "nombre": "Situación del derecho a la seguridad alimentaria y nutricional en Colombia",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El análisis de la Seguridad Alimentaria y Nutricional, evolucionó desde el componente alimentario que comprendía la disponibilidad y el acceso de alimentos a una visión compleja de la SAN que incorpora el consumo, aprovechamiento biológico y la calidad e inocuidad de los alimentos actuando de manera sinérgica con factores económicos, sociales, culturales y del ambiente. Las Encuestas Nacionales de Demografía y Salud, ENDS, al igual que la Encuesta Nacional de Situación Nutricional, ENSIN, han logrado mostrar al país los diferenciales en SAN presentes en razón del área geográfica ocupada, la situación a nivel regional y/o departamental, el nivel educativo y de riqueza y la pertenencia étnica. Hoy, el concepto de Seguridad Alimentaria y Nutricional incorpora el enfoque de derechos puesto que parte de la ¿Declaración Universal de los Derechos Humanos¿(1948), donde se suscribe el derecho al alimento como eje central del bienestar humano y da cuenta de complejidades y nuevas dimensiones de la SAN (ambiental y humana).\nPor tanto, el curso aborda la conceptualización del enfoque de derechos, la seguridad alimentaria y nutricional, el sistema agroalimentario, sus componentes y los factores determinantes, las problemáticas que afectan cada componente y sus potencialidades, el desarrollo de la agroindustria, la relación con el ambiente, y otros aspectos que permiten comprender la permanente relación entre desarrollo, ambiente, agricultura y seguridad alimentaria y nutricional desde un enfoque sistémico. El conjunto de estos elementos permitirá adquirir habilidades para la reflexión y análisis del derecho a la seguridad alimentaria y nutricional en Colombia.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2024461)",
    "grupos": []
   }
  ]
 },
 "2024464": {
  "cod": "2024464",
  "codigoSIA": "2024464",
  "nombre": "Sistemas Silvipastoriles",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "En las últimas décadas, el deterioro de la base de re cursos naturales en las áreas de ladera y en el trópico húmedo del continente americano, evidencia los efectos del crecimiento de la población, del incremento de la deuda externa, de la disminución de la productividad per capita en la mayoría de actividades agropecua rias y de la migración de las familias rurales e incluso ur banas con dificultades económicas.Esta pre sión por am pliar la frontera agrícola y elevar la producción de alimentos para una población creciente ha traído como consecuencia aumentos en la tasa de defores tación, en el uso de agroquímicos, en la erosión de los suelos, en el deterioro de las cuencas y fuentes de agua y en la emisión de los gases asociados al calentamiento global Explicar y aplicar los conocimientos teórico prácticos sobre los sistemas de producción silvipasto riles; su relación con los demás sistemas productivos de la finca con los cultivos anuales y perennes; con la conserva ción de los recursos, bajo los principios de la competi vidad y la sostenibilidad de los agroecosistemasAdemás el estu diante debe des cribir y analizar los aspectos naturales y sociales re levantes de un área; conocer las pautas para el diseño de los sistemas silvipastori les, con el propósito de diagnosticar e identificar los sistemas de producción existentes y por medio de su aná lisis, si el uso de es tos sistemas productivos es el más conveniente diseñar y recomendar los más apropia dos.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA(2024464)",
    "grupos": []
   }
  ]
 },
 "2024476": {
  "cod": "2024476",
  "codigoSIA": "2024476",
  "nombre": "SEXUALIDAD HUMANA",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "\"Asignatura teórica que estudia la sexualidad como proceso integral, donde interactúan aspectos biológicos, psicológicos y sociales.\nComprende varias unidades que parten de una visión general de la Sexualidad Humana, e incluyen aspectos relacionados con desarrollo de comportamiento sexual, roles, anatomía, fisiología de los órganos sexuales y reproductivos, respuesta sexual y sus alteraciones, orientación sexual, variabilidad de la conducta sexual, participación de enfermería en sexualidad a nivel preventivo, algunos problemas sociales relacionados con la vivencia de la sexualidad.\nOBJETIVO GENERAL:Facilitar el conocimiento de la propia sexualidad y favorecer una actitud comprensiva y responsable frente a la propia sexualidad y a la de los demás.\nOBJETIVOS ESPECIFICOS.\n1. Incrementar la información y conocimientos de la sexualidad\n2. Reconocer los conocimientos aprendidos en las diferentes etapas del desarrollo\n3. Reforzar actitudes positivas que favorecen la salud sexual y mental\n5. Adoptar actitudes de respeto, comprensión y aceptación, que faciliten la comunicación de problemas sexuales.\nLa metodología se orienta básicamente, a favorecer el análisis de las actitudes y sentimientos de los estudiantes ante su propia sexualidad y a clarificar los valores que generan a fin de que la sexualidad pueda ser disfrutada responsablemente\n\n\"",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2024476)",
    "grupos": []
   }
  ]
 },
 "2024990": {
  "cod": "2024990",
  "codigoSIA": "2024990",
  "nombre": "El sida como realidad del proceso vital humano",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta propuesta de curso de contexto tiene como objetivo aportar elementos que contribuyan a la comprensión de la infección VIH con motivo de cumplirse el aniversario número treinta de su aparición en el planeta y colaborar con la disminución de su incidencia formando a los jóvenes universitarios como multiplicadores de la propuesta. Se realiza de acuerdo a: Concepciones epistemológicas temáticas, metodológicas y didácticas; Análisis epidemiológico del contexto internacional, nacional y local en relación con el VIH/SIDA; Políticas de salud sexual y reproductiva; Políticas educativas con énfasis pedagógicos y Características de los jóvenes (intereses, necesidades y expectativas). Los ejes temáticos que conducen el curso son: la epidemiología (clásica, clínica y crítica); las teorías de género y las posturas pedagógicas que integran elementos de auto y heteroestructuración con la educación popular de origen latinoamericano. Se estructura como un curso de contexto de 15 sesiones de tres horas cada una y seis de trabajo autónomo semanal. Los temas son: Orígenes y evolución del VIH/SIDA; aspectos epidemiológicos; fisiopatología; identidades masculinas y femeninas; juventud y vulnerabilidad frente al VIH/SIDA; anticipación social del riesgo; estrategias de prevención; mujer y VIH/SIDA; interacción social con personas viviendo con VIH/SIDA, respuesta social frente a la epidemia, perspectivas futurasy escenarios de la epidemia de cara a las próximas décadas.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": []
 },
 "2024994": {
  "cod": "2024994",
  "codigoSIA": "2024994",
  "nombre": "Nanotecnología y Medicina",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura pretende mostrar una visión del impacto que tiene la nanotecnología en el diagnóstico y tratamiento médico. Los objetivos específicos son: 1. Introducir a los estudiantes en los fundamentos básicos que explican las propiedades de los nanomateriales. 2. Presentar una visión de conjunto sobre el impacto de la nanotecnología a nivel científico, tecnológico, ambiental, social, cultural, etc. 3. Dar una visión general de los tipos de nanodispositivos 4. Mostrar las aplicaciones de la nanotecnología en el diagnóstico y tratamiento médico. 5. Conocer los avances más relevantes de la nanomedicina (cáncer, nanomateriales, administración de medicamentos) . 6. Realizar la lectura, presentación y discusión crítica de un artículo científico. Se desarrollará mediante la realización de sesiones de cineforo, conferencias, conversatorios y clubes de revistas en donde un estudiante presentará un artículo científico y posteriormente se realizará una discusión acerca del mismo en la que participaran todos los estudiantes.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica 82024994)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Aleida Dianey Clavijo Grimaldo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2024999": {
  "cod": "2024999",
  "codigoSIA": "2024999",
  "nombre": "Fiestas populares, carnaval, sociedad y arte",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta asignatura busca la interacción entre la comunidad universitaria, y la representación cultural y tradiciones propias de las distintas regiones del país, en las cuales la alegría del pueblo colombiano se percibe en sus fiestas, ferias, carnavales y festivales culturales. Por ende se pretende abordar desde la academia la historia culrural tradicional que aun pervive y busca crear conciencia sobre el patrimonio inmaterial representado en las actividades culturales y tradicionales propias de cada región de nuestro país, teniendo como base principal la diversidad cultural y rituales carnavalescos existentes, ademas permite ¿ Fortalecer la identidad de país desde los aportes de la academia, la práctica cultural, la sana critica y la participación de los protagonistas de estos carnavales o rituales, siempre evocando sus raíces propias de cada región.\n¿ Permitir muestras artísticas propias de cada región y/o festividad de nuestro país en los espacios físicos y académicos de la Universidad Nacional.\n¿ Lograr la conexión en red entre la comunidad universitaria y las distintas entidades o personas comprometidas con el fortalecimiento de estas prácticas culturales.\n¿ Incentivar la participación constante de la academia en el análisis, fortalecimiento y rescate de cada uno de los carnavales objeto de la cátedra.\n¿ Abordar todos los ejes temáticos enfocados en la historia, transformación y pervivencia de los elementos esenciales en cada uno de las festividades y carnavales representativos en nuestro país.\n¿ Enmarcar las influencias extranjeras en el desarrollo y proyección de los carnavales desde sus orígenes hasta nuestros días.\n¿ Incentivar la participación de los diferentes estamentos universitarios en el CARNAVAL UN 2011",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2024999)",
    "grupos": []
   }
  ]
 },
 "2025053": {
  "cod": "2025053",
  "codigoSIA": "2025053",
  "nombre": "Introducción a la cultura coreana",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Sinopsis de la clase\nCorea es un país representativo del Este Asia, con una larga historia y tradiciones ancestrales. Comenzando por el Paleolítico que comenzo hace 700 mil años, y atravesando el Neolítico y la Edad del Bronce, el pueblo coreano fundó una Nación en la Peninsula Coreana y en Manchuria(noroeste de China), haciendo florecer su cultura única hasta el día de hoy. A través de este curso, trataremos la parte de la cultura coreana.\n\nSitio web referencial\nhttp://www.ikorea.ac.kr/\n\nEvaluaciones:\n*Examen medio (30%)\n*Examen final (40%)\n*Asistencia (30%)",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2025053 (2025053)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 207",
        "salon": "225-207",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA 104",
        "salon": "212-104",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2025063": {
  "cod": "2025063",
  "codigoSIA": "2025063",
  "nombre": "Introducción al viaje espacial",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso Brinda al estudiante un adecuado acercamiento hacia diversidad de aspectos relacionados con la tecnología astronáutica, en particular hacia el desarrollo histórico y los conceptos básicos en física y matemáticas que ayuden a entender el estado actual de desarrollo en ese campo. Se expondrán conceptos básicos de mecánica orbital y de propulsión, a uni nivel en el que se pueda llegar a un mayor número de estudiantes pero sin perder el concepto básico que hay detrás. Estarán invitados algunos conferencistas que han trabajado en distintos tópicos relacionados y se hará uso de recursos extensivos multimedia.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025063)",
    "grupos": []
   }
  ]
 },
 "2025336": {
  "cod": "2025336",
  "codigoSIA": "2025336",
  "nombre": "Electiva en lengua Coreana I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Sinopsis de la clase\nCon la globalización, el mundo se hace más pequeño. En esta época tan rápido, de intercambio de información, tecnología y cultura el entendimiento mutuo entre los países se vuelve crucial para la sobrevivencia en la comunidad internacional. El coreano ha llegado a ser una lengua más que requiere la comunidad internacional. El papel de Corea se extiende más en el foro de la política internacional, la economía internacional y la cultura, de tal manera que la necesidad del coreano ha crecido notablemente. Este curso es bueno para el estudiante que va a empezar el estudio del coreano por primera vez.\n\nLibro didáctico New -1A, 2012 (Sogang Korean New Series 1A)\n\nEvaluaciones:*Examen medio (30%)\n*Examen final (30%)\n*Escritura 1,2 (20%)\n*Asistencia (20%)",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025336)",
    "grupos": [
     {
      "grupo": "Grupo 2 - Clase Presencial",
      "codigoGrupo": "2",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA 112",
        "salon": "212-112",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON 102",
        "salon": "225-102",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2025406": {
  "cod": "2025406",
  "codigoSIA": "2025406",
  "nombre": "Apreciación e historia del arte",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso tiene como objeto ofrecer al estudiante un panorama introductorio del arte occidental. En cada sesión y a partir de la interpretación de una o varias obras paradigmáticas del canon del arte occidental, el estudiante tendrá la oportunidad de entrar en contacto con los principales elementos formales y valores estéticos de los diferentes períodos históricos y movimientos artísticos en el ámbito europeo y americano. La discusión se centrará en el por qué, el cómo y el cuando la pintura, escultura, video-arte, etc., al igual que la arquitectura, la fotografia, el cine y la cultura material adquireron y conservaron el estatus de obra artística, al igual que motivaron la toma de posturas y discusiones estéticas aún vigentes,",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025406)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Joanita Jimena Barbosa Gomez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2025419": {
  "cod": "2025419",
  "codigoSIA": "2025419",
  "nombre": "Resistencia a insecticidas",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La resistencia a insecticidas es una limitante importante en el manejo integrado de insectos de interés económico. Esta aparece por factores genéticos, biológico/ecológicos y operacionales. El conocimiento del tipo de moléculas, modo de acción, mecanismos de resistencia, vigilancia de la resistencia a insecticidas en poblaciones naturales, entre otros, son aspectos fundamentales para el control de insectos. Esta asignatura se propone como complementaria a \"Genética de Insectos de Interes Económico\" y a las básicas del plan de Ingeniería Agronómica como son Manejo Integrado e Plagas y Ciclo II: Ejecución de un proyecto productivo. Este curso es fundamental para un uso racional de insecticidas en el contexto de las buenas prácticas agrícolas y la mitigación de su impacto en el ambiente. La asignatura puede ser tomada por estudiantes de biología, veterinaria y otras áreas afines. La asignatura es teórica enfocada a definir conceptos enmarcados en estudios de caso a través de la revisión de literatura (Revistas científicas indexadas), seminarios, talleres, etc.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA(202419)",
    "grupos": []
   }
  ]
 },
 "2025433": {
  "cod": "2025433",
  "codigoSIA": "2025433",
  "nombre": "Fisiología animal de sistemas",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso le brinda al estudiante la oportunidad de consolidar bases de Física, Química, Bioquímica y Biología Celular y aplicarlas al entendimiento de los mecanismos funcionales en los distintos sistemas biológicos. El estudiante tendrá la oportunidad de aprender a nivel celular acerca del funcionamiento de órganos y sistemas.. Se familiarizará con la fisiología cardiovascular, respiratoria, renal, con los sistemas hormonales y las bases del comportamiento animal. Habrá sesiones de laboratorio en las cuales estos conceptos podrán ser aplicados al análisis de los principios y mecanismos fisiológicos básicos, así como a las estrategias que han desarrollado los animales, dentro de los límites químicos y las posibilidades físicas, para adaptarse al medio ambiente. A través del método científico se le orienta y facilitan herramientas para plantear y resolver algunos problemas biológicos. La asignatura exige la preparación de un capítulo del libro de texto guía que deberá estudiar, junto con la lectura de al menos un manuscrito científico sobre cada uno de los temas revisados y la preparación de notas de clase, guía de laboratorio y manuscrito científico del laboratorio que exigen por parte del estudiante muchas horas de preparación.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2025433)",
    "grupos": []
   }
  ]
 },
 "2025434": {
  "cod": "2025434",
  "codigoSIA": "2025434",
  "nombre": "Mastozoología general",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Proporcionar los conocimientos básicos acerca de la evolución y biogeografía de mamíferos.\n Proporcionar los conocimientos básicos de la taxonomía, sistemática, distribución y biología de los mamíferos colombianos.\n Proporcionar al estudiante los conocimientos teóricos y prácticos básicos para el trabajo en campo con mamíferos.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025434)",
    "grupos": []
   }
  ]
 },
 "2025571": {
  "cod": "2025571",
  "codigoSIA": "2025571",
  "nombre": "Línea de profundizacion 1: Cirugía de grandes animales",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Desde hace muchos años la práctica de la cirugía de grandes animales ha venido tomando importancia, sin que en nuestra facultad se haya logrado darle el impulso debido, es por eso que esta línea busca desarrollar en los estudiantes las habilidades para afrontar los retos quirúrgicos a los que se verán expuestos en su práctica profesional. El curso está basado en resolver las inquietudes que tengan los participantes sobre las diferentes técnicas quirúrgicas aplicables a los bovinos, equinos, ovinos y caprinos",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2025571 (2025571)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Maria Alejandra Torres Medina"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2025572": {
  "cod": "2025572",
  "codigoSIA": "2025572",
  "nombre": "Línea de profundización 2: Cirugía de grandes animales",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Desde hace muchos años la práctica de la cirugía de grandes animales ha venido tomando importancia,sin que en nuestra facultad se halla logrado darle el impulso debido, es por eso que esta línea busca desarrollar en los estudiantes las habilidades para afrontar los retos quirúrgicos a los que se veran expuestos en su práctica profesional. El curso está basado en resolver las inquietudes que tengan los participantes sobre las diferentes técnicas quirúrgicas aplicables a los bovinos, equinos,ovinos y caprinos",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2025572 (2025572)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Maria Alejandra Torres Medina"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2025665": {
  "cod": "2025665",
  "codigoSIA": "2025665",
  "nombre": "Pensamiento fotográfico",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El seminario se propone analizar algunos textos críticos sobre fotografía, antropología y sociología contemporánea, que le ayuden al estudiante a entender la fotografía como una herramienta reflexiva en el mundo de hoy. El estudiante vinculará sus vivencias con la teoría y la historia partir de tres álbumes: familiar, de recorridos y colectivo.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025665)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Natalia Gutierrez Echeverry"
      ],
      "facultad": "FACULTAD DE ARTES",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALON 205 EDIFICIO SINDU",
        "salon": "314-205",
        "edificio": "314 - CINVA",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2025675": {
  "cod": "2025675",
  "codigoSIA": "2025675",
  "nombre": "Línea de profundización en patología veterinaria I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Entrenar a los asistentes en el campo de la etiología, patogénesis, descripción de cambios macroscópicos, planteamiento de diagnósticos: morfológicos. resaltar la importancia de la adecuada utilización de los laboratorios diagnósticos para solucionar problemas sanitarios en animales.\nActualizar los conocimientos y experiencia en la descripción de lesiones, formulación de diagnósticos morfológicos concisos y precisos, posibles diagnósticos diferenciales y el etiológico más probable.\nActualizar los conocimientos y experiencia para utilizar la terminología correcta relacionada con los hallazgos macroscópicos de a necropsia.\nActualizar los conocimientos y experiencia para la presentación de informes de patología (necropsia), toma de fotos de lesiones.\nActualizar los conocimientos y experiencia para identificar las patologías más prevalentes en especies nativas y exóticas trabajadas en nuestro país (que muestras se deben enviar y a que laboratorios).",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2025675 (2025675)",
    "grupos": []
   }
  ]
 },
 "2025676": {
  "cod": "2025676",
  "codigoSIA": "2025676",
  "nombre": "Línea de profundización en patología veterinaria II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Entrenar a los asistentes en el campo de la etiología, patogénesis, descripción de cambios macroscópicos, planteamiento de diagnósticos: morfológicos. resaltar la importancia de la adecuada utilización de los laboratorios diagnósticos para solucionar problemas sanitarios en animales.\nActualizar los conocimientos y experiencia en la descripción de lesiones, formulación de diagnósticos morfológicos concisos y precisos, posibles diagnósticos diferenciales y el etiológico más probable.\nActualizar los conocimientos y experiencia para utilizar la terminología correcta relacionada con los hallazgos macroscópicos de a necropsia.\nActualizar los conocimientos y experiencia para la presentación de informes de patología (necropsia), toma de fotos de lesiones.\nActualizar los conocimientos y experiencia para identificar las patologías más prevalentes en especies nativas y exóticas trabajadas en nuestro país (que muestras se deben enviar y a que laboratorios).",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025676)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2025691": {
  "cod": "2025691",
  "codigoSIA": "2025691",
  "nombre": "Recursos genéticos: aspectos técnicos y jurídicos",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Los desarrollos científicos y tecnológicos contemporáneos, particularmente en las ciencias biológicas plantean nuevos retos para el análisis y comprensión de procesos que afectan la organización de la vida natural, las nociones básicas de propiedad, contratos, los derechos esenciales de las personas y en general la organización social. Las tecnologías actuales de intervención sobre la materia viva han convertido la biodiversidad y el conocimiento asociado en un insumo de primer orden para el desarrollo de numerosos compuestos utilizados en diferentes procesos por las industrias farmacéuticas y alimentarias.\nLa riqueza biológica y cultural de Colombia impone estudiar detenidamente las instituciones y mecanismos de protección, al igual que examinar los mecanismos de distribución y administración de beneficios de manera que su utilización sostenible redunde en un mayor bienestar social.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025691)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Oscar Andres Lizarazo Cortes"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "10:00",
        "fin": "13:00",
        "lugar": "AUDITORIO 101",
        "salon": "610-101",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2025814": {
  "cod": "2025814",
  "codigoSIA": "2025814",
  "nombre": "Electiva en lengua Coreana II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se recomienda haber cursado la asignatura \"Electiva en lengua Coreana I - 2025336\" o tener bases de lenguaje coreano, ya que la presente asignatura se ofrece para afianzar los conocimientos en esta lengua.\n\nLa asignatura Coreano Elemental presenta los aspectos básicos de la conversación y la gramática del lenguaje coreano, está orientada a los estudiantes que desean aumentar sus conocimientos en este idioma. Con este curso se espera que el estudiante adquiera las competencias y herramientas lingüísticas sobre el idioma para desenvolverese en espacios y situaciones cotidianas.\n\nA tráves de esta asignatura, se abordarán temas que permitan al estudiante expresarse haciendo uso del tiempo futuro, expresar sus deseos y voluntades, generar sugerencias y proposiciones, entre otras cosas.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025814)",
    "grupos": [
     {
      "grupo": "Electiva en Lengua Coreana II",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 205",
        "salon": "225-205",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2025976": {
  "cod": "2025976",
  "codigoSIA": "2025976",
  "nombre": "Desarrollo de la ingeniería en Colombia",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Para los estudiantes de la Universidad Nacional - y en especial para los estudiantes de la Facultad de Ingeniería - es muy importante tener un panorama histórico de lo que ha sido el desarrollo de la tecnología y de la ingeniería en el mundo y dentro de él ubicar el desarrollo que han tenido la ingeniería y la tecnología en nuestro país. Este curso presenta la Historia de la Tecnología y de la Ingeniería de una forma general y sucinta a estudiantes en los cuales no se presupone ninguna formación de nivel universitario anterior. Se busca que a través de lecturas, discusiones, trabajos escritos, exposiciones y asistencia a conferencias  acerca de lo que ha sido la Historia de la Tecnología y la Ingeniería - el estudiante clarifique sus conceptos con respecto a lo que son ciencia, tecnología e ingeniería, en un contexto general y particularmente en el contexto nacional. Esta clarificación irá pareja con una ampliación y estructuración de su conocimiento sobre la historia del desarrollo social, económico, cultural y político de Colombia, vista desde el desarrollo de la tecnología. Se hará un especial énfasis en el proceso de conformación del conocimiento en ingeniería en el país, especialmente a través de los primeros 150 años de historia de la Facultad de Ingeniería de la Universidad Nacional en Bogotá.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025976)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Antonio Jose Mejia Umaña"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 24,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-305",
        "salon": "454-305",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-305",
        "salon": "454-305",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2025981": {
  "cod": "2025981",
  "codigoSIA": "2025981",
  "nombre": "Introducción a la cultura contemporánea de alemania",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso ofrece una introducción a la cultura contemporánea alemana. Se presentan debates actuales de la cultura (literatura, cine, arte, etc.), de la política y de la vida social en Alemania. Se enfocan los importantes temas de la actualidad que se presentan en las discusiones públicas en cultura, política y medios alemanes.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025981)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Introducción a la cultura Contemporanea Alemana",
      "codigoGrupo": "1",
      "profesores": [
       "Mathias Diederich "
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": []
     },
     {
      "grupo": "Grupo 2 - Introducción a la cultura Contemporanea Alemana",
      "codigoGrupo": "2",
      "profesores": [
       "Mathias Diederich "
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2025997": {
  "cod": "2025997",
  "codigoSIA": "2025997",
  "nombre": "Filosofía contemporánea II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El propósito de esta asignatura es acercar al estudiante al conocimiento del autor o un tema, sus desarrollos y teorías y la forma en la cual inciden en la reflexión filosófica. El curso podrá enfocarse en aspectos puntuales, en obras específicas, en temas particulares o en el detalle de discusiones sostenidas del autor en cuestión con otros autores, o de varios autores con relación al tema de estudio. En general, el profesor estará a cargo de la exposición de los temas, pero otras metodologías serán introducidas dependiendo de los objetivos que se proponga el profesor. El desarrollo del curso provee al estudiante de un conocimiento de primera mano del autor o tema del curso.Los estudiantes recibirán el programa específico de la asignatura al inicio del semestre.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025997)",
    "grupos": []
   }
  ]
 },
 "2025999": {
  "cod": "2025999",
  "codigoSIA": "2025999",
  "nombre": "Filosofía contemporánea I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La filosofía de la mente es una de las líneas principales en la filosofía contemporánea, alrededor de ésta se han dado diversas discusiones en torno a su comprensión y estudio. En el curso se presentarán debates respecto del tema, con especial atención al fenómeno de la conciencia, teniendo en consideración algunas de las propuestas y críticas por tarde de dos ramas representativas de la filosofía contemporánea: postura analítica y fenomenológica. Se presentará inicialmente teorías de la ciencia cognitiva (conductismo lógico, reduccionismo, computacionalismo, monismo anómalo, emergentismo, etc), y se mostrarán algunas razones por las cualespartidarios de una fenomenología de corte husserliana consideran que el tratamiento tradicional dado al fenómeno de la conciencia no es satisfactoria, resaltando la importancia de una conciencia subjetiva, corporizada y animada.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025999)",
    "grupos": []
   }
  ]
 },
 "2026000": {
  "cod": "2026000",
  "codigoSIA": "2026000",
  "nombre": "Filosofía antigua II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El propósito de esta asignatura es acercar al estudiante al conocimiento del autor o un tema, sus desarrollos y teorías y la forma en la cual inciden en la reflexión filosófica. El curso podrá enfocarse en aspectos puntuales, en obras específicas, en temas particulares o en el detalle de discusiones sostenidas del autor en cuestión con otros autores, o de varios autores con relación al tema de estudio. En general, el profesor estará a cargo de la exposición de los temas, pero otras metodologías serán introducidas dependiendo de los objetivos que se proponga el profesor. El desarrollo del curso provee al estudiante de un conocimiento de primera mano del autor o tema del curso.Los estudiantes recibirán el programa específico de la asignatura al inicio del semestre.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026000)",
    "grupos": []
   }
  ]
 },
 "2026001": {
  "cod": "2026001",
  "codigoSIA": "2026001",
  "nombre": "Filosofía moderna I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El propósito de esta asignatura es acercar al estudiante al conocimiento del autor o un tema, sus desarrollos y teorías y la forma en la cual inciden en la reflexión filosófica. El curso podrá enfocarse en aspectos puntuales, en obras específicas, en temas particulares o en el detalle de discusiones sostenidas del autor en cuestión con otros autores, o de varios autores con relación al tema de estudio. En general, el profesor estará a cargo de la exposición de los temas, pero otras metodologías serán introducidas dependiendo de los objetivos que se proponga el profesor. El desarrollo del curso provee al estudiante de un conocimiento de primera mano del autor o tema del curso.Los estudiantes recibirán el programa específico de la asignatura al inicio del semestre.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026001)",
    "grupos": []
   }
  ]
 },
 "2026002": {
  "cod": "2026002",
  "codigoSIA": "2026002",
  "nombre": "Filosofía moderna II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El propósito de esta asignatura es acercar al estudiante al conocimiento del autor o un tema, sus desarrollos y teorías y la forma en la cual inciden en la reflexión filosófica. El curso podrá enfocarse en aspectos puntuales, en obras específicas, en temas particulares o en el detalle de discusiones sostenidas del autor en cuestión con otros autores, o de varios autores con relación al tema de estudio. En general, el profesor estará a cargo de la exposición de los temas, pero otras metodologías serán introducidas dependiendo de los objetivos que se proponga el profesor. El desarrollo del curso provee al estudiante de un conocimiento de primera mano del autor o tema del curso.Los estudiantes recibirán el programa específico de la asignatura al inicio del semestre.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026002)",
    "grupos": []
   }
  ]
 },
 "2026032": {
  "cod": "2026032",
  "codigoSIA": "2026032",
  "nombre": "Linea de profundización I en cirugía de pequeños animales",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Desde hace ya varias décadas, en pequeños animales se ha generado un gran cuerpo de conocimiento que ha impulsado a los médicos veterinarios que se dedican a esta especialidad a buscar un grado aún mayor de subespecialización. Así, esta asignatura busca profundizar en el conocimiento específico de la cirugía en pequeños animales, y satisfacer parcialmente una necesidad de algunos de nuestros futuros egresado.\n\nConceptos Previos\nEl estudiante debe haber cursado y aprobado las asignaturas Cirugía I y II, así como la asignatura Medicina Interna de Pequeños Animales.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026032)",
    "grupos": [
     {
      "grupo": "Grupo",
      "codigoGrupo": "1",
      "profesores": [
       "Vladimir Galindo Zamora"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2026035": {
  "cod": "2026035",
  "codigoSIA": "2026035",
  "nombre": "Linea de profundización II en cirugía de pequeños animales",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Desde hace ya varias décadas, en pequeños animales se ha generado un gran cuerpo de conocimiento que ha impulsado a los médicos veterinarios que se dedican a esta especialidad a buscar un grado aún mayor de subespecialización. Así, esta asignatura busca profundizar en el conocimiento específico de la cirugía en pequeños animales, y satisfacer parcialmente una necesidad de algunos de nuestros futuros egresado.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2026035 (2026035)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Vladimir Galindo Zamora"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2026053": {
  "cod": "2026053",
  "codigoSIA": "2026053",
  "nombre": "Fran&ccedil;ais Intensif I - Internationalisation",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Comprendo las ideas principales cuando el discurso es claro y normal y se tratan asuntos cotidianos que tienen lugar en el trabajo, en la escuela, durante el tiempo de ocio, etc. Comprendo la idea principal de muchos programas de radio o televisión que tratan temas actuales o asuntos de interés personal o profesional, cuando la articulación es relativamente lenta y clara. Comprendo textos redactados en una lengua de uso habitual y cotidiano o relacionada con el trabajo. Comprendo la descripción de acontecimientos, sentimientos y deseos en cartas personales.Sé desenvolverme en casi todas las situaciones que se me presentan cuando viajo donde se habla esa lengua. Puedo participar espontáneamente en una conversación que trate temas cotidianos de interés personal o que sean pertinentes para la vida diaria (por ejemplo, familia, aficiones, trabajo, viajes y acontecimientos actuales).Sé enlazar frases de forma sencilla con el fin de describir experiencias y hechos, mis sueños, esperanzas y ambiciones. Puedo explicar y justificar brevemente mis opiniones y proyectos. Sé narrar una historia o relato, la trama de un libro o película y puedo describir mis reacciones.Soy capaz de escribir textos sencillos y bien enlazados sobre temas que me son conocidos o de interés personal. Puedo escribir cartas personales que describen experiencias e impresiones. Al finalizar el programa el estudiante presenta el Examen DALF C1.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026053)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Yenny Esperanza Rodríguez González"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-201",
        "salon": "454-201",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-109",
        "salon": "453-109",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-201",
        "salon": "454-201",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Luz Angela Segura Barrero"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA",
        "salon": "311-304",
        "edificio": "311 - Lauchlin Currie",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-317 (SALA TIC)",
        "salon": "453-317",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 406-227",
        "salon": "406-227",
        "edificio": "406 - Carlos Alfonso Cortés Amador",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-407",
        "salon": "453-407",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "SALON 301",
        "salon": "564-301",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "MARYURY USECHE LEÓN"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE",
        "salon": "401-105",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-111",
        "salon": "453-111",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "SALON 303",
        "salon": "564-303",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026054": {
  "cod": "2026054",
  "codigoSIA": "2026054",
  "nombre": "Inglés Intensivo I (Intensive English I)",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Entender las ideas principales de textos complejos de su campo de especialización. Relacionarse con hablantes nativos con cierto grado de fluidez y naturalidad.Producir textos claros y detallados sobre temas diversos. Defender su punto de vista sobre temas generales. Al finalizar el curso el estudiante presenta el (PET) Preliminary English Test que corresponde al nivel intermedio B1 del CEFR.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026054)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jenny Alejandra Acosta Reyes"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-317 (SALA TIC)",
        "salon": "453-317",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "PROG. DE EDUC.CONTINUADA",
        "salon": "310-201",
        "edificio": "310 - Antonio García Nossa",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-317 (SALA TIC)",
        "salon": "453-317",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Jenny Alejandra Acosta Reyes"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-201",
        "salon": "454-201",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-202",
        "salon": "454-202",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-201",
        "salon": "454-201",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Karen Dayana Rodriguez Castaneda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-301",
        "salon": "454-301",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-307",
        "salon": "454-307",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-202",
        "salon": "454-202",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 453-415",
        "salon": "453-415",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Karen Dayana Rodriguez Castaneda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALÓN DE CLASE 401-207",
        "salon": "401-207",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-109",
        "salon": "453-109",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "SENDA VALENTINA MARÍA GARCÍA CASTAÑO"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALÓN DE CLASE 401-202",
        "salon": "401-202",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-317 (SALA TIC)",
        "salon": "453-317",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-415",
        "salon": "453-415",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALÓN DE CLASE 401-306",
        "salon": "401-306",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "ADRIANA DE LOS ANGELES QUINTERO ORJUELA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-203",
        "salon": "401-203",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-111",
        "salon": "453-111",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-102",
        "salon": "401-102",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "SENDA VALENTINA MARÍA GARCÍA CASTAÑO"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-407",
        "salon": "453-407",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-315",
        "salon": "453-315",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-111",
        "salon": "453-111",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "ADRIANA DE LOS ANGELES QUINTERO ORJUELA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE",
        "salon": "401-105",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-317 (SALA TIC)",
        "salon": "453-317",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-202",
        "salon": "401-202",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-203",
        "salon": "401-203",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026055": {
  "cod": "2026055",
  "codigoSIA": "2026055",
  "nombre": "Inglés Intensivo II (Intensive English II)",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Entender textos complejos relacionados con temas tanto concretos como abstractos, de carácter técnico en su campo especialización. Relacionarse con hablantes nativos con grado suficiente de fluidez y naturalidad, de modo que la comunicación se realice sin esfuerzo por parte de los interlocutores. Producir textos claros y detallados sobre temas diversos. Defender su punto de vista sobre temas generales, indicando pros y contras. Al finalizar el curso el estudiante presenta el (FCE) First Certificate in English que corresponde al nivel intermedio alto B2 del CEFR.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026055)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Roger Barragan Fonseca"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-206",
        "salon": "454-206",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-206",
        "salon": "454-206",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-206",
        "salon": "454-206",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-206",
        "salon": "454-206",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "OLGA INES GOMEZ VILLEGAS"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-208",
        "salon": "454-208",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-201",
        "salon": "454-201",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALÓN DE CLASE 401-203",
        "salon": "401-203",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 453-103",
        "salon": "453-103",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Laura Alejandra Guerrero Calderon"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-202",
        "salon": "454-202",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-301",
        "salon": "454-301",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA TEORICA",
        "salon": "471-222B",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 453-307 (SALA TIC)",
        "salon": "453-307",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Gustavo Garzon Gomez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALÓN DE CLASE 401-203",
        "salon": "401-203",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA",
        "salon": "311-201",
        "edificio": "311 - Lauchlin Currie",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALÓN DE CLASE",
        "salon": "401-105",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Juan Diego Galvez Diaz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA",
        "salon": "311-102",
        "edificio": "311 - Lauchlin Currie",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-313",
        "salon": "453-313",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "Laura Alejandra Guerrero Calderon"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-315",
        "salon": "453-315",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-207",
        "salon": "401-207",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE - NO DISPONIBLE PARA EL RESTO DE LA UNIVERSIDAD",
        "salon": "471-116",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE",
        "salon": "401-105",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "Juan Diego Galvez Diaz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-202",
        "salon": "401-202",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "31/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-203",
        "salon": "401-203",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "31/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-109",
        "salon": "453-109",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "31/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-206",
        "salon": "401-206",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "31/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026056": {
  "cod": "2026056",
  "codigoSIA": "2026056",
  "nombre": "Inglés Intensivo III (Intensive English III)",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Comprender variedad de textos extensos, con cierto nivel de exigencia, reconocer sentidos implícitos. Expresarse fluida y espontáneamente y con expresión adecuada. Hacer uso flexible y efectivo del idioma para fines sociales, académicos y profesionales. Puede producir textos claros, estructurados y detallados sobre temas complejos mostrando correcto uso de mecanismos de organización, articulación y cohesión del texto. Al finalizar el curso el estudiante presenta el (CAE) Certificate of Advanced English que corresponde al nivel avanzado C1 del CEFR.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026056)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "MARTIN FELIPE SUAREZ GUARIN"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-307",
        "salon": "454-307",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-208",
        "salon": "454-208",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-103",
        "salon": "453-103",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "MARTIN FELIPE SUAREZ GUARIN"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON",
        "salon": "471-112",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-204",
        "salon": "454-204",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 303",
        "salon": "500-303",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE - GEOCIENCIAS",
        "salon": "224-216",
        "edificio": "224 - Manuel Ancizar",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Camilo Andres Saldaña Diaz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-311",
        "salon": "453-311",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-315",
        "salon": "453-315",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "Camilo Andres Saldaña Diaz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 454-201",
        "salon": "454-201",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-411",
        "salon": "453-411",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Lina Beatríz Barrero Molina"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-315",
        "salon": "453-315",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-111",
        "salon": "453-111",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-103",
        "salon": "453-103",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-307 (SALA TIC)",
        "salon": "453-307",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026057": {
  "cod": "2026057",
  "codigoSIA": "2026057",
  "nombre": "Intensive english I - Internationalization",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Comprender variedad de textos extensos, con cierto nivel de exigencia, reconocer sentidos implícitos. Expresarse fluida y espontáneamente y con expresión adecuada. Hacer uso flexible y efectivo del idioma para fines sociales, académicos y profesionales. Puede producir textos claros, estructurados y detallados sobre temas complejos mostrando correcto uso de mecanismos de organización, articulación y cohesión del texto. Al finalizar el curso el estudiante presenta el (CAE) Certificate of Advanced English que corresponde al nivel avanzado C1 del CEFR",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026057)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Andres Felipe Mican Castiblanco"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALÓN DE CLASE 401-203",
        "salon": "401-203",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-206",
        "salon": "454-206",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Diego Andres Rincón Beltrán"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-313",
        "salon": "453-313",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-315",
        "salon": "453-315",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-101",
        "salon": "401-101",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-303",
        "salon": "453-303",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE",
        "salon": "471-507",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026058": {
  "cod": "2026058",
  "codigoSIA": "2026058",
  "nombre": "Intensivkurs Deutsch I - Internationalisierung",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Comprendo las ideas principales cuando el discurso es claro y normal y se tratan asuntos cotidianos que tienen lugar en el trabajo, en la escuela, durante el tiempo de ocio, etc. Comprendo la idea principal de muchos programas de radio o televisión que tratan temas actuales o asuntos de interés personal o profesional, cuando la articulación es relativamente lenta y clara. Comprendo textos redactados en una lengua de uso habitual y cotidiano o relacionada con el trabajo. Comprendo la descripción de acontecimientos, sentimientos y deseos en cartas personales.Sé desenvolverme en casi todas las situaciones que se me presentan cuando viajo donde se habla esa lengua. Puedo participar espontáneamente en una conversación que trate temas cotidianos de interés personal o que sean pertinentes para la vida diaria (por ejemplo, familia, aficiones, trabajo, viajes y acontecimientos actuales).Sé enlazar frases de forma sencilla con el fin de describir experiencias y hechos, mis sueños, esperanzas y ambiciones. Puedo explicar y justificar brevemente mis opiniones y proyectos. Sé narrar una historia o relato, la trama de un libro o película y puedo describir mis reacciones.Soy capaz de escribir textos sencillos y bien enlazados sobre temas que me son conocidos o de interés personal. Puedo escribir cartas personales que describen experiencias e impresiones. Al finalizar el programa el estudiante presenta el Zentrale Mittelstufen-prüfung (ZMP)",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026058)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Lina Marcela Marañon Zuluaga"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE VIDEO CONFERENCIAS 454-302",
        "salon": "454-302",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE VIDEO CONFERENCIAS 454-302",
        "salon": "454-302",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE VIDEO CONFERENCIAS 454-302",
        "salon": "454-302",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE VIDEO CONFERENCIAS 454-302",
        "salon": "454-302",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE VIDEO CONFERENCIAS 454-302",
        "salon": "454-302",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE VIDEO CONFERENCIAS 454-302",
        "salon": "454-302",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Diana Melissa Ospina Beltran"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE - NO DISPONIBLE PARA EL RESTO DE LA UNIVERSIDAD",
        "salon": "471-116",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Oscar David Perdomo Bossa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-305",
        "salon": "401-305",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-411",
        "salon": "453-411",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-317 (SALA TIC)",
        "salon": "453-317",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-317 (SALA TIC)",
        "salon": "453-317",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 130",
        "salon": "500-130",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Nelly Andrea Sanchez Torres"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON SEMICIRCULAR 1",
        "salon": "225-111",
        "edificio": "225 - Rogelio Salmona",
        "desde": "31/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE PARA MAESTRIAS - NO DISPONIBLE PARA EL RESTO DE LA UNIVERSIDAD",
        "salon": "471-431",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "31/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 103",
        "salon": "225-103",
        "edificio": "225 - Rogelio Salmona",
        "desde": "31/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-204",
        "salon": "454-204",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "31/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-309 (SALA TIC)",
        "salon": "453-309",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "31/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALÓN DE CLASE 401-202",
        "salon": "401-202",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "31/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026065": {
  "cod": "2026065",
  "codigoSIA": "2026065",
  "nombre": "Portugu&ecirc;s Intensivo I - Internacionaliza&ccedil;&atilde;o",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Objetivos: Entender textos complejos relacionados con temas tanto concretos como abstractos, de carácter técnico en su campo especialización. Relacionarse con hablantes nativos con grado suficiente de fluidez y naturalidad, de modo que la comunicación se realice sin esfuerzo por parte de los interlocutores. Producir textos claros y detallados sobre temas diversos. Defender su punto de vista sobre temas generales, indicando pros y contras. Al finalizar el curso el estudiante presenta el CELPE-BRAS, Certificado de Profici&ecirc;ncia em Língua Portuguesa para Estrangeiros, desarrollado por el Ministerio de Educación de Brasil y es el único certificado de suficiencia en portugués reconocido oficialmente por el Gobierno de Brasil. Mide las habilidades de escucha, habla, lectura y escritura.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026065)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Laura Vivian Gutierrez Perez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-305",
        "salon": "454-305",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-113",
        "salon": "453-113",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Daniela Viola "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-207",
        "salon": "401-207",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-315",
        "salon": "453-315",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-109",
        "salon": "453-109",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "AULA",
        "salon": "311-103",
        "edificio": "311 - Lauchlin Currie",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026111": {
  "cod": "2026111",
  "codigoSIA": "2026111",
  "nombre": "Prácticas integradas en patología veterinaria",
  "creditos": 20,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Entrenar a los asistentes en el campo de la etiología, patogénesis, descripción de cambios macroscópicos, planteamiento de diagnósticos: morfológicos. resaltar la importancia de la adecuada utilización de los laboratorios diagnósticos para solucionar problemas sanitarios en animales.\nActualizar los conocimientos y experiencia en la descripción de lesiones, formulación de diagnósticos morfológicos concisos y precisos, posibles diagnósticos diferenciales y el etiológico más probable.\nActualizar los conocimientos y experiencia para utilizar la terminología correcta relacionada con los hallazgos macroscópicos de a necropsia.\nActualizar los conocimientos y experiencia para la presentación de informes de patología (necropsia), toma de fotos de lesiones.\nActualizar los conocimientos y experiencia para identificar las patologías más prevalentes en especies nativas y exóticas trabajadas en nuestro país (que muestras se deben enviar y a que laboratorios).",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2026111)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "LUIS MAURICIO MONTOYA FLÓREZ"
      ],
      "facultad": "",
      "duracion": "Asignaturas semestrales con duración entre 17 y 20 semanas.",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2026204": {
  "cod": "2026204",
  "codigoSIA": "2026204",
  "nombre": "Comunicación, arte y educación",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Nos permitiremos en el transcurso de esta asignatura visualizar una sensibilidad cambiante y las distintas formas de acceso al saber, además todo lo que anuncie prácticas sociales nuevas y así mismo diferentes modos de pensar, esta realidad nos aboca a reconocer la presencia y el reconocimiento de nuevas subjetividades. Desarrollaremos una temática relacionada con la comunicación, el arte y la educación, analizando los problemas y las transformaciones que auspician en el panorama actual.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE SEMINARIO (2026204)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Ramon Elberto Uribe Galves"
      ],
      "facultad": "FACULTAD DE ARTES",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TALLER PINTURA EN EL ESPACIO",
        "salon": "301-103",
        "edificio": "301 - Bellas Artes",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TALLER PINTURA EN EL ESPACIO",
        "salon": "301-103",
        "edificio": "301 - Bellas Artes",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026205": {
  "cod": "2026205",
  "codigoSIA": "2026205",
  "nombre": "Derecho urbanistico colombiano",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se orienta a la comprensión desde el derecho, de la dinámica urbana (vivienda, medio ambiente, espacio público, suelo, propiedad, movilidad) y el análisis e identificación de las aspiraciones del sistema urbanístico colombiano, a través de las herramientas de planeación el uso y gestión del suelo y el control urbanístico; sus rasgos y complejidades a partir del ciudadano con su entorno.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Diego Isaías Peña Porras"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "Salon 610-313",
        "salon": "610-313",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026274": {
  "cod": "2026274",
  "codigoSIA": "2026274",
  "nombre": "Bogotá musical internacional",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La música, el arte por excelencia, es de gran importancia no sólo a nivel cultural, sino también social . Ésta brinda al individuo herramientas que fomentan la creatividad, la disciplina, el pensamiento lógico, la coordinación, la concentración y el trabajo en equipo entre otros; elementos que son parte fundamental en la formación de personas productivas capacitadas para aportar en la construcción continua de una mejor sociedad.\n\nLa cátedra Bogotá Musical Internacional estará integrada por 12 sesiones cada una de ellas compuesta por una conferencia y un concierto; este último forma parte de la programación propia del Conservatorio.\nLos conferencistas -invitados internacionales y docentes- tratarán el contexto cultural e histórico del repertorio desarrollado y actuarán como solistas o formarán parte de una agrupación musical junto con los estudiantes del Conservatorio, interpretando las obras musicales según la temática de la sesión.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026274)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Angela Ines Simbaqueba Gutierrez",
       "GUERASSIM VORONKOV "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "17:00",
        "fin": "20:00",
        "lugar": "AUDITORIO LEON DE GREFF",
        "salon": "104-100",
        "edificio": "104 - Auditorio Leon de Greiff",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026433": {
  "cod": "2026433",
  "codigoSIA": "2026433",
  "nombre": "Apreciación e historia del arte: Del barroco al impresionismo",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Introducción a las artes visuales (pintura, escultura) y arquitectura del periodo comprendido entre comienzos del siglo XVII y finales del siglo XIX. En e curso se examinarán obras representativas del arte barroco, neoclasico, romantico y las tendencias de fin de siglo surgidas en Europa. se tratará tambien de las repercusiones de estas tendencia en America latina y su desarrollo. Se incluirán tambien los antecedentes del surgimiento de nuevas formas artisticas como el diseño, la fotografía y el cine.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026433)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Joanita Jimena Barbosa Gomez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 125,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AUDITORIO 2",
        "salon": "303C-422",
        "edificio": "303 - EDIFICIO DE LAS ARTES SEDE BOGOTA",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026501": {
  "cod": "2026501",
  "codigoSIA": "2026501",
  "nombre": "Física las grandes ideas que cambiaron al mundo",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Es indiscutible la profunda relación entre los avances científicos y el avance de la humanidad hacia niveles de vida nunca observados en la historia de la misma. Este exito ha generado un aislamiento entre la comunidad científica de física y las personas con formación en áreas de ciencias humanas y artes. En este curso se propone la exploración de las grandes ideas que la física ha aportado al conocimiento general de la humanidad, y como estas ideas han cambiado desde nuestra forma de vida, hasta la percepción que tenemos del universo que nos rodea. El curso está dirigido especialmente a estudiantes de las áreas de ciencias humanas y artes, que tengan interés profundizar y actualizar sus conocimientos en física general, haciendo énfasis en mostrar la forma como el mundo, y nuestra visión acerca de él, ha sido transformado de manera radical. El curso hará un uso de matemática básicas, nivel pre-universitario, para su desarrollo.\n\nResumen El curso tendrá una duración de 16 semanas, y estará dirigido principalmente a alumnos de la Universidad Nacional de Colombia que deseen tener conocimientos de los adelantos de la física que han modificado la humanidad. Durante las exposiciones se realizarán experimentos demostrativos para complementar la información dada en el curso, y para algunas secciones se invitarán a expertos en los temas a desarrollar.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA",
    "grupos": [
     {
      "grupo": "Grupo 1 - (VIRTUAL)",
      "codigoGrupo": "1",
      "profesores": [
       "Diego Alejandro Torres Galindo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 500,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026533": {
  "cod": "2026533",
  "codigoSIA": "2026533",
  "nombre": "Beatles y algo más: música, cultura y sociedad (1960-75)",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El objetivo de este curso es examinar desde el punto de vista musicologico el repertorio de música popular producido durante las décadas de los años sesenta y setenta del siglo XX. Dentro del contexto social, cultural y político de este momento se examinarán obras musicales (y de teatro musical) fundamentales para entender el gran impacto que tuvo en su momento y mantiene hasta la actualidad. Los Beatles, Bob Dylan, Juan M. Serrat, Chico Buarque, Sandro y Emerson Lake and Palmer entre muchos otros son los artistas cuyas canciones se considerarán en el curso.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026533)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Egberto Bermudez Cujar"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 200,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026611": {
  "cod": "2026611",
  "codigoSIA": "2026611",
  "nombre": "Las industrias creativas y su visión desde el derecho de autor y los derechos conexos",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El desarrollo del mundo moderno ha estado enmarcado por el reconocimiento y la importancia de las creaciones del intelecto humano. Dichas creaciones sin duda han sido el motor de la rápida evolución de nuestra sociedad, de ellas devienen fenómenos tan importantes como la divulgación universal de las ideas, la socialización de fenómenos culturales, la industrialización, la automatización, la robotización, etc., razón por la cual desde hace varios siglos los sistemas legales les han brindando una protección jurídica.\n\nLa historia muestra una vertiginosa evolución de esta nueva propiedad, conocida como inmaterial o intelectual, una de cuyas primeras piedras data del estatuto de la Reina Ana en el siglo XVII en el Reino Unido, en virtud del cual se otorgó ciertos derechos a los creadores de las obras literarias como titular sobre creaciones. Rápidamente se logró un mayor nivel de protección a través de la introducción de nuevas formas de transmitir las creaciones artísticas y literarias como con las obras musicales, los mapas, los dibujos, las obras cinematográficas, los diseños e, inclusive, los programas de software.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2026611)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "German Dario Florez Acero"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "21:00",
        "lugar": "AULA 208",
        "salon": "610-208",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026630": {
  "cod": "2026630",
  "codigoSIA": "2026630",
  "nombre": "Intercambio académico internacional - II",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se crea código por solicitud de la Vicerrectoría Académica, debe estar autorizado por la Dirección de Relaciones Exteriores DRE para la inscripción de esta asignatura.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2026630 (2026630)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Docente Ajuste Resto "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2026631": {
  "cod": "2026631",
  "codigoSIA": "2026631",
  "nombre": "Intercambio académico internacional - II prórroga",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se crea código por solicitud de la Vicerrectoría Académica, debe estar autorizado por la Dirección de Relaciones Exteriores DRE para la inscripción de esta asignatura.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2026631 (2026631)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Docente Ajuste Resto "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2026688": {
  "cod": "2026688",
  "codigoSIA": "2026688",
  "nombre": "Movimientos juveniles estudiantiles actuales",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura busca acercar a los estudiantes a los debates contemporáneos sobre los movimientos juveniles estudiantiles actuales, en el contexto nacional y latinoamericano.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2026688 (2026688)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Fabian Rodolfo Acosta Sanchez"
      ],
      "facultad": "FACULTAD DE DERECHO, CIENCIAS POLÍTICAS Y SOCIALES",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 109",
        "salon": "610-109",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 109",
        "salon": "610-109",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026702": {
  "cod": "2026702",
  "codigoSIA": "2026702",
  "nombre": "Derecho agrario",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El Derecho agrario se fundamenta en el estudio de la normatividad que sobre la tenencia de la tierra ha existido en el país desde la colonia aunque haciendo énfasis en la fase modernizante que se inició con la crisis internacional de 1930 la cual abrió paso al llamado modelo de desarrollo basado en la sustitución de importaciones. La ley 200 de 1936 surgió como resultado de las tensiones sociales que acompañaron las transformaciones económicas y políticas asociadas al modelo sustitutivo . Puede decirse que esta norma dio origen al derecho agrario en el país. Pero, significo, tan solo el comienzo de un trasegar normativo oscilante que acompañó los cambios en las políticas agrarias , las cuales, a su vez, eran parte de modificaciones sustanciales en el régimen político. La llamada violencia posterior al magnicidio de Jorge Eliécer Gaitán, el ¿Pacto del Chicoral¿ que cerró las escasas intentonas reformistas de sectores del bipartidismo en los orígenes del Frente Nacional y las transformaciones de la ruralidad asociadas al paramilitarismo con sus secuelas de desesperanza y deplazamiento de las últimas décadas han terminado por producir un derecho agrario fragmentado y una juridicción agraria frágil e ineficaz en muchas regiones del país.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2026702)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Daniel Alberto Libreros Caicedo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "AULA 110",
        "salon": "610-110",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026739": {
  "cod": "2026739",
  "codigoSIA": "2026739",
  "nombre": "Fundamentos de gobierno urbano",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Analizar la relación entre la política y las políticas se constituye en un reto para articular teorías y métodos para los estudios urbanos. Se pretende a través de este curso sugerir herramientas teóricas y metodológicas para articular los enfoques sobre la competencia política, los determinantes de los sistemas electoral y de partidos, las características de las formas de gobierno con las explicaciones sobre qué hace el Estado (a través de su aparato y sus representantes gubernamentales), cómo lo hace (a través de qué mecanismos), y a quiénes atiende.\n\nOfrecerá herramientas teóricas y prácticas para entender la interacción dinámica entre los niveles de gobierno (competencias territoriales), los actores e intereses que encarnan las decisiones de gobierno (individuos o grupos), las reglas (formales e informales), así como los mecanismos de intermediación en la definición y resultados de la gestión urbana.\n\nEl curso se estructura en tres grandes bloques: (1) Conceptos de estado y gobierno (aparato gubernamental); (2) Estructura de competencias y distribución territorial del gobierno, con énfasis en Colombia y sus municipios y, (3) Problemas y dilemas de la acción pública municipal: el ejercicio de gobierno urbano.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026739)",
    "grupos": []
   }
  ]
 },
 "2026745": {
  "cod": "2026745",
  "codigoSIA": "2026745",
  "nombre": "Línea de profundización en farmacología veterinaria",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta línea pretende ofrecer una oportunidad a los estudiantes para conocer y profundizar en áreas de la farmacología, tanto básica, clínica o económica, esto con el objetivo de brindar herramientas, a los futuros profesionales, que les permitan desempeñar su futuro rol profesional en áreas de investigación, clínica o administración\n\nConceptos Previos: Es necesario que los estudiantes posean conocimientos básicos en farmacología, fisiología y estadística",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026745)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Camilo Alberto Orozco Sanabria"
      ],
      "facultad": "FACULTAD DE MEDICINA VETERINARIA Y DE ZOOTECNIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2026834": {
  "cod": "2026834",
  "codigoSIA": "2026834",
  "nombre": "Seminario: Ciudades, industrias y cadenas mercantiles globales",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El propósito más inmediato del curso es el de ofrecer a los estudiantes de las Facultades de la Sede, un conjunto estructurado de instrumentos (mediciones), conceptos y desarrollos teóricos que les posibiliten entender el panorama global de las políticas públicas proindustializantes, tanto las históricas como las actuales. Se analizará el papel del espacio urbano en dichas dinámicas, en especial para algunos sectores sensibles desde la perspectiva de la industria nacional.\n\nEn efecto, los alumnos aprendan: a) a medir las variables a estudiar en un programa de política industrial; b) conocer los centros de pensamientos élites en materia de análisis industrial; c) revisar críticamente la producción de esos centros; d) poder realizar análisis de las ramas industriales, utilizando el método tradicional como también el de Cadenas Mercantiles Globales; e) adelantar investigaciones con rigor matemático sobre el tema en mención.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2026834 (2026834)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Moises Ildefonso Cetre Castillo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026908": {
  "cod": "2026908",
  "codigoSIA": "2026908",
  "nombre": "Construyendo el paisaje",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se trata de una asignatura de libre elección participativa abierta a todos los estudiantes de pregrado de la Universidad Nacional interesados en la reflexión y creación poética en torno a las nociones de paisaje.\nCon un deseo vivo de participar desde el arte, por un estado de conciencia más sensible con nuestro entorno, este curso ofrece una introducción a los principios de observación, análisis y aproximación plástica sobre las ideas en torno al paisaje, primero desde la disciplina del estudiante, seguida por una exploración individual o colectiva sustentada en las prácticas artísticas.\nUna aproximación al término del paisaje, desde distintas perspectivas y con una aproximación sobre distintas problemáticas contemporáneas en torno a él, y sus formas de representación, será implementada en esta asignatura. A través de revisiones de la historia del arte, lecturas y discusiones, presentaciones, salidas de campo, visitas a talleres de artistas y galerías, profesores invitados de la carrera de artes plásticas que han abordado el paisaje en sus obras o de distintas disciplinas como la geografía y la antropología, así como el ejercicio plástico creativo.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2026908)",
    "grupos": []
   }
  ]
 },
 "2026941": {
  "cod": "2026941",
  "codigoSIA": "2026941",
  "nombre": "Mercadeo agrario y alimentario",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura mercadeo agroalimentario pretende capacitar a los estudiantes para soportar la adecuada gestión comercial de las empresas dedicadas a la producción agro-alimentaria, proporcionando a los futuros decisores una visión general de los principales aspectos a tener en cuenta en lo que refiere al marketing, tanto desde la perspectiva del consumidor como desde las decisiones que se deben tomar en las empresas para afrontar los problemas comerciales con racionalidad limitada. Se pretende desarrollar competencias para que el futuro profesional sea capaz de analizar el entorno relativo a los mercados agroalimentarios en que pretende participar, competente para diseñar y aplicar estrategias, elaborar planes de mercado y realizar estudios de rentabilidad de las inversiones agrarias.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026941)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Yesid Vicente Aranda Camacho"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 305",
        "salon": "500-305",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026987": {
  "cod": "2026987",
  "codigoSIA": "2026987",
  "nombre": "Investigación social aplicada, perspectivas y prácticas interdisciplinarias.",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Desde una perspectiva crítica, se busca presentar un panorama general de los debates conceptuales, los enfoques metodológicos y las problemáticas contemporáneas de la investigación social aplicada relacionadas con sus posibilidades de desarrollo en Colombia.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA ( 2026987)",
    "grupos": []
   }
  ]
 },
 "2027041": {
  "cod": "2027041",
  "codigoSIA": "2027041",
  "nombre": "La esquizofrenia:del trastorno a la estructura",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "la esquizofrenia aparece en la psiquiatría a mediados del xix, bajo la categoría de la «demencia precoz» de morel. más tarde, kraepelin delimitará dentro de la «demencia precoz» varios fenómenos como la hebefrenia y la catatonia. precisamente, debido a las múltiples combinaciones sintomáticas posibles de la misma, se ha considerado que en la esquizofrenia se trata de varios trastornos y no de uno solo, razón por la cual bleuler utilizó el plural schizophrenias para referirla, cuando acuñó su nombre en 1911.\n\nen relación la esquizofrenia, entre kraepelin y bleuler se ubica freud y el psicoanálisis. en su origen, la invención del término schizophrenias por parte de bleuler constituyó el punto de articulación entre la psiquiatría clásica y el psicoanálisis. la originalidad de su concepción de este grupo de fenómenos (perturbaciones en el curso del pensamiento como de su contenido, extrañezas afectivas y/o volitivas, síntomas catatónicos, delirios y alucinaciones, etc.,) se debe al enfoque psicoanalítico: por ejemplo, dichos fenómenos encuentran el sentido, en los complejos y mecanismos (condensación y desplazamiento) descubiertos por freud en el estudio de los sueños y los actos fallidos.\n\nConceptos Previos\nEs muy recomendable que el estudiante haya cursado previamente por lo menos TRES asignaturas de fundamentación y contenido clínico, ofrecidas por la Escuela de Estudios en Psicoanálisis y Cultura (vgr. Fundamentos de psicoanálisis, La clínica del caso, Autor: Freud, Psicoanálisis y Psicoterapias, Enfermedades del alma, Cuerpo e inconsciente, El niño, sus síntomas y el inconsciente, Cuerpo y marcas de goce, etc.), sin lo cual el estudiante inscrito solamente podrá tomar el contenido teórico y no podrá asistir a las entrevistas de pacientes hospitalizados",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2027041)",
    "grupos": []
   }
  ]
 },
 "2027042": {
  "cod": "2027042",
  "codigoSIA": "2027042",
  "nombre": "Linea de profundización II en farmacología veterinaria",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Tras un proceso de revisión bibliográfica desarrollado durante la línea 1, los estudiantes desarrollaran una propuesta de investigación, la cual tendrá como base la revisión realizada. De esta manera, los estudiantes desarrollaran habilidades para escribir trabajos científicos y propuestas de investigación, además, siempre que sea posible, se intentaran desarrollar las propuestas de cada estudiante y/o se intentaran aprender y comprender las técnicas científicas que cada propuesta necesite para poderse ejecutar. Así, cada uno de los temas involucrados en la línea 1, podrá tener un énfasis mayor durante la línea II, sin embargo, esta posibilidad dependerá de la libre elección de cada estudiante, de manera tal que los estudiantes podrán realizar sus trabajos siguiendo sus intereses propios en farmacología básica, clínica o farmacoeconomia.\n\nLa temática de la línea de profundización en farmacología veterinaria 2, se desarrollará bajo la premisa de revisiones temáticas, por cada uno de los estudiantes, bajo la supervisión del docente o un asesor experto en la temática elegida por cada estudiante. De esta manera los estudiantes, a medida que avancen en su revisión temática, expondrán artículos de su interés. Al finalizar el semestre estudiante presentará un informe, ya sea con resultados originales o con una propuesta seria de investigación, que probablemente pueda ser plateada como trabajo de tesis o monografía para optar al titulo de médico veterinario.\n\nConceptos Previos: Haber cursado la cátedra de Farmacología\nHaber cursado la cátedra de Estadística\nHaber cursado la Línea de profundización en Farmacología veterinaria I.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2027042 (2027042)",
    "grupos": [
     {
      "grupo": "Grupo 01",
      "codigoGrupo": "1",
      "profesores": [
       "Camilo Alberto Orozco Sanabria"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2027096": {
  "cod": "2027096",
  "codigoSIA": "2027096",
  "nombre": "Fran&ccedil;ais intensif II - internationalisation",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Es una asignatura de formación en segunda lengua que busca promover el fortalecimiento de las competencias comunicativas en el idioma francés, dirigido a estudiantes los diferentes programas académicos la Sede Bogotá de la Universidad Nacional de Colombia. Al finalizar el programa el estudiante presenta el Examen DELF B1.\n\nConceptos Previos: Haber cursado los 4 niveles del PLE o haber cumplido con el requisito de lengua extranjera.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2027096 (2027096)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Carol Ivonne Villamil Bernal"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "454-303",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "454-303",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "454-303",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "454-303",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "454-303",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "454-303",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Carlos Efren Villamizar Mogollon"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-413",
        "salon": "453-413",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-407",
        "salon": "453-407",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 454-201",
        "salon": "454-201",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "SALON 203",
        "salon": "564-203",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Ana Milena Ladino Rojas"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-313",
        "salon": "453-313",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-411",
        "salon": "453-411",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 454-204",
        "salon": "454-204",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027100": {
  "cod": "2027100",
  "codigoSIA": "2027100",
  "nombre": "Intensive english II - internationalization",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Es una asignatura de formación en segunda lengua que busca promover el fortalecimiento de las competencias comunicativas en el idioma inglés, dirigido a estudiantes los diferentes programas académicos la Sede Bogotá de la Universidad Nacional de Colombia. Al finalizar el curso el estudiante presenta el (CAE) Certificate of Advanced English que corresponde al nivel avanzado C1 del CEFR.\n\nConceptos Previos: Haber cursado los 4 niveles del PLE o haber cumplido con el requisito de lengua extranjera.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2027100 (2027100)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "FRANCISCO JAVIER HERNÁNDEZ SÁNCHEZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-407",
        "salon": "453-407",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-204",
        "salon": "454-204",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-301",
        "salon": "454-301",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALÓN DE CLASE 401-206",
        "salon": "401-206",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Gustavo Garzon Gomez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-109",
        "salon": "453-109",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-415",
        "salon": "453-415",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-409",
        "salon": "453-409",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027101": {
  "cod": "2027101",
  "codigoSIA": "2027101",
  "nombre": "Intensivkurs deutsch II - internationalisierung",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Es una asignatura de formación en segunda lengua que busca promover el fortalecimiento de las competencias comunicativas en idioma alemán, dirigido a estudiantes los diferentes programas académicos la Sede Bogotá de la Universidad Nacional de Colombia.Al finalizar el programa el estudiante presenta el Goethe Zertifikat Deutsch B1.\n\nConceptos Previos: Haber cursado los 4 niveles del PLE o haber cumplido con el requisito de lengua extranjera.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2027101)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Brillyth Rohincen Ramirez Basurto"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-315",
        "salon": "453-315",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-204",
        "salon": "454-204",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-301",
        "salon": "454-301",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALÓN DE CLASE 401-207",
        "salon": "401-207",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-207",
        "salon": "454-207",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Fabio Briceño Vargas"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-405",
        "salon": "453-405",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-415",
        "salon": "453-415",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-207",
        "salon": "401-207",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "AULA",
        "salon": "311-104",
        "edificio": "311 - Lauchlin Currie",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Sandra Patricia Rodriguez Castañeda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-101",
        "salon": "401-101",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-415",
        "salon": "453-415",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "AULA",
        "salon": "311-301",
        "edificio": "311 - Lauchlin Currie",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027119": {
  "cod": "2027119",
  "codigoSIA": "2027119",
  "nombre": "Portugu&ecirc;s intensivo II - internacionaliza&ccedil;&atilde;o",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Es una asignatura de formación en segunda lengua que busca promover el fortalecimiento de las competencias comunicativas en el idioma portugués, dirigido a estudiantes de los diferentes programas académicos la Sede Bogotá de la Universidad Nacional de Colombia. Al finalizar el curso el estudiante presenta el CELPE-BRAS, Certificado de Profici&ecirc;ncia em Língua Portuguesa para Estrangeiros, desarrollado por el Ministerio de Educación de Brasil y es el único certificado de suficiencia en portugués reconocido oficialmente por el Gobierno de Brasil. Mide las habilidades de escucha, habla, lectura y escritura.\n\nConceptos Previos: Haber cursado los 4 niveles del PLE o haber cumplido con el requisito de lengua extranjera.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2027119 (2027119)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "JACINEIDE DA CRUZ CONCEI&Ccedil;&Atilde;O"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-411",
        "salon": "453-411",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-202",
        "salon": "454-202",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 207",
        "salon": "225-207",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-111",
        "salon": "453-111",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON",
        "salon": "471-112",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "JANIO VASCONCELOS PEREIRA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-203",
        "salon": "401-203",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-409",
        "salon": "453-409",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-315",
        "salon": "453-315",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "SALON 305",
        "salon": "564-305",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027134": {
  "cod": "2027134",
  "codigoSIA": "2027134",
  "nombre": "Turquía: historia, cultura y sociedad",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "RESUMEN Y PROPÓSITOS DE FORMACIÓN DEL CURSO:\n\nDentro de un marco de apertura en las relaciones entre Colombia y Turquía, el curso tiene como fin formar a los estudiantes sobre este país euro-asiático, dando a conocer a Turquía en una coyuntura de importante posicionamiento tanto político como económico a nivel internacional.\n\nRESULTADOS DE APRENDIZAJE ESPERADOS (RAE)\n\nOBJETIVO GENERAL:\nAmpliar la visión del estudiante sobre Turquía, como un país que cada vez cobra mayor relevancia en el ámbito político, social y económico dentro del marco de las relaciones internacionales contemporáneas.\n\nOBJETIVOS ESPECÍFICOS:\n* Promover un ambiente de investigación sobre la historia, la cultura y la sociedad turca.\n\n* Brindar a los estudiantes las herramientas necesarias de conocimiento para llegar a entender el papel de Turquía en el sistema internacional.\n\n* Familiarizar al estudiante con las distintas temáticas tanto históricas como coyunturales, que lo ayuden a comprender la importancia de Turquía en la actualidad.\n\nACTIVIDADES DE APRENDIZAJE_:\n\n* Exposiciones y reseñas sobre las lecturas\n* Organizar tertulias\n* Programación de viajes académicos\n\nACTIVIDADES DE EVALUACIÓN:\n\nPrimer corte (35%)\nSegundo corte (35%)\nTercer corte (30%)\n\nACUERDOS DE FUNCIONAMIENTO:\n\nEs requisito de la asignatura la asistencia de forma presencial en los horarios de clase, por esta razón se llevará control de ella en cada una de las sesiones.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2027134)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027191": {
  "cod": "2027191",
  "codigoSIA": "2027191",
  "nombre": "Medios de comunicación, política criminal y justicia penal",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El presente curso de profundización tiene como propósito evaluar y reconstruir los discursos mediáticos sobre la cuestión criminal, la reacción social frente a conductas desviadas y la política criminal en Colombia. Para el efecto se plantea como punto de partida el problema de la incidencia de los medios masivos de comunicación en la investigación criminológica, en los proyectos de ley, y finalmente, la presión que implica la noticia frente a las decisiones judiciales cuando de administrar justicia se trata, en especial en aquellos casos que han marcado la agenda o pauta noticiosa, que han sido ampliamente difundidos y explotados en los diversos medios de comunicación.\nEl estado del arte da cuenta que cuando se trata del análisis de los delitos y su divulgación, ha existido una estrecha relación entre lo que muestran los medios y la forma cómo reacciona la sociedad y las instituciones. No se trata, en consecuencia, de una relación nueva, sino que de antaño ha existido una fuerte correspondencia entre la divulgación de la noticia criminal, la reacción social informal (la de la gente) y la reacción social formal (la de las instituciones).\nEn la actualidad existen fuertes campañas publicitarias sobre el delito, el aumento desproporcionado de las penas, la creación de nuevos delitos (tipos penales), de nuevos bienes jurídicos (generales y abstractos), de disminución de las garantías procesales y el aumento de la privación de la libertad de manera preventiva.\n\nConceptos Previos: Criminología\nSociología del conflicto\nPolítica criminal\nDerecho Penal General\nControl social",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2027191)",
    "grupos": [
     {
      "grupo": "Grupo 1 (2026-2S)",
      "codigoGrupo": "1",
      "profesores": [
       "MIGUEL ANTONIO MORÓN CAMPOS"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "21:00",
        "lugar": "SALON DE CLASE",
        "salon": "201-119",
        "edificio": "201 - Arturo Valencia Zea",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027223": {
  "cod": "2027223",
  "codigoSIA": "2027223",
  "nombre": "Corso intensivo di lingua italiana i internazionalizzazione",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Es una asignatura de formación en lengua extranjera que busca promover el fortalecimiento de las competencias comunicativas en idioma italiano, dirigido a estudiantes de los diferentes programas académicos la Sede Bogotá de la Universidad Nacional de Colombia. Al finalizar el programa el estudiante estará en la capacidad de presentar el examen que certifica su conocimiento de la lengua en el nivel B1 del CEFR (CELI2, CILS Uno B1, ele.IT o PLIDA B1).",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2027223 (2027223)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Irene Castilla Hernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-303",
        "salon": "453-303",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-301",
        "salon": "454-301",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-303",
        "salon": "453-303",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Luis Enrique Pardo Granados"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-111",
        "salon": "453-111",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-109",
        "salon": "453-109",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027224": {
  "cod": "2027224",
  "codigoSIA": "2027224",
  "nombre": "Corso intensivo di lingua italiana ii internazionalizzazione",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Es una asignatura de formación en lengua extranjera que busca promover el fortalecimiento de las competencias comunicativas en idioma italiano, dirigido a estudiantes de los diferentes programas académicos la Sede Bogotá de la Universidad Nacional de Colombia. Al finalizar el programa el estudiante estará en la capacidad de presentar el examen que certifica su conocimiento de la lengua en el nivel B1 del CEFR (CELI2, CILS Uno B1, ele.IT o PLIDA B1).",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2027224 (2027224)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Sergio Cuadros Hernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA TEORICA",
        "salon": "471-222B",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-405",
        "salon": "453-405",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-311",
        "salon": "453-311",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO",
        "salon": "311-305",
        "edificio": "311 - Lauchlin Currie",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Sergio Cuadros Hernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO",
        "salon": "311-305",
        "edificio": "311 - Lauchlin Currie",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027248": {
  "cod": "2027248",
  "codigoSIA": "2027248",
  "nombre": "Antonio Gramsci: Subalternidad, hegemonía y autonomía",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso Antonio Gramsci: hegemonía, autonomía y subalternidad. Ciclo II, propone una reflexión orgánica sobre este pensador marxista italiano en una interlocución directa con la obra de Carlos Marx que es fundamental tanto para el estudio de lo político y la política del siglo XX, como para la comprensión de la significación y alcances de la Crítica de la Economía Política Capitalista que nutre la propuesta y el debate del Comunismo del Siglo XXI.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2027248)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Miguel Angel Herrera Zgaib"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALON DE CLASE",
        "salon": "201-114",
        "edificio": "201 - Arturo Valencia Zea",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027394": {
  "cod": "2027394",
  "codigoSIA": "2027394",
  "nombre": "Música y política",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Al ser la música un constructo cultural se da por sentado su interacción con lo político. Pero las aristas en esta relación no son pocas y se complejizan, entre otras cosas, dependiendo del momento histórico y de las dinámicas de poder que las motivan. En este curso se pretende explorar las intersecciones que surgen en la relación música-política; comprender la influencia que las realidades sociales y políticas ejercieron sobre estas creaciones y analizar la manera en que estas últimas reaccionaron ante estas influencias. Se abordará lo político desde dos perspectivas: según la corriente que considera lo político como un ejercicio de poder y también a partir de los postulados de Ranciére quien ve lo político como la porción antagónica de la institucionalidad, la emancipación.\n\nLos ejes temáticos de este curso se estructuran teniendo en cuenta por un lado el análisis de algunos fenómenos musicales que se relacionan con la institucionalidad y por el otro, considerando productos musicales dentro del espacio de la contracultura; en otras palabras, reparando tanto en la música que se da en el marco del ejercicio de poder como en aquella que se opone, que subvierte el control. Es así como hablaremos de censura, propaganda, protesta, sumisión y alienación en la música.\n\nLas clases combinarán la cátedra, la discusión de lecturas y el análisis musical entorno a creaciones musicales que se adhieren a algunos ejercicios de poder en la historia.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2027394 (2027394)",
    "grupos": []
   }
  ]
 },
 "2027462": {
  "cod": "2027462",
  "codigoSIA": "2027462",
  "nombre": "Linea de profundización I en toxicología y medicina de peces",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Las especies piscícolas cobran cada día más importancia en el contexto de la producción animal, en el uso como bioindicadoras de contaminación acuática y como biomodelos en investigación básica y aplicada. Por esta razones, el estudio de la biología y la medicina de estas especies es de gran utilidad para los estudiantes de Medicina Veterinaria que encuentren intereses en esta área. Esta línea de Profundización permitirá a los estudiantes reconocer las principales enfermedades que afectan a los peces sean éstas de naturaleza toxicologíca, nutricional, infecciosa o de otras etiologías. En la Línea 1 se abarcarántambién los temas de anestesia, sedación y protocolos quirúrgicos básicos aplicables a estas especies. La materia se desarrollará a través de clases magistrales, seminarios, conferencias, revisión y análisis crítico de literatura en el área y sesiones prácticas en el Laboratorio de Toxicología Acuática de la Facultad de Medicina Veterinaria y de Zootecnia. También se programarán actividades en espacios externos al campus universitario (muestreos, visitas en campo, investigaciones en ambientes naturales o sistemas de producción piscícola) cuando están sean necesarias ó practicables.En la materia se harán evaluaciones periódicas (quizes, exámenes, exposiciones y trabajos escritos) para asignar una nota final al trabajo desarrollado por los estudiantes durante el semestre.\n\nConceptos Previos: Es necesario que los estudiantes hayan aprobado los cursos de Toxicología (código 2017093) y Medicina de Peces (2016847), previamente.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2027462 (2027462)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jaime Fernando Gonzalez Mantilla"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2027463": {
  "cod": "2027463",
  "codigoSIA": "2027463",
  "nombre": "Línea de profundización II en toxicología y medicina de peces",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Los estudiantes que hayan aprobado la Línea de profundización I en toxicología y medicina de peces podrán en la línea II desarrollar un trabajo práctico basado en los conocimientos y revisiones hechas durante la línea I en el área. Este trabajo práctico será desarrollado en condiciones de laboratorio o de campo en temas de interés y/o pertinencia dentro de esta área del conocimiento. También se podrán desarrollar vinculando a los estudiantes como apoyo en proyectos de investigación que se estén ejecutando por parte del grupo de investigación en Toxicología Acuática y Ambiental (AQUÁTICA).\nLos estudiantes además escribirán reportes o artículos tipo científico para plasmar los resultados encontrados en su investigación o presentarán seminarios sobre su trabajo para afianzar sus destrezas en el área de la comunicación científica.\n\nConceptos Previos: Aprobar la Línea de Profundización I en Toxicología y Medicina de Peces",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2027463 (2027463)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jaime Fernando Gonzalez Mantilla"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2027681": {
  "cod": "2027681",
  "codigoSIA": "2027681",
  "nombre": "Investigación cualitativa en salud: enfoques, métodos y técnicas",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso busca presentar a los estudiantes de la Facultad o de otras facultades de la Universidad, la primera aproximación a los fundamentos, conceptos, herramientas y prácticas de investigación cualitativa en salud, a partir de una experiencia que combina lo vivencial, con presentaciones expositivas, ejercicios lúdicos y salidas de campo, entre otras. El propósito central del curso es sensibilizar a los estudiantes frente a la importancia, sentidos y utilidad de la investigación cualitativa en salud en el marco del debate actual de la ética de la ciencia.\n\nConceptos Previos: El objetivo general del curso es sensibilizar a las y los participantes, frente a la importancia, sentido y utilidad de la investigación cualitativa, enmarcándola dentro del debate actual de la ética de la ciencia y las características propias de este tipo de investigación.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2027681)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Edson Jair Ospina Lozano"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALON DE CLASE",
        "salon": "210-309",
        "edificio": "210 - Rafael Torres Pinzón",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027716": {
  "cod": "2027716",
  "codigoSIA": "2027716",
  "nombre": "Filosofia del derecho en colombia",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "En Colombia pasamos de una sociedad tradicional, hasta 1930, donde imperaba el iusnaturalismo neoescolástico y toda teoría diferente era estigmatizada y perseguida como herejía, a una sociedad en transición a la modernidad (que se quedó más bien en la modernización sin modernidad) donde, más que el iuspositivismo, lo que se ambienta es un iusnaturalismo racional moderno con trazos de positivismo. Esa combinación se amalgama durante el Frente Nacional en una peculiar conjunción de formalismo jurídico donde convergen, a la sombra del bipartidismo liberal-conservador, el iusnaturalismo y el positivismo, haciendo del formalismo el habitus dominante de creación de derecho en nuestro país, particularmente.\n\nA partir de la Constitución del 91, por la presión inicial de lo que se autodenominó el nuevo derecho, se impone una problematización de los paradigmas convencionales (iusnaturalista y positivista, básicamente) y empieza a consolidarse una tendencia paradigmática que podríamos denominar postkelseniana, pospositivista y, en últimas, posformalista en diferentes vertientes, identificada en cuestionar el formalismo jurídico hegemónico, histórica y estructuralmente, de nuestra identidad iusfilosófica y teórico-jurídica que ha intentado renovar, a veces infructuosamente, nuestro campo jurídico. Este curso busca dar cuenta de este proceso.\n\nConceptos Previos: Curso de Filosofía y Teoría del Derecho",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": []
 },
 "2027937": {
  "cod": "2027937",
  "codigoSIA": "2027937",
  "nombre": "Cátedra de Ingeniería Julio Garavito Armero",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El científico colombiano Julio Garavito Armero, graduado en 1891 de la Facultad de Ingeniería de la Universidad Nacional de Colombia sede Bogotá, ingeniero civil, profesor de Matemáticas y astrónomo, es, sin duda, el egresado más destacado y representativo de la Facultad, la cual, en su homenaje, ofrece a la comunidad académica de la UN y el país la Cátedra, como un espacio para conocer, desde la perspectiva más amplia y transversal, el pasado, presente y futuro de la ingeniería colombiana y su ejercicio, siempre ligados a la construcción de Nación, y factor clave para el desarrollo de Colombia. En mínimo 8 sesiones con invitados, se examinará el conjunto de conocimientos y logros que han influido en la formación de la ingeniería nacional y su ejercicio. Al final de cada una, habrá un espacio para preguntas y comentarios. En las sesiones restantes, se tendrán discusiones sobre la metodología y el avance del curso. La evaluación conlleva pruebas intermedias individuales escritas (60%), un trabajo grupal (30%) y asistencia (10%).",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teórica (2027937)",
    "grupos": [
     {
      "grupo": "Grupo Amazonía",
      "codigoGrupo": "6",
      "profesores": [
       "Fernando José Rodríguez Mesa"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": []
     },
     {
      "grupo": "Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Fernando José Rodríguez Mesa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 285,
      "sesiones": []
     },
     {
      "grupo": "Grupo Caribe",
      "codigoGrupo": "5",
      "profesores": [
       "Fernando José Rodríguez Mesa"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": []
     },
     {
      "grupo": "Grupo Medellín",
      "codigoGrupo": "2",
      "profesores": [
       "Fernando José Rodríguez Mesa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": []
     },
     {
      "grupo": "Grupo Orinoquía",
      "codigoGrupo": "7",
      "profesores": [
       "Fernando José Rodríguez Mesa"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": []
     },
     {
      "grupo": "Grupo Tumaco",
      "codigoGrupo": "8",
      "profesores": [
       "Fernando José Rodríguez Mesa"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2027941": {
  "cod": "2027941",
  "codigoSIA": "2027941",
  "nombre": "En el interregno de la ilustración y romanticismo. los ecos de frankenstein",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "\"En el interregno de la ilustración y el romanticismo: los ecos de Frankenstein\" es una asignatura que parte de la implementación en el 2017-II de la Cátedra de Sede Gabriel García Márquez \"Frankenstein de Mary Shelley: Nuevas miradas políticas y estéticas\" que trató de acercarse a la obra literaria de Frankenstein (publicada en 1818) como un mito matriz de la modernidad.\n\nComo ficción literaria, Frankenstein abre y conjuga, a nivel estético, social y académico, una agenda de temas que todavía puede considerarse vigente (el dominio tecnológico de la naturaleza, la ética del reconocimiento, la conformación de una identidad de género...). En este sentido, la asignatura explora un universo de posibilidades de interpretación de la novela de Mary Shelley alrededor la constitución de la identidad social e individual en un mundo de representaciones específicamente moderno (Burdiel, 2016: 55)\n\nLa intersección entre artes-ciencias-humanidades que plantea el curso permite aprehender y dimensionar, de una forma más compleja y profunda, que el conocimiento, la política y la estética son espacios interdependientes. En este sentido, la asignatura aspira a propiciar una lectura crítica de obras estéticas y legados cientifico-patrimoniales del peeríodo social, científico y cultural en el que se desarrolló la obra de Mary Shelley y que nos adentran al \"interregno\" de la ilustración y el romanticismo.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2027941)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "EDMON CASTELL GINOVART"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 200,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "12:00",
        "fin": "14:00",
        "lugar": "TEATRO NUEVOS ESPACIOS DE LAS ARTES",
        "salon": "303C-004",
        "edificio": "303 - EDIFICIO DE LAS ARTES SEDE BOGOTA",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027992": {
  "cod": "2027992",
  "codigoSIA": "2027992",
  "nombre": "Cátedra de gestión y organizaciones",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta asignatura tiene como propósito abordar temas relevantes en la gestión empresarial, por lo tanto su contenido puede variar de semestre a semestre. La asignatura será conducida por un docente invitado que puede ser un directivo de alguna organización o un profesor nacional o internacional experto en un tema particular.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2027992)",
    "grupos": []
   }
  ]
 },
 "2028022": {
  "cod": "2028022",
  "codigoSIA": "2028022",
  "nombre": "La astronomía en la historia",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso expondrá la relación entre los eventos históricos humanos de los últimos miles de años con el conocimiento que tenemos del universo en el que estamos. Ello se logrará estudiando las principales etapas de evolución histórica y examinando la correspondencia con los descubrimientos e invenciones que han permitido acercarnos a una visión más clara y entendible del universo.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028022)",
    "grupos": [
     {
      "grupo": "Grupo 01",
      "codigoGrupo": "1",
      "profesores": [
       "Jose Gregorio Portilla Barbosa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 117",
        "salon": "413-117",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 117",
        "salon": "413-117",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028036": {
  "cod": "2028036",
  "codigoSIA": "2028036",
  "nombre": "La dimensión espacial del capital: la economía política de la tenencia de la tierra",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Estudiar los tópicos (del griego &#964;&#959;&#960;&#953;&#954;&#972;&#962;) y discusiones en la economía política del control de la tierra, revisando el origen social de la apropiación del espacio y del ordenamiento territorial, la historia de la propiedad de la tierra, y las consecuencias de tipos de tenencia sobre la dirección del cambio técnico y la inversión, y al fin, sobre la democracia. Desde esta perspectiva se ve la tenencia de la tierra como (i) un proceso histórico de mutuas relaciones con la distribución del poder, con cierta concepción del desarrollo y con las democracias tanto auténticas como aparentes (o simuladas), y (ii) también como la base de control de los elementos naturales en general, y no solo como suelos productivos. A lo largo del curso los estudiantes analizarán algunas aproximaciones hechas a este tema a través de las nociones económicas de escasez, relatividad y distribución",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028036)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "WILLIAM CHAVARRO ROJAS"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 46,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO AUXILIAR 1",
        "salon": "310-121",
        "edificio": "310 - Antonio García Nossa",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO AUXILIAR 1",
        "salon": "310-121",
        "edificio": "310 - Antonio García Nossa",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028288": {
  "cod": "2028288",
  "codigoSIA": "2028288",
  "nombre": "Nasa Yuwe y pensamiento Nasa II",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso está dirigido a integrantes de la comunidad académica en general, interesados en el conocimiento y la conservación del patrimonio inmaterial, y especialmente en sensibilizarse con respecto a la realidad lingüística y cultural de los indígenas nasa desde un entorno urbano. Para esto, no será necesario que los estudiantes tengan conocimientos o prerrequisitos en lingüística, pues el profesor, que es integrante de la comunidad, contribuirá al aprendizaje de los contenidos pertinentes, presentándolos de forma sencilla y contextualizada.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028288)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "ISAAC QUILCUE PUMBA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 18,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "10:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028300": {
  "cod": "2028300",
  "codigoSIA": "2028300",
  "nombre": "Seminario sobre economía del cambio climático, áreas metropolitanas y desastres naturales.",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El cambio climático es una realidad evidente, muy a pesar de que un grupo reducido políticos sigan dudando de su existencia. El impacto de este fenómeno tiene serias repercusiones en diferentes frentes de la vida diaria. En este seminario se abordará el tema desde la perspectiva económica y social.\n\"Ya no hay ninguna duda de que el clima está cambiando\", aseguró el secretario de la Organización Mundial de Meteorología (OMM), Michel Jarraud y añadió que \"el 95 % de este cambio se debe a la actividad humana\".",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028300)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Moises Ildefonso Cetre Castillo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028448": {
  "cod": "2028448",
  "codigoSIA": "2028448",
  "nombre": "Agrobiodiversidad",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La agrobiodiversidad es la parte de la diversidad biológica que atañe a la alimentación y la agricultura. Esta asignatura introduce al estudiante en los diferentes componentes de la agrobiodiversidad, donde se hace un repaso al origen, principales conceptos, metodologías y estrategias de conservación, estudio y utilización de la agrobiodiversidad, cubriendo los componentes agrícola, forestal, pecuario, entomológico, acuático y microbiano.\nEn el abordaje de cada componente, la atención se focaliza en Colombia, sin olvidar su rol en Latinoamerica y el contexto global, y en los retos que se deben afrontar para la preservación, conocimiento y el buen uso que se debe dar a estos valiosos recursos, los cuales son patrimonio de la nación y herencia para las siguientes generaciones.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028448)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Hector Mauricio Parra Quijano"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 130",
        "salon": "500-130",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 301",
        "salon": "500-301",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028465": {
  "cod": "2028465",
  "codigoSIA": "2028465",
  "nombre": "Para aficionados",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta asignatura tiene por objeto primordial permitir que los alumnos de la Universidad Nacional que hayan tenido alguna instrucción o practica musical y que no cursen un programa de música en la misma Universidad, puedan desarrollar sus habilidades en el canto o la música instrumental con el apoyo académico adecuado. Podrán inscribirse alumnos de todas las carreras de la Universidad Nacional para voces e instrumentos sinfónicos y de banda y alumnos del Conservatorio de Música para participar en un instrumento principal diferente al que cursan. Los cantantes en algún instrumento y los instrumentistas en canto o un instrumento diferente al instrumento que estudian.\n\nObjetivos: Permitir que los alumnos de la Universidad Nacional que hayan tenido alguna instrucción o practica musical y que no cursen un programa de música en la misma Universidad, puedan desarrollar sus habilidades en el canto o la música instrumental con el apoyo académico adecuado\n\nMetodología: Los alumnos de posgrado se pueden inscribir tanto para participar como cantantes o instrumentistas o para realizar labores de ¿coaching¿ en el area de dirección orquestal, coral, bajo continuo, arreglos orquestales y corales, etc.\n\nConceptos Previos: Se requiere haber tenido un nivel aceptable de instrucción y de practica musical, (canto o instrumentos sinfónicos). Son estudiantes de posgrado en disciplinas musicales que han pasado por unas pruebas de admisión. Se realizará una entrevista-audición después de la inscripción para asegurar la permanencia en el curso.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028465)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Egberto Bermudez Cujar"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 200,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028496": {
  "cod": "2028496",
  "codigoSIA": "2028496",
  "nombre": "Inteligencia artificial para médicos",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El uso de la Inteligencia Artificial (AI por sus siglas en inglés) en el trabajo diario del médico es una realidad cada vez más presente. En el curso se hará una breve introducción a las bases y los conceptos claves de la AI, así como a los desafíos técnicos y éticos, y su relación con los futuros profesionales de la salud.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028496)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "JUAN DAVID GARCIA ARTEAGA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2028569": {
  "cod": "2028569",
  "codigoSIA": "2028569",
  "nombre": "Constitución, democracia y paz",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El grupo de investigación REPENSAR el DERECHO ofrece: Analizar el proceso político jurídico y social de la convocatoria a una Asamblea Nacional Constituyente. Identificar los proyectos societales y concepciones de justicia incorporados en el texto constitucional y su desarrollo a casi 30 años de vigencia y aplicación, con énfasis en el talante populista de las reformas. Explorar los rasgos del proyecto autoritario que se ha cernido contra la Constitución del 91. Reconstruir el proceso de paz con las FARC, su estructura sistémica y normativa para dar cuenta de la estocada que ha sufrido en su desarrollo y en la defensa de una paz estable.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2028569)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Diana Marcela Hincapie Cetina"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "SALON DE CLASE",
        "salon": "201-120",
        "edificio": "201 - Arturo Valencia Zea",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028571": {
  "cod": "2028571",
  "codigoSIA": "2028571",
  "nombre": "Clínica jurídica: litigio estratégico",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Las clínicas jurídicas son un aspecto relevante en la formación de las capacidades para el litigio, la conciliación y el trabajo interdisciplinario en los futuros abogados. La Clínica Jurídica Litigio Estratégico está diseñada conscientemente para promover la aclaración, el respeto, la protección y la realización de los derechos. La idea es cambiar las leyes, políticas y prácticas, y obtener remedios o reparaciones tras violaciones de derechos humanos. El litigio estratégico también trata a menudo de concienciar a la población sobre una injusticia.\n\nEl Litigio estratégico es una herramienta para la protección y la prevención de vulneraciones de los derechos de las personas, que implica la planeación y ejecución de estrategias jurídicas, políticas, sociales y comunicacionales que permitan un impacto\npositivo en la sociedad. En este sentido la Clínica Jurídica tiene una visión amplia de esta herramienta, que permite el desarrollo de estrategias de alto impacto que no siempre requieren la fijación de un litigio para lograr la defensa de los derechos de los individuos.\n\nConceptos Previos\nDerecho Constitucional Colombiano; Derecho Administrativo I; Derechos Humanos Integrales.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028571)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Diana Carolina Florez Bayona"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "AULA 109",
        "salon": "610-109",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028574": {
  "cod": "2028574",
  "codigoSIA": "2028574",
  "nombre": "Clínica jurídica: penal y procesal penal",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Clínica Jurídica: Penal y Procesal Penal tiene como objetivo la aplicación de los conocimientos teóricos de los estudiantes para brindar nuevas estrategias de origen práctico desde la experiencia, utilizando herramientas de investigación formativa.\n\nConceptos Previos: Derecho Penal; Teoría del Delito; Derecho Procesal Penal",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028574)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "VICTOR HUGO OSPINA VARGAS"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "19:00",
        "lugar": "SALON DE CLASE",
        "salon": "201-207",
        "edificio": "201 - Arturo Valencia Zea",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028610": {
  "cod": "2028610",
  "codigoSIA": "2028610",
  "nombre": "Museografía y escenografía",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso pretende indagar sobre los conceptos de museo y exposición museográfica.\n- A través de ejemplos y textos de referencia, se estudiarán las implicaciones científicas, culturales, educativas y políticas de estos conceptos. De igual manera se estudiarán los diferentes actores y las diferentes profesiones imbricadas en la creación de una exposición museográfica, en particular la relación entre curaduría y escenografía.\n- Se estudiaran ejemplos ilustrados de construcciones de exposiciones museográficas con problemáticas específicas y se indagará sobre los elementos que constituyen una experiencia de visita.\n- Se realizará una exposición en predios o espacios de la Universidad Nacional, Sede Bogotá, (curaduría, contenido, escenografía, grafismo, logística, publicación y comunicación), con el fin de fundir, gracias a una práctica, los conocimientos teóricos abordados en la primera parte del programa.\n\nConceptos Previos: Pensamiento Arqueología I y II",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Grupo 1",
    "grupos": []
   }
  ]
 },
 "2028615": {
  "cod": "2028615",
  "codigoSIA": "2028615",
  "nombre": "Derecho, ordenamiento del territorio y urbanismo",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Especialmente a partir de mediados del siglo XX fue posible distinguir en Colombia, y en general en América Latina, una tendencia dramática al incremento de la población y los asentamientos urbanos. Dicho fenómeno ha tenido repercusiones importantes en materia económica, social y política, y ha impactado de manera sustancial las formas de vida de los habitantes. Uno de los campos donde aquella situación ha tenido mayores impactos se relaciona justamente con la ocupación del espacio urbano, ámbito dentro del cual se presenta una disputa permanente determinada por las reglas que impone la ciudad capitalista. En ese marco, el derecho ocupa un papel fundamental como articulador activo o pasivo de las relaciones entre los diferentes agentes que intervienen en el territorio y el mercado del suelo. La asignatura propuesta ofrece un acercamiento al desenvolvimiento del derecho en el marco de esa disputa lo que implica reflexionar sobre la existencia del derecho al territorio urbano, los principales dilemas que ha generado el crecimiento urbano, las formas de intervención del gobierno frente a dichos dilemas y las vías jurídicas que adquiere el ordenamiento físico de la ciudad.\n\nConceptos Previos: Derecho Territorio Propiedad Ciudad",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA",
    "grupos": []
   }
  ]
 },
 "2028643": {
  "cod": "2028643",
  "codigoSIA": "2028643",
  "nombre": "Cátedra Pinsus Julio Carrizosa",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Sustentabilidad es un campo transdisciplinar en el que ingenieras e ingenieros cooperan con otras disciplinas. Cobra importancia la capacidad que tienen estos profesionales de comunicarse con otras áreas y con otros grupos de interés, sin perder la calidad disciplinaria. La ingeniería no ha pertenecido a la vanguardia de la sustentabilidad, pero ahora en diversas instituciones de ingeniería se están haciendo cambios este sentido. Una de las prioridades actuales es la necesidad de la integración del concepto de sustentabilidad en los programas de ingeniería, ya que, según la literatura académica, se puede prever un aumento de la demanda de ingenieros con altas competencias en tecnologías de producción limpia y gestión ambiental, mitigación del cambio climático y demás aspectos de la Sustentabilidad.\nEn la actualidad los países en el mundo se enfocan en aportar desde diferentes áreas del conocimiento para cumplir los Objetivos del Desarrollo Sostenible-ODS, que son un pilar fundamental para lograr la transición del planeta hacia la sustentabilidad.\nLa propuesta de la asignatura parte de cuestionarse ¿Qué deben aprender los ingenieros en el marco de la sustentabilidad? ¿Cuáles son los problemas para tratar y cómo resolverlos? Esto implica que un ingeniero debe comprender las complejidades del entorno social en el que se encuentra desarrollando soluciones y la complejidad de hacer mejoras a corto plazo que se ajusten en un camino a largo plazo de sustentabilidad.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA-Cátedra Pinsus Julio Carrizosa (2028643)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Virtual Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Jose Ismael Peña Reyes"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 100,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "19:00",
        "lugar": "Aula Virtual Bogotá",
        "salon": "B_AULAVIRTUAL",
        "edificio": "Bogotá - Edificio Virtual",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028646": {
  "cod": "2028646",
  "codigoSIA": "2028646",
  "nombre": "Gestión ambiental agropecuaria",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta asignatura busca la formación del estudiante en la gestión ambiental de unidades productivas agropecuarias, incluyendo el diagnóstico, el manejo, la evaluación y la identificación de alternativas de solución integral a las problemáticas ambientales encontradas. Para este fin se estudian los conceptos y la utilización de diferentes instrumentos de la gestión ambiental, considerando las interacciones con las dimensiones social y económica en los espacios estudiados. La asignatura contempla el contexto territorial, que permite la interacción entre diferentes unidades productivas, y la visión espacial (apoyándose en sistemas de información geográfica) hacia la sostenibilidad rural. Esta asignatura de libre elección está orientada a estudiantes de las carreras de Ingeniería Agronómica, Ingeniería Agrícola, Medicina veterinaria, Zootecnia y Biología interesados en la producción agropecuaria.\n\nConceptos Previos: Se requieren conceptos básicos de producción agrícola o producción animal, administración agropecuaria, desarrollo rural, suelos, manejo de agua, fisiología, sanidad.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028646)",
    "grupos": []
   }
  ]
 },
 "2028647": {
  "cod": "2028647",
  "codigoSIA": "2028647",
  "nombre": "Ecologia numerica",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Una habilidad fundamental en las ciencias en general y por tanto en la ecología, es el pensamiento cuantitativo. Es decir, que mediante cantidades continuas o discretas que se relacionan unas con otras se logre encontrar la respuesta a un problema en términos de pruebas de hipótesis o inferencias en términos de detección de un patrón. En principio la herramienta para ello es la estadística. La necesidad de este tipo de competencias es mas aguda en la medida que se avanza en la carrera de Biología y sin ellas un estudio de posgrado a nivel de maestría y doctorado no tendrá éxito en general. En el pregrado de Biología es frecuente encontrar que la idea de los estudiantes sobre la estadística como herramienta en precaria. El curso disciplinar propuesto aquí pretende llenar el vacío detectado. Este curso se plantea como una aproximación eminentemente práctica a las preguntas, los métodos y las herramientas estadísticas útiles en ecología. Con esto se quiere decir que la teoría estadística se mantendrá al mínimo necesario para comprender el funcionamiento básico del método y la razón de su relevancia en responder la pregunta ecológica.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2028647 (2028647)",
    "grupos": []
   }
  ]
 },
 "2028674": {
  "cod": "2028674",
  "codigoSIA": "2028674",
  "nombre": "Biofísica para todos",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La biofísica ha sido fundamental para comprender la mecánica de cómo se forman las moléculas de la vida, cómo se mueven y funcionan las diferentes partes de una célula, y cómo funcionan los sistemas complejos en nuestros cuerpos (el cerebro, la circulación, el sistema inmune y otros). La biofísica es un campo científico vibrante donde los científicos de muchos campos, incluyendo matemática, química, física, ingeniería, farmacología y ciencias de los materiales, utilizan sus habilidades para explorar y desarrollar nuevas herramientas para comprender cómo funciona la biología, toda la vida.\nEste curso introduce el uso de métodos físicos en el estudio de diversos sistemas biológicos desde diferentes puntos de vista y desde distintas disciplinas, incluyendo macromoléculas, proteínas, membranas celulares, simulaciones computacionales de sistemas biológicos, aplicaciones de la biofísica en la medicina pasando por sistemas simplificados de la célula hasta sistemas más complejos.\n\nConceptos Previos: El curso supone el conocimiento de conceptos de la física en sus niveles básicos (conceptos generales de la educación media) y conocimientos muy básicos de matemáticas. El curso no asume un conocimiento detallado de la química o la biología. Sin embargo, un conocimiento general temas biológicos será muy beneficioso para los estudiantes aunque no indispensable. Algunos temas específicos de biología y química serán introducidos en las clases.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028674)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Yuly Edith Sanchez Mendoza"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2028822": {
  "cod": "2028822",
  "codigoSIA": "2028822",
  "nombre": "Intercambio académico internacional - III prórroga",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se crea código por solicitud de la ORI Sede Bogotá enmarcada en la Resolución 105 de 2017 de la VRA, debe estar autorizado por la Dirección de Relaciones Exteriores DRE para la inscripción de esta asignatura.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2028822)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Docente Ajuste Resto "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2028914": {
  "cod": "2028914",
  "codigoSIA": "2028914",
  "nombre": "Géneros, feminismos y diversidades UN",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta Cátedra de Género de Facultad debe comprenderse desde el proceso de construcción y diálogo que hubo previo a ella, que tuvo lugar en el espacio de trabajo Triestamentario de la Mesa de Género de Facultad. Allí, durante dos meses estudiantes, dirección de bienestar y algunes profes, trabajamos esta propuesta con dedicación y compromiso.\nEjes Transversales\n1. Conocimientos y Experiencias Situadas: diálogo cultural y de saberes\n&#9679; Es importante que a través del respeto, el debate , el cuestionamiento propio y amplio frente a las problemáticas, la cátedra de género de la facultad sea un espacio que potencie y reconozca la participación de saberes y experiencias diversas que permitan un diálogo cultural situado que enriquezca las perspectivas, debates y posibilite un abordaje integral de los mismos.\n\n2. Reflexividad: entre lo micro-macro político\n&#9679; Teniendo en cuenta que la cátedra está construida con el objetivo de que las y los participantes se permitan una interpelación personal y colectiva de los temas teórico-políticos tratados, la idea es que puedan hacer este ejercicio desde una reflexión constante frente a su posición respecto a factores como la clase, género y raza para de esa manera tener una mejor comprensión - tanto propia como hacia las/os demás- de los aportes que se realizan, los sesgos que puedan tener, pero también de las potencialidades de construcción conjunta, crítica y diversa.\n\n3. Participación SentiPensante: empatía, escucha, etc.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028914)",
    "grupos": []
   }
  ]
 },
 "2028975": {
  "cod": "2028975",
  "codigoSIA": "2028975",
  "nombre": "Gestión sanitaria y resistencia a las enfermedades animales",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El control de las enfermedades animales es fundamental para potenciar su desempeño, expresando toda su capacidad productiva. Los mecanismos biológicos mediante los cuales los animales responden a los diferentes agentes infecciosos así como el adecuado funcionamiento y estímulo de los organos y tejidos involucrados, son la base para una adecuada gestión sanitaria. La comprensión de los mecanismos que confieren resistencia a las enfermedades infecciosas animales y de las estrategias para estimularlos son herramientas clave para una producción óptima e inocua. Adicionalmente, los métodos contemporaneas para identificar y seleccionar animales que expresen diferentes grados de resistencia a las enfermedades infecciosas son una opción para reducir la incidencia de casos y garantizar la calidad de los productos animales.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028975)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Edwin Camilo Tequia Rubio"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029046": {
  "cod": "2029046",
  "codigoSIA": "2029046",
  "nombre": "La desaparición y búsqueda de personas en el contexto y en razón del conflicto armado en Colombia",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Objetivo General\n: Promover un espacio para la discusión amplia y desde múltiples perspectivas sobre la desaparición de personas en el contexto y en razón del conflicto armado en Colombia, y de los procesos de búsqueda de las personas dadas por desaparecidas, tanto en su trámite mediante la justicia ordinaria, como en el marco de los procesos de justicia transicional y fundamentalmente en el marco del&#8203;&#8203;&#8203;&#8203;&#8203;&#8203; &#8203;&#8203;Acuerdo Final para la Terminación del Conflicto y la Construcción de una Paz Estable y Duradera.\n\nObjetivos específicos\n: i. Conocer los antecedentes y las dinámicas que caracterizan el proceso de la búsqueda de las personas dadas por desaparecidas realizado desde el Estado colombiano, incluyendo la búsqueda humanitaria y extrajudicial desarrollada por la UBPD en el marco del SIVJRNR creado por los acuerdos de paz.\n\nii. Evidenciar las necesidades, impactos, expectativas, particularidades, reivindicaciones, saberes, experiencias, y aprendizajes de las personas que buscan (familiares, allegados, organizaciones, comunidades) y la manera en que se concretiza su lucha por la verdad, la memoria, la justicia y la reparación.\n\niii. Debatir sobre los retos y desafíos que enfrenta la búsqueda de las personas dadas por desaparecidas en el contexto de la continuidad del conflicto armado en Colombia.\n\n\nConceptos previos: En la retórica de los familiares, allegados y organizaciones que buscan a las personas desaparecidas en contexto y razón del conflicto armado colmbiano, pero también otros buscadores en el mundo, está de manera muy constante la idea de abandono de la sociedad y del Estado",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029046)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Maria Clemencia Del Pilar Castro Vergara",
       "Sebastian Cuellar Sarmiento",
       "Claudia Patricia Sierra Pardo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 250,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029102": {
  "cod": "2029102",
  "codigoSIA": "2029102",
  "nombre": "Análisis crítico de medios de comunicación y redes digitales",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Ofrecer elementos teóricos y conceptuales para la comprensión del funcionamiento de los sistemas de medios de comunicación, sus interacciones mediáticas y su articulación con las redes sociales.\n\nConceptos Previos: Metodología: Clases magistrales, Ejercicios y talleres de recepción activa de medios, Trabajo colectivo sobre lecturas teóricas y metodológicas, Presentación y análisis de experiencias prácticas de recepción crítica y de producción alternativa de medios.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": []
 },
 "2029283": {
  "cod": "2029283",
  "codigoSIA": "2029283",
  "nombre": "El arte, las terapias y el cuidado de la salud humana",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura elegible El arte, las terapias y el cuidado de la salud humana está orientada a ofrecer elementos teóricos para reconocer el aporte que hacen las terapias fundamentadas en la creación, la comunicación y las experiencias de expresión artística, dentro de las que se encuentran las tradicionales (dibujo, pintura, escultura) como las modernas (fotografía y video) y la música, en el contexto del cuidado de la salud humana. Este se pretende como un espacio para colocar en contexto el arte y sus diferentes expresiones como herramientas posibles terapéuticas en disciplinas como la enfermería y otras del area de la salud.\n\nConceptos Previos: Atención primaria en salud, psicología del ciclo vital, intervenciones en salud, ética de las profesiones en salud, salud mental.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029283)",
    "grupos": []
   }
  ]
 },
 "2029298": {
  "cod": "2029298",
  "codigoSIA": "2029298",
  "nombre": "Linea de profundización en anatomía comparada I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La anatomía como una disciplina antigua y de tradición docente ha perdurado a lo largo de la historia, su innovación en los espacios universitarios debe ajustarse a las nuevas demandas de la sociedad y del futuro profesional.\n\nEsta Línea propone innovar en la enseñanza de la anatomía a través del estudio de casos clínicos reales con enfoques quirúrgicos, donde posteriormente se realizarán disecciones anatómicas simulando las técnicas quirúrgicas referidas como de interés.\nEsta asignatura se desarrollará con dos enfoques, el primero comprende un componente teórico, donde el estudiante, en conjunto con el profesor tutor, definen el tema de interés anatómo/quirúrgico, luego, en el componente práctico, el estudiante deberá realizar sobre cadáveres la dirección simulando la técnica quirúrgica pero con un enfoque anatómico.\n\nEstas prácticas anatómicas guiadas con objetivos específicos, permitirán la construcción de didácticas de aprendizaje centradas en el sujeto como principal objetivo de enseñanza.\n\nConceptos Previos: Anatomía comparada Fisiología Cirugía",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2029298)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "HUGO ANDRES GUTIERREZ TRUJILLO"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029315": {
  "cod": "2029315",
  "codigoSIA": "2029315",
  "nombre": "Pedagogías y antipedagogías para potenciar el aprendizaje y bienestar de estudiantes universitarios",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Teorías, modelos y experiencias concretas sobre Pedagogías y antipedagogías para potenciar el aprendizaje y bienestar de las y los estudiantes universitarios. Estudiar trayectorias de aprendizaje y educación que permiten comprender aspectos fundamentales en la construcción del conocimiento. Dar herramientas para mejorar la capacidad de aprender en los estudiantes, que incrementen su nivel de satisfacción con la vida universitaria y su competencia en el proceso de formación profesional. Cómo las verdaderas motivaciones intrínsecas, los entusiasmos y las necesidades vitales concretas de conocimiento inciden directamente en el aprendizaje y la educación. Este curso contribuye explícitamente a entender y reducir la procrastinación - aplazamiento.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": []
 },
 "2029331": {
  "cod": "2029331",
  "codigoSIA": "2029331",
  "nombre": "Teorías feministas y de género: ópticas interseccionales en teorías, investigación y praxis social",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Las lógicas identitarias en el pensamiento u ópticas interseccionales se encuentran en la ambivalencia de perder su potencia transformadora de los esquemas de opresión de los regímenes de poder que se impone en la interseccionalidad operativa o funcional y por otro lado la posibilidad de seguir construyendo desde la diferencia afirmativa las estrategias de defensa situada y de deconstrucción de esos regímenes de poder. Así, «dadas sus fortalezas para conceptualizar la simultaneidad, la sistematicidad, la asimetría y las estrategias dependientes del contexto contra la opresión, descolonizar su reducción a teorías identitarias, la interseccionalidad es una importante herramienta analítica para desmontar la sistematicidad de la opresión que enfrentan las mujeres y niñas en el Sur global» (Ruiz, 2017, p. 345), estas apuestas y aportes los situaremos en la discusión sobre los feminismos descoloniales y la impronta en los análisis críticos de la raza y la clase que se desarrollaban desde la década de los 70 del siglo XX.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": []
 },
 "2029352": {
  "cod": "2029352",
  "codigoSIA": "2029352",
  "nombre": "A luchar por la educación superior I: de servicio a derecho fundamental",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La política educativa en Colombia ha sido cimentada desde políticas neoliberales de privatización y mercantilización del conocimiento. El movimiento universitario se ha organizado para impulsar el desarrollo histórico de un nuevo modelo que reconfigure la educación como derecho fundamental y bien común. Esta reconfiguración en la política educativa requiere de la apertura de espacios académicos, políticos, culturales y artísticos de carácter colectivo, amplio, horizontal, contrahegemónico y de transformación para la reflexión del movimiento universitario y del conjunto de la sociedad colombiana.\nA partir de esta necesidad, el estamento estudiantil desde las distintas facultades de la UNAL Sede Bogotá, reconoció diferentes problemáticas estructurales que atraviesan a la comunidad universitaria y al modelo mismo de la Educación Superior, por lo que decide ejercer procesos de organización y cualificación internas que desencadenan en Paro Estudiantil. De este mecanismo, se exige una Mesa de Negociación con la Vicerrectoría, en la cual se socializa la propuesta Mesas de Trabajo por la Constituyente -METCO y se acuerda la implementación de seis Mesas de Trabajo de carácter multiestamentario: A. Democracia y Autonomía Universitaria, B. Modelo de Financiamiento, C. Política de Género, D. Bienestar Universitario, E. Seguridad y Derechos Humanos y, F. Relación I.E.S- Sociedad.\n\nObjetivo: Analizar críticamente el estado histórico y actual de los ejes: Democracia y Autonomía Universitaria, Modelo de Financiamiento, Política de Género, Bienestar Universitario, Seguridad y DDHH, Relación IES ¿ Sociedad; con el fin de aportar a la identificación de necesidades y problemáticas de la política educativa y del movimiento universitario en la configuración de la Educación Superior como derecho fundamental y bien común.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TALLER (2029352)",
    "grupos": [
     {
      "grupo": "Mesa: Bienestar universitario",
      "codigoGrupo": "4",
      "profesores": [
       "Andres Sicard Currea"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Mesa: Democracia y autonomía universitaria",
      "codigoGrupo": "1",
      "profesores": [
       "Andrea Carolina Jimenez Martin"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Mesa: Política de género",
      "codigoGrupo": "3",
      "profesores": [
       "Laura Espinosa Botero"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Mesa: Relación I.E.S - Sociedad",
      "codigoGrupo": "6",
      "profesores": [
       "Francisco Javier Toloza Fuentes"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Mesa: Seguridad y derechos humanos",
      "codigoGrupo": "5",
      "profesores": [
       "Erika Constanza Sabogal Muñoz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029371": {
  "cod": "2029371",
  "codigoSIA": "2029371",
  "nombre": "Estética de la vida",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso propone una aproximación selectiva de pensamiento, modos y prácticas sociales que constituyen pilares de una formación profesional integral, civilidad y ética desde referencias y contextos de una realidad y su cultura como bases privilegiadas de la ética e institucionalización en la educación-profesionalización universitaria. En este caso se abordan campos y temas relevantes con el propósito de reflexionar como los naturales y diversos modos del conocimiento y relaciones de prácticas sociales, definen la conciencia humana ante los desafíos trascendentes de sostenibilidad del espacio mundo, y en consecuencia de la vida.\n\nConceptos Previos: 1. Estudiantes de pregrado que constituyen todas las carreras y facultades de la universidad con prospectiva de extensión a todas las sedes. 2. Establecer la comprensión del fin pedagógico de los cursos electivos como fundamentales en la formación profesional e integral del profesional y ciudadano. 3. Evidenciar la realidad y emergencia universal de la humanidad con énfasis particular en Colombia, a través del contenido temático del curso. Objetivo General Accionar una reflexión y diálogo colectivo como medio y arbitrio de la enseñanza en el proceso de profesionalización en la educación superior en cuanto primicias de construcción de un juicio crítico sustantivo e inteligente con valor prospectivo de progreso y empatía social.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029371)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Aurelio Alberto Horta Mesa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 130,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AUDITORIO MARGARITA GONZALEZ",
        "salon": "225-AUD2",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029377": {
  "cod": "2029377",
  "codigoSIA": "2029377",
  "nombre": "Linea de profundización en anatomía comparada II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La anatomía como una disciplina antigua y de tradición docente ha perdurado a lo largo de la historia, su innovación en los espacios universitarios debe ajustarse a las nuevas demandas de la sociedad y del futuro profesional.\n\nEsta Línea propone innovar en la enseñanza de la anatomía a través del estudio de casos clínicos reales con enfoques quirúrgicos, donde posteriormente se realizarán disecciones anatómicas simulando las técnicas quirúrgicas referidas como de interés.\nEsta asignatura se desarrollará con dos enfoques, el primero comprende un componente teórico, donde el estudiante, en conjunto con el profesor tutor, definen el tema de interés anatómo/quirúrgico, luego, en el componente práctico, el estudiante deberá realizar sobre cadáveres la dirección simulando la técnica quirúrgica pero con un enfoque anatómico.\n\nEstas prácticas anatómicas guiadas con objetivos específicos, permitirán la construcción de didácticas de aprendizaje centradas en el sujeto como principal objetivo de enseñanza.\n\nLa Linea de Profundización en Anatomía Comparada II esta proyectada para desarrollarse en grandes animales.\n\nConceptos Previos: Anatomía Comparada Fisiología Cirugía",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2029377)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "HUGO ANDRES GUTIERREZ TRUJILLO"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029382": {
  "cod": "2029382",
  "codigoSIA": "2029382",
  "nombre": "Rebeldías y cárcel",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La cárcel se constituye en un espacio de control y disciplinamiento social y político. Por su parte, las rebeldías, siguen siendo consideradas como espacios ajenos a la democracia, y la protesta está lejos de ser considerada un derecho. Nuestras miradas y comprensiones sobre estos dos procesos (cárcel y rebeldías) están enmarcadas en miradas hegemónicas que refuerzan una perspectiva punitivista y basada en la venganza de la cárcel; y una mirada sospechosa de las rebeldías. Este curso se propone retar estas perspectivas hegemónicas por medio de la discusión crítica de los aspectos conceptuales, históricos y vivenciales de las cárceles y las rebeldías desde una perspectiva abolicionista de la prisión y promotora de las desobediencias. Es así como este curso provee a las y los estudiantes reflexiones diversas y ancladas en las realidades vivenciales de prisioneras y prisioneros, y sus rebeldías y procesos de lucha.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029382)",
    "grupos": [
     {
      "grupo": "GRUPO 1",
      "codigoGrupo": "1",
      "profesores": [
       "Maria Teresa Pinto Ocampo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "SALON DE CLASE - IEPRI",
        "salon": "224-2021",
        "edificio": "224 - Manuel Ancizar",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029398": {
  "cod": "2029398",
  "codigoSIA": "2029398",
  "nombre": "El engaño y la política: aproximación histórica y comparada",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso presenta una selección de nuevas traducciones de textos clásicos tomados de varias tradiciones, principalmente la occidental, acerca del problema del engaño y la política. Estos textos invitan a una reflexión acerca de la mentira como método de lucha, equivalente a la perfidia en los conflictos armados; al uso del engaño como un medio legítimo para lograr la adhesión al orden por parte de los gobernados; así como a la distorsión de las fronteras entre la verdad y la mentira en los regímenes totalitarios, y también en los llamados democráticos. La última parte del curso presenta un panorama de la discusión actual acerca de la llamada posverdad, así como de la difusión de noticias falsas y teorías conspirativas.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029398)",
    "grupos": [
     {
      "grupo": "GRUPO 1",
      "codigoGrupo": "1",
      "profesores": [
       "JUAN GABRIEL GOMEZ ALBARELLO"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALON DE CLASE - IEPRI",
        "salon": "224-3030",
        "edificio": "224 - Manuel Ancizar",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029408": {
  "cod": "2029408",
  "codigoSIA": "2029408",
  "nombre": "Introducción a la programación y ciencia de datos para el área de salud",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que en los próximos 20 años el 90% de los trabajos del secto salud requiera algún tipo de habilidad tanto digitales como de manejo de datos. Bajo esta perspectiva, para las siguientes generaciones de personal de salud no entender los fundamentos de la programación será el equivalente a, hoy en día, no saber leer.\n\nEl presente curso busca introducir a los estudiantes a los conceptos básicos de programación y pensamiento algorítmico, sirviendo como fundamento de base tanto para aquellos que deseén ampliar sus conocimientos en áreas afines, e.g. la analítica de datos o el procesamiento de imágenes médicas, como para aquellos que deseén usar la algorítimica como una heramienta para lograr que un computador cumpla una tarea automatizable.\n\nEl curso usará el lenguaje de programación Python tanto por sus capacidades para generar secuencias de comando para la automatización de tareas (en inglés \"scripts\") como por su amplia variedad de librerías para análisis y visualización de datos.\n\nA lo largo del curso el estudiante desarrollará sus horas de trabajo autónomo mediante la elaboración de pequeños programas y proyectos entregables. Esta parte del trabajo es fundamental para que experimenten los errores comunes y facilmente corregibles que suceden al escribir código y así mismo mejoren sus habilidades de edición y depuración de software.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRÁCTICA (2029408)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "JUAN DAVID GARCIA ARTEAGA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029414": {
  "cod": "2029414",
  "codigoSIA": "2029414",
  "nombre": "Semillero de investigación en artes",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El semillero de investigación es un espacio para acompañar las iniciativas, inquietudes e intereses de investigación de lxs estudiantes de la facultad de artes. Este semillero se reúne en torno al proyecto editorial estudiantil REVISTA ars 301 y las actividades relacionadas con ella.\nEl trabajo del semillero de investigación se organizará en función de las etapas previstas para la realización de la publicación: realización convocatoria, recepción de material, actividades de divulgación, lectura de material, organización conceptual, búsqueda de recursos, etc. El objetivo específico dependerá, en consecuencia, de la etapa de la publicación. Sin embargo, como semillero de investigación el resultado de la experiencia académica será la comprensión y adquisición de herramientas prácticas de investigación y trabajo en grupo. Para ello, cada actividad del semillero estará articulado con una serie de tareas prácticas orientadas y guiadas por la necesidad de reconocer en el horizonte la materialidad de una publicación estudiantil.\n\nConceptos Previos: Nos apoyaremos especialmente en la programación de actividades que ofrece regularme el Programa de Formación en Competencias Informacionales de la División de Bibliotecas de la Universidad Nacional de Colombia de la Sede Bogotá. Esta programación ofrece a lxs estudiantes una serie de recursos muy útiles para diferentes momentos de la investigación.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029414)",
    "grupos": []
   }
  ]
 },
 "2029421": {
  "cod": "2029421",
  "codigoSIA": "2029421",
  "nombre": "Construcción de paz y justicia transicional en Colombia",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La firma del Acuerdo de Paz con las antiguas FARC-EP, sumado a pequeños avances anteriores que contribuyeron también en situar a las víctimas en el centro de la acción institucional, ha implicado para Colombia la apertura y desarrollo de un nuevo andamiaje institucional y el reto de profundizar la formación de ciudadanía critica capaz de comprender lo que estos cambios implican para las dinámicas socio-políticas del país.\nAsuntos como la construcción de verdad, la reparación integral, la justicia restaurativa y reparativa, las justicias propias, el perdón y la reconciliación, entre otros, inscritos en un contexto de diversidad étnica y territorial y atravesados por desafíos adicionales vinculados a los enfoques de género y diferenciales, son asuntos relevantes (JEP, 2023) que deben ser discutidos e incorporados en procesos de formación profesional.\nEsta cátedra busca generar espacios que permitan conocer, reflexionar, debatir sobre los fundamentos, sentidos y dilemas de la justicia transicional, sus desarrollos en Colombia y el trabajo específico de la JEP.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029421)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Jenniffer Vargas Reina"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "SALON OVAL DARIO MESA CHICA",
        "salon": "225-112",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029485": {
  "cod": "2029485",
  "codigoSIA": "2029485",
  "nombre": "Cátedra de género Luz Gabriela Arango Gaviria",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La cátedra de género Luz Gabriela Arango Gaviria se enmarca en las acciones emprendidas por la Sede Bogotá de la Universidad Nacional de Colombia, dirigidas al fortalecimiento de la prevención y atención de situaciones de violencias basadas en género. Se une al esfuerzo de fomentar más espacios académicos que brinden recursos teóricos y reflexivos para pensar los problemas de equidad de género en la sociedad y en la Universidad.\nEl nombre de esta cátedra se hace en memoria de Luz Gabriela Arango Gaviria, académica feminista y quien fuera profesora de la Escuela de Estudios de Género. La profesa Arango destacó por sus trabajos académicos sobre la situación de las mujeres trabajadoras y la economía del cuidado, además de participar activamente en la creación de políticas institucionales en torno a las mujeres y el género como el Acuerdo 035 de 2012.\nEsta asignatura busca crear aprendizaje significativo que promueva capacidades de reflexión teórica, ética y práctica sobre las relaciones de género y las políticas que se establecen para garantizar la equidad en la vida universitaria y a nivel nacional desde una perspectiva situada que reconozca las desigualdades de clase, raza, género, entre otras. El curso propone una aproximación a los conceptos y teorías vinculadas al campo de los estudios de género y feministas, y un análisis sobre los instrumentos normativos, pedagógicos y artísticos para propiciar la equidad de género.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029485)",
    "grupos": []
   }
  ]
 },
 "2029500": {
  "cod": "2029500",
  "codigoSIA": "2029500",
  "nombre": "Curso de contexto: Promoción de la salud y derecho humano a una alimentación saludable",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se propone con este curso de contexto abordar de manera amplia la promoción de la salud, como componente importante de la Salud Pública. En la etapa inicial del desarrollo del programa se abordarán aspectos relacionados con la conceptualización, líneas estratégicas y su diferencia con iniciativas de prevención de la enfermedad.\n\nLuego se concentrarán las estrategias de la Promoción de la Salud en el campo de la alimentación y la nutrición. En este sentido, se incentivará la investigación y el trabajo autónomo del estudiante en el estudio de estrategias nacionales que están en proceso para lograr su implementación y que buscan fomentar el derecho humano a una alimentación saludable, tales como: promoción de la lactancia materna y alimentación complementaria saludable, etiquetado frontal de advertencia para productos comestibles y bebibles ultraprocesados, regulación de la promoción y la publicidad de productos comestibles y bebibles ultraprocesados, impuestos a las bebidas endulzadas, estrategía para la reducción del consumo de sodio y entornos alimentarios escolares saludables.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORÍCA (2029500)",
    "grupos": []
   }
  ]
 },
 "2029505": {
  "cod": "2029505",
  "codigoSIA": "2029505",
  "nombre": "Hacia dónde vamos? Visiones sobre el futuro de la humanidad",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "En un mundo caracterizado por una aceleración sin precedentes del cambio social y tecnológico, la reflexión sobre el futuro de la humanidad se vuelve más vital que nunca: la inteligencia artificial, la biotecnología, la digitalización y la conectividad global están transformando la forma en que la que vivimos, pensamos, trabajamos, sentimos y nos relacionamos. Entender cuidadosamente cómo estas fuerzas están dando forma al mañana nos permitirá estar mejor preparados para abordar los desafíos y aprovechar las oportunidades que se avecinan.\nNos embarcaremos en un viaje intelectual apasionante hacia el entendimiento de los retos, oportunidades y riesgos que conformarán la sociedad planetaria del siglo XXI y más allá. Esta experiencia ofrece una exploración de cuestiones de carácter global que abarcan desde el cambio climático y la inteligencia artificial, hasta la diversidad cultural y la ética, en un intento de comprender los principales impactos sociales, políticos y económicos de las transformaciones que estamos viviendo.\nEste seminario ofrece a los participantes las herramientas y el conocimiento relevante para abordar estos temas y participar en conversaciones críticas sobre el futuro de la humanidad; en este sentido, no solo promueve la adquisición de conocimientos, sino que también se centra en el desarrollo de habilidades críticas y fomenta un pensamiento proactivo en la construcción de un futuro sostenible y ético.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2029505",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Diana Marcela Rojas Rivera"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "10:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE - IEPRI",
        "salon": "224-3030",
        "edificio": "224 - Manuel Ancizar",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029509": {
  "cod": "2029509",
  "codigoSIA": "2029509",
  "nombre": "Sistemas Agroalimentarios: vínculos entre ambiente, sociedad y desarrollo",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Los sistemas agroalimentarios sustentables toman una mayor importancia frente a las evidencias empíricas y enfoques teóricos que no han conseguido dar soluciones viables a los desafíos actuales. Estos desafíos son múltiples y su comprensión requiere de análisis de procesos históricos complejos, interdisciplinares y transectoriales. Conocer los debates recientes y los diversos abordajes teóricos permitirán transcender la comprensión de las relaciones de los actores, grupos de interés e instituciones de los sistemas agroalimentarios.\n\nEl objetivo de aprendizaje general es identificar los desafíos actuales para los sistemas agroalimentarios sustentables a partir del análisis de contextos propios, para la formulación de propuestas efectivas y pertinentes, que contribuya con la solución de los problemas y desafíos identificados.\n\nLa asignatura Sistemas Agroalimentarios: vínculos entre ambiente, sociedad y desarrollo se organiza en módulos teórico-prácticos compuestos por la presentación de temas relevantes vinculados al desarrollo rural, la agricultura y la alimentación.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA(2029509)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Nathalia Valderrama Bohórquez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 305",
        "salon": "500-305",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 304",
        "salon": "500-304",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029512": {
  "cod": "2029512",
  "codigoSIA": "2029512",
  "nombre": "Democracia para extraterrestres",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta asignatura está diseñada para un público muy amplio, por lo cual no requiere ningún conocimiento previo, especialmente tratándose de estudiantes universitarios. Está basada en el libro que acabo de publicar con la editorial planeta y el sello Ariel, ambos con el mismo nombre de la asignatura.\n\nEn ella se le va a enseñar a los estudiantes, basado, sobre todo en los capítulos de este mismo libro y en los vídeos del canal, cuáles son los mitos que hay en torno a la democracia y como se puede demostrar que no son basados en hechos, por lo cual puede perjudicarla si no se hacen estas aclaraciones para los ciudadanos. También analizamos los insultos que se le suelen hacer a los sistemas democráticos y los sentimientos negativos que generan, para dar explicaciones de porque se dan esas situaciones y como explicarlas desde la ciencia política y el sentido común, que en general son basadas en prejuicios y apreciaciones, no sensatas de la realidad.\n\nEn síntesis, tanto el Canal, como la asignatura como el libro, son una defensa de la democracia, en unos momentos en los qué incluso en latín barómetro está hablando de recesión democrática en América Latina, e incluso the Economist habla de retrocesos democráticos en el mundo.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029512)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "David Alberto Roll Velez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "AULA 209",
        "salon": "610-209",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029517": {
  "cod": "2029517",
  "codigoSIA": "2029517",
  "nombre": "Cátedra de Facultad soy FMVZ",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "OBJETIVOS DE APRENDIZAJE\n\n1. Integrar herramientas y técnicas de autocuidado de la salud y del bienestar\n2. Prevenir violencias basadas en género\n3. Ser parte activa de la FMVZ\n4. Incorporar estilos de vida saludables\n5. Fortalecer el tejido social\n\nConceptos Previos: No se requieren concepto previos",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029517)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Curso ÚNICAMENTE para ADMITIDOS 2025-2S",
      "codigoGrupo": "1",
      "profesores": [
       "Myriam Acero Aguilar"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 70,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029556": {
  "cod": "2029556",
  "codigoSIA": "2029556",
  "nombre": "Introducción a la cultura húngara",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura de \"Introducción a la Cultura Húngara\" se centra en proporcionar a los estudiantes un conocimiento introductorio y amplio sobre diversos aspectos culturales de Hungría. Esto suele incluir:\n\n1. *Contexto histórico:* Exploración de la historia de Hungría desde sus orígenes hasta el presente, abordando eventos significativos, períodos clave y figuras destacadas.\n\n2. *Literatura y arte:* Estudio de la literatura húngara, autores relevantes, obras destacadas y movimientos literarios. Además, se analiza el arte húngaro, incluyendo pintura, escultura y arquitectura representativos.\n\n3. *Música y danza:* Análisis de la música folclórica, tradicional y contemporánea de Hungría, así como las formas de danza y expresión cultural asociadas.\n\n4. *Costumbres y tradiciones:* Examinar las festividades, prácticas culturales, gastronomía típica y otras tradiciones arraigadas en la sociedad húngara.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clasee Teórica (2029556)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Zsoka Horvath "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 2",
        "salon": "225-AULA2",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029557": {
  "cod": "2029557",
  "codigoSIA": "2029557",
  "nombre": "Lengua húngara I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura de lengua húngara I se centra en los fundamentos básicos del idioma húngaro. Esta asignatura incluye el estudio de aspectos como la gramática elemental, vocabulario introductorio, pronunciación, escritura y comprensión básica del idioma. Los estudiantes aprenderán a formar oraciones simples, mantener conversaciones básicas y comprender textos sencillos en húngaro. Esta asignatura proporciona una introducción fundamental al idioma y la cultura húngara para principiantes.\n\n\nEvaluaciones:*Examen parcial (30%) *Examen final (30%) *Escritura 1,2 (20%) *Asistencia (20%)",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teóric (2029557)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Zsoka Horvath "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON 106",
        "salon": "225-106",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029607": {
  "cod": "2029607",
  "codigoSIA": "2029607",
  "nombre": "Historia de las drogas",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Las drogas han sido usadas por el ser humano con fines medicinales y recreativos desde hace miles de años. Su producción, comercio y consumo se generalizó durante la \"revolución psicoactiva\", que es el nombre que el historiador David Courtwright dio al proceso de rápida difusión que tuvo lugar entre los siglos XVI-XVIII. Aunque la relación con las drogas ha sido en ocasiones ambivalente, más recientemente, desde fines del siglo XIX, se establecieron las bases de un régimen prohibicionista que ha tenido efectos no previstos, muchos de carácter negativo, que han afectado sobre todo a algunos grupos de consumidores y a ciertos países productores. En el presente parece haber ocurrido un aflojamiento de ese prohibicionismo. Colombia, como país productor, es protagonista de estos cambios. Varios de las lecturas a realizar son en inglés.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029607)",
    "grupos": [
     {
      "grupo": "GRUPO 1",
      "codigoGrupo": "1",
      "profesores": [
       "Andres Lopez Restrepo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "14:00",
        "lugar": "SALON DE CLASE - IEPRI",
        "salon": "224-3030",
        "edificio": "224 - Manuel Ancizar",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029639": {
  "cod": "2029639",
  "codigoSIA": "2029639",
  "nombre": "Historia y cultura Iraní.",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso \"Historia y cultura iraní\", cuyo objetivo es familiarizar a los estudiantes con diversos aspectos de la cultura y civilización iraníes desde la antigüedad hasta la actualidad, siempre ha sido un tema destacado en el mundo. El motivo de esta atención son los miles de años de historia y cultura de Irán.\nConocer e introducir las manifestaciones de la civilización y la cultura de Irán y su historia es el objetivo principal de esta unidad del curso, y tener conocimientos sobre Irán ayuda a saber cómo tratar a los diferentes grupos étnicos de Irán.\nEste curso cubre historia, arqueología, literatura, misticismo, lenguas antiguas, cultura y arte,\nantropología, subculturas, folclores locales, artesanía y todo lo que de alguna manera esté relacionado con el Irán cultural.\nDe hecho, \"Historia y cultura iraní\" es una puerta de entrada al vasto mundo de la historia, la cultura, la civilización y la lengua iraníes. En esta lección se presentan diferentes aspectos de la identidad iraní desde la antigüedad hasta la actualidad.\nEn cuanto a la importancia de este curso, se puede decir que los estudios culturales sobre Irán amplían el conocimiento general de los estudiantes y los introducen a una de las civilizaciones más antiguas del mundo.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teórica (2029639)",
    "grupos": []
   }
  ]
 },
 "2029650": {
  "cod": "2029650",
  "codigoSIA": "2029650",
  "nombre": "One Health: una visión integral en salud",
  "creditos": 1,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura proporciona una visión integral de los desafíos sanitarios a nivel global. Comenzando con una introducción a One Health y su importancia global, los estudiantes exploran la definición y evolución del enfoque integrado de One Health, con un énfasis en los principios de colaboración interdisciplinaria y comprensión de sistemas complejos. A lo largo del curso, se examinan los fundamentos de medicina humana y veterinaria en el contexto de One Health, así como las interconexiones entre los ecosistemas y la salud. Se enfatiza la necesidad de procesos transdisciplinarios para abordar los problemas de salud única, incluyendo el uso de tecnología y Big Data, el desarrollo de políticas públicas y la comunicación efectiva de riesgos. Además, se analizan los desafíos actuales y futuros en la implementación de enfoques de One Health, con énfasis en la colaboración y vigilancia integrada. Los estudiantes también participan en casos de estudio y proyectos prácticos para aplicar los conceptos aprendidos en situaciones del mundo real.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029650)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "CLAUDIA MARINA MUÑOZ DIAZ"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AUDITORIO MULTIPLE DE POSGRADO- INST. DE BIOTECNOLOGIA",
        "salon": "224-2146",
        "edificio": "224 - Manuel Ancizar",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029651": {
  "cod": "2029651",
  "codigoSIA": "2029651",
  "nombre": "Línea I de profundización en microbiología e inmunología",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Línea de Profundización I en microbiología e inmunología busca enfatizar la formación disciplinar en microbiología e inmunología con el estudio y análisis de las enfermedades infecciosas y su diagnóstico de laboratorio. En la línea serán tratados temas de relevancia mundial, como enfermedades zoonóticas y emergentes, resistencia antimicrobiana, inmunopatología, respuesta inmune a antígenos microbianos, salud global y cadenas productivas e inocuidad y calidad de los alimentos.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "TEORICA (2029651)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Martha Cecilia Suarez Alfonso"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029652": {
  "cod": "2029652",
  "codigoSIA": "2029652",
  "nombre": "Línea II de profundización en microbiología e inmunología",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Línea de Profundización II en microbiología e inmunología busca enfatizar la formación disciplinar en microbiología e inmunología con el estudio y análisis de las enfermedades infecciosas y su diagnóstico de laboratorio, dando continuidad a la profundización adquirida en la línea de profundización I de la misma área. El curso se orientará a la lectura critica de articulos cientificos y a la fundamentación y estructuración de proyectos de investigación y escritura de articulos en topicos relevantes como enfermedades\nenfermedades zoonóticas, resistencia antimicrobiana, y salud global",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TERORICA (2029652)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Martha Cecilia Suarez Alfonso"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029655": {
  "cod": "2029655",
  "codigoSIA": "2029655",
  "nombre": "Caminos de resistencia: Palestina en el contexto actual",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La catedra Caminos de resistencia: Palestina en el contexto actual tiene como objetivo visibilizar la historia más reciente del pueblo Palestino y su configuración institucional. La catedra se enfoca entre otros en: La identidad de Palestina; La ocupación como concepto y movimiento; subjetivación y orientalismo; &#8288;&#8288;Palestina de todas; Cisjordania, Jerusalén y los palestinos olvidados y La diáspora palestina; y, Gaza en el siglo XXI. Esta catedra permitirá comprender desde un análisis de la historia contemporánea del Estado de Palestina como sus diversas expresiones económicas, sociales, políticas y culturales.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029655)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Andrea Carolina Jimenez Martin"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 201,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "AUDITORIO CAMILO TORRES - Facultad de Derecho, Ciencias Políticas y Sociales",
        "salon": "201-106",
        "edificio": "201 - Arturo Valencia Zea",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029656": {
  "cod": "2029656",
  "codigoSIA": "2029656",
  "nombre": "Cátedra de Sede Jorge Eliécer Gaitán: La educación en Colombia",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso tiene como propósito brindar a los estudiantes un espacio de reflexión y diálogo que les permita la comprensión del contexto en el que se desenvuelve el sistema educativo colombiano (primera infancia, básica, media y superior), su evolución en el tiempo y su estado actual desde aspectos esenciales de su funcionamiento, problemática y posibilidades.\n\nSe desarrollará en el marco de la Cátedra de Sede Jorge Eliécer Gaitán, la cual pretende constituir un espacio universitario de presentación y discusión de ideas, propuestas y reflexiones, en torno a la democracia, la ciudadanía, la educación, la convivencia, la paz, la pluralidad, la valoración de las diferencias, la promoción de los derechos humanos y la búsqueda de la equidad, la inclusión, el desarrollo social, político, económico, cultural y científico de la Nación Colombiana además de convertirse en medio para el diálogo entre la Comunidad Académica Universitaria y los ciudadanos.\n\nEl diseño pedagógico y didáctico del curso está orientado a que los estudiantes se sensibilicen sobre la realidad nacional y amplíen su comprensión de esta, especialmente sobre las problemáticas, los retos y las oportunidades del sector educativo en escenarios concretos.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": []
 },
 "2029660": {
  "cod": "2029660",
  "codigoSIA": "2029660",
  "nombre": "Línea de profundización I en medicina interna e imágenes diagnósticas",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Los contenidos de esta asignatura se encuentran orientados a cumplir con los objetivos de formación del programa de Medicina Veterinaria. La planificación de la metodología busca que los estudiantes logren aplicar los conocimientos teóricos y los recursos científicos para diagnosticar enfermedades que afectan a las diferentes especies animales. Este proceso se realizará guiando a los estudiantes para que consigan integrar los principios de la semiología y la medicina interna con los estudios de imágenes diagnósticas. La metodología se desarrollará mediante tres vías. 1, cada estudiante deberá entender los principios (técnicos y físicos) de cada estudio de imagen, de manera que esto le permita racionalizar la indicación de cada técnica en una gama de enfermedades. 2, partiendo de una enfermedad específica, el estudiante deberá sugerir una lista de estudios de imágenes, entendiendo el aporte que cada técnica le ofrece al diagnóstico y evolución de esa enfermedad específica. 3, con casos reales, el estudiante tendrá que abordar un caso desde la semiología y la medicina interna, integrando al caso todos los resultados del proceso diagnóstico. En este momento el estudiante discernirá la utilidad de las pruebas diagnósticas teniendo en cuenta el proceso fisiopatológico que se desarrolla.\nEn la búsqueda de un profesional integral, se incluirán conceptos generales sobre el campo laboral, entendiendo los desafíos individuales y sociales a los que se enfrentará cada estudiante.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029660)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Henry Omar Meneses Martinez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029661": {
  "cod": "2029661",
  "codigoSIA": "2029661",
  "nombre": "Línea de profundización II en medicina interna e imágenes diagnósticas",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Los contenidos de esta asignatura se encuentran orientados a cumplir con los objetivos de formación del programa de Medicina Veterinaria. La planificación de la metodología busca que los estudiantes logren aplicar los conocimientos teóricos y los recursos científicos para diagnosticar enfermedades que afectan a las diferentes especies animales. Este proceso se realizará guiando a los estudiantes para que consigan integrar los principios de la semiología y la medicina interna con los estudios de imágenes diagnósticas. La metodología se desarrollará mediante tres vías. 1, cada estudiante deberá entender los principios (técnicos y físicos) de cada estudio de imagen, de manera que esto le permita racionalizar la indicación de cada técnica en una gama de enfermedades. 2, partiendo de una enfermedad específica, el estudiante deberá sugerir una lista de estudios de imágenes, entendiendo el aporte que cada técnica le ofrece al diagnóstico y evolución de esa enfermedad específica. 3, con casos reales, el estudiante tendrá que abordar un caso desde la semiología y la medicina interna, integrando al caso todos los resultados del proceso diagnóstico. En este momento el estudiante discernirá la utilidad de las pruebas diagnósticas teniendo en cuenta el proceso fisiopatológico que se desarrolla.\nEn la búsqueda de un profesional integral, se incluirán conceptos generales sobre el campo laboral, entendiendo los desafíos individuales y sociales a los que se enfrentará cada estudiante.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029661)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Henry Omar Meneses Martinez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029730": {
  "cod": "2029730",
  "codigoSIA": "2029730",
  "nombre": "Cátedra de Sede - Manuel Ancízar: La justicia transicional de la jep aportes para la paz",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La cátedra ofrece un espacio de formación y debate sobre la justicia transicional en Colombia, con énfasis en el papel de la JEP en la construcción de paz. Se organiza en cuatro ejes temáticos. Primero, aborda el concepto, origen y evolución de la justicia transicional, profundizando en las diferencias entre justicia retributiva, transicional y restaurativa, así como en las tensiones entre verdad, justicia y paz. Luego, analiza la justicia transicional en Colombia y los esfuerzos para superar el conflicto armado, examinando sus causas y consecuencias, los procesos de negociación de paz y la evolución de la justicia transicional en el país con el aporte de expertas. El tercer eje se centra en el Acuerdo de Paz de 2016 y el Sistema Integral para la Paz, explorando su contexto, principales puntos, implementación y desafíos. Finalmente, el cuarto eje profundiza en los desarrollos, alcances y retos de la JEP, estudiando su estructura, metodología de macro casos, carácter restaurativo y centralidad de las víctimas, así como las acciones reparadoras. Se analizan los avances y desafíos en la investigación y juzgamiento de los máximos responsables. La cátedra concluye con la presentación de trabajos finales y una evaluación del curso.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029730)",
    "grupos": []
   }
  ]
 },
 "2029766": {
  "cod": "2029766",
  "codigoSIA": "2029766",
  "nombre": "Introducción a la vida universitaria en ciencias de la salud",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura \"Introducción a la Vida Universitaria en Ciencias de la Salud\" es un espacio académico fundamental diseñado para facilitar la transición y adaptación de los nuevos estudiantes al entorno de la Universidad Nacional de Colombia y, específicamente, a las particularidades de las carreras en el ámbito de la salud. A través de un enfoque integral, se exploran los aspectos clave de la vida universitaria, desde el conocimiento de la estructura institucional y los procedimientos administrativos hasta el desarrollo de habilidades académicas esenciales para el éxito en el pregrado. La asignatura también introduce a los estudiantes en el proyecto de formación propio de las ciencias de la salud, incluyendo líneas de énfasis, oferta de asignaturas electivas y la relevancia de la ética profesional. Se abordan, además, los perfiles de ingreso, egreso y las proyecciones laborales de las diversas profesiones del área, y se ofrece una visión prospectiva de la globalización de la salud, la telesalud y las tendencias emergentes que impactarán su futura práctica profesional. El propósito es equipar a los estudiantes con las herramientas y el conocimiento necesarios para una integración exitosa, un desarrollo académico sólido y una visión clara de su rol en el sector de la salud y en la vida Universitaria.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 34,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029768": {
  "cod": "2029768",
  "codigoSIA": "2029768",
  "nombre": "Línea de profundización en electrofisiología básica y clínica",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La línea de profundización se desarrollará en modalidad a tutorial. Los estudiantes serán orientados para lograr el máximo provecho de las revisiones bibliográficas. Se presentarán artículos para revisión y discusión en el área de las neurociencias.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029768)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Manuel Joaquin Rojas Barreto",
       "Francisco Andres Olea Salgado"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029789": {
  "cod": "2029789",
  "codigoSIA": "2029789",
  "nombre": "El primer gobierno de izquierda en Colombia: elementos para un balance",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El triunfo del gobierno del presidente Gustavo Petro en las elecciones del año 2022 generó grandes expectativas. En un contexto caracterizado por los efectos de la pandemia, altos niveles de inconformismo y movilización social y limitaciones en la implementación del acuerdo de paz suscrito en el 2016 entre el gobierno nacional y la guerrilla de las FARC-EP, la posición como bandera y programa de gobierno de la narrativa del Cambio por la Vida, acompañado de la elección de una bancada importante del Pacto Histórico en el Congreso de la República y de la promesa del mandatario de buscar un gran acuerdo nacional, crearon emociones polarizadas que se expresaron entre la esperanza y el optimismo, por parte de sus votantes y seguidores, y el miedo y el pesimismo de los opositores.\nEl acceso al poder de Gustavo Petro y su bancada del Pacto Histórico, se reflejó también en diversos índices internacionales de medición de la democracia, como los de Freedom House o V-Dem, quienes valoraron positivamente la apertura del sistema político nacional a opciones diferentes a las que tradicionalmente habían gobernado el país. De igual forma, desde el contexto global se abrieron nuevas preguntas y perspectivas sobre lo que constituiría el primer gobierno que claramente puede considerarse como de izquierda en Colombia en términos de su política internacional, sus realizaciones en torno a la desigualdad social y la paz y su rol dentro de los gobiernos progresistas del continente.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029789)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "CLARA ROCIO RODRIGUEZ PICO"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029790": {
  "cod": "2029790",
  "codigoSIA": "2029790",
  "nombre": "L amérique latine dans le monde",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Dirigé aux étudiantes de Sciences économiques, Sciences humaines et Droit et science politique, ce cours a pour objectif doffrir autant des connaissances empiriques que des outils conceptuels pour comprendre et analyser lAmérique latine dans la politique globale. Pour ce faire, tout dabord nous étudierons les fronti&egrave;res épistémologiques imposées par les principales théories des relations internationales aux études de lAmérique latine dans le monde et nous observerons lAmérique latine dans les dynamiques du processus socio-historique de la mondialisation. Ensuite, nous appréhenderons certains traits et acteurs dominants dans les politiques étrang&egrave;res des pays latino-américains ainsi que la participation latino-américaine dans la régulation multilatérale et régionale. Enfin, nous analyserons quelques-uns des faits transnationaux de la région Amérique latine et lexpression quy adoptent certains phénom&egrave;nes de portée universelle.\n\nSi les textes et les documents audio-visuels obligatoires des séminaires sont en fran&ccedil;ais, espagnol ou anglais, les fiches de lectures et les travaux académiques de fin du séminaire peuvent &ecirc;tre rédigés en fran&ccedil;ais ou espagnol. Les étudiant(es) sont invité(es) &agrave; préparer un document audio-visuel ou un exposé oral en fran&ccedil;ais sur un sujets des th&egrave;mes du séminaire.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029790)",
    "grupos": [
     {
      "grupo": "GRUPO 1",
      "codigoGrupo": "1",
      "profesores": [
       "GIOVANNI MOLANO CRUZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALON DE CLASE - IEPRI",
        "salon": "224-2021",
        "edificio": "224 - Manuel Ancizar",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029812": {
  "cod": "2029812",
  "codigoSIA": "2029812",
  "nombre": "Cátedra de Sede Manuel Ancízar: Centenario orlando fals borda: vida, obra y sentipensamiento",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La conmemoración del centenario del nacimiento de Orlando Fals Borda representa una oportunidad única para reconocer, actualizar y proyectar el legado de uno de los intelectuales más influyentes de Colombia y América Latina en el siglo XX. Su obra, profundamente comprometida con la transformación social, marcó hitos fundamentales en la historia de las ciencias sociales, la participación política y la construcción de conocimiento situado, comprometido y transformador.\nEsta Cátedra de Sede Centenario Orlando Fals Borda: vida, obra y sentipensamiento es una apuesta académica y política que, desde una perspectiva interdisciplinar, busca el estudio de su pensamiento, su trayectoria intelectual y vital, y la vigencia de su propuesta ético-política y metodológica en el contexto actual colombiano y latinoamericano.\nEsta propuesta se fundamenta en la experiencia acumulada por el Departamento de Sociología, que ha desarrollado diez versiones de la Cátedra de Facultad \"Orlando Fals Borda\" como un seminario práctico de formación crítica y participativa. En ella se ha promovido la articulación entre teoría, historia y práctica investigativa, con el propósito de reactivar el pensamiento falsbordiano en diálogo con los retos contemporáneos del país: la implementación del Acuerdo de Paz y las luchas territoriales por la vida.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029812)",
    "grupos": []
   }
  ]
 },
 "2029813": {
  "cod": "2029813",
  "codigoSIA": "2029813",
  "nombre": "Cátedra de Sede José Celestino Mutis: Comunicación y Ambiente: Narrativas para las Transformaciones",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La propuesta de Cátedra de sede: Comunicación y Ambiente: narrativas para las transformaciones sociales y ecológicas nace del encuentro entre dos institutos con trayectorias complementarias y un profundo compromiso con la transformación social y ecológica (ambiental) desde la universidad pública: el Instituto de Estudios en Comunicación y Cultura (IECO) y el Instituto de Estudios Ambientales (IDEA).\n\nEn este sentido, la convergencia entre el IECO y el IDEA permite concebir esta cátedra como un espacio interdisciplinar, interinstitucional y transescalar donde se entrelazan las dimensiones simbólicas, políticas y ecológicas de la crisis civilizatoria contemporánea. Más allá de sumar saberes, esta articulación propone una lectura situada y compleja del vínculo entre comunicación, territorio y transformación ambiental, con el fin de incidir en la formación de ciudadanías críticas, creativas y comprometidas con la justicia ambiental (socioecológica).\n\nEsta propuesta se enmarca en las apuestas institucionales del Programa de Maestría en Medio Ambiente y Desarrollo (PMAD) y del Observatorio de Conflictos Ambientales (OCA), así como en las experiencias del Laboratorio de Comunicación Pública del IECO y la Cátedra de Culturas Cannábicas, donde se ha explorado la potencia de las narrativas, las pedagogías disruptivas y la articulación universidadcomunidad como motores de transformación",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029813)",
    "grupos": []
   }
  ]
 },
 "2029822": {
  "cod": "2029822",
  "codigoSIA": "2029822",
  "nombre": "Planificación del ecoturismo",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El turismo fue considerado como una industria neutra para la que era innecesario estudiar sus impactos sobre el ambiente, lo social y lo cultural. En los años 70s sin embargo se empiezan a dar críticas sobre el sector con lo cual hacia los 90s ya era clara la preocupación por sus consecuencias. Se empiezan a reconocer esquemas de manejo del turismo que resultan benéficos a la lógica de conservación de los ecosistemas y la biodiversidad que le es inherente. La preocupación académica por el turismo data de hace por lo menos 15 años con un creciente número de publicaciones y el interés por conocer más acerca de sus impactos socioambientales. El ecoturismo es una actividad que, de acuerdo a sus principios y mediante la organización y aplicación de recursos pertinentes por parte de los entes públicos y privados podría constituir una fuente potencial de ingresos, de esquemas alternativos de trabajo y para fortalecer y difundir los valores culturales, mejorar la autoestima y autonomía de las comunidades. Permite el cuidado y gestión sostenible de los elementos recursos naturales y el medio ambiente, base del desarrollo ecoturístico. Las definiciones reconocen que este combina elementos de manera multidimensional: Reducción del impacto ambiental, Interacción con la naturaleza, Respeto e incorporación de la comunidad e interacción con las poblaciones locales, Actividades ambientales, Sostenibilidad económica.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Grupo 1 (Planificación del ecoturismo)",
    "grupos": [
     {
      "grupo": "Grupo 1 ( Planificación del ecoturismo)",
      "codigoGrupo": "1",
      "profesores": [
       "Ernesto Javier Puertas Dellepianes"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALA DE POSGRADO FRANCISCO JOSE DE CALDAS SALA TIC",
        "salon": "421-213",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029844": {
  "cod": "2029844",
  "codigoSIA": "2029844",
  "nombre": "Lengua húngara II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso continúa el aprendizaje iniciado en Lengua húngara I. Su objetivo es profundizar en los conocimientos básicos de la lengua húngara, ampliar el vocabulario y mejorar la comunicación oral y escrita. A través de temas relacionados con la vida cotidiana como la vivienda, la ciudad, el transporte, el tiempo, los pasatiempos y los planes futuros los estudiantes desarrollarán sus habilidades para expresarse y comprender mejor el idioma en contextos reales. Evaluaciones:*Examen parcial (30%) *Examen final (30%) *Escritura 1,2 (20%) *Asistencia (20%)",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029844)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Zsoka Horvath "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029849": {
  "cod": "2029849",
  "codigoSIA": "2029849",
  "nombre": "Linea de profundizacion II en electrofisiologia basica y clinica",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Profundizar los conocimientos adquiridos en la linea de profundizacion I. Pasaremos de la aproximación a los métodos electrofisiológicos a la profundización en métodos aplicados complejos de investigacion y aplicacion clinica diagnostica y terapeutica. Objetivos:  Revisar las aplicaciones de última generación en registros electrofisiológicos.  Buscar potencial proyección de investigación basado en el modelo de diseños de proyectos de investigación en neurociencias y cardiología, que involucren electrofisiología como herramienta central.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029849)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Manuel Joaquin Rojas Barreto"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029856": {
  "cod": "2029856",
  "codigoSIA": "2029856",
  "nombre": "Saberes y territorios: una perspectiva para el derecho a la alimentación en Colombia",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El análisis de la Seguridad y de la Soberanía Alimentaria y Nutricional, evolucionó desde el componente alimentario que comprendía la disponibilidad y el acceso de alimentos, a una visión compleja que incorpora el consumo, aprovechamiento biológico, la calidad e inocuidad de los alimentos, y el derecho de los pueblos a decidir su propio sistema alimentario teniendo así el control de la alimentación y nutrición.\nPor tanto, el curso profundiza en la conceptualización de las escalas de realización del derecho a la alimentación desde la soberanía, autonomías y la SAN, reconociendo la complejidad que abarca el derecho; por lo anterior se aborda el proceso de la alimentación desde el análisis del sistema alimentario, sus componentes y los factores determinantes, las problemáticas que afectan cada componente y sus potencialidades, la relación con el ambiente, y otros aspectos que permiten comprender la permanente relación entre desarrollo, ambiente, agricultura, seguridad alimentaria y nutricional y soberanía desde un enfoque sistémico y de derechos. Finalmente, el conjunto de estos elementos permitirá adquirir habilidades con enfoques inter y transdisciplinario para la reflexión y análisis de la situación del derecho a la alimentación en función de la SAN en Colombia.\nEs así como el presente curso de contexto desde su primera versión ha sido producto de los desarrollos teóricos del equipo de profesores, investigadores y estudiantes vinculados a los semilleros del OBSSAN.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029856)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Sara Eloisa Del Castillo Matamoros"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 64,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALON DE CLASE 202",
        "salon": "228-202",
        "edificio": "228 - Nelly Garzón Alarcón",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029864": {
  "cod": "2029864",
  "codigoSIA": "2029864",
  "nombre": "Chino electivo III",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso Chino Mandarín III constituye el tercer nivel del programa de formación en lengua y cultura china, diseñado en coherencia con los estándares internacionales del examen HSK (&#27721;&#35821;&#27700;&#24179;&#32771;&#35797;H&agrave;ny&#468; Shu&#464;píng K&#462;osh&igrave;), correspondiente al nivel 3, el cual abarca 600 caracteres de uso frecuente.\nDe estos 600 caracteres, 300 son nuevos en relación con los niveles anteriores: 150 aprendidos en el nivel 1 (HSK 1) y 150 adicionales en el nivel 2 (HSK 2), los cuales en conjunto suman los 600 caracteres totales exigidos para el nivel HSK 3.\nEl curso busca desarrollar la competencia comunicativa intermedia del estudiante en las cuatro habilidades lingüísticas (comprensión auditiva, comprensión lectora, producción oral y escrita), promoviendo un uso funcional y contextualizado del idioma en situaciones de la vida real. A través de actividades comunicativas, textos auténticos, material audiovisual y ejercicios de interacción, los estudiantes serán capaces de expresar opiniones, narrar experiencias, describir lugares, eventos y emociones, así como sostener conversaciones sobre temas personales, académicos y culturales.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029864)",
    "grupos": [
     {
      "grupo": "Chino Electivo III",
      "codigoGrupo": "1",
      "profesores": [
       "JESSICA LUCIA MORENO NOVOA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029894": {
  "cod": "2029894",
  "codigoSIA": "2029894",
  "nombre": "Línea de profundización I en neurología de pequeños animales",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta línea de profundización está orientada a cumplir con los objetivos de formación del programa de Medicina Veterinaria, enfocándose en la neurología clínica de caninos y felinos. La metodología de los temas propuestos busca que los estudiantes logren aplicar el conocimiento de la neuroanatomía, la neurofisiología y la semiología neurológica para diagnosticar y abordar las enfermedades del sistema nervioso central y periférico en pequeños animales. Este proceso se realizará guiando a los estudiantes para que integren los principios de la semiología y la medicina interna con el abordaje de la neurolocalización y el diagnóstico diferencial de los síndromes neurológicos más frecuentes.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029894)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jose Manuel Lasso Delgado"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029895": {
  "cod": "2029895",
  "codigoSIA": "2029895",
  "nombre": "Línea de profundización II en neurología clínica de pequeños animales",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta asignatura es la continuación de la Línea de Profundización I y representa la fase de aplicación, análisis crítico y generación de conocimiento en Neurología Clínica. El objetivo primordial es que el estudiante migre de ser un consumidor de conocimiento a un generador de nuevo conocimiento o un analista crítico de la literatura científica (Medicina Basada en la Evidencia - MBE).",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": []
 },
 "2029900": {
  "cod": "2029900",
  "codigoSIA": "2029900",
  "nombre": "Colombia: afirmaciones, deformaciones y transformaciones de nuestra cultura nacional",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso propone el estudio de los procesos y las prácticas, los conflictos y negociaciones, a través de los cuales se ha construido una cultura nacional gestada desde inicios fuertemente excluyentes pero forjada por sucesivos movimientos de resistencia y de inclusión.\nAsí, si bien el curso sigue una perspectiva diacrónica en su exposición su objetivo es complejizar la comprensión de nuestras cotidianidades económicas, políticas y simbólicas desde temas clave que evidencien estrategias y tácticas en la construcción de nuestra conflictiva y desigual identidad nacional y de esta manera trazar puentes con la actualidad y futuros posibles que se evidencien en la actividad profesional de los estudiantes y sus demás cotidianidades.\n\nOBJETIVOS\nAl finalizar el curso, se espera que los estudiantes sean capaces de:\n1. Identificar las más importantes líneas de fuerza que les permitan sumar argumentos en la reflexión sobre la actual realidad colombiana.\n2. Problematizar su cotidianidad desde diversas categorías de análisis social.\n3. Complejizar su quehacer profesional y personal a través del entendimiento de las condiciones generales que han dado mayor fuerza a los hechos que son objeto de atención en las agendas actuales.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029900)",
    "grupos": [
     {
      "grupo": "GRUPO 1",
      "codigoGrupo": "1",
      "profesores": [
       "Oscar Antonio Caballero Rodriguez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 19,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029911": {
  "cod": "2029911",
  "codigoSIA": "2029911",
  "nombre": "Cátedra de Sede Gabriel García Márquez Carnaval y Cultura",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Cátedra Gabriel García Márquez surge como respuesta a una necesidad académica, cultural y política consolidada tras más de una década de trabajo del Instituto de Estudios en Comunicación y Cultura, IECO. En el contexto colombiano actual, marcado por conflictos sociales y crisis de convivencia, las fiestas populares y los carnavales han demostrado ser espacios fundamentales de reconciliación, pedagogía social y construcción simbólica de la nación. No obstante, lo festivo ha sido históricamente marginado del pensamiento académico institucional, reducido al espectáculo o la nostalgia. Entre 2011 y 2025 se ha consolidado en Colombia un campo emergente de investigación sobre fiestas y carnaval, impulsado por académicos, artistas y gestores culturales. La Cátedra representa el paso necesario para institucionalizar esta experiencia, proyectarla como oferta semestral de alto impacto y asumir la fiesta como categoría epistemológica y metodología de construcción de nación, integrando teoría crítica, etnografía, creación artística y acción comunitaria. Más que un programa académico, se propone como una apuesta institucional y política para posicionar a la Universidad Nacional como referente latinoamericano en estudios de cultura festiva, pedagogías de convivencia y arte comunitario, afirmando la alegría como infraestructura emocional de la democracia.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029911)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Jorge Enrique Londono Pinzón",
       "Jairo Danilo Moreno Hernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029912": {
  "cod": "2029912",
  "codigoSIA": "2029912",
  "nombre": "Cátedra de Sede José Celestino Mutis Física: Las grandes ideas que cambiaron el mundo",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Es indiscutible la profunda relación entre los avances científicos y el avance de la humanidad hacia niveles de vida nunca observados en la historia de la misma. Este éxito ha generado un aislamiento entre la comunidad científica de física y las personas con formación en áreas como ciencias humanas, las artes y paradójicamente hasta de las mismas ciencias aplicadas. En este curso se propone la exploración de las grandes ideas que la física ha aportado al conocimiento general de la humanidad, y como estas ideas han cambiado desde nuestra forma de vida, hasta la percepción que tenemos del universo que nos rodea. El curso está dirigido a estudiantes de todas las áreas del conocimiento que tengan interés profundizar y actualizar sus conocimientos en física general, haciendo énfasis en mostrar la forma como el mundo, y nuestra visión acerca de él, ha sido transformado de manera radical. El curso hará un uso de matemática básicas, nivel pre-universitario, para su desarrollo.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029912)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Diego Alejandro Torres Galindo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "7000293": {
  "cod": "7000293",
  "codigoSIA": "7000293-B",
  "nombre": "Cultura del cuidado de la salud",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura CULTURA DEL CUIDADO DE LA SALUD surge como respuesta a la necesidad que tiene América Latina de abordar el cuidado de estas personas en un contexto epidemiológico que muestra la cronicidad como un problema prioritario de la salud pública. Retoma la experiencia del Programa con la Asignatura Cultura de la actividad física para el cuidado de la salud y la complementa para atender las nuevas tendencias del cuidado reflejadas en el Plan decenal de salud pública 2013. Da elementos a los estudiantes/profesionales de la salud para su propio cuidado y el de las personas con enfermedad crónica o en riesgo de esta. De manera sencilla y con acceso en línea guía al estudiante/profesional de la salud en la aplicación de conceptos para fomentar la cultura del cuidado. Inicia con una conceptualización básica sobre la cultura del cuidado de la salud y su relación con la disminución de situaciones de enfermedad crónica. Retoma los lineamientos del Plan Decenal de Salud Pública que incluyen: Cultura del cuidado, ejercicio, nutrición, evitar sustancias nocivas y psicoactivos, manejar el estrés y contar con un proyecto de vida.\nObjetivo: Cuidar a personas que modifican el estilo de vida para mejorar el pronóstico de vida.\nMetodologia: La asignatura CULTURA DEL CUIDADO DE LA SALUD , es ofrecida como curso en línea que da protagonismo al estudiante/profesional de la salud en su práctica de cuidado a personas en riesgo de tener una enfermedad crónica o con una enfermedad crónica establecida. El abordaje del curso da protagonismo al estudiante frente a su propio aprendizaje e incluye la utilización de videos, revisión de multimedias, búsqueda y revisión crítica de la bibliografía, conceptualización y preparación de documentos que demuestren análisis crítico, desarrollo de pruebas de autoevaluación y evaluación, abordaje de situaciones de cuidado de la salud y ejercicios de aplicación que deben iniciar por su autocuidado.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CALSE TEORICA (7000293-B)",
    "grupos": [
     {
      "grupo": "Grupo Amazonia",
      "codigoGrupo": "3",
      "profesores": [
       "Sonia Patricia Carreño Moreno"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": []
     }
    ]
   }
  ]
 }
};
