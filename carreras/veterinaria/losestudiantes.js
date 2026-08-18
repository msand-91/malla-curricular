/* ============================================================================
   losestudiantes.js — GENERADO AUTOMÁTICAMENTE, no editar a mano.
   Fuente: losestudiantes.com
     · códigos y URLs verificados el 2026-08-18
     · profesores por materia actualizados el 2026-08-18
   Regenerar con:
     node herramientas/verificar-losestudiantes.js     (códigos y enlaces)
     node herramientas/sincronizar-profesores.js       (profesores)
   ========================================================================== */

const LE_BASE_PROFESOR = 'https://losestudiantes.com/universidad-nacional/professors/';
const LE_VERIFICADO = '2026-08-18';
const LE_PROFESORES_ACTUALIZADO = '2026-08-18';

/* código SIA -> { nombre, url, profesores: [{ nombre, slug, resenas, calidad }] } */
const LOSESTUDIANTES = {
  "1000001": {
    "nombre": "Matematicas Basicas",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000001",
    "profesores": [
      {
        "nombre": "Arles Ernesto Rodríguez Portela",
        "slug": "arles-ernesto-rodriguez-portela",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.93,
        "notaPromedio": 4.34,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Excelente profe, de los mejores que he tenido en toda la carrera. Es muy fácil seguirle el ritmo mientras aprendes, realmente no vas a sentir que la materia es pesada. 100% recomendado, si tienen la oportunidad de ver una clase con él, no la pierdan.",
          "pros": "- Tareas sencillas todas las clases que te permiten repasar los temas sin tener que estudiar después. - Parciales con cuaderno. - Claro con las notas.",
          "contras": "- No existen.",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Ibeth Marcela Rubio Perilla",
        "slug": "ibeth-marcela-rubio-perilla",
        "resenas": 53,
        "calidad": "buena",
        "calificacion": 4.76,
        "notaPromedio": 3.84,
        "resenasOcultas": 52,
        "resena": {
          "texto": "Marcela es una profe muy buena, muy organizada con sus tiempos y con las notas, deja mucho material de estudio y no es muy dificil pasar con ella, además, es muy puntual con sus clases y aprovecha las 2 horas completas, explica muy bien aunque aveces corre mucho, responde el correo rápido y es muy madre en general, los parciales son un poco duros, pero no es dificil si hay estudio autónomo. Recomendada",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 4.9,
          "dificultad": 3.6
        }
      },
      {
        "nombre": "John Jaime Rodriguez Vega",
        "slug": "john-jaime-rodriguez-vega",
        "resenas": 54,
        "calidad": "buena",
        "calificacion": 4.74,
        "notaPromedio": 4.07,
        "resenasOcultas": 53,
        "resena": {
          "texto": "Este profe es súper amable, mega organizado, trae sus clases bien preparadas y los temas claros. Lleva tanto orden que incluso termina las clases antes, ya que cubre satisfactoriamente todos los temas necesarios. Tiene los apuntes de clase siempre preparados, es amable y carismático. Deja sacar apuntes en los parciales.",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 4.7,
          "dificultad": 3.6
        }
      },
      {
        "nombre": "Martha Cecilia Moreno Penagos",
        "slug": "martha-cecilia-moreno-penagos",
        "resenas": 70,
        "calidad": "buena",
        "calificacion": 4.64,
        "notaPromedio": 4.12,
        "resenasOcultas": 69,
        "resena": {
          "texto": "Una profesora muy completa, con amaiblidad y una buena pedagodía. La recomiendo si quiere aprender. EL nivel de los parciales es justo a lo que enseña y entrega talleres muy útiles.",
          "pros": "Buena pedagogia Parciales justos",
          "contras": null,
          "periodo": "2026-2",
          "calificacion": 4.9,
          "dificultad": 3
        }
      },
      {
        "nombre": "Margaret Johanna Garzon Merchan",
        "slug": "margaret-johanna-garzon-merchan",
        "resenas": 35,
        "calidad": "buena",
        "calificacion": 4.64,
        "notaPromedio": 4.04,
        "resenasOcultas": 34,
        "resena": {
          "texto": "Esta es una de esas profesoras que le generan a uno confianza y es muy muy buena persona",
          "pros": "Enseña muy bien Le hacer coger cariño a las mates Excelente material de estudio",
          "contras": "Ninguno",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Lorenzo Maria Acosta Gempeler",
        "slug": "lorenzo-maria-acosta-gempeler",
        "resenas": 46,
        "calidad": "buena",
        "calificacion": 4.62,
        "notaPromedio": 3.91,
        "resenasOcultas": 45,
        "resena": {
          "texto": "El profe Lorenzo pienso que explica bien. Sin embargo, los parciales no eran fáciles y califica muy duro. Así como hay temas que explica muy bien, hay temas que no explica como suma directa o anillos de polinomios (limitándose a escribir únicamente el criterio de Einsenstein). Por otra parte, ha sido el profesor más traumático que tuve en la carrera. Si bien hay profes que explican mal, Lorenzo fue el más humillante y con más preferencias. Repetidas ocasiones gritaba y se enojaba cuando alguien no le respondía algo, al punto de ser humillante y llegar a decir que habían muchos que no merecían…",
          "pros": "Hay muchas cosas que las explica bien Cuando quiere es muy amable",
          "contras": "Puede ser humillativo y temperamental Califica duro",
          "periodo": "antes",
          "calificacion": 3,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Leonardo Rendon Arbelaez",
        "slug": "leonardo-rendon-arbelaez",
        "resenas": 40,
        "calidad": "buena",
        "calificacion": 4.6,
        "notaPromedio": 3.81,
        "resenasOcultas": 39,
        "resena": {
          "texto": "El profesor es algo bueno, pero va demasiado rapido al inicio, no deja copiar casi al tablero cuando esta borrando, puede ver perdido a la mitad de la clase, repite pero va rapido, hace quices cada semana y al final de 9 o más, termina escogiendo al rededor de unos 6 o 7. En cuanto a su forma de evaluar, evalua lo que enseña, deja talleres de repaso, pero el parcial siempre tiene su dificultad, por lo menos a mi, al final hace un supletorio que la verdad no es tan dificil como muchos lo comentan.",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 3,
          "dificultad": 4
        }
      },
      {
        "nombre": "Margarita Ospina Pulido",
        "slug": "margarita-ospina-pulido",
        "resenas": 23,
        "calidad": "buena",
        "calificacion": 4.59,
        "notaPromedio": 4.14,
        "resenasOcultas": 22,
        "resena": {
          "texto": "Buena profe de transición entre el colegio y la U por que mantiene aspectos que no le permiten quedarse atrás (escuelera) pero así mismo exige al nivel universitario enseñando autonomía. Le preocupa el estudiante y que aprenda.",
          "pros": "Buenos Talleres Buena Actitud",
          "contras": "Su voz da alguito de sueño",
          "periodo": "2019-1",
          "calificacion": 4.6,
          "dificultad": 3
        }
      },
      {
        "nombre": "Milton Armando Reyes Villamil",
        "slug": "milton-armando-reyes-villamil",
        "resenas": 57,
        "calidad": "buena",
        "calificacion": 4.57,
        "notaPromedio": 4.17,
        "resenasOcultas": 56,
        "resena": {
          "texto": "Es un profe que explica muy bien y hace que los temas se entiendan sin tanta vuelta. Se nota que le importa que uno de verdad aprenda y no solo pase la materia. A veces es un poco estricto, pero es porque le gusta que los estudiantes se esfuercen y hagan las cosas bien. Si uno tiene dudas, siempre saca el tiempo para resolverlas. En general, es un muy buen profesor y sus clases valen la pena.",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Jeanneth Galeano Penaloza",
        "slug": "jeanneth-galeano-penaloza",
        "resenas": 47,
        "calidad": "buena",
        "calificacion": 4.52,
        "notaPromedio": 3.97,
        "resenasOcultas": 46,
        "resena": {
          "texto": "Jeanneth es una profesora muy completa, la forma de enseñar y la dedicación es increíble, no hay tema que no se le entienda a ella, los parciales suelen ser un poco difíciles especialmente el último pero estudiando son realizables y se pueden dejar altos, hace quiz virtual que es una gran ventaja y ayuda esa nota mucho para pasar. Sube todas las diapositivas al moodle aunque en ellas no está ni la mitad que explica en clase, si sirven para seguir el temario. En general Jeanneth es una buena profesora aunque a veces puede ser un tanto odiosa y en los parciales ayuda demasiado, responde todas…",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3.5
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
        "nombre": "Gustavo Adolfo Nieto Clavijo",
        "slug": "gustavo-adolfo-nieto-clavijo",
        "resenas": 89,
        "calidad": "buena",
        "calificacion": 4.34,
        "notaPromedio": 4.02,
        "resenasOcultas": 88,
        "resena": {
          "texto": "Gustavo es un buen profesor, llega puntual a clase y avanza a un buen ritmo, deja ejercicios para repasar antes de parciales y quices, además que resuelve dudas y es chistoso. Es muy buen profesor para empezar la carrera si tienen que ver Geometria y califica 75% Parciales 25% Quices y hace supletorio para subir alguna nota, pero no se confien, pq yo me confié y saque 1 en el primer parcial. De resto muy buen profesor :)",
          "pros": "Resuelve Dudas Puntual Explica Bien",
          "contras": "No es muy claro con las fechas de los parciales, las acomoda según avanza el curso Aveces se confunde con las demostraciones o no las termina",
          "periodo": "2026-1",
          "calificacion": 4,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Yeison Alexánder Sánchez Rubio",
        "slug": "yeison-alexander-sanchez-rubio",
        "resenas": 17,
        "calidad": "buena",
        "calificacion": 4.31,
        "notaPromedio": 3.78,
        "resenasOcultas": 15,
        "resena": {
          "texto": "El mejor, lo amo, que me haga un hijo................................................................",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3.1
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
        "nombre": "Alejandra Sanchez Vasquez",
        "slug": "alejandra-sanchez-vasquez",
        "resenas": 31,
        "calidad": "regular",
        "calificacion": 3.68,
        "notaPromedio": 4.16,
        "resenasOcultas": 30,
        "resena": {
          "texto": "Al inicio se le entiende bien los temas, pero uno llega a aplicaciones de la derivada y se pega la mayor perdida del mundo, cancela clases y usualmente no las repone si no que se pone a explicar más rápido las cosas, uno hace los parciales prácticamente a ciegas porque los entrega hasta el último día, algunos parciales de opción múltiple no tienen la respuesta correcta en la opción múltiple o o los entrega mal calificados, da las notas finales hasta el penúltimo día en el que tienen que subir las notas al sia",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 2,
          "dificultad": 3.7
        }
      },
      {
        "nombre": "Carolina Neira Jimenez",
        "slug": "carolina-neira-jimenez",
        "resenas": 51,
        "calidad": "regular",
        "calificacion": 3.63,
        "notaPromedio": 3.34,
        "resenasOcultas": 50,
        "resena": {
          "texto": "Hablar de Carolina Neira es un tema complejo; tan pronto como usted diga algo negativo, tiene al menos cinco comentarios tildándolo de vago y diciendo que usted no estudia y por eso le perdió a Carolina Neira, que usted no está listo para profesores de más nivel y que, si le tocó ver con ella, usted es un bendecido de Dios porque le tocó aprender a usar LaTeX y aprendió con una profesora exigente, etc. No considero que Carolina Neira sea una mala docente, dado que explica bastante bien y su actitud, comparable con la de una profesora de kínder (en su actitud positiva y su amabilidad), le…",
          "pros": "buena gente Uno se siente en un kinder",
          "contras": "Cuchilla tira re duro",
          "periodo": "2025-2",
          "calificacion": 3.4,
          "dificultad": 4.6
        }
      },
      {
        "nombre": "Jose Reinaldo Montanez Puentes",
        "slug": "jose-reinaldo-montanez-puentes",
        "resenas": 60,
        "calidad": "regular",
        "calificacion": 3.58,
        "notaPromedio": 3.89,
        "resenasOcultas": 59,
        "resena": {
          "texto": "Es un tipo de acosador con las muchachas de matemáticas básicas, se aprovecha de el auditorio a tirar chistes y comentarios asquerosos hacia niñas haciendo como si no supiera que dijo algo malo",
          "pros": "Facil de pasar",
          "contras": "Acosador",
          "periodo": "2025-2",
          "calificacion": 2,
          "dificultad": 1.9
        }
      },
      {
        "nombre": "Mario Andres Velasquez Mendez",
        "slug": "mario-andres-velasquez-mendez",
        "resenas": 11,
        "calidad": "regular",
        "calificacion": 3.48,
        "notaPromedio": 3,
        "resenasOcultas": 10,
        "resena": {
          "texto": "el profesor es enredado en explicar, es enredado en explicar, el tutor intentaba dar un repaso de la clase magistral y era igual de confuso, de los quices lo bueno era que eliminaba las notas malas si sacaba mas de 8 notas pero si no, dejaba las 8 fuera como estuvieran. Necesario estudiar los talleres, son de gran ayuda para los parciales.",
          "pros": null,
          "contras": null,
          "periodo": "2023-1",
          "calificacion": 2.8,
          "dificultad": 3.5
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
      },
      {
        "nombre": "Natalia Camila Pinzon Cortes",
        "slug": "natalia-camila-pinzon-cortes",
        "resenas": 70,
        "calidad": "regular",
        "calificacion": 3.26,
        "notaPromedio": 3.62,
        "resenasOcultas": 69,
        "resena": {
          "texto": "Por donde empezar. La verdad no entiendo el hate tan desmedido que se le tira a esta profe. Según mi experiencia: la profe explica super bien, las clases se pueden volver tediosas (un poco densas) más sin embargo, si usted se dispone a ponerle atención lo logra fácil, por otro lado la profe es buena gente, se deja hablar y pese a ser un tanto cuadriculada con la entrega de las tareas que deja, intenta hacer fácil el pasar la materia. Eso sí, es increíble lo impuntual que es, así que no recomiendo meter con ella si esa va a ser su única clase del día ya que el 90% de las clases terminan siendo…",
          "pros": "Explica super bien Parciales trabaja les Deja tableros en moodle que ayudan bastante",
          "contras": "Llega por lo menos media hora tarde de ley incluso en parciales",
          "periodo": "2026-2",
          "calificacion": 4.4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jhon Jairo Sosa Rosero",
        "slug": "jhon-jairo-sosa-rosero",
        "resenas": 2,
        "calidad": "regular",
        "calificacion": 3.25,
        "notaPromedio": 2.65,
        "resenasOcultas": 1,
        "resena": {
          "texto": "En general es buen profesor, aunque a veces se enreda en las explicaciones trata de exponerlas de la mejor manera.",
          "pros": "- Es flexible al calificar quices y parciales (Te califica el proceso) - Es flexible con las fechas de parciales, talleres o quices. - Es empático con los estudiantes - Se ve que sabe bastante",
          "contras": "- Suele ser algo demorado a la hora de entregar calificaciones - A veces llega tarde ( pero se toma hasta el ultimo minuto de la clase)",
          "periodo": "2019-2",
          "calificacion": 4.5,
          "dificultad": 4.1
        }
      },
      {
        "nombre": "Jhonatan Steven Mora Rodriguez",
        "slug": "jhonatan-steven-mora-rodriguez",
        "resenas": 31,
        "calidad": "mala",
        "calificacion": 2.87,
        "notaPromedio": 3.18,
        "resenasOcultas": 29,
        "resena": {
          "texto": "El profesor no sabe explicar, ya que nos tocó en un salón largo y angosto, por lo tanto, ver el tablero era un desafio y más para las personas que no tienen buena vista. Escribía pequeñas la letras y números, escribía en la parte inferior del tablero y uno no veía nada le tocaba irse hasta el tablero a ver que escribía a pesar de tener 4 televisores gigantes en el salón casi no los usaba. Se fue de vacaciones y nos dejó con una profesora se atrasó en temas y lo que hizo fue subir en el moddle todo ese montonón de temas creyendo que así nos ibamos a aprender todo eso. Los parciales son largos…",
          "pros": "Los quices no son tan complicados solo es hacerse con un buen grupo Los parciales no son tan complicados pero son extensos",
          "contras": "No sabe explicar Se explica a el mismo Si no sabe de cálculo no inscriba con ese profesor Se va de vacaciones y se atrasa en temas para después subir todo a moddle y que nosotros resolvamos",
          "periodo": "2024-2",
          "calificacion": 2,
          "dificultad": 4
        }
      },
      {
        "nombre": "Gabriel Ignacio Padilla Leon",
        "slug": "gabriel-ignacio-padilla-leon",
        "resenas": 66,
        "calidad": "mala",
        "calificacion": 2.74,
        "notaPromedio": 3.32,
        "resenasOcultas": 64,
        "resena": {
          "texto": "El profesor Gabriel es muy amable y explica de una forma que se le entiende muy bien, lo malo que veo de él es que le daba mucho tiempo a los primeros temas y el resto de temas no se ven con tanta profundidad como se debería. Los parciales son acorde a lo que enseña, además que da preparciales que son casi lo mismo que aparece en el parcial, así que en ese aspecto usted sabe lo que tiene que estudiar. El profesor a veces deja algún taller para subir puntos en el parcial y suele hacer revisiones para que logre subir alguna décima si lo convence. Me pareció fácil pasar con él.",
          "pros": "Amable Preparcial y puntos extra para el parcial Quices virtuales",
          "contras": "Se demora mucho en los primeros temas A veces llega tarde",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Vladimir Angulo Castillo",
        "slug": "vladimir-angulo-castillo",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 1.5,
        "notaPromedio": 3.5,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Sherly Paola Alfonso",
        "slug": "sherly-paola-alfonso",
        "resenas": 12,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Explica bien pero no se porque a Sherly le gusta poner tantas cáscaras en los parciales ¿Cuál es la necesidad de eso?",
          "pros": null,
          "contras": null,
          "periodo": "2019-10",
          "calificacion": 3.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Daniel Alfonso Bojaca Torres",
        "slug": "daniel-alfonso-bojaca-torres",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es muy paciente y explica muy bien los temas. Es muy amable ya que siempre está disponible para una asesoría.",
          "pros": "Los parciales son sencillos, pero hay que prestar mucha atención a los detalles para no tirárselos.",
          "contras": "Sus cursos siempre tienen sobrecupo.",
          "periodo": "intersemestral",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Edwin Aldemar Jiménez Quiroga",
        "slug": "edwin-aldemar-jiménez-quiroga",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Explica los temas con claridad. Tiene buen dominio de la materia.",
          "pros": null,
          "contras": null,
          "periodo": "otro",
          "calificacion": 4.4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Maria Claudia Lucia Ordoñez",
        "slug": "maria-claudia-lucia-ordoñez-ordoñez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "1000002": {
    "nombre": "Lecto-Escritura",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000002",
    "profesores": [
      {
        "nombre": "Adriana Cuevas",
        "slug": "adriana-cuevas",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.96,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Es muy buena profesora muy amable, sabe explicar muy bien los temas, actividades divertidas, deja unos cuantos trabajos, pero todos aportan mucho a la materia, es muy tranquila y detallista, ayuda siempre con lo que pueda en los trabajos, da teoría y herramientas necesarias para todo",
          "pros": "Todo con ella es una ventaja desde como saca las notas hasta como pide los trabajos",
          "contras": null,
          "periodo": "2022-1",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Lizbeth Paola Sierra Lopez",
        "slug": "lizbeth-paola-sierra-lopez",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.38,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Como ya se mencionó antes ella es constructivista, por lo que sus clases y actividades son algo diferentes a lo que estamos acostumbrados. Su clase consiste en la escritura de un antproyecto para una investigación en grupos, no llevar a cabo toda la investigación como tal. Me parece que eso es bastante acertado y ayuda a que uno no se quiera matar en los finales. Ella divide las calificaciones en 3 o 4 entregas del anteproyecto y una reflexión final. Sin embargo, también se llevan a cabo algunas presentaciones pequeñas, lecturas y hay mucha discusión en grupo. Fuera de eso, la profesora es…",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 3.9
        }
      },
      {
        "nombre": "Paola Isabel Mejia Rodriguez",
        "slug": "paola-isabel-mejia-rodriguez",
        "resenas": 12,
        "calidad": "regular",
        "calificacion": 3.34,
        "notaPromedio": 4.5,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Demuestra dominio del tema y mantiene a los estudiantes activos en clase, además que el utilizar un tema en específico para orientar los trabajos permite revisar las diferencias entre los tipos de textos de forma objetiva.",
          "pros": "Uso de diferentes TIC Comunicación constante con los estudiantes Retroalimentación completa de los trabajos",
          "contras": "Impuntual Volátil Demorada con la entrega de notas",
          "periodo": "2021-10 (virtual)",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Linda Katherine González Álvarez",
        "slug": "linda-katherine-gonzález-álvarez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Luisa Fernanda Arroyave Ferreiro",
        "slug": "luisa-fernanda-arroyave-ferreiro",
        "resenas": 0,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Maria Claudia Lucia Ordoñez",
        "slug": "maria-claudia-lucia-ordoñez-ordoñez",
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
        "nombre": "Gabriel Antonio Pinilla Agudelo",
        "slug": "gabriel-antonio-pinilla-agudelo",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 4.74,
        "notaPromedio": 4.33,
        "resenasOcultas": 7,
        "resena": {
          "texto": "El mejor profesor. Inspira pasión por la ecología, sus clases eran muy interesantes y hacía que hasta los temas más pesados fuesen entretenidos.",
          "pros": null,
          "contras": null,
          "periodo": "2022-1",
          "calificacion": 5,
          "dificultad": 4
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
        "nombre": "Jose Ernesto Mancera Pineda",
        "slug": "jose-ernesto-mancera-pineda",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.65,
        "notaPromedio": 4.05,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Es muy buen profesor, es una autoridad en su campo, sin embargo sentí que perdí el interés en algún momento dado que su manera de dictar las clases decayó al cliche de leer diapositivas durante dos horas. pese a lo anteriormente mencionado, él siempre respondía a las inquietudes que se presentarán especialmente en el desarrollo de los talleres. En particular sus reflexiones sobre como nuestras acciones traen consecuencias sobre el medio ambiente me hicieron replantear muchas cosas, creo que solo con ese detalle cumplió con su objetivo.",
          "pros": "Cuenta con variedad de actividades Los parciales son sencillos Su mensaje realmente genera impacto y hace reflexionar",
          "contras": "Las primeras clases son muy didácticas y fluidas, pero a medida que avanzan, se van volviendo muy monótonas",
          "periodo": "2025-1",
          "calificacion": 4.6,
          "dificultad": 4
        }
      },
      {
        "nombre": "Luis Juan Rubiano Olaya",
        "slug": "luis-juan-rubiano-olaya",
        "resenas": 32,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.67,
        "resenasOcultas": 31,
        "resena": {
          "texto": "Posiblemente el mejor profesor de esta materia, además suelen acabarse los cupos de esta, ayuda a subir el PAPA y el PAPI",
          "pros": "Excelente docente, explica bien, ayuda a los estudiantes, temas muy interesantes.",
          "contras": "Suele llegar un poco tarde.",
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 2.1
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
        "nombre": "Pedro Sanchez Palomino",
        "slug": "pedro-sanchez-palomino",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 4.44,
        "notaPromedio": 4.37,
        "resenasOcultas": 12,
        "resena": {
          "texto": "El mejor profesor de ecología, puede que sea aburrido , pero es un amor , explica chévere, es amable, califica bien y parcial virtual.",
          "pros": "Todo es hermoso",
          "contras": "Es un tris aburrido",
          "periodo": "2025-1",
          "calificacion": 4.7,
          "dificultad": 1.6
        }
      },
      {
        "nombre": "Nubia Estella Matta Camacho",
        "slug": "nubia-estella-matta-camacho",
        "resenas": 3,
        "calidad": "regular",
        "calificacion": 4.33,
        "notaPromedio": 4.53,
        "resenasOcultas": 2,
        "resena": null
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
        "nombre": "Luis Fernando Garcia Pinzon",
        "slug": "luis-fernando-garcia-pinzon",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.25,
        "notaPromedio": 4.5,
        "resenasOcultas": 5,
        "resena": {
          "texto": "El profe es muy querido, sabe bastante sobre evolución y genética y se esfuerza por enseñar. Hace talleres que son interesantes y un parcial en su módulo. A veces las clases no tienen tanta profundidad, pero es entendible por la cuestión de tiempo.",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 4.5,
          "dificultad": 4
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
        "nombre": "Adriana Rocio Jerez Martinez",
        "slug": "adriana-rocio-jerez-martinez",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.14,
        "notaPromedio": 4.03,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Es buena enseñando, amable, y sus clases son entretenidas. No le gusta que la gente llegue tarde y por eso hace quizes al empezar la clase. Los parciales son de memorizarse nombres, pero ella lo dice así que si se estudia es posible sacar buena nota.",
          "pros": null,
          "contras": null,
          "periodo": "2023-1",
          "calificacion": 4.3,
          "dificultad": 4
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
        "nombre": "Miguel Angel Gamboa Gaitan",
        "slug": "miguel-angel-gamboa-gaitan",
        "resenas": 22,
        "calidad": "buena",
        "calificacion": 3.83,
        "notaPromedio": 4.27,
        "resenasOcultas": 21,
        "resena": {
          "texto": "El profe es súper flexible con la entrega de trabajos, si hay una justificación válida para un caso especial y si no el mismo aplaza la fecha de entrega. Es súper dinámico y le encanta que uno participe, lo único tedioso por decirlo así es que las clases son solo poner atención y a veces los horarios hacen dar sueñito. Las evaluaciones siempre traen temas que el no explica en clase pero si manda el material al correo, REVISEN TODO LO QUE LES MANDA, lo van a agradecer. Los laboratorios son divertidos pero si no se pone atención en clase teórica se va a perder en el laboratorio y no va a saber…",
          "pros": "No molesta para nada, es muy relajado con los talleres, es chistoso y molesta decentemente, su forma de hablar y explicar las cosas es muy bonita puede hablar un tema algo grotesco pero de escucha agradable. Super…",
          "contras": "Responde un poco tarde los correos y nunca toma asistencia. A veces es un poco injusto porque cuando alguien no asiste a las evaluaciones no pasa nada y la presenta la próxima clase en donde ya se pudo copiar de otro…",
          "periodo": "2025-1",
          "calificacion": 4.4,
          "dificultad": 3
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
        "nombre": "Ernesto Javier Puertas Dellepianes",
        "slug": "ernesto-javier-puertas-dellepianes",
        "resenas": 32,
        "calidad": "regular",
        "calificacion": 3.68,
        "notaPromedio": 4.33,
        "resenasOcultas": 31,
        "resena": {
          "texto": "La verdad no conozco al resto de profesores de fundamentos de ecologia, si pudiera volver a ver con el esta materia lo haria. es muy amable y todo lo sube al classroom lo que necesita, guias, videos y bueno, puede pasar la materia si no los ve de igual forma. Los temas que abarca que a la misma vez a veces lo compara en su vida cotidiana pueden ser interesantes. En cuanto la exigencia academica no fue mucha, con apuntes de sus clases y recordar los temas se pueden pasar los parciales que igualmente es en grupo y al aire libre que muchas veces no presta mucha atención si alguien usa celular o…",
          "pros": "se puede dejar alta parciales en grupo no toma lista bastante amable",
          "contras": "las clases pueden tornarse un poco aburridas pero si se le sigue el ritmo no se vuelven tediosas",
          "periodo": "2025-2",
          "calificacion": 4.5,
          "dificultad": 2.3
        }
      },
      {
        "nombre": "Rodulfo Ospina Torres",
        "slug": "rodulfo-ospina-torres",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 3.66,
        "notaPromedio": 4.14,
        "resenasOcultas": 7,
        "resena": {
          "texto": "El profesor parece dominar los temas de los que habla, pero es pésimo para transmitir la información. Podrá ser buena persona y tierno, pero con ternura no se aprende. En el parcial de su módulo de Biología General, se sacó 50 preguntas de quién sabe dónde, que no tenían nada que ver con el tema, y que ni bien enumeradas estaban en la hoja. No sé hasta qué punto sea cosa de su edad, o si siempre fue así de irresponsable, pero puedo decir con seguridad que no aprendí NADA con él.",
          "pros": "Es buena persona. Se deja hablar.",
          "contras": "Es irresponsable. Es mal profesor, y no sabe transmitir la información.",
          "periodo": "2024-1",
          "calificacion": 2,
          "dificultad": 2.7
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
        "nombre": "Jhon Charles Donato Rondon",
        "slug": "jhon-charles-donato-rondon",
        "resenas": 2,
        "calidad": "regular",
        "calificacion": 3.2,
        "notaPromedio": 3.75,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Es muy buen profesor, explica muy bien y hace que las personas se interesen en la clase, deja trabajos sencillos. Explica cada tema escogiendo las palabras clave, usa diapositivas y vídeos para guiar el proceso académico.",
          "pros": "Deja trabajos fáciles Explica bien",
          "contras": "Grababa las clases, pero no generaba el permiso para volverlas a ver.",
          "periodo": "2020-10 (virtual)",
          "calificacion": 4.9,
          "dificultad": 4
        }
      },
      {
        "nombre": "Edgar Ernesto Camero Rubio",
        "slug": "edgar-ernesto-camero-rubio",
        "resenas": 24,
        "calidad": "mala",
        "calificacion": 3.08,
        "notaPromedio": 3.73,
        "resenasOcultas": 23,
        "resena": {
          "texto": "Muy buen profesor. Hace resumenes en cada clase con muy buen dominio del tema. Si se estudia lo suficiente los examenes resultan faciles por que no pregunta nada que no este en el programa.",
          "pros": null,
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 4.1
        }
      },
      {
        "nombre": "Mary Ruth Garcia Conde",
        "slug": "mary-ruth-garcia-conde",
        "resenas": 35,
        "calidad": "regular",
        "calificacion": 3.05,
        "notaPromedio": 4.13,
        "resenasOcultas": 34,
        "resena": {
          "texto": "Es buena docente y explica todo súper bien",
          "pros": "Es fácil pasar si va a clase Talleres y parciales fáciles",
          "contras": "Tienes que ser muy vago y dejado pa perder",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Luz Marina Melgarejo Muñoz",
        "slug": "luz-marina-melgarejo-muñoz",
        "resenas": 10,
        "calidad": "mala",
        "calificacion": 2.76,
        "notaPromedio": 3.59,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Lamentablemente, la profesora no ha demostrado un ejercicio justo ni pedagógicamente adecuado de su labor docente. Se percibe una clara preferencia por ciertos estudiantes, a quienes asigna buenas calificaciones, mientras que a otros les exige con un nivel de severidad desproporcionado. En repetidas ocasiones ha mencionado que entregó directrices para la elaboración de las gráficas del póster, pero estas nunca fueron comunicadas de manera clara ni documentada. Además, solicita condensar más de diez prácticas en un solo póster sin omitir detalle alguno, lo cual no solo es poco realista, sino…",
          "pros": "Ninguno, si tiene la oportunidad piérdasela.",
          "contras": "Lamentablemente, la profesora no ha demostrado un ejercicio justo ni pedagógicamente adecuado de su labor docente. Se percibe una clara preferencia por ciertos estudiantes, a quienes asigna buenas calificaciones,…",
          "periodo": "otro",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Felipe Sarmiento Salazar",
        "slug": "felipe-sarmiento-salazar",
        "resenas": 10,
        "calidad": "mala",
        "calificacion": 2.66,
        "notaPromedio": 4.73,
        "resenasOcultas": 9,
        "resena": {
          "texto": "El profesor es un poco irrespetuoso y confianzudo, no se deja hablar y cuando uno escribe sobre alguna duda a su correo simplemente puede responder que lea más el libro que ahí está todo. Sus clases en sí no eran muy enriquecedoras de temáticas, se saltaba temas que porque ya debíamos saberlo y así. Se solían cruzar las clases con sus clases o reuniones de posgrado.",
          "pros": "Los parciales son muy fáciles",
          "contras": "Los talleres eran ambiguos y siempre estaban mal calificados",
          "periodo": "2020-10 (virtual)",
          "calificacion": 2.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Alfredo Badillo Ujueta",
        "slug": "alfredo-badillo-ujueta",
        "resenas": 65,
        "calidad": "mala",
        "calificacion": 2.48,
        "notaPromedio": 3.64,
        "resenasOcultas": 64,
        "resena": {
          "texto": "Terrible explicacion, demasiado entusiasta para explicar pero no se comparte el entusiasmo, bastante mediocre con los parciales, no lo recomiendo.",
          "pros": "Es interesante las clases",
          "contras": "Aburridas, no aprendes nada de el, y el parcial es peor",
          "periodo": "2025-2",
          "calificacion": 2,
          "dificultad": 4.5
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
        "nombre": "Silvio Zuluaga Ramirez",
        "slug": "silvio-zuluaga-ramirez",
        "resenas": 8,
        "calidad": "mala",
        "calificacion": 2.06,
        "notaPromedio": 4,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Uno de los peores profesores de la UNAL. Cero puntos.",
          "pros": "Es amable.",
          "contras": "No debería enseñar. No aprendí nada en su clase, pero leí obras de literatura famosa en su clase.",
          "periodo": "antes",
          "calificacion": 1.5,
          "dificultad": 1.5
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
  "1000010": {
    "nombre": "Biologia Molecular Y Celular",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000010",
    "profesores": [
      {
        "nombre": "Claudio Jaime Gomez Alegria",
        "slug": "claudio-jaime-gomez-alegria",
        "resenas": 55,
        "calidad": "buena",
        "calificacion": 4.73,
        "notaPromedio": 4.01,
        "resenasOcultas": 54,
        "resena": {
          "texto": "Es un buen profe, resuelve dudas, explica muy bien los temas, a veces da consejos de vida, sus parciales no son tan difíciles si te lees el libro de Cooper, pero sinceramente (porque no es de mi campo de estudio), no le metí el enfoque necesario a la materia y no pude dejarla alta.",
          "pros": "-Explica bien los temas. -En algunas ocasiones es gracioso. -A veces da consejos de vida.",
          "contras": "-No le gusta que le hagan dibujitos en los parciales",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Angela Patricia Rojas",
        "slug": "angela-patricia-rojas-rojas",
        "resenas": 30,
        "calidad": "regular",
        "calificacion": 3.72,
        "notaPromedio": 4.25,
        "resenasOcultas": 29,
        "resena": {
          "texto": "Domina muy bien los temas, explica de manera clara lo que hay que hacer en cada practica de laboratorio, sin embargo tiene la particularidad de que siempre llega tarde al laboratorio, lo que provoca que las practicas se retrasen y que se deba correr para terminarlas, además que ella mete presión con el tiempo y mas si son el primer grupo del laboratorio. Ojo con el tema del ruido, a ella no le gusta el ruido, lean las guías antes de cada practica, no son practicas difíciles pero si le molesta que nadie responda a las preguntas que hace en medio de la explicación. El laboratorio es fácil de…",
          "pros": "Fácil de pasar Quices sencillos Practicas sencillas",
          "contras": "Llega tarde Anda de afán",
          "periodo": "2026-1",
          "calificacion": 3.5,
          "dificultad": 3
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
        "nombre": "Alfredo Badillo Ujueta",
        "slug": "alfredo-badillo-ujueta",
        "resenas": 65,
        "calidad": "mala",
        "calificacion": 2.48,
        "notaPromedio": 3.64,
        "resenasOcultas": 64,
        "resena": {
          "texto": "Terrible explicacion, demasiado entusiasta para explicar pero no se comparte el entusiasmo, bastante mediocre con los parciales, no lo recomiendo.",
          "pros": "Es interesante las clases",
          "contras": "Aburridas, no aprendes nada de el, y el parcial es peor",
          "periodo": "2025-2",
          "calificacion": 2,
          "dificultad": 4.5
        }
      }
    ]
  },
  "1000011": {
    "nombre": "Fundamentos De Ecologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000011",
    "profesores": [
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
        "nombre": "Jose Luis Ramirez",
        "slug": "jose-luis-ramirez",
        "resenas": 48,
        "calidad": "buena",
        "calificacion": 4.52,
        "notaPromedio": 3.78,
        "resenasOcultas": 47,
        "resena": {
          "texto": "Es un gran maestro, explica muy bien y resuelve dudas de manera amable en la clase. - Es God por lo que tiene notas de clase. - Si usted es de estadística no se lo recomiendo ya que va a sufrir. - Debe dedicarle MUCHO tiempo a la materia. Los porcentajes son: 30% Talleres 70 % 3 Parciales Yo en lo personal no volvería a meter con él por lo que califica muy duro, pero si usted sabe demostrar la puede dejar alta, eso sí sea muy riguroso.",
          "pros": "- Es pasable por los talleres. - Tiene sus propias notas de clase y su propio libro de la materia",
          "contras": "- Califica muy duro. - Es muy exigente. - La materia come mucho tiempo por los talleres que deja.",
          "periodo": "2025-1",
          "calificacion": 4.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Luis Juan Rubiano Olaya",
        "slug": "luis-juan-rubiano-olaya",
        "resenas": 32,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.67,
        "resenasOcultas": 31,
        "resena": {
          "texto": "Posiblemente el mejor profesor de esta materia, además suelen acabarse los cupos de esta, ayuda a subir el PAPA y el PAPI",
          "pros": "Excelente docente, explica bien, ayuda a los estudiantes, temas muy interesantes.",
          "contras": "Suele llegar un poco tarde.",
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 2.1
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
        "nombre": "Ernesto Javier Puertas Dellepianes",
        "slug": "ernesto-javier-puertas-dellepianes",
        "resenas": 32,
        "calidad": "regular",
        "calificacion": 3.68,
        "notaPromedio": 4.33,
        "resenasOcultas": 31,
        "resena": {
          "texto": "La verdad no conozco al resto de profesores de fundamentos de ecologia, si pudiera volver a ver con el esta materia lo haria. es muy amable y todo lo sube al classroom lo que necesita, guias, videos y bueno, puede pasar la materia si no los ve de igual forma. Los temas que abarca que a la misma vez a veces lo compara en su vida cotidiana pueden ser interesantes. En cuanto la exigencia academica no fue mucha, con apuntes de sus clases y recordar los temas se pueden pasar los parciales que igualmente es en grupo y al aire libre que muchas veces no presta mucha atención si alguien usa celular o…",
          "pros": "se puede dejar alta parciales en grupo no toma lista bastante amable",
          "contras": "las clases pueden tornarse un poco aburridas pero si se le sigue el ritmo no se vuelven tediosas",
          "periodo": "2025-2",
          "calificacion": 4.5,
          "dificultad": 2.3
        }
      },
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
      },
      {
        "nombre": "Edgar Ernesto Camero Rubio",
        "slug": "edgar-ernesto-camero-rubio",
        "resenas": 24,
        "calidad": "mala",
        "calificacion": 3.08,
        "notaPromedio": 3.73,
        "resenasOcultas": 23,
        "resena": {
          "texto": "Muy buen profesor. Hace resumenes en cada clase con muy buen dominio del tema. Si se estudia lo suficiente los examenes resultan faciles por que no pregunta nada que no este en el programa.",
          "pros": null,
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 4.1
        }
      },
      {
        "nombre": "Mary Ruth Garcia Conde",
        "slug": "mary-ruth-garcia-conde",
        "resenas": 35,
        "calidad": "regular",
        "calificacion": 3.05,
        "notaPromedio": 4.13,
        "resenasOcultas": 34,
        "resena": {
          "texto": "Es buena docente y explica todo súper bien",
          "pros": "Es fácil pasar si va a clase Talleres y parciales fáciles",
          "contras": "Tienes que ser muy vago y dejado pa perder",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Silvio Zuluaga Ramirez",
        "slug": "silvio-zuluaga-ramirez",
        "resenas": 8,
        "calidad": "mala",
        "calificacion": 2.06,
        "notaPromedio": 4,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Uno de los peores profesores de la UNAL. Cero puntos.",
          "pros": "Es amable.",
          "contras": "No debería enseñar. No aprendí nada en su clase, pero leí obras de literatura famosa en su clase.",
          "periodo": "antes",
          "calificacion": 1.5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Camilo Bernardo Garcia Ramirez",
        "slug": "camilo-bernardo-garcia-ramirez",
        "resenas": 3,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 2,
        "resena": null
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
        "nombre": "Jhonier Rangel",
        "slug": "jhonier-rangel",
        "resenas": 11,
        "calidad": "buena",
        "calificacion": 4.95,
        "notaPromedio": 4.71,
        "resenasOcultas": 10,
        "resena": {
          "texto": "es un muy buen docente a mi parecer, se esfuerza mucho en que se entienda, es muy amable y esta dispuesto a ayudar a sus estudiantes de forma muy personalizada, atento al chat de whatsapp de la materia para resolver cualquier inquietud, completamente en desacuerdo con la otra calificación que tiene la materia, en mi caso la vi presencial",
          "pros": "amable cinquiable",
          "contras": "llega algo tarde a las clases",
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Mario Enrique Arrieta Prieto",
        "slug": "mario-enrique-arrieta-prieto",
        "resenas": 32,
        "calidad": "buena",
        "calificacion": 4.93,
        "notaPromedio": 4.45,
        "resenasOcultas": 31,
        "resena": {
          "texto": "Se nota su amor a la docencia, buenas explicaciones, da todo el material necesario para el estudio autonomo y da exageradamente muchas facilidades para dejar en 5 la materia",
          "pros": "Todo",
          "contras": "Nada",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Sergio Páez moncaleano",
        "slug": "sergio-paez-moncaleano",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.9,
        "notaPromedio": 4.43,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Excelente profesor, sus clases no son aburridas y ayuda mucho a sus estudiantes si les va bien, explica bien.",
          "pros": "Fácil de pasar. Exónera estudiantes del último parcial si les ha ido muy bien. Da puntos por hacer tareas sencillas como investigar de un concepto.",
          "contras": "Talleres largos pero son opcionales, hagalos y fijo pasa los parciales. Es un poco desordenado con las fechas y las notas.",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Joan Gabriel Bofill Barrera",
        "slug": "joan-gabriel-bofill-barrera",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.83,
        "notaPromedio": 3.47,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Es un docente excelente, paciente y sumamente dedicado, siempre dispuesto a usar tiempo extra para explicar hasta que todos entiendan. Demuestra un dominio total de la materia y su sistema de puntos extra resulta de gran ayuda. El único aspecto a mejorar es la necesidad de adaptar la exigencia matemática; al enfocar las clases con conceptos avanzados de cálculo y álgebra lineal que no son prerrequisitos oficiales, aumenta innecesariamente la dificultad de los parciales para quienes no tienen esas bases.",
          "pros": "Es un docente excepcional con una vocación innegable. Destaca por su infinita paciencia y su disposición constante para ayudar; no tiene ningún problema en utilizar tiempo extra para explicar un mismo tema las veces que…",
          "contras": "El único detalle a corregir no radica en su calidad humana o pedagógica, sino en la forma en la que orienta el nivel del temario. Al ser una materia cursada principalmente por estudiantes de ciencias (donde no hay…",
          "periodo": "2026-2",
          "calificacion": 4.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Ana María Beltrán Cortes",
        "slug": "ana-maría-beltrán-cortes",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.76,
        "notaPromedio": 4.22,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Es una excelnte profesora.Explica muy bien los temas y le deja una curiosidad a los estudiantes para que se interesen por la estadistica. Vi con ella en 2020-I por ende alcance a detallar como era presencialidad.Maneja un paquete de Fotocopias con ejercicios y con teoria para que uno no se enfoque en copiar sino en entender la teoria.De igual forma dejaba ejercicios un poco dificiles que lo ponian a pensar a uno con el fin de llegar listos para los parcilales.Durante la virtualidad se adapto de buena manera y manejaba diapositivas muy bien trabajadas.",
          "pros": "-Es amable y hace muy amena la clase. -Se parende bastante con ella. -En esa ocacion, explico el manejo de R ( lo cual considero que fue bastante util ) -Deja ejercicios difciles no calificables para preparase para los…",
          "contras": null,
          "periodo": "2020-10 (virtual)",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "JUAN FERNANDO SALAMANCA AMAYA",
        "slug": "juan-fernando-salamanca-amaya",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.75,
        "notaPromedio": 4.65,
        "resenasOcultas": 1,
        "resena": {
          "texto": "El profesor Fernando ha sido, sin duda, uno de los mejores profesores de la universidad nacional y probablemente el mejor que he tenido a lo largo de mi carrera. Lo que lo distingue es su enfoque accesible y flexible, lo que facilita mucho el aprendizaje. Siempre está dispuesto a dar oportunidades adicionales para que los estudiantes puedan mejorar, lo cual es un gran alivio para quienes necesitan un poco más de tiempo o apoyo para dominar los conceptos. Su estilo de enseñanza es claro y coherente. No solo explica de manera detallada, sino que también se asegura de que lo que se ve en clase…",
          "pros": "Flexibilidad: Ofrece muchas oportunidades para que los estudiantes mejoren, lo que crea un ambiente de aprendizaje inclusivo y comprensivo. Claridad en la Enseñanza: Explica los conceptos de manera clara y comprensible,…",
          "contras": "que no pueda ver otra materia con el",
          "periodo": "2024-1",
          "calificacion": 4.5,
          "dificultad": 2.4
        }
      },
      {
        "nombre": "Gerson Yahir Palomino Velandia",
        "slug": "gerson-yahir-palomino-velandia",
        "resenas": 35,
        "calidad": "buena",
        "calificacion": 4.71,
        "notaPromedio": 4.72,
        "resenasOcultas": 34,
        "resena": {
          "texto": "En términos generales la clase es fácil, si usted hace los talleres y tiene una buena calculadora pasa con buena nota. El profe tiene buen manejo de los temas, deja ejemplos como los de las clases para los parciales y los quizzes son fáciles",
          "pros": "Facil No requiere mucho tiempo No toma asistencia Da 15 mins para llegar",
          "contras": "Llega a ser monótona la clase",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Fernando Arturo Peña Ramirez",
        "slug": "fernando-arturo-pena-ramirez",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.67,
        "notaPromedio": 3.73,
        "resenasOcultas": 2,
        "resena": {
          "texto": "El profesor arturo este semestre dejo de ser docente de la universidad nacional, sin embargo si en algun punto vuelve a ser docente esta reseña le podria ayudar a alguien . Este semestre el profesor creo un moodle con las diapositivas , talleres y videos extra que pueden ser de mucha ayuda para estudiar , el profesor enseña todo de forma clara aunque su clase da algo de sueño realmente se hace entender, responde cualquier duda muestra ejemplos en clase que además se parecen a los talleres y a los parciales, en algunos casos calca ejercicios del taller en el parcial o con algún mínimo cambio…",
          "pros": "Es muy amable y tiene una gran actitud realmente sabe de estadistica y se le pueden hacer preguntas interesantes referentes a temas del curso y a la estadistica en general sus parciales realmente son lo que enseña y es…",
          "contras": "su tendencia a dejar tirados los cursos",
          "periodo": "2024-1",
          "calificacion": 4,
          "dificultad": 2
        }
      },
      {
        "nombre": "María Paula Dueñas Herrera",
        "slug": "maría-paula-dueñas-herrera",
        "resenas": 20,
        "calidad": "buena",
        "calificacion": 4.63,
        "notaPromedio": 4.44,
        "resenasOcultas": 19,
        "resena": {
          "texto": "Su nivel de conocimiento es bastante elevado en la materia, maneja una pedagogía eficiente, explicando la mayoría de los temas de forma clara, sin embargo, su mayor problema es que menosprecia y trata de tontos a aquellos estudiantes en los cursos que no son de la facultad de Ciencias e Ingeniería, llegando a dar respuestas como, \"pero ustedes para que quieren saber eso si nunca lo entenderán\". Se nota su elevado conocimiento del tema, pero su actitud pedante hacia aquellos que estudian algo diferente a Ciencias o Ingeniería, como por ejemplo Ciencias Humanas, es muy notorio.",
          "pros": "Explica la mayoría de temas de forma \"clara\". Puede ser laxa con las entregas de trabajos.",
          "contras": "Sus parciales suelen tener preguntas capciosas. Le suele molestar que se hagan preguntas de temas que no quedaron muy claros. Desprecio hacia Ciencias distintas de las Naturales.",
          "periodo": "2021-10 (virtual)",
          "calificacion": 2,
          "dificultad": 2
        }
      },
      {
        "nombre": "Andres Sebastian Rios Gutierrez",
        "slug": "andres-sebastian-rios-gutierrez",
        "resenas": 19,
        "calidad": "buena",
        "calificacion": 4.58,
        "notaPromedio": 4.32,
        "resenasOcultas": 18,
        "resena": {
          "texto": "La recalidad de profesor, una amor de persona, se la lleva bien con todo el mundo, explica bien",
          "pros": "Todos",
          "contras": "Ninguno",
          "periodo": "2021-10 (virtual)",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Juan Jose Rubio Mesa",
        "slug": "juan-jose-rubio-mesa",
        "resenas": 11,
        "calidad": "buena",
        "calificacion": 4.43,
        "notaPromedio": 3.97,
        "resenasOcultas": 10,
        "resena": {
          "texto": "Cuando inscribí con el profe me sentía feliz porque ya solo quedaban dos cupos en el SIA, sin embargo, fue decepcionante tener clases presenciales (2022-1S) por las buenas referencias que había de este profesor. Las primeras dos semanas fueron de conceptos teoricos de la materia, eran bastantes por cierto y no hubo pausa alguna, no me pareció grave, pero si hubo varios compas que la cancelaron porque pensaron que la materia iba a ser siempre así de densa. Después de la segunda semana, el profe empezo con la parte de probabilidad, el profe no tiene la letra mas legible en el tablero y por otra…",
          "pros": null,
          "contras": null,
          "periodo": "2021-10 (virtual)",
          "calificacion": 3,
          "dificultad": 3
        }
      },
      {
        "nombre": "Elian Fernando Espitia Rincón",
        "slug": "elian-fernando-espitia-rincon",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.42,
        "notaPromedio": 4.3,
        "resenasOcultas": 4,
        "resena": {
          "texto": "¡Qué buen profesor! Maneja muy buena dinámica, no hubo parciales, mas sin embargo, la dinámica son quices todas las semanas, de ello saca un porcentaje grande de la nota de la materia. También hay talleres de python, que usted será evaluado posteriormente, es nota de 5 o 1, entonces simplemente puede explicar lo que sabe y ya. De resto también hay un proyecto final, en donde tendrá que exponerlo. En conclusión, si tiene la oportunidad de inscribirla con el profe, hágalo, se esfuerza porque usted aprenda, hace amena la clase, es chistoso, trata de no hacer una clase \"ordinaria de matemáticas\"",
          "pros": "Pasa porque pasa, ya si no estudia nada nada, puede que le vaya mal, aunque al final elimina los 2 peores quices, entonces téngalo en cuenta.",
          "contras": "Puede sentirse abrumado por estudiar cada semana, pero es preferible que sea 1-2 temas, que en un parcial sean 5-6 o incluso más temas y peor dificultad.",
          "periodo": "2026-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Luis Antonio Herrera Perez",
        "slug": "luis-antonio-herrera-perez",
        "resenas": 32,
        "calidad": "buena",
        "calificacion": 4.27,
        "notaPromedio": 4.38,
        "resenasOcultas": 31,
        "resena": {
          "texto": "Parce seriamente no había tenido una materia tan fácil si usted se saca menos de 4,5 con este man es porque usted es muy vago no hay de otra",
          "pros": "Todos los temas los explica a detalle y si tiene dudas responde Parciales virtuales trabajos y quices regalados",
          "contras": "Si lo hacen emputar yaper , si no hacen los ejercicios que deja el profe y consultas (muy cortas) pues el Man si puede poner cosas feas pero igual son trabajos pendejos que salen en 5 minutos y literalmente fue lo que…",
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 1.5
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
        "nombre": "Luz Marina Rondon Poveda",
        "slug": "luz-marina-rondon-poveda",
        "resenas": 14,
        "calidad": "buena",
        "calificacion": 4.01,
        "notaPromedio": 4.21,
        "resenasOcultas": 13,
        "resena": {
          "texto": "buena profesora, da el tema como es y es muy justa en la calificación, agrego que llevar calculadora, no lo dice nunca pero siempre salen ejercicios con cuenticas que pone a hacer en la clase.",
          "pros": "-muy amable -califica lo que enseña así que es muy recomendado estar en la clase",
          "contras": "-Parciales largos -a veces es dispersa o va muy rapido y en algun momento es facil perderse de la clase",
          "periodo": "2024-2",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Natalia Cardona-Tobón",
        "slug": "natalia-cardona-tobon",
        "resenas": 7,
        "calidad": "regular",
        "calificacion": 4,
        "notaPromedio": 3.89,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Explica lo que esta en el libro de Liliana Blanco, pero no en el mismo orden. No toma asistencia, califica lo que se ve en clase y tiene una lista de ejercicios sugeridos, si uno hace esos ejercicios, los ejercicios son como maximo 15 por taller, y mira los parciales de otros semestres puede atenerse que no le va ir mal. Ella califica con 4 parciales cada uno con 25%.",
          "pros": "Estudiele lo normal y le va mejor que yo :V.",
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 4.6,
          "dificultad": 2.4
        }
      },
      {
        "nombre": "Diego Alejandro Sandoval Skinner",
        "slug": "diego-alejandro-sandoval-skinner",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4,
        "notaPromedio": 3.8,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es un profesor joven, muy ameno, se le entiende todo, se interesa de que uno aprenda, por lo general es muy flexible con los estudiantes porque entiende bien los problemas del estudiante",
          "pros": "- Ayuda siempre en los talleres de R. - Está guapo. - Su voz no te duerme.",
          "contras": "- Ninguno.",
          "periodo": "2024-2",
          "calificacion": 4,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Cristian Erickson Calceteros Velasquez",
        "slug": "cristian-erickson-calceteros-velasquez",
        "resenas": 26,
        "calidad": "buena",
        "calificacion": 3.88,
        "notaPromedio": 4.4,
        "resenasOcultas": 25,
        "resena": {
          "texto": "El profesor es muy buena gente, bastante amable y no es grosero. Repite las explicaciones las veces que sea necesario para que todos puedan comprender. Sin embargo, las clases en ocasiones pueden sentirse monótonas y la cantidad de temas que se abordan por sesión puede hacer que la materia se vuelva pesada. Al ser una electiva, esta materia la toman estudiantes de diferentes carreras. Si provienen de programas con poca base numérica o están en primeros semestres, puede resultar muy complicada. No obstante, cuando el profesor nota que a la mayoría del salón se le dificulta, suele brindar…",
          "pros": "Profesor amable y paciente. Explica y repite hasta que se entienda. Ayuda cuando el grupo tiene dificultades.",
          "contras": "Clases a veces monótonas. Muchos temas por clase. Difícil para quienes no tienen base numérica.",
          "periodo": "2025-2",
          "calificacion": 4.5,
          "dificultad": 3.4
        }
      },
      {
        "nombre": "Beatriz Piedad Urdinola Contreras",
        "slug": "beatriz-piedad-urdinola-contreras",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 3.87,
        "notaPromedio": 4.09,
        "resenasOcultas": 12,
        "resena": {
          "texto": "Gran profesora, muy buen dominio del tema, se nota que le apasiona la demografía. Es muy interesante escucharla.",
          "pros": "Buenas anectodas",
          "contras": "Notas al final",
          "periodo": "2022-2",
          "calificacion": 4,
          "dificultad": 4.1
        }
      },
      {
        "nombre": "Emilse Gomez Torres",
        "slug": "emilse-gomez-torres",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 3.82,
        "notaPromedio": 4.34,
        "resenasOcultas": 12,
        "resena": null
      },
      {
        "nombre": "Lina Angelica Buitrago Reyes",
        "slug": "lina-angelica-buitrago-reyes",
        "resenas": 11,
        "calidad": "regular",
        "calificacion": 3.8,
        "notaPromedio": 3.8,
        "resenasOcultas": 10,
        "resena": {
          "texto": "No inscriban con ella si les gusta la estadística y no se quieren dormir en clase. La profesora parece amable, pero todo el tiempo tiene una actitud pasivo-agresiva que quita las ganas de estar en su clase. Llama asistencia todas las clases porque sabe que si no lo hiciera nadie iría. Parece como una clase virtual pero en un salón, escribe en un OneNote desde el computador y usa de guía una página de internet que hizo durante la pandemia que frecuentemente tiene que corregir porque tiene errores. Dice que enseña R, pero aprendería más mirando videos de YouTube porque ella solo manda unas…",
          "pros": null,
          "contras": null,
          "periodo": "2023-1",
          "calificacion": 1.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Liliana Lopez Kleine",
        "slug": "liliana-lopez-kleine",
        "resenas": 15,
        "calidad": "buena",
        "calificacion": 3.67,
        "notaPromedio": 4.03,
        "resenasOcultas": 14,
        "resena": {
          "texto": "Mi experiencia fue mala cuando vi con la profesora Liliana Estadística genómica y al final tuve que retirar la asignatura antes de perderla. Porque resulta que Liliana no es una profesora con la que uno pueda aprender desde cero. Ella no diseñó la asignatura para aprender desde lo básico a lo complejo como se supone debería ser. Adicionalmente no brinda la asistencia personal necesaria para el manejo de procesamiento de datos bionformaticos. Profesora Liliana, puede que usted sepa mucho de su área, pero un profesor en mi opinión no solo debe saber conocimientos sino también saber transmitir,…",
          "pros": null,
          "contras": "Si uno no tiene conocimientos básicos tanto en el manejo de R como de estadística básica la asignatura resulta complicada de cursar y Liliana no realiza una introducción adecuada a dichos temas, especialmente al manejo…",
          "periodo": "2025-1",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "León Andrés Muñoz Serna",
        "slug": "león-andrés-muñoz-serna",
        "resenas": 15,
        "calidad": "regular",
        "calificacion": 3.45,
        "notaPromedio": 3.13,
        "resenasOcultas": 14,
        "resena": {
          "texto": "Es un profesor amable, respetuoso, se deja hablar y le gusta mucho la participación de sus estudiantes y por ello da bonos que en la nota final se agradecerá haberlos ganado, pero esto es un poco contradictorio si el valor de estos bonos se supone que es por entender el tema y no por tratar de adivinar la respuesta a una pregunta que haya hecho. La razón de la anterior idea la sustento en el hecho de que aborda los temas de manera superficial ya que espera que se haya leído con anterioridad y que solo la clase se disponga para resolver dudas y aunque lo haya tratado de compensar con…",
          "pros": "Manejo de R (OPCIONAL) Talleres y artículos",
          "contras": "Clases superficiales Llegaba tarde",
          "periodo": "otro",
          "calificacion": 3.5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Carlos Alberto Martínez Niño",
        "slug": "carlos-alberto-martínez-niño",
        "resenas": 11,
        "calidad": "regular",
        "calificacion": 3.35,
        "notaPromedio": 4.16,
        "resenasOcultas": 10,
        "resena": null
      },
      {
        "nombre": "Luis Fernando Grajales Hernandez",
        "slug": "luis-fernando-grajales-hernandez",
        "resenas": 20,
        "calidad": "mala",
        "calificacion": 3.13,
        "notaPromedio": 3.61,
        "resenasOcultas": 19,
        "resena": {
          "texto": "No explica bien, no se deja hablar, los disque preparativos no tienen mucho que ver con los parciales, saca ejercicios hechos en clase, es cuchilla calificando, y quiere que todo sea \"perfecto\"",
          "pros": "Nada",
          "contras": "Casi todo",
          "periodo": "2025-1",
          "calificacion": 1.5,
          "dificultad": 1.6
        }
      },
      {
        "nombre": "Nelcy Rodriguez Malagon",
        "slug": "nelcy-rodriguez-malagon",
        "resenas": 13,
        "calidad": "mala",
        "calificacion": 3.05,
        "notaPromedio": 3.99,
        "resenasOcultas": 12,
        "resena": {
          "texto": "No es tan mala como dicen, es seria y estricta, ni mucho ni poco, pero sí. Las temáticas del curso son bien planteadas y ella organiza las sesiones, no se pierden clases, cada clase se ve algo nuevo y los trabajos para hacer son realizables, lo comento como alguien que inscribió algo tarde su curso y aun así logro sacarle nota para pasar",
          "pros": null,
          "contras": null,
          "periodo": "2022-2",
          "calificacion": 4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Martha Patricia Bohorquez Castañeda",
        "slug": "martha-patricia-bohorquez-castañeda",
        "resenas": 10,
        "calidad": "mala",
        "calificacion": 2.7,
        "notaPromedio": 3.29,
        "resenasOcultas": 9,
        "resena": null
      },
      {
        "nombre": "Belén Sefair López",
        "slug": "belén-sefair-lópez",
        "resenas": 28,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 27,
        "resena": {
          "texto": "Super amor de profesora, se preocupa porque sus estudiantes le entiendan y no tengan problemas ya sea en cuanto a lo académico o en cuanto a cuestiones de conexión o de cámara, explica en un tablero por lo que se vuelve muy ameno ya que recuerda algo las clases presenciales, también da las fórmulas desde el principio y los talleres se hacen en grupo, en cuanto a los parciales los puntos son sencillos pero siempre hay uno más complicado, en si a ella le importa mucho la parte de la interpretación en la estadística y la parte ética como profesionales.",
          "pros": "-Paciente explicando -Deja el tiempo suficiente para entregar talleres",
          "contras": "-A veces puede haber conflictos con los que no asistan a las sesiones sin justificación",
          "periodo": "2018-20",
          "calificacion": 5,
          "dificultad": 4.3
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
  "1000041": {
    "nombre": "Quimica Basica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000041",
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
        "nombre": "Diana Maria Farias Camero",
        "slug": "diana-maria-farias-camero",
        "resenas": 17,
        "calidad": "buena",
        "calificacion": 4.56,
        "notaPromedio": 3.88,
        "resenasOcultas": 16,
        "resena": {
          "texto": "La mejor profesora que hay, es increíble. Le gusta dar clase, le gusta que los estudiantes aprendan, es comprensiva pero tampoco alcahueta, me gustan las diapositivas, las actividades y trabajos",
          "pros": "Explica súper bien y de una forma que rompe con lo tradicional, valorenla",
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Leonardo Castellanos Hernandez",
        "slug": "leonardo-castellanos-hernandez",
        "resenas": 29,
        "calidad": "buena",
        "calificacion": 4.48,
        "notaPromedio": 3.75,
        "resenasOcultas": 28,
        "resena": {
          "texto": "CASTEGOOOOOD, definitivamente el mejor profesor que he tenido hasta ahora, la verdad es una materia con mucho contenido, y es fundamental que el profesor sea claro y sepa explicar, el man es un pro, la verdad demuestra ser un gran profesional, lo motiva a uno a ser excelente estudiante",
          "pros": "es muy ordenado muy puntual brinda material adecuado para estudiar es buena persona demasiado God",
          "contras": "es hater cuando el grupo no coopera ni participa intimidante",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Patricia Martinez Muñoz",
        "slug": "patricia-martinez-muñoz",
        "resenas": 38,
        "calidad": "buena",
        "calificacion": 4.25,
        "notaPromedio": 4.04,
        "resenasOcultas": 37,
        "resena": {
          "texto": "Es una profesora demasiado buena, usted va a entender los temas con claridad (lógicamente estudiando por su cuenta también). Resuelve todas las dudas que usted tenga y es muy detallada con las explicaciones que hace. Los parciales son trabajables pero tiene que dedicarle una buena estudiada, repasar bastante los conceptos porque son fundamentales a la hora del parcial, hace muchas preguntas con cáscaras y que hay que tener en cuenta muchos significados, ya que muchas de las opciones de respuesta son similares y puede llegar a confundirlo, sin embargo, si usted es juicioso y hace el esfuerzo,…",
          "pros": "Excelente explicando Buen material para estudiar Parciales trabajables",
          "contras": "Escuelera (Celular, hablar, salir antes de clase) Demorada en acabar clases Un poco de relleno al inicio del curso",
          "periodo": "2026-1",
          "calificacion": 4.5,
          "dificultad": 3
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
      },
      {
        "nombre": "Maria Claudia Lucia Ordoñez",
        "slug": "maria-claudia-lucia-ordoñez-ordoñez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "1000042": {
    "nombre": "Bioquimica Basica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000042",
    "profesores": [
      {
        "nombre": "Luis Ernesto Contreras Rodriguez",
        "slug": "luis-ernesto-contreras-rodriguez",
        "resenas": 20,
        "calidad": "buena",
        "calificacion": 4.94,
        "notaPromedio": 4.5,
        "resenasOcultas": 19,
        "resena": {
          "texto": "Excelente profesor, explica los temas con facilidad y se preocupa porque todos entiendan, si eres de biología te va a gustar mucho ya que conecta muy bien la carrera con la química. Es difícil no entenderle, eso si, llega temprano a su clase para que no te pierdas parte del contenido ya que el inicia clase super puntual. Recomiendo ver la teoría a la par con la práctica de bioquímica así la dicte otr@ profe, porque Luis explica lo esencial para llegar mejor preparados a la práctica, así tienes los conceptos frescos y no te tienes que matar en los preinformes. En lo personal el estaba…",
          "pros": "Es organizado. Amable. Puntual. Pregunta en el parcial lo visto en clase, pocos conceptos, más ejercicios prácticos. Deja sacar hoja de apuntes en el parcial.",
          "contras": "Lean bien los parciales ya que es fácil caer en cascaritas.",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Milena Maya Hoyos",
        "slug": "milena-maya-hoyos",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.92,
        "notaPromedio": 4.58,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Es una profesora muy amable y agradable. Es súper organizada con las notas y con todo en general, siempre deja claras las fechas y lo que entra en cada evaluación. En los parciales deja usar una hoja con el resumen del tema, lo cual ayuda bastante. Hace varios quices durante el semestre, algunos para la casa, y eso sirve para reforzar lo visto. Se esfuerza mucho en explicar bien y en que todos entiendan, y siempre está pendiente de resolver dudas. En general, es una profe muy buena y sin duda volvería a ver una materia con ella.",
          "pros": "Amable Organizada",
          "contras": "Clases con alta densidad temaria",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3.9
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
        "nombre": "Lizeth Manuela Avellaneda Torres",
        "slug": "lizeth-manuela-avellaneda-torres",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 4.33,
        "notaPromedio": 3.88,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Es una buena profe, muy dedicada con sus clases y realmente se interesa por el aprendizaje de sus estudiantes. Sin embargo, es bastante exigente, hay que tomar buenos apuntes y asistir a todas las clases. La nota se obtiene con tres parciales (el último acumulativo, allí es donde es importante tener buenos apuntes, las preguntas son muy similares a ejercicios trabajados durante todo el semestre) y un promedio de talleres/quices. Pregunta con conciencia, no le saldrá algo que no pueda resolver, incluso muchas veces se salta temas difíciles y pregunta lo esencial de la materia; lo único es que…",
          "pros": "Se aprende mucho Resuelve dudas Buena actitud Escucha a sus estudiantes Diapos chimbas",
          "contras": "Talleres demasiado largos, énfasis en demasiado",
          "periodo": "2024-1",
          "calificacion": 4.3,
          "dificultad": 4.1
        }
      },
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
      },
      {
        "nombre": "Yadi Adriana Umaña Perez",
        "slug": "yadi-adriana-umaña-perez",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.1,
        "notaPromedio": 3.7,
        "resenasOcultas": 2,
        "resena": null
      },
      {
        "nombre": "Blanca Laura Ortiz Quintero",
        "slug": "blanca-laura-ortiz-quintero",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4,
        "notaPromedio": 3.9,
        "resenasOcultas": 2,
        "resena": {
          "texto": "La profesora blanca pese a la pandemia dicto su clase de forma muy buena, es clara en las explicaciones y aunque los temas son densos a veces intenta hacerlos lo mas amenos para cada estudiante, como persona es amable y escucha dudas en cualquier momento, realiza quices una vez cubierto el tema que ponen aprueba lo visto, pero son quices que solo requieren lo enseñado por ella a la minima que se tomen apuntes el quiz lo pasas pero siempre hay 1 o 2 preguntas que si son mas de profundidad. Pone talleres que no califica pero si los haces te preparan muy bien para el quiz del tema y los…",
          "pros": "-Clara en sus clases -Resuelve preguntas y se toma el tiempo si no tiene una respuesta clara para la siguiente clase explicar -Quices claros sobre lo explicado en clase",
          "contras": "-Tanto en quices como en parciales siempre hay 1 o 2 preguntas que si lleva la dificultad un poco al limite",
          "periodo": "2020-20 (virtual)",
          "calificacion": 4.4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Ruth Elizabeth Garzon Fernandez",
        "slug": "ruth-elizabeth-garzon-fernandez",
        "resenas": 7,
        "calidad": "regular",
        "calificacion": 3.9,
        "notaPromedio": 3.66,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Buena profesora, hace que los laboratorios sean divertidos y en lo personal fue una muy buena experiencia este laboratorio ya que las prácticas son entretenidas y se complementan con la clase teórica que dicta Luis Ernesto. Preparen bien las prácticas para que aprovechen al 100% el laboratorio y no queden mal si la profe los coge mal preparados y les pregunta algo. Se preocupa por dictar el contenido temático de la mejor manera y completo. Lleguen temprano porque hace el quiz a mano en los 5 o 10 primeros minutos de la clase y aunque no valen tanto en la nota final puede hacer la diferencia…",
          "pros": "No califica duro los informes si son de calidad y coherentes. No hay problema si no les sale el laboratorio, en esos casos ella proporciona datos de anteriores semestres, lo importante es que hagas un buen tratamiento…",
          "contras": "Los parciales teóricos pueden ser un poco difíciles, pero estudien con los informes que han hecho y la retroalimentación que les hace Ruth, así pueden sacar una muy buena nota.",
          "periodo": "2026-1",
          "calificacion": 4.7,
          "dificultad": 4
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
        "nombre": "Milton Josue Crosby Granados",
        "slug": "milton-josue-crosby-granados",
        "resenas": 5,
        "calidad": "regular",
        "calificacion": 2.62,
        "notaPromedio": 2.82,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Mediocre, solo habla de él mismo, según él todos somos tontos y él inteligente. No investiga, no enseña, no se sabe qué propósito tiene esta basura en el departamento, al igual que todo el área de microbiología. No enseña nada, no hace falta ir a ninguna clase, al final deja un trabajo y se inventa la nota, todos pasan. Cualquier opción mejor que él, desafortunadamente Fabio, Edelberto, Sonia y este tipo no es que sean los mejores, el área de microbiología de farmacia es el hazmereír de la universidad.",
          "pros": null,
          "contras": null,
          "periodo": "2023-1",
          "calificacion": 1.5,
          "dificultad": 1.5
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
        "nombre": "Humberto Miguel Zamora Espitia",
        "slug": "humberto-miguel-zamora-espitia",
        "resenas": 2,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "El profesor se nota que sabe mucho y que en su momento se entregó totalmente a la academia, sin embargo por cuestiones de salud ya no está en la capacidad de dictar una clase porque se queda estancado en un mismo tema (el tema inicial) todo el semestre.",
          "pros": "Puntual Agradable Sociable",
          "contras": "No avanza de tema",
          "periodo": "2018-20",
          "calificacion": 1.5,
          "dificultad": 2.6
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
  "1000044": {
    "nombre": "Ingles I- Semestral",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000044",
    "profesores": [
      {
        "nombre": "Beymar Leonardo Solorzano Alviz",
        "slug": "beymar-leonardo-solorzano-alviz",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.8,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Muy buen profe, muy lúdico ínsita a la participación, sus clases son muy entretenidas y amenas",
          "pros": "prácticamente ninguno",
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Cesar Augusto Romero",
        "slug": "cesar-augusto-romero",
        "resenas": 16,
        "calidad": "buena",
        "calificacion": 4.96,
        "notaPromedio": 4.54,
        "resenasOcultas": 15,
        "resena": {
          "texto": "Excelente persona, muy amable, comprensivo y demasiado humano, se aprende mucho si uno se empeña y en general es demasiado sencillo pasar, lo único es que en los trabajos en grupo se necesita un buen equipo ya que no es difícil pero se torna pesado si hay que hacer el trabajo de todo el grupo.",
          "pros": "Amable Se aprende muy bien",
          "contras": "Nada",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Monica Alexandra Riaño Orjuela",
        "slug": "monica-alexandra-riaño-orjuela",
        "resenas": 12,
        "calidad": "buena",
        "calificacion": 4.86,
        "notaPromedio": 4.58,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Tratare de ser objetivo, por mi parte es una increible profesora, y estos son mis argumentos que son los siguientes: - Entrega todo el programa desde el principio de manera organizada (temas que veremos, fechas de los parciales, que notas sacará, su correo, etc). - Deja tareas para estudiar por nuestra cuenta (que sirve bastante) - Deja talleres en el modulo para practicar todas las veces que uno quiera, hasta sacar el 100/100 y le puede ir a uno perfectamente. - Los parciales ya es dependiendo de lo que estudiaste, pero aprendes mucho con ella. - Por el paro, dejo de tomar asistencia, pero…",
          "pros": "- Una gran persona y gran profesora - Si te sucede algo (gripa, enfermedad, lesión) ella lo entenderá perfectamente y más si le entregas la excusa.",
          "contras": "- En ocasiones llega tarde.",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Nancy Patricia Cruz Romero",
        "slug": "nancy-patricia-cruz-romero",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.83,
        "notaPromedio": 4.13,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Lo pongo simple: si no fuera por Patricia, no hubiera pasado el C1. Aunque con sus materias se sufre y es bastante exigente, también es ordenada, lo lleva a uno por el camino que es de cara al examen además de aprender un montón.",
          "pros": null,
          "contras": null,
          "periodo": "2019-2",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Yaneli Niño Osorio",
        "slug": "yaneli-niño-osorio",
        "resenas": 11,
        "calidad": "buena",
        "calificacion": 4.53,
        "notaPromedio": 4.12,
        "resenasOcultas": 10,
        "resena": {
          "texto": "Es una profesora que no exige tanto, la verdad me lleve bien con ella, trata de buscar que la clase sea interactiva y dinámica, además de no ser tan fuerte con notas o trabajos, solo toca estar pendiente de las actividades de moodle que deja.",
          "pros": "1) creatividad en actividades 2) muy agradable 3) modo de calificar no es tan fuerte",
          "contras": "1) los temas se ven muy por encima, recomiendo dar un repaso autónomamente",
          "periodo": "2025-2",
          "calificacion": 4.9,
          "dificultad": 3
        }
      },
      {
        "nombre": "Gloria Nathaly Aldana Prieto",
        "slug": "gloria-nathaly-aldana-prieto",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 4.51,
        "notaPromedio": 4.44,
        "resenasOcultas": 6,
        "resena": {
          "texto": "pues ahi. es chevere",
          "pros": "fácil maestra flexible variedad de notas",
          "contras": "a veces muestra desinterés llega tarde solo son diapositivas",
          "periodo": "2021-10 (virtual)",
          "calificacion": 3.7,
          "dificultad": 5
        }
      },
      {
        "nombre": "Beatriz Elena Urrutia Sanchez",
        "slug": "beatriz-elena-urrutia-sanchez",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.33,
        "notaPromedio": 3.87,
        "resenasOcultas": 5,
        "resena": {
          "texto": "La profesora es muy dedicada a la materia, trata de dejar constantemente pequeños trabajos de práctica, hace las clases dinámicas, tiene un muy buen dominio del tema y siempre mantuvo una buena actitud con el grupo completo, eso sí, en los parciales si va a tener que estudiar porque siempre tienen dificultad aunque la mayoría de las veces sacará notas de exposiciones orales, en el tema de las fallas es muy estricta con el tiempo y con la cantidad, en general siempre se exije tiempo para la materia entonces es recomendable no meter con otras materias pesadas pues las exposiciones si quitarán…",
          "pros": "Clases dinámicas Responde dudas en todo momento de clase y trata de llevar bien al estudiante",
          "contras": "Bastante tiempo de trabajo extra clase Muy estricta con la asistencia",
          "periodo": "2024-1",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Maria Eugenia Lopez",
        "slug": "maria-eugenia-lopez",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.25,
        "notaPromedio": 4.3,
        "resenasOcultas": 1,
        "resena": {
          "texto": "La profesora se preocupa por el proceso de cada uno, intenta retroalimentar todo el proceso. En mi caso ella buscó profesores para nuestra pre-práctica docente, así que fue más fácil para nosotros y nos ayudó con los horarios. A estudiantes de otro grupo sí les tocó buscar los lugares para hacer las pre-prácticas. Durante el semestre pide ir recolectado pruebas de las pre-prácticas, hacer análisis, llevar a cabo clases con estudiantes de colegios y retroalimentarlos, todo fuera de la propia clase, pues el tiempo en clase se deben hacer presentaciones, proyectos y demás actividades. En general…",
          "pros": "Retroalimentación Enseñanza de estrategias",
          "contras": "Demasiado trabajo Presentaciones innecesarias",
          "periodo": "2019-20",
          "calificacion": 4,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Claudia Patricia Cortés Lora",
        "slug": "claudia-patricia-cortés-lora",
        "resenas": 7,
        "calidad": "regular",
        "calificacion": 4.16,
        "notaPromedio": 4.51,
        "resenasOcultas": 6,
        "resena": {
          "texto": "La peor profesora que e visto en mi vida, agresivo pasiva. Vi ingles 1 con ella y todos cancelaron y la mayoria perdio, quiere que hablen ingles fluido en la primera clase la peor profesora",
          "pros": null,
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 2.6,
          "dificultad": 5
        }
      },
      {
        "nombre": "Sara Elisa Monsalve Patino",
        "slug": "sara-elisa-monsalve-patino",
        "resenas": 10,
        "calidad": "regular",
        "calificacion": 3.75,
        "notaPromedio": 4,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Le gusta que uno participe mucho ya que es una nota, hace las clases participativas y en grupos, no son tan aburridas. La profesora sara es buena persona solo que a veces es mala gente. Si usted llega 15 minutos tarde le cierra la puerta y no lo deja entrar, toca golpearle la puerta arto tiempo para que le abra y cuando le abre lo regaña por hacerle ruido. Si lo ve en el celular lo regaña por no prestarle atencion y no deja ir al baño, tiene poca empatia por los problemas de uno y siempre piensa que son excusas, califica duro lo que deja pero si usted le presenta todo no hay problema.",
          "pros": "Hace clases interesantes para no aburrirse tanto",
          "contras": "Cierra la puerta en la cara Regaña por bobadas No le gusta que use celular",
          "periodo": "2025-2",
          "calificacion": 3,
          "dificultad": 3
        }
      },
      {
        "nombre": "Johnatan Martinez Hernandez",
        "slug": "johnatan-martinez-hernandez",
        "resenas": 5,
        "calidad": "regular",
        "calificacion": 3.72,
        "notaPromedio": 4.24,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Si es fácil con ese profe pero no se aprende nada, es como pasarla por pasar, cuando vi inglés 3 y 4 aprendí lo que necesitaba así que no está mas",
          "pros": "Muy fácil",
          "contras": "Llega tarde",
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Giovanni Alexis Mosquera Sabogal",
        "slug": "giovanni-alexis-mosquera-sabogal",
        "resenas": 4,
        "calidad": "regular",
        "calificacion": 3.6,
        "notaPromedio": 4.2,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Ha sido un excelente profesor, dista mucho de las reseñas anteriores se nota que ha aprendido a enseñar, llega bien preparado a las clases y da todo tipo de bonos por participación y actividades.",
          "pros": "- Es amable - Gracioso - Valora mucho la participación - Ayuda con vocabulario rebuscado incluso en los parciales. - Se pasa fácil asistiendo y repasando sus clases - Deja su material en el moodle del cual siempre…",
          "contras": "- No es muy claro con las notas - Si faltas mucho no va a ser amable contigo.",
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Olga Lucia Ruiz Convers",
        "slug": "olga-lucia-ruiz-convers",
        "resenas": 10,
        "calidad": "regular",
        "calificacion": 2.64,
        "notaPromedio": 3.82,
        "resenasOcultas": 9,
        "resena": {
          "texto": "tome ingles 2 con esta docente y he de decir que disfrute totalmente del aprendizaje con ella considero que se expresa y se hace entender bien por lo que hace ver mas facil el aprendizaje de esta lengua, yo personalmente si la recomendaria, sus clases eran bastante interactivas y no eran para nada aburridas, de las mejores clases de ingles en mi opinion",
          "pros": "-dinamismo en las actividades -busca el speaking entre conversaciones de los mismos estudiantes -se hace entender bastante bien",
          "contras": "-bastante rifgida con el plan de estudio que se le entrega por parte del comite de docentes por loq eu TODO suconstruccion se basa en ello -depende demasiado del contenido del libro bastante exigente con las llegadas e…",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2.9
        }
      },
      {
        "nombre": "Jenny Viviana Castelblanco Barrera",
        "slug": "jenny-viviana-castelblanco-barrera",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Miryam Cristina Vera Peña",
        "slug": "miryam-cristina-vera-peña",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "David Santiago Barrero Molina",
        "slug": "david-santiago-barrero-molina",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Elkin Rodolfo Moreno Merchan",
        "slug": "elkin-rodolfo-moreno-merchan",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Flor Alba Aguirre Baquero",
        "slug": "flor-alba-aguirre-baquero",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Jaime Andres Cadena Hernandez",
        "slug": "jaime-andres-cadena-hernandez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Luz Adriana Trejos Huertas",
        "slug": "luz-adriana-trejos-huertas",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Rosalba Velandia Carrillo",
        "slug": "rosalba-velandia-carrillo",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "1000045": {
    "nombre": "Ingles Ii - Semestral",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000045",
    "profesores": [
      {
        "nombre": "Liliana Marcela Guzman Aricapa",
        "slug": "liliana-marcela-guzman-aricapa",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.1,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es una buena profesora, las clases son muy entretenidas y se aprende con gusto, todo muy dinámico y es un amor de persona.",
          "pros": "Clases dinámicas, enseña bien, imposible aburrirse",
          "contras": "Ninguno",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Monica Alexandra Riaño Orjuela",
        "slug": "monica-alexandra-riaño-orjuela",
        "resenas": 12,
        "calidad": "buena",
        "calificacion": 4.86,
        "notaPromedio": 4.58,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Tratare de ser objetivo, por mi parte es una increible profesora, y estos son mis argumentos que son los siguientes: - Entrega todo el programa desde el principio de manera organizada (temas que veremos, fechas de los parciales, que notas sacará, su correo, etc). - Deja tareas para estudiar por nuestra cuenta (que sirve bastante) - Deja talleres en el modulo para practicar todas las veces que uno quiera, hasta sacar el 100/100 y le puede ir a uno perfectamente. - Los parciales ya es dependiendo de lo que estudiaste, pero aprendes mucho con ella. - Por el paro, dejo de tomar asistencia, pero…",
          "pros": "- Una gran persona y gran profesora - Si te sucede algo (gripa, enfermedad, lesión) ella lo entenderá perfectamente y más si le entregas la excusa.",
          "contras": "- En ocasiones llega tarde.",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Yaneli Niño Osorio",
        "slug": "yaneli-niño-osorio",
        "resenas": 11,
        "calidad": "buena",
        "calificacion": 4.53,
        "notaPromedio": 4.12,
        "resenasOcultas": 10,
        "resena": {
          "texto": "Es una profesora que no exige tanto, la verdad me lleve bien con ella, trata de buscar que la clase sea interactiva y dinámica, además de no ser tan fuerte con notas o trabajos, solo toca estar pendiente de las actividades de moodle que deja.",
          "pros": "1) creatividad en actividades 2) muy agradable 3) modo de calificar no es tan fuerte",
          "contras": "1) los temas se ven muy por encima, recomiendo dar un repaso autónomamente",
          "periodo": "2025-2",
          "calificacion": 4.9,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jose Jonathan Maestre Herrera",
        "slug": "jose-jonathan-maestre-herrera",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.35,
        "notaPromedio": 4.49,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Es un excelente profesor es bastante comprensivo con todos los estudiantes y enseña muy bien... recomendadisimo :)",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Beatriz Elena Urrutia Sanchez",
        "slug": "beatriz-elena-urrutia-sanchez",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.33,
        "notaPromedio": 3.87,
        "resenasOcultas": 5,
        "resena": {
          "texto": "La profesora es muy dedicada a la materia, trata de dejar constantemente pequeños trabajos de práctica, hace las clases dinámicas, tiene un muy buen dominio del tema y siempre mantuvo una buena actitud con el grupo completo, eso sí, en los parciales si va a tener que estudiar porque siempre tienen dificultad aunque la mayoría de las veces sacará notas de exposiciones orales, en el tema de las fallas es muy estricta con el tiempo y con la cantidad, en general siempre se exije tiempo para la materia entonces es recomendable no meter con otras materias pesadas pues las exposiciones si quitarán…",
          "pros": "Clases dinámicas Responde dudas en todo momento de clase y trata de llevar bien al estudiante",
          "contras": "Bastante tiempo de trabajo extra clase Muy estricta con la asistencia",
          "periodo": "2024-1",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Claudia Patricia Cortés Lora",
        "slug": "claudia-patricia-cortés-lora",
        "resenas": 7,
        "calidad": "regular",
        "calificacion": 4.16,
        "notaPromedio": 4.51,
        "resenasOcultas": 6,
        "resena": {
          "texto": "La peor profesora que e visto en mi vida, agresivo pasiva. Vi ingles 1 con ella y todos cancelaron y la mayoria perdio, quiere que hablen ingles fluido en la primera clase la peor profesora",
          "pros": null,
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 2.6,
          "dificultad": 5
        }
      },
      {
        "nombre": "Linda Johana Ruiz Gomez",
        "slug": "linda-johana-ruiz-gomez",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.13,
        "notaPromedio": 4.61,
        "resenasOcultas": 8,
        "resena": {
          "texto": "1.0",
          "pros": "La profesora intenta generar clases interesantes",
          "contras": "Pasivo agresiva Es todo como ella quiera Si te la monta te hace la vida imposible Pone clases los días que no debe haber clase si se pierde alguna , y su no puedes te deja sin nota",
          "periodo": "2023-2",
          "calificacion": 1.5,
          "dificultad": 1.6
        }
      },
      {
        "nombre": "Jairo Alberto Quiñones Calderon",
        "slug": "jairo-alberto-quiñones-calderon",
        "resenas": 12,
        "calidad": "regular",
        "calificacion": 3.77,
        "notaPromedio": 4.06,
        "resenasOcultas": 10,
        "resena": {
          "texto": "Tiene actitudes extrañas y de doble sentido Mucho cuidado, sobre todo si son mujeres. Se le insinuó a una estudiante, y le dijo que si la fiscalía le pregunta, el negaría todo.",
          "pros": "Nada",
          "contras": "Enfermo",
          "periodo": "2025-2",
          "calificacion": 2,
          "dificultad": 3
        }
      },
      {
        "nombre": "Sara Elisa Monsalve Patino",
        "slug": "sara-elisa-monsalve-patino",
        "resenas": 10,
        "calidad": "regular",
        "calificacion": 3.75,
        "notaPromedio": 4,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Le gusta que uno participe mucho ya que es una nota, hace las clases participativas y en grupos, no son tan aburridas. La profesora sara es buena persona solo que a veces es mala gente. Si usted llega 15 minutos tarde le cierra la puerta y no lo deja entrar, toca golpearle la puerta arto tiempo para que le abra y cuando le abre lo regaña por hacerle ruido. Si lo ve en el celular lo regaña por no prestarle atencion y no deja ir al baño, tiene poca empatia por los problemas de uno y siempre piensa que son excusas, califica duro lo que deja pero si usted le presenta todo no hay problema.",
          "pros": "Hace clases interesantes para no aburrirse tanto",
          "contras": "Cierra la puerta en la cara Regaña por bobadas No le gusta que use celular",
          "periodo": "2025-2",
          "calificacion": 3,
          "dificultad": 3
        }
      },
      {
        "nombre": "Johnatan Martinez Hernandez",
        "slug": "johnatan-martinez-hernandez",
        "resenas": 5,
        "calidad": "regular",
        "calificacion": 3.72,
        "notaPromedio": 4.24,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Si es fácil con ese profe pero no se aprende nada, es como pasarla por pasar, cuando vi inglés 3 y 4 aprendí lo que necesitaba así que no está mas",
          "pros": "Muy fácil",
          "contras": "Llega tarde",
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Olga Lucia Ruiz Convers",
        "slug": "olga-lucia-ruiz-convers",
        "resenas": 10,
        "calidad": "regular",
        "calificacion": 2.64,
        "notaPromedio": 3.82,
        "resenasOcultas": 9,
        "resena": {
          "texto": "tome ingles 2 con esta docente y he de decir que disfrute totalmente del aprendizaje con ella considero que se expresa y se hace entender bien por lo que hace ver mas facil el aprendizaje de esta lengua, yo personalmente si la recomendaria, sus clases eran bastante interactivas y no eran para nada aburridas, de las mejores clases de ingles en mi opinion",
          "pros": "-dinamismo en las actividades -busca el speaking entre conversaciones de los mismos estudiantes -se hace entender bastante bien",
          "contras": "-bastante rifgida con el plan de estudio que se le entrega por parte del comite de docentes por loq eu TODO suconstruccion se basa en ello -depende demasiado del contenido del libro bastante exigente con las llegadas e…",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2.9
        }
      },
      {
        "nombre": "Rocio Del Pilar Camacho Moscoso",
        "slug": "rocio-del-pilar-camacho-moscoso",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 2,
        "notaPromedio": 4.8,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Pésima, es alcohólica y la he visto fumando algo en una pipa. También sé que se ha metido con estudiantes",
          "pros": "Ninguno",
          "contras": "Adicciones",
          "periodo": "antes",
          "calificacion": 2,
          "dificultad": 5
        }
      },
      {
        "nombre": "John Alexander Pulido Angel",
        "slug": "john-alexander-pulido-angel",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": null
      },
      {
        "nombre": "Carlos Rigueros",
        "slug": "carlos-rigueros",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es buen profesor. Explica bien los temas y la clase es entretenida, pero definitivamente podría serlo más. Trabaja mucho con elementos electrónicos, por lo que unas clases eran en el ALEX y las otras en la clase. Trabaja bien con el libro y el material dado en clase. al final hay un proyecto, de hablar sobre algún nobel de paz que él te designa, y es algo estricto con eso. De resto, podría decirse que es relajado.",
          "pros": null,
          "contras": null,
          "periodo": "2014-10",
          "calificacion": 3.8,
          "dificultad": 2.8
        }
      },
      {
        "nombre": "Claudia Patricia Olarte Suarez",
        "slug": "claudia-patricia-olarte-suarez",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es muy buena profesora, en este semestre virtual se tuvo inconvenientes ya que la profesora no es muy buena manejando los recursos tecnológicos. Pero la profesora se esfuerza por enseñar bien y se basa mucho en libros para su enseñanza, también si uno no entende algo explica de una gran manera y no le gusta que no participen.",
          "pros": "Es muy comprensiva con los estudiantes",
          "contras": "No sabe manejar muy bien los recursos tecnológicos aunque se esfuerza bastante para aprender",
          "periodo": "2018-20",
          "calificacion": 4,
          "dificultad": 2.3
        }
      },
      {
        "nombre": "Lina Andrea Barrera Sandoval",
        "slug": "lina-andrea-barrera-sandoval",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es una muy buena profesora y realiza clases dinámicas y entretenidas, sigue el material de apoyo entregado por la universidad , esta dispuesta a resolver dudas y realiza las críticas constructivas necesarias. Maneja muy bien el ingles y transmite por completo el conocimiento.",
          "pros": "Desde el inicio explica los porcentajes de calificación y su metodología,",
          "contras": "No tiene",
          "periodo": "2018-20",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Miryam Cristina Vera Peña",
        "slug": "miryam-cristina-vera-peña",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Elkin Rodolfo Moreno Merchan",
        "slug": "elkin-rodolfo-moreno-merchan",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Gloria Stella Bello Rojas",
        "slug": "gloria-stella-bello-rojas",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Jeferson Eduardo Vega Latorre",
        "slug": "jeferson-eduardo-vega-latorre",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Jesus Marino Bogota Rodriguez",
        "slug": "jesus-marino-bogota-rodriguez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Jonathan Cuesta Morelos",
        "slug": "jonathan-cuesta-morelos",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Juan Guillermo Muñoz Salgado",
        "slug": "juan-guillermo-muñoz-salgado",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Julio Cesar Ortiz Castro",
        "slug": "julio-cesar-ortiz-castro",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Lady Karina Rodriguez Cuervo",
        "slug": "lady-karina-rodriguez-cuervo",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Maria Vilma Tovar Nempeque",
        "slug": "maria-vilma-tovar-nempeque",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Marilu Garcia Mora",
        "slug": "marilu-garcia-mora",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Oscar August Camargo Sierra",
        "slug": "oscar-august-camargo-sierra",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Oscar Daniel Barrios Diaz",
        "slug": "oscar-daniel-barrios-diaz",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "1000046": {
    "nombre": "Ingles Iii - Semestral",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000046",
    "profesores": [
      {
        "nombre": "Jesica Paola Rendón Alfonso",
        "slug": "jesica-paola-rendon-alfonso",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 3.94,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Muy buena profe, muy amable y comprensiva, y además, importante, valora que hagas las cosas por ti mismo aunque te equivoques. No sientes en ningún momento presión por cometer errores ya que la profe no es para nada pesada con eso, incluso a veces sabes que dijiste algo mal pero ella ni lo menciona en la retroalimentación, supongo que para no hacerte sentir que lo haces muy mal jeje, o simplemente porque no es un error tan relevante.Toma asistencia todos los días, no diría que es supremamente estricta con eso pero es mejor cumplirle (puntual obvio, si no igual te la pone como inasistencia).…",
          "pros": "- Se puede dejar alta. - Se pasa chill con amigos. - Casi todo se hace en clase, poco o nada de tarea (aparte del proyecto final).",
          "contras": "- Tiene en cuenta asistencia.",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Cesar Augusto Romero",
        "slug": "cesar-augusto-romero",
        "resenas": 16,
        "calidad": "buena",
        "calificacion": 4.96,
        "notaPromedio": 4.54,
        "resenasOcultas": 15,
        "resena": {
          "texto": "Excelente persona, muy amable, comprensivo y demasiado humano, se aprende mucho si uno se empeña y en general es demasiado sencillo pasar, lo único es que en los trabajos en grupo se necesita un buen equipo ya que no es difícil pero se torna pesado si hay que hacer el trabajo de todo el grupo.",
          "pros": "Amable Se aprende muy bien",
          "contras": "Nada",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Monica Alexandra Riaño Orjuela",
        "slug": "monica-alexandra-riaño-orjuela",
        "resenas": 12,
        "calidad": "buena",
        "calificacion": 4.86,
        "notaPromedio": 4.58,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Tratare de ser objetivo, por mi parte es una increible profesora, y estos son mis argumentos que son los siguientes: - Entrega todo el programa desde el principio de manera organizada (temas que veremos, fechas de los parciales, que notas sacará, su correo, etc). - Deja tareas para estudiar por nuestra cuenta (que sirve bastante) - Deja talleres en el modulo para practicar todas las veces que uno quiera, hasta sacar el 100/100 y le puede ir a uno perfectamente. - Los parciales ya es dependiendo de lo que estudiaste, pero aprendes mucho con ella. - Por el paro, dejo de tomar asistencia, pero…",
          "pros": "- Una gran persona y gran profesora - Si te sucede algo (gripa, enfermedad, lesión) ella lo entenderá perfectamente y más si le entregas la excusa.",
          "contras": "- En ocasiones llega tarde.",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Aida Elena Monsalve Solorzano",
        "slug": "aida-elena-monsalve-solorzano",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.86,
        "notaPromedio": 4.4,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Es absolutamente una maestra que se le nota demasiado su amor por la educación. recomendadísima.",
          "pros": "variedad de actividades muy lúdica mucho énfasis en speaking y pronunciación",
          "contras": "no le gusta que hablen español",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3.1
        }
      },
      {
        "nombre": "Marco Claudio Gonzalez Fiallo",
        "slug": "marco-claudio-gonzalez-fiallo",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.7,
        "notaPromedio": 4.25,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Excelente profe ojalá dictará clases privadas. Se ve que es muy ocupado",
          "pros": "Prepara sus clases",
          "contras": "No dicta clases privadas",
          "periodo": "otro",
          "calificacion": 4.4,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Yaneli Niño Osorio",
        "slug": "yaneli-niño-osorio",
        "resenas": 11,
        "calidad": "buena",
        "calificacion": 4.53,
        "notaPromedio": 4.12,
        "resenasOcultas": 10,
        "resena": {
          "texto": "Es una profesora que no exige tanto, la verdad me lleve bien con ella, trata de buscar que la clase sea interactiva y dinámica, además de no ser tan fuerte con notas o trabajos, solo toca estar pendiente de las actividades de moodle que deja.",
          "pros": "1) creatividad en actividades 2) muy agradable 3) modo de calificar no es tan fuerte",
          "contras": "1) los temas se ven muy por encima, recomiendo dar un repaso autónomamente",
          "periodo": "2025-2",
          "calificacion": 4.9,
          "dificultad": 3
        }
      },
      {
        "nombre": "Gloria Nathaly Aldana Prieto",
        "slug": "gloria-nathaly-aldana-prieto",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 4.51,
        "notaPromedio": 4.44,
        "resenasOcultas": 6,
        "resena": {
          "texto": "pues ahi. es chevere",
          "pros": "fácil maestra flexible variedad de notas",
          "contras": "a veces muestra desinterés llega tarde solo son diapositivas",
          "periodo": "2021-10 (virtual)",
          "calificacion": 3.7,
          "dificultad": 5
        }
      },
      {
        "nombre": "Luis Gabriel Peña Ortiz",
        "slug": "luis-gabriel-peña-ortiz",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 4.47,
        "notaPromedio": 4.09,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Es un profesor excelente, es muy dinámico y se nota que le gusta lo que hace. Valora mucho el esfuerzo de cada uno y da muchas ayudas. Siempre son trabajos en parejas o en grupos. Tiene muy en cuenta la puntualidad y en eso si no perdona, pero de resto es un profesor muy bueno y con el cual se aprende. No se la piensen e inscriban con él.",
          "pros": "Dispuesto a escuchar sugerencias para la clase y a resolver cualquier duda. Tiene mucha paciencia",
          "contras": "Ninguno",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2.3
        }
      },
      {
        "nombre": "Maria Del Pilar Narvaez Garzon",
        "slug": "maria-del-pilar-narvaez-garzon",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.4,
        "notaPromedio": 4.5,
        "resenasOcultas": 1,
        "resena": null
      },
      {
        "nombre": "Jose Jonathan Maestre Herrera",
        "slug": "jose-jonathan-maestre-herrera",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.35,
        "notaPromedio": 4.49,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Es un excelente profesor es bastante comprensivo con todos los estudiantes y enseña muy bien... recomendadisimo :)",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Claudia Patricia Cortés Lora",
        "slug": "claudia-patricia-cortés-lora",
        "resenas": 7,
        "calidad": "regular",
        "calificacion": 4.16,
        "notaPromedio": 4.51,
        "resenasOcultas": 6,
        "resena": {
          "texto": "La peor profesora que e visto en mi vida, agresivo pasiva. Vi ingles 1 con ella y todos cancelaron y la mayoria perdio, quiere que hablen ingles fluido en la primera clase la peor profesora",
          "pros": null,
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 2.6,
          "dificultad": 5
        }
      },
      {
        "nombre": "Linda Johana Ruiz Gomez",
        "slug": "linda-johana-ruiz-gomez",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.13,
        "notaPromedio": 4.61,
        "resenasOcultas": 8,
        "resena": {
          "texto": "1.0",
          "pros": "La profesora intenta generar clases interesantes",
          "contras": "Pasivo agresiva Es todo como ella quiera Si te la monta te hace la vida imposible Pone clases los días que no debe haber clase si se pierde alguna , y su no puedes te deja sin nota",
          "periodo": "2023-2",
          "calificacion": 1.5,
          "dificultad": 1.6
        }
      },
      {
        "nombre": "Jairo Alberto Quiñones Calderon",
        "slug": "jairo-alberto-quiñones-calderon",
        "resenas": 12,
        "calidad": "regular",
        "calificacion": 3.77,
        "notaPromedio": 4.06,
        "resenasOcultas": 10,
        "resena": {
          "texto": "Tiene actitudes extrañas y de doble sentido Mucho cuidado, sobre todo si son mujeres. Se le insinuó a una estudiante, y le dijo que si la fiscalía le pregunta, el negaría todo.",
          "pros": "Nada",
          "contras": "Enfermo",
          "periodo": "2025-2",
          "calificacion": 2,
          "dificultad": 3
        }
      },
      {
        "nombre": "Diana Carolina Guevara Niño",
        "slug": "diana-carolina-guevara-niño",
        "resenas": 3,
        "calidad": "regular",
        "calificacion": 2.67,
        "notaPromedio": 4.6,
        "resenasOcultas": 1,
        "resena": {
          "texto": "La metodología que se maneja normal y virtualmente es extremadamente buena ya que el estudiante interactua directamente con el idioma. Virtualmente las clases eran por meet con duración de una hora (aproximadamente) y se dividía por estaciones (Tv, radio y vídeos) cada día una diferente. Los profes reproducían el vídeo o el podcast y uno aporta lo que va a escuchando. Las tareas eran unas guías con la misma dinámica de la clase, solo que en estas uno tiene que desarrollar el \"writing\". Quices cada dos semanas también con la misma dinámica de la clase y al final del semestre se hace una…",
          "pros": "-No es la típica metodología del verbo to be (aburrida) -Realmente se aprende. -Pierdes la pena de hablar en ingles. -Todos los profes son amables y comprensivos.",
          "contras": "- Al principio es muy duro y la pena esta al 1000, pero después de unas semanas se pierde. -No hay clases de gramática o algo así.",
          "periodo": "2020-10 (virtual)",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Olga Lucia Ruiz Convers",
        "slug": "olga-lucia-ruiz-convers",
        "resenas": 10,
        "calidad": "regular",
        "calificacion": 2.64,
        "notaPromedio": 3.82,
        "resenasOcultas": 9,
        "resena": {
          "texto": "tome ingles 2 con esta docente y he de decir que disfrute totalmente del aprendizaje con ella considero que se expresa y se hace entender bien por lo que hace ver mas facil el aprendizaje de esta lengua, yo personalmente si la recomendaria, sus clases eran bastante interactivas y no eran para nada aburridas, de las mejores clases de ingles en mi opinion",
          "pros": "-dinamismo en las actividades -busca el speaking entre conversaciones de los mismos estudiantes -se hace entender bastante bien",
          "contras": "-bastante rifgida con el plan de estudio que se le entrega por parte del comite de docentes por loq eu TODO suconstruccion se basa en ello -depende demasiado del contenido del libro bastante exigente con las llegadas e…",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2.9
        }
      },
      {
        "nombre": "Rocio Del Pilar Camacho Moscoso",
        "slug": "rocio-del-pilar-camacho-moscoso",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 2,
        "notaPromedio": 4.8,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Pésima, es alcohólica y la he visto fumando algo en una pipa. También sé que se ha metido con estudiantes",
          "pros": "Ninguno",
          "contras": "Adicciones",
          "periodo": "antes",
          "calificacion": 2,
          "dificultad": 5
        }
      },
      {
        "nombre": "John Alexander Pulido Angel",
        "slug": "john-alexander-pulido-angel",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": null
      },
      {
        "nombre": "Claudia Patricia Olarte Suarez",
        "slug": "claudia-patricia-olarte-suarez",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es muy buena profesora, en este semestre virtual se tuvo inconvenientes ya que la profesora no es muy buena manejando los recursos tecnológicos. Pero la profesora se esfuerza por enseñar bien y se basa mucho en libros para su enseñanza, también si uno no entende algo explica de una gran manera y no le gusta que no participen.",
          "pros": "Es muy comprensiva con los estudiantes",
          "contras": "No sabe manejar muy bien los recursos tecnológicos aunque se esfuerza bastante para aprender",
          "periodo": "2018-20",
          "calificacion": 4,
          "dificultad": 2.3
        }
      },
      {
        "nombre": "Lina Andrea Barrera Sandoval",
        "slug": "lina-andrea-barrera-sandoval",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es una muy buena profesora y realiza clases dinámicas y entretenidas, sigue el material de apoyo entregado por la universidad , esta dispuesta a resolver dudas y realiza las críticas constructivas necesarias. Maneja muy bien el ingles y transmite por completo el conocimiento.",
          "pros": "Desde el inicio explica los porcentajes de calificación y su metodología,",
          "contras": "No tiene",
          "periodo": "2018-20",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Miryam Cristina Vera Peña",
        "slug": "miryam-cristina-vera-peña",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Angelo Alfredo Romero Cordoba",
        "slug": "angelo-alfredo-romero-cordoba",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Clara Ines Valderrama Mendoza",
        "slug": "clara-ines-valderrama-mendoza",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Flor Alba Aguirre Baquero",
        "slug": "flor-alba-aguirre-baquero",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Jaime Andres Cadena Hernandez",
        "slug": "jaime-andres-cadena-hernandez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Jeferson Eduardo Vega Latorre",
        "slug": "jeferson-eduardo-vega-latorre",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Jose Gonzalo Raba Castro",
        "slug": "jose-gonzalo-raba-castro",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Juan Carlos Almanza Cortes",
        "slug": "juan-carlos-almanza-cortes",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Juan Guillermo Muñoz Salgado",
        "slug": "juan-guillermo-muñoz-salgado",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Julio Cesar Ortiz Castro",
        "slug": "julio-cesar-ortiz-castro",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Maria Alexandra Mora Ramirez",
        "slug": "maria-alexandra-mora-ramirez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Monica Fonnegra Velez",
        "slug": "monica-fonnegra-velez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Sandra Paola Arias Barajas",
        "slug": "sandra-paola-arias-barajas",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "1000047": {
    "nombre": "Ingles Iv- Semestral",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000047",
    "profesores": [
      {
        "nombre": "Jesica Paola Rendón Alfonso",
        "slug": "jesica-paola-rendon-alfonso",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 3.94,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Muy buena profe, muy amable y comprensiva, y además, importante, valora que hagas las cosas por ti mismo aunque te equivoques. No sientes en ningún momento presión por cometer errores ya que la profe no es para nada pesada con eso, incluso a veces sabes que dijiste algo mal pero ella ni lo menciona en la retroalimentación, supongo que para no hacerte sentir que lo haces muy mal jeje, o simplemente porque no es un error tan relevante.Toma asistencia todos los días, no diría que es supremamente estricta con eso pero es mejor cumplirle (puntual obvio, si no igual te la pone como inasistencia).…",
          "pros": "- Se puede dejar alta. - Se pasa chill con amigos. - Casi todo se hace en clase, poco o nada de tarea (aparte del proyecto final).",
          "contras": "- Tiene en cuenta asistencia.",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Beymar Leonardo Solorzano Alviz",
        "slug": "beymar-leonardo-solorzano-alviz",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.8,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Muy buen profe, muy lúdico ínsita a la participación, sus clases son muy entretenidas y amenas",
          "pros": "prácticamente ninguno",
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Cesar Augusto Romero",
        "slug": "cesar-augusto-romero",
        "resenas": 16,
        "calidad": "buena",
        "calificacion": 4.96,
        "notaPromedio": 4.54,
        "resenasOcultas": 15,
        "resena": {
          "texto": "Excelente persona, muy amable, comprensivo y demasiado humano, se aprende mucho si uno se empeña y en general es demasiado sencillo pasar, lo único es que en los trabajos en grupo se necesita un buen equipo ya que no es difícil pero se torna pesado si hay que hacer el trabajo de todo el grupo.",
          "pros": "Amable Se aprende muy bien",
          "contras": "Nada",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Narly Yadira Pardo Cadena",
        "slug": "narly-yadira-pardo-cadena",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 4.95,
        "notaPromedio": 4.55,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Es muy genial, aprendes demasiado, el horario a pesar de ser tarde haces que descargues todo y te sientas cómodo, te dan ganas de ir, hace que las clases sean dinámicas, explica demasiado bien y siempre está presta a escucharte, sin duda alguna una de las mejores profesoras de la universidad, no falten eso si le molesta de resto muy nice!!",
          "pros": null,
          "contras": null,
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 3.4
        }
      },
      {
        "nombre": "Monica Alexandra Riaño Orjuela",
        "slug": "monica-alexandra-riaño-orjuela",
        "resenas": 12,
        "calidad": "buena",
        "calificacion": 4.86,
        "notaPromedio": 4.58,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Tratare de ser objetivo, por mi parte es una increible profesora, y estos son mis argumentos que son los siguientes: - Entrega todo el programa desde el principio de manera organizada (temas que veremos, fechas de los parciales, que notas sacará, su correo, etc). - Deja tareas para estudiar por nuestra cuenta (que sirve bastante) - Deja talleres en el modulo para practicar todas las veces que uno quiera, hasta sacar el 100/100 y le puede ir a uno perfectamente. - Los parciales ya es dependiendo de lo que estudiaste, pero aprendes mucho con ella. - Por el paro, dejo de tomar asistencia, pero…",
          "pros": "- Una gran persona y gran profesora - Si te sucede algo (gripa, enfermedad, lesión) ella lo entenderá perfectamente y más si le entregas la excusa.",
          "contras": "- En ocasiones llega tarde.",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Aida Elena Monsalve Solorzano",
        "slug": "aida-elena-monsalve-solorzano",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.86,
        "notaPromedio": 4.4,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Es absolutamente una maestra que se le nota demasiado su amor por la educación. recomendadísima.",
          "pros": "variedad de actividades muy lúdica mucho énfasis en speaking y pronunciación",
          "contras": "no le gusta que hablen español",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3.1
        }
      },
      {
        "nombre": "Yaneli Niño Osorio",
        "slug": "yaneli-niño-osorio",
        "resenas": 11,
        "calidad": "buena",
        "calificacion": 4.53,
        "notaPromedio": 4.12,
        "resenasOcultas": 10,
        "resena": {
          "texto": "Es una profesora que no exige tanto, la verdad me lleve bien con ella, trata de buscar que la clase sea interactiva y dinámica, además de no ser tan fuerte con notas o trabajos, solo toca estar pendiente de las actividades de moodle que deja.",
          "pros": "1) creatividad en actividades 2) muy agradable 3) modo de calificar no es tan fuerte",
          "contras": "1) los temas se ven muy por encima, recomiendo dar un repaso autónomamente",
          "periodo": "2025-2",
          "calificacion": 4.9,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jose Jonathan Maestre Herrera",
        "slug": "jose-jonathan-maestre-herrera",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.35,
        "notaPromedio": 4.49,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Es un excelente profesor es bastante comprensivo con todos los estudiantes y enseña muy bien... recomendadisimo :)",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Beatriz Elena Urrutia Sanchez",
        "slug": "beatriz-elena-urrutia-sanchez",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.33,
        "notaPromedio": 3.87,
        "resenasOcultas": 5,
        "resena": {
          "texto": "La profesora es muy dedicada a la materia, trata de dejar constantemente pequeños trabajos de práctica, hace las clases dinámicas, tiene un muy buen dominio del tema y siempre mantuvo una buena actitud con el grupo completo, eso sí, en los parciales si va a tener que estudiar porque siempre tienen dificultad aunque la mayoría de las veces sacará notas de exposiciones orales, en el tema de las fallas es muy estricta con el tiempo y con la cantidad, en general siempre se exije tiempo para la materia entonces es recomendable no meter con otras materias pesadas pues las exposiciones si quitarán…",
          "pros": "Clases dinámicas Responde dudas en todo momento de clase y trata de llevar bien al estudiante",
          "contras": "Bastante tiempo de trabajo extra clase Muy estricta con la asistencia",
          "periodo": "2024-1",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Claudia Patricia Cortés Lora",
        "slug": "claudia-patricia-cortés-lora",
        "resenas": 7,
        "calidad": "regular",
        "calificacion": 4.16,
        "notaPromedio": 4.51,
        "resenasOcultas": 6,
        "resena": {
          "texto": "La peor profesora que e visto en mi vida, agresivo pasiva. Vi ingles 1 con ella y todos cancelaron y la mayoria perdio, quiere que hablen ingles fluido en la primera clase la peor profesora",
          "pros": null,
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 2.6,
          "dificultad": 5
        }
      },
      {
        "nombre": "Linda Johana Ruiz Gomez",
        "slug": "linda-johana-ruiz-gomez",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.13,
        "notaPromedio": 4.61,
        "resenasOcultas": 8,
        "resena": {
          "texto": "1.0",
          "pros": "La profesora intenta generar clases interesantes",
          "contras": "Pasivo agresiva Es todo como ella quiera Si te la monta te hace la vida imposible Pone clases los días que no debe haber clase si se pierde alguna , y su no puedes te deja sin nota",
          "periodo": "2023-2",
          "calificacion": 1.5,
          "dificultad": 1.6
        }
      },
      {
        "nombre": "Jennly Angelica Gomez Rodriguez",
        "slug": "jennly-angelica-gomez-rodriguez",
        "resenas": 6,
        "calidad": "regular",
        "calificacion": 4.02,
        "notaPromedio": 4.12,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Buena profesora, enseña bien y se esfuerza en que se aprenda",
          "pros": "Buena gente Comprensiva Humor un poco con satira SI le caes bien hasta te recomienda peliculas",
          "contras": "Ninguno",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Sara Elisa Monsalve Patino",
        "slug": "sara-elisa-monsalve-patino",
        "resenas": 10,
        "calidad": "regular",
        "calificacion": 3.75,
        "notaPromedio": 4,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Le gusta que uno participe mucho ya que es una nota, hace las clases participativas y en grupos, no son tan aburridas. La profesora sara es buena persona solo que a veces es mala gente. Si usted llega 15 minutos tarde le cierra la puerta y no lo deja entrar, toca golpearle la puerta arto tiempo para que le abra y cuando le abre lo regaña por hacerle ruido. Si lo ve en el celular lo regaña por no prestarle atencion y no deja ir al baño, tiene poca empatia por los problemas de uno y siempre piensa que son excusas, califica duro lo que deja pero si usted le presenta todo no hay problema.",
          "pros": "Hace clases interesantes para no aburrirse tanto",
          "contras": "Cierra la puerta en la cara Regaña por bobadas No le gusta que use celular",
          "periodo": "2025-2",
          "calificacion": 3,
          "dificultad": 3
        }
      },
      {
        "nombre": "Giovanni Alexis Mosquera Sabogal",
        "slug": "giovanni-alexis-mosquera-sabogal",
        "resenas": 4,
        "calidad": "regular",
        "calificacion": 3.6,
        "notaPromedio": 4.2,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Ha sido un excelente profesor, dista mucho de las reseñas anteriores se nota que ha aprendido a enseñar, llega bien preparado a las clases y da todo tipo de bonos por participación y actividades.",
          "pros": "- Es amable - Gracioso - Valora mucho la participación - Ayuda con vocabulario rebuscado incluso en los parciales. - Se pasa fácil asistiendo y repasando sus clases - Deja su material en el moodle del cual siempre…",
          "contras": "- No es muy claro con las notas - Si faltas mucho no va a ser amable contigo.",
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Javier Rodriguez Gomez",
        "slug": "javier-rodriguez-gomez",
        "resenas": 4,
        "calidad": "regular",
        "calificacion": 3.23,
        "notaPromedio": 4.22,
        "resenasOcultas": 3,
        "resena": {
          "texto": "el profesor es uno de los docentes mas infravalorados que conozco, sus clases son muy amenas, muy buen profesor, no le gusta que usen el telefono en clase y que hablen español mas de la cuenta ( por algo es clase de ingles) las notas son bastantes y se puede pasar , la verdad disfrute mucho de la clase",
          "pros": "sabe mucho no regaaña a no ser que sea necesario deja varias actividades para recuperar nota",
          "contras": "se puede poner algo regañon con el celular",
          "periodo": "2022-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Diana Carolina Guevara Niño",
        "slug": "diana-carolina-guevara-niño",
        "resenas": 3,
        "calidad": "regular",
        "calificacion": 2.67,
        "notaPromedio": 4.6,
        "resenasOcultas": 1,
        "resena": {
          "texto": "La metodología que se maneja normal y virtualmente es extremadamente buena ya que el estudiante interactua directamente con el idioma. Virtualmente las clases eran por meet con duración de una hora (aproximadamente) y se dividía por estaciones (Tv, radio y vídeos) cada día una diferente. Los profes reproducían el vídeo o el podcast y uno aporta lo que va a escuchando. Las tareas eran unas guías con la misma dinámica de la clase, solo que en estas uno tiene que desarrollar el \"writing\". Quices cada dos semanas también con la misma dinámica de la clase y al final del semestre se hace una…",
          "pros": "-No es la típica metodología del verbo to be (aburrida) -Realmente se aprende. -Pierdes la pena de hablar en ingles. -Todos los profes son amables y comprensivos.",
          "contras": "- Al principio es muy duro y la pena esta al 1000, pero después de unas semanas se pierde. -No hay clases de gramática o algo así.",
          "periodo": "2020-10 (virtual)",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Olga Lucia Ruiz Convers",
        "slug": "olga-lucia-ruiz-convers",
        "resenas": 10,
        "calidad": "regular",
        "calificacion": 2.64,
        "notaPromedio": 3.82,
        "resenasOcultas": 9,
        "resena": {
          "texto": "tome ingles 2 con esta docente y he de decir que disfrute totalmente del aprendizaje con ella considero que se expresa y se hace entender bien por lo que hace ver mas facil el aprendizaje de esta lengua, yo personalmente si la recomendaria, sus clases eran bastante interactivas y no eran para nada aburridas, de las mejores clases de ingles en mi opinion",
          "pros": "-dinamismo en las actividades -busca el speaking entre conversaciones de los mismos estudiantes -se hace entender bastante bien",
          "contras": "-bastante rifgida con el plan de estudio que se le entrega por parte del comite de docentes por loq eu TODO suconstruccion se basa en ello -depende demasiado del contenido del libro bastante exigente con las llegadas e…",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2.9
        }
      },
      {
        "nombre": "Alba Lucia Riaño Rodriguez",
        "slug": "alba-lucia-riano-rodriguez",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 2,
        "notaPromedio": 3.8,
        "resenasOcultas": 0,
        "resena": {
          "texto": "En lo personal vi con ella inglés nivelatorio IV, fue muy aburrido, todo el curso fueron adelantos para el proyecto final que a veces calificaba, a veces no y en la entrega final todos esos adelantos podías simplemente no usarlos; siempre llegaba media hora tarde a la clase (No se si sea así en el resto de horarios pero en mi caso que era de 7:00am - 9:00am fue así). Es estricta con la asistencia, si completas mas de 6 fallas pierdes. Subió las notas al SIA el último día casi a última hora sin dar espacio para ajustar alguna nota.",
          "pros": "No es complicado pasar, simplemente debes tener menos de 6 inasistencias y hacer todos los trabajos que ponga. No molesta por las llegadas tarde pero si por las entregas tarde de trabajos.",
          "contras": "Saca las notas quien sabe de donde, no te da retroalimentación de los trabajos, en el caso de parciales entrega el escrito y en la prueba hablada te dice que te fue bien y cuando vas a ver el consolidado de notas ves un…",
          "periodo": "2026-1",
          "calificacion": 2,
          "dificultad": 3
        }
      },
      {
        "nombre": "Carlos Rigueros",
        "slug": "carlos-rigueros",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es buen profesor. Explica bien los temas y la clase es entretenida, pero definitivamente podría serlo más. Trabaja mucho con elementos electrónicos, por lo que unas clases eran en el ALEX y las otras en la clase. Trabaja bien con el libro y el material dado en clase. al final hay un proyecto, de hablar sobre algún nobel de paz que él te designa, y es algo estricto con eso. De resto, podría decirse que es relajado.",
          "pros": null,
          "contras": null,
          "periodo": "2014-10",
          "calificacion": 3.8,
          "dificultad": 2.8
        }
      },
      {
        "nombre": "Claudia Patricia Olarte Suarez",
        "slug": "claudia-patricia-olarte-suarez",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es muy buena profesora, en este semestre virtual se tuvo inconvenientes ya que la profesora no es muy buena manejando los recursos tecnológicos. Pero la profesora se esfuerza por enseñar bien y se basa mucho en libros para su enseñanza, también si uno no entende algo explica de una gran manera y no le gusta que no participen.",
          "pros": "Es muy comprensiva con los estudiantes",
          "contras": "No sabe manejar muy bien los recursos tecnológicos aunque se esfuerza bastante para aprender",
          "periodo": "2018-20",
          "calificacion": 4,
          "dificultad": 2.3
        }
      },
      {
        "nombre": "Jenny Viviana Castelblanco Barrera",
        "slug": "jenny-viviana-castelblanco-barrera",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Lina Andrea Barrera Sandoval",
        "slug": "lina-andrea-barrera-sandoval",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es una muy buena profesora y realiza clases dinámicas y entretenidas, sigue el material de apoyo entregado por la universidad , esta dispuesta a resolver dudas y realiza las críticas constructivas necesarias. Maneja muy bien el ingles y transmite por completo el conocimiento.",
          "pros": "Desde el inicio explica los porcentajes de calificación y su metodología,",
          "contras": "No tiene",
          "periodo": "2018-20",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Adriana Marlen Sanchez Riaño",
        "slug": "adriana-marlen-sanchez-riaño",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Angelo Alfredo Romero Cordoba",
        "slug": "angelo-alfredo-romero-cordoba",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Clara Ines Valderrama Mendoza",
        "slug": "clara-ines-valderrama-mendoza",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "David Santiago Barrero Molina",
        "slug": "david-santiago-barrero-molina",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Jeferson Eduardo Vega Latorre",
        "slug": "jeferson-eduardo-vega-latorre",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Johanna Patricia Lopez Urbina",
        "slug": "johanna-patricia-lopez-urbina",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Juan Guillermo Muñoz Salgado",
        "slug": "juan-guillermo-muñoz-salgado",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Julio Cesar Ortiz Castro",
        "slug": "julio-cesar-ortiz-castro",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Luz Adriana Trejos Huertas",
        "slug": "luz-adriana-trejos-huertas",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Monica Fonnegra Velez",
        "slug": "monica-fonnegra-velez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Sandra Paola Arias Barajas",
        "slug": "sandra-paola-arias-barajas",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2016847": {
    "nombre": "Medicina De Peces",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016847",
    "profesores": [
      {
        "nombre": "Jaime Fernando Gonzalez Mantilla",
        "slug": "jaime-fernando-gonzalez-mantilla",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017046": {
    "nombre": "Anatomia Comparada",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017046",
    "profesores": [
      {
        "nombre": "Hugo Andres Gutierrez Trujillo",
        "slug": "hugo-andres-gutierrez-trujillo",
        "resenas": 12,
        "calidad": "mala",
        "calificacion": 3.16,
        "notaPromedio": 3.55,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Es excelente profesor, sabe muchísimo, tiene muchos estudios, sabe lo que enseña, pero como persona es bastante cuestionable: se toma varias cosas personales, en ocasiones no sabe diferenciar lo profesional de lo personal, y tiene una clara preferencia por las chicas, y ciertas chicas. He notado que sí, sale con algunas (varias), no es muy discreto pero en un principio no es él quien las busca, sino ellas a él, por interés por todo lo que tiene o por pasar o por ambas, pero tiene un ego muy grande para estarle rogando a las estudiantes, así que me parece un error llamarlo acosador. Le gustan…",
          "pros": "Excelente docente, inteligente",
          "contras": "Preferencias personales",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Jose Alejandro Ortiz",
        "slug": "jose-alejandro-ortiz",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017047": {
    "nombre": "Bacteriologia Y Micologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017047",
    "profesores": [
      {
        "nombre": "Martha Cecilia Suarez Alfonso",
        "slug": "martha-cecilia-suarez-alfonso",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4,
        "notaPromedio": 3,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es muy buena docente, un poco desorganizada. Se deja hablar cuando tienes conflictos (Muy humana). En cuestiones de evaluacion es un poco cuchilla en parciales practicos. no le gusta el uso de celular en clase ni pa tomar fotos de las diapositas",
          "pros": "Se deja hablar, muy humana.",
          "contras": "Desorganizada, y es brava cuando no respetan sus limites.",
          "periodo": "2025-1",
          "calificacion": 4,
          "dificultad": 2
        }
      }
    ]
  },
  "2017048": {
    "nombre": "Bioetica Y Bienestar En Salud Animal",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017048",
    "profesores": [
      {
        "nombre": "Claudia Isabel Brieva Rico",
        "slug": "claudia-isabel-brieva-rico",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Muy apasionada con lo que enseña",
          "pros": null,
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 4.6,
          "dificultad": 3
        }
      }
    ]
  },
  "2017049": {
    "nombre": "Biofisica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017049",
    "profesores": [
      {
        "nombre": "Guillermo Barriga",
        "slug": "guillermo-barriga-barriga",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.35,
        "resenasOcultas": 1,
        "resena": {
          "texto": "2021-2. De los mejores profesores que he tenido en mi recorrido en Zootecnia, ensena conceptos de la fisica que podemos aplicar cuando ya seamos profesionales y siempre busca los mejores ejemplos. Sus parciales son muy faciles de resolver, sin embargo, siempre el primer parcial va a ser el ms complejo asi que deben prestar mucha atencion, casi siempre sus parciales son muy similares a los ejercicios que resuelve en clase junto con lo estudiantes, ademas cumple con las fechas que pacta desde el principio.",
          "pros": "TODO, excelente profesor",
          "contras": null,
          "periodo": "2021-2",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Francisco Andres Olea Salgado",
        "slug": "francisco-andres-olea-salgado",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.2,
        "resenasOcultas": 0,
        "resena": {
          "texto": "El profesor en general hace bien su trabajo, explica los temas un poco desordenado pues va retrocediendo y avanzando en las diapositivas mientras explica pero si se presta atención todo bien, coloca talleres y hace parciales en base a los talleres permitiendo sacar el celular, hacer el parcial a parejas, consultar apuntes, realmente no se hace muy difícil, responde bien las preguntas y mantiene una relación cordial con los estudiantes.",
          "pros": "Parciales faciles y en base a los talleres previos. Buen material de estudio acerca de cada tema.",
          "contras": "Es enredado a la hora de dictar y guiarse de las diapositivas haciendo que sea difícil tomar apuntes.",
          "periodo": "2024-2",
          "calificacion": 4.5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Nelson Rafael Rueda Alejo",
        "slug": "nelson-rafael-rueda-alejo",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017050": {
    "nombre": "Biologia Molecular Avanzada",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017050",
    "profesores": [
      {
        "nombre": "Victor Julio Vera Alfonso",
        "slug": "victor-julio-vera-alfonso",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017052": {
    "nombre": "Cirugia I",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017052",
    "profesores": [
      {
        "nombre": "Vladimir Galindo Zamora",
        "slug": "vladimir-galindo-zamora",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017053": {
    "nombre": "Cirugia Ii",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017053",
    "profesores": [
      {
        "nombre": "Gonzalo Mejia Ortega",
        "slug": "gonzalo-mejia-ortega",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017054": {
    "nombre": "Clinica De Grandes Animales",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017054",
    "profesores": [
      {
        "nombre": "Olimpo Juan Oliver Espinosa",
        "slug": "olimpo-juan-oliver-espinosa",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017055": {
    "nombre": "Clinica De La Reproduccion",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017055",
    "profesores": [
      {
        "nombre": "Claudia Jimenez Escobar",
        "slug": "claudia-jimenez-escobar",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Explica muy bien y claro.",
          "pros": null,
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 5,
          "dificultad": 4.2
        }
      }
    ]
  },
  "2017056": {
    "nombre": "Clinica De Pequeños Animales",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017056",
    "profesores": [
      {
        "nombre": "Vladimir Galindo Zamora",
        "slug": "vladimir-galindo-zamora",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017058": {
    "nombre": "Epidemiologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017058",
    "profesores": [
      {
        "nombre": "Jorge Luis Zambrano Varon",
        "slug": "jorge-luis-zambrano-varon",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 3,
        "notaPromedio": 3.5,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es excelente en el área, sabe muchísimo y por ello tiene todo el derecho de tener el ego que tiene, pero como docente tiende a ser ofensivo, poco empático, creee que su área es la única que existe y en la única que vale la pena trabajar e investigar, al momento de hacerle preguntas no responde, o responde con otra pregunta, y cuando responde, es algo bastante diferente a lo que explica.",
          "pros": "Excelente en su área, ama lo que hace",
          "contras": "Arrogante, ególatra, poco empático",
          "periodo": "2019-2",
          "calificacion": 3,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Myriam Acero Aguilar",
        "slug": "myriam-acero-aguilar",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017059": {
    "nombre": "Extension Y Desarrollo Rural",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017059",
    "profesores": [
      {
        "nombre": "Alonso Correa Toro",
        "slug": "alonso-correa-toro",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017060": {
    "nombre": "Farmacologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017060",
    "profesores": [
      {
        "nombre": "Camilo Alberto Orozco Sanabria",
        "slug": "camilo-alberto-orozco-sanabria",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017061": {
    "nombre": "Fisiologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017061",
    "profesores": [
      {
        "nombre": "Manuel Joaquin Rojas Barreto",
        "slug": "manuel-joaquin-rojas-barreto",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4.7,
        "notaPromedio": 4.2,
        "resenasOcultas": 0,
        "resena": {
          "texto": "El profe es buena gente, se puede estudiar de apuntes y diapositivas. Ayuda si el curso va mal",
          "pros": "Chistoso Se entiende bien la clase Puntual",
          "contras": "Califica de forma muy sujetiva y eso hace que baje la nota de los parciales",
          "periodo": "2025-1",
          "calificacion": 4.7,
          "dificultad": 4.4
        }
      }
    ]
  },
  "2017062": {
    "nombre": "Genetica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017062",
    "profesores": [
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
      }
    ]
  },
  "2017063": {
    "nombre": "Histologia Y Embriologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017063",
    "profesores": [
      {
        "nombre": "Luis Enrique Caro Henao",
        "slug": "luis-enrique-caro-henao",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 3.6,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Fue uno de mis mejores profesores... Y esto es difícil de decir porque todos fueron excelentes en sus asignaturas.. por eso la nacional es lo q es.",
          "pros": "Excelente en sus explicaciones..",
          "contras": "La respuesta debe ser exacta.",
          "periodo": "antes",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Daniel Felipe Gordillo",
        "slug": "daniel-felipe-gordillo",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4.9,
        "notaPromedio": 4,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Excelente, el mejor de todos, tiene un gran futuro ptofesional. sus metodos de clase muy actualizada, muy humano. La docencia le queda como anillo al dedo.",
          "pros": "todos los existentes",
          "contras": "Es perfecto",
          "periodo": "2023-2",
          "calificacion": 4.9,
          "dificultad": 3
        }
      },
      {
        "nombre": "Aureliano Hernandez Vasquez",
        "slug": "aureliano-hernandez-vasquez",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.2,
        "notaPromedio": 4.05,
        "resenasOcultas": 1,
        "resena": null
      }
    ]
  },
  "2017064": {
    "nombre": "Imagenologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017064",
    "profesores": [
      {
        "nombre": "Hannia Gicella Camargo Huertas",
        "slug": "hannia-gicella-camargo-huertas",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.57,
        "notaPromedio": 4.27,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Es una buena profesora, es exigente pero explica bien y si uno tiene dudas se lo resuelve sin embargo es una materia que demanda mucho tiempo y esfuerzo",
          "pros": null,
          "contras": null,
          "periodo": "2023-1",
          "calificacion": 4.6,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Ricardo Parra Giraldo",
        "slug": "ricardo-parra-giraldo",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 4,
        "resena": {
          "texto": "En conjunto con la dra Hannia hacen un excelente equipo.",
          "pros": "Se preocupa por qué el estudiante entienda, muy buena metodologí",
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 4.6,
          "dificultad": 3.9
        }
      },
      {
        "nombre": "Carlos Vladimir Herrera Luna",
        "slug": "carlos-vladimir-herrera-luna",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "No ofrece lo que exige. No tiene los conceptos claros, por lo que confunde a los estudiantes.",
          "pros": null,
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 2,
          "dificultad": 3.1
        }
      }
    ]
  },
  "2017065": {
    "nombre": "Inmunologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017065",
    "profesores": []
  },
  "2017066": {
    "nombre": "Introduccion A Las Ciencias Veterinarias",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017066",
    "profesores": [
      {
        "nombre": "Carlos Alfonso Moreno Torres",
        "slug": "carlos-alfonso-moreno-torres",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.03,
        "resenasOcultas": 2,
        "resena": null
      },
      {
        "nombre": "Maria Claudia Lucia Ordoñez",
        "slug": "maria-claudia-lucia-ordoñez-ordoñez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017067": {
    "nombre": "Mecanismos De Enfermedad",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017067",
    "profesores": [
      {
        "nombre": "Benjamin Doncel Diaz",
        "slug": "benjamin-doncel-diaz",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Lucia Botero Espinosa",
        "slug": "lucia-botero-espinosa",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017068": {
    "nombre": "Salud De Hato",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017068",
    "profesores": [
      {
        "nombre": "Jorge Luis Zambrano Varon",
        "slug": "jorge-luis-zambrano-varon",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 3,
        "notaPromedio": 3.5,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es excelente en el área, sabe muchísimo y por ello tiene todo el derecho de tener el ego que tiene, pero como docente tiende a ser ofensivo, poco empático, creee que su área es la única que existe y en la única que vale la pena trabajar e investigar, al momento de hacerle preguntas no responde, o responde con otra pregunta, y cuando responde, es algo bastante diferente a lo que explica.",
          "pros": "Excelente en su área, ama lo que hace",
          "contras": "Arrogante, ególatra, poco empático",
          "periodo": "2019-2",
          "calificacion": 3,
          "dificultad": 4.5
        }
      }
    ]
  },
  "2017069": {
    "nombre": "Medicina Interna De Equinos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017069",
    "profesores": [
      {
        "nombre": "Carlos Vladimir Herrera Luna",
        "slug": "carlos-vladimir-herrera-luna",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "No ofrece lo que exige. No tiene los conceptos claros, por lo que confunde a los estudiantes.",
          "pros": null,
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 2,
          "dificultad": 3.1
        }
      },
      {
        "nombre": "Olimpo Juan Oliver Espinosa",
        "slug": "olimpo-juan-oliver-espinosa",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017070": {
    "nombre": "Medicina Interna De Pequeños",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017070",
    "profesores": [
      {
        "nombre": "Dora Lucia Carvajal Parra",
        "slug": "dora-lucia-carvajal-parra",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Vladimir Galindo Zamora",
        "slug": "vladimir-galindo-zamora",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017071": {
    "nombre": "Medicina Interna De Porcinos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017071",
    "profesores": [
      {
        "nombre": "Maria Antonia Rincon Monroy",
        "slug": "maria-antonia-rincon-monroy",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017072": {
    "nombre": "Medicina Interna De Rumiantes",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017072",
    "profesores": [
      {
        "nombre": "Carlos Vladimir Herrera Luna",
        "slug": "carlos-vladimir-herrera-luna",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "No ofrece lo que exige. No tiene los conceptos claros, por lo que confunde a los estudiantes.",
          "pros": null,
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 2,
          "dificultad": 3.1
        }
      },
      {
        "nombre": "Olimpo Juan Oliver Espinosa",
        "slug": "olimpo-juan-oliver-espinosa",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017073": {
    "nombre": "Medicina Interna De Silvestres",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017073",
    "profesores": [
      {
        "nombre": "Claudia Isabel Brieva Rico",
        "slug": "claudia-isabel-brieva-rico",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Muy apasionada con lo que enseña",
          "pros": null,
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 4.6,
          "dificultad": 3
        }
      }
    ]
  },
  "2017074": {
    "nombre": "Medicina Aviar",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017074",
    "profesores": [
      {
        "nombre": "Diana Marcela Alvarez Mira",
        "slug": "diana-marcela-alvarez-mira",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017076": {
    "nombre": "Nutricion",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017076",
    "profesores": [
      {
        "nombre": "Juan Evangelista Carulla Fornaguera",
        "slug": "juan-evangelista-carulla-fornaguera",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.4,
        "notaPromedio": 3.6,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Es un exelente profesor y maneja bien los temas, aunque se vuelve algo monótono cuando solo habla y luego comienza a hacer preguntas sin mayor relevancia.",
          "pros": null,
          "contras": null,
          "periodo": "2021-2",
          "calificacion": 4.3,
          "dificultad": 3.5
        }
      }
    ]
  },
  "2017077": {
    "nombre": "Parasitologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017077",
    "profesores": [
      {
        "nombre": "Jesus Alfredo Cortes Vecino",
        "slug": "jesus-alfredo-cortes-vecino",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017078": {
    "nombre": "Patologia Clinica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017078",
    "profesores": [
      {
        "nombre": "Carlos Alfonso Moreno Torres",
        "slug": "carlos-alfonso-moreno-torres",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.03,
        "resenasOcultas": 2,
        "resena": null
      }
    ]
  },
  "2017079": {
    "nombre": "Patologia Sistemica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017079",
    "profesores": [
      {
        "nombre": "Hector Eduardo Gonzalez Charry",
        "slug": "hector-eduardo-gonzalez-charry",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Lucia Botero Espinosa",
        "slug": "lucia-botero-espinosa",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017080": {
    "nombre": "Planeacion Y Evaluacion De Empresas Agropecuarias",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017080",
    "profesores": [
      {
        "nombre": "Alejandro Cotes Torres",
        "slug": "alejandro-cotes-torres",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 5,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es buen profesor, pero es muy sarcástico y puede herir susceptibilidades. Da buenas bases",
          "pros": "Se aprende mucho",
          "contras": "Difícil",
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Jaime Fabian Cruz Uribe",
        "slug": "jaime-fabian-cruz-uribe",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017084": {
    "nombre": "Teriogenologia I",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017084",
    "profesores": [
      {
        "nombre": "Jorge Luis Zambrano Varon",
        "slug": "jorge-luis-zambrano-varon",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 3,
        "notaPromedio": 3.5,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es excelente en el área, sabe muchísimo y por ello tiene todo el derecho de tener el ego que tiene, pero como docente tiende a ser ofensivo, poco empático, creee que su área es la única que existe y en la única que vale la pena trabajar e investigar, al momento de hacerle preguntas no responde, o responde con otra pregunta, y cuando responde, es algo bastante diferente a lo que explica.",
          "pros": "Excelente en su área, ama lo que hace",
          "contras": "Arrogante, ególatra, poco empático",
          "periodo": "2019-2",
          "calificacion": 3,
          "dificultad": 4.5
        }
      }
    ]
  },
  "2017085": {
    "nombre": "Teriogenologia Ii",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017085",
    "profesores": [
      {
        "nombre": "Claudia Jimenez Escobar",
        "slug": "claudia-jimenez-escobar",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Explica muy bien y claro.",
          "pros": null,
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 5,
          "dificultad": 4.2
        }
      }
    ]
  },
  "2017086": {
    "nombre": "Rotacion Por Laboratorios",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017086",
    "profesores": [
      {
        "nombre": "Carlos Alfonso Moreno Torres",
        "slug": "carlos-alfonso-moreno-torres",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.03,
        "resenasOcultas": 2,
        "resena": null
      }
    ]
  },
  "2017087": {
    "nombre": "Salud Publica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017087",
    "profesores": [
      {
        "nombre": "Luis Joaquin Polo Teran",
        "slug": "luis-joaquin-polo-teran",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017088": {
    "nombre": "Semiologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017088",
    "profesores": [
      {
        "nombre": "Carlos Vladimir Herrera Luna",
        "slug": "carlos-vladimir-herrera-luna",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "No ofrece lo que exige. No tiene los conceptos claros, por lo que confunde a los estudiantes.",
          "pros": null,
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 2,
          "dificultad": 3.1
        }
      }
    ]
  },
  "2017089": {
    "nombre": "Sistemas De Produccion I",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017089",
    "profesores": []
  },
  "2017090": {
    "nombre": "Sistemas De Produccion Ii",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017090",
    "profesores": []
  },
  "2017091": {
    "nombre": "Sociedades Rurales",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017091",
    "profesores": [
      {
        "nombre": "Alonso Correa Toro",
        "slug": "alonso-correa-toro",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017092": {
    "nombre": "Suelos Y Plantas",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017092",
    "profesores": []
  },
  "2017093": {
    "nombre": "Toxicologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017093",
    "profesores": [
      {
        "nombre": "Gonzalo Jair Diaz Gonzalez",
        "slug": "gonzalo-jair-diaz-gonzalez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Jaime Fernando Gonzalez Mantilla",
        "slug": "jaime-fernando-gonzalez-mantilla",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017094": {
    "nombre": "Trabajo De Campo Costa Atlantica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017094",
    "profesores": [
      {
        "nombre": "Alonso Correa Toro",
        "slug": "alonso-correa-toro",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017095": {
    "nombre": "Trabajo De Campo Los Llanos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017095",
    "profesores": [
      {
        "nombre": "Alonso Correa Toro",
        "slug": "alonso-correa-toro",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017096": {
    "nombre": "Trabajo De Campo Quindio",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017096",
    "profesores": [
      {
        "nombre": "Alonso Correa Toro",
        "slug": "alonso-correa-toro",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017097": {
    "nombre": "Virologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017097",
    "profesores": [
      {
        "nombre": "Jairo Jaime Correa",
        "slug": "jairo-jaime-correa",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 3.35,
        "notaPromedio": 3.65,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Muuy buen docente, su pasión por la carrera es motivadora, ademas es muy buen pedagogo, siempre se esfuerza por que todos los temas queden claros y siempre tiene buena disposición para explicar lo que uno no entienda, no importa si tiene que repetirlo muchas veces. Nota: si quieren tener un buen semestre con el, solo prongramense a que su clase dura 3 horas, en lo personal creo que 2 horas para explicar tanto tema es un crimen, asi que en parte lo mejor tanto para el profesor como para uno como estudiante es que sean las 3 horas para explicar todo el tema.",
          "pros": "Enseña demasiado bien",
          "contras": "Tiene un caracter fuerte Sus parciales son duros.",
          "periodo": "2023-2",
          "calificacion": 4.7,
          "dificultad": 4
        }
      },
      {
        "nombre": "Gloria Consuelo Ramirez Nieto",
        "slug": "gloria-consuelo-ramirez-nieto",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2017249": {
    "nombre": "Trabajo De Grado",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017249",
    "profesores": [
      {
        "nombre": "Carlos Alfonso Moreno Torres",
        "slug": "carlos-alfonso-moreno-torres",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.03,
        "resenasOcultas": 2,
        "resena": null
      },
      {
        "nombre": "Juan Evangelista Carulla Fornaguera",
        "slug": "juan-evangelista-carulla-fornaguera",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.4,
        "notaPromedio": 3.6,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Es un exelente profesor y maneja bien los temas, aunque se vuelve algo monótono cuando solo habla y luego comienza a hacer preguntas sin mayor relevancia.",
          "pros": null,
          "contras": null,
          "periodo": "2021-2",
          "calificacion": 4.3,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Martha Cecilia Suarez Alfonso",
        "slug": "martha-cecilia-suarez-alfonso",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4,
        "notaPromedio": 3,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es muy buena docente, un poco desorganizada. Se deja hablar cuando tienes conflictos (Muy humana). En cuestiones de evaluacion es un poco cuchilla en parciales practicos. no le gusta el uso de celular en clase ni pa tomar fotos de las diapositas",
          "pros": "Se deja hablar, muy humana.",
          "contras": "Desorganizada, y es brava cuando no respetan sus limites.",
          "periodo": "2025-1",
          "calificacion": 4,
          "dificultad": 2
        }
      },
      {
        "nombre": "Jairo Jaime Correa",
        "slug": "jairo-jaime-correa",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 3.35,
        "notaPromedio": 3.65,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Muuy buen docente, su pasión por la carrera es motivadora, ademas es muy buen pedagogo, siempre se esfuerza por que todos los temas queden claros y siempre tiene buena disposición para explicar lo que uno no entienda, no importa si tiene que repetirlo muchas veces. Nota: si quieren tener un buen semestre con el, solo prongramense a que su clase dura 3 horas, en lo personal creo que 2 horas para explicar tanto tema es un crimen, asi que en parte lo mejor tanto para el profesor como para uno como estudiante es que sean las 3 horas para explicar todo el tema.",
          "pros": "Enseña demasiado bien",
          "contras": "Tiene un caracter fuerte Sus parciales son duros.",
          "periodo": "2023-2",
          "calificacion": 4.7,
          "dificultad": 4
        }
      },
      {
        "nombre": "Hugo Andres Gutierrez Trujillo",
        "slug": "hugo-andres-gutierrez-trujillo",
        "resenas": 12,
        "calidad": "mala",
        "calificacion": 3.16,
        "notaPromedio": 3.55,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Es excelente profesor, sabe muchísimo, tiene muchos estudios, sabe lo que enseña, pero como persona es bastante cuestionable: se toma varias cosas personales, en ocasiones no sabe diferenciar lo profesional de lo personal, y tiene una clara preferencia por las chicas, y ciertas chicas. He notado que sí, sale con algunas (varias), no es muy discreto pero en un principio no es él quien las busca, sino ellas a él, por interés por todo lo que tiene o por pasar o por ambas, pero tiene un ego muy grande para estarle rogando a las estudiantes, así que me parece un error llamarlo acosador. Le gustan…",
          "pros": "Excelente docente, inteligente",
          "contras": "Preferencias personales",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Jorge Luis Zambrano Varon",
        "slug": "jorge-luis-zambrano-varon",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 3,
        "notaPromedio": 3.5,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es excelente en el área, sabe muchísimo y por ello tiene todo el derecho de tener el ego que tiene, pero como docente tiende a ser ofensivo, poco empático, creee que su área es la única que existe y en la única que vale la pena trabajar e investigar, al momento de hacerle preguntas no responde, o responde con otra pregunta, y cuando responde, es algo bastante diferente a lo que explica.",
          "pros": "Excelente en su área, ama lo que hace",
          "contras": "Arrogante, ególatra, poco empático",
          "periodo": "2019-2",
          "calificacion": 3,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Claudia Isabel Brieva Rico",
        "slug": "claudia-isabel-brieva-rico",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Muy apasionada con lo que enseña",
          "pros": null,
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 4.6,
          "dificultad": 3
        }
      },
      {
        "nombre": "Claudia Jimenez Escobar",
        "slug": "claudia-jimenez-escobar",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Explica muy bien y claro.",
          "pros": null,
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 5,
          "dificultad": 4.2
        }
      },
      {
        "nombre": "Alonso Correa Toro",
        "slug": "alonso-correa-toro",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Benjamin Doncel Diaz",
        "slug": "benjamin-doncel-diaz",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Camilo Alberto Orozco Sanabria",
        "slug": "camilo-alberto-orozco-sanabria",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Dora Lucia Carvajal Parra",
        "slug": "dora-lucia-carvajal-parra",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Gloria Consuelo Ramirez Nieto",
        "slug": "gloria-consuelo-ramirez-nieto",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Gonzalo Jair Diaz Gonzalez",
        "slug": "gonzalo-jair-diaz-gonzalez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Gonzalo Mejia Ortega",
        "slug": "gonzalo-mejia-ortega",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Harvey Lozano Marquez",
        "slug": "harvey-lozano-marquez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Jaime Fernando Gonzalez Mantilla",
        "slug": "jaime-fernando-gonzalez-mantilla",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Jesus Alfredo Cortes Vecino",
        "slug": "jesus-alfredo-cortes-vecino",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Jimmy Jolman Vargas Duarte",
        "slug": "jimmy-jolman-vargas-duarte",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Lucia Botero Espinosa",
        "slug": "lucia-botero-espinosa",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Luis Joaquin Polo Teran",
        "slug": "luis-joaquin-polo-teran",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Myriam Acero Aguilar",
        "slug": "myriam-acero-aguilar",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Olimpo Juan Oliver Espinosa",
        "slug": "olimpo-juan-oliver-espinosa",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Vladimir Galindo Zamora",
        "slug": "vladimir-galindo-zamora",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2022951": {
    "nombre": "Practicas Integradas Reproduccion Animal",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2022951",
    "profesores": [
      {
        "nombre": "Jorge Luis Zambrano Varon",
        "slug": "jorge-luis-zambrano-varon",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 3,
        "notaPromedio": 3.5,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es excelente en el área, sabe muchísimo y por ello tiene todo el derecho de tener el ego que tiene, pero como docente tiende a ser ofensivo, poco empático, creee que su área es la única que existe y en la única que vale la pena trabajar e investigar, al momento de hacerle preguntas no responde, o responde con otra pregunta, y cuando responde, es algo bastante diferente a lo que explica.",
          "pros": "Excelente en su área, ama lo que hace",
          "contras": "Arrogante, ególatra, poco empático",
          "periodo": "2019-2",
          "calificacion": 3,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Claudia Jimenez Escobar",
        "slug": "claudia-jimenez-escobar",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Explica muy bien y claro.",
          "pros": null,
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 5,
          "dificultad": 4.2
        }
      },
      {
        "nombre": "Harvey Lozano Marquez",
        "slug": "harvey-lozano-marquez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2022952": {
    "nombre": "Practicas Integradas Medicina Aviar Y Produccion Avicola",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2022952",
    "profesores": [
      {
        "nombre": "Gloria Consuelo Ramirez Nieto",
        "slug": "gloria-consuelo-ramirez-nieto",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2022954": {
    "nombre": "Practicas Integradas En Medicina Equina",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2022954",
    "profesores": [
      {
        "nombre": "Gonzalo Mejia Ortega",
        "slug": "gonzalo-mejia-ortega",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Olimpo Juan Oliver Espinosa",
        "slug": "olimpo-juan-oliver-espinosa",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2022955": {
    "nombre": "Practicas Integradas Medicina Y Cirugia De Pequeños Animales",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2022955",
    "profesores": [
      {
        "nombre": "Dora Lucia Carvajal Parra",
        "slug": "dora-lucia-carvajal-parra",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Vladimir Galindo Zamora",
        "slug": "vladimir-galindo-zamora",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2022956": {
    "nombre": "Practicas Integradas Medicina Y Produccion Porcina",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2022956",
    "profesores": [
      {
        "nombre": "Jose Dario Mogollon Galvis",
        "slug": "jose-dario-mogollon-galvis",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2022957": {
    "nombre": "Practicas Integradas Salud Publica E Infectologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2022957",
    "profesores": [
      {
        "nombre": "Luis Joaquin Polo Teran",
        "slug": "luis-joaquin-polo-teran",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Myriam Acero Aguilar",
        "slug": "myriam-acero-aguilar",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2022958": {
    "nombre": "Practicas Integradas Animales Silvestres Y De Laboratorio",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2022958",
    "profesores": [
      {
        "nombre": "Manuel Joaquin Rojas Barreto",
        "slug": "manuel-joaquin-rojas-barreto",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4.7,
        "notaPromedio": 4.2,
        "resenasOcultas": 0,
        "resena": {
          "texto": "El profe es buena gente, se puede estudiar de apuntes y diapositivas. Ayuda si el curso va mal",
          "pros": "Chistoso Se entiende bien la clase Puntual",
          "contras": "Califica de forma muy sujetiva y eso hace que baje la nota de los parciales",
          "periodo": "2025-1",
          "calificacion": 4.7,
          "dificultad": 4.4
        }
      },
      {
        "nombre": "Carlos Alfonso Moreno Torres",
        "slug": "carlos-alfonso-moreno-torres",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.03,
        "resenasOcultas": 2,
        "resena": null
      },
      {
        "nombre": "Claudia Isabel Brieva Rico",
        "slug": "claudia-isabel-brieva-rico",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Muy apasionada con lo que enseña",
          "pros": null,
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 4.6,
          "dificultad": 3
        }
      },
      {
        "nombre": "Camilo Alberto Orozco Sanabria",
        "slug": "camilo-alberto-orozco-sanabria",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Jesus Alfredo Cortes Vecino",
        "slug": "jesus-alfredo-cortes-vecino",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2026111": {
    "nombre": "Practicas Integradas En Patologia Veterinaria",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2026111",
    "profesores": [
      {
        "nombre": "Benjamin Doncel Diaz",
        "slug": "benjamin-doncel-diaz",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "2026248": {
    "nombre": "Problematica Ambiental",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2026248",
    "profesores": [
      {
        "nombre": "Jaime Fernando Gonzalez Mantilla",
        "slug": "jaime-fernando-gonzalez-mantilla",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  }
};
