/* ============================================================================
   losestudiantes.js — GENERADO AUTOMÁTICAMENTE, no editar a mano.
   Fuente: losestudiantes.com
     · códigos y URLs verificados el 2026-07-25
     · profesores por materia actualizados el 2026-07-25
   Regenerar con:
     node herramientas/verificar-losestudiantes.js     (códigos y enlaces)
     node herramientas/sincronizar-profesores.js       (profesores)
   ========================================================================== */

const LE_BASE_PROFESOR = 'https://losestudiantes.com/universidad-nacional/professors/';
const LE_VERIFICADO = '2026-07-25';
const LE_PROFESORES_ACTUALIZADO = '2026-07-25';

/* código SIA -> { nombre, url, profesores: [{ nombre, slug, resenas, calidad }] } */
const LOSESTUDIANTES = {
  "1000003": {
    "nombre": "Algebra Lineal",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000003",
    "profesores": [
      {
        "nombre": "Lenin David Angarita Rivera",
        "slug": "lenin-david-angarita-rivera",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.5,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Excelente profesor, un ritmo de enseñanza muy bueno, responde a todas las dudas y explica muy bien, ojala diera ecuaciones jajajaj. Si tiene la oportunidad meta con el, suele haber cupos. Evalua los talleres que manda y algunas actividades extra",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Camilo Arana",
        "slug": "camilo-arana",
        "resenas": 39,
        "calidad": "buena",
        "calificacion": 4.99,
        "notaPromedio": 4.34,
        "resenasOcultas": 38,
        "resena": {
          "texto": "Muy buen profesor, lo que explica en las clases es lo mismo que sale en lo exámenes, es muy comprensivo, explica super bien, da bonos por participación en clase y por llevar hojas recicladas en los quices y parciales, estos son bastante fáciles.",
          "pros": "Carismático Amable Da bonos Siempre anda con sus buenos momos al iniciar la clase",
          "contras": "El horario en el que suele dar la materia.",
          "periodo": "2026-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Francisco Albeiro Gomez Jaramillo",
        "slug": "francisco-albeiro-gomez-jaramillo",
        "resenas": 18,
        "calidad": "buena",
        "calificacion": 4.18,
        "notaPromedio": 4.31,
        "resenasOcultas": 17,
        "resena": {
          "texto": "Este profe llegó como un ángel para salvarme álgebra lineal en la 9 semana del semestre, que por razones las cuáles desconozco tuvo 3 profesores distintos. Las cosas con el fluyen súper bien, en especial si no es de esos disque ingenieros que les encantan las demostraciones. Si es de ciencias, se lo súper recomiendo para que pueda dejarla alta, aplica todo lo que se ve en clase y lo mantiene a uno conectado con lo que aprende y podría llegar a aplicar en contextos variados. Aunque solo estuvimos con el durante poco tiempo (menos de medio semestre) déjeme decirle que fue de lo mejor que nos…",
          "pros": "Muy teso, se nota que es de aquellos poseen el conocimiento Súper fácil Súper cinqueable Súper todo",
          "contras": "Tener que compartir clase con ingenieros Súper difícil tener cupo con el Deja mucha tarea (preguntas fáciles que entrega en un taller, que aunque son fáciles, mas vale que le guste escribir)",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Carlos Alberto Garzon Gutierrez",
        "slug": "carlos-alberto-garzon-gutierrez",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 4.14,
        "notaPromedio": 3.75,
        "resenasOcultas": 7,
        "resena": {
          "texto": "la verdad me parece muy buen profesor, aunque toca estar demasiado atento, esto porque si vas al baño o algo, llegas y ya te pierdes, deja muchos ejercicios opcionales cada clase y de allí saca los parciales",
          "pros": "es paciente ayuda a quienes participan aprendes bastante",
          "contras": "va demasiado rapido las clases aveces dan sueño es bastante exigente requiere de demasiado autónomo",
          "periodo": "2024-2",
          "calificacion": 4,
          "dificultad": 3.6
        }
      },
      {
        "nombre": "Santiago Prieto Betancur",
        "slug": "santiago-prieto-betancur",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4,
        "notaPromedio": 4.9,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Santiago es buen profesor, deja talleres de donde saldran los puntos para los parciales, entonces si los hace puede dejar los parciales altos. Tambien deja sacar hojas con formulas, y a veces apuntes. Explica un poco enredado ya que da mucha teoria, pero haciendo los talleres se puede entender bien",
          "pros": "Talleres de donde saca los parciales Buena persona Parciales realizables",
          "contras": "A veces llega un poco tarde a las clases No hace tantos ejemplos",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Esgar Ochoa",
        "slug": "esgar-ochoa",
        "resenas": 19,
        "calidad": "buena",
        "calificacion": 3.68,
        "notaPromedio": 3.87,
        "resenasOcultas": 18,
        "resena": {
          "texto": "Este profesor da clases de Calculo Diferencial muy entendibles. El uso de las graficas para explicar los procesos de derivación ayuda bastante. Muy facil hacer preguntas al profesor, y lo intenta responder con la mejor claridad posible. El parcial fue un poco mas complicado, por ende requiriendo estudio autonomo para pasar con 5. Este profesor da un taller para ayudar a enteder, sin embargo tal taller no hace parte de la nota, sino solo los parciales. Si no hubieran cambiado este profesor a la mitad del curso, hubiera mas posibilidad de cinquear la materia.",
          "pros": "Buenas Explicaciones Responde cualquier pregunta con la mejor explicación posible.",
          "contras": "Parciales mas complicados. Solo los parciales presentan nota",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jhon Cristian Mina Ladino",
        "slug": "jhon-cristian-mina-ladino",
        "resenas": 16,
        "calidad": "regular",
        "calificacion": 3.54,
        "notaPromedio": 4.2,
        "resenasOcultas": 15,
        "resena": {
          "texto": "Enseña muy bien, es medio vago pero si usted le interesa aprender le va a ir muy bien",
          "pros": "relajado",
          "contras": "relajado",
          "periodo": "2025-2",
          "calificacion": 4.5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Miguel angel Colmenares",
        "slug": "miguel-angel-colmenares",
        "resenas": 3,
        "calidad": "mala",
        "calificacion": 2.87,
        "notaPromedio": 3.87,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Esta materia es bastante sencilla y uno es afortunado de verla porque así llega con buenas bases para cursar los cálculos, sin embargo ojalá les toque con un profe que en serio les ayude con este refuerzo. Se enreda para explicar demasiado y muchas veces parece que no sabe lo que está dictando o directamente no planeó la clase. Hubo varias ocasiones que compañeros preguntaban o corregían cosas claves que él directamente nunca hubiera abordado, por lo tanto uno terminaba más enredado. No envía ningún material y además en la clase (usando sus propias palabras) prefiere no hacer ejercicios…",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 2,
          "dificultad": 1.9
        }
      },
      {
        "nombre": "Mohammed El Aidi",
        "slug": "mohammed-el-aidi",
        "resenas": 45,
        "calidad": "mala",
        "calificacion": 2.52,
        "notaPromedio": 2.88,
        "resenasOcultas": 44,
        "resena": {
          "texto": "Pedagogo de pedagogos. Sabe enseñar su materia como no he visto a nadie enseñarla. Las evaluaciones que aplica son excelente método de estudio y ayudan a guardarse los conocimientos requerido de la materia. Explica, enseña, responde dudas como ningún otro profesor, excelente. Sinceramente, espero que siga dictando clase porque tiene la vocación para ello.",
          "pros": null,
          "contras": null,
          "periodo": "2026-2",
          "calificacion": 2,
          "dificultad": 1.9
        }
      }
    ]
  },
  "1000004": {
    "nombre": "Calculo Diferencial",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000004",
    "profesores": [
      {
        "nombre": "Ingrid Mayerly Ojeda Otalora",
        "slug": "ingrid-mayerly-ojeda-otalora",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.98,
        "notaPromedio": 4.17,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Es probablemente la mejor profesora de cálculo que he tenido, es demasiado amable, explica muy bien, tiene mucha paciencia y se preocupa porque todos en el curso entendamos, si tienes dudas te puedes acercar a ella, en general es la mejor!",
          "pros": null,
          "contras": null,
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Margaret Johanna Garzon Merchan",
        "slug": "margaret-johanna-garzon-merchan",
        "resenas": 34,
        "calidad": "buena",
        "calificacion": 4.63,
        "notaPromedio": 4.03,
        "resenasOcultas": 33,
        "resena": {
          "texto": "Es una excelente profe, enseña tal cual evalúa en los parciales, es abierta a responder dudas, eso sí deja talleres para reforzar cada tema, pero si los hace, además de dedicarle un buen tiempo autónomo a la materia, la va a dejar muy alta.",
          "pros": "-Abierta a dudas. -Hace los parciales tal cual como enseña. -Buena persona. -Deja buen material.",
          "contras": "Ninguno.",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Gustavo Adolfo Nieto Clavijo",
        "slug": "gustavo-adolfo-nieto-clavijo",
        "resenas": 89,
        "calidad": "buena",
        "calificacion": 4.32,
        "notaPromedio": 4,
        "resenasOcultas": 88,
        "resena": {
          "texto": "Solo vengo a recordarles que coge a personas en la mala, los humilla, se burla de ellos, incluso llega a insultarlos. Estuve a punto de dejar la carrera por este profesor, tuve que ir a un psicólogo porque me metió la idea en la cabeza de que no servía para la carrera y que debería dedicarme a algo más en vez de perder el tiempo. si lee esto, le odio profundamente, me arruinó la vida.",
          "pros": null,
          "contras": null,
          "periodo": "2026-2",
          "calificacion": 2,
          "dificultad": 2
        }
      },
      {
        "nombre": "Oscar Mauricio Parra Baquero",
        "slug": "oscar-mauricio-parra-baquero",
        "resenas": 52,
        "calidad": "buena",
        "calificacion": 4.31,
        "notaPromedio": 3.73,
        "resenasOcultas": 51,
        "resena": {
          "texto": "Un profesor muy mediocre, solo lee diapositivas y las explicaciones en el tablero son muy malas, va muy rápido y casi no se le entiende (aunque no sé si era que estábamos en un auditorio). El primer parcial fue una masacre. No vale procedimiento y en general exige mucho para la calidad que ofrece.",
          "pros": null,
          "contras": null,
          "periodo": "2024-1",
          "calificacion": 1.5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Olga Lucia Escobar Medina",
        "slug": "olga-lucia-escobar-medina",
        "resenas": 17,
        "calidad": "buena",
        "calificacion": 3.91,
        "notaPromedio": 3.99,
        "resenasOcultas": 16,
        "resena": {
          "texto": "larga historia esta profe, vi 3 matematicas con ellas, asi que desglozo sus metodologias en cada una: Integral (nota 3.2): 3 parciales 75% y talleres y quices 25%, hizo solo 1 quiz y un taller, como a la mayoria nos fue mal en el quiz puso un ultimo taller en la ultima semana sobre un tema que no alcanzo a dar (solidos de revolucion) que promedio con el quiz para que no quedara tan baja, sus talleres son 5 facil, lo malo es que se salto la explicacion tanto de solidos de revolucion como de coordenadas polares, en su lugar fue de una vez a series y paso a integrales dobles xD (se dio cuenta al…",
          "pros": "enseña bien es flexible con los parciales talleres faciles puede sustituir o ayudar en parciales con talleres",
          "contras": "se cuelga en tema parciales de dificultad mas elevada de la que uno espera incertidumbre con notas",
          "periodo": "2024-2",
          "calificacion": 4.5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "German Preciado Lopez",
        "slug": "german-preciado-lopez",
        "resenas": 37,
        "calidad": "regular",
        "calificacion": 3.82,
        "notaPromedio": 3.83,
        "resenasOcultas": 36,
        "resena": {
          "texto": "Hasta el momento es la peor clase que he tomado, da clases como si estuviera en 1700 hace mal los procedimientos y los corrije casi media clase despues, copia y pega ejercicios del algebra de grossman para dar la clase, puedo hacer lo mismo desde mi casa y en los parciales pone ejercicios que nada que ver, si uno llega al mismo resultado pero de otra manera no vale los puntos, no da bonos no hay talleres solo 4 parciales",
          "pros": "se pueden otros profesores",
          "contras": "la clase en si",
          "periodo": "2025-2",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Jose Israel Merchan Herrera",
        "slug": "jose-israel-merchan-herrera",
        "resenas": 41,
        "calidad": "regular",
        "calificacion": 2.61,
        "notaPromedio": 3.26,
        "resenasOcultas": 40,
        "resena": {
          "texto": "Suele ser confusas y aburridas las clases, sus parciales son asesinos, hay que meterle con toda a los quices por su ponderación y a veces tira comentarios muy 😐",
          "pros": "Ponderación A veces amable",
          "contras": "Aburrido Parciales muy difíciles Para notas muy difícil",
          "periodo": "2024-2",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Myriam Leonor Campos Florez",
        "slug": "myriam-leonor-campos-florez",
        "resenas": 46,
        "calidad": "mala",
        "calificacion": 2,
        "notaPromedio": 2.98,
        "resenasOcultas": 45,
        "resena": {
          "texto": "Pedagogo de pedagogos. Sabe enseñar su materia como no he visto a nadie enseñarla. Las evaluaciones que aplica son excelente método de estudio y ayudan a guardarse los conocimientos requerido de la materia. Explica, enseña, responde dudas como ningún otro profesor, excelente. Sinceramente, espero que siga dictando clase porque tiene la vocación para ello.",
          "pros": null,
          "contras": null,
          "periodo": "2026-2",
          "calificacion": 2,
          "dificultad": 2.1
        }
      },
      {
        "nombre": "Yesid Esteban Clavijo Penagos",
        "slug": "yesid-esteban-clavijo-penagos",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "1000005": {
    "nombre": "Calculo Integral",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000005",
    "profesores": [
      {
        "nombre": "Helena Dulcey Hernandez",
        "slug": "helena-dulcey-hernandez",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.3,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Fue mi primera impresión de los profesores de la UNAL pues en primer semestre vi cáculo diferencial con ella y quedé muy contento y satisfecho de haber entrado a esta Universidad. Helena fue una persona muy carismática trabajdora y brillante a la hora de explicar. Una claridad y un orden sobresaliente en sus clases que la hacen una gran profesora. Además es amable y hace muy entrtetenida la clase.",
          "pros": null,
          "contras": null,
          "periodo": "2015-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Oscar Mauricio Parra Baquero",
        "slug": "oscar-mauricio-parra-baquero",
        "resenas": 52,
        "calidad": "buena",
        "calificacion": 4.31,
        "notaPromedio": 3.73,
        "resenasOcultas": 51,
        "resena": {
          "texto": "Un profesor muy mediocre, solo lee diapositivas y las explicaciones en el tablero son muy malas, va muy rápido y casi no se le entiende (aunque no sé si era que estábamos en un auditorio). El primer parcial fue una masacre. No vale procedimiento y en general exige mucho para la calidad que ofrece.",
          "pros": null,
          "contras": null,
          "periodo": "2024-1",
          "calificacion": 1.5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Serafin Bautista Diaz",
        "slug": "serafin-bautista-diaz",
        "resenas": 50,
        "calidad": "buena",
        "calificacion": 3.95,
        "notaPromedio": 3.78,
        "resenasOcultas": 49,
        "resena": {
          "texto": "Es buen profesor. Puede parecer un poco serio, y usa un tono de voz muy monótono, pero en realidad es muy chistoso, a veces se siente hasta una vibra medio paternal. Sus parciales son un poco difíciles, pero no son imposibles, muchos puntos salen de ejercicios que el deja, algunos hasta son exactamente puntos que el deja como material de estudio, si pone atención a lo que el manda a lo largo de la clase, le va bien. Hace quices a veces, pero la mayoría de veces son unos 2 o 3 talleres de los temas, que se hacen en parejas o grupos de 3, bastante fácil dejar esa nota alta, y los ejercicios en…",
          "pros": "Bastante material de estudio Puntual En lo parciales o talleres, da feedback de los ejercicios, incluso aunque esten bien, dan consejitos para que se mejore algun aspecto Chistoso",
          "contras": "La letra",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 4
        }
      },
      {
        "nombre": "Edward Samuel Becerra Rojas",
        "slug": "edward-samuel-becerra-rojas",
        "resenas": 53,
        "calidad": "regular",
        "calificacion": 3.3,
        "notaPromedio": 3.17,
        "resenasOcultas": 52,
        "resena": {
          "texto": "Este personaje, y otros similares, fueron responsables de que muchas personas brillantes de mi generación no tuvieran la oportunidad de graduarse, debido a un sistema de evaluación que filtra más de lo que educa y hablo de años, al parecer no ha cambiado la situación en ese sitio La educación no consiste únicamente en tener el hacha en la mano, sino en actuar con verdadera responsabilidad social y formar personas con algo de compasión frente a contextos muy distintos Cuando las decisiones se toman desde el ego académico, ignorando que detrás de cada estudiante hay familias, sueños y metas…",
          "pros": null,
          "contras": "La nota mínima que me pide ponerle es 1.5, pero que yo recuerde muchos compañeros salían de los parciales con 0 y la nota más alta del curso era 1.2 En su momento de estudiante uno aceptaba eso con ingenuidad; hoy, como…",
          "periodo": "2025-2",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Mauricio Bogoya Lopez",
        "slug": "mauricio-bogoya-lopez",
        "resenas": 64,
        "calidad": "regular",
        "calificacion": 3.27,
        "notaPromedio": 3.14,
        "resenasOcultas": 63,
        "resena": {
          "texto": "Solo vengo a recordarles que este Man coge a personas en la mala, los humilla, se burla de ellos, incluso llega a insultarlos. Estuve a punto de dejar la carrera por este man, tuve que ir a un psicólogo porque el Man me metió la idea en la cabeza de que no servía para la carrera y que debería dedicarme a algo más en vez de perder el tiempo. Bogoya, si lee esto, lo odio profundamente, me arruinó la vida.",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Franqui Solis Cardenas Poloche",
        "slug": "franqui-solis-cardenas-poloche",
        "resenas": 46,
        "calidad": "regular",
        "calificacion": 2.73,
        "notaPromedio": 3.87,
        "resenasOcultas": 45,
        "resena": {
          "texto": "\"si regalar fuera un deporte, franqui seria medallista profesional\" . ¡Franqui, Franqui, sin parar! ¡Él te enseña a conjuntar! Con unión, intersección, complemento y paz, ¡Regala la materia y no pide más! ¡Dale Franqui, dale así! ¡Teoría de conjuntos es fácil junto a ti! Subconjuntos, vacío, potencia y partición, ¡Él te los clava sin confusión!",
          "pros": "Regala",
          "contras": "nada simplemente regala",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Liliana Constanza Romero Marroquin",
        "slug": "liliana-constanza-romero-marroquin",
        "resenas": 2,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Con la profesora Liliana vi Cálculo Diferencial el segundo semestre de 2011. Me pareció una clase muy buena, ella siempre estuvo dispuesta a resolver las dudas de los estudiantes y los parciales eran acordes a lo explicado en clase (además de los talleres). Quedé con buena formación para el resto de la carrera (Economía).",
          "pros": null,
          "contras": null,
          "periodo": "otro",
          "calificacion": 4.5,
          "dificultad": 3.6
        }
      },
      {
        "nombre": "Andrés Ricardo Rodríguez Nagles",
        "slug": "andrés-ricardo-rodríguez-nagles",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Jose Jorge Sierra Molina",
        "slug": "jose-jorge-sierra-molina",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "1000009": {
    "nombre": "Biologia General",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000009",
    "profesores": [
      {
        "nombre": "Maryam Chaib de Mares",
        "slug": "maryam-chaib-de-mares",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.53,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Es muy buena profesora, explica bien, sus clases son chéveres y hace talleres con preguntas abiertas. Sus parciales no son de memoria, pero sí requieren haber estudiado sobre el tema. Muy recomendado ver clases con ella.",
          "pros": null,
          "contras": null,
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 4.3
        }
      },
      {
        "nombre": "Alejandro Caro Quintero",
        "slug": "alejandro-caro-quintero",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.9,
        "notaPromedio": 4.37,
        "resenasOcultas": 5,
        "resena": {
          "texto": "El profesor sabe mucho sobre el tema, es muy amable y trae una perspectiva poco común en la carrera de la microbiología. La clase era una electiva, por lo cual podía llegar a ser muy introductoria para estudiantes de biología. Pero aún así, aprendí mucho sobre diferentes temas de genética y evolución. Solía estar ocupado y no ir a clase, pero usualmente iban sus estudiantes de posgrado a reemplazarlo. Los parciales y talleres no eran tan difíciles y en general sí servían para aprender. Sin embargo, nunca dio retroalimentación ni publicó las notas de los talleres ni del segundo parcial, solo…",
          "pros": "- Tema muy interesante. - Oportunidad de hacer talleres prácticos, tanto de laboratorio como de bioinformática.",
          "contras": "- Ni idea de dónde sacó las notas. - A veces las clases daban sueño (a él también, tenía que salir por café, pero para ser justos era un salón muy oscuro)",
          "periodo": "2024-2",
          "calificacion": 4.6,
          "dificultad": 3.7
        }
      },
      {
        "nombre": "Mario Armando Monroy Lopez",
        "slug": "mario-armando-monroy-lopez",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 4.65,
        "notaPromedio": 4.23,
        "resenasOcultas": 12,
        "resena": {
          "texto": "Me agrada es justo, divide la nota en varias cosas, es ordenado, todo lo sube al Moodle es dinámico se le entiende bien y hace la clase interesante",
          "pros": null,
          "contras": null,
          "periodo": "2024-2",
          "calificacion": 4.6,
          "dificultad": 3
        }
      },
      {
        "nombre": "Johana Carolina Soto",
        "slug": "johana-carolina-soto",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.45,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Es una excelente profesora. De los tres módulos de Biología General fué el que más me gustó, porque a pesar de que son temas un poco arduos por tanto contenido (Genética), ella nos explicó de mil formas hasta que entendieramos. Hizo las clases muy didácticas, respondía cualquier duda referente a los temas y es muy buena gente. Este módulo es 70% talleres (prácticamente todos en grupo) y 30% parcial (que fue muy fácil). Aprovechenla, es de las pocas profesoras que hace cogerle gusto a la materia y disfrutarla. - Consejo: Como los talleres son en grupo, traten de dividirse bien los puntos para…",
          "pros": "- Hace bastantes talleres (en grupo) y te ayuda si no entiendes algo. - Sus talleres no son difíciles, al contrario, suelen ser de análisis y eso los hace interesantes. - Es muy buena gente. -No califica para nada duro.…",
          "contras": "- A veces se tornaba la clase un poco aburrida por tanto tema pero es normal por los contenidos del módulo.",
          "periodo": "2023-2",
          "calificacion": 4.9,
          "dificultad": 2
        }
      },
      {
        "nombre": "Hector Anibal Campos Mosos",
        "slug": "hector-anibal-campos-mosos",
        "resenas": 3,
        "calidad": "regular",
        "calificacion": 4.03,
        "notaPromedio": 4,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Semestre 2022-1 presencial. El profesor tiene una metodología en la que comienzas con cosas muy básicas para saber el trasfondo de los análisis multivariantes que comienzas a ver desde la semana 8 mas o menos. Sin embargo, como estudiante uno se beneficiaria mucho si el profesor pone de prerrequisitos algebra lineal y bioestadística. Al inicio va muy lento y se molesta un poco cuando le pides explicaciones. En el semestre te pide un proyecto de clase del cual solo tienes retroalimentación una vez y luego la nota del proyecto la saca muy subjetivamente. Nunca te dice cuales son las notas que…",
          "pros": null,
          "contras": null,
          "periodo": "2021-10 (virtual)",
          "calificacion": 2.6,
          "dificultad": 3.7
        }
      },
      {
        "nombre": "Natalia Ruiz",
        "slug": "natalia-ruiz",
        "resenas": 11,
        "calidad": "regular",
        "calificacion": 3.83,
        "notaPromedio": 4.49,
        "resenasOcultas": 10,
        "resena": {
          "texto": "Es divina, la mejor profe en cuanto a fundamentos de ecología se refiere, su forma de explicar incluso detras de una pantalla de verdad transmite, es justa en cuanto a la calificación y en cuanto a lo que quiere, es muy buena persona y siempre trata de hacer la clase agradable, aunque algunos estudiantes sean unos mediocres e ineptos. Profe si ve esto quiero que sepa que ame sus clases",
          "pros": "Todos",
          "contras": "Los compañeros de clase",
          "periodo": "2020-20 (virtual)",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "José Camilo Fagua",
        "slug": "jose-camilo-fagua",
        "resenas": 6,
        "calidad": "regular",
        "calificacion": 3.72,
        "notaPromedio": 4.3,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Es muy bueno en su metodología, es un poco impuntual, sus clases son a lo que él va a explicar y se va , resuelve dudas y el parcial es solo prestarle atención y razonamiento lógico, es muy confusa su explicación del uso de aplicaciones de geo modelación.",
          "pros": "Explica bien Fácil de pasar Resuelve dudas Buena metodología",
          "contras": "Confuso algunas veces en el uso de aplicaciones",
          "periodo": "2025-1",
          "calificacion": 4.3,
          "dificultad": 2
        }
      },
      {
        "nombre": "Juan Manuel Carvajalino Fernández",
        "slug": "juan-manuel-carvajalino-fernandez",
        "resenas": 3,
        "calidad": "mala",
        "calificacion": 2.47,
        "notaPromedio": 3.37,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Sabe mucho, pero comete un error grandísimo al no saber explicar y querer de cierta forma \"afectar la nota del estudiante\". Sin duda, que esto último mencionado es de lo más aburrido, porque puedes tener muy alta la nota de los demás módulos de Biologia y este te afecta un montón. A veces divaga con cosas de biología, da muchísimos conceptos que a la final no los pregunta en el parcial o que hacen supremamente monótona la clase (porque son cosas que solo los biólogos entienden); y no suele dar las notas bien (se equivoca mucho que hasta puede ponerte un 0 así hubieras presentado la actividad,…",
          "pros": "- Hizo este semestre una práctica de laboratorio (enseñó a usar el microscopio y ver diferentes objetos, aunque por la cantidad de estudiantes fué muy corta la experiencia). - Hizo una salida al Museo de Historia…",
          "contras": "- Parece que tuviera preferencias. - Es bastante técnico al explicar (aunque ha mejorado eso respecto a semestres anteriores). - Siempre está dedicado a querer afectarle la nota al estudiante (esto reflejado en las…",
          "periodo": "2023-2",
          "calificacion": 3,
          "dificultad": 4
        }
      },
      {
        "nombre": "Alejandro Chaparro Giraldo",
        "slug": "alejandro-chaparro-giraldo",
        "resenas": 3,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Las clases llegan a ser tediosas y aburridas, pero explica bien y se le entiende. La nota final del modulo es la del parcial, no saca ninguna otra nota,parcial el cual llega a ser confuso, se debe tener conocimientos de temas los cuales no explicó en clase.",
          "pros": null,
          "contras": null,
          "periodo": "2019-10",
          "calificacion": 3.5,
          "dificultad": 3.6
        }
      }
    ]
  },
  "1000012": {
    "nombre": "Bioestadistica Fundamental",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000012",
    "profesores": [
      {
        "nombre": "Nelson Alirio Cruz Gutierrez",
        "slug": "nelson-alirio-cruz-gutierrez",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 4.97,
        "notaPromedio": 4.66,
        "resenasOcultas": 12,
        "resena": {
          "texto": "Es un gran docente y persona. Se preocupa por el aprendizaje de sus estudiantes y tiene buenas herramientas para la virtualidad. Sus parciales y talleres son bastante creativos y esta abierto a dudas siempre",
          "pros": "-Puntual en todo el sentido, notas, clases, etc. -Divertido -Creativo",
          "contras": "-En lo personal me tocaba reforzar la parte teórica con los libros ya que en clase se tocaba a veces de manera muy breve.",
          "periodo": "2021-10 (virtual)",
          "calificacion": 4.8,
          "dificultad": 3.8
        }
      },
      {
        "nombre": "Luis David Velásquez Tafur",
        "slug": "luis-david-velasquez-tafur",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.03,
        "notaPromedio": 3.67,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Mal tiempo",
          "pros": "El profe hace divertida la clase e intenta hacerla lo más amena con ejemplos de la vida real. El ambiente de la clase era chévere teniendo en cuenta el horario pesado en las noches Es amable, es flexible y entiende a…",
          "contras": "Canceló demasiadas clases, pero no de que digas “ay, me cancelaron la clase, q chimba” sino más bien preocupante Seriamente no se si se habrán dado la mitad de las clases. Tanto que al final se tuvo que recortar uno de…",
          "periodo": "2025-2",
          "calificacion": 3.6,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Luis Eduardo Castillo Mendez",
        "slug": "luis-eduardo-castillo-mendez",
        "resenas": 12,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Si bien, en la parte presencial se aprende, en educación virtual no me gustó. Llegaba tarde a todas las clases y varias veces canceló a última hora (Nunca repuso las clases perdidas). No preparaba las clases e improvisaba mucho. Varias veces se le preguntaba y no respondía o contestaba con evasivas. Gran parte del aprendizaje era autónomo, resolviendo los parciales que dejaba. Las únicas notas son tres parciales que envía y da una semana para devolverlos resueltos, así que es muy fácil dejar la nota alta.",
          "pros": "Se puede dejar alta.",
          "contras": "Requiere mucho aprendizaje autónomo.",
          "periodo": "2020-10 (virtual)",
          "calificacion": 1.5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Dagoberto Bermudez Rubio",
        "slug": "dagoberto-bermudez-rubio",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Es un buen profesor. No se detiene a enseñar cosas fútiles, en cambio, avanza demasiado en temas. La nota final con él se saca a partir de tres parciales únicamente, así que pilas.",
          "pros": "-Capta la atención. -Enseña completo.",
          "contras": "-Parciales nivel treinta hpta (Muy difíciles)",
          "periodo": "2019-20",
          "calificacion": 4.3,
          "dificultad": 5
        }
      },
      {
        "nombre": "Eurides Triana",
        "slug": "eurides-triana-triana",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Cuándo vi con él manejaba horarios de tarde y noche, esto hacía que sus clases se tornaran pesadas a veces, pero respecto a su forma de enseñar, se esfuerza por dejar claros los temas a pesar de que en ocasiones no se le entiende bien. Deja talleres ni muy difíciles ni muy fáciles, con resolverlos basta para los parciales. Recomendadísimo.",
          "pros": "-Muestra buena disposición a resolver dudas. -Parciales trabajables. -Da muchas ayudas para subir notas malas como hacer supletorio para cambiar la nota de un parcial o un trabajo pequeño de investigación para subir la…",
          "contras": null,
          "periodo": "2015-20",
          "calificacion": 4.5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Oscar Fredy Soto Bocanegra",
        "slug": "oscar-fredy-soto-bocanegra",
        "resenas": 2,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Sabe mucho, pero es bastante aburrido, haciendo complicar un curso que para la mayoría es sencillo. Los parciales no tendrán mucho que ver con lo que se esperaría de la clase",
          "pros": "Sabe harto",
          "contras": "Aburrido Metodologia (diapositiva)",
          "periodo": "2018-10",
          "calificacion": 1.7,
          "dificultad": 4
        }
      },
      {
        "nombre": "Emilio Pablo Berdugo Camacho",
        "slug": "emilio-pablo-berdugo-camacho",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Luz Yecenia Mendez Herrera",
        "slug": "luz-yecenia-mendez-herrera",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Nicolas Acevedo Cruz",
        "slug": "nicolas-acevedo-cruz",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "1000013": {
    "nombre": "Probabilidad Y Estadistica Fundamental",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000013",
    "profesores": [
      {
        "nombre": "Nelson Alirio Cruz Gutierrez",
        "slug": "nelson-alirio-cruz-gutierrez",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 4.97,
        "notaPromedio": 4.66,
        "resenasOcultas": 12,
        "resena": {
          "texto": "Es un gran docente y persona. Se preocupa por el aprendizaje de sus estudiantes y tiene buenas herramientas para la virtualidad. Sus parciales y talleres son bastante creativos y esta abierto a dudas siempre",
          "pros": "-Puntual en todo el sentido, notas, clases, etc. -Divertido -Creativo",
          "contras": "-En lo personal me tocaba reforzar la parte teórica con los libros ya que en clase se tocaba a veces de manera muy breve.",
          "periodo": "2021-10 (virtual)",
          "calificacion": 4.8,
          "dificultad": 3.8
        }
      },
      {
        "nombre": "Danna Lesley Cruz Reyes",
        "slug": "danna-lesley-cruz-reyes",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.78,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Materia no tan dificil, aunque complicada si no se le dan tan bien las matematicas. La profesora califica bien, pero molesta por asistencia, deja tarea casi todas las semanas y no ayudan tanto. Lo mas molesto es que casi todo lo hace en R entonces necesita al menos una base en programacion aunque la profesora se esfuerza para enseñarlo.",
          "pros": "Califica bien",
          "contras": "Mucha tarea Toma asistencia Utiliza R",
          "periodo": "2025-2",
          "calificacion": 3,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Jeimy Paola Aristizabal Rodriguez",
        "slug": "jeimy-paola-aristizabal-rodriguez",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.3,
        "notaPromedio": 3.8,
        "resenasOcultas": 4,
        "resena": null
      },
      {
        "nombre": "Oscar Javier Pacheco Perez",
        "slug": "oscar-javier-pacheco-perez",
        "resenas": 15,
        "calidad": "buena",
        "calificacion": 4.08,
        "notaPromedio": 4.33,
        "resenasOcultas": 14,
        "resena": {
          "texto": "Un profe bastante interesante. Fanático de Millonarios, se la pasa hablando de su vida. Todo lo que escribe lo hace en la tablet, así que es fácil perderse. Las pocas veces que utilizo el tablero fue 20/10. Selecciona algunos estudiantes para revisarles los parciales y ver si utilizaron IA. Puedo subirle, como puede bajarle. A mí me sirvió, pero puede que a otra persona no. No es un profesor complicado, usted aprende R porque aprende. Aprender Estadístico o Probabilidad es avaricia, va a ser en gran parte estudio autónomo. Los parciales son en R, él sube un forms y tú lo empiezas a completar…",
          "pros": "Parciales fáciles, solo es estudiar y revisar ejercicios. Si puede conseguir parciales anteriores mejor, muchas veces las preguntas se pueden repetir o tienen estructura similar, así que solo es cambiar datos. El 60% de…",
          "contras": "No es el mejor en metodología de enseñanza, las clases pueden ser muy monótonas o aburridas. Estudio autónomo gran parte, por si no le capta al profe.",
          "periodo": "2024-2",
          "calificacion": 4.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Mayo Luz Polo Gonzalez",
        "slug": "mayo-luz-polo-gonzalez",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 3.98,
        "notaPromedio": 3.91,
        "resenasOcultas": 8,
        "resena": {
          "texto": "En general es una muy buena docente, la materia es un poco distinta a lo que uno viene acostumbrado en la carrera (notación, teoría, etc). Recomiendo estudiar desde un principio, la materia es pesada, pero Mayo es un amor de persona.",
          "pros": "organizada, amable",
          "contras": null,
          "periodo": "2024-2",
          "calificacion": 4,
          "dificultad": 4.4
        }
      },
      {
        "nombre": "Luis Eduardo Castillo Mendez",
        "slug": "luis-eduardo-castillo-mendez",
        "resenas": 12,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Si bien, en la parte presencial se aprende, en educación virtual no me gustó. Llegaba tarde a todas las clases y varias veces canceló a última hora (Nunca repuso las clases perdidas). No preparaba las clases e improvisaba mucho. Varias veces se le preguntaba y no respondía o contestaba con evasivas. Gran parte del aprendizaje era autónomo, resolviendo los parciales que dejaba. Las únicas notas son tres parciales que envía y da una semana para devolverlos resueltos, así que es muy fácil dejar la nota alta.",
          "pros": "Se puede dejar alta.",
          "contras": "Requiere mucho aprendizaje autónomo.",
          "periodo": "2020-10 (virtual)",
          "calificacion": 1.5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Lizet Viviana Romero Orjuela",
        "slug": "lizet-viviana-romero-orjuela",
        "resenas": 6,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 5,
        "resena": {
          "texto": "La profesora explica muy bien el tema, y deja talleres suficientes para preparar los parciales (los talleres suelen ser complicados pero ayudan bastante). Siempre está disponible a responder dudas por correo e incentiva a los estudiantes para que aprovechen los grupos de estudio autónomo y de monitorias. La profesora si tiene en cuenta la participación de los estudiantes en la clase, pues si usted falla mucho ella no suele ser muy amable resolviendo sus dudas",
          "pros": "Da muchas herramientas para aprender el tema",
          "contras": null,
          "periodo": "2019-20",
          "calificacion": 4,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Leonardo Aponte Nonzoque",
        "slug": "leonardo-aponte-nonzoque",
        "resenas": 2,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Mal profesor, no se le entiende, es muy arrogante y los parciales que deja muchas veces son de temas que no explica con claridad.",
          "pros": "Sabe los temas",
          "contras": "Demora en notas,",
          "periodo": "2018-20",
          "calificacion": 2,
          "dificultad": 3.1
        }
      },
      {
        "nombre": "Oscar Fredy Soto Bocanegra",
        "slug": "oscar-fredy-soto-bocanegra",
        "resenas": 2,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Sabe mucho, pero es bastante aburrido, haciendo complicar un curso que para la mayoría es sencillo. Los parciales no tendrán mucho que ver con lo que se esperaría de la clase",
          "pros": "Sabe harto",
          "contras": "Aburrido Metodologia (diapositiva)",
          "periodo": "2018-10",
          "calificacion": 1.7,
          "dificultad": 4
        }
      }
    ]
  },
  "1000017": {
    "nombre": "Fundamentos De Electricidad Y Magnetismo",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000017",
    "profesores": [
      {
        "nombre": "Juan Camilo Serna Bedoya",
        "slug": "juan-camilo-serna-bedoya",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.88,
        "notaPromedio": 4.54,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Muy buen profesor, no le interesaba demorarse casi las dos horas explicando la teoría que el profesor de magistral no era capaz de explicar bien. Usa muchos simuladores que facilitan el aprendizaje y la comparación de datos experimentales con datos teóricos.",
          "pros": "Uso de simuladores Explica muy bien la teoría Califica suave",
          "contras": "Ninguno",
          "periodo": "2021-10 (virtual)",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Eduardo Antonio Rodriguez Salgado",
        "slug": "eduardo-antonio-rodriguez-salgado",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 4.61,
        "notaPromedio": 4.09,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Excelente profesor. Sus talleres son exigentes, pero así mismo el aprendizaje en esta materia está garantizado por completo. Tiene una relación excelente con los estudiantes, y sus clases son geniales",
          "pros": "La clase NO es para nada aburrida. Realmente él sabe infundar mucho amor por la física y las matemáticas a sus estudiantes",
          "contras": "El nivel de dificultad es alto. Pero vale totalmente la pena la experiencia!",
          "periodo": "2021-10 (virtual)",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Heiddy Paola Quiroz",
        "slug": "heiddy-paola-quiroz",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 4.57,
        "notaPromedio": 4.33,
        "resenasOcultas": 6,
        "resena": {
          "texto": "esta señora ama ser profesora, no es la típica que va creyendo que entre mas gente raje mas respeto le tienen, es super comprensiva y explica como claro, conciso y muy facil",
          "pros": "todo",
          "contras": "nada",
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 3.1
        }
      },
      {
        "nombre": "Frank Rodolfo Fonseca",
        "slug": "frank-rodolfo-fonseca-fonseca",
        "resenas": 22,
        "calidad": "buena",
        "calificacion": 4.03,
        "notaPromedio": 4.44,
        "resenasOcultas": 21,
        "resena": {
          "texto": "Un gran profesor, él dice que quiere ser el dharma de los estudiantes, responde correos rapidísimo, es amable, se pueden negociar con él los porcentajes de la materia, parciales sencillos",
          "pros": "Sus clases son amenas",
          "contras": "No es muy exigente",
          "periodo": "2024-1",
          "calificacion": 4.5,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Diego Alejandro Torres Galindo",
        "slug": "diego-alejandro-torres-galindo",
        "resenas": 25,
        "calidad": "regular",
        "calificacion": 3.8,
        "notaPromedio": 4.59,
        "resenasOcultas": 24,
        "resena": {
          "texto": "Es un profesor amable y llega a regalar nota.pero, su enseñanza llega a ser algo tosca, siendo que uno debe apoyarse más de lo normal en los libros que en sus clases. Es alguien muy entusiasta y se nota que le gusta enseñar. Sus parciales suelen ser muy largos con un nivel de complejidad medio en ocasiones, suele hacer quiz si suena algún celular (lo cual me parece bien).",
          "pros": "Da mucho material de estudio autónomo y fracciona las notas del semestre mucho lo cual deja la facilidad de pasar con nota alta la materia.",
          "contras": "Enseñanza tosca y suele ir muy rápido dejando vacíos. En newtoniana terminamos antes que los otros cursos y empezamos a ver relatividad.",
          "periodo": "2026-1",
          "calificacion": 4,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Dario Miguel Angel Rodriguez Garavito",
        "slug": "dario-miguel-angel-rodriguez-garavito",
        "resenas": 54,
        "calidad": "regular",
        "calificacion": 3.45,
        "notaPromedio": 4.08,
        "resenasOcultas": 53,
        "resena": {
          "texto": "no es mal profesor, se le entiende lo que enseña y da mucho material, pero sus clases son muy aburridas y los parciales son difíciles, coloca muchas preguntas y las preguntas son muy largas de resolver.",
          "pros": "es virtual se pueden pasar los parciales a punta de ia es pasable no es grosero",
          "contras": "parciales difíciles es aburrido.",
          "periodo": "2024-2",
          "calificacion": 3,
          "dificultad": 4
        }
      },
      {
        "nombre": "Carlos Joel Perilla",
        "slug": "carlos-joel-perilla-perilla",
        "resenas": 6,
        "calidad": "regular",
        "calificacion": 2.95,
        "notaPromedio": 4.2,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Se pasa con asistencias pero es la peor opcion si quieres aprender, el profesor es humillante, improvisa mucho las clases, los temas los dicta muy por encima y los exámenes nada que ver con lo que da en clase.",
          "pros": "Se pasa con asistencias. Los laboratorios son bastante buenos, parte practica muy interesante.",
          "contras": "No profundiza tema (No se aprende), sus examenes no tienen nada que ver con sus clases Parcial cada 15 dias. clases, disfruta humillando sus alumnos, solo acepta comentarios de las chicas:/",
          "periodo": "2025-1",
          "calificacion": 1.6,
          "dificultad": 4.9
        }
      },
      {
        "nombre": "Jaime Villalobos Velasco",
        "slug": "jaime-villalobos-velasco",
        "resenas": 25,
        "calidad": "regular",
        "calificacion": 2.86,
        "notaPromedio": 4.52,
        "resenasOcultas": 24,
        "resena": {
          "texto": "Este profesor es un parche, como persona es un amor, pero su pedagogía es demasiado flexible y de tan flexible que es uno no aprende nada Si quiere parcharse y no hacer nada es aquí",
          "pros": "Lo pone a pensar cosas curiosas Si se lo propone puede dar explicaciones interesantes de ciertos temas La ultima clase nos hizo una actividad lo mas de bonitas con bobinas y nitrógeno liquido",
          "contras": "Es demasiado desorganizado Usted no sabe en que lleva la nota Prácticamente no aprende nada",
          "periodo": "2025-2",
          "calificacion": 1.5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Andres Fernando Castillo Ramirez",
        "slug": "andres-fernando-castillo-ramirez",
        "resenas": 5,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Es un profesor exigente, tiene mucho amor por la física por lo que intenta ser muy riguroso y deslumbrarnos contando un poco de historia que viene al tema. Fue algo duro pero era trabajable aunque requería de bastante tiempo.",
          "pros": "Se aprende mucho",
          "contras": "Si no estudia ciencias, puede que sea más riguroso de lo necesario",
          "periodo": "2018-20",
          "calificacion": 4,
          "dificultad": 4
        }
      }
    ]
  },
  "1000019": {
    "nombre": "Fundamentos De Mecanica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000019",
    "profesores": [
      {
        "nombre": "Juan Diego Castaño Marin",
        "slug": "juan-diego-castano-marin",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.77,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Uff parce excelente profesor, explica bien y si no lo entiendes es que sos mucho mk xD, pero en serio, califica bien, le sabe al futbol y a la musica.",
          "pros": "Talleres sencillos buena metodología califica basándose en lo que aprendiste por medio de exposiciones sencillas",
          "contras": "No tiene ninguno en particular.",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 2.9
        }
      },
      {
        "nombre": "Jose Manuel Quimbayo Garcia",
        "slug": "jose-manuel-quimbayo-garcia",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.85,
        "notaPromedio": 3.95,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Muy buen profesor, explica super bien, se comprenden los temas re bien con sus ejercicios",
          "pros": "Buena gente Explica bien Talleres largos pero trabajables Quices trabajables",
          "contras": "Ninguno no lo dude",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Diego Alejandro Heredia Franco",
        "slug": "diego-alejandro-heredia-franco",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4.8,
        "notaPromedio": 4.4,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Profe al parecer nuevo, se empeña un monton en enseñar, y es muy bueno haciendolo, da ganas de estudiar la materia, y es habil en los temas que explica, pone ejercicios dificiles para que los temas te queden bien grabadas, pero vale el esfuerzo, me carreo los parciales de magistral",
          "pros": "Hace talleres largos pero muy utiles te explica de manera muy buena",
          "contras": "Algunos talleres son en grupo, y aunque no feu mi caso, sabemos que hay gente que no trabaja en los talleres te bajaba nota por cualquier cosa (Aunque tambien queda super claro que errores cometiste)",
          "periodo": "2025-1",
          "calificacion": 4.8,
          "dificultad": 3.6
        }
      },
      {
        "nombre": "Ever David Alcala Cajar",
        "slug": "ever-david-alcala-cajar",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4.7,
        "notaPromedio": 4.2,
        "resenasOcultas": 0,
        "resena": {
          "texto": "OJO! Esta reseña solo es para la clase de \"taller\". (Alguien que se anime a subir la de laboratorio) Tratare de dar todo los detalles de la clase de taller para que considere si es una opción viable en la elección de sus profes de fundamentos A mucha gente puede que no le guste la forma en que Ever evalúa los talleres y puede llegar a ser un fastidio como realiza la clase, aunque sinceramente para mi fue muy cómoda y estoy seguro que incluso se puede cinquear con el. Inicialmente Ever le da la posibilidad de los estudiantes de armar sus grupos de trabajo de máximo 4 personas y que será el…",
          "pros": "- Buena gente y atento con los estudiantes - Justo con la clase - Se nota que le gusta enseñar - Califica suave los quices - Ofrece un quiz de reposición al final de semestre para subir las notas de quiz. - Elimina la…",
          "contras": "- Aunque son en grupo, los talleres pueden a llegar ser largos y densos - Califica un poco durito la solución de los puntos del taller cuando se pasa al tablero - No es muy comprensivo respecto a excusas por faltar a…",
          "periodo": "2025-2",
          "calificacion": 4.7,
          "dificultad": 3
        }
      },
      {
        "nombre": "Heiddy Paola Quiroz",
        "slug": "heiddy-paola-quiroz",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 4.57,
        "notaPromedio": 4.33,
        "resenasOcultas": 6,
        "resena": {
          "texto": "esta señora ama ser profesora, no es la típica que va creyendo que entre mas gente raje mas respeto le tienen, es super comprensiva y explica como claro, conciso y muy facil",
          "pros": "todo",
          "contras": "nada",
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 3.1
        }
      },
      {
        "nombre": "Maurizio De Sanctis",
        "slug": "maurizio-de-sanctis",
        "resenas": 16,
        "calidad": "buena",
        "calificacion": 4.34,
        "notaPromedio": 4.7,
        "resenasOcultas": 15,
        "resena": {
          "texto": "Es un docente que se interesa mucho por la clase, da oportunidades para que los estudiantes participen mucho y se esmera en construir la clase a partir de cosas que los estudiantes ya saben. Es un marco bastante completo de la historia de la ciencia. A veces se tira unas reflexiones basadas a partir de la historia que se ve xd. También le interesa escuchar las experiencias de los estudiantes en el semestre y hablar de cómo son las materias. Para el curso hay que hacer 4 ensayos, cosa que puede ser un poco pesada, pero haciéndolos se aprende bastante.",
          "pros": "No hay parciales ni quices ni lecturas, solo ensayos Es interesante Excelente docente",
          "contras": "nadaaaaaaaaaaaa",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Ramiro Cardona",
        "slug": "ramiro-cardona-cardona",
        "resenas": 27,
        "calidad": "regular",
        "calificacion": 3.63,
        "notaPromedio": 4.08,
        "resenasOcultas": 26,
        "resena": {
          "texto": "Es un muy buen profesor, muy didáctico y enseña los temas de una forma muy clara que permite el entendimiento. Siempre está abierto a responder dudas y suele traer objetos a las clases para entender los fenómenos que se estudian. Es fácil sacar buena nota en taller.",
          "pros": "Es muy didáctico Se entienden muy bien los temas Es fácil pasar con buena nota Es muy amable",
          "contras": "Ninguna",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Jean Pierre Cifuentes Salazar",
        "slug": "jean-pierre-cifuentes-salazar",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 3.5,
        "notaPromedio": 4.2,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Profesor joven, califica durito en lab pero se entiende. es amable y super atento",
          "pros": "es amable, si le mete la ficha a los informes se deja alta.",
          "contras": "es nuevo entonces se confunde a veces.",
          "periodo": "2025-1",
          "calificacion": 3.5,
          "dificultad": 2.6
        }
      },
      {
        "nombre": "Rafael German Hurtado Heredia",
        "slug": "rafael-german-hurtado-heredia",
        "resenas": 6,
        "calidad": "regular",
        "calificacion": 3.38,
        "notaPromedio": 4.22,
        "resenasOcultas": 5,
        "resena": {
          "texto": "La materia más tranqui de este semestre para mi, como estudiante de pregrado no hay que hacer mucho más que ir a las clases, eso si, puede sacarse bastante provecho porque el profesor lleva invitados tanto de la facultad como expertos de otras áreas. El punto de la materia es que los grupos de investigación muestren lo que hacen, fue muy interesante. El profe es amable y siempre tenía tema de conversación. La calificación fueron quices y no era posible perderlos.",
          "pros": "-El profesor da bastantes recursos, tanto de la universidad como externos, aprendí a buscar papers para mi tesis aunque aún no tenga idea de qué será la tesis, graciassss",
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 4,
          "dificultad": 1.5
        }
      }
    ]
  },
  "1000021": {
    "nombre": "Fundamentos De Mecanica De Fluidos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000021",
    "profesores": [
      {
        "nombre": "Juan Pablo Beltrán Almeida",
        "slug": "juan-pablo-beltrán-almeida",
        "resenas": 25,
        "calidad": "buena",
        "calificacion": 4.54,
        "notaPromedio": 4.31,
        "resenasOcultas": 24,
        "resena": {
          "texto": "Muy bueno. El profesor Beltrán es tremendamente amable y se preocupa de que uno entienda. Cae bien y, cuando agarra confianza, incluso llega a hacer algunos chistes. Sin él, seguramente no habría aprendido nada de FEM, porque la profesora de magistral fue muy mediocre. Además, aunque es justo al calificar, es benevolente y se puede dejar alta.",
          "pros": "Muy buen docente. Muy amable, y hasta tierno. Se esfuerza para que entienda. Puede dejarla alta.",
          "contras": "No hay.",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3.4
        }
      },
      {
        "nombre": "Roberto Enrique Martinez",
        "slug": "roberto-enrique-martinez-martinez",
        "resenas": 26,
        "calidad": "buena",
        "calificacion": 4.24,
        "notaPromedio": 4.45,
        "resenasOcultas": 25,
        "resena": {
          "texto": "El profe sabe mucho, se nota que ha trabajado mucho en los temas nucleares y de materia. La calificación fueron 4 parciales, 25% cada uno, según otros compañeros estos eran muy fáciles (Hasta él mismo lo decía xd), de hecho había gente que se pegaba a las notas y pasaban los parciales sin ir a clase, no le duele poner 5 si todo está bien. Mirando hacia atrás supongo que si eran fáciles, soy un burro, si va a meter con él, le recomiendo ponerse a solucionar los parciales que están por ahí",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Juan Pablo Del Risco Giraldo",
        "slug": "juan-pablo-del-risco-giraldo",
        "resenas": 29,
        "calidad": "buena",
        "calificacion": 3.99,
        "notaPromedio": 3.9,
        "resenasOcultas": 28,
        "resena": {
          "texto": "vi laboratorio con del risco y la verdad es un muy buen profesor, explica muy bien. diria que lo unico malo es que los informes y bitacoras son un poco largos, pero de resto es excelente. si van a ver alguna laboratorio con este profesor hagan las bitacoras e informes como el lo pide de ahi dependera el 100% de la nota, no se pongan inventar otra cosa.",
          "pros": "explica muy bien es amable",
          "contras": "extricto con la bitacora e informes",
          "periodo": "2024-1",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jose Jairo Giraldo Gallo",
        "slug": "jose-jairo-giraldo-gallo",
        "resenas": 46,
        "calidad": "buena",
        "calificacion": 3.89,
        "notaPromedio": 4.47,
        "resenasOcultas": 45,
        "resena": {
          "texto": "\"Cuantica para todos\" es, sin duda, una experiencia reveladora… no por su contenido, sino por lo que expone de la mediocridad ajena. Como estudiante que ha sudado cada crédito, que ha sacrificado horas de sueño por comprender realmente los fundamentos de la mecánica cuántica, me resulta patético presenciar cómo algunos —que tienen el privilegio de estar en la Universidad Nacional— son incapaces de tareas básicas como apagar un micrófono o tener un enlace a mano, incluso en la última semana del semestre. Y no contentos con eso, hay quienes convierten el espacio académico en un circo: suplantar…",
          "pros": "La universidad, en su generosidad académica, ofrece una materia accesible que podría ser una puerta de entrada noble a la mecánica cuántica. La flexibilidad horaria y el uso de herramientas virtuales demuestran la…",
          "contras": "La vagancia alcanza niveles históricos: hay quienes ni siquiera pueden apagar un micrófono o tener el enlace de la clase a mano, incluso en la última semana del semestre. El “chiste” de suplantar al profesor no es…",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Rigoberto Angel Casas Miranda",
        "slug": "rigoberto-angel-casas-miranda",
        "resenas": 14,
        "calidad": "buena",
        "calificacion": 3.69,
        "notaPromedio": 4.13,
        "resenasOcultas": 13,
        "resena": {
          "texto": "La clase se basa basicamente en las diapositivas del libro de Teiejiro(el otro profesor que dicta la materia), usualmente hay errores en las diapositivas asi que hay que andar pilo con eso. Sin embargo, la clase de relatividad no es tan mala como la pintan por ahí. Las notas consisten en 3 parciales y una nota que quices virtuales. Los parciales tienen una dificultad moderada tirando a alta pero en caso de que al grupo le vaya mal no tiene problemas en ayudar con la nota, el parcial 2 todos no lo tiramos e hizo curva desde 2.8 por lo que basicamente duplico la nota que habiamos sacado…",
          "pros": "Es benevolente con las notas Es amable",
          "contras": "La clase es casi que un resumen tema por tema del libro de Tejeiro Pueden ser aburridas las clases",
          "periodo": "2025-2",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Ramiro Cardona",
        "slug": "ramiro-cardona-cardona",
        "resenas": 27,
        "calidad": "regular",
        "calificacion": 3.63,
        "notaPromedio": 4.08,
        "resenasOcultas": 26,
        "resena": {
          "texto": "Es un muy buen profesor, muy didáctico y enseña los temas de una forma muy clara que permite el entendimiento. Siempre está abierto a responder dudas y suele traer objetos a las clases para entender los fenómenos que se estudian. Es fácil sacar buena nota en taller.",
          "pros": "Es muy didáctico Se entienden muy bien los temas Es fácil pasar con buena nota Es muy amable",
          "contras": "Ninguna",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Walter Alexis Pulido",
        "slug": "walter-alexis-pulido",
        "resenas": 33,
        "calidad": "regular",
        "calificacion": 3.55,
        "notaPromedio": 4.08,
        "resenasOcultas": 32,
        "resena": {
          "texto": "Vi Laboratorio con el, es un profe muy curioso, cuando explica en lo personal explica a la perfección, los temas quedan bastante claros, la cosa es que muchas veces no explica y se salta lo teórico porque sonó algún teléfono, alguien estaba hablando o amaneció con mal humor, los quizzes son relativamente sencillos y son preguntas del marco teórico o de la práctica, así que si realizo buenos informes no debería tener problema en dejarla alta. También si usted le cae bien o tiene una buena percepción de su persona, no será tan riguroso con las calificaciones.",
          "pros": "Buenas explicaciones Se relaja con el pasar del semestre",
          "contras": "Se disocia mucho Inventa muchas historias para dar miedo Si tiene una mala percepción de usted es bastante jodido calificando Gráficas a mano :(",
          "periodo": "2025-1",
          "calificacion": 4.1,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Carlos Joel Perilla",
        "slug": "carlos-joel-perilla-perilla",
        "resenas": 6,
        "calidad": "regular",
        "calificacion": 2.95,
        "notaPromedio": 4.2,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Se pasa con asistencias pero es la peor opcion si quieres aprender, el profesor es humillante, improvisa mucho las clases, los temas los dicta muy por encima y los exámenes nada que ver con lo que da en clase.",
          "pros": "Se pasa con asistencias. Los laboratorios son bastante buenos, parte practica muy interesante.",
          "contras": "No profundiza tema (No se aprende), sus examenes no tienen nada que ver con sus clases Parcial cada 15 dias. clases, disfruta humillando sus alumnos, solo acepta comentarios de las chicas:/",
          "periodo": "2025-1",
          "calificacion": 1.6,
          "dificultad": 4.9
        }
      },
      {
        "nombre": "Erik Petrovish Navarro Barón",
        "slug": "erik-petrovish-navarro-barón",
        "resenas": 3,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Es un profesor que se preocupa por el aprendizaje de sus estudiantes y es bastante comprensivo. Sin embargo, creo que no hubo una clase en la que no me durmiera y siento que es muy poco exigente.",
          "pros": "-Siempre atento a dudas -Se califica lo que se ve en clase -Bastante diciplinado",
          "contras": "-Clases aburridas -A veces se enreda con los problemas -(en lo personal no aprendí mucho)",
          "periodo": "2020-10 (virtual)",
          "calificacion": 3.5,
          "dificultad": 1.5
        }
      }
    ]
  },
  "1000025": {
    "nombre": "Laboratorio Tecnicas Basicas En Quimica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000025",
    "profesores": [
      {
        "nombre": "Fabian Harvey Lopez Vallejo",
        "slug": "fabian-harvey-lopez-vallejo",
        "resenas": 25,
        "calidad": "buena",
        "calificacion": 4.95,
        "notaPromedio": 4.5,
        "resenasOcultas": 24,
        "resena": {
          "texto": "El profesor explica muy bien y realmente le interesa que sus estudiantes aprendan, esta muy atento a las dudas(incluso por correo) y le gusta que sus alumnos participen en la clase. Hace quices o talleres sorpresa que se deben desarrollar en 15 o 30 min, si alguien no estaba cuando hacían la actividad, podía nivelarla preparando un experimento o una exposición relacionadas con los últimos temas vistos en la clase. A lo largo del semestre envía talleres de preparación para los exámenes (super largos) y de allí salen los puntos para los parciales, estos pueden ser entregables o no de acuerdo a…",
          "pros": "- A veces soltaba chistes químicos -Muy puntual -Muy amable (casi como un padre) -Presenta alternativas en la evaluación",
          "contras": null,
          "periodo": "2021-2",
          "calificacion": 5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Maria Jose Martinez Cordon",
        "slug": "maria-jose-martinez-cordon",
        "resenas": 12,
        "calidad": "buena",
        "calificacion": 4.87,
        "notaPromedio": 3.98,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Sabe mucho del tema, enseña deacuerdo a las Carreras que esten viendo el laboratorio, muchas veces uno mismo se confunde con lo que evalua pero no es por ella, es muy justa para evaluar y durante las practicas ayuda demasiado incluso en examenes, enseña a hacer los preinformes e informes, son bastantes lo que ayuda a salvar la nota de los parciales y quices, exige de acuerdo a las capacidades del curso, pero es muy atenta, amable y formal, es muy facil llegar a acuerdos con ella",
          "pros": "Buen trato con los estudiantes",
          "contras": "Ninguno",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jorge Isaac Ali Torres",
        "slug": "jorge-isaac-ali-torres",
        "resenas": 40,
        "calidad": "buena",
        "calificacion": 4.79,
        "notaPromedio": 4.26,
        "resenasOcultas": 39,
        "resena": {
          "texto": "El profe Ali es de los mejores profesores que se puede encontrar en la carrera, es un profesor que ademas de mostrar que sabe mucho se empeña en que los estudiantes reciban ese conocimiento que puede dar, es un completo apasionado por la quimica y tambien intenta inculcar ese amor en los estudiantes, la verdad no se puede decir nada malo de el, sus parciales vienen de lo que explicó, deja problemarios que aunque pueden ser un poco largos tienen el tiempo suficiente para resolverse y ademas si los realiza bien el parcial no va a tener ninguna complicacion. Muy buen profesor",
          "pros": null,
          "contras": null,
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 3.1
        }
      },
      {
        "nombre": "Josue Itsman Clavijo Penagos",
        "slug": "josue-itsman-clavijo-penagos",
        "resenas": 39,
        "calidad": "buena",
        "calificacion": 4.53,
        "notaPromedio": 4.04,
        "resenasOcultas": 38,
        "resena": {
          "texto": "La vd es buen profesor pero solo para la gente nerda y lambona entonces no se deje llevar por las calificaciones q dicen aca KAJAKAJA explica como 20 temas por clase, explica medio dificil,sin profundizar, no hace ejercicios en clase o sea todo mal pero pss cada quien la vd a mi no me gusto👍 pero si eres muy nerdo muy 🤓☝️ meta con el",
          "pros": "resuelve dudas",
          "contras": "el resto",
          "periodo": "2025-2",
          "calificacion": 1.5,
          "dificultad": 4.4
        }
      },
      {
        "nombre": "Manuel Fredy Molina Caballero",
        "slug": "manuel-fredy-molina-caballero",
        "resenas": 26,
        "calidad": "buena",
        "calificacion": 4.3,
        "notaPromedio": 4.42,
        "resenasOcultas": 25,
        "resena": {
          "texto": "Es un profesor el cual quiere que usted aprenda y se desarrolle, no solo en el ambito de la quimica, sino tambien en aspectos que deberian ser cultura general, si lo describo con una sola palabra seria tranquilo, es muy pacifico, amable, hay un monton, encerio, muchas actividades a realizar, lo que hay es trabajo, principalmente quizes (que son casi en todas las clases pero son muy sencillos siempre y cuando haga lo que el dejo de tarea) tres parciales los cuales valen el 50%, y si tienen su cierto nivel de dibicultad, pero el procura que nos vaya lo mejor posible, hasta se le puede hacer…",
          "pros": null,
          "contras": null,
          "periodo": "2024-1",
          "calificacion": 4.7,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Nelson Jair Castellanos Marquez",
        "slug": "nelson-jair-castellanos-marquez",
        "resenas": 45,
        "calidad": "regular",
        "calificacion": 3.85,
        "notaPromedio": 3.52,
        "resenasOcultas": 44,
        "resena": {
          "texto": "Solo les voy a decir que les va cambiar la vida",
          "pros": "Se aprende demasiado y lo prepara muy bien a uno para PAQ",
          "contras": "Exigente",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Gilma Granados Oliveros",
        "slug": "gilma-granados-oliveros",
        "resenas": 32,
        "calidad": "mala",
        "calificacion": 3.13,
        "notaPromedio": 3.78,
        "resenasOcultas": 31,
        "resena": {
          "texto": "Es una buena profesora, alegre y divertida, de verdad de preocupa por que los estudiantes aprendan y mejoren cada día, además da opciones de subir la nota de los parciales con experimentos en pareja o de a 3, o con algo más trivial (una vez nos vio sentados y nos dijo que nos subió la nota del parcial por correr 10 km). Son 3 notas, cada nota es 1 parcial y los quices correspondientes (creo que es 75% parciales y 25% quices). Los parciales no son fáciles, pero no son exageradamente difíciles, suele poner cascaritas como \"cuál es el producto de disociación de tal compuesto\" y resulta que tal…",
          "pros": "Sabe mucho Se preocupa por los estudiantes. Resuelve las dudas que hayan. Sube nota.",
          "contras": "A veces no explica de la mejor manera Es difícil pasar si no estudias bien",
          "periodo": "2025-1",
          "calificacion": 4,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Miguel Angel Montero Paez",
        "slug": "miguel-angel-montero-paez",
        "resenas": 11,
        "calidad": "regular",
        "calificacion": 3.13,
        "notaPromedio": 4.05,
        "resenasOcultas": 10,
        "resena": {
          "texto": "Montero es un personaje. En el laboratorio es tremendamente despreocupado (a veces demasiado, porque uno acaba perdiendo tiempo mientras él se toma el suyo para pasar por cada grupo), y para calificar también es muy relajado. Realmente, no tira a matar. La cosa llega en los seminarios, porque no solo tiene un ojo de águila para identificar los puntos débiles en los estudiantes, sino que además puede ser un poco grosero e intimidante. Igual, no tira duro con la nota, y también le invita las onces al grupo. Actúa como un tipo bravo e inamovible, pero es un amor en el fondo. Ah, y también va a…",
          "pros": "Gana carácter, un poco a la mala. No califica nada duro. Es un amor, y hasta chistoso.",
          "contras": "Puede ser grosero. Intimidante. Un poco desorganizado.",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 3.8
        }
      },
      {
        "nombre": "Nelson Jahir Castellanos Marquez",
        "slug": "nelson-jahir-castellanos-marquez",
        "resenas": 5,
        "calidad": "mala",
        "calificacion": 2.58,
        "notaPromedio": 3.72,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Es un profesor que no enseña nada, y exige el triple. Aunque usted vaya con él y le pregunté, él mismo se enreda en los ejercicios que uno le pregunta. Si usted quiere disfrutar su laboratorio, aprender y tener una buena experiencia, este profesor, no debería ser siquiera una opción para usted. La materia no es difícil, pero, para quienes nunca se han enfrentado a un laboratorio, será bastante complejo. Como persona es humillante, criticón y bastante irritable, no le importa hacerlo sentir mal con cosas que usted no sabe y que él debería enseñar. Para pasarle, demasiado estudio autónomo, mas…",
          "pros": "-Nada, realmente todo lo que aprendí fue gracias a mi propio estudio autónomo.",
          "contras": "-Humillante, irritable -No enseña nada.",
          "periodo": "2022-1",
          "calificacion": 2,
          "dificultad": 4.5
        }
      }
    ]
  },
  "1000028": {
    "nombre": "Principios De Quimica Inorganica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000028",
    "profesores": [
      {
        "nombre": "Kochikpa Yavi Ariman Okio",
        "slug": "kochikpa-yavi-ariman-okio",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.4,
        "notaPromedio": 3.8,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Es buen profesor, explica bien y en los parciales pregunta lo que enseña",
          "pros": "Buen profesor",
          "contras": "Es autoritario y su trato con estudiantes no es el mejor",
          "periodo": "2024-1",
          "calificacion": 4,
          "dificultad": 4
        }
      },
      {
        "nombre": "Orlando Hernandez Fandino",
        "slug": "orlando-hernandez-fandino",
        "resenas": 32,
        "calidad": "regular",
        "calificacion": 3.65,
        "notaPromedio": 3.26,
        "resenasOcultas": 31,
        "resena": {
          "texto": "La gran ventaja que tiene ver con Fandiño es que va a aprender muchísimo de la química inorgánica y le va a agarrar mucho gusto. El profesor tiene mucha experiencia profesional, así que domina los temas perfecto a niveles prácticos, y con la teoría tampoco deja qué desear. Son clases muy amenas y entretenidas, y además de los temas que debe aprender, también aprenderá muchas cositas y datos curiosos de la química, con lo que le va a agarrar mucho más gusto a la materia y a la rama. A veces se confunde en el tablero con los temas, y a veces da lugar a ciertas discusiones académicas que, lejos…",
          "pros": "Aprenderá mucho y le agarrará gusto a la materia. El profesor domina bien los temas y tiene mucha experiencia. Se preocupa por que usted aprenda.",
          "contras": "Los parciales no son fáciles, aunque puedan parecerlo. Siempre revise bien cómo califica, porque suele equivocarse en la calificación o bajarle nota de más (una vez me subió un parcial de 2.8 a 3.6 por eso). Le va a…",
          "periodo": "2025-1",
          "calificacion": 4,
          "dificultad": 3.8
        }
      },
      {
        "nombre": "Rafael Alberto Molina Gallego",
        "slug": "rafael-alberto-molina-gallego",
        "resenas": 17,
        "calidad": "regular",
        "calificacion": 3.64,
        "notaPromedio": 3.55,
        "resenasOcultas": 16,
        "resena": {
          "texto": "Es un buen profesor y se le nota que le gusta mucho lo que hace, también sabe un montón, la dificultad de la clase depende de si el curso le cae bien o no, los parciales son 2 temas, uno de aprenderse las diapositivas (se sabrá cuál es, porque es más historia que cualquier otra cosa) y otro de ejercicios que se pueden resolver con cosas que se encuentran dentro del mismo parcial, unx no se da en cuenta de eso hasta cuando ya va a acabar",
          "pros": "-Deja talleres de repaso -Sabe mucho -Tira suave",
          "contras": "-Odia que la gente salga del salón, aunque sea para el baño, así que no tomes líquidos antes de su clase -Los ejercicios de las diapositivas son muy fáciles y en el parcial no se parece ni en la redacción",
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Ana Esperanza Burgos Castellanos",
        "slug": "ana-esperanza-burgos-castellanos",
        "resenas": 25,
        "calidad": "regular",
        "calificacion": 3.46,
        "notaPromedio": 3.89,
        "resenasOcultas": 24,
        "resena": {
          "texto": "Buena profesora, parciales trabajables y es la mejor opción para ver la materia",
          "pros": "Material de estudio Parciales trabajables",
          "contras": "A veces va muy rápido",
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Alvaro Duarte Ruiz",
        "slug": "alvaro-duarte-ruiz",
        "resenas": 16,
        "calidad": "regular",
        "calificacion": 2.58,
        "notaPromedio": 3.92,
        "resenasOcultas": 15,
        "resena": {
          "texto": "El profe Álvaro es muy buen profesor, se preocupa porque aprendas y te ensena cosas que sirven para tu futuro como profesional, ademas de que el tema del curso es muy hermoso, todo este curso fue una maravilla, tuvimos salidas a otros laboratorios, tareas como maquetas, definitivamente si pueden metan esta optativa, lo único es que si tienes que leer bastante pero se puede.",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2
        }
      }
    ]
  },
  "1000034": {
    "nombre": "Quimica Organica I",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000034",
    "profesores": [
      {
        "nombre": "Paola Andrea Cuervo Prado",
        "slug": "paola-andrea-cuervo-prado",
        "resenas": 27,
        "calidad": "buena",
        "calificacion": 4.56,
        "notaPromedio": 4.03,
        "resenasOcultas": 26,
        "resena": {
          "texto": "Es una excelente profesora, va despacio en las clases, esta abierta a preguntas en todo momento, abre espacios fuera de clases para resolver dudas antes de los parciales",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 4.6
        }
      },
      {
        "nombre": "Ariel Rodolfo Quevedo Pastor",
        "slug": "ariel-rodolfo-quevedo-pastor",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.48,
        "notaPromedio": 4.28,
        "resenasOcultas": 8,
        "resena": {
          "texto": "La verdad no me gustó ver la materia con el, el extremadamente desordenado, empieza la clase super tarde. Es que no puedo decirte que no enseña bien básicamente por que no enseña, tu puedes ir a la clase a anotar los temas que se están viendo y luego llegar a casa a estudiar con un buen libro por tu propia cuenta por que si te quedas con solo lo de la clase estás jodido. Aunque con eso el es muy amable pero se distrae DEMASIADO alguien le habla y se queda ahí hablando y no sigue con la clase, o la termina temprano o no hace xd, los parciales aunque son de \"opción múltiple\" incluye una que se…",
          "pros": "- Regala muchos puntos - Se podría decir que los parciales son dentro de todo fáciles - Es bastante compresivo y amable - Hace muchos history time - Pone un porcentaje de talleres y como es tan perezoso como para…",
          "contras": "- Se distrae demasiadoooooo - Es extremadamente desordenado y no como tal con las notas sino en como lleva los temas como \"explica\" y demás",
          "periodo": "2025-2",
          "calificacion": 3.5,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Ricardo Fierro Medina",
        "slug": "ricardo-fierro-medina",
        "resenas": 28,
        "calidad": "buena",
        "calificacion": 4.33,
        "notaPromedio": 3.69,
        "resenasOcultas": 27,
        "resena": {
          "texto": "La nota dependió principalmente del docente auxiliar, por lo que no se siente que estuviera muy involucrado en el lab. Pasa por los puestos preguntando pero puede llegar a ser muy intimidante por que pregunta para corchar, algo que el llama \"retar su mente\", aunque con el tiempo lo hizo menos. El 55% depende de un proyecto, y hay una sesión donde el profe ve la viabilidad de este, pero esta sesión parece más para ver si el grupo tiene algo o no, más allá de si es viable o no. Es medio insoportable si el profe lo coge entre ojos. Si bien digo esto del profe, creo que la dificultad del…",
          "pros": null,
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 2,
          "dificultad": 4.8
        }
      },
      {
        "nombre": "Cristian Ochoa Puentes",
        "slug": "cristian-ochoa-puentes",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 3.85,
        "notaPromedio": 4.12,
        "resenasOcultas": 12,
        "resena": {
          "texto": "En general es un profe relajado, explica lo que debe y se le entiende, ya que incluso lleva modelos, lo unico es que los dos primeros parciales estuvieron faciles y en los ultimos si estuvieron horrible, les subio bastante la dificultad viendo los parciales pasados, pero en general si es una buena opcion para verla.",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 3.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Cesar Augusto Sierra Avila",
        "slug": "cesar-augusto-sierra-avila",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 3.81,
        "notaPromedio": 3.63,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Un muy buen profesor, comprensivo, enseña bien lo que no queda claro lo repite y trata de que las clases sean mas dinamicas, ademas de que no hala solo dela teoria si no de las aplicaciones de las cosas que enseña, los parciales no son muy complicados, pero cuidado con no ir a clases ya que puede preguntar cosas que haya susurrado de su vida en una clase en los parciales, para tomar la asistencia, requiere tiempo pero no mucho, en general es un muy buen profesor recomendadisimo",
          "pros": "explica muy bien los temas y tiene un buen balanceado entre lo teórico y lo aplicado, resuelve dudas y es bastante comprensivo",
          "contras": "es un poco \"estricto\" con la forma de calificar a veces y puede pegarse de cosas minimas pero en general nada grave",
          "periodo": "2025-2",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Ricaurte Rodriguez Angulo",
        "slug": "ricaurte-rodriguez-angulo",
        "resenas": 23,
        "calidad": "mala",
        "calificacion": 2.67,
        "notaPromedio": 3.25,
        "resenasOcultas": 22,
        "resena": {
          "texto": "El ritmo del profesor es lento, pero busca que entendamos los temas e intentar explicar de la forma mas digerible posible, sabe mucho, pero al ir lento no puede cubrir todos los temas y deja algunos explicados a medias, además, suele ser muy cerrado a otros métodos e incluso refuta bibliografía valida. A veces no se le entiende porque habla bajo (explica como para el). En temas de actitud es paciente, tiene chistes funables pero no es mala persona y busca ayudar a los estudiantes.",
          "pros": "buena gente se discuten los porcentajes en clase explica de la forma mas digerible posible ayuda a pasar",
          "contras": "habla bajo va muy lento únicamente acepta métodos suyos",
          "periodo": "2024-2",
          "calificacion": 4,
          "dificultad": 2
        }
      },
      {
        "nombre": "Barbara De Las Mercedes Moreno Murillo",
        "slug": "barbara-de-las-mercedes-moreno-murillo",
        "resenas": 16,
        "calidad": "mala",
        "calificacion": 1.66,
        "notaPromedio": 2.96,
        "resenasOcultas": 15,
        "resena": {
          "texto": "Es la peor profesora que he tenido en la universidad. Es demasiado desordenada y definitivamente con sus más de 78 años de edad (ella misma nos dijo su edad) no tiene la paciencia ni la dedicación para dictar clase. Se le olvidan las cosas que dice, no tiene ningún respeto por los estudiantes, en vez de enseñar y explicar como es debido prefiere gritar y maltratar a los estudiantes. No está nada pendiente de los estudiantes en el laboratorio y si le haces preguntas te regaña por ser un ignorante. Si te coge entre ojos, mejor cancela la materia ó acepta que te va a tener sufriendo y llorando…",
          "pros": "Ninguno, ya es hora de que se retire esa señora.",
          "contras": "- Pésima docente. - Es déspota, humillante y grosera SIEMPRE. - Malas explicaciones. - No le gustan las preguntas, debes llegar con todo aprendido y no tienes derecho a equivocarte. - No respeta ni un poco a sus…",
          "periodo": "2022-1",
          "calificacion": 1.5,
          "dificultad": 4.7
        }
      }
    ]
  },
  "1000035": {
    "nombre": "Laboratorio De Quimica Organica I",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000035",
    "profesores": [
      {
        "nombre": "Carolina Chegwin Angarita",
        "slug": "carolina-chegwin-angarita",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.74,
        "notaPromedio": 4.24,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Increíble, Muy chevere muy amable siempre dispuesta a aclarar dudas, nada más por decir, no se como será en otras materias, en el laboratorio ninguna queja, aveces se confundía con la profe ivonne o decían cosas contrarias pero nada que chat gpt no ayude a entender mejor",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Luz Mary Salazar Pulido",
        "slug": "luz-mary-salazar-pulido",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.23,
        "notaPromedio": 4.52,
        "resenasOcultas": 8,
        "resena": {
          "texto": "La profe es muy linda y sabe mucho, solo que su edad se nota pero de tenerle paciencia y aprender a escucharla se aprende mucho.",
          "pros": "Es amable y querida, no corcha y se nota que quiere que uno aprenda",
          "contras": "Un poco escuelera",
          "periodo": "2023-2",
          "calificacion": 4.7,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Luis Enrique Cuca Suarez",
        "slug": "luis-enrique-cuca-suarez",
        "resenas": 11,
        "calidad": "buena",
        "calificacion": 4.22,
        "notaPromedio": 4.07,
        "resenasOcultas": 10,
        "resena": {
          "texto": "A mi parecer este semestre el laboratorio con el fue mas llevadero por como lo describían en semestres pasados. Y si todos es a mano y con colores sjjs, prácticamente haces dos cuadernos enteros entre pre informes y tareas, pues en general no es difícil y en si todas las practicas son muy interesantes, la cosa es que para los informes y posters le pongas cada cosa que dice el a veces menciona cosas muy rápido y parece que no tienen importancia pero luego si se lo pones en el informe de dará puntos extra. Pero pues si te consume bastante tiempo",
          "pros": "- No califica tan duro y si te puede llegar a poner 5 - Es amable",
          "contras": "- Aquí lo que mas importa es la cantidad, tu hazle dibujos, pintárselos ponle mil cosas eso hará que te ponga más nota",
          "periodo": "2025-2",
          "calificacion": 4.4,
          "dificultad": 4
        }
      },
      {
        "nombre": "Humberto Mayorga Wandurraga",
        "slug": "humberto-mayorga-wandurraga",
        "resenas": 16,
        "calidad": "regular",
        "calificacion": 3.61,
        "notaPromedio": 4.06,
        "resenasOcultas": 15,
        "resena": {
          "texto": "Excelente científico, demuestra que sabe mucho de los temas que dicta. Divaga mucho cuando uno le pregunta, en serio jsjsjsjs. Por ejemplo una vez estábamos en clase y le pregunté sobre las columnas de fraccionamiento (cómo se hacían y cuánto valían) y terminamos hablando de un antiguo profeso alcohólico que él conocía sjsjsjsjsj. El man literalmente puede hablar por horas. Otro problema es que no se le entiende bien a veces cuando habla, aunque también intenta compensarlo con \"chistes\"",
          "pros": "-Abierto a responder cualquier duda -Con muucho conocimiento",
          "contras": "-Le gusta echar carreta jsjsjsj",
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 2.1
        }
      },
      {
        "nombre": "Ivonne Jeannette Nieto Ramirez",
        "slug": "ivonne-jeannette-nieto-ramirez",
        "resenas": 7,
        "calidad": "regular",
        "calificacion": 3.29,
        "notaPromedio": 3.96,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Me gusto mucho el laboratorio con ella, se aprende bastante, ventaja es que sus informes son a computador y no a mano, es cansona con la argumentacion pero es bastante entendible ya que el laboratorio es mas de observación y analizar lo que ocurre, los calculos salen facil, es muy amable, suele serlo más con las mujeres que con los hombres pero nada grave, siempre atiende bien las preguntas y ya, no califica duro tampoco",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 4.5,
          "dificultad": 2.4
        }
      },
      {
        "nombre": "Monica Constanza Avila Murillo",
        "slug": "monica-constanza-avila-murillo",
        "resenas": 6,
        "calidad": "regular",
        "calificacion": 3.08,
        "notaPromedio": 3.9,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Ella está en el laboratorio en compañía con el profe Cuca, se encarga de calificar los quices y por lo menos en mi semestre califico la primera entrega del cuaderno. En si puede ser algo regañona y te puede llegar a hacer sentir mal :C es bastante malgeniada pero pues al menos no es rajona de hecho si te puede poner 5 en algunas cosas. Pero procuraría preguntarle cosas solo si es 100% necesario a menos que quieras llevarte un regaño.",
          "pros": "- No califica duro",
          "contras": "- Es bastante amargada",
          "periodo": "2025-2",
          "calificacion": 3.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Wilman Antonio Delgado Avila",
        "slug": "wilman-antonio-delgado-avila",
        "resenas": 2,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "El profesor en los primeros temas es excelente, explica bien y hace amena la clase, pero después de pasar a los temas referentes a Soluciones, Cinética y Termodinámica, pierde totalmente el hilo a la hora de explicar. No es un mal profesor, pero no sabe explicar de manera correcta los temas de la clase.",
          "pros": "A veces deja utilizar los apuntes para resolver los parciales, aunque no es algo en lo que se debe apoyar siempre.",
          "contras": null,
          "periodo": "2017-20",
          "calificacion": 3,
          "dificultad": 3.5
        }
      }
    ]
  },
  "1000036": {
    "nombre": "Quimica Organica Ii",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000036",
    "profesores": [
      {
        "nombre": "Ariel Rodolfo Quevedo Pastor",
        "slug": "ariel-rodolfo-quevedo-pastor",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.48,
        "notaPromedio": 4.28,
        "resenasOcultas": 8,
        "resena": {
          "texto": "La verdad no me gustó ver la materia con el, el extremadamente desordenado, empieza la clase super tarde. Es que no puedo decirte que no enseña bien básicamente por que no enseña, tu puedes ir a la clase a anotar los temas que se están viendo y luego llegar a casa a estudiar con un buen libro por tu propia cuenta por que si te quedas con solo lo de la clase estás jodido. Aunque con eso el es muy amable pero se distrae DEMASIADO alguien le habla y se queda ahí hablando y no sigue con la clase, o la termina temprano o no hace xd, los parciales aunque son de \"opción múltiple\" incluye una que se…",
          "pros": "- Regala muchos puntos - Se podría decir que los parciales son dentro de todo fáciles - Es bastante compresivo y amable - Hace muchos history time - Pone un porcentaje de talleres y como es tan perezoso como para…",
          "contras": "- Se distrae demasiadoooooo - Es extremadamente desordenado y no como tal con las notas sino en como lleva los temas como \"explica\" y demás",
          "periodo": "2025-2",
          "calificacion": 3.5,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Leonardo Castellanos Hernandez",
        "slug": "leonardo-castellanos-hernandez",
        "resenas": 27,
        "calidad": "buena",
        "calificacion": 4.44,
        "notaPromedio": 3.75,
        "resenasOcultas": 26,
        "resena": {
          "texto": "este profesor envia talleres algo extensos, pero casi siempre con un buen tiempo para su resolucion, ademas, resuelve preguntas todos los dias de algun tema de la clase anterior, y un dia antes del parcial resuelve preguntas del parcial, y durante el parcial, si ve a los estudiantes muy atascados deja sacar el cuaderno unos 10 min. en general es pesado pero nada imposible.",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 4
        }
      },
      {
        "nombre": "Fabian Orozco Lopez",
        "slug": "fabian-orozco-lopez",
        "resenas": 22,
        "calidad": "buena",
        "calificacion": 4.2,
        "notaPromedio": 3.87,
        "resenasOcultas": 21,
        "resena": {
          "texto": "desordenado, corre mucho con las fechas, va muy rapido y no da tiempo a todos de entender",
          "pros": "intent relacionar el tema con la vida real y la carrera",
          "contras": "corre demasiado en tema",
          "periodo": "2023-2",
          "calificacion": 2,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jaime Alberto Rios Motta",
        "slug": "jaime-alberto-rios-motta",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.02,
        "notaPromedio": 4.08,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Personalmente me fue mal con el, divaga demasiado y hace que la atención se pierda, uno tiene que traer conocimientos previos para poder sacar la materia, dura 4 clases hablando de un tema que no sale en los quices, mientras que en la clase de 1h, explica un tema importante que si va a preguntar, solo saca 3 notas en todo el semestre que corresponden a quizes.",
          "pros": "Hace recuperaciones y sube puntos pq si",
          "contras": "Divaga demasiado y explica mal",
          "periodo": "2026-1",
          "calificacion": 2,
          "dificultad": 3
        }
      },
      {
        "nombre": "Cristian Ochoa Puentes",
        "slug": "cristian-ochoa-puentes",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 3.85,
        "notaPromedio": 4.12,
        "resenasOcultas": 12,
        "resena": {
          "texto": "En general es un profe relajado, explica lo que debe y se le entiende, ya que incluso lleva modelos, lo unico es que los dos primeros parciales estuvieron faciles y en los ultimos si estuvieron horrible, les subio bastante la dificultad viendo los parciales pasados, pero en general si es una buena opcion para verla.",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 3.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Cesar Augusto Sierra Avila",
        "slug": "cesar-augusto-sierra-avila",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 3.81,
        "notaPromedio": 3.63,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Un muy buen profesor, comprensivo, enseña bien lo que no queda claro lo repite y trata de que las clases sean mas dinamicas, ademas de que no hala solo dela teoria si no de las aplicaciones de las cosas que enseña, los parciales no son muy complicados, pero cuidado con no ir a clases ya que puede preguntar cosas que haya susurrado de su vida en una clase en los parciales, para tomar la asistencia, requiere tiempo pero no mucho, en general es un muy buen profesor recomendadisimo",
          "pros": "explica muy bien los temas y tiene un buen balanceado entre lo teórico y lo aplicado, resuelve dudas y es bastante comprensivo",
          "contras": "es un poco \"estricto\" con la forma de calificar a veces y puede pegarse de cosas minimas pero en general nada grave",
          "periodo": "2025-2",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Humberto Mayorga Wandurraga",
        "slug": "humberto-mayorga-wandurraga",
        "resenas": 16,
        "calidad": "regular",
        "calificacion": 3.61,
        "notaPromedio": 4.06,
        "resenasOcultas": 15,
        "resena": {
          "texto": "Excelente científico, demuestra que sabe mucho de los temas que dicta. Divaga mucho cuando uno le pregunta, en serio jsjsjsjs. Por ejemplo una vez estábamos en clase y le pregunté sobre las columnas de fraccionamiento (cómo se hacían y cuánto valían) y terminamos hablando de un antiguo profeso alcohólico que él conocía sjsjsjsjsj. El man literalmente puede hablar por horas. Otro problema es que no se le entiende bien a veces cuando habla, aunque también intenta compensarlo con \"chistes\"",
          "pros": "-Abierto a responder cualquier duda -Con muucho conocimiento",
          "contras": "-Le gusta echar carreta jsjsjsj",
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 2.1
        }
      },
      {
        "nombre": "Augusto Rivera Umaña",
        "slug": "augusto-rivera-umaña",
        "resenas": 23,
        "calidad": "mala",
        "calificacion": 2.32,
        "notaPromedio": 3.35,
        "resenasOcultas": 22,
        "resena": {
          "texto": "El profe es muy estricto con sus reglas. No se puede comer, hablar o siquiera tomar agua en clase sin que se enoje. El método de enseñanza es muy anticuado para una materia tan importante porque solo prioriza la memorización sin brindar herramientas de aprendizaje apropiadas ni material de apoyo porque no manda las diapositivas de clase y ni se le ocurra pensar que puede tomar fotos.",
          "pros": "Es fácil pasar la materia Parciales de a parejas No deja trabajo autónomo",
          "contras": "La clase se siente como una cárcel El método de enseñanza está mal enfocado No se aprende mucho, ni se deja alta",
          "periodo": "2025-1",
          "calificacion": 2.9,
          "dificultad": 2
        }
      }
    ]
  },
  "1000037": {
    "nombre": "Fisicoquimica I",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000037",
    "profesores": [
      {
        "nombre": "Jose Leopoldo Rojas Araque",
        "slug": "jose-leopoldo-rojas-araque",
        "resenas": 23,
        "calidad": "regular",
        "calificacion": 4.03,
        "notaPromedio": 4.09,
        "resenasOcultas": 22,
        "resena": {
          "texto": "Excelente profe, explica muy bien y deja talleres de repaso que sirven para el parcial. Sus parciales y como califica son justos. A veces puede ser un gruñón y molesta mucho con inasistencias o llegadas tarde, pero en general es buen profe y si o si va a terminar aprendiendo",
          "pros": "Explica bien y es sencillo entenderle. Hay varias notas de ayuda. Sus diapositivas son lindas. Es muy organizado.",
          "contras": "nada",
          "periodo": "2025-2",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Gilmer Nicolas Hernandez Guarin",
        "slug": "gilmer-nicolas-hernandez-guarin",
        "resenas": 23,
        "calidad": "regular",
        "calificacion": 3.42,
        "notaPromedio": 3.97,
        "resenasOcultas": 22,
        "resena": {
          "texto": "Es un excelente docente, se preocupa porque sus estudiantes aprendan y por eso tienen muy buena pedagogía. Realiza tres parciales y un poster, el primero de estos es el más fácil. Algunas personas se refieren de el de mala manera pero en mi experiencia fue una clase excelente, a veces cuenta experiencias personales (es salado). Además, pasar es muy fáci.",
          "pros": "- Excelente persona -Excelente pedagogía -Los temas son interesantes -Parciales de acuerdo a lo visto en clase",
          "contras": "- Tiene problemas de audición, por lo que no se puede hacer ruido y se debe ser paciente -Es muy exigente con la asistencia en clase",
          "periodo": "2025-1",
          "calificacion": 4.7,
          "dificultad": 2
        }
      },
      {
        "nombre": "Liliana Giraldo Gutierrez",
        "slug": "liliana-giraldo-gutierrez",
        "resenas": 20,
        "calidad": "regular",
        "calificacion": 3.34,
        "notaPromedio": 3.65,
        "resenasOcultas": 19,
        "resena": {
          "texto": "Mi mujer, ay yo la amo mucho, es como tener una abuelita, aunq si ensena mal ya que solo muestra un monton de demostraciones y cosas de laboratorio, tambien es facil pasarla por sus porcentajes, pues no hay muchas opciones yo la verdad si la recomiendo, con estudio autonomo se logra, ademas si ves tambien el lab con ella te tiene en cuenta jajaja",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Miguel Angel Montero Paez",
        "slug": "miguel-angel-montero-paez",
        "resenas": 11,
        "calidad": "regular",
        "calificacion": 3.13,
        "notaPromedio": 4.05,
        "resenasOcultas": 10,
        "resena": {
          "texto": "Montero es un personaje. En el laboratorio es tremendamente despreocupado (a veces demasiado, porque uno acaba perdiendo tiempo mientras él se toma el suyo para pasar por cada grupo), y para calificar también es muy relajado. Realmente, no tira a matar. La cosa llega en los seminarios, porque no solo tiene un ojo de águila para identificar los puntos débiles en los estudiantes, sino que además puede ser un poco grosero e intimidante. Igual, no tira duro con la nota, y también le invita las onces al grupo. Actúa como un tipo bravo e inamovible, pero es un amor en el fondo. Ah, y también va a…",
          "pros": "Gana carácter, un poco a la mala. No califica nada duro. Es un amor, y hasta chistoso.",
          "contras": "Puede ser grosero. Intimidante. Un poco desorganizado.",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 3.8
        }
      },
      {
        "nombre": "Carmen Maria Romero Isaza",
        "slug": "carmen-maria-romero-isaza",
        "resenas": 3,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Es una profesora que sabe mucho del tema, pero es pésima a la hora de transmitir los conocimientos, solo pasa diapositivas. Los parciales los saca de los talleres que deja.",
          "pros": "-Parciales fáciles -Conocimiento del tema",
          "contras": "-mala docente",
          "periodo": "2019-10",
          "calificacion": 2,
          "dificultad": 3
        }
      }
    ]
  },
  "1000038": {
    "nombre": "Fisicoquimica Ii",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000038",
    "profesores": [
      {
        "nombre": "Sonia Moreno Guaqueta",
        "slug": "sonia-moreno-guaqueta",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.74,
        "notaPromedio": 3.81,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Muy buena profesora que se esmera en explicar. Tuve una mala experiencia con fisicoquímica I pero el cambio con ella fue total. En general siempre participe en clase cuando ella pida resolver ejercicios y durante las exposiciones ya que esto le da puntos extra. No se deje colgar con los ejercicios ya que estos son MUY similares a los que aparecen en los parciales. Ella da un seminario que vale el 15% (lo demás son 3 parciales) y en las primeras semanas pide un escrito. El problema es que el tema del seminario lo verá mucho después de entregar el escrito entonces lo mejor es que usted le…",
          "pros": "-Abierta a preguntas -Califica rápido los parciales -Da puntos extra por participar en ejercicios de clase y seminarios",
          "contras": "-Organiza los grupos de seminario aleatoriamente -Pide un escrito del seminario cuando el tema no se ha visto, incluso puede que el tema de su seminario se vea en la semana 15 o 16 de clase.",
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Marco Fidel Suarez Herrera",
        "slug": "marco-fidel-suarez-herrera",
        "resenas": 30,
        "calidad": "regular",
        "calificacion": 3.58,
        "notaPromedio": 3.46,
        "resenasOcultas": 29,
        "resena": {
          "texto": "El profesor sabe mucho, y habla de varios temas que muchos profesores no hablarían en primer semestre. Se nota que le apasiona enseñar y te puede repetir el tema las veces que quieras, también es chévere que ponga ejercicios prácticos como experimentos ( son bien largos). Sin embargo es muy duro con las calificaciones (de los parciales), y los temas que maneja son a veces muy complicados, los parciales son difíciles y representan el 60% de la materia. Sé que hubo gente que la perdió con muy bajita nota, pero también hay personas que llevaron un promedio súper alto. Al profesor le gusta…",
          "pros": "Se aprende mucho y se pone en práctica los conocimientos. Es amable y le gusta responder a las preguntas. No tiene preferencias con nadie.",
          "contras": "Requiere de mucho estudio autónomo y no es fácil. NUNCA aproxima nota",
          "periodo": "2025-2",
          "calificacion": 3,
          "dificultad": 4.2
        }
      }
    ]
  },
  "1000040": {
    "nombre": "Introduccion A La Ciencia De Materiales",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000040",
    "profesores": [
      {
        "nombre": "Gloria Ivonne Cubíllos González",
        "slug": "gloria-ivonne-cubíllos-gonzález",
        "resenas": 36,
        "calidad": "buena",
        "calificacion": 4.81,
        "notaPromedio": 4.24,
        "resenasOcultas": 35,
        "resena": {
          "texto": "La mejor profesora que he tenido. Explica muy bien, da oportunidades para subir notas y los parciales son muy trabajables.",
          "pros": "super amable tranquila explica bien es muy atenta organizada",
          "contras": "NADA",
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Sonia Moreno Guaqueta",
        "slug": "sonia-moreno-guaqueta",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.74,
        "notaPromedio": 3.81,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Muy buena profesora que se esmera en explicar. Tuve una mala experiencia con fisicoquímica I pero el cambio con ella fue total. En general siempre participe en clase cuando ella pida resolver ejercicios y durante las exposiciones ya que esto le da puntos extra. No se deje colgar con los ejercicios ya que estos son MUY similares a los que aparecen en los parciales. Ella da un seminario que vale el 15% (lo demás son 3 parciales) y en las primeras semanas pide un escrito. El problema es que el tema del seminario lo verá mucho después de entregar el escrito entonces lo mejor es que usted le…",
          "pros": "-Abierta a preguntas -Califica rápido los parciales -Da puntos extra por participar en ejercicios de clase y seminarios",
          "contras": "-Organiza los grupos de seminario aleatoriamente -Pide un escrito del seminario cuando el tema no se ha visto, incluso puede que el tema de su seminario se vea en la semana 15 o 16 de clase.",
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Josue Itsman Clavijo Penagos",
        "slug": "josue-itsman-clavijo-penagos",
        "resenas": 39,
        "calidad": "buena",
        "calificacion": 4.53,
        "notaPromedio": 4.04,
        "resenasOcultas": 38,
        "resena": {
          "texto": "La vd es buen profesor pero solo para la gente nerda y lambona entonces no se deje llevar por las calificaciones q dicen aca KAJAKAJA explica como 20 temas por clase, explica medio dificil,sin profundizar, no hace ejercicios en clase o sea todo mal pero pss cada quien la vd a mi no me gusto👍 pero si eres muy nerdo muy 🤓☝️ meta con el",
          "pros": "resuelve dudas",
          "contras": "el resto",
          "periodo": "2025-2",
          "calificacion": 1.5,
          "dificultad": 4.4
        }
      },
      {
        "nombre": "Jose Gregorio Carriazo Baños",
        "slug": "jose-gregorio-carriazo-baños",
        "resenas": 19,
        "calidad": "buena",
        "calificacion": 3.89,
        "notaPromedio": 3.64,
        "resenasOcultas": 18,
        "resena": {
          "texto": "Verdaderamente es de esos profes que lo terminan sorprendiendo a uno por lo increíblemente bien que pueden llegar a terminar las cosas. Aunque en el inicio fue súper difícil y estresante, al final es súper generoso y dadivoso con la nota y sus clases, para las diapositivas que tiene, siento que son apenas para lo que uno necesita en la clase, y puede que aunque el primer corte sea difícil, con tal de que uno le participe y esté atento en clase todo puede salir fácilmente bien.",
          "pros": "Ayuda un montón Se tira severas anécdotas, súper divertidas Hicimos compartir, y se la rifó con unos buñuelotes Parchado, y aparte costeño El segundo parcial de a parejas, y el tercero solo teoría",
          "contras": "Ta potente Solo 3 parciales",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 4
        }
      },
      {
        "nombre": "Nelson Jair Castellanos Marquez",
        "slug": "nelson-jair-castellanos-marquez",
        "resenas": 45,
        "calidad": "regular",
        "calificacion": 3.85,
        "notaPromedio": 3.52,
        "resenasOcultas": 44,
        "resena": {
          "texto": "Solo les voy a decir que les va cambiar la vida",
          "pros": "Se aprende demasiado y lo prepara muy bien a uno para PAQ",
          "contras": "Exigente",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Gilmer Nicolas Hernandez Guarin",
        "slug": "gilmer-nicolas-hernandez-guarin",
        "resenas": 23,
        "calidad": "regular",
        "calificacion": 3.42,
        "notaPromedio": 3.97,
        "resenasOcultas": 22,
        "resena": {
          "texto": "Es un excelente docente, se preocupa porque sus estudiantes aprendan y por eso tienen muy buena pedagogía. Realiza tres parciales y un poster, el primero de estos es el más fácil. Algunas personas se refieren de el de mala manera pero en mi experiencia fue una clase excelente, a veces cuenta experiencias personales (es salado). Además, pasar es muy fáci.",
          "pros": "- Excelente persona -Excelente pedagogía -Los temas son interesantes -Parciales de acuerdo a lo visto en clase",
          "contras": "- Tiene problemas de audición, por lo que no se puede hacer ruido y se debe ser paciente -Es muy exigente con la asistencia en clase",
          "periodo": "2025-1",
          "calificacion": 4.7,
          "dificultad": 2
        }
      },
      {
        "nombre": "Alvaro Duarte Ruiz",
        "slug": "alvaro-duarte-ruiz",
        "resenas": 16,
        "calidad": "regular",
        "calificacion": 2.58,
        "notaPromedio": 3.92,
        "resenasOcultas": 15,
        "resena": {
          "texto": "El profe Álvaro es muy buen profesor, se preocupa porque aprendas y te ensena cosas que sirven para tu futuro como profesional, ademas de que el tema del curso es muy hermoso, todo este curso fue una maravilla, tuvimos salidas a otros laboratorios, tareas como maquetas, definitivamente si pueden metan esta optativa, lo único es que si tienes que leer bastante pero se puede.",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Edgar Delgado Mejia",
        "slug": "edgar-delgado-mejia",
        "resenas": 26,
        "calidad": "mala",
        "calificacion": 2.24,
        "notaPromedio": 3.23,
        "resenasOcultas": 25,
        "resena": {
          "texto": "Creo que, si usted estudia, lee el material y los videos que él le manda puede pasar sin mayor inconveniente, le recomiendo participar en clase y tomar la materia con cierta seriedad (aunque no considero que quite demasiado tiempo) Este profe motivo mi curiosidad en una ciencia en la que ya me había rendido desde el colegio. Un punto negativo es que suele divagar bastante, algo que eventualmente causa que se apresure demasiado al dictar los temas. Dicho todo esto, cuando hice el curso pasamos 6 de todo mi grupo, del otro grupo pasaron solo 4.",
          "pros": "Incentiva su curiosidad por el mundo de la Química",
          "contras": "Por alguna razón poca gente le pasa. Divaga bastante",
          "periodo": "2024-2",
          "calificacion": 4,
          "dificultad": 3
        }
      }
    ]
  },
  "2015162": {
    "nombre": "Calculo Vectorial",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015162",
    "profesores": [
      {
        "nombre": "Leonardo Rendon Arbelaez",
        "slug": "leonardo-rendon-arbelaez",
        "resenas": 39,
        "calidad": "buena",
        "calificacion": 4.64,
        "notaPromedio": 3.83,
        "resenasOcultas": 38,
        "resena": {
          "texto": "Rendon es buen profesor. Es muy formal y puede intimidar un poco, pero se preocupa realmente porque todos entiendan los conceptos, y no solo aprenderse las formulas de memoria. Usualmente son 3 parciales y un supletorio para eliminar la peor nota de los parciales, la otra nota es de quices, es un quiz cada jueves, puede parecer muchos, usualmente el quita las peores 2 o 3 notas de los quices, pero si sirven resto para mantener los temas recientes. Los parciales pueden llegar a ser pesaditos, algunos temas son difíciles, pero se puede lograr dejar alta. En general, no es mal profesor, hay…",
          "pros": "Puntual",
          "contras": "La letra Supletorio una gono No perdona errores chiquitos",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 4
        }
      },
      {
        "nombre": "Herbert Alonso Dueñas Ruiz",
        "slug": "herbert-alonso-dueñas-ruiz",
        "resenas": 25,
        "calidad": "buena",
        "calificacion": 4.48,
        "notaPromedio": 3.85,
        "resenasOcultas": 24,
        "resena": {
          "texto": "Herbert es un profesor muy bueno para cálculo vectorial, sus parciales fueron muy trabajables en general , es muy amable y se deja hablar. En este semestre había demasiada gente viendo el curso con el por lo mismo el hizo pocos quices (4) y además ayudo mucho siendo que quito las 2 peores notas un quiz fue virtual y otros detalles , esto a causa de que perdía mucho tiempo entregando quices y parciales. En si no hay mucho que decir simplemente fue muy god y no hay contras con Herbert",
          "pros": "Amable Comprensivo parciales trabajables",
          "contras": "algo del material tenía temas que no habíamos visto pero pues no es un contra en si",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2.9
        }
      },
      {
        "nombre": "German Preciado Lopez",
        "slug": "german-preciado-lopez",
        "resenas": 37,
        "calidad": "regular",
        "calificacion": 3.82,
        "notaPromedio": 3.83,
        "resenasOcultas": 36,
        "resena": {
          "texto": "Hasta el momento es la peor clase que he tomado, da clases como si estuviera en 1700 hace mal los procedimientos y los corrije casi media clase despues, copia y pega ejercicios del algebra de grossman para dar la clase, puedo hacer lo mismo desde mi casa y en los parciales pone ejercicios que nada que ver, si uno llega al mismo resultado pero de otra manera no vale los puntos, no da bonos no hay talleres solo 4 parciales",
          "pros": "se pueden otros profesores",
          "contras": "la clase en si",
          "periodo": "2025-2",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Freddy Rolando Hernandez Romero",
        "slug": "freddy-rolando-hernandez-romero",
        "resenas": 37,
        "calidad": "regular",
        "calificacion": 3.8,
        "notaPromedio": 3.73,
        "resenasOcultas": 36,
        "resena": {
          "texto": "Si es tu primera viendo integral por nada del mundo metas con el. Hay que ser claros, el profesor tiene demasiado conocimiento del tema, pero eso no hace que necesariamente sepa explicarlo, las clases suelen ser el resolviendo ejercicios del stewart y ya¿ tiene sentido? Hasta cierto punto es verdad solo resolviendo ejercicios vas a agarrar la tecnica pero aun asi la forma llega a ser muy pesada pues el tiende a saltarse muchos pasos porque para el son obvios, puede explicar 1 tema en 5 minutos y aun asi meterlo en el parcial. En resumen, la materia es pasable ? Si pero la pregunta es con que…",
          "pros": "Break de 5 minutos Mueve la fecha de los parciales de ser necesario ñ",
          "contras": "Temas en 5 minutos Parciales cuchillas Se salta pasos",
          "periodo": "2025-1",
          "calificacion": 3,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Juan Carlos Hernandez Rincon",
        "slug": "juan-carlos-hernandez-rincon",
        "resenas": 13,
        "calidad": "regular",
        "calificacion": 3.76,
        "notaPromedio": 3.6,
        "resenasOcultas": 12,
        "resena": {
          "texto": "Este profesor definitivamente no es para mi, es muy apegado a la teoría y poco a la practica; si usted le gusta el por que de la matemática y retos complejos, este profe es para usted, si no, mejor ni lo piense, va a querer cancelar a la primera semana",
          "pros": "El profesor es duro en el tema Le responde las preguntas Es relativamente accesible y negociador",
          "contras": "Su pedagogía no es para todos Demasiada teoría Se puede quedar media hora en una demostración que no tiene utilidad Tira muy duro en el parcial",
          "periodo": "2025-2",
          "calificacion": 3.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Ricardo Ariel Pastran Ramirez",
        "slug": "ricardo-ariel-pastran-ramirez",
        "resenas": 41,
        "calidad": "regular",
        "calificacion": 3.68,
        "notaPromedio": 3.31,
        "resenasOcultas": 40,
        "resena": {
          "texto": "Creo que no debería dictar matematicas básicas, es buen profe, pero en cosas tan de \"principiantes\" como el menciona reiteradamente en clase, se vuelve tedioso su forma de hablar, egocéntrico a más no poder, pero en sus explicaciones es bastante bueno, el monitor ayudo mucho ese semestre y facilito el estudio para los parciales, los cuales no son de dificultad muy elevada.",
          "pros": "Buenas explicaciones Parciales sencillos Se puede recuperar nota",
          "contras": "Arrogante",
          "periodo": "2024-1",
          "calificacion": 4,
          "dificultad": 4.4
        }
      },
      {
        "nombre": "Eduardo Cardenas Gomez",
        "slug": "eduardo-cardenas-gomez",
        "resenas": 27,
        "calidad": "regular",
        "calificacion": 3.63,
        "notaPromedio": 3.95,
        "resenasOcultas": 26,
        "resena": {
          "texto": "Es un profesor muy amable, tiene mas pedagogia que korgi, siempre esta atento a resolver cualquier duda, explica muy bien, se basa bastante en el libro de korgi, no es tan exigente calificando Existe la sospecha de que un semestre (el primero) tira a matar y el siguiente (el segundo del año) califica suave, hasta el momento ha respetado ese patron, ud vera v:",
          "pros": "Es amable Explica bien Si en un parcial hay varias repsuestas validas, el vale ambas",
          "contras": "No se v:",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Edward Samuel Becerra Rojas",
        "slug": "edward-samuel-becerra-rojas",
        "resenas": 53,
        "calidad": "regular",
        "calificacion": 3.3,
        "notaPromedio": 3.17,
        "resenasOcultas": 52,
        "resena": {
          "texto": "Este personaje, y otros similares, fueron responsables de que muchas personas brillantes de mi generación no tuvieran la oportunidad de graduarse, debido a un sistema de evaluación que filtra más de lo que educa y hablo de años, al parecer no ha cambiado la situación en ese sitio La educación no consiste únicamente en tener el hacha en la mano, sino en actuar con verdadera responsabilidad social y formar personas con algo de compasión frente a contextos muy distintos Cuando las decisiones se toman desde el ego académico, ignorando que detrás de cada estudiante hay familias, sueños y metas…",
          "pros": null,
          "contras": "La nota mínima que me pide ponerle es 1.5, pero que yo recuerde muchos compañeros salían de los parciales con 0 y la nota más alta del curso era 1.2 En su momento de estudiante uno aceptaba eso con ingenuidad; hoy, como…",
          "periodo": "2025-2",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Diana Marcela Serrano Rodriguez",
        "slug": "diana-marcela-serrano-rodriguez",
        "resenas": 95,
        "calidad": "regular",
        "calificacion": 3.28,
        "notaPromedio": 3.14,
        "resenasOcultas": 94,
        "resena": {
          "texto": "No voy a decir cosas que no son por que con la profe, uno aprende, eso sí vaya preparando vaselina, por que esos parciales si son difíciles, viéndolos bien ahora que estoy avanzando me sirvió mucho ver ejercicios tan demoníacos, pero el precio a pagar fue mi papi, la pasé pero más raspado que una olla de arroz, Me hubiera gustado que hiciera hoja de ejercicios o algo para estudiar, por que con el Stewart no fue suficiente",
          "pros": "- A mi parecer lo único bueno es la profe, pues la razon por las que pase fue el último parcial que los dividió en 3, y tocaba sumar 9, algo así y aún así fue difícil pasar, pero por lo menos se apiadó de nosotros 🥲…",
          "contras": "Parciales Super Hiper Mega Demoniacos",
          "periodo": "2024-2",
          "calificacion": 3.3,
          "dificultad": 4.5
        }
      }
    ]
  },
  "2015270": {
    "nombre": "Fundamentos De Economia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015270",
    "profesores": [
      {
        "nombre": "Jonathan Daniel Gomez Zapata",
        "slug": "jonathan-daniel-gomez-zapata",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.82,
        "notaPromedio": 4.58,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Desde aquí, Profe, si estas leyendo esto, me enamoraste mas de mi carrera, Jonathan es, sin dudas, uno de los profesores mas comprometidos, amables, pedagógicos e increíbles de la Facu, no solo nos enseño sobre economía, nos enseño sobre etiqueta, habilidades blandas, proyección de voz y muchas cosas mas con el ejercicio de las exposiciones, si bien a mucha gente le molesta que cuando suene un celular haga quiz, es mas una ventaja sobre todo si usted pone atención, porque es un cinco fácil y es para que evitemos dejar de prestar atención, de parte de Jonathan se nota que sabe lo que esta…",
          "pros": "Amable Sabe demasiado y enseña muchas cosas Su monitora es increible La clase es muy divertida Generalmente si el grupo está dispuesto, es aún mejor",
          "contras": "Ninguno",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Andrés Enrique Ballesteros Moyano",
        "slug": "andrés-enrique-ballesteros-moyano",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.2,
        "notaPromedio": 3.97,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Leyenda!!!",
          "pros": "Explica super bien todas las temáticas Tiene dominio de tema Es amable y tiene una actitud fabulosa Con las lecturas y los talleres quedan comprendidos todos los temas, dejándose alta",
          "contras": "Tiene una voz demasiado suave, por lo que es muy fácil distraerse",
          "periodo": "2018-1",
          "calificacion": 4.7,
          "dificultad": 2
        }
      },
      {
        "nombre": "Hernando Bayona Rodriguez",
        "slug": "hernando-bayona-rodriguez",
        "resenas": 3,
        "calidad": "regular",
        "calificacion": 4.2,
        "notaPromedio": 4.37,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Es una muy buena persona, sus clases se basan el 90% en el libro de Mankiw, lo que las torna aburridas y monótonas porque repite lo mismo del libro en presentaciones, hace que el curso se conozca y participe",
          "pros": "No hace parciales escritos Dinámico Buena gente Acerca los temas a la vida cotidiana Su monitor es muy querido, atento con la clase y da bonos :)",
          "contras": "Matemático que le faltan nociones y conocer la filosofía de la economía Demorado en calificar Solo enseña Mankiw Sus criterios de calificación son aveces poco claros Monótono con su forma de enseñar repitiendo lo mismo…",
          "periodo": "2024-1",
          "calificacion": 3.5,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Camilo Andres Guevara Castañeda",
        "slug": "camilo-andres-guevara-castañeda",
        "resenas": 9,
        "calidad": "regular",
        "calificacion": 3.77,
        "notaPromedio": 4.16,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Sabe mucho de muchas cosas, pero no es muy bueno enseñando, las clases tienden a ser aburridas, divaga a veces en exceso, es como que se ensimisma y olvida que está dictando clase a otras personas, ni siquiera ve cuando intentan hacer preguntas. Se deja alta fácil porque no es cuchilla, excepto en el video final que vale 25%",
          "pros": "Se deja alta Se aprende si presta muchísima atención Es una persona muy chimba y amable",
          "contras": "Divaga mucho Clases aburridas",
          "periodo": "2021-10 (virtual)",
          "calificacion": 3.5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Oscar Arturo Benavides Gonzalez",
        "slug": "oscar-arturo-benavides-gonzalez",
        "resenas": 38,
        "calidad": "regular",
        "calificacion": 3.49,
        "notaPromedio": 4.27,
        "resenasOcultas": 37,
        "resena": {
          "texto": "Benavides es un chiste. Realmente lo considero el peor profesor que tuve hasta ahora en toda la carrera. Su clase de Macro III consiste en ir a dormir mientras él pasa diapositivas ininteligibles sobre modelos de crecimiento. La materia se pasa automáticamente entregando los talleres. No aprendí absolutamente nada y se nota que a él no le interesa que la gente aprenda. Los parciales son forms que él envía 5mins antes de la clase y son, como podrán anticipar, con acceso a internet. Si no le interesa la macro y necesita nota o sacrificar alguna materia para enfocarse en otra, Benavides es su…",
          "pros": "- Se deja alta sin hacer nada - Puede asistir únicamente a los parciales y aun así pasar",
          "contras": "- Se desaprende - Es frustrante ver profesores tan mediocres en la FCE - Uno se ríe por no llorar",
          "periodo": "2025-2",
          "calificacion": 2.5,
          "dificultad": 1.6
        }
      },
      {
        "nombre": "Raul Alberto Chamorro Narvaez",
        "slug": "raul-alberto-chamorro-narvaez",
        "resenas": 33,
        "calidad": "mala",
        "calificacion": 2.74,
        "notaPromedio": 3.57,
        "resenasOcultas": 32,
        "resena": {
          "texto": "Pedagogo de pedagogos. Sabe enseñar su materia como no he visto a nadie enseñarla. Las evaluaciones que aplica son excelente método de estudio y ayudan a guardarse los conocimientos requerido de la materia. Explica, enseña, responde dudas como ningún otro profesor, excelente. Sinceramente, espero que siga dictando clase porque tiene la vocación para ello.",
          "pros": null,
          "contras": null,
          "periodo": "2026-2",
          "calificacion": 2,
          "dificultad": 2
        }
      },
      {
        "nombre": "Jesus Alberto Villamil Martha",
        "slug": "jesus-alberto-villamil-martha",
        "resenas": 13,
        "calidad": "mala",
        "calificacion": 2.53,
        "notaPromedio": 4.02,
        "resenasOcultas": 12,
        "resena": {
          "texto": "La clase es parchada y puede dejarse alta si se trabaja. (Califica asistencia)",
          "pros": "- Pude pasarse alta - Se aprende sobre temas económicos",
          "contras": "- Puede llegar a ser carretudo - Necesita un buen equipo de trabajo para los entregables - Muchas veces no es claro con lo que pide con los entregables.",
          "periodo": "2024-2",
          "calificacion": 3.8,
          "dificultad": 2.8
        }
      },
      {
        "nombre": "Camilo Ernesto Gomez Cangrejo",
        "slug": "camilo-ernesto-gomez-cangrejo",
        "resenas": 5,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 4,
        "resena": {
          "texto": "clases muy dinamicas, talleres para dejar en 5. Parciales trabajables si se estudia.",
          "pros": "Se preocupa por que la gente entienda ayuda mucho en los talleres se aprende de verdad clases con juegos y dinamicas cheveres",
          "contras": "Tono de voz muy suave entonces toca hacerse adelante y con un poco de tinto",
          "periodo": "2019-10",
          "calificacion": 4,
          "dificultad": 1.7
        }
      },
      {
        "nombre": "David Cano Ortiz",
        "slug": "david-cano-ortiz",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2015281": {
    "nombre": "Trabajo De Grado",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015281",
    "profesores": [
      {
        "nombre": "Coralia Osorio Roa",
        "slug": "coralia-osorio-roa",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 4.67,
        "notaPromedio": 4.34,
        "resenasOcultas": 7,
        "resena": {
          "texto": "La profe Coralia es una profe excelente, muy amable y se preocupa por sus estudiantes, es exigente pero no busca rajas a nadie al contrario da muchas ayudas y perfectamente la nota final puede quedar en 50 estudiando y realizando talleres y ayudas que ella ponga, es muy buena profe ojalá existieran más como ella",
          "pros": "Todo",
          "contras": "Ninguno",
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Leonardo Castellanos Hernandez",
        "slug": "leonardo-castellanos-hernandez",
        "resenas": 27,
        "calidad": "buena",
        "calificacion": 4.44,
        "notaPromedio": 3.75,
        "resenasOcultas": 26,
        "resena": {
          "texto": "este profesor envia talleres algo extensos, pero casi siempre con un buen tiempo para su resolucion, ademas, resuelve preguntas todos los dias de algun tema de la clase anterior, y un dia antes del parcial resuelve preguntas del parcial, y durante el parcial, si ve a los estudiantes muy atascados deja sacar el cuaderno unos 10 min. en general es pesado pero nada imposible.",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 4
        }
      },
      {
        "nombre": "Fabian Orozco Lopez",
        "slug": "fabian-orozco-lopez",
        "resenas": 22,
        "calidad": "buena",
        "calificacion": 4.2,
        "notaPromedio": 3.87,
        "resenasOcultas": 21,
        "resena": {
          "texto": "desordenado, corre mucho con las fechas, va muy rapido y no da tiempo a todos de entender",
          "pros": "intent relacionar el tema con la vida real y la carrera",
          "contras": "corre demasiado en tema",
          "periodo": "2023-2",
          "calificacion": 2,
          "dificultad": 3
        }
      },
      {
        "nombre": "Orlando Hernandez Fandino",
        "slug": "orlando-hernandez-fandino",
        "resenas": 32,
        "calidad": "regular",
        "calificacion": 3.65,
        "notaPromedio": 3.26,
        "resenasOcultas": 31,
        "resena": {
          "texto": "La gran ventaja que tiene ver con Fandiño es que va a aprender muchísimo de la química inorgánica y le va a agarrar mucho gusto. El profesor tiene mucha experiencia profesional, así que domina los temas perfecto a niveles prácticos, y con la teoría tampoco deja qué desear. Son clases muy amenas y entretenidas, y además de los temas que debe aprender, también aprenderá muchas cositas y datos curiosos de la química, con lo que le va a agarrar mucho más gusto a la materia y a la rama. A veces se confunde en el tablero con los temas, y a veces da lugar a ciertas discusiones académicas que, lejos…",
          "pros": "Aprenderá mucho y le agarrará gusto a la materia. El profesor domina bien los temas y tiene mucha experiencia. Se preocupa por que usted aprenda.",
          "contras": "Los parciales no son fáciles, aunque puedan parecerlo. Siempre revise bien cómo califica, porque suele equivocarse en la calificación o bajarle nota de más (una vez me subió un parcial de 2.8 a 3.6 por eso). Le va a…",
          "periodo": "2025-1",
          "calificacion": 4,
          "dificultad": 3.8
        }
      },
      {
        "nombre": "Carlos Alexander Trujillo",
        "slug": "carlos-alexander-trujillo",
        "resenas": 49,
        "calidad": "regular",
        "calificacion": 3.4,
        "notaPromedio": 3.37,
        "resenasOcultas": 48,
        "resena": {
          "texto": "El profesor explica bien, manda buenos apuntes entorno a la química y muchas veces la relación histórica de ella con otros campos del saber. No es un profesor apto para gente sensible a los comentarios políticos, económicos o sociales. Básicamente no es apto para estudiantes mamertos jajaja Me hizo querer aprender más de química. A pesar de que perdí el último parcial por puro descuido.",
          "pros": "Imparcial Permite apuntes en el examen",
          "contras": "Es muy cascarero con las respuestas, aunque técnicamente tenga razón, duele no sacar 5 por cositas. Malo tener inasistencias, se puede perder demasiada información.",
          "periodo": "2025-2",
          "calificacion": 4.9,
          "dificultad": 4
        }
      },
      {
        "nombre": "Ivonne Jeannette Nieto Ramirez",
        "slug": "ivonne-jeannette-nieto-ramirez",
        "resenas": 7,
        "calidad": "regular",
        "calificacion": 3.29,
        "notaPromedio": 3.96,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Me gusto mucho el laboratorio con ella, se aprende bastante, ventaja es que sus informes son a computador y no a mano, es cansona con la argumentacion pero es bastante entendible ya que el laboratorio es mas de observación y analizar lo que ocurre, los calculos salen facil, es muy amable, suele serlo más con las mujeres que con los hombres pero nada grave, siempre atiende bien las preguntas y ya, no califica duro tampoco",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 4.5,
          "dificultad": 2.4
        }
      },
      {
        "nombre": "Norma Constanza Lopez Ortiz",
        "slug": "norma-constanza-lopez-ortiz",
        "resenas": 15,
        "calidad": "regular",
        "calificacion": 3.15,
        "notaPromedio": 3.09,
        "resenasOcultas": 14,
        "resena": {
          "texto": "Intenta adaptarse y sabe de lo que habla pero se enreda demasiado al explicar, salta demasiado entre temas lo que causa más confusión, ella asume que todos tenemos buenas bases de química porque \"Ustedes pasaron el examen de la universidad nacional entonces ya saben esto\", cuando claramente esto no es cierto, aunque hayamos entrado no quiere decir que las bases que tengamos sean buenas además teniendo en cuenta el sistema educativo colombiano, cuando se le pedía que por favor explicara decía \"Esto yo no lo explico porque esto ya no es de mi materia y si definitivamente no entiende entonces…",
          "pros": "Sabe de lo que habla, repite parciales",
          "contras": "No sabe explicar, se enreda demasiado, asume que todos tenemos buenas bases del colegio, el 80% de la nota son parciales",
          "periodo": "2023-1",
          "calificacion": 2.4,
          "dificultad": 4.4
        }
      },
      {
        "nombre": "Ricaurte Rodriguez Angulo",
        "slug": "ricaurte-rodriguez-angulo",
        "resenas": 23,
        "calidad": "mala",
        "calificacion": 2.67,
        "notaPromedio": 3.25,
        "resenasOcultas": 22,
        "resena": {
          "texto": "El ritmo del profesor es lento, pero busca que entendamos los temas e intentar explicar de la forma mas digerible posible, sabe mucho, pero al ir lento no puede cubrir todos los temas y deja algunos explicados a medias, además, suele ser muy cerrado a otros métodos e incluso refuta bibliografía valida. A veces no se le entiende porque habla bajo (explica como para el). En temas de actitud es paciente, tiene chistes funables pero no es mala persona y busca ayudar a los estudiantes.",
          "pros": "buena gente se discuten los porcentajes en clase explica de la forma mas digerible posible ayuda a pasar",
          "contras": "habla bajo va muy lento únicamente acepta métodos suyos",
          "periodo": "2024-2",
          "calificacion": 4,
          "dificultad": 2
        }
      },
      {
        "nombre": "Nohora Angelica Vega Castro",
        "slug": "nohora-angelica-vega-castro",
        "resenas": 8,
        "calidad": "mala",
        "calificacion": 2.41,
        "notaPromedio": 3.3,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Es una profesora regular, se le entiende muy poco y se apoya demasiado en las diapositivas y no maneja textos aparte, durante sus clases no se centra tanto en el aprendizaje de los estudiantes que no sean sus favoritos, además de eso a medida que avanza el semestre cambia los porcentajes de las notas, acorta la cantidad de parciales, pone trabajos innecesarios como carteleras y pósters que califica mal y además consumen mucho tiempo para los pocos créditos que tiene la materia, incluso tarda semanas en entregar notas de parciales y muchas veces con errores, luego es terrible a la hora de…",
          "pros": "Deja muchas tareas que eventualmente sirven para rescatar la nota (Aunque no lleva las cuentas de cuántas son). Antes del parcial coloca talleres de repaso (no siempre) que sirven para un par de preguntas en el parcial.…",
          "contras": "No tiene materiales de apoyo aparte de las diapositivas y las diapositivas no sirven para estudiar, están llenas de errores. No es clara con la manera de calificar, las fechas y los porcentajes. No demuestra buena…",
          "periodo": "2024-2",
          "calificacion": 1.5,
          "dificultad": 4
        }
      }
    ]
  },
  "2015496": {
    "nombre": "Geodinamica Externa",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015496",
    "profesores": [
      {
        "nombre": "Fernando Eli Romero Ordoñez",
        "slug": "fernando-eli-romero-ordoñez",
        "resenas": 14,
        "calidad": "regular",
        "calificacion": 3.65,
        "notaPromedio": 3.89,
        "resenasOcultas": 13,
        "resena": {
          "texto": "El profesor busca sobre todo que sus estudiantes salgan de su clase siendo personas críticas, honradas y que valoren su educación. La clase es muy tranquila, a veces da descansos, muchas risas, quizas sus chistes molesten a los más sensibles y extremistas, pero realmente son inofensivos, buscan que la clase sea más amenas. Para los parciales hay que estudiar lo que él dice en las clases, él literalemente avisa qué hay que estudiar. Da muchos tips en laboratorio, busca que aprendan mucho y que siempre vayan más allá en los temas de manera autónoma. Una muy buena persona, abierto a preguntas…",
          "pros": "Amable Chistoso Maneja muy bien los temas Comparte las diapositivas Enseña muy bien y busca que todos entiendan Monitores comprometidos Muy académico Tareas de consulta útil",
          "contras": "Parciales A veces flata tiempo para ver los temas Muchas muestras por identificar",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2.6
        }
      },
      {
        "nombre": "Modesto Portilla Gamboa",
        "slug": "modesto-portilla-gamboa",
        "resenas": 12,
        "calidad": "regular",
        "calificacion": 3.29,
        "notaPromedio": 3.68,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Por donde se comienza? Es difícil calificar a este profesor, al final es una relación de amor-odio con el. Es verdad lo que dicen, llega a rajar a los estudiantes en las actividades, a veces está de buen humor y a veces no. Son 3 parciales que valen el 15% c/u y la salida de campo el 55%, es una salida obligatoria y al principio del semestre dijo que aquel que no pudiera ir por la razón que fuera, que mejor cancelara. Los parciales no son tan difíciles pero puede ser algo cascarero y por algún error, ya le baja mucho. Es mejor que vaya a clase porque es medio bueno con las caras (algo de lo…",
          "pros": "- Salida de campo (experiencia única) - Si no va a clase no se pierde de mucho - Dirige la clase para ingeniería, es bastante enfático en eso",
          "contras": "- Actitud arrogante y fuerte (si saben llevarlo, todo bien) (no le tengan miedo) - Plata pa la salida :/",
          "periodo": "2024-2",
          "calificacion": 3.4,
          "dificultad": 3.8
        }
      },
      {
        "nombre": "John Jairo Sanchez Aguilar",
        "slug": "john-jairo-sanchez-aguilar",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Buen profesional y docente, se aprende mucho de el",
          "pros": "todos, felicitciones",
          "contras": "ninguna",
          "periodo": "2015-20",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Susana Salazar Jaramillo",
        "slug": "susana-salazar-jaramillo",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Es una profesora muy gentil, que ama la geología y que logra mostrar eso a los estudiantes, sin embargo su clase a veces es tediosa por no seguir un orden estructurado, requiere mucho trabajo autónomo para poder entender bien la asignatura, sin embargo es una profesora muy madre y muy linda para explicar, se esmera mucho en ello",
          "pros": null,
          "contras": "Se enreda en algunos temas y no tiene una estructura muy ordenada",
          "periodo": "2018-20",
          "calificacion": 4.5,
          "dificultad": 2
        }
      }
    ]
  },
  "2015497": {
    "nombre": "Geodinamica Interna",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015497",
    "profesores": [
      {
        "nombre": "Clemencia Gómez González",
        "slug": "clemencia-gómez-gonzález",
        "resenas": 30,
        "calidad": "buena",
        "calificacion": 4.76,
        "notaPromedio": 3.82,
        "resenasOcultas": 29,
        "resena": {
          "texto": "Es una maravillosa profesora que ama lo que hace, se nota que sabe un montón, hace entretenidas las clases con memes, videos y su forma de explicar es muy buena, sin embargo hay temas que va a pasar muy por encima pero que son importantes, es necesario estudiar autónomamente los temas justo después de haberlos visto en su clase porque suele hacer quizzes sorpresa, con ella los parciales valen 80% y talleres y quizzes el restante 20%, eso no quiere decir que no es importante hacer los talleres, ella los revisa por encima, se fija más que todo que este la bibliografía, hay gente que pierde por…",
          "pros": "1. Apasionada 2. Las clases son entretenidas 3. Le da espacio en sus clases a semilleros para que hagan presentaciones 4. No califica por caras 5.Volveria a tomar clases con ella, es muy querida y una maravillosa…",
          "contras": "1. Es muy difícil dejarla alta por su forma de calificar 2. No regala ni una décima de nota 3. Quizzes sorpresa en cualquier momento de la clase 4. Hay temas que los pasa muy por encima que son importantes, pero es…",
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 3.6
        }
      },
      {
        "nombre": "Carlos Alberto Vargas Jimenez",
        "slug": "carlos-alberto-vargas-jimenez",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4,
        "notaPromedio": 4.26,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Enseña bases de programación y software relacionado al tema (focalizándose en la parte de geodinamica y geofisica)",
          "pros": "Flexible con ajustar horarios y clase. Conocimientos altos de geofísica.",
          "contras": null,
          "periodo": "2023-1",
          "calificacion": 4,
          "dificultad": 2
        }
      },
      {
        "nombre": "John Jairo Sanchez Aguilar",
        "slug": "john-jairo-sanchez-aguilar",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Buen profesional y docente, se aprende mucho de el",
          "pros": "todos, felicitciones",
          "contras": "ninguna",
          "periodo": "2015-20",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Susana Salazar Jaramillo",
        "slug": "susana-salazar-jaramillo",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Es una profesora muy gentil, que ama la geología y que logra mostrar eso a los estudiantes, sin embargo su clase a veces es tediosa por no seguir un orden estructurado, requiere mucho trabajo autónomo para poder entender bien la asignatura, sin embargo es una profesora muy madre y muy linda para explicar, se esmera mucho en ello",
          "pros": null,
          "contras": "Se enreda en algunos temas y no tiene una estructura muy ordenada",
          "periodo": "2018-20",
          "calificacion": 4.5,
          "dificultad": 2
        }
      }
    ]
  },
  "2015540": {
    "nombre": "Accion Colectiva Y Movimientos Sociales",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015540",
    "profesores": [
      {
        "nombre": "Maria Teresa Pinto Ocampo",
        "slug": "maria-teresa-pinto-ocampo",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.75,
        "resenasOcultas": 1,
        "resena": {
          "texto": "La materia de Acción Colectiva con María Teresa Pinto en realidad se llama Cárceles y rebeldía, y es que de eso se trata en el fondo. Es una de las clases más hermosas y potentes de toda la carrera, de esas que te hacen pensar distinto y te dejan con ganas de cambiar el mundo. Se aprende muchísimo, no solo desde la teoría, sino desde una mirada muy humana, crítica y comprometida. La profe María Teresa es un sol. Tiene un pensamiento muy claro, muy crítico, y al mismo tiempo es súper amable, graciosa, cercana y flexible. De verdad se nota que ama lo que enseña y que se preocupa por que cada…",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Edwin Cruz Rodriguez",
        "slug": "edwin-cruz-rodriguez",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.95,
        "notaPromedio": 4.62,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Es un buen profesor, sabe demasiado y es muy carismático.",
          "pros": "Se aprende demasiado, sus parciales son sencillos ya que manda un cuestionario antes de este, los trabajos los califica rápido con su respectiva retroalimentación y es muy amable.",
          "contras": "Solo dicta siglo XIX, estaría genial que también diera siglo XX.",
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Yilson Javier Beltran Barrera",
        "slug": "yilson-javier-beltran-barrera",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.67,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Mágico",
          "pros": "Transmite mucha pasión a los alumnos e inspira, es muy empático y humano, su enseñanza trasciende mas allá de lo académico",
          "contras": null,
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 2
        }
      }
    ]
  },
  "2015569": {
    "nombre": "Bioquimica Analitica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015569",
    "profesores": [
      {
        "nombre": "Harold Duban Ardila Barrantes",
        "slug": "harold-duban-ardila-barrantes",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.8,
        "notaPromedio": 4.14,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Excelente profesor para ver el laboratorio. Durante el curso la profesora Claudia no pudo asistir entonces a él le tocó la parte más pesada. Abierto a dudas, califica suave, hace quices todos las clases al inicio entonces llegue temprano y estudie",
          "pros": "-Todo",
          "contras": "-Nada",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Yadi Adriana Umaña Perez",
        "slug": "yadi-adriana-umaña-perez",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.3,
        "notaPromedio": 4.05,
        "resenasOcultas": 1,
        "resena": {
          "texto": "La profe domina mucho el tema, pero a veces puede ir muy rápido. Es muy amable y las explicaciones son buenas. Los temas de la materia son interesantes, pero faltó coordinación con los otros docentes porque a veces ponían trabajos sin considerar el programa, no respetaban las fechas o repetían temas. Parecía que cada uno iba por su lado, no como un único curso, pero los módulos de la profe Yadi son muy chéveres",
          "pros": "Explica bien. Parciales trabajables",
          "contras": null,
          "periodo": "2021-10 (virtual)",
          "calificacion": 4.6,
          "dificultad": 3.8
        }
      },
      {
        "nombre": "Mauricio Urquiza Martínez",
        "slug": "mauricio-urquiza-martínez",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 4.25,
        "notaPromedio": 4.18,
        "resenasOcultas": 12,
        "resena": {
          "texto": "God con todo el afán de halagar",
          "pros": "Clase entretenidas. Dinámico, suelta datos interesantes en cada clase. Se preocupa verdaderamente porque el estudiante aprenda y pase la materia Parciales faciles",
          "contras": "No me aceptó matrimonio",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 1.6
        }
      },
      {
        "nombre": "Nohora Angelica Vega Castro",
        "slug": "nohora-angelica-vega-castro",
        "resenas": 8,
        "calidad": "mala",
        "calificacion": 2.41,
        "notaPromedio": 3.3,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Es una profesora regular, se le entiende muy poco y se apoya demasiado en las diapositivas y no maneja textos aparte, durante sus clases no se centra tanto en el aprendizaje de los estudiantes que no sean sus favoritos, además de eso a medida que avanza el semestre cambia los porcentajes de las notas, acorta la cantidad de parciales, pone trabajos innecesarios como carteleras y pósters que califica mal y además consumen mucho tiempo para los pocos créditos que tiene la materia, incluso tarda semanas en entregar notas de parciales y muchas veces con errores, luego es terrible a la hora de…",
          "pros": "Deja muchas tareas que eventualmente sirven para rescatar la nota (Aunque no lleva las cuentas de cuántas son). Antes del parcial coloca talleres de repaso (no siempre) que sirven para un par de preguntas en el parcial.…",
          "contras": "No tiene materiales de apoyo aparte de las diapositivas y las diapositivas no sirven para estudiar, están llenas de errores. No es clara con la manera de calificar, las fechas y los porcentajes. No demuestra buena…",
          "periodo": "2024-2",
          "calificacion": 1.5,
          "dificultad": 4
        }
      }
    ]
  },
  "2015570": {
    "nombre": "Bioquimica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015570",
    "profesores": [
      {
        "nombre": "Edgar Antonio Reyes Montano",
        "slug": "edgar-antonio-reyes-montano",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 4.85,
        "notaPromedio": 4.38,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Muy buen profesor, aclara las dudas en clase y se adaptó muy bien a la virtualidad , intenta que las clases sean didacticas y busca diferentes métodos para que los estudiantes aprendan las temáticas",
          "pros": "Garaba las clases Actividades didacticas Hace pausas activas",
          "contras": null,
          "periodo": "2020-20 (virtual)",
          "calificacion": 4.4,
          "dificultad": 3.2
        }
      },
      {
        "nombre": "Harold Duban Ardila Barrantes",
        "slug": "harold-duban-ardila-barrantes",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.8,
        "notaPromedio": 4.14,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Excelente profesor para ver el laboratorio. Durante el curso la profesora Claudia no pudo asistir entonces a él le tocó la parte más pesada. Abierto a dudas, califica suave, hace quices todos las clases al inicio entonces llegue temprano y estudie",
          "pros": "-Todo",
          "contras": "-Nada",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Claudia Consuelo Rubiano Castellanos",
        "slug": "claudia-consuelo-rubiano-castellanos",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 4.25,
        "notaPromedio": 4.05,
        "resenasOcultas": 12,
        "resena": {
          "texto": "Buena profesora, abierta a dudas. Durante el laboratorio se fracturó una patica entonces no estuvo presenta la mayoría del tiempo. Pero mientras estuvo explicaba todo. Es más dura calificando que Duban pero nada del otro mundo El lab es muy pesado por las 7 horas seguidas y aunque \"se puede salir a almorzar\" hay tantas cosas por hacer que son pocas las veces. Hacen quices TODOS los días de clase y siempre al empezar, entonces si usted tiene la maña de llegar tarde, murió.",
          "pros": "-Abierta a dudas",
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 4,
          "dificultad": 3.4
        }
      },
      {
        "nombre": "Mauricio Urquiza Martínez",
        "slug": "mauricio-urquiza-martínez",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 4.25,
        "notaPromedio": 4.18,
        "resenasOcultas": 12,
        "resena": {
          "texto": "God con todo el afán de halagar",
          "pros": "Clase entretenidas. Dinámico, suelta datos interesantes en cada clase. Se preocupa verdaderamente porque el estudiante aprenda y pase la materia Parciales faciles",
          "contras": "No me aceptó matrimonio",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 1.6
        }
      },
      {
        "nombre": "Adrian Gabriel Sandoval Hernandez",
        "slug": "adrian-gabriel-sandoval-hernandez",
        "resenas": 8,
        "calidad": "regular",
        "calificacion": 3.23,
        "notaPromedio": 3.69,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Desde el inicio del curso te dice que muy probablemente pierdas, hay quices cada semana y si lo pasa 1 estudiante es mucho, deja trabajos para cada clase, su actitud es cero agradable, pide que sepas en una semana lo que el aprendió en 10 años xd?por el bien de tu promedio y salud mental no inscribas con este señor",
          "pros": "Ninguno, sufriras por al menos pasar con 3.0",
          "contras": "No es empático Mala actitud (no se deja hablar) Casi nadie pasa su materia",
          "periodo": "2024-1",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Nohora Angelica Vega Castro",
        "slug": "nohora-angelica-vega-castro",
        "resenas": 8,
        "calidad": "mala",
        "calificacion": 2.41,
        "notaPromedio": 3.3,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Es una profesora regular, se le entiende muy poco y se apoya demasiado en las diapositivas y no maneja textos aparte, durante sus clases no se centra tanto en el aprendizaje de los estudiantes que no sean sus favoritos, además de eso a medida que avanza el semestre cambia los porcentajes de las notas, acorta la cantidad de parciales, pone trabajos innecesarios como carteleras y pósters que califica mal y además consumen mucho tiempo para los pocos créditos que tiene la materia, incluso tarda semanas en entregar notas de parciales y muchas veces con errores, luego es terrible a la hora de…",
          "pros": "Deja muchas tareas que eventualmente sirven para rescatar la nota (Aunque no lleva las cuentas de cuántas son). Antes del parcial coloca talleres de repaso (no siempre) que sirven para un par de preguntas en el parcial.…",
          "contras": "No tiene materiales de apoyo aparte de las diapositivas y las diapositivas no sirven para estudiar, están llenas de errores. No es clara con la manera de calificar, las fechas y los porcentajes. No demuestra buena…",
          "periodo": "2024-2",
          "calificacion": 1.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Cecilia Anzola Velasco",
        "slug": "cecilia-anzola-velasco",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Sixta Tulia Martinez Peralda",
        "slug": "sixta-tulia-martinez-peralda",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2015572": {
    "nombre": "Espectroscopia Aplicada",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015572",
    "profesores": [
      {
        "nombre": "Ariel Rodolfo Quevedo Pastor",
        "slug": "ariel-rodolfo-quevedo-pastor",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.48,
        "notaPromedio": 4.28,
        "resenasOcultas": 8,
        "resena": {
          "texto": "La verdad no me gustó ver la materia con el, el extremadamente desordenado, empieza la clase super tarde. Es que no puedo decirte que no enseña bien básicamente por que no enseña, tu puedes ir a la clase a anotar los temas que se están viendo y luego llegar a casa a estudiar con un buen libro por tu propia cuenta por que si te quedas con solo lo de la clase estás jodido. Aunque con eso el es muy amable pero se distrae DEMASIADO alguien le habla y se queda ahí hablando y no sigue con la clase, o la termina temprano o no hace xd, los parciales aunque son de \"opción múltiple\" incluye una que se…",
          "pros": "- Regala muchos puntos - Se podría decir que los parciales son dentro de todo fáciles - Es bastante compresivo y amable - Hace muchos history time - Pone un porcentaje de talleres y como es tan perezoso como para…",
          "contras": "- Se distrae demasiadoooooo - Es extremadamente desordenado y no como tal con las notas sino en como lleva los temas como \"explica\" y demás",
          "periodo": "2025-2",
          "calificacion": 3.5,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Ricardo Fierro Medina",
        "slug": "ricardo-fierro-medina",
        "resenas": 28,
        "calidad": "buena",
        "calificacion": 4.33,
        "notaPromedio": 3.69,
        "resenasOcultas": 27,
        "resena": {
          "texto": "La nota dependió principalmente del docente auxiliar, por lo que no se siente que estuviera muy involucrado en el lab. Pasa por los puestos preguntando pero puede llegar a ser muy intimidante por que pregunta para corchar, algo que el llama \"retar su mente\", aunque con el tiempo lo hizo menos. El 55% depende de un proyecto, y hay una sesión donde el profe ve la viabilidad de este, pero esta sesión parece más para ver si el grupo tiene algo o no, más allá de si es viable o no. Es medio insoportable si el profe lo coge entre ojos. Si bien digo esto del profe, creo que la dificultad del…",
          "pros": null,
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 2,
          "dificultad": 4.8
        }
      },
      {
        "nombre": "Eliseo Avella Moreno",
        "slug": "eliseo-avella-moreno",
        "resenas": 9,
        "calidad": "regular",
        "calificacion": 3.44,
        "notaPromedio": 3.74,
        "resenasOcultas": 8,
        "resena": {
          "texto": "es un profesor que le gusta enseñar, el unico problema es el como la verdad se enreda bastante pero no es claro, en mi caso pase la materia por medio del estudio autonomo ya que en clase o entendia casi nada. el profe envia bastante material de apoyo y resulta muy util para pasar los quizzes y parciales ya que son las unicas notas de la asignatura. lo. mejor es llevarse bien con el no es mala persona y tambien permite espacios de refuerzo con grupos de estudio que lo necesiten.",
          "pros": "no es rajador en sus parciales o quizzes generalmente. envia bastante material de estudio para preparacion de parciales.",
          "contras": "es dificil entender sus explicaciones.",
          "periodo": "2025-2",
          "calificacion": 3.5,
          "dificultad": 3
        }
      }
    ]
  },
  "2015575": {
    "nombre": "Fundamentos De Biologia Molecular",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015575",
    "profesores": [
      {
        "nombre": "Luis Ernesto Contreras Rodriguez",
        "slug": "luis-ernesto-contreras-rodriguez",
        "resenas": 19,
        "calidad": "buena",
        "calificacion": 4.94,
        "notaPromedio": 4.49,
        "resenasOcultas": 18,
        "resena": {
          "texto": "Es muy buen profesor, transmite su pasión por la bioquímica y hace que sea una buena experiencia estar en el laboratorio. Explica las cosas detalladamente y se esfuerza porque todos entiendan. Es muy amable, hasta se aprende los nombres de todo durante el semestre. Muy recomendado ver materias con él si tienen la oportunidad.",
          "pros": null,
          "contras": null,
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Claudia Consuelo Rubiano Castellanos",
        "slug": "claudia-consuelo-rubiano-castellanos",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 4.25,
        "notaPromedio": 4.05,
        "resenasOcultas": 12,
        "resena": {
          "texto": "Buena profesora, abierta a dudas. Durante el laboratorio se fracturó una patica entonces no estuvo presenta la mayoría del tiempo. Pero mientras estuvo explicaba todo. Es más dura calificando que Duban pero nada del otro mundo El lab es muy pesado por las 7 horas seguidas y aunque \"se puede salir a almorzar\" hay tantas cosas por hacer que son pocas las veces. Hacen quices TODOS los días de clase y siempre al empezar, entonces si usted tiene la maña de llegar tarde, murió.",
          "pros": "-Abierta a dudas",
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 4,
          "dificultad": 3.4
        }
      },
      {
        "nombre": "Martha Lucia Serrano Lopez",
        "slug": "martha-lucia-serrano-lopez",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.12,
        "notaPromedio": 4.15,
        "resenasOcultas": 5,
        "resena": null
      }
    ]
  },
  "2015576": {
    "nombre": "Fundamentos De Espectroscopia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015576",
    "profesores": [
      {
        "nombre": "Johan Fabian Galindo Cruz",
        "slug": "johan-fabian-galindo-cruz",
        "resenas": 11,
        "calidad": "buena",
        "calificacion": 4.52,
        "notaPromedio": 3.98,
        "resenasOcultas": 10,
        "resena": {
          "texto": "la verdad explica bien y se preocupa por que uno parenda, eso si busque que no se ponga bravo o que no la coja con usted para montársela por que ahi va a tener todo el semestre a el encima",
          "pros": "explica bien y los parciales son faciles siempre y cuando uno haya hecho el taller que el deja",
          "contras": "es cascarrabias",
          "periodo": "2023-2",
          "calificacion": 4.7,
          "dificultad": 3.3
        }
      },
      {
        "nombre": "Gina Marcela Hincapié Triviño",
        "slug": "gina-marcela-hincapié-triviño",
        "resenas": 16,
        "calidad": "buena",
        "calificacion": 4.26,
        "notaPromedio": 3.49,
        "resenasOcultas": 15,
        "resena": {
          "texto": "La profe Gina es bastante exigente pero es excelente docente. Durante el laboratorio no pidió preinformes pero si estaba pendiente de que la práctica se hubiese preparado correctamente (todos teníamos prácticas diferentes) también hace quices todas las clases y pregunta cosas que son sencillas pero puede tocar temas de cursos anteriores que se pudieron cursar años antes entonces es muy probable cometer errores que hagan que se pierdan los quices. Durante los seminarios hace las correcciones pertinentes y pide que se de un enfoque químico al análisis y no netamente estadístico.",
          "pros": null,
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Eliana Castillo Serna",
        "slug": "eliana-castillo-serna",
        "resenas": 9,
        "calidad": "regular",
        "calificacion": 3,
        "notaPromedio": 3.43,
        "resenasOcultas": 8,
        "resena": {
          "texto": "La profesora es estricta en el laboratorio, le gusta que todos trabajen y estudien para desarrollar las prácticas de laboratorio. A veces tiene una actitud fuerte pero siempre está dispuesta a responder preguntas. La verdad, me parece que es una opción con la que se aprende bastante sobre técnicas de laboratorio en métodos ópticos, pero considero que puede ser, asimismo, un poco estresante para algunas personas ver clase con ella. En mi caso tuve una buena experiencia viendo el laboratorio con ella.",
          "pros": null,
          "contras": null,
          "periodo": "2024-1",
          "calificacion": 4,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Jesus Alberto Agreda Bastidas",
        "slug": "jesus-alberto-agreda-bastidas",
        "resenas": 4,
        "calidad": "mala",
        "calificacion": 1.5,
        "notaPromedio": 3.13,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Es un profesor muy disperso, sus clases no siguen un hilo conductor, enseña conceptos MUY básicos de la electroquímica y pregunta cosas extremadamente complejas en sus parciales, exige muchas cosas a sus estudiantes pero no se exige a sí mismo a ser un buen docente. Si le caes bien te ayuda, de lo contrario vas a perder con 2,9",
          "pros": "Ninguno",
          "contras": "Parciales de demostrar ecuaciones que NO enseña Califica duro No se concentra No es imparcial",
          "periodo": "2024-2",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Elianna Castillo Serna",
        "slug": "elianna-castillo-serna",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2015577": {
    "nombre": "Interfaces",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015577",
    "profesores": [
      {
        "nombre": "Marco Fidel Suarez Herrera",
        "slug": "marco-fidel-suarez-herrera",
        "resenas": 30,
        "calidad": "regular",
        "calificacion": 3.58,
        "notaPromedio": 3.46,
        "resenasOcultas": 29,
        "resena": {
          "texto": "El profesor sabe mucho, y habla de varios temas que muchos profesores no hablarían en primer semestre. Se nota que le apasiona enseñar y te puede repetir el tema las veces que quieras, también es chévere que ponga ejercicios prácticos como experimentos ( son bien largos). Sin embargo es muy duro con las calificaciones (de los parciales), y los temas que maneja son a veces muy complicados, los parciales son difíciles y representan el 60% de la materia. Sé que hubo gente que la perdió con muy bajita nota, pero también hay personas que llevaron un promedio súper alto. Al profesor le gusta…",
          "pros": "Se aprende mucho y se pone en práctica los conocimientos. Es amable y le gusta responder a las preguntas. No tiene preferencias con nadie.",
          "contras": "Requiere de mucho estudio autónomo y no es fácil. NUNCA aproxima nota",
          "periodo": "2025-2",
          "calificacion": 3,
          "dificultad": 4.2
        }
      },
      {
        "nombre": "Gilmer Nicolas Hernandez Guarin",
        "slug": "gilmer-nicolas-hernandez-guarin",
        "resenas": 23,
        "calidad": "regular",
        "calificacion": 3.42,
        "notaPromedio": 3.97,
        "resenasOcultas": 22,
        "resena": {
          "texto": "Es un excelente docente, se preocupa porque sus estudiantes aprendan y por eso tienen muy buena pedagogía. Realiza tres parciales y un poster, el primero de estos es el más fácil. Algunas personas se refieren de el de mala manera pero en mi experiencia fue una clase excelente, a veces cuenta experiencias personales (es salado). Además, pasar es muy fáci.",
          "pros": "- Excelente persona -Excelente pedagogía -Los temas son interesantes -Parciales de acuerdo a lo visto en clase",
          "contras": "- Tiene problemas de audición, por lo que no se puede hacer ruido y se debe ser paciente -Es muy exigente con la asistencia en clase",
          "periodo": "2025-1",
          "calificacion": 4.7,
          "dificultad": 2
        }
      },
      {
        "nombre": "Edgar Delgado Mejia",
        "slug": "edgar-delgado-mejia",
        "resenas": 26,
        "calidad": "mala",
        "calificacion": 2.24,
        "notaPromedio": 3.23,
        "resenasOcultas": 25,
        "resena": {
          "texto": "Creo que, si usted estudia, lee el material y los videos que él le manda puede pasar sin mayor inconveniente, le recomiendo participar en clase y tomar la materia con cierta seriedad (aunque no considero que quite demasiado tiempo) Este profe motivo mi curiosidad en una ciencia en la que ya me había rendido desde el colegio. Un punto negativo es que suele divagar bastante, algo que eventualmente causa que se apresure demasiado al dictar los temas. Dicho todo esto, cuando hice el curso pasamos 6 de todo mi grupo, del otro grupo pasaron solo 4.",
          "pros": "Incentiva su curiosidad por el mundo de la Química",
          "contras": "Por alguna razón poca gente le pasa. Divaga bastante",
          "periodo": "2024-2",
          "calificacion": 4,
          "dificultad": 3
        }
      }
    ]
  },
  "2015580": {
    "nombre": "Laboratorio Avanzado De Bioquimica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015580",
    "profesores": [
      {
        "nombre": "Harold Duban Ardila Barrantes",
        "slug": "harold-duban-ardila-barrantes",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.8,
        "notaPromedio": 4.14,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Excelente profesor para ver el laboratorio. Durante el curso la profesora Claudia no pudo asistir entonces a él le tocó la parte más pesada. Abierto a dudas, califica suave, hace quices todos las clases al inicio entonces llegue temprano y estudie",
          "pros": "-Todo",
          "contras": "-Nada",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 3.5
        }
      }
    ]
  },
  "2015581": {
    "nombre": "Laboratorio Avanzado De Industrial",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015581",
    "profesores": [
      {
        "nombre": "Jose De Jesus Diaz Velasquez",
        "slug": "jose-de-jesus-diaz-velasquez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2015585": {
    "nombre": "Laboratorio De Bioquimica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015585",
    "profesores": [
      {
        "nombre": "Ruth Elizabeth Garzon Fernandez",
        "slug": "ruth-elizabeth-garzon-fernandez",
        "resenas": 6,
        "calidad": "regular",
        "calificacion": 3.77,
        "notaPromedio": 3.5,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Es una profesora amable, la cuestión es que tira muy duro con las notas, no se puede negar que viendo su curso aprendes porque aprendes, sin importar si te interesa o no el tema, la cuestión es que hace preguntas de parciales muy heavys, a menos que no metas más materias y estudies full para cada parcial pasas. Eso sí cabe recalcar que es un poco resentida, son 4 parciales, decidió hacer el segundo de 50 preguntas abiertas pq al parecer un estudiante le mintió sobre una fecha.",
          "pros": "-Sabe muchísimo, sí o sí se aprende. -es amable. -Te motiva a aprender bioquímica. -Aplicas la bioquímica para todo",
          "contras": "-poco flexible. -Tira duro calificando.",
          "periodo": "2025-1",
          "calificacion": 2.9,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Carlos Yesid Soto Ospina",
        "slug": "carlos-yesid-soto-ospina",
        "resenas": 13,
        "calidad": "regular",
        "calificacion": 3.74,
        "notaPromedio": 3.47,
        "resenasOcultas": 12,
        "resena": {
          "texto": "Es un profesor que sabe demasiado sobre la materia pero esto juega mucho en contra, ya que se deja llevar por la emoción y se desvía del tema, hace que los temas sean demasiados densos y muy tediosos, además de que sus quizz son horribles, el 30% corresponde a Talleres (Difíciles), quizz, y el 70% so parciales, los hacen pareja y aun así no se logran pasar, cuando califica los parciales y vas a la revisión él ya tiene el parcial hecho con las cosas que debe tener el parcial y no es opción múltiple, es parcial abierto en su gran mayoría, si no escribes literal todo lo que él piensa lo pierdes,…",
          "pros": "Si tienes oportunidad de verla con él, desaprovecharla, no hay ningún pro.",
          "contras": "Todos y te deja traumas",
          "periodo": "2024-2",
          "calificacion": 1.6,
          "dificultad": 5
        }
      },
      {
        "nombre": "Jose Miguel Villareal",
        "slug": "jose-miguel-villareal",
        "resenas": 13,
        "calidad": "regular",
        "calificacion": 2.76,
        "notaPromedio": 3.31,
        "resenasOcultas": 12,
        "resena": {
          "texto": "La mayor parte del grupo llegó indispuesto, debido a los comentarios de la plataforma, sin embargo, la experiencia con el docente no fue tan mala como se había pensado. Suele ir bastante rápido en los temas, y da más, en comparación a otros profes que han dictado la misma asignatura. Aunque sabe mucho y explica bien, al ser tanto tema y darlo de manera profunda, hace difícil la comprensión con solo la clase, además es algo desorganizado, y dada la rigurosidad de la materia, se agradecería que, hubiese una estructura mejor definida de los temas y las clases. Algunas veces llega a ser…",
          "pros": "- Múltiples notas y actividades - Da ayudas según la situación del curso (parejas, apuntes, muchas preguntas de los talleres, bonos de cultura general) - Responde preguntas, es amable generalmente - Interesado en que la…",
          "contras": "- Talleres muy largos - Pregunta cosas que no enseñó o muy específicas - Ritmo bastante ligero - A veces mete más presión y tensión - Quices sin avisar",
          "periodo": "2024-2",
          "calificacion": 4,
          "dificultad": 4
        }
      },
      {
        "nombre": "Cecilia Anzola Velasco",
        "slug": "cecilia-anzola-velasco",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2015587": {
    "nombre": "Laboratorio De Quimica Organica Ii",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015587",
    "profesores": [
      {
        "nombre": "Ariel Rodolfo Quevedo Pastor",
        "slug": "ariel-rodolfo-quevedo-pastor",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.48,
        "notaPromedio": 4.28,
        "resenasOcultas": 8,
        "resena": {
          "texto": "La verdad no me gustó ver la materia con el, el extremadamente desordenado, empieza la clase super tarde. Es que no puedo decirte que no enseña bien básicamente por que no enseña, tu puedes ir a la clase a anotar los temas que se están viendo y luego llegar a casa a estudiar con un buen libro por tu propia cuenta por que si te quedas con solo lo de la clase estás jodido. Aunque con eso el es muy amable pero se distrae DEMASIADO alguien le habla y se queda ahí hablando y no sigue con la clase, o la termina temprano o no hace xd, los parciales aunque son de \"opción múltiple\" incluye una que se…",
          "pros": "- Regala muchos puntos - Se podría decir que los parciales son dentro de todo fáciles - Es bastante compresivo y amable - Hace muchos history time - Pone un porcentaje de talleres y como es tan perezoso como para…",
          "contras": "- Se distrae demasiadoooooo - Es extremadamente desordenado y no como tal con las notas sino en como lleva los temas como \"explica\" y demás",
          "periodo": "2025-2",
          "calificacion": 3.5,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Ricardo Fierro Medina",
        "slug": "ricardo-fierro-medina",
        "resenas": 28,
        "calidad": "buena",
        "calificacion": 4.33,
        "notaPromedio": 3.69,
        "resenasOcultas": 27,
        "resena": {
          "texto": "La nota dependió principalmente del docente auxiliar, por lo que no se siente que estuviera muy involucrado en el lab. Pasa por los puestos preguntando pero puede llegar a ser muy intimidante por que pregunta para corchar, algo que el llama \"retar su mente\", aunque con el tiempo lo hizo menos. El 55% depende de un proyecto, y hay una sesión donde el profe ve la viabilidad de este, pero esta sesión parece más para ver si el grupo tiene algo o no, más allá de si es viable o no. Es medio insoportable si el profe lo coge entre ojos. Si bien digo esto del profe, creo que la dificultad del…",
          "pros": null,
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 2,
          "dificultad": 4.8
        }
      },
      {
        "nombre": "Luis Enrique Cuca Suarez",
        "slug": "luis-enrique-cuca-suarez",
        "resenas": 11,
        "calidad": "buena",
        "calificacion": 4.22,
        "notaPromedio": 4.07,
        "resenasOcultas": 10,
        "resena": {
          "texto": "A mi parecer este semestre el laboratorio con el fue mas llevadero por como lo describían en semestres pasados. Y si todos es a mano y con colores sjjs, prácticamente haces dos cuadernos enteros entre pre informes y tareas, pues en general no es difícil y en si todas las practicas son muy interesantes, la cosa es que para los informes y posters le pongas cada cosa que dice el a veces menciona cosas muy rápido y parece que no tienen importancia pero luego si se lo pones en el informe de dará puntos extra. Pero pues si te consume bastante tiempo",
          "pros": "- No califica tan duro y si te puede llegar a poner 5 - Es amable",
          "contras": "- Aquí lo que mas importa es la cantidad, tu hazle dibujos, pintárselos ponle mil cosas eso hará que te ponga más nota",
          "periodo": "2025-2",
          "calificacion": 4.4,
          "dificultad": 4
        }
      },
      {
        "nombre": "Cristian Ochoa Puentes",
        "slug": "cristian-ochoa-puentes",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 3.85,
        "notaPromedio": 4.12,
        "resenasOcultas": 12,
        "resena": {
          "texto": "En general es un profe relajado, explica lo que debe y se le entiende, ya que incluso lleva modelos, lo unico es que los dos primeros parciales estuvieron faciles y en los ultimos si estuvieron horrible, les subio bastante la dificultad viendo los parciales pasados, pero en general si es una buena opcion para verla.",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 3.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Cesar Augusto Sierra Avila",
        "slug": "cesar-augusto-sierra-avila",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 3.81,
        "notaPromedio": 3.63,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Un muy buen profesor, comprensivo, enseña bien lo que no queda claro lo repite y trata de que las clases sean mas dinamicas, ademas de que no hala solo dela teoria si no de las aplicaciones de las cosas que enseña, los parciales no son muy complicados, pero cuidado con no ir a clases ya que puede preguntar cosas que haya susurrado de su vida en una clase en los parciales, para tomar la asistencia, requiere tiempo pero no mucho, en general es un muy buen profesor recomendadisimo",
          "pros": "explica muy bien los temas y tiene un buen balanceado entre lo teórico y lo aplicado, resuelve dudas y es bastante comprensivo",
          "contras": "es un poco \"estricto\" con la forma de calificar a veces y puede pegarse de cosas minimas pero en general nada grave",
          "periodo": "2025-2",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Freddy Alejandro Ramos Rodriguez",
        "slug": "freddy-alejandro-ramos-rodriguez",
        "resenas": 3,
        "calidad": "regular",
        "calificacion": 2.9,
        "notaPromedio": 3.03,
        "resenasOcultas": 2,
        "resena": {
          "texto": "es un profesor amable y respetuoso, llega puntual ,explica bien aunque a veces se vuelve un poco tediosa la clase, pero el tiene paciencia para explicar",
          "pros": "es buena gente y tiene paciencia para explicar",
          "contras": "parciales difíciles se enreda cuando explica",
          "periodo": "2023-1",
          "calificacion": 3.7,
          "dificultad": 4.3
        }
      },
      {
        "nombre": "Augusto Rivera Umaña",
        "slug": "augusto-rivera-umaña",
        "resenas": 23,
        "calidad": "mala",
        "calificacion": 2.32,
        "notaPromedio": 3.35,
        "resenasOcultas": 22,
        "resena": {
          "texto": "El profe es muy estricto con sus reglas. No se puede comer, hablar o siquiera tomar agua en clase sin que se enoje. El método de enseñanza es muy anticuado para una materia tan importante porque solo prioriza la memorización sin brindar herramientas de aprendizaje apropiadas ni material de apoyo porque no manda las diapositivas de clase y ni se le ocurra pensar que puede tomar fotos.",
          "pros": "Es fácil pasar la materia Parciales de a parejas No deja trabajo autónomo",
          "contras": "La clase se siente como una cárcel El método de enseñanza está mal enfocado No se aprende mucho, ni se deja alta",
          "periodo": "2025-1",
          "calificacion": 2.9,
          "dificultad": 2
        }
      }
    ]
  },
  "2015589": {
    "nombre": "Laboratorio De Quimica Inorganica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015589",
    "profesores": [
      {
        "nombre": "Edwin Arley Baquero",
        "slug": "edwin-arley-baquero",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Es un profesor excelente. Tiene una excelente calidad humana y se preocupa realmente por el aprendizaje de sus estudiantes, no solo en cuanto a los conocimientos químicos sino también con las habilidades blandas que son muy importantes. En el laboratorio está siempre presto a atender las dudas y ayudar a los estudiantes con las dudas que tengan. La materia fue calificado como 20% preinforme (10% escrito y 10% seminario) y 80% informe (40% escrito y 40% seminario)",
          "pros": null,
          "contras": null,
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Jose Gregorio Carriazo Baños",
        "slug": "jose-gregorio-carriazo-baños",
        "resenas": 19,
        "calidad": "buena",
        "calificacion": 3.89,
        "notaPromedio": 3.64,
        "resenasOcultas": 18,
        "resena": {
          "texto": "Verdaderamente es de esos profes que lo terminan sorprendiendo a uno por lo increíblemente bien que pueden llegar a terminar las cosas. Aunque en el inicio fue súper difícil y estresante, al final es súper generoso y dadivoso con la nota y sus clases, para las diapositivas que tiene, siento que son apenas para lo que uno necesita en la clase, y puede que aunque el primer corte sea difícil, con tal de que uno le participe y esté atento en clase todo puede salir fácilmente bien.",
          "pros": "Ayuda un montón Se tira severas anécdotas, súper divertidas Hicimos compartir, y se la rifó con unos buñuelotes Parchado, y aparte costeño El segundo parcial de a parejas, y el tercero solo teoría",
          "contras": "Ta potente Solo 3 parciales",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 4
        }
      },
      {
        "nombre": "Rafael Alberto Molina Gallego",
        "slug": "rafael-alberto-molina-gallego",
        "resenas": 17,
        "calidad": "regular",
        "calificacion": 3.64,
        "notaPromedio": 3.55,
        "resenasOcultas": 16,
        "resena": {
          "texto": "Es un buen profesor y se le nota que le gusta mucho lo que hace, también sabe un montón, la dificultad de la clase depende de si el curso le cae bien o no, los parciales son 2 temas, uno de aprenderse las diapositivas (se sabrá cuál es, porque es más historia que cualquier otra cosa) y otro de ejercicios que se pueden resolver con cosas que se encuentran dentro del mismo parcial, unx no se da en cuenta de eso hasta cuando ya va a acabar",
          "pros": "-Deja talleres de repaso -Sabe mucho -Tira suave",
          "contras": "-Odia que la gente salga del salón, aunque sea para el baño, así que no tomes líquidos antes de su clase -Los ejercicios de las diapositivas son muy fáciles y en el parcial no se parece ni en la redacción",
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Alvaro Duarte Ruiz",
        "slug": "alvaro-duarte-ruiz",
        "resenas": 16,
        "calidad": "regular",
        "calificacion": 2.58,
        "notaPromedio": 3.92,
        "resenasOcultas": 15,
        "resena": {
          "texto": "El profe Álvaro es muy buen profesor, se preocupa porque aprendas y te ensena cosas que sirven para tu futuro como profesional, ademas de que el tema del curso es muy hermoso, todo este curso fue una maravilla, tuvimos salidas a otros laboratorios, tareas como maquetas, definitivamente si pueden metan esta optativa, lo único es que si tienes que leer bastante pero se puede.",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2
        }
      }
    ]
  },
  "2015593": {
    "nombre": "Microbiologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015593",
    "profesores": [
      {
        "nombre": "Pedro Felipe De Brito Brandao",
        "slug": "pedro-felipe-de-brito-brandao",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.31,
        "notaPromedio": 4.36,
        "resenasOcultas": 8,
        "resena": {
          "texto": "La mejor materia .............................................................................................",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 5
        }
      }
    ]
  },
  "2015595": {
    "nombre": "Principios De Quimica Industrial",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015595",
    "profesores": [
      {
        "nombre": "Gloria Ivonne Cubíllos González",
        "slug": "gloria-ivonne-cubíllos-gonzález",
        "resenas": 36,
        "calidad": "buena",
        "calificacion": 4.81,
        "notaPromedio": 4.24,
        "resenasOcultas": 35,
        "resena": {
          "texto": "La mejor profesora que he tenido. Explica muy bien, da oportunidades para subir notas y los parciales son muy trabajables.",
          "pros": "super amable tranquila explica bien es muy atenta organizada",
          "contras": "NADA",
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Andres Cabrera Orozco",
        "slug": "andres-cabrera-orozco",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 4.67,
        "notaPromedio": 4.47,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Es un gran profe, en verdad, califica bien, da oportunidades, toca dedicarle tiempo a repasar y practicar, pero el profe tiene en cuenta al estudiante, toma asistencia, pero pues porque le importa que la gente vaya a la clase.",
          "pros": "Atento, se entiende facil, da oportunidades, califica bien.",
          "contras": "Toca practicar, sobretodo si no tienen buenas bases de matematica para los ejercicios. Aunque no es mal intencionado, suele recalcar lo facil que es la materia comparado al resto de la carrera, y pues eso puede afectar…",
          "periodo": "2026-2",
          "calificacion": 4.9,
          "dificultad": 2
        }
      },
      {
        "nombre": "Yesmith Santos Panqueva",
        "slug": "yesmith-santos-panqueva",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 3.7,
        "notaPromedio": 3.77,
        "resenasOcultas": 7,
        "resena": {
          "texto": "La profesora es amable, aunque no es muy atenta a las preguntas; cuando preguntas algo en su clase sobre el tema sus respuestas pueden ser \"eso ya lo deberían saber\" o simplemente ignora la pregunta. Brinda ejemplos interesantes, responde los correos. Sin embargo, sus clases se pueden tornar un poco aburridas, generalmente es la profesora pasando diapositivas y diciendo lo que estas contienen.",
          "pros": "Es amable, tranquila y con las actividades en clase ayuda un poco",
          "contras": "Muchas veces no responde las preguntas de clase Muchos parciales, 7 parciales en el semestre Calificó a último momento",
          "periodo": "2025-2",
          "calificacion": 2.4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Carlos Alexander Trujillo",
        "slug": "carlos-alexander-trujillo",
        "resenas": 49,
        "calidad": "regular",
        "calificacion": 3.4,
        "notaPromedio": 3.37,
        "resenasOcultas": 48,
        "resena": {
          "texto": "El profesor explica bien, manda buenos apuntes entorno a la química y muchas veces la relación histórica de ella con otros campos del saber. No es un profesor apto para gente sensible a los comentarios políticos, económicos o sociales. Básicamente no es apto para estudiantes mamertos jajaja Me hizo querer aprender más de química. A pesar de que perdí el último parcial por puro descuido.",
          "pros": "Imparcial Permite apuntes en el examen",
          "contras": "Es muy cascarero con las respuestas, aunque técnicamente tenga razón, duele no sacar 5 por cositas. Malo tener inasistencias, se puede perder demasiada información.",
          "periodo": "2025-2",
          "calificacion": 4.9,
          "dificultad": 4
        }
      }
    ]
  },
  "2015596": {
    "nombre": "Quimica De Carbaniones",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015596",
    "profesores": [
      {
        "nombre": "Ariel Rodolfo Quevedo Pastor",
        "slug": "ariel-rodolfo-quevedo-pastor",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.48,
        "notaPromedio": 4.28,
        "resenasOcultas": 8,
        "resena": {
          "texto": "La verdad no me gustó ver la materia con el, el extremadamente desordenado, empieza la clase super tarde. Es que no puedo decirte que no enseña bien básicamente por que no enseña, tu puedes ir a la clase a anotar los temas que se están viendo y luego llegar a casa a estudiar con un buen libro por tu propia cuenta por que si te quedas con solo lo de la clase estás jodido. Aunque con eso el es muy amable pero se distrae DEMASIADO alguien le habla y se queda ahí hablando y no sigue con la clase, o la termina temprano o no hace xd, los parciales aunque son de \"opción múltiple\" incluye una que se…",
          "pros": "- Regala muchos puntos - Se podría decir que los parciales son dentro de todo fáciles - Es bastante compresivo y amable - Hace muchos history time - Pone un porcentaje de talleres y como es tan perezoso como para…",
          "contras": "- Se distrae demasiadoooooo - Es extremadamente desordenado y no como tal con las notas sino en como lleva los temas como \"explica\" y demás",
          "periodo": "2025-2",
          "calificacion": 3.5,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Jaime Alberto Rios Motta",
        "slug": "jaime-alberto-rios-motta",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.02,
        "notaPromedio": 4.08,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Personalmente me fue mal con el, divaga demasiado y hace que la atención se pierda, uno tiene que traer conocimientos previos para poder sacar la materia, dura 4 clases hablando de un tema que no sale en los quices, mientras que en la clase de 1h, explica un tema importante que si va a preguntar, solo saca 3 notas en todo el semestre que corresponden a quizes.",
          "pros": "Hace recuperaciones y sube puntos pq si",
          "contras": "Divaga demasiado y explica mal",
          "periodo": "2026-1",
          "calificacion": 2,
          "dificultad": 3
        }
      }
    ]
  },
  "2015597": {
    "nombre": "Quimica De Heterociclos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015597",
    "profesores": [
      {
        "nombre": "Paola Andrea Cuervo Prado",
        "slug": "paola-andrea-cuervo-prado",
        "resenas": 27,
        "calidad": "buena",
        "calificacion": 4.56,
        "notaPromedio": 4.03,
        "resenasOcultas": 26,
        "resena": {
          "texto": "Es una excelente profesora, va despacio en las clases, esta abierta a preguntas en todo momento, abre espacios fuera de clases para resolver dudas antes de los parciales",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 4.6
        }
      },
      {
        "nombre": "Fabian Orozco Lopez",
        "slug": "fabian-orozco-lopez",
        "resenas": 22,
        "calidad": "buena",
        "calificacion": 4.2,
        "notaPromedio": 3.87,
        "resenasOcultas": 21,
        "resena": {
          "texto": "desordenado, corre mucho con las fechas, va muy rapido y no da tiempo a todos de entender",
          "pros": "intent relacionar el tema con la vida real y la carrera",
          "contras": "corre demasiado en tema",
          "periodo": "2023-2",
          "calificacion": 2,
          "dificultad": 3
        }
      },
      {
        "nombre": "Ricaurte Rodriguez Angulo",
        "slug": "ricaurte-rodriguez-angulo",
        "resenas": 23,
        "calidad": "mala",
        "calificacion": 2.67,
        "notaPromedio": 3.25,
        "resenasOcultas": 22,
        "resena": {
          "texto": "El ritmo del profesor es lento, pero busca que entendamos los temas e intentar explicar de la forma mas digerible posible, sabe mucho, pero al ir lento no puede cubrir todos los temas y deja algunos explicados a medias, además, suele ser muy cerrado a otros métodos e incluso refuta bibliografía valida. A veces no se le entiende porque habla bajo (explica como para el). En temas de actitud es paciente, tiene chistes funables pero no es mala persona y busca ayudar a los estudiantes.",
          "pros": "buena gente se discuten los porcentajes en clase explica de la forma mas digerible posible ayuda a pasar",
          "contras": "habla bajo va muy lento únicamente acepta métodos suyos",
          "periodo": "2024-2",
          "calificacion": 4,
          "dificultad": 2
        }
      },
      {
        "nombre": "Augusto Rivera Umaña",
        "slug": "augusto-rivera-umaña",
        "resenas": 23,
        "calidad": "mala",
        "calificacion": 2.32,
        "notaPromedio": 3.35,
        "resenasOcultas": 22,
        "resena": {
          "texto": "El profe es muy estricto con sus reglas. No se puede comer, hablar o siquiera tomar agua en clase sin que se enoje. El método de enseñanza es muy anticuado para una materia tan importante porque solo prioriza la memorización sin brindar herramientas de aprendizaje apropiadas ni material de apoyo porque no manda las diapositivas de clase y ni se le ocurra pensar que puede tomar fotos.",
          "pros": "Es fácil pasar la materia Parciales de a parejas No deja trabajo autónomo",
          "contras": "La clase se siente como una cárcel El método de enseñanza está mal enfocado No se aprende mucho, ni se deja alta",
          "periodo": "2025-1",
          "calificacion": 2.9,
          "dificultad": 2
        }
      }
    ]
  },
  "2015598": {
    "nombre": "Quimica De Solidos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015598",
    "profesores": [
      {
        "nombre": "Marco Fidel Suarez Herrera",
        "slug": "marco-fidel-suarez-herrera",
        "resenas": 30,
        "calidad": "regular",
        "calificacion": 3.58,
        "notaPromedio": 3.46,
        "resenasOcultas": 29,
        "resena": {
          "texto": "El profesor sabe mucho, y habla de varios temas que muchos profesores no hablarían en primer semestre. Se nota que le apasiona enseñar y te puede repetir el tema las veces que quieras, también es chévere que ponga ejercicios prácticos como experimentos ( son bien largos). Sin embargo es muy duro con las calificaciones (de los parciales), y los temas que maneja son a veces muy complicados, los parciales son difíciles y representan el 60% de la materia. Sé que hubo gente que la perdió con muy bajita nota, pero también hay personas que llevaron un promedio súper alto. Al profesor le gusta…",
          "pros": "Se aprende mucho y se pone en práctica los conocimientos. Es amable y le gusta responder a las preguntas. No tiene preferencias con nadie.",
          "contras": "Requiere de mucho estudio autónomo y no es fácil. NUNCA aproxima nota",
          "periodo": "2025-2",
          "calificacion": 3,
          "dificultad": 4.2
        }
      },
      {
        "nombre": "Gilmer Nicolas Hernandez Guarin",
        "slug": "gilmer-nicolas-hernandez-guarin",
        "resenas": 23,
        "calidad": "regular",
        "calificacion": 3.42,
        "notaPromedio": 3.97,
        "resenasOcultas": 22,
        "resena": {
          "texto": "Es un excelente docente, se preocupa porque sus estudiantes aprendan y por eso tienen muy buena pedagogía. Realiza tres parciales y un poster, el primero de estos es el más fácil. Algunas personas se refieren de el de mala manera pero en mi experiencia fue una clase excelente, a veces cuenta experiencias personales (es salado). Además, pasar es muy fáci.",
          "pros": "- Excelente persona -Excelente pedagogía -Los temas son interesantes -Parciales de acuerdo a lo visto en clase",
          "contras": "- Tiene problemas de audición, por lo que no se puede hacer ruido y se debe ser paciente -Es muy exigente con la asistencia en clase",
          "periodo": "2025-1",
          "calificacion": 4.7,
          "dificultad": 2
        }
      }
    ]
  },
  "2015599": {
    "nombre": "Quimica Estructural",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015599",
    "profesores": [
      {
        "nombre": "Johan Fabian Galindo Cruz",
        "slug": "johan-fabian-galindo-cruz",
        "resenas": 11,
        "calidad": "buena",
        "calificacion": 4.52,
        "notaPromedio": 3.98,
        "resenasOcultas": 10,
        "resena": {
          "texto": "la verdad explica bien y se preocupa por que uno parenda, eso si busque que no se ponga bravo o que no la coja con usted para montársela por que ahi va a tener todo el semestre a el encima",
          "pros": "explica bien y los parciales son faciles siempre y cuando uno haya hecho el taller que el deja",
          "contras": "es cascarrabias",
          "periodo": "2023-2",
          "calificacion": 4.7,
          "dificultad": 3.3
        }
      },
      {
        "nombre": "Kochikpa Yavi Ariman Okio",
        "slug": "kochikpa-yavi-ariman-okio",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.4,
        "notaPromedio": 3.8,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Es buen profesor, explica bien y en los parciales pregunta lo que enseña",
          "pros": "Buen profesor",
          "contras": "Es autoritario y su trato con estudiantes no es el mejor",
          "periodo": "2024-1",
          "calificacion": 4,
          "dificultad": 4
        }
      },
      {
        "nombre": "Ana Esperanza Burgos Castellanos",
        "slug": "ana-esperanza-burgos-castellanos",
        "resenas": 25,
        "calidad": "regular",
        "calificacion": 3.46,
        "notaPromedio": 3.89,
        "resenasOcultas": 24,
        "resena": {
          "texto": "Buena profesora, parciales trabajables y es la mejor opción para ver la materia",
          "pros": "Material de estudio Parciales trabajables",
          "contras": "A veces va muy rápido",
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 4
        }
      }
    ]
  },
  "2015600": {
    "nombre": "Quimica Metalorganica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015600",
    "profesores": [
      {
        "nombre": "Edwin Arley Baquero",
        "slug": "edwin-arley-baquero",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Es un profesor excelente. Tiene una excelente calidad humana y se preocupa realmente por el aprendizaje de sus estudiantes, no solo en cuanto a los conocimientos químicos sino también con las habilidades blandas que son muy importantes. En el laboratorio está siempre presto a atender las dudas y ayudar a los estudiantes con las dudas que tengan. La materia fue calificado como 20% preinforme (10% escrito y 10% seminario) y 80% informe (40% escrito y 40% seminario)",
          "pros": null,
          "contras": null,
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Ricardo Fierro Medina",
        "slug": "ricardo-fierro-medina",
        "resenas": 28,
        "calidad": "buena",
        "calificacion": 4.33,
        "notaPromedio": 3.69,
        "resenasOcultas": 27,
        "resena": {
          "texto": "La nota dependió principalmente del docente auxiliar, por lo que no se siente que estuviera muy involucrado en el lab. Pasa por los puestos preguntando pero puede llegar a ser muy intimidante por que pregunta para corchar, algo que el llama \"retar su mente\", aunque con el tiempo lo hizo menos. El 55% depende de un proyecto, y hay una sesión donde el profe ve la viabilidad de este, pero esta sesión parece más para ver si el grupo tiene algo o no, más allá de si es viable o no. Es medio insoportable si el profe lo coge entre ojos. Si bien digo esto del profe, creo que la dificultad del…",
          "pros": null,
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 2,
          "dificultad": 4.8
        }
      }
    ]
  },
  "2015675": {
    "nombre": "Introduccion A La Farmacia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015675",
    "profesores": [
      {
        "nombre": "Fleming Martinez Rodriguez",
        "slug": "fleming-martinez-rodriguez",
        "resenas": 16,
        "calidad": "buena",
        "calificacion": 4.26,
        "notaPromedio": 4.4,
        "resenasOcultas": 15,
        "resena": {
          "texto": "La clase con el se baso en historia no solo referente a farmacia sino a las ciencias de la salud, evaluaba con parciales la verdad muy sencillos y que fácilmente uno se puede cinquear, obvio había que estudiar y aprenderse algunas cosas (algunas fechas como en linea de tiempo y personajes de los que el hablo), pero así tu no sepas la respuesta exacta de la pregunta con que escribas y se note que si le pusiste cuidado el te lo vale.",
          "pros": "Parciales faciles, no califica duro, sabe mucho.",
          "contras": "A veces se desvía mucho en la historia y empieza a contar cosas que pues aunque no tienen que ver con lo que se habla pueden ser interesantes.",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 1.7
        }
      },
      {
        "nombre": "Maritza Adelina Rojas Cardozo",
        "slug": "maritza-adelina-rojas-cardozo",
        "resenas": 11,
        "calidad": "regular",
        "calificacion": 3.68,
        "notaPromedio": 4.15,
        "resenasOcultas": 10,
        "resena": {
          "texto": "Es muy buena para explicar temas difíciles y complejos, los hace muy entendibles y fáciles de abordar, no accede mucho a cambios de fechas de presentación de entregables, a pesar de ser una materia de 2 créditos se requiere un poco mas de disposición, se complementan bien los temas con los demás profesores de la asignatura, le gusta mucho la participación de los estudiantes, es buena para pescar estudiantes que no prepararon la clase o están haciendo otras cosas en clase",
          "pros": null,
          "contras": null,
          "periodo": "2022-2",
          "calificacion": 5,
          "dificultad": 4.1
        }
      },
      {
        "nombre": "Pilar Ester Luengas Caicedo",
        "slug": "pilar-ester-luengas-caicedo",
        "resenas": 8,
        "calidad": "regular",
        "calificacion": 3.46,
        "notaPromedio": 4.04,
        "resenasOcultas": 7,
        "resena": {
          "texto": "La metí ya casi terminando la carrera entonces varios temas que abordan ya son conocidos. En general las clases fue una cátedra de inducción ya que explicaba vainas como los créditos, el SIA, adiciones y cancelaciones. Si usted ya está por encima de 5to semestre puede fácilmente saltarse las 3 primeras semanas de clase (en serio, son muy aburridas para uno pero si usted es primiparo son muy necesarias). Las siguientes clases trae profesores de las distintas ramas de farmacia y al final hace un parcial de selección multiple. Califica asistencia (es mas o menos escuelera).",
          "pros": "-Nada",
          "contras": "-Nada",
          "periodo": "2025-1",
          "calificacion": 4,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Javier Eduardo Garcia Castaneda",
        "slug": "javier-eduardo-garcia-castaneda",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 3.26,
        "notaPromedio": 4.09,
        "resenasOcultas": 8,
        "resena": {
          "texto": "El módulo que dicta es terriblemente sencillo si se aprende los equivalentes, realmente la temática son 100% cosas que ya se vieron en principios de análisis químico pero \"aplicadas\" por ende es muy sencillo de entender, es bueno para explicar cosas complejas (que son pocas) pero terriblemente confuso en las sencillas y pierde tiempo explicando cosas que realmente se van a olvidar en dos semanas, es muy superficial y no sabe utilizar varios equipos de lo que tiene que dictar en la materia por ende en las prácticas se enojaba cuando no le salían bien los espectros y se desquitaba con los…",
          "pros": "Sencillo, el módulo mas sencillo de AIF en mi concepto",
          "contras": "Todo como ser humano",
          "periodo": "2025-1",
          "calificacion": 1.5,
          "dificultad": 1.5
        }
      }
    ]
  },
  "2015703": {
    "nombre": "Ingenieria Economica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015703",
    "profesores": [
      {
        "nombre": "Osman Benjamin Giovanny Vargas Rozo",
        "slug": "osman-benjamin-giovanny-vargas-rozo",
        "resenas": 34,
        "calidad": "buena",
        "calificacion": 4.71,
        "notaPromedio": 4.74,
        "resenasOcultas": 33,
        "resena": {
          "texto": "Un buen profesor, se le notan las ganas que tiene para enseñar los temas dictados, personalmente la clase muy amena, en todas las clases hace actividades relacionadas a la temática vista y de ahí saca nota, las actividades son diferentes y no tan comunes; de alguna manera u otra hacen que veas diversas maneras de plantear soluciones, da espacios para que se corrijan las notas mediante correo, es muy organizado con las notas y en general es un buen docente. Se califica mediante tres parciales y son en grupo.",
          "pros": "Organizado con las notas Trabajos en grupo (importante un buen grupo de trabajo) Actividades dinámicas Amable A veces amplia los plazos de entrega La mayoria de actividades y parciales las califica alto",
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Maria Fernanda Galarza Pedraza",
        "slug": "maria-fernanda-galarza-pedraza",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.62,
        "notaPromedio": 4.28,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Es una becaria joven y buena. Da una clase muy correcta con una estructura ordenada con la que uno no se pierde. Es buena respondiendo a preguntas y, si logra ponerle atención, va a entender todos los temas. El único problema son las diapositivas cargadas de texto excesivamente, además de que puede volverse monótona y cansona, aunque bueno, quizás eso es porque era a las 7, y ver ingeco a las 7 de la mañana no inspira a nadie. Con ella se puede cinquear sin mucho problema.",
          "pros": "Clara en las explicaciones Ordenada Realiza ejercicios y deja trabajos sencillos. Muy laxa con las calificaciones y parchada",
          "contras": "Diapositivas que son un poco un infierno Se enreda haciendo los ejercicios. :p Si es a las 7, puede ser aburrida.",
          "periodo": "2025-2",
          "calificacion": 4.5,
          "dificultad": 2.1
        }
      },
      {
        "nombre": "Julio Cesar Cañon Rodriguez",
        "slug": "julio-cesar-cañon-rodriguez",
        "resenas": 20,
        "calidad": "buena",
        "calificacion": 4.43,
        "notaPromedio": 4.2,
        "resenasOcultas": 19,
        "resena": {
          "texto": "el profe se me hace todo tierno, las clase son muy normales, el leer diapositivas y asi y ya no es dificil la materia, todo se trata de hacer un proyecto y ya (escoja un buen grupo y todo va saliendo bien) no es tan regalado con las notas pero pues nada grave hay que asistir a clase, porque hay un punto donde nadie va y el empieza a tomar asistencia",
          "pros": "buena gente",
          "contras": "aburrida la clase ( tipica clase donde se hacen trabajos)",
          "periodo": "2026-2",
          "calificacion": 4,
          "dificultad": 2.6
        }
      },
      {
        "nombre": "Fernando Guzman Castro",
        "slug": "fernando-guzman-castro",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.25,
        "notaPromedio": 4.43,
        "resenasOcultas": 5,
        "resena": {
          "texto": "El profesor es amable, explica bien los temas y califica suave. Se toma el tiempo que haga falta para volver a explicar conceptos fundamentales. La clase es fácil, las calificaciones salen de listas de ejercicios sencillos que se hacen en grupo, de algunos ejercicios individuales, un par de ejercicios centrados en el uso de excel, de los parciales, que son como mucho de 4 puntos y siempre sobre conceptos explicados; y de un semi proyecto final que consiste en aplicar varios de los temas vistos en un trabajo con \"datos reales\".",
          "pros": "Sabe explicar los temas. Da muchos ejemplos. Es organizado y cumple con los horarios. Es amable con los estudiantes. Resuelve dudas sin problema. Permite usar excel para solucionar los talleres y parciales.",
          "contras": "Avanza lento. Los temas solo los explica a partir de capítulos de su libro o páginas de otros libros, lo que no es muy vistoso y llega a ser aburrido.",
          "periodo": "2021-10 (virtual)",
          "calificacion": 4.7,
          "dificultad": 3
        }
      },
      {
        "nombre": "Diego Alejandro Hernández Castañeda",
        "slug": "diego-alejandro-hernandez-castaneda",
        "resenas": 6,
        "calidad": "regular",
        "calificacion": 3.83,
        "notaPromedio": 4.13,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Es un excelente profesor, siempre está dispuesto a resolver dudas y en su enfoque prioriza cosas mucho más relevantes como el trabajo en equipo y Networking, más allá de las temáticas tratadas en la asignatura.",
          "pros": "Explicaciones claras y sencillas. No molesta por la asistencia. Todo el material de clase está en el Drive, con el libro puede prepararse perfectamente. Prioriza un enfoque laboral y de la vida real. Casi nunca se…",
          "contras": "No se usa ninguna herramienta informática, para una asignatura como Ingeco podría mejorar. A veces corre mucho porque tiene otras actividades u ocupaciones, es mejor que alguna duda o novedad se la comunique…",
          "periodo": "2025-2",
          "calificacion": 4.5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Diego Fernando Hernandez",
        "slug": "diego-fernando-hernandez",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 3.83,
        "notaPromedio": 3.6,
        "resenasOcultas": 3,
        "resena": {
          "texto": "el profesor es una buena persona y se le nota que le gusta enseñar. Lo que daño la experiencia del curso es que saco demasiadas notas era como un taller una semana un quiz en la otra un excel en la otra un reto en la otra un parcial en la otra y taller un día antes del parcial. Entonces eso si daño la experiencia del curso porque los Estudiantes que tomamos esta materia la mayoría estamos en ingenierías diferentes a ingeniería industrial y en lo general no tenia tiempo para dedicar tanto trabajo a una materia que se supone iba a ser menos pesada que las disciplinares de mi carrera. me hubiera…",
          "pros": "quiere que los estudiantes aprendan siempre esta atento a resolver dudas buena actitud todo el semestre cambio los porcentajes de los parciales para ayudar a pasar a los estudiantes porque el segundo parcial si fue una…",
          "contras": "le toca poner mucho estudio autónomo a la materia muchas quites, talleres y parciales (hubiera sido mejor 3 parciales y 4 talleres, sin los quizes).",
          "periodo": "2023-1",
          "calificacion": 3.8,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Jorge Armando Moreno Agudelo",
        "slug": "jorge-armando-moreno-agudelo",
        "resenas": 3,
        "calidad": "mala",
        "calificacion": 1.67,
        "notaPromedio": 2.6,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Es innecesariamente difícil para ser ingeco pero si te gustan los retos y la economía, mírala con él. Si te molestan los gritos, chistes malos y alguna falta de respeto, sal de ahí soldado, sino adelante. Si puedes ver Ingeco o lo que sea que este dando otro semestre, esa será la mejor opcion para ti. Si eres estudiante de ing, lo peor de ingeco con este profesor es que aparte de dificil de pasar, las cosas que enseña no están actualizadas a la realidad de la economía y al ser solo economista no ve sus grandes carencias, no es su culpa quizá, solo que aún así te enseñará mal las cosas super…",
          "pros": "Aprendes muchisimo de ingeco, aprendes autocontrol, enseña muchisima economia(aunque siendo sinceros no esta capacitado para decir muchas de las cosas que enseña entonces cuidado con aplicarlo todo al pie de la letra),…",
          "contras": "Inecesariamente dificil, mala persona, falta el respeto, duro al calificar, parciales imposibles, no pasas ni con IA,",
          "periodo": "2024-1",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Juan Pablo Castrellon Torres",
        "slug": "juan-pablo-castrellon-torres",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Es una chimba de profesor: explica bien, uno le aprende bastante, es buena gente, carismático. Eso sí, sus parciales y trabajos son duros pero valen la pena.",
          "pros": "Si ve que uno le trabaja le ayuda.",
          "contras": "En el semestre se pueden perder unas dos clases por sus compromisos.",
          "periodo": "2017-10",
          "calificacion": 4.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Miguel Andres Garzon Ramirez",
        "slug": "miguel-andres-garzon-ramirez",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es un excelente profesor, se esfuerza demasiado porque los estudiantes adquieran un conocimiento general sobre la ingeniería económica y cómo se puede adquirir un punto de vista critico ante la sociedad. Siempre trata de inculcar los valores morales de un profesional y da ejemplos de su experiencia para ilustrar los temas de la clase. Cuando vi con el no me dejo proyecto final. Para mí es una de los mejores profesores con los que he tenido clase. Es my decente ! lo recomiendo demasiado. enseña muchas cosas de excel tal vez no muy profundas pero lo intenta, trata de dividir cada semana en…",
          "pros": "Califica justamente, se puede dejar alta si usted hace todos los trabajos. Siempre esta abierto a responder dudas.",
          "contras": "Los talleres son un poco largos y requieren tiempo.",
          "periodo": "2019-20",
          "calificacion": 5,
          "dificultad": 5
        }
      }
    ]
  },
  "2015709": {
    "nombre": "Comunicacion Oral Y Escrita",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015709",
    "profesores": [
      {
        "nombre": "Karen Johanna Castelblanco Villamil",
        "slug": "karen-johanna-castelblanco-villamil",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.9,
        "notaPromedio": 4.6,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Ver comunicación oral y escrita con la profe Karen es lo mejor. La materia se centra en un ensayo autobiográfico (Cualquier experiencia personal). Este ensayo a mí personalmente me ayudó a conocer muchísimo más sobre mi situación y algunas cosas que viví por lo que me contribuyó bastante personalmente. Las clases son muy dinámicas y la profe es muy linda con sus estudiantes. La materia se deja alta si se entrega todo (en mi semestre fueron 5 entregas y todas se basaban en el ensayo autobiográfico, otras notas aparte que son talleres en clase dinámicos, como debates, que en conjunto es un 25%…",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 4.8,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Diego Alejandro Ramírez Bonilla",
        "slug": "diego-alejandro-ramírez-bonilla",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.85,
        "notaPromedio": 4.75,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Como ya lo han dicho se adaptó muy bien a la virtualidad, la materia es sencilla siempre y cuando sea participativo y entregue todo. Él es muy parcial y respeta los diversos puntos de vista, hace lo posible porque cada clase sea amena y deja lecturas bastante interesantes, si alguna lectura es compleja él lo acepta.",
          "pros": "Organizado en classroom Comprensivo Clases dinámicas",
          "contras": "Clases los festivos",
          "periodo": "2020-20 (virtual)",
          "calificacion": 4.9,
          "dificultad": 5
        }
      },
      {
        "nombre": "Carlos Andrés Baquero Salamanca",
        "slug": "carlos-andrés-baquero-salamanca",
        "resenas": 19,
        "calidad": "buena",
        "calificacion": 4.72,
        "notaPromedio": 4.56,
        "resenasOcultas": 18,
        "resena": {
          "texto": "MUY BUENO (lastima la asistencia) Es un amor de profesor, se disfrutan las clases. Casi todo es grupal (talleres, exposiciones, ensayos, de todo) lo que puede ser un pro o contra. Toma asistencia aunque es un poquito flexible con eso (perdi por fallas pero me la salvo por misericordioso) aunque no se confie con el tema de fallas. Es muy facil y no profundiza en temas, a veces no enseña lo que tiene que enseñar o no con la profunidad que se espera. Parece profesor de colegio",
          "pros": "> Todo es trabajo en grupo > Muy pedagogico (parece profesor de colegio) > Facil sacar 5 > Se disfrutan las clases > Flexible y condescendiente",
          "contras": "> Todo es trabajo en grupo > Pide asistencia > Los temas se ven muy por encima, no hay profundiad",
          "periodo": "2024-2",
          "calificacion": 4.5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Paul William Cifuentes Velasquez",
        "slug": "paul-william-cifuentes-velasquez",
        "resenas": 38,
        "calidad": "regular",
        "calificacion": 3.7,
        "notaPromedio": 4.17,
        "resenasOcultas": 37,
        "resena": {
          "texto": "Siempre llega tarde y re tarde, es un perezoso a la hora de dar clase. Le vale 5 todo",
          "pros": "es tan fresco que no le importa nada",
          "contras": "todas las anteriores",
          "periodo": "2024-1",
          "calificacion": 1.5,
          "dificultad": 2.9
        }
      },
      {
        "nombre": "Oscar Yesid Zabala Sandoval",
        "slug": "oscar-yesid-zabala-sandoval",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Excelente profesor y excelente persona. Me gustaban muchos sus clases y los datos interesantes que suele dar. Es muy paciente y siempre ayuda si se tienen dudas en los escritos, hace las correcciones a tiempo y es muy justo calificando.",
          "pros": null,
          "contras": null,
          "periodo": "2018-10",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Ivonne Rocio Donado Kerguelen",
        "slug": "ivonne-rocio-donado-kerguelen",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "La profesora, no negando su procedencia, es muy relajada y aveces parece perder el interés por la clase llegando incluso a no dar clase por partidos de Colombia. Ella sabe mucho, lo orienta a uno en la elaboración textual pero su falta de seriedad y comentarios un poco pasados (hombres), no la dejan ser una buena docente",
          "pros": "- Es fácil pasar con ella - Si uno sabe como hablarle, es de gran ayuda para mejorar redacción",
          "contras": "- Es muy vaga - Es pasada con comentarios",
          "periodo": "2013-10",
          "calificacion": 3,
          "dificultad": 2
        }
      }
    ]
  },
  "2015718": {
    "nombre": "Introduccion A La Ingenieria Quimica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015718",
    "profesores": [
      {
        "nombre": "Ruben Dario Godoy Silva",
        "slug": "ruben-dario-godoy-silva",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 4.62,
        "notaPromedio": 4.15,
        "resenasOcultas": 12,
        "resena": {
          "texto": "Si no amas la carrera con este profe definitivamente no es lo tuyo. Es un profesor muy amable, motiva cuando enseña, es apasionado por su carrera y lo contagia, te motiva a ir más allá, puedes hacer preguntas sin miedo a que te vaya a ignorar o a tratar despectivamente",
          "pros": "Sabe lo que enseña Motiva a seguir adelante Accesible para preguntas sobre proyecto No te deja dormir en clase",
          "contras": "No tiene",
          "periodo": "2022-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Hugo Martin Galindo Valbuena",
        "slug": "hugo-martin-galindo-valbuena",
        "resenas": 28,
        "calidad": "buena",
        "calificacion": 4.33,
        "notaPromedio": 4.32,
        "resenasOcultas": 27,
        "resena": {
          "texto": "La vida de un crítico es sencilla en muchos aspectos, arriesgamos poco, y tenemos poder sobre aquellos que ofrecen su trabajo y su servicio a nuestro juicio. Prosperamos con las críticas negativas – divertidas de escribir y leer- pero la triste verdad que debemos afrontar, es que en el gran orden de las cosas, cualquier basura tiene más significado que lo que deja ver nuestra crítica. Pero en ocasiones el crítico si se arriesga cada vez que descubre y defiende algo nuevo… el mundo suele ser cruel con el nuevo talento, las nuevas creaciones… lo nuevo, necesita amigos. Este semestre experimenté…",
          "pros": "Es chevere",
          "contras": null,
          "periodo": "2022-2",
          "calificacion": 5,
          "dificultad": 2.7
        }
      },
      {
        "nombre": "Luis Ignacio Rodriguez Varela",
        "slug": "luis-ignacio-rodriguez-varela",
        "resenas": 16,
        "calidad": "buena",
        "calificacion": 4.13,
        "notaPromedio": 4.18,
        "resenasOcultas": 15,
        "resena": {
          "texto": "Muy amable y tierno, enseña con pasión, pero sus clases suelen ser monotonas y aburridas. Le falta dinamismo a su forma de enseñar, aún así deja trabajos fáciles y permite el dialogo en caso de tener malas notas. Como persona es un muy bonito ser humano muy experimentado en su campo.",
          "pros": null,
          "contras": null,
          "periodo": "2024-1",
          "calificacion": 4,
          "dificultad": 1.6
        }
      },
      {
        "nombre": "Mario Enrique Velasquez Lozano",
        "slug": "mario-enrique-velasquez-lozano",
        "resenas": 27,
        "calidad": "mala",
        "calificacion": 2.59,
        "notaPromedio": 3.9,
        "resenasOcultas": 26,
        "resena": {
          "texto": "El profe Mario es amable, pero la clase se hace muy aburrida, los parciales suelen ser manejables, Hace Quices (cáncer puro), y las exposiciones me parecen una buena dinámica pues ayudan a subir la nota, y si usted le pone atención a sus compañeros probablemente aprenda algo.",
          "pros": "-Parciales manejables -Exposiciones",
          "contras": "-Quices Horrible esa vaina te puede bajar terriblemente la nota o caso contrario subir. -La clase es súper aburrida",
          "periodo": "2026-2",
          "calificacion": 3,
          "dificultad": 4.1
        }
      },
      {
        "nombre": "Marcelo Enrique Riveros Rojas",
        "slug": "marcelo-enrique-riveros-rojas",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Este profesor decidió retirarse en 2018-II, luego las referencias aquí expuestas hacen parte del histórico. Su metodología fue apropiada, pues insistía en dar una mirada general al significado de termodinámica. Recogía constantemente ejemplos, analogías de otros cursos e, inclusive, otras disciplinas para dejar en claridad los temas. Si bien su edad implicaba ejemplos y lenguaje de tiempos pretéritos, aún eran comprensibles muchas de sus explicaciones.",
          "pros": "Un ejemplo a seguir.",
          "contras": "Decidió retirarse.",
          "periodo": "2018-20",
          "calificacion": 4.7,
          "dificultad": 3
        }
      },
      {
        "nombre": "Maria Eugenia Calderon",
        "slug": "maria-eugenia-calderon",
        "resenas": 3,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Es una profesora un poco aburrida y para nada interactiva en clase de salón, su metodología se basa en dejar lecturas acerca de la materia y realizar exposiciones; aunque sorprendió al grupo en una exposición magistral en un auditorio donde fue muy buena oradora y lo que habló fue muy interesante.",
          "pros": "Es sencillo, es colaborativa con las dudas",
          "contras": "Es aburrida y poco interactiva en clase",
          "periodo": "2018-10",
          "calificacion": 2.7,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Pedro Janer Bejarano Jimenez",
        "slug": "pedro-janer-bejarano-jimenez",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Es un excelente profesor ,siempre amable y se le nota el amor por la carrera además de que lo transmite.",
          "pros": null,
          "contras": null,
          "periodo": "2015-10",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Carlos Alberto Garzon Gaitan",
        "slug": "carlos-alberto-garzon-gaitan",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2015734": {
    "nombre": "Programacion De Computadores",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015734",
    "profesores": [
      {
        "nombre": "Edwin Camilo Cubides Garzon",
        "slug": "edwin-camilo-cubides-garzon",
        "resenas": 15,
        "calidad": "regular",
        "calificacion": 3.94,
        "notaPromedio": 4.18,
        "resenasOcultas": 14,
        "resena": {
          "texto": "Siempre contesta todas las preguntas, se deja hablar, los talleres de los jueves son bastante trabajables, se puede pasar, se esfuerza por que le entiendan.",
          "pros": "Es amable y siempre contesta preguntas. Se preocupa por que aprendas. Ayuda si ve que todos van muy mal.",
          "contras": "Se enfoca mas en la parte matematica a mi me gustan mas los problemas aplicados.",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jonatan Gomez Perdomo",
        "slug": "jonatan-gomez-perdomo",
        "resenas": 36,
        "calidad": "regular",
        "calificacion": 3.81,
        "notaPromedio": 4.08,
        "resenasOcultas": 35,
        "resena": {
          "texto": "El man sabe mucho, muchísimo y es un parche, aproveche para preguntarle que el siempre tiene algo para comentar",
          "pros": "Sabe mucho Explica bien Se interesa que aprenda Da material para que estudie Tiene anécdotas e historias de lo mas curiosas",
          "contras": "Puede ser muy humiliatibo, tomeselo como humor y parchese Solo saca una nota en todo el semeste Nunca termino el hijueputa cuento de Aquiles y la tortuga",
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Juan Carlos Torres Pardo",
        "slug": "juan-carlos-torres-pardo",
        "resenas": 31,
        "calidad": "regular",
        "calificacion": 3.63,
        "notaPromedio": 4.06,
        "resenasOcultas": 30,
        "resena": {
          "texto": "Este profesor es un parche, es re duro en el tema, es amigable, una persona accesible y compresiva; eso si, es un desordenado de los de cuidado, tómele captura y foto a todo lo que entrega que el man deja todo a ultimo minuto",
          "pros": "Sabe muchísimo Una clase util para el diseño Metodología justa Buenas aneotas y charlas Lo motiva a estudiar",
          "contras": "*DESORDENADO* Sube notas a ultimo minuto Si el monitor falla tenga por seguro que su nota la sabra el día siguiente cierre de notas",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Camilo Alejandro Alaguna Córdoba",
        "slug": "camilo-alejandro-alaguna-córdoba",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "mal profesor, explica muy desordenado, deja muchos vacíos, pero es muy bueno en su tema y no califica duro",
          "pros": null,
          "contras": null,
          "periodo": "2017-20",
          "calificacion": 3,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Camilo Ernesto Lopez Guarin",
        "slug": "camilo-ernesto-lopez-guarin",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Excelente profesor, sabe mucho sobre temas de programación y demás.",
          "pros": "Sabe dictar muy bien todos los temas y como pocos profesores en la carrera, se hace entender.",
          "contras": "Quizás las clases son un poco monótonas y planas.",
          "periodo": "2014-10",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Fabian Leonardo Ramirez Sandino",
        "slug": "fabian-leonardo-ramirez-sandino",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Manuel Leonardo Mosquera Palomino",
        "slug": "manuel-leonardo-mosquera-palomino",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es un buen profesor, explica bien aunque avanza un poco rápido con el tema. Es bastante abierto para responder dudas y valora mucho el esfuerzo por aprender de los estudiantes, lo cual se ve reflejado con puntos y ayudas en las notas.",
          "pros": "Explica bien, envía las diapositivas de la clase, ofrece ayudas si tiene dificultades para aprender.",
          "contras": null,
          "periodo": "2016-20",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Daniel Camilo Osorio Hurtado",
        "slug": "daniel-camilo-osorio-hurtado",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Judy Marcela Moreno Ospina",
        "slug": "judy-marcela-moreno-ospina",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2015800": {
    "nombre": "Estructura De La Sociedad Moderna I",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015800",
    "profesores": [
      {
        "nombre": "Camilo Ochoa Guzman",
        "slug": "camilo-ochoa-guzman",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.93,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Las clases dictadas por el profesor Camilo son excelentes, los temas son interesantes, las lecturas no son muy largas, y en cada clase hay un debate muy amplio de los temas, el hilo conductor es claro y el material audiovisual está bien pensado. También vi Sociedad Colombiana S. XX con él, y aunque también es una buena clase, creo que lo recomiendo más para estructura, el análisis y la forma en que el profesor enlaza los temas de la clase es sumamente interesante.",
          "pros": null,
          "contras": "Es clave realizar las lecturas para las clases, de lo contrario uno puede quedarse un poco perdido en muchas discusiones. Saca muy pocas notas y aunque los parciales son con apuntes en mano a veces son un poco densos",
          "periodo": "2022-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Javier Saenz Obregon",
        "slug": "javier-saenz-obregon",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 4.65,
        "notaPromedio": 4.34,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Es un profesor muy bueno, sabe mucho, las clases que he visto con el siempre son interesantes y se aprende mucho.",
          "pros": "Se aprende mucho y saca tu cabeza de la zona de confort",
          "contras": "Deja muchas reseñas y aveces da miedo hablar porq ue es un poco intimidante.",
          "periodo": "2022-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Dario Hernán Vásquez Padilla",
        "slug": "dario-hernan-vasquez-padilla",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.5,
        "resenasOcultas": 0,
        "resena": {
          "texto": "En el momento en que vi la materia (2025-1) el profesor estaba recién entrado en el Departamento; a pesar de ello... Es una persona comprometida con sus clases y que maneja los temas de los cuales habla. Si su interés son los temas sobre la raza, etnia o sexualidad este es su profesor. Tiene una motivación impresionante por el tema de la raza, a grado tal de enseñar diferentes definiciones de esta dentro de la asignatura. El detalle con él es que, por lo menos para el 2025-1 daba a penas la mitad de las clases. Pues, una era clase de él y otra era la exposición de algunos estudiantes (y…",
          "pros": "Muy humano, puede uno hablar con él. Con algo de esfuerzo, se saca buena nota. Interés claro en temas de raza. No hace parciales",
          "contras": "Demasiada exposición estudiantil A veces no toma las riendas de la clase, y los estudiantes no lo toman en serio.",
          "periodo": "2025-1",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Juan Carlos Celis Ospina",
        "slug": "juan-carlos-celis-ospina",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.32,
        "notaPromedio": 4.6,
        "resenasOcultas": 4,
        "resena": {
          "texto": "El profesor no exige demás, es flexible con las clases y maneja el tema casi que a la perfección, a pesar de ser una clase en la que la pedagogia se basa en el docente hablando 2 horas sin parar, este profesor no lo hace de forma desgastante y/o aburrida, si bien es un buen docente algunos temas podrian estar mejor organizados, además, muchas veces fue impuntual",
          "pros": "Buen dominio del tema Flexible",
          "contras": "Impuntual",
          "periodo": "2023-1",
          "calificacion": 4.6,
          "dificultad": 3
        }
      },
      {
        "nombre": "Yuri Jack Gomez Morales",
        "slug": "yuri-jack-gomez-morales",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.13,
        "notaPromedio": 4.2,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Es un buen profesor; sabe bastante sobre investigación, proporciona herramientas como MaxQDA, y se puede negociar cosas en su clase. Como desventajas, puede ser desordenado con el tiempo, porque cumple muchas obligaciones.",
          "pros": null,
          "contras": null,
          "periodo": "2024-2",
          "calificacion": 4.7,
          "dificultad": 4
        }
      }
    ]
  },
  "2015979": {
    "nombre": "Analisis Del Discurso I",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015979",
    "profesores": [
      {
        "nombre": "Juan Sebastian Cruz Camacho",
        "slug": "juan-sebastian-cruz-camacho",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.5,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Es un gran docente, sus clases son dinámicas y se aprende riendo. Se nota el interés que tiene porque sus estudiantes aprendan. Problematiza los textos y los autores y ello es muy enriquecedor.",
          "pros": null,
          "contras": null,
          "periodo": "2022-2",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "William Enrique Sanchez Amezquita",
        "slug": "william-enrique-sanchez-amezquita",
        "resenas": 2,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Es un profesor que se preocupa por los estudiantes, desea que ellos aprendan y logren grandes cosas. Pero a pesar de sus ganas de enseñar, sus clases tienden a ser un poco aburridas, se desvía del tema y al esperar que todos los estudiantes aprendan se tiende a atrasar en los temas. y es difícil alcanzar una buena nota con él.",
          "pros": "Atiende en cualquier momento. Es amable respondiendo cualquier tipo de preguntas. Tiene gran conocimiento.",
          "contras": "Se desvía fácilmente del tema. Se sienten las clases repetitivas y a veces sin sentido. A la mayoría de los estudiantes les disgusto la clase. Se retrasa en los temas.",
          "periodo": "2019-20",
          "calificacion": 3,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Leonardo Gil Gómez",
        "slug": "leonardo-gil-gómez",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Yessica Andrea Chiquillo Vilardi",
        "slug": "yessica-andrea-chiquillo-vilardi",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Tiene un sistema de calificación pésimo, sesgo clarísimo, le gusta la lambonería y no ayuda a quien no se le dé la gana",
          "pros": "Trata de que las clases sean dinámicas",
          "contras": "Feminazi No sabe calificar Odiosa Prepotente",
          "periodo": "2019-10",
          "calificacion": 1.8,
          "dificultad": 3
        }
      },
      {
        "nombre": "Guillermo Andres Castillo Quintana",
        "slug": "guillermo-andres-castillo-quintana",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Juan Sebastian Diaz Arboleda",
        "slug": "juan-sebastian-diaz-arboleda",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Neyla Graciela Pardo Abril",
        "slug": "neyla-graciela-pardo-abril",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2016007": {
    "nombre": "Fundamentos De Administracion",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016007",
    "profesores": [
      {
        "nombre": "Lina María Ramírez ÁNgel",
        "slug": "lina-maría-ramírez-ángel",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.4,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Un verdadero amor de profe",
          "pros": "Bastante Amable y Gentil Perfecto manejo del tema Clases superinteresantes Siempre dispuesta a ayudar a los estudiantes Actividades entretenidas",
          "contras": "Lecturas bastante largas",
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "John Alexis Parra",
        "slug": "john-alexis-parra",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 4.88,
        "notaPromedio": 4.75,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Muy buen profesor. Métala con este profesor que la materia le queda alta",
          "pros": "Dinamico Respetuoso .",
          "contras": "Ninguno.",
          "periodo": "2020-10 (virtual)",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Liliana Alejandra Chicaiza Becerra",
        "slug": "liliana-alejandra-chicaiza-becerra",
        "resenas": 21,
        "calidad": "buena",
        "calificacion": 4.7,
        "notaPromedio": 4.35,
        "resenasOcultas": 20,
        "resena": {
          "texto": "El problema con Chicaiza es que deja su curso a cargo de Nicolás Smith Sarmiento Caro, y el tipo es un completo fastidio, pero eso sí, en honor a la verdad, se nota su dedicación al curso y da oportunidades de subir la nota.",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 2.9,
          "dificultad": 3.9
        }
      },
      {
        "nombre": "katherine Maldonado Romero",
        "slug": "katherine-maldonado-romero",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.62,
        "notaPromedio": 4.54,
        "resenasOcultas": 4,
        "resena": {
          "texto": "La profe es increíble, es amor completo. Explica todo de forma chevere. Eso sí, hay que leerle un montón, pero un montóooon. Deja quices orales o escritos sobre las lecturas que pueden ser o un 5 o un 0 fácil, depende de que tanta atención puso al leer. Sus parciales son relativamente sencillos, y toca prepararse re bien para las expos. Acá va a aprender apa.",
          "pros": "Un amor de profe. Explicas todo súper.",
          "contras": "Mucha lecturas y quices feos:(",
          "periodo": "2022-1",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Luis Fernando Moscoso Gaviria",
        "slug": "luis-fernando-moscoso-gaviria",
        "resenas": 18,
        "calidad": "buena",
        "calificacion": 4.61,
        "notaPromedio": 4.16,
        "resenasOcultas": 17,
        "resena": {
          "texto": "En términos generales es muy buen profesor, integra muy bien los temas de la clase con ejemplos de la vida y temas de otras materias.",
          "pros": "Flexible con las entregas Muy claro Amigable",
          "contras": "Demasiado exigente con las lecturas Hace grupos de a 7 y si usted no conoce a nadie posiblemente le toque muy duro",
          "periodo": "2021-10 (virtual)",
          "calificacion": 4.2,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Rafael Orlando Suarez Eugenio",
        "slug": "rafael-orlando-suarez-eugenio",
        "resenas": 14,
        "calidad": "mala",
        "calificacion": 3.49,
        "notaPromedio": 4,
        "resenasOcultas": 13,
        "resena": {
          "texto": "Sus clases no tienen que ver con lo que sale en los parciales, depende totalmente de las lecturas que deja (que muchas veces son aburridas y largas). Sinceramente, si sientes que esta materia es fundamental en tu carrera, no te recomiendo este profesor",
          "pros": "Se puede dejar alta si la estas viendo virtual Amable El monitor puede ayudar con explicaciones Se puede conversar de temas interesantes",
          "contras": "Sus clases prácticamente están de decoración No usa diapositivas ni recurso alguno mas que su voz Lecturas tediosas Aburrido la mayoría del tiempo",
          "periodo": "2021-10 (virtual)",
          "calificacion": 3,
          "dificultad": 3
        }
      },
      {
        "nombre": "Axel Ricardo Arias Contreras",
        "slug": "axel-ricardo-arias-contreras",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 3,
        "resena": null
      },
      {
        "nombre": "Julio Enrique Foliaco Gamboa",
        "slug": "julio-enrique-foliaco-gamboa",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Ramon Eduardo Gutierrez Rodriguez",
        "slug": "ramon-eduardo-gutierrez-rodriguez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2016008": {
    "nombre": "Fundamentos De Contabilidad Financiera",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016008",
    "profesores": [
      {
        "nombre": "Henry Jose Gomez Gutierrez",
        "slug": "henry-jose-gomez-gutierrez",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.6,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Es alguien muy comprometido y apasionado por explicar los temas, las clases son muy dinámicas y divertidas, el se integra de manera buena con los estudiantes, reconoce los que quieren aprender y en ellos se centra durante sus clases. aunque es muy fácil llevarla en alto mientras se tenga la dedicación de estudiar antes de sus clases, el no quiere o no le gusta la materia, también es fácil pasarla, los talleres son de grupos, exposiciones sencillas, los monitores siempre atentos a las dudas. los parciales son abiertos y largos pero el esta dispuesto a ayudarlo durante el mismo, el es un apoyo…",
          "pros": "dinámico no califica duro ayuda en los parciales no lleva asistencia comprensivo y empatico conocimiento amplio bonificaciones si uno participa",
          "contras": "parciales abiertos y largos proyecto de trabajo bastante mal estructurado no cumple a raja tabla el cronograma academico. puntualidad",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Ruth Alejandra Patiño Jacinto",
        "slug": "ruth-alejandra-patiño-jacinto",
        "resenas": 24,
        "calidad": "buena",
        "calificacion": 4.73,
        "notaPromedio": 4.28,
        "resenasOcultas": 23,
        "resena": {
          "texto": "No hay duda que es de las mejores docentes de la Facultad, su pedagogía y pasión por la enseñanza se nota en cada clase. La nota depende de 2 parciales en donde si usted estudia los temas, es fácil pasar. (Son Teoricos y Prácticos), Talleres y el Trabajo final. Lo más complejo es el trabajo final ya que es de a parejas y si usted no tiene un buen compañero se le va a dificultar. Es importante que vayan adelantando el proyecto con tiempo porque es largo y es necesario tener bases.",
          "pros": "Se aprende Clases Dinámicas Talleres para afianzar conocimientos",
          "contras": "Muchas veces las calificaciones no las hace ella si no lo monitores.",
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Geraldine Stephania Contreras Cano",
        "slug": "geraldine-stephania-contreras-cano",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 4.55,
        "notaPromedio": 4.55,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Es de las mejores profesoras y personas que se pueden encontrar, es increíblemente amable y explica muy bien. Entre los parciales que hace, hay de dos tipos: uno práctico (el cual es en parejas o grupos de 3) y uno teórico, que es individual. Es super comprensiva, se deja hablar siempre y se nota el interés en que uno aprenda. No tiene ningún problema en repetir las veces que sea necesario. La monitoria puede resultar tediosa y más por el horario, pero sí o sí vayan, porque es nota; las personas a las que les quedó bajita la nota este semestre fue por no ir a monitoria. De resto, pasarla alta…",
          "pros": "Es un amor de persona. Se le entiende. Se encarga de que la materia no sea pesada. Da bonos. Está muy bien preparada.",
          "contras": "El horario La monitoria puede parecer innecesaria.",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Cindy Paola Jaimes Martínez",
        "slug": "cindy-paola-jaimes-martinez",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 4.25,
        "notaPromedio": 4.72,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Es una profesora muy amable y flexible. La dinámica de la clase se centra en la proyección de una serie de presentaciones en power point que ella va explicando, suele terminar las clases en 1 hora, las actividades/talleres que deja son sumamente sencillos y los parciales los realiza en modalidad virtual con un tiempo de más de 24 horas para responder. Realmente es una materia que se puede dejar muy alta con ella sin necesidad de mucho esfuerzo",
          "pros": "- Fácil de dejar alta. - No demanda mucho esfuerzo.",
          "contras": "No comparte las diapositivas que utiliza entonces hay que estar tomando fotos todo el tiempo para tener todo el material.",
          "periodo": "2023-1",
          "calificacion": 4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Claudia Lucia Niño Galeano",
        "slug": "claudia-lucia-niño-galeano",
        "resenas": 28,
        "calidad": "buena",
        "calificacion": 4.2,
        "notaPromedio": 4.16,
        "resenasOcultas": 27,
        "resena": {
          "texto": "La profesora puede que se pierda en la explicación de los temas o se vaya alejando del tema de la clase principal, pero aun así se entiende lo que quiere decir y explicar, además fue un poco flexible con las notas y los parciales, que toca saber leer y tener cuidado, porque tienes cascaritas que lo hacen diferentes a los demás.",
          "pros": "1) parciales sencillos si estudias lo suficiente, no exige tanto como otros.",
          "contras": "1) a veces suele llegar tarde a las clases, de 10 a 20 minutos 2) se desvía mucho en explicaciones de casos",
          "periodo": "2025-2",
          "calificacion": 4.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Diego Alexander Quintanilla Ortiz",
        "slug": "diego-alexander-quintanilla-ortiz",
        "resenas": 15,
        "calidad": "regular",
        "calificacion": 3.91,
        "notaPromedio": 3.75,
        "resenasOcultas": 14,
        "resena": {
          "texto": "El man es buena gente, o eso hace creer almenos, explica bien pero se da garra con los parciales",
          "pros": "Explica bien, Da soluciones, es \"amable\"",
          "contras": "Parciales casi imposibles",
          "periodo": "2025-2",
          "calificacion": 3.3,
          "dificultad": 4.4
        }
      },
      {
        "nombre": "Carlos Eduardo Donoso Sastre",
        "slug": "carlos-eduardo-donoso-sastre",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 3.48,
        "notaPromedio": 4.45,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Me gustó al metodología en la clase, aunque era teórica, los ejemplos y la línea para entender la auditoría me pareció adecuada y conforme a la actualidad, se complementa con lo que debo ver el siguiente semestre, tiene explicaciones claras y la mayoría de las notas son talleres en clase",
          "pros": "Conoce el tema y tiene experiencia, lo cual lo deja con ejemplos en clase y me permite entender",
          "contras": "Se cortó el semestre por la mitad, por lo que tocó retomar en enero temas ya vistos",
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Susy Marcela Mogollón Reyes",
        "slug": "susy-marcela-mogollon-reyes",
        "resenas": 2,
        "calidad": "regular",
        "calificacion": 3.3,
        "notaPromedio": 4.5,
        "resenasOcultas": 1,
        "resena": {
          "texto": "La verdad me pareció muy buena profesora, se nota que le gusta que uno entienda los temas, pues si uno no entendía algo a ella no le molestaba volver a explicar el tema, además de que ponía ejemplos de la vida cotidiana, lo que hacia que uno entendiera mas. Lo examenes sobre conceptos si son un poco complicados, ps deja preguntas abiertas y si la información no esta completa no cuenta el punto.",
          "pros": null,
          "contras": null,
          "periodo": "2023-1",
          "calificacion": 4,
          "dificultad": 2
        }
      },
      {
        "nombre": "Freddy Armando Castaño Pineda",
        "slug": "freddy-armando-castaño-pineda",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Fue de las primeras materias que tome como electiva buscando un curso introductorio y agradable, no me quede decepcionado. Freddy es un buen docente, aunque se pase mucho usando diapositivas, logra dar temas ladrilludos de contabilidad de forma amena y la ayuda del monitor para complementar es perfecta!",
          "pros": "- Sabe como dar un curso introductorio - Su experiencia profesional juega un papel importante - Trata bien a quienes no pertenecemos a la FCE",
          "contras": "- Los temas de contabilidad son largos y complicados",
          "periodo": "2014-10",
          "calificacion": 4.5,
          "dificultad": 3.3
        }
      }
    ]
  },
  "2016058": {
    "nombre": "Atomos Y Moleculas",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016058",
    "profesores": [
      {
        "nombre": "Andres Reyes Velasco",
        "slug": "andres-reyes-velasco",
        "resenas": 11,
        "calidad": "buena",
        "calificacion": 4.86,
        "notaPromedio": 4.49,
        "resenasOcultas": 10,
        "resena": {
          "texto": "El profesor es excelente y buena gente. Las clases son de la teoría así que toca hacer las tareas y talleres que deje (que no son obligatorios) para poder estudiar porque los parciales NO son de teoría. También deja un proyecto opcional, que represente un trabajo de una hora por persona semanalmente (si puede hacerse en grupos). La materia al principio porque el primer módulo es de mecánica cuántica pero cuando se empieza a relacionar más con la carrera que es en los módulos de átomos y moléculas la materia se vuelve más agradable. Los libros guías son el Atkins y el Levine. Son tres…",
          "pros": "Explica bien. Deja tareas y proyecto opcional que sube nota al final.",
          "contras": "La nota son tres parciales de igual porcentaje. La materia es densa de por si.",
          "periodo": "2021-10 (virtual)",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Edgar Eduardo Daza Caicedo",
        "slug": "edgar-eduardo-daza-caicedo",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.01,
        "notaPromedio": 3.64,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Daza es un excelente profesor. No se la piense. Sabe muchísimo del tema, explica muy bien, las clases con él son amenas y es también muy amable. A veces es un poco tedioso que haga las demostraciones larguísimas del curso en medio de la clase, pero es parte de la materia, considero yo. Lo único malo que le encuentro a Daza es que no suele hacer demasiados ejercicios, así que uno no sabe muy bien qué estudiar para el parcial; procure, pues, hacerse con parciales viejos para poder estudiar.",
          "pros": "Explica muy bien. Es muy amable. Fue él quien diseñó el curso de Átomos y Moléculas.",
          "contras": "No se sabe bien qué estudiar para el parcial.",
          "periodo": "2025-2",
          "calificacion": 4.8,
          "dificultad": 3.7
        }
      }
    ]
  },
  "2016073": {
    "nombre": "Herencias - Una Mirada A La Historia De Las Artes",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016073",
    "profesores": [
      {
        "nombre": "Raul Cristancho Alvarez",
        "slug": "raul-cristancho-alvarez",
        "resenas": 2,
        "calidad": "regular",
        "calificacion": 3.15,
        "notaPromedio": 4.5,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Un excelente docente, demuestra que sabe sobre la temática de la clase. Nos presenta los temas como una critica a la evolución de la sociedad. Por lo general se entiende. Es respetuoso y muy amable La única evaluación del curso es un ensayo de 4 paginas en el cual debe fajarse, siga las indicaciones. Toma asistencia, al final del curso dijo que se perdía con 6 faltas, aunque no lo crea para una materia tan sencilla perdió mucha gente por eso.",
          "pros": "- Tiene material visual. - Hizo una clase extra donde quitó una falta si asistía a ella (se salvaron algunos por eso). - Comparte diapositivas y referencias.",
          "contras": "- Habla bajito (hágase adelante si le interesa).",
          "periodo": "2025-1",
          "calificacion": 4.8,
          "dificultad": 2
        }
      }
    ]
  },
  "2016139": {
    "nombre": "Musica Y Sociedad En Colombia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016139",
    "profesores": [
      {
        "nombre": "Egberto Bermudez Cujar",
        "slug": "egberto-bermudez-cujar",
        "resenas": 27,
        "calidad": "regular",
        "calificacion": 2.77,
        "notaPromedio": 3.66,
        "resenasOcultas": 26,
        "resena": {
          "texto": "Esta materia es una reverenda porquería que solo sirve para llenar la carga minima , nisiquiera se deja alta , es básicamente el profe poniendo videos y usando lenguaje técnico sobre música que cabe decir los vídeos eran en inglés ,el tipo es grosero y siempre responde con dos piedras en la mano ,los parciales y quices son jodidos , la comunicación es nula y así bombardee correos no le van a responder",
          "pros": "Sirve para llenar la carga minima",
          "contras": "Literalmente solo sirve para llenar la carga minima porque el bodrio de materia siempre tiene cupos",
          "periodo": "2025-2",
          "calificacion": 1.5,
          "dificultad": 4.1
        }
      },
      {
        "nombre": "otro otro",
        "slug": "no-recuerdo-el-nombre-pero-siempre-es-el-mismo",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2016342": {
    "nombre": "Calculo De Ecuaciones Diferenciales Ordinarias",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016342",
    "profesores": [
      {
        "nombre": "Leonardo Rendon Arbelaez",
        "slug": "leonardo-rendon-arbelaez",
        "resenas": 39,
        "calidad": "buena",
        "calificacion": 4.64,
        "notaPromedio": 3.83,
        "resenasOcultas": 38,
        "resena": {
          "texto": "Rendon es buen profesor. Es muy formal y puede intimidar un poco, pero se preocupa realmente porque todos entiendan los conceptos, y no solo aprenderse las formulas de memoria. Usualmente son 3 parciales y un supletorio para eliminar la peor nota de los parciales, la otra nota es de quices, es un quiz cada jueves, puede parecer muchos, usualmente el quita las peores 2 o 3 notas de los quices, pero si sirven resto para mantener los temas recientes. Los parciales pueden llegar a ser pesaditos, algunos temas son difíciles, pero se puede lograr dejar alta. En general, no es mal profesor, hay…",
          "pros": "Puntual",
          "contras": "La letra Supletorio una gono No perdona errores chiquitos",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 4
        }
      },
      {
        "nombre": "Martha Cecilia Moreno Penagos",
        "slug": "martha-cecilia-moreno-penagos",
        "resenas": 67,
        "calidad": "buena",
        "calificacion": 4.63,
        "notaPromedio": 4.12,
        "resenasOcultas": 66,
        "resena": {
          "texto": "M eta con ella, no se arrepentirá A prendera mucho R ealiza parciales acorde a sus notas de clase T ierna como una madre amorosa H ace quices en grupos y por moodle A yuda con material como libros o presentaciones",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Milton Armando Reyes Villamil",
        "slug": "milton-armando-reyes-villamil",
        "resenas": 56,
        "calidad": "buena",
        "calificacion": 4.57,
        "notaPromedio": 4.17,
        "resenasOcultas": 55,
        "resena": {
          "texto": "Milton zz",
          "pros": "Si eres mujer pasaste con 5 así que si eres hombre pagate una cirujía de cambio de sexo y pasas seguro Si no vas clase y te drogas sacas 2.8 Si lo llamas ton te ahorras mil Si lo llamas ton armando reyes villa, te…",
          "contras": "Si asistes y no te drogas y te esfuerzas pero no lo logras igual 2.8",
          "periodo": "2025-2",
          "calificacion": 2.8,
          "dificultad": 4
        }
      },
      {
        "nombre": "Ivon Andrea Dorado Correa",
        "slug": "ivon-andrea-dorado-correa",
        "resenas": 27,
        "calidad": "regular",
        "calificacion": 3.87,
        "notaPromedio": 3.76,
        "resenasOcultas": 26,
        "resena": {
          "texto": "Quiere que sus estudiantes aprendan y entiendan",
          "pros": "tiene pedagogía Buena profe es amable",
          "contras": "parciales demasiado largos",
          "periodo": "2022-1",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Juan Carlos Hernandez Rincon",
        "slug": "juan-carlos-hernandez-rincon",
        "resenas": 13,
        "calidad": "regular",
        "calificacion": 3.76,
        "notaPromedio": 3.6,
        "resenasOcultas": 12,
        "resena": {
          "texto": "Este profesor definitivamente no es para mi, es muy apegado a la teoría y poco a la practica; si usted le gusta el por que de la matemática y retos complejos, este profe es para usted, si no, mejor ni lo piense, va a querer cancelar a la primera semana",
          "pros": "El profesor es duro en el tema Le responde las preguntas Es relativamente accesible y negociador",
          "contras": "Su pedagogía no es para todos Demasiada teoría Se puede quedar media hora en una demostración que no tiene utilidad Tira muy duro en el parcial",
          "periodo": "2025-2",
          "calificacion": 3.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Jorge Mauricio Ruiz Vera",
        "slug": "jorge-mauricio-ruiz-vera",
        "resenas": 21,
        "calidad": "regular",
        "calificacion": 3.53,
        "notaPromedio": 3.32,
        "resenasOcultas": 20,
        "resena": {
          "texto": "Mauricio te amo jajaja. La verdad debo admitir que no aprendí mucho como me hubiese gustado. Para esto debemos entender que yo tenía clases desde las 7am y cuando llegaba a numérico mi cerebro ya estaba agotado. No obstante, debo decir que Mauricio es una persona maravillosa. Un profesor con el que daría ganas de hacer la tesis. Jamás se enfada y se deja hacer chistes. A fin de semestre le pedí si me podía ayudar con un punto en la nota final (pensé que no lo haría) pero esa misma noche vi en el SIA que sí lo había hecho. De verdad, la clave está en darla toda para los talleres en grupo. Es…",
          "pros": "Puntual. A veces terminaba las clases antes porque nos veia agotados Es super amable ¿Ya dije que es muy amable? Se deja preguntar de todo",
          "contras": "No se aprende mucho Uno se enreda entendiendo sus explicaciones",
          "periodo": "2024-2",
          "calificacion": 4,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Jose Alfredo Jimenez Moscoso",
        "slug": "jose-alfredo-jimenez-moscoso",
        "resenas": 26,
        "calidad": "mala",
        "calificacion": 3.04,
        "notaPromedio": 3.55,
        "resenasOcultas": 25,
        "resena": {
          "texto": "(Primer Libro de la Estadística, Capítulo 1) 1. En el principio, el caos reinaba sobre los datos. Los números vagaban sin sentido sobre la faz del Excel, y las planillas estaban desordenadas y vacías. 2. Y dijo el Profeta Moscoso: “Sea la Media”, y la Media fue. Y vio Moscoso que la Media era buena, y separó la Media de los valores atípicos. 3 Y llamó Moscoso a la Media “Promesa Central”, y a los valores separados llamó “Outliers”. Y fue la tarde y la mañana del primer parcial. 4. Dijo luego Moscoso: “Haya una Varianza en medio de los datos, y que esta divida las aguas de la dispersión”. 5. E…",
          "pros": "EL EVANGELIO SEGÚN SAN MOSCOSO (Libro Segundo: De las Pruebas y las Misericordias) Capítulo 1: La Rebelión de las Hojas 1. Y aconteció en el semestre 2025-2, cuando el pueblo de Moscoso se reunió en el aula santa para…",
          "contras": null,
          "periodo": "2026-2",
          "calificacion": 5,
          "dificultad": 2.3
        }
      },
      {
        "nombre": "Mohammed El Aidi",
        "slug": "mohammed-el-aidi",
        "resenas": 45,
        "calidad": "mala",
        "calificacion": 2.52,
        "notaPromedio": 2.88,
        "resenasOcultas": 44,
        "resena": {
          "texto": "Pedagogo de pedagogos. Sabe enseñar su materia como no he visto a nadie enseñarla. Las evaluaciones que aplica son excelente método de estudio y ayudan a guardarse los conocimientos requerido de la materia. Explica, enseña, responde dudas como ningún otro profesor, excelente. Sinceramente, espero que siga dictando clase porque tiene la vocación para ello.",
          "pros": null,
          "contras": null,
          "periodo": "2026-2",
          "calificacion": 2,
          "dificultad": 1.9
        }
      },
      {
        "nombre": "Felix Humberto Soriano Mendez",
        "slug": "felix-humberto-soriano-mendez",
        "resenas": 22,
        "calidad": "mala",
        "calificacion": 2.49,
        "notaPromedio": 3.85,
        "resenasOcultas": 21,
        "resena": {
          "texto": "El profe es muy malo la verdad, pero la verdad practicamente nos regalo la materia. Es justo? probablemente no, pero mejor que repetir la materia xd. Si quiere aprender análisis pues aplaze semestre o estudie por su cuenta, pero definitavemente no va aprender nada con él, solo va pasar la materia.",
          "pros": null,
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 2,
          "dificultad": 1.5
        }
      }
    ]
  },
  "2016343": {
    "nombre": "Español Funcional",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016343",
    "profesores": [
      {
        "nombre": "Carlos Andrés Baquero Salamanca",
        "slug": "carlos-andrés-baquero-salamanca",
        "resenas": 19,
        "calidad": "buena",
        "calificacion": 4.72,
        "notaPromedio": 4.56,
        "resenasOcultas": 18,
        "resena": {
          "texto": "MUY BUENO (lastima la asistencia) Es un amor de profesor, se disfrutan las clases. Casi todo es grupal (talleres, exposiciones, ensayos, de todo) lo que puede ser un pro o contra. Toma asistencia aunque es un poquito flexible con eso (perdi por fallas pero me la salvo por misericordioso) aunque no se confie con el tema de fallas. Es muy facil y no profundiza en temas, a veces no enseña lo que tiene que enseñar o no con la profunidad que se espera. Parece profesor de colegio",
          "pros": "> Todo es trabajo en grupo > Muy pedagogico (parece profesor de colegio) > Facil sacar 5 > Se disfrutan las clases > Flexible y condescendiente",
          "contras": "> Todo es trabajo en grupo > Pide asistencia > Los temas se ven muy por encima, no hay profundiad",
          "periodo": "2024-2",
          "calificacion": 4.5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Paul William Cifuentes Velasquez",
        "slug": "paul-william-cifuentes-velasquez",
        "resenas": 38,
        "calidad": "regular",
        "calificacion": 3.7,
        "notaPromedio": 4.17,
        "resenasOcultas": 37,
        "resena": {
          "texto": "Siempre llega tarde y re tarde, es un perezoso a la hora de dar clase. Le vale 5 todo",
          "pros": "es tan fresco que no le importa nada",
          "contras": "todas las anteriores",
          "periodo": "2024-1",
          "calificacion": 1.5,
          "dificultad": 2.9
        }
      },
      {
        "nombre": "Karen Marcela Muñoz Martínez",
        "slug": "karen-marcela-munoz-martinez",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 3.44,
        "notaPromedio": 4.16,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Mucho se ha dicho de Karen y como supuestamente es una terrible docente. Empiezo diciendo que es cierto que vi esta materia únicamente para subir promedio cosa que al final no paso y de hecho me quedo más bajita que otras de 4 créditos , sin embargo esto no hace automáticamente que Karen sea la terrible docente que todos dicen , ella fue muy clara con sus pautas y como quién diría sus reglas de juego . Ella empezó con juegos para que entre compañeros nos conozcamos eso ya es algo bastante humano teniendo en cuenta que en muchas materias el profesor dice su nombre presenta el curso y empieza…",
          "pros": "Amable Muy clara con las notas",
          "contras": "Asistencia ( no puede llegar tarde)",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 4.1
        }
      },
      {
        "nombre": "Ivonne Rocio Donado Kerguelen",
        "slug": "ivonne-rocio-donado-kerguelen",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "La profesora, no negando su procedencia, es muy relajada y aveces parece perder el interés por la clase llegando incluso a no dar clase por partidos de Colombia. Ella sabe mucho, lo orienta a uno en la elaboración textual pero su falta de seriedad y comentarios un poco pasados (hombres), no la dejan ser una buena docente",
          "pros": "- Es fácil pasar con ella - Si uno sabe como hablarle, es de gran ayuda para mejorar redacción",
          "contras": "- Es muy vaga - Es pasada con comentarios",
          "periodo": "2013-10",
          "calificacion": 3,
          "dificultad": 2
        }
      }
    ]
  },
  "2016609": {
    "nombre": "Seguridad Industrial",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016609",
    "profesores": [
      {
        "nombre": "Carlos Julio Lozano Piedrahita",
        "slug": "carlos-julio-lozano-piedrahita",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.66,
        "notaPromedio": 4.7,
        "resenasOcultas": 4,
        "resena": {
          "texto": "el profe es un amor y es muy chistoso la materia queda alta fin",
          "pros": "un amor la materia va a quedar alta",
          "contras": "ninguno el que pierda con el es un bobo",
          "periodo": "2026-2",
          "calificacion": 4.9,
          "dificultad": 2
        }
      },
      {
        "nombre": "Jennifer Lucia Lizarazo Beltran",
        "slug": "jennifer-lucia-lizarazo-beltran",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2016650": {
    "nombre": "Fundamentos De Fisica Experimental",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016650",
    "profesores": [
      {
        "nombre": "Anderson Dussan Cuenca",
        "slug": "anderson-dussan-cuenca",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 4.87,
        "notaPromedio": 4.12,
        "resenasOcultas": 12,
        "resena": {
          "texto": "fua ese profe es una belleza, explica los temas con una claridad y pasión que a uno lo inspiran a aprender y seguirle el hilo al tema, y explica mucho más de lo que abarca la materia, en si los temas no son ni tantos ni dificiles pero si importantes para endender como son las bases de lo que soporta la mayoria de la tecnología hoy en dia. la metodologia fueron 2 parciles teoricos y uno de sustentar unos papers, también unos quices no muy difíciles, una mesa redonda que estubo reñidita y unos talleres que estaban extensos pero interesantes la verdad, y una expo en grupos, en si me gusto que…",
          "pros": "-explica super bien -esta dispuesto a resolver cuanquier duda. -lo motiva a que se meta a algun grupo de investigacion y que aproveche la u. -al final de la materia hace un recorrido por los laboratorios de ciencias y…",
          "contras": "-es preguntón sobre todo en la mesa redonda o los papper, asi que el nota cuando alguien estudio o no. -en los parciales usted puede llevar cuando formula o valor guste incluso se las puede pedir al profe, pero no puede…",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Luis Demetrio Lopez Carreño",
        "slug": "luis-demetrio-lopez-carreño",
        "resenas": 21,
        "calidad": "buena",
        "calificacion": 4.8,
        "notaPromedio": 4.6,
        "resenasOcultas": 20,
        "resena": {
          "texto": "Excelente profesor, el mejor para clases prácticas. Es bastante exigente, pero de la misma forma dicta una excelente asignatura.",
          "pros": "Bueno en todo.",
          "contras": "Puede ser un poco cascarrabias.",
          "periodo": "2022-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Angel Miguel Ardila Vargas",
        "slug": "angel-miguel-ardila-vargas",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 4.39,
        "notaPromedio": 4.01,
        "resenasOcultas": 6,
        "resena": {
          "texto": "El profesor Angel Miguel debe ser de los mejores del departamento, constantemente hace preguntas que llevan a la reflexión y ayudan a asimilar conceptos, se preocupa mucho porque uno aprenda, y permite segundas entregas para correciones y constantemente califica y da retroalimentación. Mis informes de laboratorio de aquí en adelante no serán lo mismo, es un crack en eso. Eso si, la materia conlleva mucho trabajo, fue quizás la materia a la que más le metí este semestre, pero el profesor no lo raja a uno, de hecho se pasa relativamente alta. Hay que estudiar mucho para los pre-informes y…",
          "pros": "Amable, sabe mucho y se aprende mucho",
          "contras": null,
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 4.2
        }
      },
      {
        "nombre": "Luis Fernando Cristancho Mejia",
        "slug": "luis-fernando-cristancho-mejia",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.1,
        "notaPromedio": 3.8,
        "resenasOcultas": 5,
        "resena": {
          "texto": "no recomendable si no pillas rápido los experimentos, consejo es hacerse el curos de probabilidad y estadística de khan academy (gratis,buscar en google) y el de algebra I y II + los módulos de cálculo diferencial en khan acedemy los encuentras todos, aconsejo dejarla para segundo semestre y en el primer semestre inscribir probabilidad y estadística con cálculo diferencial, la va a llevar un 1000000% más fácil y va a aprender mucho más, así le diga quien le diga que la inscriba, que es supeeeer facil,regalada, hágame caso e inscriba primero esas y luego ya la ve, no se va a atrasar en nada,…",
          "pros": "Es buena persona, algo frio en ocasiones",
          "contras": "Muy bueno, pero requiere saber buenas matemáticas",
          "periodo": "2025-2",
          "calificacion": 3.7,
          "dificultad": 5
        }
      },
      {
        "nombre": "Gustavo Martinez Tamayo",
        "slug": "gustavo-martinez-tamayo",
        "resenas": 47,
        "calidad": "regular",
        "calificacion": 3.61,
        "notaPromedio": 4.27,
        "resenasOcultas": 46,
        "resena": {
          "texto": "Las clases tienden a ser muuuuuy aburridas hasta el punto que ya casi nadie iba a magistral y da muchas vueltas para explicar una cosa, pero en cuanto a dificultad no se es tan difícil si se tienen los parciales que hay aquí ya que son casi exactamente igual, en mi caso solo cambio el 3 parcial que fue una sola pregunta pero todo muy manejable, ahora en las bitácoras en laboratorio la verdad creo que nos entrego la calificación solo de dos que tiro a matar pero el resto no entrego la nota y a todos nos fue re bien, lo cuál pasó casi exactamente en taller , entonces saquen sus propias…",
          "pros": "-Se pasa fácil si se tienen los parciales de aquí - se deja muy alta -el profesor trata de que a usted le quede 100% claro el tema y que usted realmente aprenda ( pero no la logra)",
          "contras": "-no se aprende casi nada - llama a lista en taller y laboratorio",
          "periodo": "2025-2",
          "calificacion": 3.6,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Nestor Jaime Torres Salcedo",
        "slug": "nestor-jaime-torres-salcedo",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 3.54,
        "notaPromedio": 3.96,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Ver con el es una experiencia muy tranqui realmente, casi no deja trabajo fuera de la clase, y entonces te puedes parchar un buen rato, es una buena opción en general como profe. Hace parciales de los temas del laboratorio, pero son muy trabajables, con estudiarle seriamente se pueden sacar bastante bien. Explica por encima la teoría de cada laboratorio antes de empezar, aunque normalmente toca estudiar estas explicaciones por cuenta propia para complementar. Si podría mejorar un poco su amabilidad, tampoco es terrible y después de que se le conoce y tiene confianza hasta se ríe con uno. Si…",
          "pros": "No deja casi nada para fuera de la clase",
          "contras": "A varios los parciales les resultaron retadores (pero no imposibles)",
          "periodo": "2025-1",
          "calificacion": 4,
          "dificultad": 2
        }
      },
      {
        "nombre": "David Arsenio Landinez Tellez",
        "slug": "david-arsenio-landinez-tellez",
        "resenas": 12,
        "calidad": "regular",
        "calificacion": 2.89,
        "notaPromedio": 4.06,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Nunca subió las notas al SIA, con eso se puede ver lo dejado y olvidadizo que es con este curso.",
          "pros": "Califica suave",
          "contras": null,
          "periodo": "2019-2",
          "calificacion": 1.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Astrid Baquero Bernal",
        "slug": "astrid-baquero-bernal",
        "resenas": 18,
        "calidad": "mala",
        "calificacion": 2.67,
        "notaPromedio": 3.76,
        "resenasOcultas": 17,
        "resena": {
          "texto": "Es una profe un poco compleja de manejar, a veces la clases se hacían un poco pesadas porque era demasiada fundamentación teórica en muy poco tiempo. Eso si toca estudiar mucho y prestar mucha atencion en clase y a veces es muy dificil por la hora y el ritmo de la clase.",
          "pros": "- Es fácil negociar con ella",
          "contras": "- Los parciales son bastante difíciles - Se fija mucho en los detalles",
          "periodo": "2025-1",
          "calificacion": 3.5,
          "dificultad": 4.3
        }
      },
      {
        "nombre": "Miryam Rincon Joya",
        "slug": "miryam-rincon-joya",
        "resenas": 15,
        "calidad": "mala",
        "calificacion": 2.51,
        "notaPromedio": 3.97,
        "resenasOcultas": 14,
        "resena": {
          "texto": "Mi opinión realmente difiere demasiado de la de mis compañeros, pero, a mi parecer, es alguien con quien sí se puede aprender, puesto que está abierta a responder dudas, las veces que sean necesarias, aunque es cierto que desempeñándose como tal en la explicación general suele hablar muy bajito, y no suele ser lo suficientemente clara, por lo que sí fue necesario casi que estar al lado de ella durante el desarrollo de talleres para poder entender genuinamente el tema. Es una clase en general desgastante por el hecho de ser tan larga, pero nada del otro mundo.",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 3.8,
          "dificultad": 3.2
        }
      }
    ]
  },
  "2016869": {
    "nombre": "Dibujo I",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016869",
    "profesores": [
      {
        "nombre": "Ramon Elberto Uribe Galves",
        "slug": "ramon-elberto-uribe-galves",
        "resenas": 3,
        "calidad": "regular",
        "calificacion": 4.23,
        "notaPromedio": 4.47,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Su conocimiento teórico ayuda muchísimo al proceso de formación. Da tiempo más que suficiente para realizar los ejercicios en clase. Es importante ser responsable con él, es taciturno, Pero esta muy atento de quien trabaja y quien no. Importante leer y estudiar muy bien las lecturas que sugiere, porque hay que sustentarle muy bien los ejercicios.",
          "pros": "Excelente profesor, versión 2025-2026",
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 4.7,
          "dificultad": 3.6
        }
      },
      {
        "nombre": "Miguel Antonio Huertas Sanchez",
        "slug": "miguel-antonio-huertas-sanchez",
        "resenas": 5,
        "calidad": "regular",
        "calificacion": 3.98,
        "notaPromedio": 4.4,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Habla mucho y se va por las ramas. Fue una clase de dibujo en dónde analizabamos meticulosamente los trabajos dejando de un lado la práctica del dibujo. Se extiende mucho. Dio una nota muy baja que no se justifica para la calidad de ejercicios que hicimos como: 3,4 - 3,3 - 3,1. Esto le permite a uno pasar pero afecta el promedio negativamente y no se justifica para una clase dónde uno va a escuchar a alguien divagar por horas de temas que al final no nutren profesionalmente.",
          "pros": "Sabe mucho",
          "contras": "Sabe mucho",
          "periodo": "antes",
          "calificacion": 2,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jaidy Astrid Diaz Barrios",
        "slug": "jaidy-astrid-diaz-barrios",
        "resenas": 5,
        "calidad": "mala",
        "calificacion": 3.36,
        "notaPromedio": 4.34,
        "resenasOcultas": 4,
        "resena": {
          "texto": "creo que es una clase muy rara, no se sabe bien que esperar pero es como un poco el punto de la clase, como explorar.",
          "pros": "esta dispuesta a llevar el curso según las necesidades si se le comunica. le gusta ver el dibujo como mas contemporáneo, entonces busca explorar muchas formas de dibujo. respeta cada clase de dibujo, abstracto,…",
          "contras": "puede ser un poco evasiva a las explicaciones. no explica anatomia ni representación realista, si buscas eso no metas con ella. puede tener favoritismos muy marcados. no hay archivos de ella dibujando.",
          "periodo": "2025-1",
          "calificacion": 3.7,
          "dificultad": 3.4
        }
      },
      {
        "nombre": "Julia Mercedes Angola Rossi",
        "slug": "julia-mercedes-angola-rossi",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017002": {
    "nombre": "Narrativa I",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017002",
    "profesores": [
      {
        "nombre": "Juan Guillermo Buenaventura Amezquita",
        "slug": "juan-guillermo-buenaventura-amezquita",
        "resenas": 3,
        "calidad": "regular",
        "calificacion": 3.5,
        "notaPromedio": 3.7,
        "resenasOcultas": 2,
        "resena": null
      },
      {
        "nombre": "Gabriel Esteban Gonzalez Rodriguez",
        "slug": "gabriel-esteban-gonzalez-rodriguez",
        "resenas": 4,
        "calidad": "regular",
        "calificacion": 3.17,
        "notaPromedio": 4.13,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Sabe mucho, pero no esta muy interesado en la docencia",
          "pros": "Da espacios para estudiar y es amable",
          "contras": "Nunca pone notas altas",
          "periodo": "2020-20 (virtual)",
          "calificacion": 4,
          "dificultad": 2
        }
      },
      {
        "nombre": "Gabriel Alberto Alba Gutierrez",
        "slug": "gabriel-alberto-alba-gutierrez",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 2.3,
        "notaPromedio": 3.7,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Su forma de vestir es lo que realmente destaca de él, porque su trabajo como docente es pésimo y cuenta historias, no explica como desarrollarlas adecuadamente. Durante todo el semestre expone los mismos temas, incluso el último día de clase y nadie le entiende porque se dispersa y no se centra en lo que esta hablando, Coloca la nota suficiente para pasar, pero no se aprende nada con este docente.",
          "pros": "- Es muy simpático físicamente y es agradable cuando habla - Su parla es envolvente",
          "contras": "- Puede explicar el mismo tema clase tras clase, y no se hace entender - No es organizado ni claro con el trabajo final que se le tiene que entregar",
          "periodo": "2023-2",
          "calificacion": 2.3,
          "dificultad": 3
        }
      }
    ]
  },
  "2017265": {
    "nombre": "Ingenieria Y Desarrollo Sostenible",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017265",
    "profesores": [
      {
        "nombre": "Carlos Alberto Narvaez Tovar",
        "slug": "carlos-alberto-narvaez-tovar",
        "resenas": 17,
        "calidad": "buena",
        "calificacion": 4.15,
        "notaPromedio": 3.79,
        "resenasOcultas": 16,
        "resena": {
          "texto": "Este semestre tuvo parte del curso, como hasta la semana 8 y sinceramente es el mejor profesor que he tenido, es un profesor que se nota que ama lo que hace lo deja todo en las explicaciones y es muy didáctico, no tiene problemas con responder dudas, da puntos extras por participar, eso si califica un poco duro, pero es que con el nivel con el que enseña es válido, si tiene la posibilidad de inscribir con él, no se pierda esa oportunidad.",
          "pros": "Demasiado didáctico Prepara muy bien las clases Evalúa lo que enseña",
          "contras": "Califica muy duró a veces va muy lento, porque explica todo muy detallado y en algunas cosas creo que se las podría saltar, pero no es algo malo",
          "periodo": "2025-2",
          "calificacion": 4.8,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Adriana Fernanda Sierra",
        "slug": "adriana-fernanda-sierra",
        "resenas": 25,
        "calidad": "buena",
        "calificacion": 4.02,
        "notaPromedio": 3.96,
        "resenasOcultas": 24,
        "resena": {
          "texto": "No me gusta como dio la materia, muy desordenada, algunas cosas muy a las carreras. Lo único es que es amable y se deja hablar.",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 2,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Óscar Libardo Rodríguez Montaño",
        "slug": "oscar-libardo-rodriguez-montano",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 3.86,
        "notaPromedio": 3.5,
        "resenasOcultas": 6,
        "resena": {
          "texto": "En mi experiencia no es buen profesor, espera que uno llegue sabiendo todo lo que el debería explicar, puede ser incluso prepotente, eso si da puntos por participar en clase",
          "pros": "Puntos adicionales",
          "contras": "No explica bien",
          "periodo": "2022-2",
          "calificacion": 2,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Fernando José Rodriguez Mesa",
        "slug": "fernando-josé-rodriguez-mesa",
        "resenas": 17,
        "calidad": "buena",
        "calificacion": 3.52,
        "notaPromedio": 4.18,
        "resenasOcultas": 16,
        "resena": {
          "texto": "Por fuera es todo bien, coordial y atento, pero nada que ver, ese señor nose por que da clases, es el hablando durante dos horas de temas, la mayoria, irrelevantes, le preguntas algo y ahi se queda durante toda la clase, le encanta escucharse y ayuda poco o nada en lo importante de PAI",
          "pros": "Es amable",
          "contras": "Asolapado y mediocre, exige mucho (Es PAI) para lo poco que enseña. Monotono",
          "periodo": "2024-1",
          "calificacion": 1.5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Luis Eduardo Alvarez Africano",
        "slug": "luis-eduardo-alvarez-africano",
        "resenas": 4,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Menos mal está pensionado.",
          "pros": null,
          "contras": "No enseñaba Solo hablaba carreta No aportaba al crecimiento profesional",
          "periodo": "2013-20",
          "calificacion": 1.6,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Eduardo Barrera Gualdron",
        "slug": "eduardo-barrera-gualdron",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Un profesor excelente, explica bien los temas, se preocupa porque los estudiantes aprendan y no se aburran. Es muy amable y siempre que se tenga alguna duda o problema con los proyectos de IDS, él lo ayudará.",
          "pros": "Es amable Sabe del tema Explica bien Ayuda cuando se tengan problemas con el proyecto",
          "contras": "No se coordinaba con los demás profesores de IDS",
          "periodo": "2020-10 (virtual)",
          "calificacion": 4.8,
          "dificultad": 2
        }
      },
      {
        "nombre": "Cristian Rodrigo Bustamante Porras",
        "slug": "cristian-rodrigo-bustamante-porras",
        "resenas": 0,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017771": {
    "nombre": "Analisis Y Modelacion De Sistemas Biologicos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017771",
    "profesores": [
      {
        "nombre": "Gabriel Hernando Guillot Monroy",
        "slug": "gabriel-hernando-guillot-monroy",
        "resenas": 28,
        "calidad": "regular",
        "calificacion": 3.16,
        "notaPromedio": 4.08,
        "resenasOcultas": 27,
        "resena": {
          "texto": "sus clases son un poco aburridas, hay que estar muy cerca de el para escuchar pues no habla muy fuerte, tiene temas interesantes pero el que no sea muy bueno dando a conocer su conocimiento es un gran contra. Se aprende más con sus actividades asignadas que con sus clase... pero se aprende.",
          "pros": "Su modulo es cinquable Contesta correos Responde preguntas de manera amable",
          "contras": "sus clases dan sueño",
          "periodo": "2025-2",
          "calificacion": 3.5,
          "dificultad": 1.6
        }
      }
    ]
  },
  "2017773": {
    "nombre": "Biologia De Microorganismos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017773",
    "profesores": [
      {
        "nombre": "Alejandro Caro Quintero",
        "slug": "alejandro-caro-quintero",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.9,
        "notaPromedio": 4.37,
        "resenasOcultas": 5,
        "resena": {
          "texto": "El profesor sabe mucho sobre el tema, es muy amable y trae una perspectiva poco común en la carrera de la microbiología. La clase era una electiva, por lo cual podía llegar a ser muy introductoria para estudiantes de biología. Pero aún así, aprendí mucho sobre diferentes temas de genética y evolución. Solía estar ocupado y no ir a clase, pero usualmente iban sus estudiantes de posgrado a reemplazarlo. Los parciales y talleres no eran tan difíciles y en general sí servían para aprender. Sin embargo, nunca dio retroalimentación ni publicó las notas de los talleres ni del segundo parcial, solo…",
          "pros": "- Tema muy interesante. - Oportunidad de hacer talleres prácticos, tanto de laboratorio como de bioinformática.",
          "contras": "- Ni idea de dónde sacó las notas. - A veces las clases daban sueño (a él también, tenía que salir por café, pero para ser justos era un salón muy oscuro)",
          "periodo": "2024-2",
          "calificacion": 4.6,
          "dificultad": 3.7
        }
      },
      {
        "nombre": "Luis Carlos Montenegro Ruiz",
        "slug": "luis-carlos-montenegro-ruiz",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 4.23,
        "notaPromedio": 4.26,
        "resenasOcultas": 6,
        "resena": {
          "texto": "El profesor es amable y se nota que sabe mucho sobre el tema, pero su módulo es tal vez el más pesado de esta materia. Una parte del parcial consiste en haberse memorizado textualmente una tabla que envió en las diapositivas de los grupos de algas y sus características, y de dibujar (de memoria) algunos organismos vistos en el laboratorio. La otra parte es sobre un caso de la vida real relacionado con cianobacterias. El laboratorio de algas solo fue de observación y la nota la sacó de una infografía sobre un capítulo de un libro donde a casi todo el mundo le puso 5. El de cianobacterias…",
          "pros": null,
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 3.7,
          "dificultad": 4
        }
      },
      {
        "nombre": "Jimena Sanchez Nieves",
        "slug": "jimena-sanchez-nieves",
        "resenas": 6,
        "calidad": "regular",
        "calificacion": 3.98,
        "notaPromedio": 4.42,
        "resenasOcultas": 5,
        "resena": null
      },
      {
        "nombre": "Angie Daniela Gonzalez Galindo",
        "slug": "angie-daniela-gonzalez-galindo",
        "resenas": 2,
        "calidad": "regular",
        "calificacion": 3.4,
        "notaPromedio": 4.6,
        "resenasOcultas": 1,
        "resena": {
          "texto": "La profesora en general es buena, sabe del tema que está hablando y sus explicaciones son claras. Se enfoca mucho en la parte de parásitos, por lo cual el parcial es principalmente de memorizarse cosas (el ciclo de vida de Trypanosoma cruzi y así). En el laboratorio es bastante tranquila, los informes consisten en hacer dibujos y ponerles descripciones. La monitora es la que los califica, así que no es imposible dejar la nota alta. También hizo un quiz por Moodle con dos intentos. No es tan pesado como el módulo de algas pero sí es de mucha memoria y de mirar protistas por el microscopio, lo…",
          "pros": null,
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 3.8,
          "dificultad": 4.1
        }
      },
      {
        "nombre": "Carmen Reyes Blandon",
        "slug": "carmen-reyes-blandon",
        "resenas": 10,
        "calidad": "mala",
        "calificacion": 3.28,
        "notaPromedio": 3.28,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Es una de las mejores profesoras que he tenido, le tengo mucho respeto y aprecio. Me gusta la manera en la que hace que uno piense en los procesos naturales de una manera lógica, haciendo uso de las experiencias personales. Aún conservo un correo de felicitaciones que recibí de su parte y cuando siento que valgo nada, de alguna manera me levanta el ánimo. Es muy importante jampas tomarse los comentarios de los profesores de manera personal, ni de nadie... En el caso de la profesora Carmen, cada comentario tiene una intención académica y poco le importa el tema de las notas en términos de…",
          "pros": null,
          "contras": null,
          "periodo": "antes",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Yih Wen Fung",
        "slug": "yih-wen-fung",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Me encantó la clase con ella, es exigente pero amable",
          "pros": "Explica muuuuy bien!",
          "contras": "Es cansona con la puntualidad. A veces no da retroalimentación",
          "periodo": "2020-10 (virtual)",
          "calificacion": 5,
          "dificultad": 3
        }
      }
    ]
  },
  "2017775": {
    "nombre": "Biologia Molecular De La Celula",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017775",
    "profesores": [
      {
        "nombre": "Maryam Chaib de Mares",
        "slug": "maryam-chaib-de-mares",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.53,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Es muy buena profesora, explica bien, sus clases son chéveres y hace talleres con preguntas abiertas. Sus parciales no son de memoria, pero sí requieren haber estudiado sobre el tema. Muy recomendado ver clases con ella.",
          "pros": null,
          "contras": null,
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 4.3
        }
      },
      {
        "nombre": "Julieta Troncoso",
        "slug": "julieta-troncoso",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.87,
        "notaPromedio": 4.37,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Es una profesora increíble, sabe mucho de neurociencias y tiene la habilidad de transmitir su conocimiento y su pasión. Aunque las clases eran de 4 horas, eran entretenidas tanto por la profesora como por el tema. Dejaba uno o dos capítulos de libro de texto para cada clase, lo cual es bastante trabajo pero vale la pena. Una vez se puso de mal genio porque la gente no leía. Los parciales tenían preguntas abiertas y cerradas, con base a las clases y los libros. Recomiendo mucho la asignatura y la profesora :)",
          "pros": "- Sabe mucho del tema. - Es una increíble profesora. - La materia es muy interesante.",
          "contras": "- Quedé con ganas de más - Pudo haber aprovechado mejor el tiempo durante el semestre",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Maria Del Pilar Gomez Correa",
        "slug": "maria-del-pilar-gomez-correa",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 4.71,
        "notaPromedio": 4.31,
        "resenasOcultas": 7,
        "resena": {
          "texto": "La profe es muy amable, se esfuerza por explicar y que los estudiantes entiendan. Responde las preguntas y hace talleres que suelen ser interesantes. En las presentaciones solía hacer preguntas de pensar difíciles, pero es un ambiente ameno y no espera que tengamos todas las respuestas. Muy recomendado ver clases con ella si tienen la oportunidad.",
          "pros": null,
          "contras": null,
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Maria Helena Ramirez Hernandez",
        "slug": "maria-helena-ramirez-hernandez",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 4.46,
        "notaPromedio": 4.04,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Buena profesora se nota que le gusta enseñar sin embargo su metodología de clase deja mucho que desear, sobre todo porque requiere mas tiempo del que realmente se le puede dedicar, pide leer un capitulo semanal y llevar aprendido para hacer una clase \"inversa\" en la que en vez de enseñar pareciera que solo da tips curiosos por lo que lo que se aprende realmente es muy poco.",
          "pros": "es muy sencillo pasar deja sacar apuntes y mapas conceptuales se nota que le gusta lo que hace",
          "contras": "realmente si no es autónomo no aprendes mucho de ella no sabe subir las notas y te puede perjudicar se demora mucho para responder",
          "periodo": "2025-1",
          "calificacion": 2.2,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Maria Marcela Camacho Navarro",
        "slug": "maria-marcela-camacho-navarro",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.37,
        "notaPromedio": 4.03,
        "resenasOcultas": 2,
        "resena": {
          "texto": "EXCELENTE PROFESORA. SUS TAREAS TE DEJARAN CIEGO. GRACIAS A ELLA, APRENDI DE TODO.",
          "pros": "Experta y con buena manejo del lenguaje. Habla inglés con nivel fluente. Comparte buenos papers y se deja hablar por los estudiantes.",
          "contras": "Muy cerrada y seria. Es su personalidad.",
          "periodo": "antes",
          "calificacion": 4.6,
          "dificultad": 5
        }
      },
      {
        "nombre": "Carlos Arturo Clavijo Ramirez",
        "slug": "carlos-arturo-clavijo-ramirez",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.25,
        "notaPromedio": 4.18,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Excelentísimo. El profesor Clavijo no solo es un amor de persona, sino que también es un profesional excelente y un muy buen docente. Sus clases son amenas, en especial si le gusta la biología, y su método de evaluación es muy amigable con el estudiante. Él no tiene ningún problema en ponerle un 5,0 en sus notas cuando ve que se esfuerza y se interesa. Además, es muy, pero MUY, organizado.",
          "pros": "Gran persona. Muy buen docente. No tira nada duro. Muy organizado.",
          "contras": "Quizá que él pide bastante estudio autónomo para la materia pero, honestamente, la materia perfectamente se pasa sin eso.",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3.3
        }
      },
      {
        "nombre": "Edgar Cristancho",
        "slug": "edgar-cristancho",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.15,
        "notaPromedio": 4.15,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Buen profesor, maneja un amplio conocimiento del tema que brinda, es bastante educado con los estudiantes y su forma de enseñar genera interes en la materia",
          "pros": "-No califica duro -No pone muchos trabajos",
          "contras": "Habla pasito",
          "periodo": "2024-1",
          "calificacion": 4,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Clara Matilde Spinel Gomez",
        "slug": "clara-matilde-spinel-gomez",
        "resenas": 3,
        "calidad": "mala",
        "calificacion": 2.5,
        "notaPromedio": 4.07,
        "resenasOcultas": 2,
        "resena": {
          "texto": "No me gustó como profesora ni como persona.",
          "pros": "Es tranquila",
          "contras": "Es snob y se jura de mejor clase que todo el mundo. No enseña bien y exagera con su libro.",
          "periodo": "2018-1",
          "calificacion": 1.5,
          "dificultad": 3.5
        }
      }
    ]
  },
  "2017778": {
    "nombre": "Fundamentos De Investigacion",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017778",
    "profesores": [
      {
        "nombre": "Edgar Leonardo Linares",
        "slug": "edgar-leonardo-linares",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 4.85,
        "notaPromedio": 4.48,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Es una persona extraordinaria, fue un gusto estar en todas sus clases. El profe más que decirnos cómo hacer investigación, nos abre la mente a una biología que se debe pensar desde múltiples perpectivas. Fue una clase muy enriquecedora.",
          "pros": "Todos",
          "contras": "Ninguno",
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Joao Victor Muñoz Duran",
        "slug": "joao-victor-muñoz-duran",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 4.73,
        "notaPromedio": 4.42,
        "resenasOcultas": 12,
        "resena": {
          "texto": "El profe sabe mucho del tema, es amable y tiene cosas muy interesantes que decir sobre la historia de las ideas evolutivas. Hubiera sido interesante que también hablara sobre la parte de la historia después de Darwin, pero aún así lo recomendaría si tienen la oportunidad de ver materias con él.",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 4.7,
          "dificultad": 3.7
        }
      },
      {
        "nombre": "Juan David González Trujillo",
        "slug": "juan-david-gonzalez-trujillo",
        "resenas": 4,
        "calidad": "regular",
        "calificacion": 3.47,
        "notaPromedio": 4.08,
        "resenasOcultas": 3,
        "resena": {
          "texto": "F, dió la mitad de las clases planeadas para el semestre, porque \" se le cruzaba con otra clase que debía dar\", se nota que tiene preferencias con algunos estudiantes, si tienen oportunidad de ver algo con el pierdansela. Aunque los otros tres profesores que dan esa materia valen totalmente la pena",
          "pros": "Da clase cuando le da la gana, van a tener mucho tiempo libre. Si hacen chistes o se rien de todo lo que dice ya tienen 5, o si no son peama",
          "contras": "No hace parciales🤷",
          "periodo": "2024-1",
          "calificacion": 2.1,
          "dificultad": 2.2
        }
      },
      {
        "nombre": "German Domingo Amat Garcia",
        "slug": "german-domingo-amat-garcia",
        "resenas": 6,
        "calidad": "regular",
        "calificacion": 2.98,
        "notaPromedio": 3.8,
        "resenasOcultas": 5,
        "resena": {
          "texto": "El profesor murió, ya no se puede ver con él :(",
          "pros": "- Que descanse en Paz",
          "contras": "Se murió :( No se puede hablar bien o mmal de alguien que murió",
          "periodo": "2021-10 (virtual)",
          "calificacion": 1.5,
          "dificultad": 1.5
        }
      }
    ]
  },
  "2018012": {
    "nombre": "Salud Y Sociedad",
    "url": "https://losestudiantes.com/universidad-nacional/courses/salud-y-sociedad",
    "profesores": [
      {
        "nombre": "Gloria Garay Ariza",
        "slug": "gloria-garay-ariza",
        "resenas": 0,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2022897": {
    "nombre": "Energia Y Combustible",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2022897",
    "profesores": [
      {
        "nombre": "Yazmin Yaneth Agamez Pertuz",
        "slug": "yazmin-yaneth-agamez-pertuz",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.33,
        "notaPromedio": 4.25,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Al principio la profe impone mucho respeto (y e snecesario) ya en el lab es muy bonito trabajar con ella, si o si se aprende se retroalimenta y esta en disposicion hacia los estudiantes, más profes como ella",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 2.4
        }
      },
      {
        "nombre": "Jose De Jesus Diaz Velasquez",
        "slug": "jose-de-jesus-diaz-velasquez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2022902": {
    "nombre": "Introduccion A La Quimica De Alimentos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2022902",
    "profesores": [
      {
        "nombre": "Liliam Alexandra Palomeque Forero",
        "slug": "liliam-alexandra-palomeque-forero",
        "resenas": 30,
        "calidad": "buena",
        "calificacion": 4.79,
        "notaPromedio": 4.61,
        "resenasOcultas": 29,
        "resena": {
          "texto": "Es literalmente la mejor docente que he tenido en la vida, prepara cada una de las clases, aparte hace apuntes en tableta y los sube al Classroom para poder repasar todo. Es preciosa como ser humano y como docente, califica súper rápido, es súper justa y permite subir los parciales si quedaron bajos, eso sí, es estricta porque no regala notas y se debe estudiar para pasar. Pero se aprende muchísimo y se disfruta enormemente la clase, es graciosa, amable, literalmente perfecta. Aparte responde los correos súper rápido, no tarda nada en subir notas, es una persona que siempre pone ejemplos para…",
          "pros": "Todo, vean cualquier materia con ella siempre que tengan la oportunidad.",
          "contras": "Nada",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Carlos Eduardo Narvaez Cuenca",
        "slug": "carlos-eduardo-narvaez-cuenca",
        "resenas": 10,
        "calidad": "mala",
        "calificacion": 3.85,
        "notaPromedio": 3.71,
        "resenasOcultas": 9,
        "resena": null
      },
      {
        "nombre": "Astrid Garzon Monroy",
        "slug": "astrid-garzon-monroy",
        "resenas": 9,
        "calidad": "mala",
        "calificacion": 2.13,
        "notaPromedio": 3.23,
        "resenasOcultas": 8,
        "resena": {
          "texto": "No se puede confiar en una persona que estrella un carro, hace un acuerdo de pago como una persona correcta y luego de que ya le paso la factura por un poco mas de $1´500.000 bloque el telefono y no contesta llamadas ni mensajes, todo esto para no pagar. Que se puede esperar de alguien que por esa cantidad deja por el piso su nombre. Definitivemente de personas como la profesora Astrid Garzon Monroy no se puede confiar",
          "pros": ".",
          "contras": ".",
          "periodo": "2025-2",
          "calificacion": 2,
          "dificultad": 5
        }
      },
      {
        "nombre": "Luz Patricia Restrepo Sanchez",
        "slug": "luz-patricia-restrepo-sanchez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2022909": {
    "nombre": "Quimica De Hongos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2022909",
    "profesores": [
      {
        "nombre": "Carolina Chegwin Angarita",
        "slug": "carolina-chegwin-angarita",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.74,
        "notaPromedio": 4.24,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Increíble, Muy chevere muy amable siempre dispuesta a aclarar dudas, nada más por decir, no se como será en otras materias, en el laboratorio ninguna queja, aveces se confundía con la profe ivonne o decían cosas contrarias pero nada que chat gpt no ayude a entender mejor",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Ivonne Jeannette Nieto Ramirez",
        "slug": "ivonne-jeannette-nieto-ramirez",
        "resenas": 7,
        "calidad": "regular",
        "calificacion": 3.29,
        "notaPromedio": 3.96,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Me gusto mucho el laboratorio con ella, se aprende bastante, ventaja es que sus informes son a computador y no a mano, es cansona con la argumentacion pero es bastante entendible ya que el laboratorio es mas de observación y analizar lo que ocurre, los calculos salen facil, es muy amable, suele serlo más con las mujeres que con los hombres pero nada grave, siempre atiende bien las preguntas y ya, no califica duro tampoco",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 4.5,
          "dificultad": 2.4
        }
      }
    ]
  },
  "2022912": {
    "nombre": "Quimica De Polimeros",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2022912",
    "profesores": [
      {
        "nombre": "Cesar Augusto Sierra Avila",
        "slug": "cesar-augusto-sierra-avila",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 3.81,
        "notaPromedio": 3.63,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Un muy buen profesor, comprensivo, enseña bien lo que no queda claro lo repite y trata de que las clases sean mas dinamicas, ademas de que no hala solo dela teoria si no de las aplicaciones de las cosas que enseña, los parciales no son muy complicados, pero cuidado con no ir a clases ya que puede preguntar cosas que haya susurrado de su vida en una clase en los parciales, para tomar la asistencia, requiere tiempo pero no mucho, en general es un muy buen profesor recomendadisimo",
          "pros": "explica muy bien los temas y tiene un buen balanceado entre lo teórico y lo aplicado, resuelve dudas y es bastante comprensivo",
          "contras": "es un poco \"estricto\" con la forma de calificar a veces y puede pegarse de cosas minimas pero en general nada grave",
          "periodo": "2025-2",
          "calificacion": 4.5,
          "dificultad": 3
        }
      }
    ]
  },
  "2022919": {
    "nombre": "Laboratorio De Quimica Agricola",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2022919",
    "profesores": [
      {
        "nombre": "Maria Jose Martinez Cordon",
        "slug": "maria-jose-martinez-cordon",
        "resenas": 12,
        "calidad": "buena",
        "calificacion": 4.87,
        "notaPromedio": 3.98,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Sabe mucho del tema, enseña deacuerdo a las Carreras que esten viendo el laboratorio, muchas veces uno mismo se confunde con lo que evalua pero no es por ella, es muy justa para evaluar y durante las practicas ayuda demasiado incluso en examenes, enseña a hacer los preinformes e informes, son bastantes lo que ayuda a salvar la nota de los parciales y quices, exige de acuerdo a las capacidades del curso, pero es muy atenta, amable y formal, es muy facil llegar a acuerdos con ella",
          "pros": "Buen trato con los estudiantes",
          "contras": "Ninguno",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3
        }
      }
    ]
  },
  "2023819": {
    "nombre": "Quimica De Biomateriales Dentales",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2023819",
    "profesores": [
      {
        "nombre": "Edgar Delgado Mejia",
        "slug": "edgar-delgado-mejia",
        "resenas": 26,
        "calidad": "mala",
        "calificacion": 2.24,
        "notaPromedio": 3.23,
        "resenasOcultas": 25,
        "resena": {
          "texto": "Creo que, si usted estudia, lee el material y los videos que él le manda puede pasar sin mayor inconveniente, le recomiendo participar en clase y tomar la materia con cierta seriedad (aunque no considero que quite demasiado tiempo) Este profe motivo mi curiosidad en una ciencia en la que ya me había rendido desde el colegio. Un punto negativo es que suele divagar bastante, algo que eventualmente causa que se apresure demasiado al dictar los temas. Dicho todo esto, cuando hice el curso pasamos 6 de todo mi grupo, del otro grupo pasaron solo 4.",
          "pros": "Incentiva su curiosidad por el mundo de la Química",
          "contras": "Por alguna razón poca gente le pasa. Divaga bastante",
          "periodo": "2024-2",
          "calificacion": 4,
          "dificultad": 3
        }
      }
    ]
  },
  "2025338": {
    "nombre": "Laboratorio De Fisicoquimica I",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025338",
    "profesores": [
      {
        "nombre": "Jose Leopoldo Rojas Araque",
        "slug": "jose-leopoldo-rojas-araque",
        "resenas": 23,
        "calidad": "regular",
        "calificacion": 4.03,
        "notaPromedio": 4.09,
        "resenasOcultas": 22,
        "resena": {
          "texto": "Excelente profe, explica muy bien y deja talleres de repaso que sirven para el parcial. Sus parciales y como califica son justos. A veces puede ser un gruñón y molesta mucho con inasistencias o llegadas tarde, pero en general es buen profe y si o si va a terminar aprendiendo",
          "pros": "Explica bien y es sencillo entenderle. Hay varias notas de ayuda. Sus diapositivas son lindas. Es muy organizado.",
          "contras": "nada",
          "periodo": "2025-2",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Liliana Giraldo Gutierrez",
        "slug": "liliana-giraldo-gutierrez",
        "resenas": 20,
        "calidad": "regular",
        "calificacion": 3.34,
        "notaPromedio": 3.65,
        "resenasOcultas": 19,
        "resena": {
          "texto": "Mi mujer, ay yo la amo mucho, es como tener una abuelita, aunq si ensena mal ya que solo muestra un monton de demostraciones y cosas de laboratorio, tambien es facil pasarla por sus porcentajes, pues no hay muchas opciones yo la verdad si la recomiendo, con estudio autonomo se logra, ademas si ves tambien el lab con ella te tiene en cuenta jajaja",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Miguel Angel Montero Paez",
        "slug": "miguel-angel-montero-paez",
        "resenas": 11,
        "calidad": "regular",
        "calificacion": 3.13,
        "notaPromedio": 4.05,
        "resenasOcultas": 10,
        "resena": {
          "texto": "Montero es un personaje. En el laboratorio es tremendamente despreocupado (a veces demasiado, porque uno acaba perdiendo tiempo mientras él se toma el suyo para pasar por cada grupo), y para calificar también es muy relajado. Realmente, no tira a matar. La cosa llega en los seminarios, porque no solo tiene un ojo de águila para identificar los puntos débiles en los estudiantes, sino que además puede ser un poco grosero e intimidante. Igual, no tira duro con la nota, y también le invita las onces al grupo. Actúa como un tipo bravo e inamovible, pero es un amor en el fondo. Ah, y también va a…",
          "pros": "Gana carácter, un poco a la mala. No califica nada duro. Es un amor, y hasta chistoso.",
          "contras": "Puede ser grosero. Intimidante. Un poco desorganizado.",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 3.8
        }
      }
    ]
  },
  "2025339": {
    "nombre": "Laboratorio De Fisicoquimica Ii",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025339",
    "profesores": [
      {
        "nombre": "Andrea Álvarez Moreno",
        "slug": "andrea-alvarez-moreno",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.87,
        "notaPromedio": 4.19,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Es la mejor profe, los parciales son muy faciles (obviamente estudiando los talleres que ella deja) aparte deja llevar una hoja examen con apuntes, no califica a matar, y si es diciembre les hace un regalo quitandoles la peor nota, ojala dictara más materias (paq)",
          "pros": "la cabra",
          "contras": "solo dicta principios y lab de fisicoquimica",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Oscar Rodriguez",
        "slug": "oscar-rodriguez",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.3,
        "notaPromedio": 3.72,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Se molesta facilmente, sin embargo, es comprensivo con las situaciones con el laboratorio. Está atento a todos los estudiantes durante la práctica y siempre resuleve preguntas. Realiza quiz todas las clases sobre la practica y al final del semestre recoge el cuaderno.",
          "pros": "Es comprensivo con situaciones personales. Ayuda a los estudiantes durante la práctica.",
          "contras": "Es intimidante",
          "periodo": "2025-1",
          "calificacion": 4,
          "dificultad": 4
        }
      },
      {
        "nombre": "Marco Fidel Suarez Herrera",
        "slug": "marco-fidel-suarez-herrera",
        "resenas": 30,
        "calidad": "regular",
        "calificacion": 3.58,
        "notaPromedio": 3.46,
        "resenasOcultas": 29,
        "resena": {
          "texto": "El profesor sabe mucho, y habla de varios temas que muchos profesores no hablarían en primer semestre. Se nota que le apasiona enseñar y te puede repetir el tema las veces que quieras, también es chévere que ponga ejercicios prácticos como experimentos ( son bien largos). Sin embargo es muy duro con las calificaciones (de los parciales), y los temas que maneja son a veces muy complicados, los parciales son difíciles y representan el 60% de la materia. Sé que hubo gente que la perdió con muy bajita nota, pero también hay personas que llevaron un promedio súper alto. Al profesor le gusta…",
          "pros": "Se aprende mucho y se pone en práctica los conocimientos. Es amable y le gusta responder a las preguntas. No tiene preferencias con nadie.",
          "contras": "Requiere de mucho estudio autónomo y no es fácil. NUNCA aproxima nota",
          "periodo": "2025-2",
          "calificacion": 3,
          "dificultad": 4.2
        }
      }
    ]
  },
  "2026364": {
    "nombre": "Quimica Fundamental",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2026364",
    "profesores": [
      {
        "nombre": "Fabian Harvey Lopez Vallejo",
        "slug": "fabian-harvey-lopez-vallejo",
        "resenas": 25,
        "calidad": "buena",
        "calificacion": 4.95,
        "notaPromedio": 4.5,
        "resenasOcultas": 24,
        "resena": {
          "texto": "El profesor explica muy bien y realmente le interesa que sus estudiantes aprendan, esta muy atento a las dudas(incluso por correo) y le gusta que sus alumnos participen en la clase. Hace quices o talleres sorpresa que se deben desarrollar en 15 o 30 min, si alguien no estaba cuando hacían la actividad, podía nivelarla preparando un experimento o una exposición relacionadas con los últimos temas vistos en la clase. A lo largo del semestre envía talleres de preparación para los exámenes (super largos) y de allí salen los puntos para los parciales, estos pueden ser entregables o no de acuerdo a…",
          "pros": "- A veces soltaba chistes químicos -Muy puntual -Muy amable (casi como un padre) -Presenta alternativas en la evaluación",
          "contras": null,
          "periodo": "2021-2",
          "calificacion": 5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Liliam Alexandra Palomeque Forero",
        "slug": "liliam-alexandra-palomeque-forero",
        "resenas": 30,
        "calidad": "buena",
        "calificacion": 4.79,
        "notaPromedio": 4.61,
        "resenasOcultas": 29,
        "resena": {
          "texto": "Es literalmente la mejor docente que he tenido en la vida, prepara cada una de las clases, aparte hace apuntes en tableta y los sube al Classroom para poder repasar todo. Es preciosa como ser humano y como docente, califica súper rápido, es súper justa y permite subir los parciales si quedaron bajos, eso sí, es estricta porque no regala notas y se debe estudiar para pasar. Pero se aprende muchísimo y se disfruta enormemente la clase, es graciosa, amable, literalmente perfecta. Aparte responde los correos súper rápido, no tarda nada en subir notas, es una persona que siempre pone ejemplos para…",
          "pros": "Todo, vean cualquier materia con ella siempre que tengan la oportunidad.",
          "contras": "Nada",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Josue Itsman Clavijo Penagos",
        "slug": "josue-itsman-clavijo-penagos",
        "resenas": 39,
        "calidad": "buena",
        "calificacion": 4.53,
        "notaPromedio": 4.04,
        "resenasOcultas": 38,
        "resena": {
          "texto": "La vd es buen profesor pero solo para la gente nerda y lambona entonces no se deje llevar por las calificaciones q dicen aca KAJAKAJA explica como 20 temas por clase, explica medio dificil,sin profundizar, no hace ejercicios en clase o sea todo mal pero pss cada quien la vd a mi no me gusto👍 pero si eres muy nerdo muy 🤓☝️ meta con el",
          "pros": "resuelve dudas",
          "contras": "el resto",
          "periodo": "2025-2",
          "calificacion": 1.5,
          "dificultad": 4.4
        }
      },
      {
        "nombre": "Edgar Eduardo Daza Caicedo",
        "slug": "edgar-eduardo-daza-caicedo",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.01,
        "notaPromedio": 3.64,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Daza es un excelente profesor. No se la piense. Sabe muchísimo del tema, explica muy bien, las clases con él son amenas y es también muy amable. A veces es un poco tedioso que haga las demostraciones larguísimas del curso en medio de la clase, pero es parte de la materia, considero yo. Lo único malo que le encuentro a Daza es que no suele hacer demasiados ejercicios, así que uno no sabe muy bien qué estudiar para el parcial; procure, pues, hacerse con parciales viejos para poder estudiar.",
          "pros": "Explica muy bien. Es muy amable. Fue él quien diseñó el curso de Átomos y Moléculas.",
          "contras": "No se sabe bien qué estudiar para el parcial.",
          "periodo": "2025-2",
          "calificacion": 4.8,
          "dificultad": 3.7
        }
      },
      {
        "nombre": "Nelson Jair Castellanos Marquez",
        "slug": "nelson-jair-castellanos-marquez",
        "resenas": 45,
        "calidad": "regular",
        "calificacion": 3.85,
        "notaPromedio": 3.52,
        "resenasOcultas": 44,
        "resena": {
          "texto": "Solo les voy a decir que les va cambiar la vida",
          "pros": "Se aprende demasiado y lo prepara muy bien a uno para PAQ",
          "contras": "Exigente",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Martha Nancy Calderon Ozuna",
        "slug": "martha-nancy-calderon-ozuna",
        "resenas": 39,
        "calidad": "regular",
        "calificacion": 3.78,
        "notaPromedio": 4.08,
        "resenasOcultas": 38,
        "resena": {
          "texto": "Es una profesora bastante exigente, pero le gusta enseñar, acomoda ejemplos y ejercicio con base a la carrera que uno estudia, da tutorías y talleres largos pero muy útiles para los parciales. Si usted asiste a todas las clases y realiza los talleres saca buena nota con ella.",
          "pros": "Le gusta enseñar No pone temas de relleno, todo se usa. Lo prepara muy bien para los cursos avanzados A veces hace laboratorios",
          "contras": "Es bastante estricta Es muy poco flexible con las excusas medicas y horarios",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 4.6
        }
      },
      {
        "nombre": "Marco Fidel Suarez Herrera",
        "slug": "marco-fidel-suarez-herrera",
        "resenas": 30,
        "calidad": "regular",
        "calificacion": 3.58,
        "notaPromedio": 3.46,
        "resenasOcultas": 29,
        "resena": {
          "texto": "El profesor sabe mucho, y habla de varios temas que muchos profesores no hablarían en primer semestre. Se nota que le apasiona enseñar y te puede repetir el tema las veces que quieras, también es chévere que ponga ejercicios prácticos como experimentos ( son bien largos). Sin embargo es muy duro con las calificaciones (de los parciales), y los temas que maneja son a veces muy complicados, los parciales son difíciles y representan el 60% de la materia. Sé que hubo gente que la perdió con muy bajita nota, pero también hay personas que llevaron un promedio súper alto. Al profesor le gusta…",
          "pros": "Se aprende mucho y se pone en práctica los conocimientos. Es amable y le gusta responder a las preguntas. No tiene preferencias con nadie.",
          "contras": "Requiere de mucho estudio autónomo y no es fácil. NUNCA aproxima nota",
          "periodo": "2025-2",
          "calificacion": 3,
          "dificultad": 4.2
        }
      },
      {
        "nombre": "Juan Alberto Torres Luna",
        "slug": "juan-alberto-torres-luna",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 3.54,
        "notaPromedio": 3.35,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Realmente es un profesor muy completo, directamente no es nada sencilla la materia y el profesor pone dificultad, aun asi no lo hace con intenciones maliciosas y uno queda muy bien preparado para muchas otras materias, ya que el da breves introducciones. Sus clases son entretenidas, y siempre se basan en el libro guía a no ser que es de una indicacion contraria, por lo que uno aprende a adquirir habitos de estudio. El profesor se esmera por hacer mas cosas que no sea pararse hablas y ya, trae experimentos, busca otros recursos para que uno aprenda por videos y libros y se esfuerza para que…",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Carolina Blanco Jimenez",
        "slug": "carolina-blanco-jimenez",
        "resenas": 30,
        "calidad": "regular",
        "calificacion": 3.38,
        "notaPromedio": 3.64,
        "resenasOcultas": 29,
        "resena": {
          "texto": "La profe sabe mucho y enseña muy bien, se la recomiendo si tiene buenas bases del colegio si no usted está a tiempo de elegir a otro docente.",
          "pros": "-Buen material de Estudio -Aprende buenas bases -Quices",
          "contras": "-Parciales que pueden llegar a ser complejos -Tiene preferencias",
          "periodo": "2023-1",
          "calificacion": 3.5,
          "dificultad": 3.8
        }
      }
    ]
  },
  "2026365": {
    "nombre": "Nanomateriales y nanotecnología",
    "url": "https://losestudiantes.com/universidad-nacional/courses/nanomateriales-y-nanotecnologia",
    "profesores": [
      {
        "nombre": "Alvaro Duarte Ruiz",
        "slug": "alvaro-duarte-ruiz",
        "resenas": 16,
        "calidad": "regular",
        "calificacion": 2.58,
        "notaPromedio": 3.92,
        "resenasOcultas": 15,
        "resena": {
          "texto": "El profe Álvaro es muy buen profesor, se preocupa porque aprendas y te ensena cosas que sirven para tu futuro como profesional, ademas de que el tema del curso es muy hermoso, todo este curso fue una maravilla, tuvimos salidas a otros laboratorios, tareas como maquetas, definitivamente si pueden metan esta optativa, lo único es que si tienes que leer bastante pero se puede.",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2
        }
      }
    ]
  },
  "2026399": {
    "nombre": "Quimica De Aromas",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2026399",
    "profesores": [
      {
        "nombre": "Diana Cristina Sinuco Leon",
        "slug": "diana-cristina-sinuco-leon",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4,
        "notaPromedio": 4.6,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es curioso como una de las materias que más disfruté en el semestre fue al mismo tiempo de las que más deteste sus parciales. La clase es increíblemente interesante, no es particularmente pesada y uno aprende de todo, desde un poquito de la fisiología hasta la industria de los aromas. Ahora, la metodología de calificación es... En todo el primer corte repitió, múltiples veces, \"no me interesa la parte biológica, solo las reacciones químicas del olfato\". Y en el parcial salió, efectivamente, toda la parte biológica. Pide casi que semanalmente un resumen, a mano, de alguna lectura, loq ue…",
          "pros": "La clase es suave, interesante y no es difícil de pasar. Salidas técnicas a industrias interesantes Invitados a clase de diferentes disciplinas Aprenden a oler e identificar cositas La profesora es buena persona, y uno…",
          "contras": "Hay que leerle la mente para saber que quiere Preguntas sobre las lecturas extremadamente textuales Avisos espontáneos de tareas. Dejaba resúmenes de textos bien largos desde el domingo por la noche para entregar el…",
          "periodo": "2023-1",
          "calificacion": 4,
          "dificultad": 3
        }
      }
    ]
  },
  "2027211": {
    "nombre": "orígenes del pensamiento químico",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2027211",
    "profesores": [
      {
        "nombre": "Miguel Angel Montero Paez",
        "slug": "miguel-angel-montero-paez",
        "resenas": 11,
        "calidad": "regular",
        "calificacion": 3.13,
        "notaPromedio": 4.05,
        "resenasOcultas": 10,
        "resena": {
          "texto": "Montero es un personaje. En el laboratorio es tremendamente despreocupado (a veces demasiado, porque uno acaba perdiendo tiempo mientras él se toma el suyo para pasar por cada grupo), y para calificar también es muy relajado. Realmente, no tira a matar. La cosa llega en los seminarios, porque no solo tiene un ojo de águila para identificar los puntos débiles en los estudiantes, sino que además puede ser un poco grosero e intimidante. Igual, no tira duro con la nota, y también le invita las onces al grupo. Actúa como un tipo bravo e inamovible, pero es un amor en el fondo. Ah, y también va a…",
          "pros": "Gana carácter, un poco a la mala. No califica nada duro. Es un amor, y hasta chistoso.",
          "contras": "Puede ser grosero. Intimidante. Un poco desorganizado.",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 3.8
        }
      }
    ]
  },
  "2028061": {
    "nombre": "Introducción a la Química",
    "url": "https://losestudiantes.com/universidad-nacional/courses/introduccion-a-la-quimica",
    "profesores": [
      {
        "nombre": "Fernando Augusto Gomez Granados",
        "slug": "fernando-augusto-gomez-granados",
        "resenas": 3,
        "calidad": "mala",
        "calificacion": 2.67,
        "notaPromedio": 4.37,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Fernando es un tipo mediocre en general. No entiendo cómo un tipo así puede ser director del Departamento de Química, a menos que sea porque seguramente es fácilmente manipulable por sus superiores; no estaría en un puesto así si no fuera un títere. No sabe él mismo sus fechas de entrega de trabajos, todo se lo toma a la ligera, a veces llega furioso de la nada... Ni siquiera es capaz de mantener un buen aseo personal. Sin embargo, cuando está de buenas, es un tipo relajado, y le deja en cinco la materia sin problema. Ni de lejos es un buen profesor, pero si quiere algo fácil y con lo que…",
          "pros": "Le deja la materia en 5.0, y le ayuda sin problema a pasar. Introducción a la Química, exceptuándolo a él, es una materia muy bonita y disfrutable, y le inculcará más el gusto por la química.",
          "contras": "Mediocre. Inestable. Desorganizado. Irresponsable.",
          "periodo": "2024-1",
          "calificacion": 2,
          "dificultad": 1.5
        }
      }
    ]
  },
  "2029265": {
    "nombre": "Electroquímica analítica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/electroquimica-analitica",
    "profesores": [
      {
        "nombre": "Sara Luz Gomez Maya",
        "slug": "sara-luz-gomez-maya",
        "resenas": 7,
        "calidad": "regular",
        "calificacion": 3.26,
        "notaPromedio": 3.49,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Es una profesora increible, hay muchas notas a lo largo del semestre con diferente ponderación por lo cual es facil mantener un promedio alto. Es una materia que demanda mucho tiempo porque hay muchos temas y requieren mucho estudio autónomo. Los parciales casi siempre son ejercicios de clase o talleres, deja mucho material lo cual es una ventaja porque siempre hay como estudiar para quices y parciales. La verdad es una muy buena profesora que se le nota la pasión por enseñar, es chistosa, pero siempre es muy enfocada en su clase, es muy importante para ella las participaciones en clase, si…",
          "pros": "profe chevere muy objetiva calificando explica muy bien se preocupa realmente pq uno aprenda",
          "contras": "va muy rapido así que no se distraiga en clase",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Jesus Alberto Agreda Bastidas",
        "slug": "jesus-alberto-agreda-bastidas",
        "resenas": 4,
        "calidad": "mala",
        "calificacion": 1.5,
        "notaPromedio": 3.13,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Es un profesor muy disperso, sus clases no siguen un hilo conductor, enseña conceptos MUY básicos de la electroquímica y pregunta cosas extremadamente complejas en sus parciales, exige muchas cosas a sus estudiantes pero no se exige a sí mismo a ser un buen docente. Si le caes bien te ayuda, de lo contrario vas a perder con 2,9",
          "pros": "Ninguno",
          "contras": "Parciales de demostrar ecuaciones que NO enseña Califica duro No se concentra No es imparcial",
          "periodo": "2024-2",
          "calificacion": 1.5,
          "dificultad": 5
        }
      }
    ]
  },
  "2029266": {
    "nombre": "Laboratorio de métodos ópticos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/laboratorio-de-metodos-opticos",
    "profesores": [
      {
        "nombre": "Eliana Castillo Serna",
        "slug": "eliana-castillo-serna",
        "resenas": 9,
        "calidad": "regular",
        "calificacion": 3,
        "notaPromedio": 3.43,
        "resenasOcultas": 8,
        "resena": {
          "texto": "La profesora es estricta en el laboratorio, le gusta que todos trabajen y estudien para desarrollar las prácticas de laboratorio. A veces tiene una actitud fuerte pero siempre está dispuesta a responder preguntas. La verdad, me parece que es una opción con la que se aprende bastante sobre técnicas de laboratorio en métodos ópticos, pero considero que puede ser, asimismo, un poco estresante para algunas personas ver clase con ella. En mi caso tuve una buena experiencia viendo el laboratorio con ella.",
          "pros": null,
          "contras": null,
          "periodo": "2024-1",
          "calificacion": 4,
          "dificultad": 4.5
        }
      }
    ]
  },
  "2029267": {
    "nombre": "Laboratorio de electroquímica analítica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/laboratorio-de-electroquimica-analitica",
    "profesores": [
      {
        "nombre": "Andrea del pilar Sandoval",
        "slug": "andrea-del-pilar-sandoval",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.7,
        "notaPromedio": 4.02,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Excelente profesora. Aunque puede estresarse fácil, si usted tiene dominio del tema y prepara bien la práctica no va a tener inconveniente. Sabe mucho y está dispuesta a aclarar cualquier duda de teoría o de los informes en los horarios de consulta",
          "pros": null,
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 4.2
        }
      }
    ]
  },
  "2029268": {
    "nombre": "Cromatografía",
    "url": "https://losestudiantes.com/universidad-nacional/courses/cromatografia",
    "profesores": [
      {
        "nombre": "Zuly Jenny Rivera Monroy",
        "slug": "zuly-jenny-rivera-monroy",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.09,
        "notaPromedio": 3.99,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Quizás esta sea una opinión impopular, pero considero que la docente es desorganizada y demanda más de lo que ofrece. No cumple con lo establecido en el programa y modifica los criterios de evaluación a su conveniencia. Aunque muchos aseguran que es accesible y dispuesta a ayudar, no comparto esa percepción. Asigna una gran cantidad de tareas, no proporciona sus diapositivas a pesar de que las omite con frecuencia y casi no permite tomar apuntes, ya que siempre va con prisa.",
          "pros": "Ella sabe demasiado de lo que habla pero no lo comparte de manera adecuada",
          "contras": "No comparte diapositivas, va siempre a toda marcha, deja mucho trabajo para una asignatura de 1 crédito.",
          "periodo": "2024-1",
          "calificacion": 2,
          "dificultad": 4.4
        }
      }
    ]
  },
  "2029269": {
    "nombre": "Análisis Químico",
    "url": "https://losestudiantes.com/universidad-nacional/courses/analisis-quimico",
    "profesores": [
      {
        "nombre": "Julio Alberto Clavijo Penagos",
        "slug": "julio-alberto-clavijo-penagos",
        "resenas": 39,
        "calidad": "buena",
        "calificacion": 4.57,
        "notaPromedio": 3.96,
        "resenasOcultas": 38,
        "resena": {
          "texto": "Es un bacan este profe, hace que el laboratorio sea muy ameno, ademas de que siempre se sale temprano ya que explica muy bien las practicas, haciendo que el trabajo sea mas ágil, en los informes es seguir las indicaciones y ya, ademas de que es una gran persona y se tira sus chistes en el lab.",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3
        }
      }
    ]
  }
};
