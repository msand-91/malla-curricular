/* ============================================================================
   losestudiantes.js — GENERADO AUTOMÁTICAMENTE, no editar a mano.
   Fuente: losestudiantes.com
     · códigos y URLs verificados el 2026-07-25
     · profesores por materia actualizados el 2026-08-18
   Regenerar con:
     node herramientas/verificar-losestudiantes.js     (códigos y enlaces)
     node herramientas/sincronizar-profesores.js       (profesores)
   ========================================================================== */

const LE_BASE_PROFESOR = 'https://losestudiantes.com/universidad-nacional/professors/';
const LE_VERIFICADO = '2026-07-25';
const LE_PROFESORES_ACTUALIZADO = '2026-08-18';

/* código SIA -> { nombre, url, profesores: [{ nombre, slug, resenas, calidad }] } */
const LOSESTUDIANTES = {
  "1000003": {
    "nombre": "Algebra Lineal",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000003",
    "profesores": [
      {
        "nombre": "Lenin David Angarita Rivera",
        "slug": "lenin-david-angarita-rivera",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.56,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Lenin es un excelente profesor, es muy respetuoso, amable y se nota que le gusta enseñar. Explica muy bien los temas, el ritmo de las clases es adecuado, hace sesiones de solución de dudas y es muuuuuuy organizado con las notas y los horarios. La nota se divide en 4 parciales (80%), quices y tareas (20%). Los parciales son trabajables, no imposibles pero requieren estudio, el profe comparte talleres y preparciales que son muy parecidos a los parciales. No dude, inscriba con el",
          "pros": "- Cronograma del curso con fechas de parciales y quices desde el primer día - Explica vectores antes que matrices (si esta viendo el tridente le sirve) - Buen material de estudio - Notas organizadas - Bono de 0.5 en…",
          "contras": "- No le ayuda si perdió la materia (le ayudó todo el semestre, no sea conchudo) - No deja hoja de apuntes ni calculadora en parciales - Sale como no informado - Nada mas, Lenin 🐐",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
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
        "nombre": "Henry Steven Rueda Corredor",
        "slug": "henry-steven-rueda-corredor",
        "resenas": 22,
        "calidad": "buena",
        "calificacion": 4.99,
        "notaPromedio": 4.38,
        "resenasOcultas": 21,
        "resena": {
          "texto": "Sin lugar a dudas es el mejor profe que he tenido, es muy amable, sus parciales son trabajables (No son muy difíciles pero tampoco son tan faciales, lo justo). Da bonos por realizar algunos cursor de matemáticas en Coursera. Los talleres son un poco largos pero muy divertidos son ejercicios sonde se aplica lo visto en clase.",
          "pros": "TODOS",
          "contras": "NADA",
          "periodo": "2021-10 (virtual)",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
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
        "nombre": "Cristian David Sarmiento Santiago",
        "slug": "cristian-david-sarmiento-santiago",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.93,
        "notaPromedio": 3.97,
        "resenasOcultas": 2,
        "resena": {
          "texto": "El profe es parchado, buena gente, puntual, no tira a matar, los parciales son relajados pero no regalados igual tiene que estudiar obvio pero a lo bien el profesor es muy bueno explicando, es bastante pedagógico, tanto que hasta sus chistes (a veces malos) me hacian el día. Aún tengo stickers de el diciendo *maravilloso* y *súper súper súper* es un amor",
          "pros": "Se aprende Se pasa No consume tanto tiempo",
          "contras": "Ninguno (A veces no responde correos xd)",
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jose Ricardo Moncayo Vega",
        "slug": "jose-ricardo-moncayo-vega",
        "resenas": 17,
        "calidad": "buena",
        "calificacion": 4.92,
        "notaPromedio": 4.66,
        "resenasOcultas": 16,
        "resena": {
          "texto": "Un buen profesor, se encarga de que sus estudiantes entiendan y siempre está dispuesto a realizar sesión de dudas y clases para reponer. Ofrece alternativas y siempre está abierto a escuchar las opiniones de sus estudiantes para modificar cómo se lleva la asignatura. Sus parciales no son muy difíciles, son trabajables y se basa en gran parte de los talleres que envía, por ello es importante hacerlos. Califica justo los errores que usted tenga, pero no busca rajar.",
          "pros": "- Parciales trabajables - Flexible con fechas y horarios de atención. - Ayuda mucho y responde dudas que se presenten - Bastante amable - Califica lo justo.",
          "contras": null,
          "periodo": "2022-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Juan Felipe Plazas",
        "slug": "juan-felipe-plazas",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 4.9,
        "notaPromedio": 5,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Lo considero un profe bastante bueno, no llama asistencia, explica bien, sirve mucho más en una materia tan abstracta como algebra, se puede dejar alta por el método de calificación que utiliza y que sus parciales no son difíciles, si fue a todas las clases y hizo ejercicios del taller puede dejarla en 5.0, es difícil perderla con el, de 70-75 que éramos en el curso, solo perdieron 3. Lo único que veo mal es que los últimos temas de algebra los pasa muy por encima y eso puede dejar huecos en Ecuaciones y Multivariado, pero nada que no se solucione con un repaso por uno mismo. A lo último del…",
          "pros": "Se deja alta Explica bien",
          "contras": "Escribe muy pequeño (díganle, no pone problema) Habla bajito (llegué temprano) Si le pregunta algo más complejo como aplicaciones muchas veces su respuesta puede ser que ese tema no sirve y así evade la pregunta",
          "periodo": "2025-1",
          "calificacion": 4.6,
          "dificultad": 2
        }
      },
      {
        "nombre": "Jhoan Sebastian Tenjo Garcia",
        "slug": "jhoan-sebastian-tenjo-garcia",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.85,
        "notaPromedio": 4.46,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Es buen profesor, si puede ver multi con el hágalo de una ya que realmente encontrar buenos profesores de Multivariable es un poco complicado, no hace la materia regalada pero si la hace amena, ya que explica super bien, responde todas las dudas y siempre intenta que todos tengamos todo claro. Por cierto los parciales de cada alumno son diferentes, inclusive ya vienen marcados con el nombre y si o si los ejercicios salían de una lista gigante de ejercicios que dejaba a inicio de cada corte",
          "pros": "Explica muy bien, da bonus y es buena persona. Ahh y este semestre en el segundo y tercer parcial nos dejo llevar ficha bibliográfica",
          "contras": "No es contra contra, pero consejo haga los talleres con tiempo y a su conciencia, eso le va a ayudar mucho en los parciales",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Oscar Guillermo Riaño Castañeda",
        "slug": "oscar-guillermo-riano-castaneda",
        "resenas": 23,
        "calidad": "buena",
        "calificacion": 4.84,
        "notaPromedio": 4.43,
        "resenasOcultas": 22,
        "resena": {
          "texto": "Buen docente, se nota el amor que le tiene a enseñar, hay que estudiar, deja mcho material opcional para aprendizaje autonomo, los parciales son de lo que se ve en clase y sirve mucho guiarse de los talleres",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3.9
        }
      },
      {
        "nombre": "Martha Mancera",
        "slug": "martha-mancera",
        "resenas": 21,
        "calidad": "buena",
        "calificacion": 4.79,
        "notaPromedio": 4.34,
        "resenasOcultas": 20,
        "resena": {
          "texto": "la mejor profesora de matemáticas que he tenido en mi vida, explica claramente, resuelve dudas y enseña de una manera intuitiva que establece buenos fundamentos para",
          "pros": null,
          "contras": null,
          "periodo": "2022-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Jason Ricardo Hernandez Mogollon",
        "slug": "jason-ricardo-hernandez-mogollon",
        "resenas": 16,
        "calidad": "buena",
        "calificacion": 4.79,
        "notaPromedio": 4.46,
        "resenasOcultas": 15,
        "resena": {
          "texto": "Excelente profesor, muy puntual y comprometido con la enseñanza. Es muy amable y siempre resolvió dudas, además hizo actividades bono para subir notas. Califica con parciales, quizzes y talleres, pero si estudia es bastante cinqueable porque evalúa lo que explica en clase.",
          "pros": "-Muy amable -Le interesa que la gente aprenda -Prepara sus clases",
          "contras": "-Suele ser un poco más exigente en los parciales, pero con esfuerzo se pasa -Es muy flexible en cuanto a entregas",
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Camilo Ernesto Medina Gonzalez",
        "slug": "camilo-ernesto-medina-gonzalez",
        "resenas": 32,
        "calidad": "buena",
        "calificacion": 4.78,
        "notaPromedio": 4.5,
        "resenasOcultas": 31,
        "resena": {
          "texto": "Muy buen profesor muy chistoso, parchado y ademas explica muy bien, tira muy buenos bonos y los quices no son a matar. Al principio del semestre deja al grupo elegir los porcentajes de cuanto va a valer cada parcial, quices y trabajo final. Si hacen los parciales que el manda lit pasan ademas que siempre pone un punto extra para ayudar en la nota.",
          "pros": "Tira muchos Bonos salvavidas Metan con el no se van a arrepentir",
          "contras": "Nada, es perfecto.",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Diego Arturo Niño Torres",
        "slug": "diego-arturo-niño-torres",
        "resenas": 19,
        "calidad": "buena",
        "calificacion": 4.76,
        "notaPromedio": 4.59,
        "resenasOcultas": 18,
        "resena": {
          "texto": "El profesor explica excelente, tiene mucha paciencia y se esmera en que todos los estudiantes entiendan. Los parciales son justos y para pasarlos obviamente hay que poner mucha atención a clase. Él permite cualquier tipo de pregunta y la responderá con la mayor amabilidad posible.",
          "pros": null,
          "contras": null,
          "periodo": "2019-2",
          "calificacion": 5,
          "dificultad": 2.7
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
        "nombre": "Sebastian Higuera Rincon",
        "slug": "sebastian-higuera-rincon",
        "resenas": 41,
        "calidad": "buena",
        "calificacion": 4.73,
        "notaPromedio": 3.68,
        "resenasOcultas": 40,
        "resena": {
          "texto": "Un excelente profesor en términos generales. Explica los temas de manera didáctica, lo que facilita su comprensión, y es justo en la elaboración de los parciales, ya que incluyen únicamente lo visto en clase. Como recomendación, es fundamental realizar los talleres que deja, ya que son una excelente preparación para los exámenes.",
          "pros": null,
          "contras": null,
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Andres Alejandro Rubiano Suarez",
        "slug": "andres-alejandro-rubiano-suarez",
        "resenas": 21,
        "calidad": "buena",
        "calificacion": 4.71,
        "notaPromedio": 4.11,
        "resenasOcultas": 20,
        "resena": {
          "texto": "Excelente docente, El profe es Matemático, Metalero y Otaku, explicaciones del otro mundo. Hace que cosas tan complejas se vean sencillas. Bonos en parciales, bonos por participación y excelente persona. La clase es tan entretenida que el tiempo pasa rápido. Ojo: No significa que regale la materia, hay ejercicios complejos y toca camellarle.",
          "pros": "Todo, crack",
          "contras": "Me da un poco de toc que consuma tanto azucar. Dulces y bebidas energizantes todas las clases.",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "David Amaya Velásquez",
        "slug": "david-amaya-velásquez",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.67,
        "notaPromedio": 4.15,
        "resenasOcultas": 9,
        "resena": {
          "texto": "El tipo es severa persona y muy buen profesor.",
          "pros": "Responde cualquier duda No es tan dificil de pasar Se aprende",
          "contras": "Tiene una manera un poco brusca de hablar En los parciales salen varias preguntas de demostración",
          "periodo": "2021-10 (virtual)",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jaime Andres Robayo Mesa",
        "slug": "jaime-andres-robayo-mesa",
        "resenas": 57,
        "calidad": "buena",
        "calificacion": 4.65,
        "notaPromedio": 4.28,
        "resenasOcultas": 56,
        "resena": {
          "texto": "La materia fue muy buena, el profesor siempre se esmerama mucho en que se entendieran todos los temas. No era prepotente",
          "pros": null,
          "contras": null,
          "periodo": "2020-10 (virtual)",
          "calificacion": 5,
          "dificultad": 5
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
        "nombre": "Alexander Caviedes Castro",
        "slug": "alexander-caviedes-castro",
        "resenas": 17,
        "calidad": "buena",
        "calificacion": 4.64,
        "notaPromedio": 4.04,
        "resenasOcultas": 16,
        "resena": {
          "texto": "Pedagogo de pedagogos. Sabe enseñar su materia como no he visto a nadie enseñarla. Las evaluaciones que aplica son excelente método de estudio y ayudan a guardarse los conocimientos requerido de la materia. Explica, enseña, responde dudas como ningún otro profesor, excelente. Sinceramente, espero que siga dictando clase porque tiene la vocación para ello.",
          "pros": null,
          "contras": null,
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 4.3
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
        "nombre": "Julián Camilo Cano",
        "slug": "julián-camilo-cano",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 4.55,
        "notaPromedio": 3.85,
        "resenasOcultas": 3,
        "resena": {
          "texto": "El profesor es alegre y bastante amable, tiene una buena actitud en clase. Explica bien. Los parciales tienen bastantes preguntas teóricas de verdadero-falso, que resultan complejas.",
          "pros": null,
          "contras": "Los talleres para estudiar no vienen con las rtas correctas para revisar.",
          "periodo": "2021-10 (virtual)",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Fabio Alejandro Calderon Mateus",
        "slug": "fabio-alejandro-calderon-mateus",
        "resenas": 22,
        "calidad": "buena",
        "calificacion": 4.52,
        "notaPromedio": 4.25,
        "resenasOcultas": 21,
        "resena": {
          "texto": "Aunque es un excelente profesor y buena persona me dejó un mal sabor de boca cuando renunció y nos pusieron como profesor a Pecha. Si bien justificó que la causa de su renuncia era situación personal, nos avisó el último día de la semana de adiciones y cancelaciones por lo que hubo mucha gente que no pudo cancelar la materia. Pudo habernos avisado la clase anterior (Dijo que había enviado su carta de renuncia la clase pasada) :/ Otro punto extra es que el semestre pasado hizo lo mismo con otro grupo que tuvo y también los dejó mamando.",
          "pros": "El mejor profesor para ver cualquier materia de Mates",
          "contras": "Puede que renuncie y te coloquen a Pecha :v",
          "periodo": "2022-2",
          "calificacion": 1.5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Juan sebastian Rodriguez Florez",
        "slug": "juan-sebastian-rodriguez-florez",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.5,
        "resenasOcultas": 0,
        "resena": {
          "texto": "El tipo es dios, explica bien uno aprende y las clases no son aburridas y además es fácil pasar Los porcentajes son negociables y deja talleres antes del parcial que son prácticamente iguales al parcial",
          "pros": null,
          "contras": null,
          "periodo": "2024-1",
          "calificacion": 4.5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Darlyn Yamid Yela Rosero",
        "slug": "darlyn-yamid-yela-rosero",
        "resenas": 15,
        "calidad": "buena",
        "calificacion": 4.46,
        "notaPromedio": 3.94,
        "resenasOcultas": 14,
        "resena": {
          "texto": "Es el mejor profesor, si realmente quieren aprender y pasar inscriban con el, es muy paciente y a mi parecer explica muy bien, eso si, hay que poner atención en clase y no faltar por que luego va a ser difícil que le cojan el hilo a los siguientes temas",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Fabio Calderón Mateus",
        "slug": "fabio-calderón-mateus",
        "resenas": 22,
        "calidad": "buena",
        "calificacion": 4.42,
        "notaPromedio": 4.12,
        "resenasOcultas": 21,
        "resena": {
          "texto": "Ví con Fabio en 2023-1 Inscribí álgebra lineal, y terminé viendo con Pecha. Al final pasé con Pecha, pero bueno, eso no viene al caso. Puede que Fabio sí sea un buen profesor, pero me parece un gesto muy irresponsable y descarado de su parte que haya cancelado; de remate la universidad nos dió el gran desafio de ver con Arsenio. No es la primera vez que deja tirado a un grupo, muchos fueron afectados por eso y se vieron atrasados en sus carreras, incluso eso hizo que hubieran cuellos de botella en la materia de álgebra lineal para el siguiente semestre.",
          "pros": "- Es un buen profesor en su pedagogía y métodología.",
          "contras": "-Irresponsabilidad a la hora de tomar grupos y cancelarlos a últimos momento por sus intereses personales. Descarado.",
          "periodo": "2023-1",
          "calificacion": 1.5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Cristian Joel Osorio Mancipe",
        "slug": "cristian-joel-osorio-mancipe",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 4.38,
        "notaPromedio": 4.22,
        "resenasOcultas": 3,
        "resena": {
          "texto": "El fue mi tutor en mate al principio de pandemia jajaaj junto con andres..tqm joel me encanta q ya esta a este nivel siga haciendo lo q le gusta y mejorando cada vez mas.. att: mona o alexa",
          "pros": null,
          "contras": null,
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Hernan Garzon Gutierrez",
        "slug": "hernan-garzon-gutierrez",
        "resenas": 53,
        "calidad": "buena",
        "calificacion": 4.37,
        "notaPromedio": 4.32,
        "resenasOcultas": 52,
        "resena": {
          "texto": "Tratare de ser objetivo, por mi parte es buen profesor, y estos son mis argumentos que son los siguientes: - Entrega todo el programa desde el principio de manera organizada (temas que veremos, fechas de los parciales, que notas sacará, la duración de cada tema aproximadamente, su correo, etc). - Deja tareas para estudiar por nuestra cuenta (que sirve bastante) - Deja talleres, aunque no los califica, sirven mucho para los parciales (hay veces que los ejercicios de los talleres están en los parciales) - Los parciales los califica la siguiente clase (nos dice cuales son las respuestas…",
          "pros": "- Califica el procedimiento y si argumentas de buena manera, te puede subir la nota (si ve el profe que si las cosas están bien hechas, sino, no intentes explicar de más) - A ratos hace chistes para entretener la clase…",
          "contras": "- Llega tarde (aprox: 15 min). - La mayoría de las veces sus notas solo son 3 parciales que valen lo mismo, asi que no hay que confiarse demasiado.",
          "periodo": "2026-1",
          "calificacion": 4.4,
          "dificultad": 3.6
        }
      },
      {
        "nombre": "Harold Andrés Jiménez Rubio",
        "slug": "harold-andres-jimenez-rubio",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.36,
        "notaPromedio": 4.01,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Muy buen profesor, explica cuantas veces y de la manera que haga falta para que uno entienda, colabora con puntos para los parciales, comparte todas las notas que toma en clase, no suele hacer demostraciones que no sean tan importantes, en general es facil aprender a derivar con el",
          "pros": "Comparte buenos apuntes Hace muchos ejemplos Ayuda con puntos extra y responde ciertas preguntas en los parciales Es puntual y organizado Se nota que le gusta lo que enseña",
          "contras": "Ninguno importante, si estudia un poco la puede dejar alta, teniendo en cuenta que es un calculo",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 3
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
        "nombre": "Jenny Alejandra Pabon Cadavid",
        "slug": "jenny-alejandra-pabon-cadavid",
        "resenas": 21,
        "calidad": "buena",
        "calificacion": 4.33,
        "notaPromedio": 3.56,
        "resenasOcultas": 20,
        "resena": {
          "texto": "Es una buena profesora, explica de forma que realmente uno entiende la materia. Deja buen material y ejercicios para estudiar así que usted puede aprender solo los temas que no entendió en clase. Sin embargo por más que usted estudie es muy probable que pase raspando, no tiene mesura con la dificultad y extensión de los parciales. Cuando las preguntas son manejables son demasiadas y cuando son pocas preguntas es tan complejo que es imposible hacer algo. La verdad la materia fue un completo infierno por la exigencia de la calificación.",
          "pros": "Si a usted le interesa aprender cálculo más allá de la nota, es una excelente profesora, le va a exigir y le va a dar herramientas.",
          "contras": "Da clase como si todos los estudiantes fueran de matemática o carreras con niveles en general muy altos de cálculo. Si usted va a ver la materia por verla, pasarla y ya, no le interesa realmente ser bueno en cálculo…",
          "periodo": "2021-10 (virtual)",
          "calificacion": 3.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Luis Alejandro Cifuentes Espitia",
        "slug": "luis-alejandro-cifuentes-espitia",
        "resenas": 9,
        "calidad": "regular",
        "calificacion": 4.33,
        "notaPromedio": 3.61,
        "resenasOcultas": 8,
        "resena": {
          "texto": "La verdad no entiendo como este profe tiene malas calificaciones, es super bueno, explica claro los temas, responde todas las preguntas de buena manera es super amable y comprensivo, se aprende mucho y la materia se puede dejar alta.",
          "pros": "Explica bien y hace que los temas sean faciles. Es amable y comprensivo. Es facil dejar la nota alta y se aprende lo necesario",
          "contras": "Es impuntual xd pero el dia del parcial si llegaba temprano asi que relajados, de resto nada, el man es perfecto",
          "periodo": "2021-10 (virtual)",
          "calificacion": 5,
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
        "nombre": "Andres Chacon Capera",
        "slug": "andres-chacon-capera",
        "resenas": 27,
        "calidad": "buena",
        "calificacion": 4.26,
        "notaPromedio": 3.74,
        "resenasOcultas": 26,
        "resena": {
          "texto": "Se nota su esfuerzo de enseñar y domina el tema, pero el 80% del aprendizaje será de forma autónoma, descuidar esta materia como primíparo es un grave error. Si tiene malas bases de matemáticas o no sabe la mayoría de los trucos con la trigonometría, no se ponga la soga al cuello y cometa mi error, mejor preparese para verla el otro semestre y no se tire el promedio en primer semestre y tener que volverla a ver.",
          "pros": "+ Hace sesión de dudas antes de parciales. + Permite contactarlo por correo. + Ayuda con sólo tomar 5 notas de los 8 quices que hace por semestre para la definitiva. + En la últimas sesiones introdujo las bases para…",
          "contras": "- Los quices o los hacía al inicio o al final de la clase. Tuve problemas ya que tenia la clase de cálculo entre otras dos materias y el salón quedaba lejos. - Pocos ejercicios en clase, la mayor parte se dedica a la…",
          "periodo": "2022-1",
          "calificacion": 3,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Hector Fabian Ramirez Ospina",
        "slug": "hector-fabian-ramirez-ospina",
        "resenas": 51,
        "calidad": "regular",
        "calificacion": 4.23,
        "notaPromedio": 3.86,
        "resenasOcultas": 50,
        "resena": {
          "texto": "Héctor es la cabra, las clases con el son pesadas pero explica bien, califica los parciales sobre 6, la clase antes del parcial se vota 1 o 2 ejercicios que van a salir en el parcial y a lo largo del semestre va diciendo que puntos salen, anotelos y los ejercicios del taller son muy díficiles busquen ejercicios parecidos a los de la clase en el taller para no perder el tiempo haciendo ejercicios jodidos que no salen",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Diana Andrea Toquica Arenas",
        "slug": "diana-andrea-toquica-arenas",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.23,
        "notaPromedio": 3.31,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Es muy buena profe, fue muy flexible con ese chikyparo, pero, hay que estudiarle para los parciales, si bien ella ayuda durante el semestre con trabajos que valen el 25% (recomiendo tratar de sacar 5 en esa parte) hay que ponerle mucha voluntad para los parciales ya que tienen un nivel medio, pero para el ultimo parcial ahi si estudie mucho porque no hay ayuda ahi, el resto es muy carismatica, amable (no se pase de confianza) y responde dudas",
          "pros": "Amable Responde dudas Fexible Brinda ayudas",
          "contras": "Hay veces en que no se entiende algo, pero lo mejor es preguntarle",
          "periodo": "2023-1",
          "calificacion": 4.5,
          "dificultad": 3.2
        }
      },
      {
        "nombre": "Zulima Ortiz Bayona",
        "slug": "zulima-ortiz-bayona",
        "resenas": 42,
        "calidad": "buena",
        "calificacion": 4.21,
        "notaPromedio": 3.9,
        "resenasOcultas": 41,
        "resena": {
          "texto": "Tiene un muy buen dominio de todos los temas, hace varios quiz que suelen o ser un poco largos o complicados pero es cuestión de estudiar y entender bien lo que explica. Enseña muy bien, es buena profesora pero ver con ella una materia es dedicarse mucho a entender bien las cosas. Deja talleres que sirven mucho para estudiar y no los revisa.",
          "pros": "Buena gente amable sabe mucho",
          "contras": "hay que estudiar mucho si quiere dejarla alta",
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 4.4
        }
      },
      {
        "nombre": "José Luis Guevara Rodríguez",
        "slug": "jose-luis-guevara-rodriguez",
        "resenas": 41,
        "calidad": "buena",
        "calificacion": 4.2,
        "notaPromedio": 4.38,
        "resenasOcultas": 40,
        "resena": {
          "texto": "Es un excelente docente que se le nota la pasión por enseñar y transmitir su conocimiento a los estudiantes, las actividades propuestas son dinámicas y en general aplicadas a la parte práctica de las carreras. Los parciales salen de las mismas tareas de clase que están en las diapositivas, que son siempre una cantidad considerable lo cual es suficiente para salir bien preparados.",
          "pros": "Las diapositivas Ejemplos aplicados a la vida real Siempre dispuesto a resolver dudas",
          "contras": "Las clases son en el auditorio, por lo que a veces se dificulta observar la pantalla o realizar alguna pregunta",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Francisco Albeiro Gomez Jaramillo",
        "slug": "francisco-albeiro-gomez-jaramillo",
        "resenas": 19,
        "calidad": "buena",
        "calificacion": 4.17,
        "notaPromedio": 4.35,
        "resenasOcultas": 18,
        "resena": {
          "texto": "Si hay algo que destacar de Francisco es que disfruta mucho enseñando este curso, y lo demuestra. La metodología es sencilla: las clases son teóricas y los entregables son tareas relacionadas a las temáticas del curso, junto con un proyecto (en grupo). Todo el semestre consiste en aprender sobre Machine Learning desde un enfoque matemático, y el profesor se esfuerza por hacerlo de manera interesante y consistente, conectando el conocimiento teórico con sus aplicaciones prácticas en la vida real.",
          "pros": "Tiene explicaciones interesantes y divertidas Flexible con las entregas",
          "contras": "Ligeramente impuntual Puede desaparecer a veces",
          "periodo": "2026-1",
          "calificacion": 4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Oscar Javier Lopez Alfonso",
        "slug": "oscar-javier-lopez-alfonso",
        "resenas": 7,
        "calidad": "regular",
        "calificacion": 4.17,
        "notaPromedio": 3.93,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Hay algunas cosas que se entienden, otras que no, hay que aprender matlab hace unos mini-talleres que son faciles, quizes que tienen mucha mas dificultas y los parciales son algo complicados, no si usted entendio bien los anteriores talleres y quizes, el segundo parcial puede ser un curso de cursera",
          "pros": "-Segundo parcial",
          "contras": "-Quizes complicados -Es muy egocentrico",
          "periodo": "2023-1",
          "calificacion": 3.4,
          "dificultad": 4
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
        "nombre": "Daniel Nuñez Alarcón",
        "slug": "daniel-nuñez-alarcón",
        "resenas": 74,
        "calidad": "buena",
        "calificacion": 4.03,
        "notaPromedio": 3.82,
        "resenasOcultas": 73,
        "resena": null
      },
      {
        "nombre": "German Eduardo Fonseca Buitrago",
        "slug": "german-eduardo-fonseca-buitrago",
        "resenas": 45,
        "calidad": "buena",
        "calificacion": 4.03,
        "notaPromedio": 3.87,
        "resenasOcultas": 44,
        "resena": {
          "texto": "Personalmente considero que aprobar con este profesor depende del mismo estudiante, ya que realmente la mayoría de sus clases son bastante teóricas y en ocasiones va muy rápido, lo que no permite comprender en principio los conceptos y tampoco ponerlos en práctica, hubieron bastantes clases donde en la teoría no entendía muy bien y me tocaba recurrir a estudiar el tema de cero por mi cuenta. Pero el deja unos talleres para practicar lo que se ve en clase, y siendo sincero si uno los hace a conciencia y con tiempo, aprobar el parcial no va ser complicado, ya que el contenido de los talleres es…",
          "pros": "Quices en pareja Ejercicios de los parciales en los talleres",
          "contras": "Clases largas y aburridas",
          "periodo": "2025-1",
          "calificacion": 4.3,
          "dificultad": 4
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
        "nombre": "German Preciado Lopez",
        "slug": "german-preciado-lopez",
        "resenas": 41,
        "calidad": "regular",
        "calificacion": 3.91,
        "notaPromedio": 3.83,
        "resenasOcultas": 40,
        "resena": {
          "texto": "Es un gran profesor, Explica muy bien, da una clase chevere y es muy buena gente, por lo menos a nosotros como dejo el primer parcial durísimo dijo que la nota del segundo parcial la remplazaba y de resto de parciales fueron mas faciles a comparacion y hagan los ejercicio sugeridos, eso es todo con este profesor",
          "pros": "se deja hablar si sustenta un punto que no le valió en el parcial le sube la nota ud aprende si o si",
          "contras": "molesta por la puntualidad en los parciales uno piensa que no toma asistencia, pero el siempre se acuerda de uno y si ve que alguien falta muchisimo, se la tira por fallas",
          "periodo": "2026-1",
          "calificacion": 5,
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
        "nombre": "Sergio Andres Tamayo López",
        "slug": "sergio-andres-tamayo-lopez",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 3.85,
        "notaPromedio": 3.6,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Es un joven, en si es bueno, siempre tiene buena actitud a la hora de dictar, a veces se confundia solo. Para los parciales daba puntos por pasar al tablero a reolver ejercicios, o tmabien daba bonos, los puntos los sacaba de talleres que el deja, no son talleres complicados ni largos, si hace los talleres ya tiene casi que todo el parcial resuelto, a veces dejaba hacer de a dos. El tema es que en este semestre a cada rato cambiaba los porcentajes, este semestre lo hizo como 4 veces, como es la primera vez siendo profesor se dejaba afectar un poco por los resultados de los parciales, entonces…",
          "pros": "Buena gente Da bonos y puntos Parciales que salen de los talleres A veces dejaba sacar apuntes y de a dos",
          "contras": "Cambiaba los porcentajes a cada rato y tenia un poco de preferencia a la hora de calificar",
          "periodo": "2026-1",
          "calificacion": 3.5,
          "dificultad": 4
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
        "nombre": "Claudio Rodriguez Beltran",
        "slug": "claudio-rodriguez-beltran",
        "resenas": 35,
        "calidad": "regular",
        "calificacion": 3.79,
        "notaPromedio": 3.78,
        "resenasOcultas": 34,
        "resena": {
          "texto": "Claudio es un profesor apasionado por la materia e intenta transmitir esa pasión al dictar. Hizo 3 quizzes (Creo que no hizo más por el paro) y daba tiempo para que quedaran altos. Cualquier duda que tuve la soluciono en un horario en el que uno pueda ir a la oficina a solucionar las dudas. La critica que puedo hacer es en los parciales, que son largos y pueden ser temas no del todo vistos.",
          "pros": "-Se detiene a prestar atención en cada estudiante -Esta disponible siempre en el horario para dudas. -Apasionado",
          "contras": "-En los parciales da duro -Se demora más de lo debido en los temas",
          "periodo": "2024-1",
          "calificacion": 4.8,
          "dificultad": 3.4
        }
      },
      {
        "nombre": "Christian David Sarmiento Santiago",
        "slug": "christian-david-sarmiento-santiago",
        "resenas": 6,
        "calidad": "regular",
        "calificacion": 3.75,
        "notaPromedio": 3.6,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Es uno de los mejores profesores de matematicas que he tenido. Fue muy comprensivo con el paro y dio algunos bonos, es una persona muy carismatica y siempre llega con buena actitud a cada clase, es estricto y le disgusta perder clase pero teniendo en cuenta lo que sucedio en el 2024-1 creo que al contrario fue muy paciente y entendio perfectamente la situacion de algunos de sus estudiantes. Tengo entendido que no volvera a dictar :(.",
          "pros": "Muy organizado Parciales no muy dificiles Muy amable Resuelve cualquier duda Gran actitud Explica muy bien pero un poco rapido",
          "contras": "No se si considerarlo una contra pero con este profesor es fundamental ir a todas sus clases, en cada clase habla de absolutamente todo sobre el tema que se este viendo y es muy facil perderse.",
          "periodo": "2024-1",
          "calificacion": 4.5,
          "dificultad": 4
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
        "nombre": "Sandra Carolina Garcia Martinez",
        "slug": "sandra-carolina-garcia-martinez",
        "resenas": 55,
        "calidad": "regular",
        "calificacion": 3.65,
        "notaPromedio": 3.32,
        "resenasOcultas": 54,
        "resena": {
          "texto": "No me gusta su forma de enseñanza, no es muy didactica que digamos, siento que le falta aún más experiencia en la pedagogía.",
          "pros": "Deja ejercicios para coseguir puntos extra",
          "contras": "Falta pedagogía",
          "periodo": "2026-1",
          "calificacion": 3.3,
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
        "nombre": "César Orlando Rincón Guerrero",
        "slug": "cesar-orlando-rincon-guerrero",
        "resenas": 19,
        "calidad": "regular",
        "calificacion": 3.48,
        "notaPromedio": 3.33,
        "resenasOcultas": 18,
        "resena": {
          "texto": "Es buen profesor, tiene un muy buen carisma y explica todo bien en clase. Además le da el libro que usa para todo el curso como material de estudio a los estudiantes y de ahi saca los parciales. Suele dar bonos durante la clase. Si no estudia no va a pasar la materia, cosa que se entiende porque da materias de 4 creditos como integral o multivariado.",
          "pros": "Buen carisma explica bien responde cualquier duda hasta que usted entienda",
          "contras": "le gusta demostrar los teoremas pero esto no lo pregunta durante los parciales",
          "periodo": "2026-2",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Jhon Cristian Mina Ladino",
        "slug": "jhon-cristian-mina-ladino",
        "resenas": 18,
        "calidad": "regular",
        "calificacion": 3.48,
        "notaPromedio": 4.21,
        "resenasOcultas": 17,
        "resena": {
          "texto": "Qué más, gente. Les cuento mi opinión del man. Es espectacular y sabe demasiado de matemáticas. Siempre busca cómo aplicar todo a la vida real y no solo números en el tablero. Además, es muy abierto a que usemos la IA como herramienta, lo cual se agradece. Algo que me pareció brutal fue que hizo un parcial personalizado para cada uno según su carrera, con SOLUCION, el man es muy inteligente. Eso sí, lo malo es que a veces cancela sin avisar mucho o llega tarde, y la verdad eso es lo único feo porque toca estar pendiente o pierde uno el tiempo esperando. Pero bueno, fuera de eso, el man es un…",
          "pros": "Sabe demasiado de matemáticas, es un duro en el tema. Siempre explica cómo aplicar lo que vemos en la vida real, no se queda en lo teórico. Es súper abierto a que usemos IA como herramienta, eso es un plus. Hizo un…",
          "contras": "A veces cancela clase sin avisar con tiempo o simplemente llega tarde, y toca esperar como un bobo.",
          "periodo": "2026-1",
          "calificacion": 4,
          "dificultad": 4
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
        "nombre": "Epifanio Lozano Ayala",
        "slug": "epifanio-lozano-ayala",
        "resenas": 70,
        "calidad": "regular",
        "calificacion": 3.27,
        "notaPromedio": 3.04,
        "resenasOcultas": 69,
        "resena": {
          "texto": "Seamos lo más objetivos posibles. El hombre explica muy bien y sabe bastante de lo que enseña. Pero hasta ahí quedó lo bueno. Epifanio califica DURISIMO. No hace ni talleres ni da puntos por nada ni actividades ni NADA aparte de 4 parciales que se hacen durante el semestre. Si a usted Epifanio le vale un punto en un parcial es porque ese punto esta perfectamente resuelto con el método que él mostró en clase, cualquier errorcito pequeño, por más que usted entienda la teoría y el error sea de sumar dos posiciones en una operación de filas en una matriz, pues se fregó, tome su cero porque solo…",
          "pros": "Explica bien Sabe de lo que enseña y no es mediocre. Sus stickers de whatssap con lo que respondía por correo se le coge la gracia fácil jajajaja.",
          "contras": "Califica DURISIMO. Craso error faltarle a clases. Se le brota el mal genio de manera evidente si hace cualquier cosa que le disguste. El riesgo de tener notas muy bajas con él es gigante.",
          "periodo": "2026-1",
          "calificacion": 2.4,
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
        "nombre": "Edward Samuel Becerra Rojas",
        "slug": "edward-samuel-becerra-rojas",
        "resenas": 54,
        "calidad": "regular",
        "calificacion": 3.27,
        "notaPromedio": 3.13,
        "resenasOcultas": 53,
        "resena": {
          "texto": "el ego de este señor es horrible, pareciera que no se va a morir nunca, como si flotara, se supone que un profesor es transformador de vidas, no entiendo como a este señor lo dejan postularse a decano jaja, qué chiste esto, tengo información de la mano de sus mismos colegas que dicen que este señor es horrible, no inscriba con él, no debería enseñar, si pudiera le pondría una nota negativa -5 por ejemplo, hasta se nota que él mismo es quien responde los comentarios a estas reviews jaja",
          "pros": "ninguno",
          "contras": "todo",
          "periodo": "2026-2",
          "calificacion": 1.5,
          "dificultad": 5
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
        "nombre": "Arcenio Pecha Castiblanco",
        "slug": "arcenio-pecha-castiblanco",
        "resenas": 56,
        "calidad": "regular",
        "calificacion": 3.23,
        "notaPromedio": 3.21,
        "resenasOcultas": 55,
        "resena": {
          "texto": "Es como si Arthur Morgan hubiera estudiado economía y se hubiera criado en el plano cundiboyacense. Este profesor es lo mejor que pudo darme clase durante mi tiempo en la Nacional, no estoy bromeando con esto último. Actualmente estudio en España pero es el único profesor del cual me acuerdo gratamente, valórenlo mientras pueden (Este mensaje lo estoy redactando en 2026, a pesar de que tuve clase con él hace 3 años). Cuando terminé de ver clases con él, salí con el objetivo de que si algún día tenía la oportunidad de enseñar como profesor en una universidad, voy a querer hacerlo como Pecha,…",
          "pros": "Se aprende demasiado, con profundidad y a un ritmo cómodo. Si asisten a clase con disciplina, mostrando dudas, interés, el profesor les trata con el mismo interés que ustedes muestran.",
          "contras": "Si muestran desinterés por la clase o no asisten a clase con disciplina, el maestro les trata con el mismo desinterés que demuestran.",
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Andres Villaveces Niño",
        "slug": "andres-villaveces-niño",
        "resenas": 36,
        "calidad": "regular",
        "calificacion": 3.21,
        "notaPromedio": 4.25,
        "resenasOcultas": 35,
        "resena": {
          "texto": "Regala los cursos eso no es bueno regalar tanto como regala villaveces si quiere que le regalen conjuntos vean con el",
          "pros": "Regala",
          "contras": "Que la gente no se de cuenta de que regala",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Hernando Gaitan Orjuela",
        "slug": "hernando-gaitan-orjuela",
        "resenas": 31,
        "calidad": "regular",
        "calificacion": 3.2,
        "notaPromedio": 3.91,
        "resenasOcultas": 30,
        "resena": {
          "texto": "El profe es muy amable, y se nota que aun quiere enseñar, pero la gente joven que ve esta materia en sus primeros semestres no tiene la mejor retentiva del mundo, y la clase se puede hacer aburrida, pero, con estudio autónomo suficiente, sus parciales abarcan todos los temas, y no son tan difíciles",
          "pros": "Amable, si llegas repasado, te puede aclarar dudas sus examenes si son acorde al temario \"BUSCA LENGUAJE MATEMATICO\" puede llegar a haber terminos que conozcas en practica pero no en nombre y eso confunde feo",
          "contras": "esta mayor para el tipo de estudiante que hay en algebra la materia puede ser aburrida, mas si no tienes conexion con el profe",
          "periodo": "2025-1",
          "calificacion": 3.2,
          "dificultad": 3
        }
      },
      {
        "nombre": "John Alexander Cruz Morales",
        "slug": "john-alexander-cruz-morales",
        "resenas": 31,
        "calidad": "regular",
        "calificacion": 3.17,
        "notaPromedio": 3.47,
        "resenasOcultas": 30,
        "resena": {
          "texto": "De verdad no se hagan el mal de ver con este man, muy mal docente, parciales muy jodidos y un egocéntrico a morir.",
          "pros": null,
          "contras": null,
          "periodo": "2026-2",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Leonardo Arturo Cano Garcia",
        "slug": "leonardo-arturo-cano-garcia",
        "resenas": 9,
        "calidad": "regular",
        "calificacion": 3.16,
        "notaPromedio": 3.33,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Es matematico. Yo creo que esa es la diferencia fundamental de este profesor con los otros profesores de calculo para no matematicos. La verdad no se que hace dictando a no matematicos pero bueno. La verdad este profesor es para el que le gustan las matematicas, no es facil entenderle pero si uno no esta completamente perdido es chevere porque va mas a profundidad no solo a aprenderse las formulas para el parcial. No diria que su pedadogia sea la mejor, yo creo que la mitad del curso no entendia y el seguia adelante con los que entendieron, y no es muy organizado y a veces la letra no se le…",
          "pros": "Es matematico Es apasionado por las matematicas Los chistes Les gusta ser riguroso a veces Los chistes x2 Uno no se aburre",
          "contras": "Es matematico Tal vez a veces regaña un poco duro si siente que es por falta de atención? veces escribe matematicamente y nadie entiende xd Escribe feo Algo desorganizado No se preocupa por que todo el curso entienda…",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Pedro Hernan Zambrano Ramirez",
        "slug": "pedro-hernan-zambrano-ramirez",
        "resenas": 36,
        "calidad": "mala",
        "calificacion": 3.06,
        "notaPromedio": 2.98,
        "resenasOcultas": 34,
        "resena": {
          "texto": "zambrano es un amor , y todo lo que hace es para ayudarle a que se pueda convertir en un profesional , pero las nuevas generaciones que no saben lo que es esforzarse lo tildan de profesor canson que le quita puntos por lo que sea , pero tengamos en cuenta que si usted calcula mal una norma en algebra lineal se le puede caer el puente ( si hablo de todos esos ingenieros que vieron lineal con el) , toca entender que zambrano simplemente esta cumpliendo con su labor como docente por eso hace los porcentajes justos y califica corrigiendo sus errores",
          "pros": "un profesor digno de la universidad califica como es para la mejor universidad del pais",
          "contras": "los llorones que se la pasan quejandose",
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 2.8
        }
      },
      {
        "nombre": "Miguel angel Colmenares",
        "slug": "miguel-angel-colmenares",
        "resenas": 4,
        "calidad": "mala",
        "calificacion": 3.02,
        "notaPromedio": 4.15,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Es un profe bastante chevre, el profe regalo bastantes cosas en el curso, hizo el último parcial virtual, hizo bastantes talleres y lo que estudiamos en clase es lo del parcial, aunque el mismo aceptó que regalo mucho el curso, a tal punto que nadie perdió. Dijo que las próximas veces no iba a ser tan regalado entinces ojo con eso. De resto es muy bien y da buenas clases, lo unico medio malo es que para aplicaciones nos puso a presentar, por lo tanto nadie le puso cuidado a nadie.",
          "pros": "Buenas explicaciones Parchao Da muchos puntos extras",
          "contras": "Realmente ninguno",
          "periodo": "2026-2",
          "calificacion": 3.5,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Brayan Stiven Cabra Ramirez",
        "slug": "brayan-stiven-cabra-ramirez",
        "resenas": 28,
        "calidad": "mala",
        "calificacion": 2.91,
        "notaPromedio": 3.62,
        "resenasOcultas": 27,
        "resena": {
          "texto": "pesimo, el señor solo repite el Stewart, los parciales no tenían nada que ver con los talleres que no es claro cuales hay que entregar y cuales no, nunca responde el correo y los ejemplos que da son muy sencillos, llega tarde a clase y en las clases no se veia nada en el tablero que usaba, con los talleres que deja, se puede subir la nota pero es de trabajo autonomo",
          "pros": "-Si uno dice DENTRO DE LA CLASE cuadra una sesión de ejercicios (pero es maluca y la mayoría de ejercicios no los resolvía solo medio los planteaba \"y eso uds ya lo saben entonces lo hacen en casa\"",
          "contras": "-Impuntual -No dio notas, si no hasta el final -No contesta los correos -Solo repite el libro -No sabe explicar",
          "periodo": "2020-10 (virtual)",
          "calificacion": 2,
          "dificultad": 2.9
        }
      },
      {
        "nombre": "Gustavo Nevardo Rubiano Ortegon",
        "slug": "gustavo-nevardo-rubiano-ortegon",
        "resenas": 18,
        "calidad": "regular",
        "calificacion": 2.89,
        "notaPromedio": 3.44,
        "resenasOcultas": 17,
        "resena": {
          "texto": "Un profesor que denota amor para enseñar, en la explicación utiliza material visual y herramientas que facilitan la enseñanza, además de que se le nota por los años de experiencia y estudio que conoce muchísimo del tema",
          "pros": "Un 10/10, chimba de profesor",
          "contras": "Un poco temperamental pero no afecta en nada :v Q se jubila",
          "periodo": "2022-1",
          "calificacion": 5,
          "dificultad": 3.9
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
        "nombre": "Diego Gerardo Roldan Jimenez",
        "slug": "diego-gerardo-roldan-jimenez",
        "resenas": 14,
        "calidad": "regular",
        "calificacion": 2.86,
        "notaPromedio": 3.36,
        "resenasOcultas": 13,
        "resena": {
          "texto": "Es un profesor amable y da puntos por participar. Pero, su metodología de enseñanza no creo que sea la más idónea, ya que pasa diapositivas basadas (copiadas casi en su totalidad del libro guía) y llega a explicar cosas de forma superficial en ocasiones. Sus parciales suelen traer demostraciones y muchos ejercicios lo cual, aunque facilite pasar es mucho más laborioso, siendo que suele hacer 3 parciales (cada uno 25%) y el restante solo quices semanales. Si alguien tiene alguna duda se toma su tiempo en responder.",
          "pros": "Se deja alta la nota si se esfuerza, amable y resuelve dudas. Suele dejar ejercicios prácticos en clase (naturalmente rápidos)",
          "contras": "Su enseñanza llega a ser muy tosca y en ocasiones muy superficial.",
          "periodo": "2026-2",
          "calificacion": 3.9,
          "dificultad": 3.7
        }
      },
      {
        "nombre": "Juan Andres Montoya Arguello",
        "slug": "juan-andres-montoya-arguello",
        "resenas": 39,
        "calidad": "regular",
        "calificacion": 2.82,
        "notaPromedio": 4.16,
        "resenasOcultas": 37,
        "resena": {
          "texto": "En ninguna de las clases con él logre entender el tema de calculo diferencial con este profesor. Pareciera que no estuviera presente en el salon cuando explica el calculo diferencial, o mete a alguien externo irrelevante al tema. Bastante confuso. Lo mas dificil fue el ultimo parcial que nos dejo, un cosa extremadamente dificil, nada de lo que se miro en tema pude haber estudiado para este parcial.",
          "pros": "Si lo logra tener como reemplazo a su profesor orignial de calculo diferencial, el ultimo parcial no afecta su promedio mucho. Si logra tener como reemplazo a su profesor original de calculo diferencial, y va perdiendo…",
          "contras": "Parciales Extremadamente dificiles. Desconexion con el salon.",
          "periodo": "2025-2",
          "calificacion": 1.6,
          "dificultad": 4.7
        }
      },
      {
        "nombre": "Efrain Camilo Pardo Garcia",
        "slug": "efrain-camilo-pardo-garcia",
        "resenas": 39,
        "calidad": "mala",
        "calificacion": 2.78,
        "notaPromedio": 4.18,
        "resenasOcultas": 38,
        "resena": {
          "texto": "No lo haga compa, es demasiado incompetente para impartir una asignatura de la ni siquiera es capaz de resolver sus propios ejercicios",
          "pros": "De verdad jaja es muy malo, no lo haga compa",
          "contras": "Todo mal",
          "periodo": "2021-10 (virtual)",
          "calificacion": 1.5,
          "dificultad": 1.5
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
        "nombre": "Franqui Solis Cardenas Poloche",
        "slug": "franqui-solis-cardenas-poloche",
        "resenas": 48,
        "calidad": "mala",
        "calificacion": 2.74,
        "notaPromedio": 3.84,
        "resenasOcultas": 47,
        "resena": {
          "texto": "Diría que es un profe un poco agridulce. Sus clases son prácticamente el explicando un poco de teoría y después haciendo varios ejercicios al respecto aunque realmente uno no puede asimilar lo que dijo ya que da muy poco tiempo porque el cambia de tema muy rápido, es alguien bastante apurado. Además sus explicaciones son super básicas y aburridas, uno se siente incompleto así que la autonomía es importante. Respecto a las calificaciones son 3 parciales, cada uno del 25% y quices y talleres de 25%,ademas un supletorio opcional. Los parciales son 4 puntos y 1 de ellos salen de algún quiz o…",
          "pros": "Se deja hablar(a veces) Talleres y quices fáciles, se pueden en grupo A veces se puede hacer trampa Es bastante flexible con las entregas de los quices/talleres y con la realización de los parciales Responde preguntas…",
          "contras": "Parciales jodidos Clases aburridas Toma asistencia cuando ve poca gente este semestre todos los parciales fueron de preguntas abiertas",
          "periodo": "2025-2",
          "calificacion": 3,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Manuel Jair Medina Luna",
        "slug": "manuel-jair-medina-luna",
        "resenas": 24,
        "calidad": "mala",
        "calificacion": 2.73,
        "notaPromedio": 3.4,
        "resenasOcultas": 23,
        "resena": {
          "texto": "Con este profesor se necesita mucho estudio autonomo, puesto que en las clases solo lee pantallazos del Stewart y hace uno que otro ejercicio, sin embargo los ejercicios que realiza son muy sencillos para los talleres de mas de 100 puntos que deja, sin embargo, en los parciales nunca aparecera un solo ejercicio de esos 100, ni siquiera parecidos.",
          "pros": "-Si le gusta el estudio autonomo, este es su profe. -Los talleres y quices ayudan bastante en la nota. -Es facil de pasar si trabaja mucho",
          "contras": "No se le da bien la pedagogia. Tiende a cancelar las clases o hacerlas virtuales con poco tiempo de antelacion. Nunca contesta correos y menos en persona porque siempre esta corriendo",
          "periodo": "2021-10 (virtual)",
          "calificacion": 2,
          "dificultad": 3
        }
      },
      {
        "nombre": "Edixon Manuel Rojas Santana",
        "slug": "edixon-manuel-rojas-santana",
        "resenas": 36,
        "calidad": "mala",
        "calificacion": 2.72,
        "notaPromedio": 2.97,
        "resenasOcultas": 35,
        "resena": {
          "texto": "edixon es un completo hp es una basura como persona y trata a todos como basura no es capaz de entender que un estudiante puede tener dudas o no comprender algo , tira durisimo en los parciales y es un lloron porque le quitaron su curso de cedo . Ademas es un veneco hp y habia un malparido de matematicas que tambien es veneco y se la pasaba chupandole la verga el hp ese y por eso pasaba la materia",
          "pros": "sabe los temas",
          "contras": "ser una basura de ser humano ser un hijueputa su favoritismo por ese matematico chupavergas veneco",
          "periodo": "2026-1",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "David Stivens Siervo",
        "slug": "david-stivens-siervo",
        "resenas": 3,
        "calidad": "mala",
        "calificacion": 2.67,
        "notaPromedio": 2.6,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Es una materia complicada. Responde a todas las dudas que se tengan. Hay que tener claras las nociones de calculo diferencial y algebra lineal para sobrellevar bien la materia con él. Los parciales son difíciles. Mi critica principal es que los ejercicios en clase son relativamente sencillos y el parcial si es bien complicado. Creo que también lo hacia porque la mayoría del curso no le llevábamos el ritmo. Una que otra explicación no era clara, pero lo clave fue completamente claro y era lo que mas preguntaba en los parciales. Siempre que se le preguntaba respondía hasta que se entendiera y…",
          "pros": "Atento a responder dudas de la clase Avisa cuando va un poco tarde Apuntes en el tablero Notas de los parciales aprox 8-10 dias después",
          "contras": "Ejercicios muy sencillos en la explicación sin ahondar en más difíciles tipo parcial A veces se pierde en las explicaciones Parciales difíciles",
          "periodo": "2024-1",
          "calificacion": 4,
          "dificultad": 4.4
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
        "nombre": "Mohammed El Aidi",
        "slug": "mohammed-el-aidi",
        "resenas": 46,
        "calidad": "mala",
        "calificacion": 2.59,
        "notaPromedio": 2.97,
        "resenasOcultas": 45,
        "resena": {
          "texto": "Sobrehateado, no sé como habrá sido en el pasado, pero por lo menos en los últimos dos semestres se nota que ha hecho cosas por mejorar la forma en la que da su clase, (él mismo dijo que tomaba los consejos que se ponian en la evaluacion docente). Ahora bien, el profesor Mohammed no es ni de lejos el mejor profesor con el que he tenido clase, pero igual de lejos está de ser el peor. La clase y la calificación es bastante simple, tres parciales y los quices que haga, tambien de vez en cuando un taller para reforzar temas de parcial. En cuanto a la dificultad, yo diría que el 90% de los puntos…",
          "pros": "-Da material de semestres pasados -Es amable si se la lleva bien con el -Soluciona cualquier duda, sabe mucho de la materia y de matematicas en general. - Le ayuda si ve que usted se esta esforzando aunque le haya ido…",
          "contras": "-Se enoja bastante si sacan celulares en clase - No tolera que alguien llegue despues de la llamada a lista (20 o 30min despues de iniciada la clase) -No recomendado si no está acostumbrado a estudiar autonomamente,…",
          "periodo": "2026-1",
          "calificacion": 3.6,
          "dificultad": 3.4
        }
      },
      {
        "nombre": "Agustin Moreno Canadas",
        "slug": "agustin-moreno-canadas",
        "resenas": 37,
        "calidad": "mala",
        "calificacion": 2.56,
        "notaPromedio": 3.36,
        "resenasOcultas": 35,
        "resena": {
          "texto": "Diria que luego de haber visto diferencial con el , el patrón se repite como docente un completo mediocre habla de cosas que poco tienen que ver con el curso y conceptos en parciales que jamás había mencionado en clase pero el tipo no deja de ser simplemente un mediocre que hace muchos speedruns que no especifica los temas y que al final arregla el curso para que todos pasen, no se aprende demasiado pero es una manera fácil de aprobar fundamentos . Incluso di mi opinión en el pasado en diferencial sobre como fue el curso y tuvo exactamente los mismos problemas un mediocre pero al final todos…",
          "pros": "se pasa siempre viene formal",
          "contras": "mediocre speedruns ser agustin x2",
          "periodo": "2026-1",
          "calificacion": 1.9,
          "dificultad": 2.4
        }
      },
      {
        "nombre": "Mauricio Lopez Hernandez",
        "slug": "mauricio-lopez-hernandez",
        "resenas": 26,
        "calidad": "mala",
        "calificacion": 2.46,
        "notaPromedio": 3.5,
        "resenasOcultas": 25,
        "resena": {
          "texto": "el profesor es terrible, no tiene pedagogia, califica duro y es tosco al responder las dudas. Los parciales son virtuales pero duros, no se dejan muy altos ni siquiera con IA, el man no se deja hablar y la clase no es para nada agradable.",
          "pros": "parciales virtuales",
          "contras": "parciales virtuales pero jodidos JAJAJA califica duro no se deja tan alta",
          "periodo": "2026-1",
          "calificacion": 1.6,
          "dificultad": 4.7
        }
      },
      {
        "nombre": "Ivan Castro Chadid",
        "slug": "ivan-castro-chadid",
        "resenas": 55,
        "calidad": "mala",
        "calificacion": 2.44,
        "notaPromedio": 3.63,
        "resenasOcultas": 54,
        "resena": {
          "texto": "No sé cómo llegó a ser profesor, pareciera que se fuera a quedar dormido en medio de la explicación, y pareciera que ni siquiera pudiera resolver los problemas que explica. Todas las fórmulas que escribe en el tablero, las usará en los parciales, entonces es pasable si después de cada clase estudia lo que vio en clase y hace varios ejercicios por su cuenta, pero a Chadid como tal no se le entiende nada.",
          "pros": "Se puede pasar si estudia autónomamente Deja tomar fotos del tablero",
          "contras": "No se le entiende nada Requiere MUCHO estudio autónomo A veces desperdicia hasta una hora de clase hablando cháchara",
          "periodo": "2025-2",
          "calificacion": 2.1,
          "dificultad": 4
        }
      },
      {
        "nombre": "Myriam Leonor Campos Florez",
        "slug": "myriam-leonor-campos-florez",
        "resenas": 48,
        "calidad": "mala",
        "calificacion": 2.06,
        "notaPromedio": 3.04,
        "resenasOcultas": 47,
        "resena": {
          "texto": "Ella es como una abuelita adorable que regala los cursos es tan adorable y amable con todos nosotros . Explica todos los temas hace parciales y quices justos , no tengo quejas de una profesora tan amorosa me recuerda a mi abuelita",
          "pros": "Es como una abuelita buena gente solo le faltaba llamarnos mijitos",
          "contras": "nada , es super adorable",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2.3
        }
      },
      {
        "nombre": "Yiby Karolina Morales Pinto",
        "slug": "yiby-karolina-morales-pinto",
        "resenas": 17,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 16,
        "resena": {
          "texto": "un ser de luz, la amo",
          "pros": "se preocupa por estudiante parciales trabajables",
          "contras": "ninguno",
          "periodo": "2018-20",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Camilo Andrés Rodríguez Rodríguez",
        "slug": "camilo-andrés-rodríguez-rodríguez",
        "resenas": 5,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Es el mejor profesor para inscribir cualquier matemática, es amable, explica muy bien, es como si hola soy Germán y Julio profe tuvieran un hijo, en resumen, es muy cool, da notas a tiempo, los parciales son de lo que se ha visto y está dispuesto a responder dudas. Hace que uno le tome cariño a la materia",
          "pros": "Llega a tiempo, es serio pero mantiene un muy buen ambiente de clase. Inspira a estudiar la materia, le hace tomar gusto",
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Christian Nolasco Serna",
        "slug": "christian-nolasco-serna",
        "resenas": 3,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 2,
        "resena": {
          "texto": "-",
          "pros": null,
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Jose Exequiel Fuentes Gil",
        "slug": "jose-exequiel-fuentes-gil",
        "resenas": 3,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Es una chimba de persona, algunos temas los explica muy por encima pero si se pone atención y se hace los talleres se pasa fácil, se organiza bien con el tiempo y se adaptó a la virtualidad super bien",
          "pros": "Divertido Joven Entusiasta Pone música mela antes de cada clase",
          "contras": "Hay que estudiarle bastante",
          "periodo": "2018-20",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Paul Harritson Villamil Hernandez",
        "slug": "paul-harritson-villamil-hernandez",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 2,
        "resena": null
      },
      {
        "nombre": "Jaime Andrés Gómez Ortiz",
        "slug": "jaime-andrés-gómez-ortiz",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "es un excelente profesor, explica muy bien, es atento, ayuda mucho en las tutorias y siempre se queda un poco mas en clases resolviendo dudas a quienes se queden, sus parciales son pasables si se estudia, sino fijo se pierde y es una persona chevere y sencilla",
          "pros": "enseña bien resuelve dudas es amable y paciente es divertido, amable y atento",
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Juan Gabriel Triana Laverde",
        "slug": "juan-gabriel-triana-laverde",
        "resenas": 2,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Juan Gabriel es un profesor pragmático y directo , le gusta explicar las cosas de la manera más sencilla posible y eso en Integral se le agradece bastante. Tiene muletillas muy chistosas y en general es muy buena gente y buen profesor. Sus talleres están muy bien realizados.",
          "pros": null,
          "contras": null,
          "periodo": "2015-20",
          "calificacion": 4.2,
          "dificultad": 2
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
        "nombre": "Arley Ramses Gomez Rios",
        "slug": "arley-ramses-gomez-rios",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Excelente profesor, explica muy bien y evalua lo que enseña, prepara muy bien sus clases, y trata de resolver todas las dudas que pueden surgir.",
          "pros": null,
          "contras": null,
          "periodo": "2016-20",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Miguel Angel Rippe Espinosa",
        "slug": "miguel-angel-rippe-espinosa",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "es muy buen profesor, sabe del tema y es amable contestando dudas sobre los temas.",
          "pros": "-es amable -es puntual -parciales trabajables",
          "contras": "ninguno",
          "periodo": "2020-10 (virtual)",
          "calificacion": 4.6,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Carolina Albarracin Hernandez",
        "slug": "carolina-albarracin-hernandez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Luis Alejandro Jimenez Espitia",
        "slug": "luis-alejandro-jimenez-espitia",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Sandra Marleny Perilla Monroy",
        "slug": "sandra-marleny-perilla-monroy",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "1000004": {
    "nombre": "Calculo Diferencial",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000004",
    "profesores": [
      {
        "nombre": "David Valderrama Hernandez",
        "slug": "david-valderrama-hernandez",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.74,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Explica muy bien, siempre aclara dudas y deja muchos talleres para que cada estudiante practique. Eso le ayudará bastante en sus parciales. También, saca varias notas y escoge las mejores, por lo que la materia se puede dejar alta.",
          "pros": "Buena explicación Saca varias notas Hace horarios de atención extra para aclarar dudas",
          "contras": "Ninguna",
          "periodo": "2020-20 (virtual)",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Daniel Camilo Arana Hernandez",
        "slug": "daniel-camilo-arana-hernandez",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.33,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Las reseñas completas están en el otro perfil jeje, el que aparece como: Camilo Arana",
          "pros": "todos, excelente profexd",
          "contras": "nada",
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 3.6
        }
      },
      {
        "nombre": "Daniel Felipe Suárez León",
        "slug": "daniel-felipe-suarez-leon",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.43,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Es bastante organizado y amable. Trata de que todos sigan el ritmo de la clase y entiendan. Hace bastantes ejercicios prácticos los cuales facilitan el estudio para los parciales. Son tres parciales de 25%, y otro 25% de quiz, ejercicios y taller. Los ejercicios de los parciales son bastante similares a los de los talleres que da en la diapositivas.",
          "pros": "Hay que estudiar bastante pero no es imposible dejarla alta.",
          "contras": "Nada.",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jaime David Mora Paz",
        "slug": "jaime-david-mora-paz",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.35,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Jaime es recién ingresado a la planta docente en este 2026-1 y aún así es muchísimo mejor que muchos profes que llevan años ejerciendo. En general es un buen docente, explica con paciencia y suele hacer muchos ejemplos de ejercicios con el fin de que se entiendan los conceptos tanto en la teoría como en la práctica. Como nuestro grupo venía de los que nos cambiamos del profe Nicolás Alba a él, realmente las notas y la forma de los parciales eran las mismas que las del profe que acabo de mencionar, es decir, 25% por cada uno de los 3 parciales y 25% de quizes, pero el cambió los quizes por una…",
          "pros": "- Enseña muy bien - Es bastante relajado - Ayuda a que ponga atención en clase para tener puntos de participación",
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Diego Alberto Chitiva Huertas",
        "slug": "diego-alberto-chitiva-huertas",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 3.9,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es sumamente amable, se esmera por que sus estudiantes entiendan y aprendan. Brinda oportunidades para levantar notas malas de parciales, sin descuidar la exigencia propia de un buen docente. Califica justo, hace quices de lo que se ve en clase, los cuales pesan, entre todos, lo mismo que un parcial. También manda talleres útiles para aprender los temas y de los cuales saca puntos para los parciales.",
          "pros": "* Enseña bien y se hace entender. * No es cuchilla, califica justamente. * hace quices de lo que se vio en clases anteriores. * Sus parciales salen de los talleres. * Puntual y da notas a tiempo. * Ayuda a subir nota…",
          "contras": null,
          "periodo": "2018-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
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
        "nombre": "Luis Alejandro Barbosa Torres",
        "slug": "luis-alejandro-barbosa-torres",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.4,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Creo que es un profesor recién llegado, lastimosamente el otro semestre no va a dar integral, pero creo que sí va a dar algebra lineal. Totalmente recomendado, este profesor es un amor, explica muy bien, deja talleres y sus parciales son bastante entendibles. A mi me dieron la opción de cambiarme de grupo para ver con él y no me arrepiento.",
          "pros": "TODO Explica super bien. No da sueño. Deja talleres. Sus parciales son supremamente entendibles.",
          "contras": "Que llegó después del primer corte.",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 4
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
        "nombre": "Henry Steven Rueda Corredor",
        "slug": "henry-steven-rueda-corredor",
        "resenas": 22,
        "calidad": "buena",
        "calificacion": 4.99,
        "notaPromedio": 4.38,
        "resenasOcultas": 21,
        "resena": {
          "texto": "Sin lugar a dudas es el mejor profe que he tenido, es muy amable, sus parciales son trabajables (No son muy difíciles pero tampoco son tan faciales, lo justo). Da bonos por realizar algunos cursor de matemáticas en Coursera. Los talleres son un poco largos pero muy divertidos son ejercicios sonde se aplica lo visto en clase.",
          "pros": "TODOS",
          "contras": "NADA",
          "periodo": "2021-10 (virtual)",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
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
        "nombre": "Cristian David Sarmiento Santiago",
        "slug": "cristian-david-sarmiento-santiago",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.93,
        "notaPromedio": 3.97,
        "resenasOcultas": 2,
        "resena": {
          "texto": "El profe es parchado, buena gente, puntual, no tira a matar, los parciales son relajados pero no regalados igual tiene que estudiar obvio pero a lo bien el profesor es muy bueno explicando, es bastante pedagógico, tanto que hasta sus chistes (a veces malos) me hacian el día. Aún tengo stickers de el diciendo *maravilloso* y *súper súper súper* es un amor",
          "pros": "Se aprende Se pasa No consume tanto tiempo",
          "contras": "Ninguno (A veces no responde correos xd)",
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Sebastian David Higuera Rincon",
        "slug": "sebastian-david-higuera-rincon",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.93,
        "notaPromedio": 3.97,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Es un re lindo, hace que uno se interese por la materia y siempre tiene una buena actitud e intenta dinamizar siempre las clases, eso lo motiva a un c:, cuando nos veía aburridos hacia chistes y uno volvía a estar focus con él. Eso sí, si quiere tener buena nota en los parciales, tenga parciales viejos, ya que el maneja una estructura similar en todos (además uno se los puede pedir personalmente y él se los da).",
          "pros": "Todo,",
          "contras": "Nada, papasito.",
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Andres Jimenez Garcia",
        "slug": "andres-jimenez-garcia",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.9,
        "notaPromedio": 4.15,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Excelente profesor, empieza abordando temas que se necesitan para ver calculo diferencial, responde preguntas que se le hagan durante las clases, califica talleres y las preguntas de los parciales son muy parecidas o idénticas a las de los talleres, hace reuniones de meet el día antes del parcial para resolver dudas, hace algunas actividades que se relacionan con la carrera que estudies, el mejor profesor con el que pude haber visto calculo diferencial.",
          "pros": "TODO",
          "contras": "La clase es en ciencias agrarias a las 7 de la mañana",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Ivan Andres Orozco Macana",
        "slug": "ivan-andres-orozco-macana",
        "resenas": 12,
        "calidad": "buena",
        "calificacion": 4.86,
        "notaPromedio": 4.28,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Uno de los mejores profesores, explica bien , es relajado, permite apuntes que mas se puede pedir?",
          "pros": "Es flexible y da quices virtuales es amable el mismo sabe que la materia es medio obsoleta y deberia es tener un enfoque a computador y codigo incluso si la va perdiendo es remontable, asi la cague en un parcial horrible",
          "contras": "ecuaciones es aburrida veala con quien la vea y no va a usar los temas en si, seria mas util un enfoque mas computarizado",
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Daniel Santiago Paez",
        "slug": "daniel-santiago-paez",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 4.85,
        "notaPromedio": 4.12,
        "resenasOcultas": 12,
        "resena": {
          "texto": "Ojala diera todas las matematicas y toda la carrera es el mejor profe que existe, se le entiende absolutamente todo, usa la tablet y trasmite al tablero a la vez que usa microfono, permitiendo que todo el salon entienda, responde amablemente las preguntas y se devuelve si es necesario, deja bonificaciones en los parciales y no califica demasiado duro el tipo es la mejor contratacion de esta universidad",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "David Camilo Téllez Guzmán",
        "slug": "david-camilo-tellez-guzman",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.81,
        "notaPromedio": 4.18,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Es muy buen docente. Explica bien, deja trabajos útiles y su metodología es muy interesante. El tipo es super relajado, se puede dejar alta porque da muchas oportunidades para hacerlo, sin la necesidad de regalar nota. Creo que el siguiente semestre ya no dará clase en la universidad.",
          "pros": null,
          "contras": null,
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Martha Mancera",
        "slug": "martha-mancera",
        "resenas": 21,
        "calidad": "buena",
        "calificacion": 4.79,
        "notaPromedio": 4.34,
        "resenasOcultas": 20,
        "resena": {
          "texto": "la mejor profesora de matemáticas que he tenido en mi vida, explica claramente, resuelve dudas y enseña de una manera intuitiva que establece buenos fundamentos para",
          "pros": null,
          "contras": null,
          "periodo": "2022-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Jason Ricardo Hernandez Mogollon",
        "slug": "jason-ricardo-hernandez-mogollon",
        "resenas": 16,
        "calidad": "buena",
        "calificacion": 4.79,
        "notaPromedio": 4.46,
        "resenasOcultas": 15,
        "resena": {
          "texto": "Excelente profesor, muy puntual y comprometido con la enseñanza. Es muy amable y siempre resolvió dudas, además hizo actividades bono para subir notas. Califica con parciales, quizzes y talleres, pero si estudia es bastante cinqueable porque evalúa lo que explica en clase.",
          "pros": "-Muy amable -Le interesa que la gente aprenda -Prepara sus clases",
          "contras": "-Suele ser un poco más exigente en los parciales, pero con esfuerzo se pasa -Es muy flexible en cuanto a entregas",
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Camilo Ernesto Medina Gonzalez",
        "slug": "camilo-ernesto-medina-gonzalez",
        "resenas": 32,
        "calidad": "buena",
        "calificacion": 4.78,
        "notaPromedio": 4.5,
        "resenasOcultas": 31,
        "resena": {
          "texto": "Muy buen profesor muy chistoso, parchado y ademas explica muy bien, tira muy buenos bonos y los quices no son a matar. Al principio del semestre deja al grupo elegir los porcentajes de cuanto va a valer cada parcial, quices y trabajo final. Si hacen los parciales que el manda lit pasan ademas que siempre pone un punto extra para ayudar en la nota.",
          "pros": "Tira muchos Bonos salvavidas Metan con el no se van a arrepentir",
          "contras": "Nada, es perfecto.",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Carlos Sneyder Otalora Aldana",
        "slug": "carlos-sneyder-otalora-aldana",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.78,
        "notaPromedio": 3.98,
        "resenasOcultas": 8,
        "resena": {
          "texto": "No es el mejor profesor del mundo, pero es un maestro del calculo y enseña bien",
          "pros": "Enseña bien No malgasta el tiempo Es buena gente No es corchador",
          "contras": "Muchos talleres pero eso es un contra de la materia más que del profesor",
          "periodo": "2026-2",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Anderson Arley Vera Arboleda",
        "slug": "anderson-arley-vera-arboleda",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 4.77,
        "notaPromedio": 4.21,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Anderson es un buen profesor para ser nuevo. Tiene paciencia para explicar y disfruta enseñar. A pesar de que hagas preguntas \"obvias\" siempre responderá de forma amable y tranquila, de hecho te pondrá a dudar si realmente conoces la idea central. Deja hartos talleres y trabajos para practicar, es muy claro con lo que dice y cómo califica. Sus parciales son realmente largos, toca entender bien y organizarse...",
          "pros": "Amable Tiene paciencia para explicar Siempre está actualizado",
          "contras": "Voz baja Mucho trabajo Parciales largos",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 4
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
        "nombre": "Diego Arturo Niño Torres",
        "slug": "diego-arturo-niño-torres",
        "resenas": 19,
        "calidad": "buena",
        "calificacion": 4.76,
        "notaPromedio": 4.59,
        "resenasOcultas": 18,
        "resena": {
          "texto": "El profesor explica excelente, tiene mucha paciencia y se esmera en que todos los estudiantes entiendan. Los parciales son justos y para pasarlos obviamente hay que poner mucha atención a clase. Él permite cualquier tipo de pregunta y la responderá con la mayor amabilidad posible.",
          "pros": null,
          "contras": null,
          "periodo": "2019-2",
          "calificacion": 5,
          "dificultad": 2.7
        }
      },
      {
        "nombre": "Carolina Dominguez",
        "slug": "carolina-dominguez",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.75,
        "notaPromedio": 4.25,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Excelente profesora, tiene una pedagogía excelente. Es muy empática, explica muy bien y sus parciales no tienen demostraciones (al menos para ingeniería)",
          "pros": "-Todo",
          "contras": "-Nada",
          "periodo": "2021-2",
          "calificacion": 5,
          "dificultad": 2.5
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
        "nombre": "Sebastian Higuera Rincon",
        "slug": "sebastian-higuera-rincon",
        "resenas": 41,
        "calidad": "buena",
        "calificacion": 4.73,
        "notaPromedio": 3.68,
        "resenasOcultas": 40,
        "resena": {
          "texto": "Un excelente profesor en términos generales. Explica los temas de manera didáctica, lo que facilita su comprensión, y es justo en la elaboración de los parciales, ya que incluyen únicamente lo visto en clase. Como recomendación, es fundamental realizar los talleres que deja, ya que son una excelente preparación para los exámenes.",
          "pros": null,
          "contras": null,
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Brian Felipe Sarmiento Valencia",
        "slug": "brian-felipe-sarmiento-valencia",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 4.72,
        "notaPromedio": 4.49,
        "resenasOcultas": 7,
        "resena": {
          "texto": "El profe fue muy buena gente por el tema del paro, se preocupa porque uno entienda los temas Si tuviera que verla de nuevo volvería a inscrirla con el profe",
          "pros": null,
          "contras": null,
          "periodo": "2024-1",
          "calificacion": 3.9,
          "dificultad": 4
        }
      },
      {
        "nombre": "Andres Alejandro Rubiano Suarez",
        "slug": "andres-alejandro-rubiano-suarez",
        "resenas": 21,
        "calidad": "buena",
        "calificacion": 4.71,
        "notaPromedio": 4.11,
        "resenasOcultas": 20,
        "resena": {
          "texto": "Excelente docente, El profe es Matemático, Metalero y Otaku, explicaciones del otro mundo. Hace que cosas tan complejas se vean sencillas. Bonos en parciales, bonos por participación y excelente persona. La clase es tan entretenida que el tiempo pasa rápido. Ojo: No significa que regale la materia, hay ejercicios complejos y toca camellarle.",
          "pros": "Todo, crack",
          "contras": "Me da un poco de toc que consuma tanto azucar. Dulces y bebidas energizantes todas las clases.",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "David Amaya Velásquez",
        "slug": "david-amaya-velásquez",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.67,
        "notaPromedio": 4.15,
        "resenasOcultas": 9,
        "resena": {
          "texto": "El tipo es severa persona y muy buen profesor.",
          "pros": "Responde cualquier duda No es tan dificil de pasar Se aprende",
          "contras": "Tiene una manera un poco brusca de hablar En los parciales salen varias preguntas de demostración",
          "periodo": "2021-10 (virtual)",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jaime Andres Robayo Mesa",
        "slug": "jaime-andres-robayo-mesa",
        "resenas": 57,
        "calidad": "buena",
        "calificacion": 4.65,
        "notaPromedio": 4.28,
        "resenasOcultas": 56,
        "resena": {
          "texto": "La materia fue muy buena, el profesor siempre se esmerama mucho en que se entendieran todos los temas. No era prepotente",
          "pros": null,
          "contras": null,
          "periodo": "2020-10 (virtual)",
          "calificacion": 5,
          "dificultad": 5
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
        "nombre": "Alexander Caviedes Castro",
        "slug": "alexander-caviedes-castro",
        "resenas": 17,
        "calidad": "buena",
        "calificacion": 4.64,
        "notaPromedio": 4.04,
        "resenasOcultas": 16,
        "resena": {
          "texto": "Pedagogo de pedagogos. Sabe enseñar su materia como no he visto a nadie enseñarla. Las evaluaciones que aplica son excelente método de estudio y ayudan a guardarse los conocimientos requerido de la materia. Explica, enseña, responde dudas como ningún otro profesor, excelente. Sinceramente, espero que siga dictando clase porque tiene la vocación para ello.",
          "pros": null,
          "contras": null,
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 4.3
        }
      },
      {
        "nombre": "Samuel Felipe Roldán Moros",
        "slug": "samuel-felipe-roldan-moros",
        "resenas": 17,
        "calidad": "buena",
        "calificacion": 4.59,
        "notaPromedio": 4.26,
        "resenasOcultas": 16,
        "resena": {
          "texto": "uno de los mejores profesores, se aprende bastante, enseña todos los trucos necesarios. Sus parciales no son faciles, pero siempre esta buscando la manera de negociar y arreglar con los estudiantes, para no ser tan cuchilla",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 4.8,
          "dificultad": 3.6
        }
      },
      {
        "nombre": "Gustavo Eduardo Arengas Reines",
        "slug": "gustavo-eduardo-arengas-reines",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.56,
        "notaPromedio": 4.21,
        "resenasOcultas": 9,
        "resena": {
          "texto": "El profesor domina el tema, mantiene una linea y se preocupa porque sus estudiantes entiendan el tema. Da muchos espacios para dudas y trata de explicar muy detalladamente sus procedimientos. Maneja las guías que envía el departamento y todos los quices y parciales salen de allí, así que si desarrolla y entiende la guía, será fácil la materia, aunque lo único malo sea que son bastantes ejercicios y la clase se puede tonar monótona y aburrida. Pero en general, son muy buenas explicaciones de todos los temas.",
          "pros": "Explica bien Es buena gente Sabe del tema Ayuda a los estudiantes en cuanto a dudas",
          "contras": "Clases monótonas",
          "periodo": "2020-10 (virtual)",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Fabio Alejandro Calderon Mateus",
        "slug": "fabio-alejandro-calderon-mateus",
        "resenas": 22,
        "calidad": "buena",
        "calificacion": 4.52,
        "notaPromedio": 4.25,
        "resenasOcultas": 21,
        "resena": {
          "texto": "Aunque es un excelente profesor y buena persona me dejó un mal sabor de boca cuando renunció y nos pusieron como profesor a Pecha. Si bien justificó que la causa de su renuncia era situación personal, nos avisó el último día de la semana de adiciones y cancelaciones por lo que hubo mucha gente que no pudo cancelar la materia. Pudo habernos avisado la clase anterior (Dijo que había enviado su carta de renuncia la clase pasada) :/ Otro punto extra es que el semestre pasado hizo lo mismo con otro grupo que tuvo y también los dejó mamando.",
          "pros": "El mejor profesor para ver cualquier materia de Mates",
          "contras": "Puede que renuncie y te coloquen a Pecha :v",
          "periodo": "2022-2",
          "calificacion": 1.5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Richard Eduardo Sanchez Mendez",
        "slug": "richard-eduardo-sanchez-mendez-sanchez-mendez",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 4.51,
        "notaPromedio": 4.2,
        "resenasOcultas": 12,
        "resena": {
          "texto": "No voy a mentir con Richard Es díficil, Tiene que tener buenas bases de diferencial integral y álgebra lineal, si usted le dedica tiempo suficiente a los ejercicios le juro que la deja alta, participe en las monitorias, haga lo más que pueda de todos los talleres, demostraciones más que todo.",
          "pros": "-Toma asistencia de vez en cuando -Si usted le participa en Tutorías le ayuda -Excelente Material de Estudio -El profe es muy amable en la medida de lo posible -No hizo Quices",
          "contras": "-Parciales que si no estudia van a ser un poco complicados",
          "periodo": "2026-2",
          "calificacion": 4.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Jonhatan Castillo Barajas",
        "slug": "jonhatan-castillo-barajas",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 3.7,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Es increible explica demasiado bien, responde preguntas y no califica duro, para los talleres, algunos son puntos de investigar para estos utilice ejemplos complejos, no use los mas sencillos ya que esto no le gusta, y no mucho mas que decir muy recomendado.",
          "pros": "Sube todo a un drive Los talleres sirven mucho para estudiar y manejan un muy buen porcentaje",
          "contras": "Parciales de dificultad media-alta Talleres algo largos (los puede entregar en grupo)",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3
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
        "nombre": "Darlyn Yamid Yela Rosero",
        "slug": "darlyn-yamid-yela-rosero",
        "resenas": 15,
        "calidad": "buena",
        "calificacion": 4.46,
        "notaPromedio": 3.94,
        "resenasOcultas": 14,
        "resena": {
          "texto": "Es el mejor profesor, si realmente quieren aprender y pasar inscriban con el, es muy paciente y a mi parecer explica muy bien, eso si, hay que poner atención en clase y no faltar por que luego va a ser difícil que le cojan el hilo a los siguientes temas",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Fabio Calderón Mateus",
        "slug": "fabio-calderón-mateus",
        "resenas": 22,
        "calidad": "buena",
        "calificacion": 4.42,
        "notaPromedio": 4.12,
        "resenasOcultas": 21,
        "resena": {
          "texto": "Ví con Fabio en 2023-1 Inscribí álgebra lineal, y terminé viendo con Pecha. Al final pasé con Pecha, pero bueno, eso no viene al caso. Puede que Fabio sí sea un buen profesor, pero me parece un gesto muy irresponsable y descarado de su parte que haya cancelado; de remate la universidad nos dió el gran desafio de ver con Arsenio. No es la primera vez que deja tirado a un grupo, muchos fueron afectados por eso y se vieron atrasados en sus carreras, incluso eso hizo que hubieran cuellos de botella en la materia de álgebra lineal para el siguiente semestre.",
          "pros": "- Es un buen profesor en su pedagogía y métodología.",
          "contras": "-Irresponsabilidad a la hora de tomar grupos y cancelarlos a últimos momento por sus intereses personales. Descarado.",
          "periodo": "2023-1",
          "calificacion": 1.5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Juan Sebastián Cortés Cruz",
        "slug": "juan-sebastian-cortes-cruz",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.42,
        "notaPromedio": 4.07,
        "resenasOcultas": 5,
        "resena": {
          "texto": "En mi carrera nunca un profe me ha motivado tanto a interesarme por no solo el área del cálculo sino más allá, es un pan de Dios, sus parciales son de opción múltiple y tienen varias casca ritas pero si hace las tareas y los ejercicios del libro guía no tendrá problemas, muchas veces son los mismos ejercicios, solo cambia uno o dos valores, si puede inscribirla hágalo, es un man re teso en su área pero más allá de eso le apasiona enseñar, no le importa detener la clase si es necesario explicar o repasar por encima un tema previo, tiene un sentido del humor bueno y da muchas oportunidades para…",
          "pros": "Parciales de opción múltiple. Explicaciones para ingeniería. Ayudas para subir la nota. Si le gustan las mátematicas pregúntele de lo que sea, no solo de la materia, le encanta hablar de cualquier área",
          "contras": "Salta muchas demostraciones (dependiendo de la persona puede ser bueno).",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3.6
        }
      },
      {
        "nombre": "Manuel Santiago Aragón Suárez",
        "slug": "manuel-santiago-aragon-suarez",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4.4,
        "notaPromedio": 4.7,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es uno de los mejores profesores que he tenido. Posee un amplio dominio del tema y fomenta un ambiente libre para recibir críticas y participar activamente en clase. Es una persona muy agradable. Sin embargo, sus parciales y quices son de complejidad alta, pero si hace sus \"tallersitos\" es muy probable que los pase. También es un poco excéntrico. En ocasiones se desvía del tema para hablarnos sobre la URSS y menciona que Colombia no sería \"un platanal\" si hubiera tenido un presidente como Stalin.",
          "pros": "•Buena metodología de clase • Explica bien y domina correctamente los temas vistos • Cumple con los plazos y el programa del curso",
          "contras": "•Parciales y quices complejos • No realiza bonus para subir nota • Aveces se desvía del tema, lo que puede hacer perder el hilo de la clase",
          "periodo": "2024-2",
          "calificacion": 4.4,
          "dificultad": 4
        }
      },
      {
        "nombre": "Hernan Garzon Gutierrez",
        "slug": "hernan-garzon-gutierrez",
        "resenas": 53,
        "calidad": "buena",
        "calificacion": 4.37,
        "notaPromedio": 4.32,
        "resenasOcultas": 52,
        "resena": {
          "texto": "Tratare de ser objetivo, por mi parte es buen profesor, y estos son mis argumentos que son los siguientes: - Entrega todo el programa desde el principio de manera organizada (temas que veremos, fechas de los parciales, que notas sacará, la duración de cada tema aproximadamente, su correo, etc). - Deja tareas para estudiar por nuestra cuenta (que sirve bastante) - Deja talleres, aunque no los califica, sirven mucho para los parciales (hay veces que los ejercicios de los talleres están en los parciales) - Los parciales los califica la siguiente clase (nos dice cuales son las respuestas…",
          "pros": "- Califica el procedimiento y si argumentas de buena manera, te puede subir la nota (si ve el profe que si las cosas están bien hechas, sino, no intentes explicar de más) - A ratos hace chistes para entretener la clase…",
          "contras": "- Llega tarde (aprox: 15 min). - La mayoría de las veces sus notas solo son 3 parciales que valen lo mismo, asi que no hay que confiarse demasiado.",
          "periodo": "2026-1",
          "calificacion": 4.4,
          "dificultad": 3.6
        }
      },
      {
        "nombre": "Harold Andrés Jiménez Rubio",
        "slug": "harold-andres-jimenez-rubio",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.36,
        "notaPromedio": 4.01,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Muy buen profesor, explica cuantas veces y de la manera que haga falta para que uno entienda, colabora con puntos para los parciales, comparte todas las notas que toma en clase, no suele hacer demostraciones que no sean tan importantes, en general es facil aprender a derivar con el",
          "pros": "Comparte buenos apuntes Hace muchos ejemplos Ayuda con puntos extra y responde ciertas preguntas en los parciales Es puntual y organizado Se nota que le gusta lo que enseña",
          "contras": "Ninguno importante, si estudia un poco la puede dejar alta, teniendo en cuenta que es un calculo",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 3
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
        "nombre": "Juan Carlos Galvis Arrieta",
        "slug": "juan-carlos-galvis-arrieta",
        "resenas": 18,
        "calidad": "buena",
        "calificacion": 4.34,
        "notaPromedio": 4.35,
        "resenasOcultas": 17,
        "resena": {
          "texto": "- Es una gran persona y muy buen profesor, lleva personas ajenas a la asignatura para que podamos aprender todo lo relativo a la carrera. - El profesor tiene un gran dominio del tema y hace que uno se interese por el aprendizaje. - No le va a costar mucho si sabe programar. Pero se ven temas un poco avanzados de la carrera. (Por el contenido de la asignatura )",
          "pros": "- Explica muy bien. - Se ven todos los temas de la asignatura - Los parciales son muy pasables - Si se esfuerza mucho haciendo códigos de project Euler y codeabey puede dejar la materia en 5. - No es muy complicada.",
          "contras": "- No explica muy bien a programar, pues presupone que todos los que entran a CC saben hacerlo. - Si no sabe mucho sobre las ciencias de la computación puede que le cueste. - Las tareas son un tanto largas, pero se…",
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 2.4
        }
      },
      {
        "nombre": "Jenny Alejandra Pabon Cadavid",
        "slug": "jenny-alejandra-pabon-cadavid",
        "resenas": 21,
        "calidad": "buena",
        "calificacion": 4.33,
        "notaPromedio": 3.56,
        "resenasOcultas": 20,
        "resena": {
          "texto": "Es una buena profesora, explica de forma que realmente uno entiende la materia. Deja buen material y ejercicios para estudiar así que usted puede aprender solo los temas que no entendió en clase. Sin embargo por más que usted estudie es muy probable que pase raspando, no tiene mesura con la dificultad y extensión de los parciales. Cuando las preguntas son manejables son demasiadas y cuando son pocas preguntas es tan complejo que es imposible hacer algo. La verdad la materia fue un completo infierno por la exigencia de la calificación.",
          "pros": "Si a usted le interesa aprender cálculo más allá de la nota, es una excelente profesora, le va a exigir y le va a dar herramientas.",
          "contras": "Da clase como si todos los estudiantes fueran de matemática o carreras con niveles en general muy altos de cálculo. Si usted va a ver la materia por verla, pasarla y ya, no le interesa realmente ser bueno en cálculo…",
          "periodo": "2021-10 (virtual)",
          "calificacion": 3.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Luis Alejandro Cifuentes Espitia",
        "slug": "luis-alejandro-cifuentes-espitia",
        "resenas": 9,
        "calidad": "regular",
        "calificacion": 4.33,
        "notaPromedio": 3.61,
        "resenasOcultas": 8,
        "resena": {
          "texto": "La verdad no entiendo como este profe tiene malas calificaciones, es super bueno, explica claro los temas, responde todas las preguntas de buena manera es super amable y comprensivo, se aprende mucho y la materia se puede dejar alta.",
          "pros": "Explica bien y hace que los temas sean faciles. Es amable y comprensivo. Es facil dejar la nota alta y se aprende lo necesario",
          "contras": "Es impuntual xd pero el dia del parcial si llegaba temprano asi que relajados, de resto nada, el man es perfecto",
          "periodo": "2021-10 (virtual)",
          "calificacion": 5,
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
        "nombre": "Nicolas Bolaños",
        "slug": "nicolas-bolanos",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.27,
        "notaPromedio": 4.07,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Un buen profesor realmente, explica de manera clara, esta dispuesto a resolver dudas, hace tutorías una o dos semanas antes del parcial, es algo flexible con las notas, además de ser bastante amena la clase con el, la única pega que le veo es que a veces a uno le gustaría que explicara más de donde salen ciertas formulas o como se llego a un resultado, pero el profesor no profundiza e indica que no es el objetivo de la clase lo cual al menos en lo personal, me desmotiva a estudiar la materia.",
          "pros": "- amable - tutorías antes de parcial - algunos puntos del parcial sacados de los talleres",
          "contras": "Falta de profundización en algunos temas o explicaciones.",
          "periodo": "2023-2",
          "calificacion": 4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Andres Chacon Capera",
        "slug": "andres-chacon-capera",
        "resenas": 27,
        "calidad": "buena",
        "calificacion": 4.26,
        "notaPromedio": 3.74,
        "resenasOcultas": 26,
        "resena": {
          "texto": "Se nota su esfuerzo de enseñar y domina el tema, pero el 80% del aprendizaje será de forma autónoma, descuidar esta materia como primíparo es un grave error. Si tiene malas bases de matemáticas o no sabe la mayoría de los trucos con la trigonometría, no se ponga la soga al cuello y cometa mi error, mejor preparese para verla el otro semestre y no se tire el promedio en primer semestre y tener que volverla a ver.",
          "pros": "+ Hace sesión de dudas antes de parciales. + Permite contactarlo por correo. + Ayuda con sólo tomar 5 notas de los 8 quices que hace por semestre para la definitiva. + En la últimas sesiones introdujo las bases para…",
          "contras": "- Los quices o los hacía al inicio o al final de la clase. Tuve problemas ya que tenia la clase de cálculo entre otras dos materias y el salón quedaba lejos. - Pocos ejercicios en clase, la mayor parte se dedica a la…",
          "periodo": "2022-1",
          "calificacion": 3,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Diana Andrea Toquica Arenas",
        "slug": "diana-andrea-toquica-arenas",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.23,
        "notaPromedio": 3.31,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Es muy buena profe, fue muy flexible con ese chikyparo, pero, hay que estudiarle para los parciales, si bien ella ayuda durante el semestre con trabajos que valen el 25% (recomiendo tratar de sacar 5 en esa parte) hay que ponerle mucha voluntad para los parciales ya que tienen un nivel medio, pero para el ultimo parcial ahi si estudie mucho porque no hay ayuda ahi, el resto es muy carismatica, amable (no se pase de confianza) y responde dudas",
          "pros": "Amable Responde dudas Fexible Brinda ayudas",
          "contras": "Hay veces en que no se entiende algo, pero lo mejor es preguntarle",
          "periodo": "2023-1",
          "calificacion": 4.5,
          "dificultad": 3.2
        }
      },
      {
        "nombre": "José Luis Guevara Rodríguez",
        "slug": "jose-luis-guevara-rodriguez",
        "resenas": 41,
        "calidad": "buena",
        "calificacion": 4.2,
        "notaPromedio": 4.38,
        "resenasOcultas": 40,
        "resena": {
          "texto": "Es un excelente docente que se le nota la pasión por enseñar y transmitir su conocimiento a los estudiantes, las actividades propuestas son dinámicas y en general aplicadas a la parte práctica de las carreras. Los parciales salen de las mismas tareas de clase que están en las diapositivas, que son siempre una cantidad considerable lo cual es suficiente para salir bien preparados.",
          "pros": "Las diapositivas Ejemplos aplicados a la vida real Siempre dispuesto a resolver dudas",
          "contras": "Las clases son en el auditorio, por lo que a veces se dificulta observar la pantalla o realizar alguna pregunta",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Francisco Albeiro Gomez Jaramillo",
        "slug": "francisco-albeiro-gomez-jaramillo",
        "resenas": 19,
        "calidad": "buena",
        "calificacion": 4.17,
        "notaPromedio": 4.35,
        "resenasOcultas": 18,
        "resena": {
          "texto": "Si hay algo que destacar de Francisco es que disfruta mucho enseñando este curso, y lo demuestra. La metodología es sencilla: las clases son teóricas y los entregables son tareas relacionadas a las temáticas del curso, junto con un proyecto (en grupo). Todo el semestre consiste en aprender sobre Machine Learning desde un enfoque matemático, y el profesor se esfuerza por hacerlo de manera interesante y consistente, conectando el conocimiento teórico con sus aplicaciones prácticas en la vida real.",
          "pros": "Tiene explicaciones interesantes y divertidas Flexible con las entregas",
          "contras": "Ligeramente impuntual Puede desaparecer a veces",
          "periodo": "2026-1",
          "calificacion": 4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Yesica Paola Suarez Gomez",
        "slug": "yesica-paola-suarez-gomez",
        "resenas": 11,
        "calidad": "buena",
        "calificacion": 4.15,
        "notaPromedio": 4.15,
        "resenasOcultas": 10,
        "resena": {
          "texto": "Es una buena profesora, explica bien los temas y lleva un orden claro, tiene un cuadernillo virtual con todos los apuntes de clase para que se pueda repasar y deja ejercicios opcionales del Stewart después de cada clase para reforzar los temas; sin embargo, las clases de vez en cuando se tornaban aburridas y monótonas. En general, los parciales y quices son trabajables, si se ha estudiado, puesto que la mayoría de puntos son de ejercicios que se trabajaron en clase. Con respecto al paro, la profesora fue flexible y nos dejó redefinir los porcentajes de evaluación, en un principio se iban a…",
          "pros": "Explica bien Buena gente Parciales y quices trabajables Deja ejercicios para estudiar Ordenada con los temas Cuadernillo virtual",
          "contras": "Clase algo monótona y aburrida Forma de evaluación",
          "periodo": "2021-10 (virtual)",
          "calificacion": 4.3,
          "dificultad": 4.2
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
        "nombre": "Alina Fedosova",
        "slug": "alina-fedosova",
        "resenas": 52,
        "calidad": "buena",
        "calificacion": 4.11,
        "notaPromedio": 4.22,
        "resenasOcultas": 51,
        "resena": {
          "texto": "que profesora tan espectacular, explica todo detalladamente, no le importa detenerse incluso devolverse para explicarte mejor, antes de los pariales deja talleres cortos parecidos a los ejercisios que saldran en el parcial, es demasiado facil pasarle incluso sin ir a clase puesto que ella sue sus notas y archvos al moodle y esos tambein vienen explicados y detallados, volveria a meter mas materia con ella",
          "pros": "no tira a matar es facil de pasar demasiado amable y comprensible explica perfectamente",
          "contras": "depronto el acento pues es rusa pero del resto nada mas",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "German Eduardo Fonseca Buitrago",
        "slug": "german-eduardo-fonseca-buitrago",
        "resenas": 45,
        "calidad": "buena",
        "calificacion": 4.03,
        "notaPromedio": 3.87,
        "resenasOcultas": 44,
        "resena": {
          "texto": "Personalmente considero que aprobar con este profesor depende del mismo estudiante, ya que realmente la mayoría de sus clases son bastante teóricas y en ocasiones va muy rápido, lo que no permite comprender en principio los conceptos y tampoco ponerlos en práctica, hubieron bastantes clases donde en la teoría no entendía muy bien y me tocaba recurrir a estudiar el tema de cero por mi cuenta. Pero el deja unos talleres para practicar lo que se ve en clase, y siendo sincero si uno los hace a conciencia y con tiempo, aprobar el parcial no va ser complicado, ya que el contenido de los talleres es…",
          "pros": "Quices en pareja Ejercicios de los parciales en los talleres",
          "contras": "Clases largas y aburridas",
          "periodo": "2025-1",
          "calificacion": 4.3,
          "dificultad": 4
        }
      },
      {
        "nombre": "Nicolas Martinez Alba",
        "slug": "nicolas-martinez-alba",
        "resenas": 53,
        "calidad": "buena",
        "calificacion": 4.02,
        "notaPromedio": 3.97,
        "resenasOcultas": 52,
        "resena": {
          "texto": "Es alguien que le tiene amor a la materia y que la transmite en sus clases. Pero como es típico en lineal, será más complicado de lo que realmente debería ser. Tendrá talleres y recursos a mano, algunos como tarea opcional. Solo califica quices y parciales, los cuales tienen un común denominador: ejercicios que son fáciles si usa el método correcto, imposibles si no es así, al menos la mayoría de veces. Entonces aprenda a identificar como resolver de forma eficiente las cosas, el profe valora eso. También hay un proyecto final: un folleto sobre un uso del álgebra lineal hecho en grupos.…",
          "pros": "- Los quices son en pareja y deja reunirse a compartir \"información\" entre personas (o sea, algo de copia xd) - Parciales realizables y hasta sencillos si entiende el tema",
          "contras": "- Su enfoque puede alejarse del estándar, por lo que puede ser confuso leer otras fuentes si se acostumbra - No hay determinantes sino hasta el final - Mucho ejercicio trucado, como explique antes",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 3.5
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
        "nombre": "German Preciado Lopez",
        "slug": "german-preciado-lopez",
        "resenas": 41,
        "calidad": "regular",
        "calificacion": 3.91,
        "notaPromedio": 3.83,
        "resenasOcultas": 40,
        "resena": {
          "texto": "Es un gran profesor, Explica muy bien, da una clase chevere y es muy buena gente, por lo menos a nosotros como dejo el primer parcial durísimo dijo que la nota del segundo parcial la remplazaba y de resto de parciales fueron mas faciles a comparacion y hagan los ejercicio sugeridos, eso es todo con este profesor",
          "pros": "se deja hablar si sustenta un punto que no le valió en el parcial le sube la nota ud aprende si o si",
          "contras": "molesta por la puntualidad en los parciales uno piensa que no toma asistencia, pero el siempre se acuerda de uno y si ve que alguien falta muchisimo, se la tira por fallas",
          "periodo": "2026-1",
          "calificacion": 5,
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
        "nombre": "Juan Pablo Fonseca Sánchez",
        "slug": "juan-pablo-fonseca-sanchez",
        "resenas": 22,
        "calidad": "regular",
        "calificacion": 3.86,
        "notaPromedio": 4.1,
        "resenasOcultas": 21,
        "resena": {
          "texto": "Es muy fácil pasar con el, yo dejé la materia en 4,6 y eso que no iba mucho a clase. Los parciales son virtuales pero son bien largos entonces hay que hacerlos con tiempo. Lo único es conseguir amigos o compañeros en la materia para que te pasen los parciales antes que los empieces en Moodle, así puedes tener más tiempo. Si vas a meter con el, siempre haz las gráficas y ya",
          "pros": "Parciales virtuales",
          "contras": "El aprendizaje es autónomo",
          "periodo": "2025-2",
          "calificacion": 4.1,
          "dificultad": 4.1
        }
      },
      {
        "nombre": "Wilfredo Bohorquez",
        "slug": "wilfredo-bohorquez",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 3.83,
        "notaPromedio": 3.3,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Las clases son un poco aburridas, toda la temática es de libro, es bastante desparchado... Lo bueno es que sube todos los apuntes y hace varios quices para aumentar nota, los quices son bastante llevables ya que sube la lista de ejercicios que irán. Los parciales son un poco complejos",
          "pros": "Sube las clases al drive Flexible con las fechas de parciales y quices",
          "contras": "Bastante aburridoras las clases",
          "periodo": "2025-2",
          "calificacion": 3,
          "dificultad": 3
        }
      },
      {
        "nombre": "Juan Sebastian Guerra",
        "slug": "juan-sebastian-guerra",
        "resenas": 14,
        "calidad": "regular",
        "calificacion": 3.81,
        "notaPromedio": 3.72,
        "resenasOcultas": 13,
        "resena": {
          "texto": "Personalmente no lo recomiendo, siento que se enreda mucho al explicar y se queda en la teoría. Lo cual claro es importante, pero no es muy beneficioso si no se hacen ejercicios de práctica.",
          "pros": null,
          "contras": null,
          "periodo": "2023-1",
          "calificacion": 3,
          "dificultad": 3
        }
      },
      {
        "nombre": "Christian David Sarmiento Santiago",
        "slug": "christian-david-sarmiento-santiago",
        "resenas": 6,
        "calidad": "regular",
        "calificacion": 3.75,
        "notaPromedio": 3.6,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Es uno de los mejores profesores de matematicas que he tenido. Fue muy comprensivo con el paro y dio algunos bonos, es una persona muy carismatica y siempre llega con buena actitud a cada clase, es estricto y le disgusta perder clase pero teniendo en cuenta lo que sucedio en el 2024-1 creo que al contrario fue muy paciente y entendio perfectamente la situacion de algunos de sus estudiantes. Tengo entendido que no volvera a dictar :(.",
          "pros": "Muy organizado Parciales no muy dificiles Muy amable Resuelve cualquier duda Gran actitud Explica muy bien pero un poco rapido",
          "contras": "No se si considerarlo una contra pero con este profesor es fundamental ir a todas sus clases, en cada clase habla de absolutamente todo sobre el tema que se este viendo y es muy facil perderse.",
          "periodo": "2024-1",
          "calificacion": 4.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Eduardo Cardenas Gomez",
        "slug": "eduardo-cardenas-gomez",
        "resenas": 31,
        "calidad": "buena",
        "calificacion": 3.73,
        "notaPromedio": 3.91,
        "resenasOcultas": 30,
        "resena": {
          "texto": "El profesor es buena gente y es alguien relajado. Hizo parciales en grupos entonces xd. El último parcial sí fue individual. No saca más notas, si le fue mal en un parcial le va a quedar baja la nota. La clase es seguir el libro de Korgi, no está mal.",
          "pros": "Parciales justos Buena gente y chill",
          "contras": "Saca pocas notas Tiene pésima caligrafía, era hasta mejor ni ir a clase para verlo escribir esos garabatos xd",
          "periodo": "2026-1",
          "calificacion": 3.9,
          "dificultad": 3.5
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
        "nombre": "Sandra Carolina Garcia Martinez",
        "slug": "sandra-carolina-garcia-martinez",
        "resenas": 55,
        "calidad": "regular",
        "calificacion": 3.65,
        "notaPromedio": 3.32,
        "resenasOcultas": 54,
        "resena": {
          "texto": "No me gusta su forma de enseñanza, no es muy didactica que digamos, siento que le falta aún más experiencia en la pedagogía.",
          "pros": "Deja ejercicios para coseguir puntos extra",
          "contras": "Falta pedagogía",
          "periodo": "2026-1",
          "calificacion": 3.3,
          "dificultad": 3.7
        }
      },
      {
        "nombre": "Alexandre Sinitsyne",
        "slug": "alexandre-sinitsyne",
        "resenas": 71,
        "calidad": "regular",
        "calificacion": 3.63,
        "notaPromedio": 4.39,
        "resenasOcultas": 70,
        "resena": {
          "texto": "no se le entiende un culo, se le entiende más cuando habla en ingles, de las peores experiencias que he tenido la verdad",
          "pros": "lit no se le entiende",
          "contras": "se pasa autonomamente",
          "periodo": "2025-2",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Cesar Augusto Gomez Sierra",
        "slug": "cesar-augusto-gomez-sierra",
        "resenas": 42,
        "calidad": "mala",
        "calificacion": 3.6,
        "notaPromedio": 3.56,
        "resenasOcultas": 40,
        "resena": {
          "texto": "Para Variable Compleja, le sugiero que tenga buenas bases de multivariado, el enfatisa mucho en que \"esto ya lo vieron en Calculo en varias variables\", es duro porque hay que dedicarle bastante tiempo, sobretodo por que pone demostraciones como puntos de parcial, para los 3 parciales lo que hizo fue poner dos puntos aceptables y dos puntos un poco mas duros.",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 3,
          "dificultad": 5
        }
      },
      {
        "nombre": "César Orlando Rincón Guerrero",
        "slug": "cesar-orlando-rincon-guerrero",
        "resenas": 19,
        "calidad": "regular",
        "calificacion": 3.48,
        "notaPromedio": 3.33,
        "resenasOcultas": 18,
        "resena": {
          "texto": "Es buen profesor, tiene un muy buen carisma y explica todo bien en clase. Además le da el libro que usa para todo el curso como material de estudio a los estudiantes y de ahi saca los parciales. Suele dar bonos durante la clase. Si no estudia no va a pasar la materia, cosa que se entiende porque da materias de 4 creditos como integral o multivariado.",
          "pros": "Buen carisma explica bien responde cualquier duda hasta que usted entienda",
          "contras": "le gusta demostrar los teoremas pero esto no lo pregunta durante los parciales",
          "periodo": "2026-2",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Leonardo Arturo Cano",
        "slug": "leonardo-arturo-cano",
        "resenas": 45,
        "calidad": "regular",
        "calificacion": 3.35,
        "notaPromedio": 3.98,
        "resenasOcultas": 43,
        "resena": {
          "texto": "SÍ Y SOLO SÍ SE ES REPITENTE O ESTUDIA MUCHO AUTONOMAMENTE (y no planea ir a clase) Que fastidio de persona. No toma asistencia pero si amenaza con hacelre perder por fallas y se enoja cuando alguien no va a clase. Grosero, es imposible decirle algo. No se aprende nada, la primera clase y ya toca temas de final de semestre, su letra es un jeroglifico completo. Pase la materia pero con estudio autonomo y grabaciones de clases de Martha Cecilia Moreno.",
          "pros": "> Parciales trabajables > Algun parcial tiene puntos extra por problemas adicionales > Pasable SÍ Y SOLO SÍ se estudia autonomamente",
          "contras": "> Letra inentendible > Muy grosero > Absoluutamente nada de pedagogía > Uno termina odiando el cálculo > Anuncia parciales el día anterior WTF",
          "periodo": "2024-2",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Gustavo Cipagauta",
        "slug": "gustavo-cipagauta",
        "resenas": 10,
        "calidad": "regular",
        "calificacion": 3.34,
        "notaPromedio": 3.77,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Si tiene la opcion de inscribir con otro profesor hagalo, en grupo solo estaba pasando una persona con 3, solo nos salvo el hecho de que tuvimos dos profesores y el otro comprendio la situacion en la que estabamos",
          "pros": "Si usted es una persona fanatica de las matematicas y le gusta la matematica pura este es su profe",
          "contras": "la mayor basura de profesor que he tenido no se le entiende nada ademas de que habla pasito",
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
        "nombre": "Omar Duque Gomez",
        "slug": "omar-duque-gomez",
        "resenas": 44,
        "calidad": "regular",
        "calificacion": 3.24,
        "notaPromedio": 3.5,
        "resenasOcultas": 43,
        "resena": {
          "texto": "Es buena gente en parte, califica algo duro; se fija en detalles particulares para bajar nota, ayuda un poco en la nota de quices( que en realidad solo hizo uno pero medio la subió con un taller entregable que colocó).",
          "pros": "A veces tira buenos chistes. Explica bien Buena gente",
          "contras": "Algo impuntual No dejó ver bien la corrección de los parciales Los ejercicios recomendados eran muy diferentes al parcial",
          "periodo": "2024-2",
          "calificacion": 3.5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "David Reyes Gaona",
        "slug": "david-reyes-gaona",
        "resenas": 7,
        "calidad": "mala",
        "calificacion": 3.24,
        "notaPromedio": 3.6,
        "resenasOcultas": 6,
        "resena": {
          "texto": "El tipo es muy bueno, explica bien y hace ejemplos parecidos a los parciales y en general es buena gente",
          "pros": "Explica bien Es buena gente y ayuda Parciales parecidos a ejercicios en clase",
          "contras": "No saca muchas notas los parciales valen todo",
          "periodo": "2023-2",
          "calificacion": 4.2,
          "dificultad": 2.1
        }
      },
      {
        "nombre": "Arcenio Pecha Castiblanco",
        "slug": "arcenio-pecha-castiblanco",
        "resenas": 56,
        "calidad": "regular",
        "calificacion": 3.23,
        "notaPromedio": 3.21,
        "resenasOcultas": 55,
        "resena": {
          "texto": "Es como si Arthur Morgan hubiera estudiado economía y se hubiera criado en el plano cundiboyacense. Este profesor es lo mejor que pudo darme clase durante mi tiempo en la Nacional, no estoy bromeando con esto último. Actualmente estudio en España pero es el único profesor del cual me acuerdo gratamente, valórenlo mientras pueden (Este mensaje lo estoy redactando en 2026, a pesar de que tuve clase con él hace 3 años). Cuando terminé de ver clases con él, salí con el objetivo de que si algún día tenía la oportunidad de enseñar como profesor en una universidad, voy a querer hacerlo como Pecha,…",
          "pros": "Se aprende demasiado, con profundidad y a un ritmo cómodo. Si asisten a clase con disciplina, mostrando dudas, interés, el profesor les trata con el mismo interés que ustedes muestran.",
          "contras": "Si muestran desinterés por la clase o no asisten a clase con disciplina, el maestro les trata con el mismo desinterés que demuestran.",
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "John Alexander Cruz Morales",
        "slug": "john-alexander-cruz-morales",
        "resenas": 31,
        "calidad": "regular",
        "calificacion": 3.17,
        "notaPromedio": 3.47,
        "resenasOcultas": 30,
        "resena": {
          "texto": "De verdad no se hagan el mal de ver con este man, muy mal docente, parciales muy jodidos y un egocéntrico a morir.",
          "pros": null,
          "contras": null,
          "periodo": "2026-2",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Leonardo Arturo Cano Garcia",
        "slug": "leonardo-arturo-cano-garcia",
        "resenas": 9,
        "calidad": "regular",
        "calificacion": 3.16,
        "notaPromedio": 3.33,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Es matematico. Yo creo que esa es la diferencia fundamental de este profesor con los otros profesores de calculo para no matematicos. La verdad no se que hace dictando a no matematicos pero bueno. La verdad este profesor es para el que le gustan las matematicas, no es facil entenderle pero si uno no esta completamente perdido es chevere porque va mas a profundidad no solo a aprenderse las formulas para el parcial. No diria que su pedadogia sea la mejor, yo creo que la mitad del curso no entendia y el seguia adelante con los que entendieron, y no es muy organizado y a veces la letra no se le…",
          "pros": "Es matematico Es apasionado por las matematicas Los chistes Les gusta ser riguroso a veces Los chistes x2 Uno no se aburre",
          "contras": "Es matematico Tal vez a veces regaña un poco duro si siente que es por falta de atención? veces escribe matematicamente y nadie entiende xd Escribe feo Algo desorganizado No se preocupa por que todo el curso entienda…",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Juan Carlos Mendivelso Moreno",
        "slug": "juan-carlos-mendivelso-moreno",
        "resenas": 40,
        "calidad": "regular",
        "calificacion": 3.13,
        "notaPromedio": 3.81,
        "resenasOcultas": 39,
        "resena": {
          "texto": "Cuando metí con Mendivelso me dijeron que eso era un suicidio, que por mucho pasaba con 3, que muchos reprueban, que exige mucho nivel de matemáticas, etc, etc... ¿Lo considero trivial? No en realidad, pero de que es imposible pasar o con buena nota tampoco. Eso sí, evidentemente es una gran desventaja en PAPPI comparado con Germán, pero siento que el curso es de muy buena calidad técnica, y definitivamente toca ver con él si hay interés especial por el tema, en vez de pasar por pasar. Si creo que hay cosas por mejorar, personalmente me chocó mucho algunas de las prácticas que no eran…",
          "pros": "Manejo del tema Tareas sencillas (tal vez cambie) Eliminó el peor quiz y la peor tarea de cada estudiante",
          "contras": "Muy rápido (responde dudas pero muy a la carrera porque siempre intenta abarcar mucho) Muy cerrado a quejas y reclamos No deja tomar apuntes en la corrección de los parciales",
          "periodo": "2025-1",
          "calificacion": 4,
          "dificultad": 4
        }
      },
      {
        "nombre": "Javier Mauricio Sierra",
        "slug": "javier-mauricio-sierra",
        "resenas": 31,
        "calidad": "regular",
        "calificacion": 3.11,
        "notaPromedio": 3.67,
        "resenasOcultas": 30,
        "resena": {
          "texto": "El profesor como tal es buena gente y no le molesta devolverse en medio de una explicación si algo no está claro, su principal problema es que es extremadamente desordenado: siempre llega al menos 20 minutos tarde, no introduce los temas adecuadamente sino que espera que todxs dominen los conceptos y el comienza a resolver ejercicios, explica usando una tablet pero las notas son difíciles de entender por el desorden. Solo inscriba con él si es bueno con el estudio autónomo o si le sabe mucho a las matemáticas. Si inscribió con él o le tocó con él procure asistir a todas las clases, ya que en…",
          "pros": "- Un 25% es prácticamente regalado y sale de ejercicios de Khan Academy. - A diferencia de lo que hizo en virtualidad, siempre regalaba 3 o 5 décimas a todxs en los parciales. - Agradable y comprensivo. - Hizo…",
          "contras": "- Llega tarde y es desordenado - SIEMPRE califica mal algunos puntos del parcial, por lo que tiene que revisar apenas los entrega, pero no pone ningún problema para arreglar la nota. - Empezamos 50, al parcial final…",
          "periodo": "2021-10 (virtual)",
          "calificacion": 3.8,
          "dificultad": 4
        }
      },
      {
        "nombre": "Jose Ruben Niño Quevedo",
        "slug": "jose-ruben-nino-quevedo",
        "resenas": 5,
        "calidad": "regular",
        "calificacion": 3.04,
        "notaPromedio": 3.26,
        "resenasOcultas": 4,
        "resena": {
          "texto": "No lo recomiendo, es desorganizado y no se le entiende cuando explica. Deja videos de youtube de otro profesor para que estudiemos con eso a ver si entendemos. Con razón se puso \"no informado\".",
          "pros": null,
          "contras": "Parciales muy difíciles.",
          "periodo": "2021-2",
          "calificacion": 1.5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Brayan Stiven Cabra Ramirez",
        "slug": "brayan-stiven-cabra-ramirez",
        "resenas": 28,
        "calidad": "mala",
        "calificacion": 2.91,
        "notaPromedio": 3.62,
        "resenasOcultas": 27,
        "resena": {
          "texto": "pesimo, el señor solo repite el Stewart, los parciales no tenían nada que ver con los talleres que no es claro cuales hay que entregar y cuales no, nunca responde el correo y los ejemplos que da son muy sencillos, llega tarde a clase y en las clases no se veia nada en el tablero que usaba, con los talleres que deja, se puede subir la nota pero es de trabajo autonomo",
          "pros": "-Si uno dice DENTRO DE LA CLASE cuadra una sesión de ejercicios (pero es maluca y la mayoría de ejercicios no los resolvía solo medio los planteaba \"y eso uds ya lo saben entonces lo hacen en casa\"",
          "contras": "-Impuntual -No dio notas, si no hasta el final -No contesta los correos -Solo repite el libro -No sabe explicar",
          "periodo": "2020-10 (virtual)",
          "calificacion": 2,
          "dificultad": 2.9
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
        "nombre": "Diego Gerardo Roldan Jimenez",
        "slug": "diego-gerardo-roldan-jimenez",
        "resenas": 14,
        "calidad": "regular",
        "calificacion": 2.86,
        "notaPromedio": 3.36,
        "resenasOcultas": 13,
        "resena": {
          "texto": "Es un profesor amable y da puntos por participar. Pero, su metodología de enseñanza no creo que sea la más idónea, ya que pasa diapositivas basadas (copiadas casi en su totalidad del libro guía) y llega a explicar cosas de forma superficial en ocasiones. Sus parciales suelen traer demostraciones y muchos ejercicios lo cual, aunque facilite pasar es mucho más laborioso, siendo que suele hacer 3 parciales (cada uno 25%) y el restante solo quices semanales. Si alguien tiene alguna duda se toma su tiempo en responder.",
          "pros": "Se deja alta la nota si se esfuerza, amable y resuelve dudas. Suele dejar ejercicios prácticos en clase (naturalmente rápidos)",
          "contras": "Su enseñanza llega a ser muy tosca y en ocasiones muy superficial.",
          "periodo": "2026-2",
          "calificacion": 3.9,
          "dificultad": 3.7
        }
      },
      {
        "nombre": "Juan Andres Montoya Arguello",
        "slug": "juan-andres-montoya-arguello",
        "resenas": 39,
        "calidad": "regular",
        "calificacion": 2.82,
        "notaPromedio": 4.16,
        "resenasOcultas": 37,
        "resena": {
          "texto": "En ninguna de las clases con él logre entender el tema de calculo diferencial con este profesor. Pareciera que no estuviera presente en el salon cuando explica el calculo diferencial, o mete a alguien externo irrelevante al tema. Bastante confuso. Lo mas dificil fue el ultimo parcial que nos dejo, un cosa extremadamente dificil, nada de lo que se miro en tema pude haber estudiado para este parcial.",
          "pros": "Si lo logra tener como reemplazo a su profesor orignial de calculo diferencial, el ultimo parcial no afecta su promedio mucho. Si logra tener como reemplazo a su profesor original de calculo diferencial, y va perdiendo…",
          "contras": "Parciales Extremadamente dificiles. Desconexion con el salon.",
          "periodo": "2025-2",
          "calificacion": 1.6,
          "dificultad": 4.7
        }
      },
      {
        "nombre": "Cristian Ricardo Velázquez Cantor",
        "slug": "cristian-ricardo-velazquez-cantor",
        "resenas": 10,
        "calidad": "mala",
        "calificacion": 2.8,
        "notaPromedio": 3.61,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Buen profesor, muy desordenado a la hora de escribir en el tablero. Las clases las prepara poco pero es fácil de entender. Da muchas oportunidades en cuanto a parciales y sus parciales son faciles.",
          "pros": "Parciales fáciles. Explica muy bien. Da talleres y libros guía para estudiar. Muchos puntos de los parciales los saca de talleres.",
          "contras": "Desordenado Poco puntual Profesor primerizo",
          "periodo": "2023-1",
          "calificacion": 4,
          "dificultad": 2
        }
      },
      {
        "nombre": "Angela Rocío Fuquen Tibatá",
        "slug": "angela-rocío-fuquen-tibatá",
        "resenas": 3,
        "calidad": "mala",
        "calificacion": 2.8,
        "notaPromedio": 2.1,
        "resenasOcultas": 1,
        "resena": null
      },
      {
        "nombre": "Efrain Camilo Pardo Garcia",
        "slug": "efrain-camilo-pardo-garcia",
        "resenas": 39,
        "calidad": "mala",
        "calificacion": 2.78,
        "notaPromedio": 4.18,
        "resenasOcultas": 38,
        "resena": {
          "texto": "No lo haga compa, es demasiado incompetente para impartir una asignatura de la ni siquiera es capaz de resolver sus propios ejercicios",
          "pros": "De verdad jaja es muy malo, no lo haga compa",
          "contras": "Todo mal",
          "periodo": "2021-10 (virtual)",
          "calificacion": 1.5,
          "dificultad": 1.5
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
        "nombre": "Franqui Solis Cardenas Poloche",
        "slug": "franqui-solis-cardenas-poloche",
        "resenas": 48,
        "calidad": "mala",
        "calificacion": 2.74,
        "notaPromedio": 3.84,
        "resenasOcultas": 47,
        "resena": {
          "texto": "Diría que es un profe un poco agridulce. Sus clases son prácticamente el explicando un poco de teoría y después haciendo varios ejercicios al respecto aunque realmente uno no puede asimilar lo que dijo ya que da muy poco tiempo porque el cambia de tema muy rápido, es alguien bastante apurado. Además sus explicaciones son super básicas y aburridas, uno se siente incompleto así que la autonomía es importante. Respecto a las calificaciones son 3 parciales, cada uno del 25% y quices y talleres de 25%,ademas un supletorio opcional. Los parciales son 4 puntos y 1 de ellos salen de algún quiz o…",
          "pros": "Se deja hablar(a veces) Talleres y quices fáciles, se pueden en grupo A veces se puede hacer trampa Es bastante flexible con las entregas de los quices/talleres y con la realización de los parciales Responde preguntas…",
          "contras": "Parciales jodidos Clases aburridas Toma asistencia cuando ve poca gente este semestre todos los parciales fueron de preguntas abiertas",
          "periodo": "2025-2",
          "calificacion": 3,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Manuel Jair Medina Luna",
        "slug": "manuel-jair-medina-luna",
        "resenas": 24,
        "calidad": "mala",
        "calificacion": 2.73,
        "notaPromedio": 3.4,
        "resenasOcultas": 23,
        "resena": {
          "texto": "Con este profesor se necesita mucho estudio autonomo, puesto que en las clases solo lee pantallazos del Stewart y hace uno que otro ejercicio, sin embargo los ejercicios que realiza son muy sencillos para los talleres de mas de 100 puntos que deja, sin embargo, en los parciales nunca aparecera un solo ejercicio de esos 100, ni siquiera parecidos.",
          "pros": "-Si le gusta el estudio autonomo, este es su profe. -Los talleres y quices ayudan bastante en la nota. -Es facil de pasar si trabaja mucho",
          "contras": "No se le da bien la pedagogia. Tiende a cancelar las clases o hacerlas virtuales con poco tiempo de antelacion. Nunca contesta correos y menos en persona porque siempre esta corriendo",
          "periodo": "2021-10 (virtual)",
          "calificacion": 2,
          "dificultad": 3
        }
      },
      {
        "nombre": "Edixon Manuel Rojas Santana",
        "slug": "edixon-manuel-rojas-santana",
        "resenas": 36,
        "calidad": "mala",
        "calificacion": 2.72,
        "notaPromedio": 2.97,
        "resenasOcultas": 35,
        "resena": {
          "texto": "edixon es un completo hp es una basura como persona y trata a todos como basura no es capaz de entender que un estudiante puede tener dudas o no comprender algo , tira durisimo en los parciales y es un lloron porque le quitaron su curso de cedo . Ademas es un veneco hp y habia un malparido de matematicas que tambien es veneco y se la pasaba chupandole la verga el hp ese y por eso pasaba la materia",
          "pros": "sabe los temas",
          "contras": "ser una basura de ser humano ser un hijueputa su favoritismo por ese matematico chupavergas veneco",
          "periodo": "2026-1",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Armando Zarruk Rivera",
        "slug": "armando-zarruk-rivera",
        "resenas": 4,
        "calidad": "regular",
        "calificacion": 2.68,
        "notaPromedio": 3.62,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Ñero uno aprende es gracias a los talleres y a GEA, porque este man no aclara los talleres, adicionalmente vi pasar a muchos porque el man ni es atento en los parciales y sacaban su celular o apuntes sin que se diera cuenta.",
          "pros": "Deja talleres que ayudan a subir las notas de los parciales y explica bien.",
          "contras": "Uy mano este man deberia ser serio, hasta en los parciales llega tarde, no avisa que cancela clase con anticipación y además puede enviar un reemplazo.",
          "periodo": "2024-2",
          "calificacion": 2,
          "dificultad": 3
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
        "nombre": "Mauricio Lopez Hernandez",
        "slug": "mauricio-lopez-hernandez",
        "resenas": 26,
        "calidad": "mala",
        "calificacion": 2.46,
        "notaPromedio": 3.5,
        "resenasOcultas": 25,
        "resena": {
          "texto": "el profesor es terrible, no tiene pedagogia, califica duro y es tosco al responder las dudas. Los parciales son virtuales pero duros, no se dejan muy altos ni siquiera con IA, el man no se deja hablar y la clase no es para nada agradable.",
          "pros": "parciales virtuales",
          "contras": "parciales virtuales pero jodidos JAJAJA califica duro no se deja tan alta",
          "periodo": "2026-1",
          "calificacion": 1.6,
          "dificultad": 4.7
        }
      },
      {
        "nombre": "Ivan Castro Chadid",
        "slug": "ivan-castro-chadid",
        "resenas": 55,
        "calidad": "mala",
        "calificacion": 2.44,
        "notaPromedio": 3.63,
        "resenasOcultas": 54,
        "resena": {
          "texto": "No sé cómo llegó a ser profesor, pareciera que se fuera a quedar dormido en medio de la explicación, y pareciera que ni siquiera pudiera resolver los problemas que explica. Todas las fórmulas que escribe en el tablero, las usará en los parciales, entonces es pasable si después de cada clase estudia lo que vio en clase y hace varios ejercicios por su cuenta, pero a Chadid como tal no se le entiende nada.",
          "pros": "Se puede pasar si estudia autónomamente Deja tomar fotos del tablero",
          "contras": "No se le entiende nada Requiere MUCHO estudio autónomo A veces desperdicia hasta una hora de clase hablando cháchara",
          "periodo": "2025-2",
          "calificacion": 2.1,
          "dificultad": 4
        }
      },
      {
        "nombre": "Luis Roberto Quicazan Acosta",
        "slug": "luis-roberto-quicazan-acosta",
        "resenas": 22,
        "calidad": "mala",
        "calificacion": 2.21,
        "notaPromedio": 3.25,
        "resenasOcultas": 21,
        "resena": {
          "texto": "Este profesor me cambió la vida. Como estudiante de colegio público, al llegar a la Nacho, este fue el primer buen profesor de mi vida. Una cuchilla completa pero dedicado; nos enseñó a sumar, restar, multiplicar y dividir, para luego darnos las bases del cálculo diferencial e integral. Dedicación infinita a cada estudiante!! Este man es fuera de serie.",
          "pros": "Dedicación Tutorías individuales Puntos por participacion",
          "contras": "Duro con las notas si uno era de ciencias o ingeniería.",
          "periodo": "antes",
          "calificacion": 4.9,
          "dificultad": 3
        }
      },
      {
        "nombre": "Myriam Leonor Campos Florez",
        "slug": "myriam-leonor-campos-florez",
        "resenas": 48,
        "calidad": "mala",
        "calificacion": 2.06,
        "notaPromedio": 3.04,
        "resenasOcultas": 47,
        "resena": {
          "texto": "Ella es como una abuelita adorable que regala los cursos es tan adorable y amable con todos nosotros . Explica todos los temas hace parciales y quices justos , no tengo quejas de una profesora tan amorosa me recuerda a mi abuelita",
          "pros": "Es como una abuelita buena gente solo le faltaba llamarnos mijitos",
          "contras": "nada , es super adorable",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2.3
        }
      },
      {
        "nombre": "Rene Erlin Castillo",
        "slug": "rene-erlin-castillo",
        "resenas": 31,
        "calidad": "mala",
        "calificacion": 1.68,
        "notaPromedio": 2.35,
        "resenasOcultas": 30,
        "resena": null
      },
      {
        "nombre": "John Alexander Narvaez Cancimansi",
        "slug": "john-alexander-narvaez-cancimansi",
        "resenas": 2,
        "calidad": "mala",
        "calificacion": 1.5,
        "notaPromedio": 3.5,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Es un violento, un misógino y un temperamental. La materia con él es fácil pero es estresante ya que tiene una personalidad horrible. No lo recomiendo.",
          "pros": "Materia pasable, creo que es fácil porque viene de colegio y no tiene tan buen nivel",
          "contras": "Grosero con las mujeres, comentarios fuera de lugar",
          "periodo": "2024-2",
          "calificacion": 1.5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Yiby Karolina Morales Pinto",
        "slug": "yiby-karolina-morales-pinto",
        "resenas": 17,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 16,
        "resena": {
          "texto": "un ser de luz, la amo",
          "pros": "se preocupa por estudiante parciales trabajables",
          "contras": "ninguno",
          "periodo": "2018-20",
          "calificacion": 5,
          "dificultad": 3
        }
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
        "nombre": "Stiven Leonardo Silva Castillo",
        "slug": "stiven-leonardo-silva-castillo",
        "resenas": 9,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 8,
        "resena": null
      },
      {
        "nombre": "José Manuel Chauta Torres",
        "slug": "josé-manuel-chauta-torres",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Vea, yo perdí esta materia con 2.9 pero, Chauta es y será el mejor profesor de calculo de todos, se preocupa, enseña bien, es amigable, se deja hablar, Chauta es un amor de persona uwu",
          "pros": null,
          "contras": null,
          "periodo": "2019-20",
          "calificacion": 5,
          "dificultad": 2.8
        }
      },
      {
        "nombre": "Oscar Alberto Rodriguez Melendez",
        "slug": "oscar-alberto-rodriguez-melendez",
        "resenas": 6,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Pésimo profesor, su enseñanza se basa prácticamente en nombrar temas por encima, el curso es muy óptimo para gente que ya vió la materia, de lo contrario será una pesadilla, nunca deja ejercicios y generalmente los quices son imposibles de pasar. Parece ameno y abierto a los estudiantes, sin embargo, su atención hacia ellos es precaria, tiene preferencias por estudiantes que a él le parezcan que saben o que él crea que deben pasar de forma muy arbitraria. Sus parciales contienen temas o ejercicios de cosas que nunca explicó, por lo que generalmente tienden a ser muy complicados, de forma…",
          "pros": null,
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 2,
          "dificultad": 4.6
        }
      },
      {
        "nombre": "Camilo Andrés Rodríguez Rodríguez",
        "slug": "camilo-andrés-rodríguez-rodríguez",
        "resenas": 5,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Es el mejor profesor para inscribir cualquier matemática, es amable, explica muy bien, es como si hola soy Germán y Julio profe tuvieran un hijo, en resumen, es muy cool, da notas a tiempo, los parciales son de lo que se ha visto y está dispuesto a responder dudas. Hace que uno le tome cariño a la materia",
          "pros": "Llega a tiempo, es serio pero mantiene un muy buen ambiente de clase. Inspira a estudiar la materia, le hace tomar gusto",
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Carlos Andres Giraldo Hernández",
        "slug": "carlos-andres-giraldo-hernández",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 4,
        "resena": null
      },
      {
        "nombre": "Wilmar Reinerio Bolaños Chavez",
        "slug": "wilmar-reinerio-bolaños-chavez",
        "resenas": 5,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 4,
        "resena": {
          "texto": "es un excelente profesor, su manera de explicar es tan elegante como es posible ser y sus parciales son pasables siempre y cuando se estudie. Da oportunidades para evitar masivas cancelaciones y hace lo posible para ser entendido. Pero es una gueva. como es posible que dejara a 120 estudiantes (incluyendo a su servidor) con nota de (0,0) a los primiparos (como su servidor) ese (0,0) los echo. y ahora les toca inscribir integrales con pecha. eso solo le paso a el a ningún otro.",
          "pros": "-es puntual -esta dispuesto a resolver preguntas",
          "contras": "no sabe como utilizar el SIA para subir notas.",
          "periodo": "2019-20",
          "calificacion": 2.5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Juan Daniel Lopez",
        "slug": "juan-daniel-lopez",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Es el mejor profesor con el que se puede inscribir cualquier materia de matemáticas, es fácil pasar y difícil dejarla alta, los puntos para parciales salen de los talleres que deja, sus explicaciones son precisas, solo demuestra lo necesario y se aprende resto, es muy bueno",
          "pros": "Quiz y talleres completos Puntual Buena persona Parciales pasables",
          "contras": "Ninguno, es el mejor",
          "periodo": "2019-10",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Christian Nolasco Serna",
        "slug": "christian-nolasco-serna",
        "resenas": 3,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 2,
        "resena": {
          "texto": "-",
          "pros": null,
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Paul Harritson Villamil Hernandez",
        "slug": "paul-harritson-villamil-hernandez",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 2,
        "resena": null
      },
      {
        "nombre": "Fabian Ricardo Muñoz Reyes",
        "slug": "fabian-ricardo-muñoz-reyes",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Cuando la vi era estudiante de maestría, los parciales son largos, pero es muy buen profesor, explica claro, se le entiende, deja talleres antes del parcial que valen el 25%",
          "pros": "Muy buen pedagogo",
          "contras": "Talleres y parciales largos",
          "periodo": "2016-20",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Fausto Camilo Bolivar Barbosa",
        "slug": "fausto-camilo-bolivar-barbosa",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Uno de los mejores profes que he tenido, no es rajón y se aprende bastante. Le importa más dejarlo a uno con bases para materias más avanzadas que las propias notas, además de que es muy severo como persona.",
          "pros": "Parciales fáciles explica bien en general el ambiente de la clase es muy ameno",
          "contras": "a veces corre mucho y se equivoca",
          "periodo": "2018-20",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jaime Andrés Gómez Ortiz",
        "slug": "jaime-andrés-gómez-ortiz",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "es un excelente profesor, explica muy bien, es atento, ayuda mucho en las tutorias y siempre se queda un poco mas en clases resolviendo dudas a quienes se queden, sus parciales son pasables si se estudia, sino fijo se pierde y es una persona chevere y sencilla",
          "pros": "enseña bien resuelve dudas es amable y paciente es divertido, amable y atento",
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 5,
          "dificultad": 4
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
        "nombre": "Hector Camilo Chaparro Gutierrez",
        "slug": "hector-camilo-chaparro-gutierrez",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Malisimo!! pero malo con ganas, pone unas diapositivas y recita el libro de calculo tal cual, super aburridoras sus clases, no se le entiende nada, mejor estudiar por cuenta de uno ya que se confunde y explica enredado, me tire la materia con el y al siguiente semestre la vi con Nieto y fue un paseo... nieto si explica bien",
          "pros": "Ninguno",
          "contras": "Todo lo que ya dije",
          "periodo": "2017-10",
          "calificacion": 1,
          "dificultad": 3
        }
      },
      {
        "nombre": "Juan Carlos Juajibioy Otero",
        "slug": "juan-carlos-juajibioy-otero",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Facil y buena gente aunque no se aprende mucho",
          "pros": null,
          "contras": null,
          "periodo": "2016-10",
          "calificacion": 3,
          "dificultad": 3
        }
      },
      {
        "nombre": "Paulo Enrique Fernandez Moncada",
        "slug": "paulo-enrique-fernandez-moncada",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Rafael Melo Jimenez",
        "slug": "rafael-melo-jimenez",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es un profesor que utiliza muchísimo el tablero, organizando todas las explicaciones allí, junto con dibujos que permiten visualizar de una manera amena los temas que se explican. Evalúa lo que enseña, y tiene en cuenta el orden con el que se ejecuten los ejercicios.",
          "pros": "Muy ordenado, letra bonita y dibujos acertados. Evalúa lo que enseña. Usa varios ejemplos.",
          "contras": "Habría sido bueno poder acabar los temas pero hubo problemas de contratación.",
          "periodo": "2016-20",
          "calificacion": 4.5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Ronald Gentil Rodriguez Giraldo",
        "slug": "ronald-gentil-rodriguez-giraldo",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Al principio una se lleva la idea que ya valió madres. pero al final sale uno con una idea totalmente distinta, se pone en los zapatos del estudiante y da oportunidades con el examen supletorio. ayuda bastante.",
          "pros": "Explica Muy bien da parcial nivelatorio",
          "contras": null,
          "periodo": "2016-10",
          "calificacion": 5,
          "dificultad": 2
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
        "nombre": "Camilo Andres Molano Mendoza",
        "slug": "camilo-andres-molano-mendoza",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Carolina Albarracin Hernandez",
        "slug": "carolina-albarracin-hernandez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Daniel Felipe Castro Ovalle",
        "slug": "daniel-felipe-castro-ovalle",
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
      },
      {
        "nombre": "Sandra Marleny Perilla Monroy",
        "slug": "sandra-marleny-perilla-monroy",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Walter Andres Paez Gaviria",
        "slug": "walter-andres-paez-gaviria",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
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
        "nombre": "Edward Nicolas Cañon",
        "slug": "edward-nicolas-canon",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.9,
        "resenasOcultas": 0,
        "resena": {
          "texto": "El mejor profe que me he encontrado, explica SUPER BIEN, se le entiende mucho, las clases son bastante amenas (asi hayan sido de 2 a 4, que en ese horario llega a dar sueño :v), las notas son asi: 4 quices (2 virtuales y 2 presenciales) los 4 en grupo y valen el 25%, el 1 y 3 parcial valen el 25% c/u, y para el 2do parcial, el 25% de ese corte queda repartido asi: 60% para el parcial y 40% para exposiciones sobre aplicaciones de la integral (exposiciones bastante buenas, si se lo propone puede aprender bastante ahi), pero en la exposicion tambien manda un trabajo escrito, que dado el caso…",
          "pros": "Todo v: explica muy bien, facil dejarla alta, muy buenas clases, va a aprender bien los temas, que mas se le pide a la vida v:",
          "contras": "que las clases con el tienen un final v:",
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
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
        "nombre": "Martha Mancera",
        "slug": "martha-mancera",
        "resenas": 21,
        "calidad": "buena",
        "calificacion": 4.79,
        "notaPromedio": 4.34,
        "resenasOcultas": 20,
        "resena": {
          "texto": "la mejor profesora de matemáticas que he tenido en mi vida, explica claramente, resuelve dudas y enseña de una manera intuitiva que establece buenos fundamentos para",
          "pros": null,
          "contras": null,
          "periodo": "2022-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Jason Ricardo Hernandez Mogollon",
        "slug": "jason-ricardo-hernandez-mogollon",
        "resenas": 16,
        "calidad": "buena",
        "calificacion": 4.79,
        "notaPromedio": 4.46,
        "resenasOcultas": 15,
        "resena": {
          "texto": "Excelente profesor, muy puntual y comprometido con la enseñanza. Es muy amable y siempre resolvió dudas, además hizo actividades bono para subir notas. Califica con parciales, quizzes y talleres, pero si estudia es bastante cinqueable porque evalúa lo que explica en clase.",
          "pros": "-Muy amable -Le interesa que la gente aprenda -Prepara sus clases",
          "contras": "-Suele ser un poco más exigente en los parciales, pero con esfuerzo se pasa -Es muy flexible en cuanto a entregas",
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Diego Arturo Niño Torres",
        "slug": "diego-arturo-niño-torres",
        "resenas": 19,
        "calidad": "buena",
        "calificacion": 4.76,
        "notaPromedio": 4.59,
        "resenasOcultas": 18,
        "resena": {
          "texto": "El profesor explica excelente, tiene mucha paciencia y se esmera en que todos los estudiantes entiendan. Los parciales son justos y para pasarlos obviamente hay que poner mucha atención a clase. Él permite cualquier tipo de pregunta y la responderá con la mayor amabilidad posible.",
          "pros": null,
          "contras": null,
          "periodo": "2019-2",
          "calificacion": 5,
          "dificultad": 2.7
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
        "nombre": "Sebastian Higuera Rincon",
        "slug": "sebastian-higuera-rincon",
        "resenas": 41,
        "calidad": "buena",
        "calificacion": 4.73,
        "notaPromedio": 3.68,
        "resenasOcultas": 40,
        "resena": {
          "texto": "Un excelente profesor en términos generales. Explica los temas de manera didáctica, lo que facilita su comprensión, y es justo en la elaboración de los parciales, ya que incluyen únicamente lo visto en clase. Como recomendación, es fundamental realizar los talleres que deja, ya que son una excelente preparación para los exámenes.",
          "pros": null,
          "contras": null,
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Jaime Andres Robayo Mesa",
        "slug": "jaime-andres-robayo-mesa",
        "resenas": 57,
        "calidad": "buena",
        "calificacion": 4.65,
        "notaPromedio": 4.28,
        "resenasOcultas": 56,
        "resena": {
          "texto": "La materia fue muy buena, el profesor siempre se esmerama mucho en que se entendieran todos los temas. No era prepotente",
          "pros": null,
          "contras": null,
          "periodo": "2020-10 (virtual)",
          "calificacion": 5,
          "dificultad": 5
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
        "nombre": "Gustavo Eduardo Arengas Reines",
        "slug": "gustavo-eduardo-arengas-reines",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.56,
        "notaPromedio": 4.21,
        "resenasOcultas": 9,
        "resena": {
          "texto": "El profesor domina el tema, mantiene una linea y se preocupa porque sus estudiantes entiendan el tema. Da muchos espacios para dudas y trata de explicar muy detalladamente sus procedimientos. Maneja las guías que envía el departamento y todos los quices y parciales salen de allí, así que si desarrolla y entiende la guía, será fácil la materia, aunque lo único malo sea que son bastantes ejercicios y la clase se puede tonar monótona y aburrida. Pero en general, son muy buenas explicaciones de todos los temas.",
          "pros": "Explica bien Es buena gente Sabe del tema Ayuda a los estudiantes en cuanto a dudas",
          "contras": "Clases monótonas",
          "periodo": "2020-10 (virtual)",
          "calificacion": 5,
          "dificultad": 4
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
        "nombre": "Fabio Alejandro Calderon Mateus",
        "slug": "fabio-alejandro-calderon-mateus",
        "resenas": 22,
        "calidad": "buena",
        "calificacion": 4.52,
        "notaPromedio": 4.25,
        "resenasOcultas": 21,
        "resena": {
          "texto": "Aunque es un excelente profesor y buena persona me dejó un mal sabor de boca cuando renunció y nos pusieron como profesor a Pecha. Si bien justificó que la causa de su renuncia era situación personal, nos avisó el último día de la semana de adiciones y cancelaciones por lo que hubo mucha gente que no pudo cancelar la materia. Pudo habernos avisado la clase anterior (Dijo que había enviado su carta de renuncia la clase pasada) :/ Otro punto extra es que el semestre pasado hizo lo mismo con otro grupo que tuvo y también los dejó mamando.",
          "pros": "El mejor profesor para ver cualquier materia de Mates",
          "contras": "Puede que renuncie y te coloquen a Pecha :v",
          "periodo": "2022-2",
          "calificacion": 1.5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Fabio Calderón Mateus",
        "slug": "fabio-calderón-mateus",
        "resenas": 22,
        "calidad": "buena",
        "calificacion": 4.42,
        "notaPromedio": 4.12,
        "resenasOcultas": 21,
        "resena": {
          "texto": "Ví con Fabio en 2023-1 Inscribí álgebra lineal, y terminé viendo con Pecha. Al final pasé con Pecha, pero bueno, eso no viene al caso. Puede que Fabio sí sea un buen profesor, pero me parece un gesto muy irresponsable y descarado de su parte que haya cancelado; de remate la universidad nos dió el gran desafio de ver con Arsenio. No es la primera vez que deja tirado a un grupo, muchos fueron afectados por eso y se vieron atrasados en sus carreras, incluso eso hizo que hubieran cuellos de botella en la materia de álgebra lineal para el siguiente semestre.",
          "pros": "- Es un buen profesor en su pedagogía y métodología.",
          "contras": "-Irresponsabilidad a la hora de tomar grupos y cancelarlos a últimos momento por sus intereses personales. Descarado.",
          "periodo": "2023-1",
          "calificacion": 1.5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Hernan Garzon Gutierrez",
        "slug": "hernan-garzon-gutierrez",
        "resenas": 53,
        "calidad": "buena",
        "calificacion": 4.37,
        "notaPromedio": 4.32,
        "resenasOcultas": 52,
        "resena": {
          "texto": "Tratare de ser objetivo, por mi parte es buen profesor, y estos son mis argumentos que son los siguientes: - Entrega todo el programa desde el principio de manera organizada (temas que veremos, fechas de los parciales, que notas sacará, la duración de cada tema aproximadamente, su correo, etc). - Deja tareas para estudiar por nuestra cuenta (que sirve bastante) - Deja talleres, aunque no los califica, sirven mucho para los parciales (hay veces que los ejercicios de los talleres están en los parciales) - Los parciales los califica la siguiente clase (nos dice cuales son las respuestas…",
          "pros": "- Califica el procedimiento y si argumentas de buena manera, te puede subir la nota (si ve el profe que si las cosas están bien hechas, sino, no intentes explicar de más) - A ratos hace chistes para entretener la clase…",
          "contras": "- Llega tarde (aprox: 15 min). - La mayoría de las veces sus notas solo son 3 parciales que valen lo mismo, asi que no hay que confiarse demasiado.",
          "periodo": "2026-1",
          "calificacion": 4.4,
          "dificultad": 3.6
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
        "nombre": "Andres Chacon Capera",
        "slug": "andres-chacon-capera",
        "resenas": 27,
        "calidad": "buena",
        "calificacion": 4.26,
        "notaPromedio": 3.74,
        "resenasOcultas": 26,
        "resena": {
          "texto": "Se nota su esfuerzo de enseñar y domina el tema, pero el 80% del aprendizaje será de forma autónoma, descuidar esta materia como primíparo es un grave error. Si tiene malas bases de matemáticas o no sabe la mayoría de los trucos con la trigonometría, no se ponga la soga al cuello y cometa mi error, mejor preparese para verla el otro semestre y no se tire el promedio en primer semestre y tener que volverla a ver.",
          "pros": "+ Hace sesión de dudas antes de parciales. + Permite contactarlo por correo. + Ayuda con sólo tomar 5 notas de los 8 quices que hace por semestre para la definitiva. + En la últimas sesiones introdujo las bases para…",
          "contras": "- Los quices o los hacía al inicio o al final de la clase. Tuve problemas ya que tenia la clase de cálculo entre otras dos materias y el salón quedaba lejos. - Pocos ejercicios en clase, la mayor parte se dedica a la…",
          "periodo": "2022-1",
          "calificacion": 3,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Hector Fabian Ramirez Ospina",
        "slug": "hector-fabian-ramirez-ospina",
        "resenas": 51,
        "calidad": "regular",
        "calificacion": 4.23,
        "notaPromedio": 3.86,
        "resenasOcultas": 50,
        "resena": {
          "texto": "Héctor es la cabra, las clases con el son pesadas pero explica bien, califica los parciales sobre 6, la clase antes del parcial se vota 1 o 2 ejercicios que van a salir en el parcial y a lo largo del semestre va diciendo que puntos salen, anotelos y los ejercicios del taller son muy díficiles busquen ejercicios parecidos a los de la clase en el taller para no perder el tiempo haciendo ejercicios jodidos que no salen",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Francisco Albeiro Gomez Jaramillo",
        "slug": "francisco-albeiro-gomez-jaramillo",
        "resenas": 19,
        "calidad": "buena",
        "calificacion": 4.17,
        "notaPromedio": 4.35,
        "resenasOcultas": 18,
        "resena": {
          "texto": "Si hay algo que destacar de Francisco es que disfruta mucho enseñando este curso, y lo demuestra. La metodología es sencilla: las clases son teóricas y los entregables son tareas relacionadas a las temáticas del curso, junto con un proyecto (en grupo). Todo el semestre consiste en aprender sobre Machine Learning desde un enfoque matemático, y el profesor se esfuerza por hacerlo de manera interesante y consistente, conectando el conocimiento teórico con sus aplicaciones prácticas en la vida real.",
          "pros": "Tiene explicaciones interesantes y divertidas Flexible con las entregas",
          "contras": "Ligeramente impuntual Puede desaparecer a veces",
          "periodo": "2026-1",
          "calificacion": 4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Yesica Paola Suarez Gomez",
        "slug": "yesica-paola-suarez-gomez",
        "resenas": 11,
        "calidad": "buena",
        "calificacion": 4.15,
        "notaPromedio": 4.15,
        "resenasOcultas": 10,
        "resena": {
          "texto": "Es una buena profesora, explica bien los temas y lleva un orden claro, tiene un cuadernillo virtual con todos los apuntes de clase para que se pueda repasar y deja ejercicios opcionales del Stewart después de cada clase para reforzar los temas; sin embargo, las clases de vez en cuando se tornaban aburridas y monótonas. En general, los parciales y quices son trabajables, si se ha estudiado, puesto que la mayoría de puntos son de ejercicios que se trabajaron en clase. Con respecto al paro, la profesora fue flexible y nos dejó redefinir los porcentajes de evaluación, en un principio se iban a…",
          "pros": "Explica bien Buena gente Parciales y quices trabajables Deja ejercicios para estudiar Ordenada con los temas Cuadernillo virtual",
          "contras": "Clase algo monótona y aburrida Forma de evaluación",
          "periodo": "2021-10 (virtual)",
          "calificacion": 4.3,
          "dificultad": 4.2
        }
      },
      {
        "nombre": "Alina Fedosova",
        "slug": "alina-fedosova",
        "resenas": 52,
        "calidad": "buena",
        "calificacion": 4.11,
        "notaPromedio": 4.22,
        "resenasOcultas": 51,
        "resena": {
          "texto": "que profesora tan espectacular, explica todo detalladamente, no le importa detenerse incluso devolverse para explicarte mejor, antes de los pariales deja talleres cortos parecidos a los ejercisios que saldran en el parcial, es demasiado facil pasarle incluso sin ir a clase puesto que ella sue sus notas y archvos al moodle y esos tambein vienen explicados y detallados, volveria a meter mas materia con ella",
          "pros": "no tira a matar es facil de pasar demasiado amable y comprensible explica perfectamente",
          "contras": "depronto el acento pues es rusa pero del resto nada mas",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Daniel Nuñez Alarcón",
        "slug": "daniel-nuñez-alarcón",
        "resenas": 74,
        "calidad": "buena",
        "calificacion": 4.03,
        "notaPromedio": 3.82,
        "resenasOcultas": 73,
        "resena": null
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
        "nombre": "Juan Carlos Hernandez Rincon",
        "slug": "juan-carlos-hernandez-rincon",
        "resenas": 15,
        "calidad": "regular",
        "calificacion": 3.93,
        "notaPromedio": 3.65,
        "resenasOcultas": 14,
        "resena": {
          "texto": "Quien escribe esto ya conocía al profesor Juan Carlos. No de vista, sino de haber sufrido en carne propia la decepción académica más grande de mi carrera. El semestre pasado cursé Cálculo Integral con él, y aunque su calidad como docente era innegable, el comportamiento deplorable de mis compañeros logró lo que parecía imposible: que un curso de alto nivel se convirtiera en una farsa. La presión, las súplicas y el berrinche colectivo de una mayoría que no estaba preparada llevaron a que el profesor cediera y \"regalara\" la asignatura. Aquello me afectó tan profundamente que perdí todo el…",
          "pros": "Excelencia docente: Juan Carlos es, sin lugar a dudas, un profesor de primer nivel. Su conocimiento es profundo, su didáctica es clara y su compromiso con enseñar bien es genuino. Los contenidos fueron abordados con…",
          "contras": "Falta de preparación generalizada: Nuevamente, una gran porción del estudiantado demostró que no tenía el nivel mínimo para enfrentar Cálculo Vectorial. Y lo peor: no hicieron nada por subsanarlo. Cultura del facilismo:…",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3.4
        }
      },
      {
        "nombre": "German Preciado Lopez",
        "slug": "german-preciado-lopez",
        "resenas": 41,
        "calidad": "regular",
        "calificacion": 3.91,
        "notaPromedio": 3.83,
        "resenasOcultas": 40,
        "resena": {
          "texto": "Es un gran profesor, Explica muy bien, da una clase chevere y es muy buena gente, por lo menos a nosotros como dejo el primer parcial durísimo dijo que la nota del segundo parcial la remplazaba y de resto de parciales fueron mas faciles a comparacion y hagan los ejercicio sugeridos, eso es todo con este profesor",
          "pros": "se deja hablar si sustenta un punto que no le valió en el parcial le sube la nota ud aprende si o si",
          "contras": "molesta por la puntualidad en los parciales uno piensa que no toma asistencia, pero el siempre se acuerda de uno y si ve que alguien falta muchisimo, se la tira por fallas",
          "periodo": "2026-1",
          "calificacion": 5,
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
        "nombre": "Juan Sebastian Guerra",
        "slug": "juan-sebastian-guerra",
        "resenas": 14,
        "calidad": "regular",
        "calificacion": 3.81,
        "notaPromedio": 3.72,
        "resenasOcultas": 13,
        "resena": {
          "texto": "Personalmente no lo recomiendo, siento que se enreda mucho al explicar y se queda en la teoría. Lo cual claro es importante, pero no es muy beneficioso si no se hacen ejercicios de práctica.",
          "pros": null,
          "contras": null,
          "periodo": "2023-1",
          "calificacion": 3,
          "dificultad": 3
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
        "nombre": "Claudio Rodriguez Beltran",
        "slug": "claudio-rodriguez-beltran",
        "resenas": 35,
        "calidad": "regular",
        "calificacion": 3.79,
        "notaPromedio": 3.78,
        "resenasOcultas": 34,
        "resena": {
          "texto": "Claudio es un profesor apasionado por la materia e intenta transmitir esa pasión al dictar. Hizo 3 quizzes (Creo que no hizo más por el paro) y daba tiempo para que quedaran altos. Cualquier duda que tuve la soluciono en un horario en el que uno pueda ir a la oficina a solucionar las dudas. La critica que puedo hacer es en los parciales, que son largos y pueden ser temas no del todo vistos.",
          "pros": "-Se detiene a prestar atención en cada estudiante -Esta disponible siempre en el horario para dudas. -Apasionado",
          "contras": "-En los parciales da duro -Se demora más de lo debido en los temas",
          "periodo": "2024-1",
          "calificacion": 4.8,
          "dificultad": 3.4
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
        "nombre": "Sandra Carolina Garcia Martinez",
        "slug": "sandra-carolina-garcia-martinez",
        "resenas": 55,
        "calidad": "regular",
        "calificacion": 3.65,
        "notaPromedio": 3.32,
        "resenasOcultas": 54,
        "resena": {
          "texto": "No me gusta su forma de enseñanza, no es muy didactica que digamos, siento que le falta aún más experiencia en la pedagogía.",
          "pros": "Deja ejercicios para coseguir puntos extra",
          "contras": "Falta pedagogía",
          "periodo": "2026-1",
          "calificacion": 3.3,
          "dificultad": 3.7
        }
      },
      {
        "nombre": "Alexandre Sinitsyne",
        "slug": "alexandre-sinitsyne",
        "resenas": 71,
        "calidad": "regular",
        "calificacion": 3.63,
        "notaPromedio": 4.39,
        "resenasOcultas": 70,
        "resena": {
          "texto": "no se le entiende un culo, se le entiende más cuando habla en ingles, de las peores experiencias que he tenido la verdad",
          "pros": "lit no se le entiende",
          "contras": "se pasa autonomamente",
          "periodo": "2025-2",
          "calificacion": 1.5,
          "dificultad": 5
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
        "nombre": "Leonardo Arturo Cano",
        "slug": "leonardo-arturo-cano",
        "resenas": 45,
        "calidad": "regular",
        "calificacion": 3.35,
        "notaPromedio": 3.98,
        "resenasOcultas": 43,
        "resena": {
          "texto": "SÍ Y SOLO SÍ SE ES REPITENTE O ESTUDIA MUCHO AUTONOMAMENTE (y no planea ir a clase) Que fastidio de persona. No toma asistencia pero si amenaza con hacelre perder por fallas y se enoja cuando alguien no va a clase. Grosero, es imposible decirle algo. No se aprende nada, la primera clase y ya toca temas de final de semestre, su letra es un jeroglifico completo. Pase la materia pero con estudio autonomo y grabaciones de clases de Martha Cecilia Moreno.",
          "pros": "> Parciales trabajables > Algun parcial tiene puntos extra por problemas adicionales > Pasable SÍ Y SOLO SÍ se estudia autonomamente",
          "contras": "> Letra inentendible > Muy grosero > Absoluutamente nada de pedagogía > Uno termina odiando el cálculo > Anuncia parciales el día anterior WTF",
          "periodo": "2024-2",
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
      },
      {
        "nombre": "Epifanio Lozano Ayala",
        "slug": "epifanio-lozano-ayala",
        "resenas": 70,
        "calidad": "regular",
        "calificacion": 3.27,
        "notaPromedio": 3.04,
        "resenasOcultas": 69,
        "resena": {
          "texto": "Seamos lo más objetivos posibles. El hombre explica muy bien y sabe bastante de lo que enseña. Pero hasta ahí quedó lo bueno. Epifanio califica DURISIMO. No hace ni talleres ni da puntos por nada ni actividades ni NADA aparte de 4 parciales que se hacen durante el semestre. Si a usted Epifanio le vale un punto en un parcial es porque ese punto esta perfectamente resuelto con el método que él mostró en clase, cualquier errorcito pequeño, por más que usted entienda la teoría y el error sea de sumar dos posiciones en una operación de filas en una matriz, pues se fregó, tome su cero porque solo…",
          "pros": "Explica bien Sabe de lo que enseña y no es mediocre. Sus stickers de whatssap con lo que respondía por correo se le coge la gracia fácil jajajaja.",
          "contras": "Califica DURISIMO. Craso error faltarle a clases. Se le brota el mal genio de manera evidente si hace cualquier cosa que le disguste. El riesgo de tener notas muy bajas con él es gigante.",
          "periodo": "2026-1",
          "calificacion": 2.4,
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
        "nombre": "Edward Samuel Becerra Rojas",
        "slug": "edward-samuel-becerra-rojas",
        "resenas": 54,
        "calidad": "regular",
        "calificacion": 3.27,
        "notaPromedio": 3.13,
        "resenasOcultas": 53,
        "resena": {
          "texto": "el ego de este señor es horrible, pareciera que no se va a morir nunca, como si flotara, se supone que un profesor es transformador de vidas, no entiendo como a este señor lo dejan postularse a decano jaja, qué chiste esto, tengo información de la mano de sus mismos colegas que dicen que este señor es horrible, no inscriba con él, no debería enseñar, si pudiera le pondría una nota negativa -5 por ejemplo, hasta se nota que él mismo es quien responde los comentarios a estas reviews jaja",
          "pros": "ninguno",
          "contras": "todo",
          "periodo": "2026-2",
          "calificacion": 1.5,
          "dificultad": 5
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
        "nombre": "Omar Duque Gomez",
        "slug": "omar-duque-gomez",
        "resenas": 44,
        "calidad": "regular",
        "calificacion": 3.24,
        "notaPromedio": 3.5,
        "resenasOcultas": 43,
        "resena": {
          "texto": "Es buena gente en parte, califica algo duro; se fija en detalles particulares para bajar nota, ayuda un poco en la nota de quices( que en realidad solo hizo uno pero medio la subió con un taller entregable que colocó).",
          "pros": "A veces tira buenos chistes. Explica bien Buena gente",
          "contras": "Algo impuntual No dejó ver bien la corrección de los parciales Los ejercicios recomendados eran muy diferentes al parcial",
          "periodo": "2024-2",
          "calificacion": 3.5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Arcenio Pecha Castiblanco",
        "slug": "arcenio-pecha-castiblanco",
        "resenas": 56,
        "calidad": "regular",
        "calificacion": 3.23,
        "notaPromedio": 3.21,
        "resenasOcultas": 55,
        "resena": {
          "texto": "Es como si Arthur Morgan hubiera estudiado economía y se hubiera criado en el plano cundiboyacense. Este profesor es lo mejor que pudo darme clase durante mi tiempo en la Nacional, no estoy bromeando con esto último. Actualmente estudio en España pero es el único profesor del cual me acuerdo gratamente, valórenlo mientras pueden (Este mensaje lo estoy redactando en 2026, a pesar de que tuve clase con él hace 3 años). Cuando terminé de ver clases con él, salí con el objetivo de que si algún día tenía la oportunidad de enseñar como profesor en una universidad, voy a querer hacerlo como Pecha,…",
          "pros": "Se aprende demasiado, con profundidad y a un ritmo cómodo. Si asisten a clase con disciplina, mostrando dudas, interés, el profesor les trata con el mismo interés que ustedes muestran.",
          "contras": "Si muestran desinterés por la clase o no asisten a clase con disciplina, el maestro les trata con el mismo desinterés que demuestran.",
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "John Alexander Cruz Morales",
        "slug": "john-alexander-cruz-morales",
        "resenas": 31,
        "calidad": "regular",
        "calificacion": 3.17,
        "notaPromedio": 3.47,
        "resenasOcultas": 30,
        "resena": {
          "texto": "De verdad no se hagan el mal de ver con este man, muy mal docente, parciales muy jodidos y un egocéntrico a morir.",
          "pros": null,
          "contras": null,
          "periodo": "2026-2",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Juan Carlos Mendivelso Moreno",
        "slug": "juan-carlos-mendivelso-moreno",
        "resenas": 40,
        "calidad": "regular",
        "calificacion": 3.13,
        "notaPromedio": 3.81,
        "resenasOcultas": 39,
        "resena": {
          "texto": "Cuando metí con Mendivelso me dijeron que eso era un suicidio, que por mucho pasaba con 3, que muchos reprueban, que exige mucho nivel de matemáticas, etc, etc... ¿Lo considero trivial? No en realidad, pero de que es imposible pasar o con buena nota tampoco. Eso sí, evidentemente es una gran desventaja en PAPPI comparado con Germán, pero siento que el curso es de muy buena calidad técnica, y definitivamente toca ver con él si hay interés especial por el tema, en vez de pasar por pasar. Si creo que hay cosas por mejorar, personalmente me chocó mucho algunas de las prácticas que no eran…",
          "pros": "Manejo del tema Tareas sencillas (tal vez cambie) Eliminó el peor quiz y la peor tarea de cada estudiante",
          "contras": "Muy rápido (responde dudas pero muy a la carrera porque siempre intenta abarcar mucho) Muy cerrado a quejas y reclamos No deja tomar apuntes en la corrección de los parciales",
          "periodo": "2025-1",
          "calificacion": 4,
          "dificultad": 4
        }
      },
      {
        "nombre": "Gustavo Nevardo Rubiano Ortegon",
        "slug": "gustavo-nevardo-rubiano-ortegon",
        "resenas": 18,
        "calidad": "regular",
        "calificacion": 2.89,
        "notaPromedio": 3.44,
        "resenasOcultas": 17,
        "resena": {
          "texto": "Un profesor que denota amor para enseñar, en la explicación utiliza material visual y herramientas que facilitan la enseñanza, además de que se le nota por los años de experiencia y estudio que conoce muchísimo del tema",
          "pros": "Un 10/10, chimba de profesor",
          "contras": "Un poco temperamental pero no afecta en nada :v Q se jubila",
          "periodo": "2022-1",
          "calificacion": 5,
          "dificultad": 3.9
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
        "nombre": "Angela Rocío Fuquen Tibatá",
        "slug": "angela-rocío-fuquen-tibatá",
        "resenas": 3,
        "calidad": "mala",
        "calificacion": 2.8,
        "notaPromedio": 2.1,
        "resenasOcultas": 1,
        "resena": null
      },
      {
        "nombre": "Efrain Camilo Pardo Garcia",
        "slug": "efrain-camilo-pardo-garcia",
        "resenas": 39,
        "calidad": "mala",
        "calificacion": 2.78,
        "notaPromedio": 4.18,
        "resenasOcultas": 38,
        "resena": {
          "texto": "No lo haga compa, es demasiado incompetente para impartir una asignatura de la ni siquiera es capaz de resolver sus propios ejercicios",
          "pros": "De verdad jaja es muy malo, no lo haga compa",
          "contras": "Todo mal",
          "periodo": "2021-10 (virtual)",
          "calificacion": 1.5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Clara Marina Neira Uribe",
        "slug": "clara-marina-neira-uribe",
        "resenas": 24,
        "calidad": "mala",
        "calificacion": 2.75,
        "notaPromedio": 3.46,
        "resenasOcultas": 23,
        "resena": {
          "texto": "La vieja es bien aburrida, y desordenada, uno pasa mientras los parciales sean virtuales pero no aprende",
          "pros": null,
          "contras": null,
          "periodo": "2024-1",
          "calificacion": 2.8,
          "dificultad": 2.2
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
        "nombre": "Franqui Solis Cardenas Poloche",
        "slug": "franqui-solis-cardenas-poloche",
        "resenas": 48,
        "calidad": "mala",
        "calificacion": 2.74,
        "notaPromedio": 3.84,
        "resenasOcultas": 47,
        "resena": {
          "texto": "Diría que es un profe un poco agridulce. Sus clases son prácticamente el explicando un poco de teoría y después haciendo varios ejercicios al respecto aunque realmente uno no puede asimilar lo que dijo ya que da muy poco tiempo porque el cambia de tema muy rápido, es alguien bastante apurado. Además sus explicaciones son super básicas y aburridas, uno se siente incompleto así que la autonomía es importante. Respecto a las calificaciones son 3 parciales, cada uno del 25% y quices y talleres de 25%,ademas un supletorio opcional. Los parciales son 4 puntos y 1 de ellos salen de algún quiz o…",
          "pros": "Se deja hablar(a veces) Talleres y quices fáciles, se pueden en grupo A veces se puede hacer trampa Es bastante flexible con las entregas de los quices/talleres y con la realización de los parciales Responde preguntas…",
          "contras": "Parciales jodidos Clases aburridas Toma asistencia cuando ve poca gente este semestre todos los parciales fueron de preguntas abiertas",
          "periodo": "2025-2",
          "calificacion": 3,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Manuel Jair Medina Luna",
        "slug": "manuel-jair-medina-luna",
        "resenas": 24,
        "calidad": "mala",
        "calificacion": 2.73,
        "notaPromedio": 3.4,
        "resenasOcultas": 23,
        "resena": {
          "texto": "Con este profesor se necesita mucho estudio autonomo, puesto que en las clases solo lee pantallazos del Stewart y hace uno que otro ejercicio, sin embargo los ejercicios que realiza son muy sencillos para los talleres de mas de 100 puntos que deja, sin embargo, en los parciales nunca aparecera un solo ejercicio de esos 100, ni siquiera parecidos.",
          "pros": "-Si le gusta el estudio autonomo, este es su profe. -Los talleres y quices ayudan bastante en la nota. -Es facil de pasar si trabaja mucho",
          "contras": "No se le da bien la pedagogia. Tiende a cancelar las clases o hacerlas virtuales con poco tiempo de antelacion. Nunca contesta correos y menos en persona porque siempre esta corriendo",
          "periodo": "2021-10 (virtual)",
          "calificacion": 2,
          "dificultad": 3
        }
      },
      {
        "nombre": "Edixon Manuel Rojas Santana",
        "slug": "edixon-manuel-rojas-santana",
        "resenas": 36,
        "calidad": "mala",
        "calificacion": 2.72,
        "notaPromedio": 2.97,
        "resenasOcultas": 35,
        "resena": {
          "texto": "edixon es un completo hp es una basura como persona y trata a todos como basura no es capaz de entender que un estudiante puede tener dudas o no comprender algo , tira durisimo en los parciales y es un lloron porque le quitaron su curso de cedo . Ademas es un veneco hp y habia un malparido de matematicas que tambien es veneco y se la pasaba chupandole la verga el hp ese y por eso pasaba la materia",
          "pros": "sabe los temas",
          "contras": "ser una basura de ser humano ser un hijueputa su favoritismo por ese matematico chupavergas veneco",
          "periodo": "2026-1",
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
        "nombre": "Mohammed El Aidi",
        "slug": "mohammed-el-aidi",
        "resenas": 46,
        "calidad": "mala",
        "calificacion": 2.59,
        "notaPromedio": 2.97,
        "resenasOcultas": 45,
        "resena": {
          "texto": "Sobrehateado, no sé como habrá sido en el pasado, pero por lo menos en los últimos dos semestres se nota que ha hecho cosas por mejorar la forma en la que da su clase, (él mismo dijo que tomaba los consejos que se ponian en la evaluacion docente). Ahora bien, el profesor Mohammed no es ni de lejos el mejor profesor con el que he tenido clase, pero igual de lejos está de ser el peor. La clase y la calificación es bastante simple, tres parciales y los quices que haga, tambien de vez en cuando un taller para reforzar temas de parcial. En cuanto a la dificultad, yo diría que el 90% de los puntos…",
          "pros": "-Da material de semestres pasados -Es amable si se la lleva bien con el -Soluciona cualquier duda, sabe mucho de la materia y de matematicas en general. - Le ayuda si ve que usted se esta esforzando aunque le haya ido…",
          "contras": "-Se enoja bastante si sacan celulares en clase - No tolera que alguien llegue despues de la llamada a lista (20 o 30min despues de iniciada la clase) -No recomendado si no está acostumbrado a estudiar autonomamente,…",
          "periodo": "2026-1",
          "calificacion": 3.6,
          "dificultad": 3.4
        }
      },
      {
        "nombre": "Mauricio Lopez Hernandez",
        "slug": "mauricio-lopez-hernandez",
        "resenas": 26,
        "calidad": "mala",
        "calificacion": 2.46,
        "notaPromedio": 3.5,
        "resenasOcultas": 25,
        "resena": {
          "texto": "el profesor es terrible, no tiene pedagogia, califica duro y es tosco al responder las dudas. Los parciales son virtuales pero duros, no se dejan muy altos ni siquiera con IA, el man no se deja hablar y la clase no es para nada agradable.",
          "pros": "parciales virtuales",
          "contras": "parciales virtuales pero jodidos JAJAJA califica duro no se deja tan alta",
          "periodo": "2026-1",
          "calificacion": 1.6,
          "dificultad": 4.7
        }
      },
      {
        "nombre": "Ivan Castro Chadid",
        "slug": "ivan-castro-chadid",
        "resenas": 55,
        "calidad": "mala",
        "calificacion": 2.44,
        "notaPromedio": 3.63,
        "resenasOcultas": 54,
        "resena": {
          "texto": "No sé cómo llegó a ser profesor, pareciera que se fuera a quedar dormido en medio de la explicación, y pareciera que ni siquiera pudiera resolver los problemas que explica. Todas las fórmulas que escribe en el tablero, las usará en los parciales, entonces es pasable si después de cada clase estudia lo que vio en clase y hace varios ejercicios por su cuenta, pero a Chadid como tal no se le entiende nada.",
          "pros": "Se puede pasar si estudia autónomamente Deja tomar fotos del tablero",
          "contras": "No se le entiende nada Requiere MUCHO estudio autónomo A veces desperdicia hasta una hora de clase hablando cháchara",
          "periodo": "2025-2",
          "calificacion": 2.1,
          "dificultad": 4
        }
      },
      {
        "nombre": "Rene Erlin Castillo",
        "slug": "rene-erlin-castillo",
        "resenas": 31,
        "calidad": "mala",
        "calificacion": 1.68,
        "notaPromedio": 2.35,
        "resenasOcultas": 30,
        "resena": null
      },
      {
        "nombre": "John Alexander Narvaez Cancimansi",
        "slug": "john-alexander-narvaez-cancimansi",
        "resenas": 2,
        "calidad": "mala",
        "calificacion": 1.5,
        "notaPromedio": 3.5,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Es un violento, un misógino y un temperamental. La materia con él es fácil pero es estresante ya que tiene una personalidad horrible. No lo recomiendo.",
          "pros": "Materia pasable, creo que es fácil porque viene de colegio y no tiene tan buen nivel",
          "contras": "Grosero con las mujeres, comentarios fuera de lugar",
          "periodo": "2024-2",
          "calificacion": 1.5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Yiby Karolina Morales Pinto",
        "slug": "yiby-karolina-morales-pinto",
        "resenas": 17,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 16,
        "resena": {
          "texto": "un ser de luz, la amo",
          "pros": "se preocupa por estudiante parciales trabajables",
          "contras": "ninguno",
          "periodo": "2018-20",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Stiven Leonardo Silva Castillo",
        "slug": "stiven-leonardo-silva-castillo",
        "resenas": 9,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 8,
        "resena": null
      },
      {
        "nombre": "Juan Gabriel Triana Laverde",
        "slug": "juan-gabriel-triana-laverde",
        "resenas": 2,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Juan Gabriel es un profesor pragmático y directo , le gusta explicar las cosas de la manera más sencilla posible y eso en Integral se le agradece bastante. Tiene muletillas muy chistosas y en general es muy buena gente y buen profesor. Sus talleres están muy bien realizados.",
          "pros": null,
          "contras": null,
          "periodo": "2015-20",
          "calificacion": 4.2,
          "dificultad": 2
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
        "nombre": "William Alfredo Fajardo",
        "slug": "william-alfredo-fajardo",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Explica muy bien y demuestra todo en clase, resuelve dudas pero tiende a ir bastante rápido, la nota de talleres es fácil dejarla en 5 pero los parciales son difíciles, también suele ser un tanto prepotente y decir que los libros están mal escritos por lo que da los temas en el orden que se le da la gana, al final nos faltó ver unos temas de series de potencia, taylo, etc porque para él no eran fundamentales.",
          "pros": "Se aprende bastante y maneja muy bien el tema",
          "contras": "Parciales duros y muy arrogante",
          "periodo": "2019-10",
          "calificacion": 3.8,
          "dificultad": 3
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
      },
      {
        "nombre": "Omar Andres Cuervo Fernandez",
        "slug": "omar-andres-cuervo-fernandez",
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
  "1000013": {
    "nombre": "Probabilidad Y Estadistica Fundamental",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000013",
    "profesores": [
      {
        "nombre": "Isabella Agudelo Galindo",
        "slug": "isabella-agudelo-galindo",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.53,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Meta con ella, no lo piense. Es una excelente profesora, explica todo supremamente bien, 3 parciales de 25% bastante sencillos la verdad, donde pregunta todo lo que ella enseña en clase y si usted hace los talleres opcionales que manda, ya tiene pasados esos parciales super altos. El otro 25% es de participación/actividad en clase que es de hacer ejercicios básicamente. Enseña como hacer los ejercicios en R pero nada de la materia se hace en este programa, por lo que si usted no es muy bueno programando le va a ayudar un montón a dejar la materia mucho más alta que con otro profesor. 100%…",
          "pros": "Todo",
          "contras": "Nada",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Cristian Camilo Parra",
        "slug": "cristian-camilo-parra",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.5,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es muy buen profesor. Se preocupa por los estudiantes y siempre responde los correos (enserio). Hace que la materia sea muy comprensible. El primer parcial es facil pero si no entiende progamacion se le puede complicar pues el 50% de la nota es un documento en latex apartir de un excel como de 450 datos de en donde toca hacer el analisis basico . Para esto se pide que usen o R o phyton asi que pongale atencion cunado hable de eso.",
          "pros": "-La comunicacion es muy buena. -Los parciales son muy trabajabales. -Es muy buena persona. -Se preocupa por que los estudiantes entiendan. -Enseña tanto R como python para hacer las graficas. -Es muy buen profesor.",
          "contras": "-Si en algun momento manda la clase virtual , contestele todas las preguntas que haga para que el man no se sienta ignorado y se enoje. -El man deja talleres preparcial que son obligatorios y peuden ser un poco largos.…",
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
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
        "nombre": "Diego Alexis Villada Cantor",
        "slug": "diego-alexis-villada-cantor",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 4.88,
        "notaPromedio": 4.75,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Es el mejor para ver la materia, se aprende mucho, es muy amable y las clases son dinámicas y divertidas",
          "pros": "Divertido Amable Evalúa lo que explica Siempre abierto a la crítica",
          "contras": "Es demorado en entregar notas que no sean del Moodle, por ejemplo un taller que se entregó al inicio del semestre lo calificó en la última semana Es cascarero",
          "periodo": "2020-20 (virtual)",
          "calificacion": 5,
          "dificultad": 3.5
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
        "nombre": "Ulpiano Lara Cristancho",
        "slug": "ulpiano-lara-cristancho",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.83,
        "notaPromedio": 3.8,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Es buen profesor en general, se preocupa que los estudiantes entiendan y pasen, ayuda mucho y sus parciales son 80% igual a los talleres.",
          "pros": "Da bonos para parciales Sube los apuntes a classroom Es amable",
          "contras": null,
          "periodo": "2026-2",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Juan Camilo Sosa Martinez",
        "slug": "juan-camilo-sosa-martinez",
        "resenas": 26,
        "calidad": "buena",
        "calificacion": 4.8,
        "notaPromedio": 4.15,
        "resenasOcultas": 25,
        "resena": {
          "texto": "Muy buen profesor, bastante pedagógico y entendido, este semestre en el curso nos ayudó bastante puesto que el segundo parcial lo calificó sobre 6 y en el caso del primero hizo una curva y nos subió 0.5. Además todos los ejercicios salen de los cuadernos que el deja para estudiar dónde está el total de contenido del curso.",
          "pros": "Buena persona Muy lapso y permite comentarios y demás de estudiantes Ayuda en nota",
          "contras": null,
          "periodo": "2026-1",
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
        "nombre": "Danna Lesley Cruz Reyes",
        "slug": "danna-lesley-cruz-reyes",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.58,
        "notaPromedio": 4.78,
        "resenasOcultas": 4,
        "resena": {
          "texto": "No toma asistencia, hace quices en moodle todas las clases que puede y son fáciles si uno revisa las diapositivas que ella comparte además deja usar IA. Ella empieza por las nociones básicas de programación en Java para después pasar a pyhton y deja una activdad grupal en kaggle. Es cinqueable fácilmente.",
          "pros": null,
          "contras": "Ninguno",
          "periodo": "2026-1",
          "calificacion": 4.9,
          "dificultad": 1.5
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
        "nombre": "Diana Carolina Moreno Chavarro",
        "slug": "diana-carolina-moreno-chavarro",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.38,
        "notaPromedio": 3.67,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Muy buena explicando y clara con las notas y fechas, parciales faciles si estudia y presta atencion.",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 4.8,
          "dificultad": 2.7
        }
      },
      {
        "nombre": "Luis Hernando Vanegas Penagos",
        "slug": "luis-hernando-vanegas-penagos",
        "resenas": 19,
        "calidad": "buena",
        "calificacion": 4.3,
        "notaPromedio": 4.5,
        "resenasOcultas": 18,
        "resena": {
          "texto": "Muy aburrido y tedioso, le molestan los celulares y es sumamente canson si alguien lo saca en clase. Además hace pregunta tipo \"¿Entendieron?\" cada 5 segundos y si no le contesta toda la clase en coro no sigue con el tema. No tenia preparadas las clases y solo explica con ejemplos, basicamente solo resuelve ejercicios y ya. Los parciales son fáciles y le sube algo la nota presentar el taller y la correción. Cancela muchas clases.",
          "pros": "Sabe mucho Responde preguntas A veces es gracioso",
          "contras": "Es Tedioso Cancela mucha clase Amenaza con que en el parcial las preguntas contestadas mal le van a bajar nota pero al final no lo hace.",
          "periodo": "2026-2",
          "calificacion": 3,
          "dificultad": 2
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
        "nombre": "Andrés Nicolás López López",
        "slug": "andres-nicolas-lopez-lopez",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4.3,
        "notaPromedio": 4,
        "resenasOcultas": 0,
        "resena": {
          "texto": "El profe Nicolás, es un buen profe, tiene un amplio conocimiento y responde cualquier duda que se presente, hace muchos ejercicios en clase para practicar, sus parciales no son largos y trabajables. Es puntual y siempre trata de ir acorde al programa del curso. Hace 3 parciales los cuales cada uno vale el 25% de la materia, y el resto son quizes de programación en R que valen el 5% y el trabajo final de programación en R que vale el 20% todo esto enfocado en la estadistica y probabilidad. Tiene diapositivas para cada clase, en estas nos recuerda que vimos la clase pasada y tambien deja…",
          "pros": "Explica bien con diapositivas claras Muy buena persona, responde dudas. Muy puntual Justo para calificar. Responde correos Da tutorias fuera de clase.",
          "contras": "No comparte las diapositivas. A veces va muy rápido en algunos temas Es necesario dedicarle bastante tiempo a esta materia",
          "periodo": "2023-1",
          "calificacion": 4.3,
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
        "nombre": "Diego Alberto Martinez Simbaqueva",
        "slug": "diego-alberto-martinez-simbaqueva",
        "resenas": 12,
        "calidad": "buena",
        "calificacion": 4.15,
        "notaPromedio": 4.16,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Un profesor increible, explica muy bien. No sé enreda, tiene diapositivas de apoyo y hace ejemplos en clase que dejan todo claro. Tiene una forma de explicar muy particular, que hace la clase dinamica y para nada aburrida. Tiene cosas poco comunes, como las 'diegolimpiadas' donde se respondian preguntas del corte en grupo y daba puntos para el parcial. En general, es increible. Si lee esto profe, espero que le haya ido bien con su tesis. Lo quiero mucho, gracias por hacerme creer que este mundo no es un lugar tan horrible.",
          "pros": "Si estudia con los parciales antiguos, es super fácil Exonero del último parcial a casi la mitad del grupo por haber sacado más de 5 en los primeros dos (algo relativamente fácil)",
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2
        }
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
        "nombre": "Cristian Felipe Castelblanco Benavides",
        "slug": "cristian-felipe-castelblanco-benavides",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4,
        "notaPromedio": 4.38,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Es un profe joven con mera energía para enseñar. El man tiene material y explica muy bien los temas de la materia. Los quices y los parciales son cinqueables si se hacen ejercicios sobre los temas vistos (por lo general en las diapositivas que usa deja ejercicios similares con cierta dificultad para que uno se prepare para el quiz o el parcial).",
          "pros": "Es puntual. Explica bien. Manda las diapositivas para poderlas releer y estudiar. Deja ejercicios para estudiar con dificultad similar a los quices y parciales. Califica bien y es justo.",
          "contras": "Podría usar un poco más el tablero. Se demora un poco en calificar los parciales.",
          "periodo": "2024-2",
          "calificacion": 4.8,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Darwin Eduardo Martinez Riaño",
        "slug": "darwin-eduardo-martinez-riano",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4,
        "notaPromedio": 3.5,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Las clases no son muy entretenidas. Los parciales pueden tener un poco de dificultad. Personalmente no aprendí mucho con sus explicaciones",
          "pros": "Es calmado y generalmente amable",
          "contras": "Las clases suelen ser aburridas",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Laura Camila Cruz de Paula",
        "slug": "laura-camila-cruz-de-paula",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4,
        "notaPromedio": 4.7,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es buena profesora, se preocupa porque todos hayan entendido el tema, resuelve dudas de forma amable y repite la explicación si lo ve necesario. Este semestre el grupo no fue el mejor y muchos no le ponían cuidado y ni iban a clase, por lo que la profesora fue bajando la calidad y el ánimo con la que daba las clases. De todas formas siento que se aprende mucho y volvería a ver con ella si tuviera la oportunidad.",
          "pros": "- Los parciales salen de los talleres - Da muchas ayudas para subir nota - Resuelve dudas amablemente - Hace supletorio - Se puede dejar alta si se le dedica tiempo - Da nota por hacer un curso de R o python en coursera",
          "contras": "- Usa diapositivas con mucho texto, por lo que algunos temas y ejemplos pueden tornarse abstractos - A veces no hace respetar su propia clase",
          "periodo": "2023-2",
          "calificacion": 4,
          "dificultad": 3.5
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
        "nombre": "Carlos Eduardo Alonso Malaver",
        "slug": "carlos-eduardo-alonso-malaver",
        "resenas": 16,
        "calidad": "regular",
        "calificacion": 3.73,
        "notaPromedio": 4.36,
        "resenasOcultas": 15,
        "resena": {
          "texto": "No aprendí. Pasé con una excelente nota. A veces humilla demasiado y hace comentarios fuera de contexto.",
          "pros": "Si va a clase, vaya solo por el chisme.",
          "contras": "No aprende. Todo es estudio autónomo.",
          "periodo": "2026-1",
          "calificacion": 3,
          "dificultad": 2
        }
      },
      {
        "nombre": "Camilo Jose Torres Jimenez",
        "slug": "camilo-jose-torres-jimenez",
        "resenas": 20,
        "calidad": "regular",
        "calificacion": 3.52,
        "notaPromedio": 3.29,
        "resenasOcultas": 19,
        "resena": {
          "texto": "Opino que el profesor sabe enseñar los temas, hace bastante énfasis en la aplicación que pueden tener para un entorno real, intenta que explicar las fórmulas sea por deducción y no solo sacarlas de la manga y mencionar qué significa cada variable y es bastante organizado con el material. Si le pone buena atención y no le gusta la Estadística como a mí, tal vez le vea la utilidad a la materia y se le quite un poco la repulsión. Califica solo parciales, a veces 3 o 4, dependiendo de la negociación a la que se llegue y ayuda a los estudiantes a organizarse un poco para estudiar y tener las…",
          "pros": "Buena persona Explica de cero Tiene secciones en su página para repasar temas que deberíamos saber Baja la tensión de la clase con uno que otro chiste Lleva algunas estadísticas del rendimiento de cursos anteriores",
          "contras": "No enseña R sino hasta el final del curso (si queda tiempo)",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3.1
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
        "nombre": "Ruben Dario Guevara Gonzalez",
        "slug": "ruben-dario-guevara-gonzalez",
        "resenas": 28,
        "calidad": "regular",
        "calificacion": 3.44,
        "notaPromedio": 3.61,
        "resenasOcultas": 27,
        "resena": {
          "texto": "Ruben es de esos \"profesores\" que es mejor no volver a encontrarse en la carrera , es alguien que desde dia uno empieza metiendo miedo a sus estudiantes diciendo que poco o nada le importa que pierda todo el curso, los primeros quices tuvieron notas desastrosas y el de manera constante busca que se note ese miedo ese gusto porque los estudiantes cancelen. Aunque explica los temas , muchas veces las clases son muy poco dinamicas e incluso varias de ellas se fundamentan en demostrar teorema tras teorema , ademas si en algun momento menciono un tema por mas pequeño que fuera este tema puede…",
          "pros": "sabe los temas tiene muy buena bibliografia",
          "contras": "califica por caras y extremadamente sesgado bipolar muy grosero",
          "periodo": "2026-1",
          "calificacion": 1.5,
          "dificultad": 4.3
        }
      },
      {
        "nombre": "Arcenio Pecha Castiblanco",
        "slug": "arcenio-pecha-castiblanco",
        "resenas": 56,
        "calidad": "regular",
        "calificacion": 3.23,
        "notaPromedio": 3.21,
        "resenasOcultas": 55,
        "resena": {
          "texto": "Es como si Arthur Morgan hubiera estudiado economía y se hubiera criado en el plano cundiboyacense. Este profesor es lo mejor que pudo darme clase durante mi tiempo en la Nacional, no estoy bromeando con esto último. Actualmente estudio en España pero es el único profesor del cual me acuerdo gratamente, valórenlo mientras pueden (Este mensaje lo estoy redactando en 2026, a pesar de que tuve clase con él hace 3 años). Cuando terminé de ver clases con él, salí con el objetivo de que si algún día tenía la oportunidad de enseñar como profesor en una universidad, voy a querer hacerlo como Pecha,…",
          "pros": "Se aprende demasiado, con profundidad y a un ritmo cómodo. Si asisten a clase con disciplina, mostrando dudas, interés, el profesor les trata con el mismo interés que ustedes muestran.",
          "contras": "Si muestran desinterés por la clase o no asisten a clase con disciplina, el maestro les trata con el mismo desinterés que demuestran.",
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Sergio Daniel Martinez Martinez",
        "slug": "sergio-daniel-martinez-martinez",
        "resenas": 21,
        "calidad": "regular",
        "calificacion": 3.2,
        "notaPromedio": 3.46,
        "resenasOcultas": 20,
        "resena": {
          "texto": "Muy desentendido con la materia. Cancelaba clase cada dos por tres, y muchas veces poco antes de que esta iniciara (una vez canceló clase de 7 a las 6:55am), o de plano ni llegaba al salón. En total se habrá perdido más de un mes de clases por esta razón. También llegaba tarde y terminaba las clases hasta 20 minutos antes, convirtiendo un bloque de dos horas en menos de una hora y media. Si bien no explica mal, para entender todo toca hacer un esfuerzo muy grande ya que va muy rápido.",
          "pros": "Dejó sacar apuntes en los parciales y quices (si hizo los talleres de repaso y y los entendió, pasa).",
          "contras": "Indiferente Perezoso Poco empático con el tiempo de los estudiantes",
          "periodo": "2023-1",
          "calificacion": 2.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Sandra Vergara Cardozo",
        "slug": "sandra-vergara-cardozo",
        "resenas": 21,
        "calidad": "regular",
        "calificacion": 3.19,
        "notaPromedio": 4.49,
        "resenasOcultas": 20,
        "resena": {
          "texto": "Tiene la oportunidad regalada de hacer trampa con ia, si lo hace es un 5 seguro. Si no, va a encontrar muy difícil entender a la profesora, su metodología y como califica, cosas que considero ella misma no sabe como hace.",
          "pros": "Facil con ia, usted solo se lo comen las explicaciones tan poco claras de la señora. Muchos puntos positivos",
          "contras": "Como pts es que califica? Explica muy raro pero es un amor",
          "periodo": "2026-2",
          "calificacion": 4,
          "dificultad": 2
        }
      },
      {
        "nombre": "Carlos Arturo Panza Ospino",
        "slug": "carlos-arturo-panza-ospino",
        "resenas": 16,
        "calidad": "regular",
        "calificacion": 3.18,
        "notaPromedio": 3.49,
        "resenasOcultas": 15,
        "resena": {
          "texto": "No lo haga jsjs, o si lo va a hacer no se confíe. El profesor es puntual y da los temas, dura toda la clase copiando sus notas en el tablero, no mira a los estudiantes, es decir se la pasa mirando el tablero, copiando y copiando. La asistencia es obligatoria, pero ir es igual a nada porque es como ver un video en x2 de velocidad. Se hace el amable, pero ni tanto. Si le hace preguntas por curiosidad o algo que no le cuadra, le va a responder con otra cosa y va a seguir el tema. Los parciales virtuales son complicados si los hace sin ayuda, entonces le recomendaría que no haga parciales…",
          "pros": "Tiene diapositivas A veces acaba antes la clase Hace clases virtuales cuando se ausenta Hace recuperación de parciales",
          "contras": "Las diapositivas no le van a servir para los parciales Toma asistencia Cambia los porcentajes de calificación Parcial final imposible (así digan otra cosa, la nota promedio fue como 1.2 y la máxima fue 2.5) Hace…",
          "periodo": "2025-2",
          "calificacion": 2,
          "dificultad": 4
        }
      },
      {
        "nombre": "Sergio Alejandro Calderon Villanueva",
        "slug": "sergio-alejandro-calderon-villanueva",
        "resenas": 6,
        "calidad": "regular",
        "calificacion": 3.15,
        "notaPromedio": 3.73,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Sabe mucho del tema y se ve que le importa mucho qué aprendamos y pongamos atención. Seguro por eso se ponía tan irritable y cansón virtualmente, pero valoro su buena intención de que quiere que pongamos cuidado.",
          "pros": "Curso completo Enseña python Enseña machine learning",
          "contras": "Temperamental Puede llegar a ser grosero Puede llegar a ser sesgado con las notas",
          "periodo": "2021-2",
          "calificacion": 4,
          "dificultad": 4.2
        }
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
        "nombre": "Diana Carolina Franco Soto",
        "slug": "diana-carolina-franco-soto",
        "resenas": 48,
        "calidad": "mala",
        "calificacion": 2.96,
        "notaPromedio": 3.69,
        "resenasOcultas": 47,
        "resena": {
          "texto": "La clase se resumió en: - Abrir meet. - Dormir. - Escuchar a la profe hablando de todo menos de la clase por media hora. - Seguir durmiendo. - La profe poniendo exposiciones grupales sobre cualquier cosa. - Quedarse dormido (otra vez). - Despertarse para darse cuenta que la clase se acabó hace una hora y la profe dejó el meet abierto (hasta eso se le olvida).",
          "pros": null,
          "contras": "es la profesora más mediocre que he visto en esta universidad",
          "periodo": "2026-1",
          "calificacion": 1.5,
          "dificultad": 1.6
        }
      },
      {
        "nombre": "Luis Guillermo Diaz Monroy",
        "slug": "luis-guillermo-diaz-monroy",
        "resenas": 22,
        "calidad": "regular",
        "calificacion": 2.93,
        "notaPromedio": 4.02,
        "resenasOcultas": 21,
        "resena": {
          "texto": "A este profesor o lo amas o lo odias, no hay punto medio, el profe tiene un excelente dominio de los temas (se sacaba las clases de memoria literal) las clases se basan en el profe explicando el tema, ejemplifica en un caso ¨cotidiano¨ del para que sirve la formula o el tema que se este viendo y 20 minutos en R , su forma de ser es bastante extraña, un día puede ser la persona mas inofensiva y tirarse los chistes mas rancios del mundo (era mi parte favorita, quitaba la monotonía de la clase) y al otro es furia de intensamente, por lo tanto depende mucho de su humor la clase de ese dia, las…",
          "pros": "Parciales trabajables Temas faciles de digerir Una biblia en esta materia",
          "contras": "Puede hacer comentarios pasados de tono Es nuevo en la fce, entonces sus clases estan mas orientadas a estadisticos que a carreras economicas",
          "periodo": "2026-1",
          "calificacion": 4,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Biviana Marcela Suarez Sierra",
        "slug": "biviana-marcela-suarez-sierra",
        "resenas": 8,
        "calidad": "regular",
        "calificacion": 2.74,
        "notaPromedio": 3.6,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Es una profe temperamental, pero se aprende :)",
          "pros": "Explica bien aunque rápido Valora mucho el esfuerzo de los estudiantes Es justa con las calificaciones",
          "contras": "A veces temperamental Puede ser ofensiva",
          "periodo": "2017-2",
          "calificacion": 4,
          "dificultad": 2
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
        "nombre": "Manuel Ricardo Contento",
        "slug": "manuel-ricardo-contento",
        "resenas": 4,
        "calidad": "mala",
        "calificacion": 2.7,
        "notaPromedio": 3.1,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Contento me produce sentimientos encontrados. Por un lado, es innegable que domina el tema a la perfección, y se nota que lleva dando el mismo curso varios años. Sin embargo, su pedagogía es nula. Las diapositivas no las actualiza nunca. Toda su clase se basa en su \"cartillita\" (es así como la llama), un libro que escribió sobre estadística y probabilidad, por lo que, si es juiciosx leyéndola y sacando ejercicios de ahí, no va a tener problemas en aprobar. Él da clase como si estuviera tomando pola en la esquina. Usa lenguaje coloquial, cuenta anécdotas y hace una transición entre ustear y…",
          "pros": "- Comparte las diapositivas y la \"cartillita\" - Parciales con computador y acceso a internet - Negocia ponderaciones de los parciales a lo largo del semestre",
          "contras": "- No se aprende - Toma asistencia - Cero pedagógico",
          "periodo": "2025-1",
          "calificacion": 2.3,
          "dificultad": 4
        }
      },
      {
        "nombre": "Gustavo Santos Vargas",
        "slug": "gustavo-santos-vargas",
        "resenas": 3,
        "calidad": "mala",
        "calificacion": 2.63,
        "notaPromedio": 3.93,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Es un profesor exigente, siempre pide participación por parte de los estudiantes , la clase era a las 7 am en muchas ocasiones no llegaba a la clase No es fácil dejarla alta pues los parciales son bastante complicados respecto a los talleres , tuve clase con el 10 veces como maximo",
          "pros": "se le nota la pasion por la materia explicaba bien",
          "contras": "no llegaba a la clase parciales dificiles",
          "periodo": "2022-2",
          "calificacion": 3.3,
          "dificultad": 3
        }
      },
      {
        "nombre": "Nicolás Bello Reyes",
        "slug": "nicolás-bello-reyes",
        "resenas": 3,
        "calidad": "mala",
        "calificacion": 2.6,
        "notaPromedio": 3.3,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Sus clases son muy tediosas, al final ni daban ganas de entrar. El profe hace lo posible por explicar bien pero tiene algo que a uno le quita las ganas. Da cinco minutos de descanso pero termina la clase como 15 minutos después.",
          "pros": "Dejaba un punto bonus para cada parcial pero igual eran difíciles.",
          "contras": "Evalúa más la interpretación que el dominio de los temas. Parciales complejos y no tenían tanta relación con lo que se debería evaluar de los temas.",
          "periodo": "2020-20 (virtual)",
          "calificacion": 3,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Edgardo Antonio Araque Vásquez",
        "slug": "edgardo-antonio-araque-vasquez",
        "resenas": 3,
        "calidad": "mala",
        "calificacion": 2,
        "notaPromedio": 2.17,
        "resenasOcultas": 2,
        "resena": {
          "texto": "El profe es bueno, intenta, pero la verdad avanza asi nadie entienda un qlo, con dos personas que le contesten bien.... Es muy intimidante, preguntarle cualquier cosa es complejo por eso, además al principio es claro pero luego corre mucho",
          "pros": "Intenta hacer chistes, es medio rela y ayuda con las notas al menos con 0,2 al final Si estudia, los parciales son pasables",
          "contras": "Es muy cortante Va muy rápido No empatiza con los estudiantes Pasaron como 10 personas El trabajo final es demasiado largo y las pautas las da como 4 semanas antes Puro estudio autónomo",
          "periodo": "2025-1",
          "calificacion": 3,
          "dificultad": 4.3
        }
      },
      {
        "nombre": "Hugo Alfonso Mancera Medina",
        "slug": "hugo-alfonso-mancera-medina",
        "resenas": 10,
        "calidad": "mala",
        "calificacion": 1.65,
        "notaPromedio": 2.52,
        "resenasOcultas": 9,
        "resena": {
          "texto": "No lo haga, si es una perdida de tiempo con el profesor, no va a aprender nada y si pasa la materia es con una nota arbitraria, no da clase o llega tarde, dice que va a llegar tarde y no llega, explica uno o dos ejercicios cuando llega y el resto lo averigua por su cuenta, se salta temas que si salen en los parciales.",
          "pros": null,
          "contras": "no explica parciales con cascaras nota arbitraria talleres complejos",
          "periodo": "2021-10 (virtual)",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Julian Hernández Castañeda",
        "slug": "julian-hernandez-castaneda",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 1.5,
        "notaPromedio": 3,
        "resenasOcultas": 0,
        "resena": {
          "texto": "2022-2 Reseña necesaria de un curso que uno tiene que hacer por curiosidad, casualidades de la vida o exigencia, el panorama del curso es el siguiente: te matriculas con este profesor las dos primeras semanas, el profesor parece simpático, te da un repaso de matemáticas básicas, que alguien que estudie al menos ingeniería, le dará confianza pensar que el curso puede ser fácil. Dos semanas después, el tipo pasa y dice que si alguien va a cancelar, hasta entonces, se va con confianza y se asume que se está en un buen curso. Llegando el día del parcial y contra todas tus expectativas de que el…",
          "pros": null,
          "contras": null,
          "periodo": "otro",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Luis Fernando Santa Guzman",
        "slug": "luis-fernando-santa-guzman",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 1.5,
        "notaPromedio": 3.1,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Fue uno de los peores profesores que tuve en la carrera. Llegaba 30 minutos tarde a las clases, contestaba de mala gana las dudas de los estudiantes, nunca se dignó a contestar un correo electrónico, sus \"explicaciones\" del lenguaje de programación R fueron mediocres (por no decir que lamentables). No asistió varias semanas a clase, dejó un reemplazo que al menos no era tan malo como él. Los parciales los hizo en el moodle. Eran más de 25 preguntas para ser contestadas en 45 minutos, con un nivel de dificultad alto (en un curso normal se ponen máximo cinco ejercicios en un parcial de 2…",
          "pros": null,
          "contras": "Un Taxi-profesor.",
          "periodo": "antes",
          "calificacion": 1.5,
          "dificultad": 4.5
        }
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
        "nombre": "David Andrés Paloma Cruz",
        "slug": "david-andrés-paloma-cruz",
        "resenas": 3,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 2,
        "resena": {
          "texto": "El peor profesor que he tenido, no explica bien, se enrreda, no abarca ni el 30% del programa, deja falencias y huecos conceptuales enormes, además sus parciales los hizo arrajar a todxs aunque no pudo porque la gente es muy crack y a fin de cuentas estamos en la nacho. Sus clases me parecieron inutiles, aprendí todo haciendo cursos en coursera y así entendí. No inscirban con el",
          "pros": null,
          "contras": null,
          "periodo": "2020-10 (virtual)",
          "calificacion": 2,
          "dificultad": 3
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
        "nombre": "David Humberto Cárdenas Pineda",
        "slug": "david-humberto-cárdenas-pineda",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Se adaptó muy bien a las clases virtuales, fue muy generoso con el grupo, explicaba bien",
          "pros": null,
          "contras": null,
          "periodo": "2020-10 (virtual)",
          "calificacion": 4,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Jairo Castrellon Torres",
        "slug": "jairo-castrellon-torres",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Buen profesor, es buena persona, pero es un poco exigente. Se necesita trabajo autónomo, pero explica bien.",
          "pros": "- Buena persona - Flexible - Al final ayuda",
          "contras": "- Parciales difíciles",
          "periodo": "2019-20",
          "calificacion": 3.5,
          "dificultad": 4.2
        }
      },
      {
        "nombre": "Andres Camilo Ortiz Estupiñan",
        "slug": "andres-camilo-ortiz-estupiñan",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
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
        "nombre": "Henry Mendoza Rivera",
        "slug": "henry-mendoza-rivera",
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
        "nombre": "Wilmer Dario Pineda Rios",
        "slug": "wilmer-dario-pineda-rios",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Wilson Enrique Galindo Bernal",
        "slug": "wilson-enrique-galindo-bernal",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      }
    ]
  },
  "1000017": {
    "nombre": "Fundamentos De Electricidad Y Magnetismo",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000017",
    "profesores": [
      {
        "nombre": "Juan Diego Castaño Marin",
        "slug": "juan-diego-castano-marin",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.83,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Es el goat, laboratorio entretenido, hace \"magistral\" para aclarar mejor el laboratorio y en general califica bien los informes.",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Juan Esteban Ardila Garcia",
        "slug": "juan-esteban-ardila-garcia",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.97,
        "resenasOcultas": 2,
        "resena": {
          "texto": "El profe más parchado de laboratorio, realmente no da duro en los laboratorios, y pues a veces te cuenta historias de como lo atropellaron, jajaja.",
          "pros": "+ Califica suave",
          "contras": "+ Se va a Brasil y no invita",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Fernanda Andrea Páez Reyes",
        "slug": "fernanda-andrea-paez-reyes",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.95,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Para el lab: Es muy amable y comprensiba, en general todo bien, siempre con la disposición de responder a dudas, muy cercana con sus estudiantes, es lit una más de nosotros.",
          "pros": "Califica rapido",
          "contras": "NADA",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Juan David Villamil",
        "slug": "juan-david-villamil",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.45,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Aprende bastante en taller y laboratorio (no más con decir que uno quedaba más que bien estudiado para los parciales de Shirley solo con lo de esas clases). 100% recomendado",
          "pros": "- Gran disposición a resolverle dudas - Ejercicios interesantes y que lo retan a uno (para los cuales brinda ayuda también) - Explica bien y se nota la vocación de enseñar - Se puede hablar para llegar a acuerdos si se…",
          "contras": "- En los primeros laboratorios era un poco estricto con la calificación, pero creo que es más mientras el grupo se acostumbra a la redacción de esos informes, presentar bien hechos los resultados y usar la propagación…",
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 4.3
        }
      },
      {
        "nombre": "July Paola Garzon Lopez",
        "slug": "july-paola-garzon-lopez",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.6,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Una profesora maravillosa. Le entendi mas en taller que la clase de magistral con otra profeosa. Excelente para explicar",
          "pros": "Explica super bien",
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "David Alejandro Barón Ospina",
        "slug": "david-alejandro-baron-ospina",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 4.96,
        "notaPromedio": 4.53,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Al profe le echan muchas flores y la verdad es que en parte se las merece, pero creo que como todos los demás profesores puede mejorar, por lo que voy a intentar ser imparcial (aunque creo que la clase solo tiene una cosa negativa). Primero, comencemos con que la mentalidad del profesor con respecto a la materia es maravillosa. Él quiere que usted apruebe porque aprende. Además, califica bien y da tiempo para correcciones, explica todo lo que pide en clase y lo que no, lo manda por videos. Responde dudas por WhatsApp a cualquier hora (por favor, no abusen de esto) y aunque no sea de…",
          "pros": "-El profesor tiene una buena actitud y quiere que aprendas. -El profesor califica de forma justa y te da oportunidades de mejorar. -El profesor te explica todo lo que pide y te envía material complementario. -El…",
          "contras": "-Los talleres son pesados y requieren mucho tiempo y esfuerzo",
          "periodo": "2023-2",
          "calificacion": 4.7,
          "dificultad": 2.6
        }
      },
      {
        "nombre": "Jose Antonio Sanchez Monroy",
        "slug": "jose-antonio-sanchez-monroy",
        "resenas": 18,
        "calidad": "buena",
        "calificacion": 4.91,
        "notaPromedio": 4.41,
        "resenasOcultas": 17,
        "resena": {
          "texto": "(Laboratorio) Es un profesor con la siguiente consigna: \"El laboratorio no debe estar al servicio de la teoría\", lo cual me parece maravilloso conceptualmente, por otra parte el no le va a pedir informes largos y con ecuaciones que describan los fenómenos, a el le importa más un análisis cualitativo que permite entender los sucesos.",
          "pros": null,
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
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
        "nombre": "Astrid Camila Riveros Mesa",
        "slug": "astrid-camila-riveros-mesa",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.73,
        "notaPromedio": 4.2,
        "resenasOcultas": 2,
        "resena": {
          "texto": "(Taller) La profe Astrid es una persona excelente, me cayó muy bien las pocas veces que fui a taller, explica bien y aunque sus talleres son más díficiles que el parcial (con el profesor que teníamos en magistral nos perjudico) se esfuerza mucho en atender dudas, además de que trata de hacerlo muy personalizado.",
          "pros": "Excelente explicando.",
          "contras": "Nada",
          "periodo": "2026-1",
          "calificacion": 4.8,
          "dificultad": 2.4
        }
      },
      {
        "nombre": "Eulises Alejandro Fonseca Parra",
        "slug": "eulises-alejandro-fonseca-parra",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.67,
        "notaPromedio": 4.34,
        "resenasOcultas": 9,
        "resena": {
          "texto": "GOD, aunque casi me la tiro y en el parcial 3 estaba apretando culo por pasarlo voy a ser honesto, es de los pocos profesores que no puedo culpar diciendo que enseño los temas mal o que es arrogante, Eulises le subió el nivel a sus parciales este semestre y todos nos confiamos en el primero (lo deje en 3.3 de puro milagro) pero poco a poco fue bajandole la dificultad, es un profesor que pone 0.0 si no ve la respuesta exacta a veces (en el segundo me paso), pero usted puede ir a reclamarle la nota y se deja hablar mucho, da recursos para estudiar y investigar si le gusta la materia, en general…",
          "pros": "Amable y carismatico. Explica muy bien. Recursos y Curiosidades. Entrega notas del parcial el mismo día (con algunos errores)",
          "contras": "Exigente Creo que el problema es más la materia que el propio profesor, en mi caso FEM no me sirve para un jopo.",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 4.2
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
        "nombre": "Juan Santiago Cortes Gonzalez",
        "slug": "juan-santiago-cortes-gonzalez",
        "resenas": 21,
        "calidad": "buena",
        "calificacion": 4.56,
        "notaPromedio": 4.33,
        "resenasOcultas": 19,
        "resena": {
          "texto": "Juan Santiago es un excelente profesor, muy atento a las dudas de cada estudiante y muy organizado con los temas y las notas. Maneja un sistema de bonos por exposiciones grupales, en el cual, la primera exposición del corte suma unidades para el parcial que se califica sobre 4 y la segunda da puntos para sumar a la nota más baja. La nota de talleres la saca de los pre-parciales que hace por Moodle y además de ello manda ejercicios de repaso. Los parciales también se hacen por Moodle y no suelen ser muy complicados salvo por uno o dos puntos que le añaden dificultad, en cuanto a los talleres,…",
          "pros": "Deja talleres pre-parciales Da bonos Manda retroalimentaciones Utiliza herramientas tecnológicas",
          "contras": "Ninguna",
          "periodo": "2021-10 (virtual)",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
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
        "nombre": "Francisco Javier Novegil Anleo",
        "slug": "francisco-javier-novegil-anleo",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.52,
        "notaPromedio": 4.26,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Es muy amable, escucha a los estudiantes, intenta encontrar metodologías para que los estudiantes aprendan de la mejor forma, meter taller con el ayuda a que electromagnetismo sea un poco menos infierno de lo que ya es, hay que meterle trabajo autonomo, Explica y ayuda mucho",
          "pros": "Se preocupa por los estudiantes Es buena persona Explica las veces que sea necesario",
          "contras": "Ninguno",
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Edgar Felipe Galindez Ruales",
        "slug": "edgar-felipe-galindez-ruales",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.34,
        "notaPromedio": 4.76,
        "resenasOcultas": 4,
        "resena": {
          "texto": "(Taller y Laboratorio) No hay duda de que es una excelente persona sin embargo para personas que no tienen bases del tema y además no son de ir muy rápido en las explicaciones puede que les quede completamente difícil comprender la materia. Su metodología de calificación es elegida por los estudiantes \"cada curso se echa la cuerda al cuello como quiere\" dicho por el mismo jaja, creo que una desventaja importante en contra del profesor es que nunca se comunico con el profesor de magistral o por lo menos no aparento por ende la clase de taller no era de taller, pues solo traducía unas…",
          "pros": "Es buena gente y deja elegir porcentajes. Sabe mucho pero no lo sabe transmitir bien. Califica suave.",
          "contras": "Explicaciones siempre de afán la clase que mas duro fue de 30 minutos. Nunca explico ni un ejercicio en las clases a menos que sea una de las dos sesiones \"preparcial\" y son ejercicios del profesor de magistral. En los…",
          "periodo": "2021-10 (virtual)",
          "calificacion": 2.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Gerardo Gordillo Guzman",
        "slug": "gerardo-gordillo-guzman",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.13,
        "notaPromedio": 4.49,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Es un buen profesor, es buena gente, y en general es relativamente facil de pasar",
          "pros": "Lo unico malo es que las clases pueden ser algo aburridas en algunos momentos, las diapostivas usadas se ven muy desfasadas",
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 4.7,
          "dificultad": 2.6
        }
      },
      {
        "nombre": "Frank Rodolfo Fonseca",
        "slug": "frank-rodolfo-fonseca-fonseca",
        "resenas": 23,
        "calidad": "buena",
        "calificacion": 4.07,
        "notaPromedio": 4.46,
        "resenasOcultas": 22,
        "resena": {
          "texto": "Es un tipazo, metan lo que se con el, quices faciles y explica muy bien, ademas de tirarse muy buenos chistes, yo vi taller con el",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Andrea Johana Abril Fajardo",
        "slug": "andrea-johana-abril-fajardo",
        "resenas": 10,
        "calidad": "regular",
        "calificacion": 4.05,
        "notaPromedio": 4.26,
        "resenasOcultas": 9,
        "resena": {
          "texto": "No entiendo a los que se quejan de la profe, siempre fue muy amable y sus explicaciones son bastante buenas, además de que es muy fácil dejarla alta. En los parciales se preocupa por evaluar que las personas hayan entendido el fundamento físico y no porque uno se aprenda mil fórmulas. Si bien hubo errores en la calificación, ella siempre los aceptó y los corrigió a tiempo, disculpándose. Los que se quejan de que es grosera, no lo es, le escribían a horas no adecuadas a preguntar estupideces (que ya había aclarado en clase) o pedir que subiera ejercicios pre parciales cuando eran los mismos…",
          "pros": "Amable Buenas explicaciones Se puede dejar alta",
          "contras": "Nada, cansones",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 1.9
        }
      },
      {
        "nombre": "Andres Mauricio Bernal Forigua",
        "slug": "andres-mauricio-bernal-forigua",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4,
        "notaPromedio": 4.4,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Vi taller con él. Siento que el profe se esfuerza por explicar lo mejor posible, sin embargo a veces se enreda un poco. Los parciales son acordes a lo que explica y es flexible a las peticiones de los estudiantes.",
          "pros": "Responsable y puntual Organizado Amable",
          "contras": "Se enreda un poco",
          "periodo": "2021-10 (virtual)",
          "calificacion": 3.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jesús David Avellaneda Martínez",
        "slug": "jesus-david-avellaneda-martinez",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 3.93,
        "notaPromedio": 4.23,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Explica bien los temas pero califica duro Le gusta joder por ortografía y baja nota por eso Nos pasó una bitácora de 8 páginas de referencia al comienzo de semestre para luego escoger una de 30 páginas y basarse en esa para la calificación sin posibilidad de corregir, hubo notas de bitácora muy bajitas siendo esa nota un 40% del total. Deja tareas en las clases que suman décimas para ayudar a subir notas malas.",
          "pros": "Es comprensivo con los plazos de entrega",
          "contras": "Jode por todo Costeño Medio cacorro",
          "periodo": "2025-1",
          "calificacion": 3,
          "dificultad": 3
        }
      },
      {
        "nombre": "Diego Alejandro Torres Galindo",
        "slug": "diego-alejandro-torres-galindo",
        "resenas": 26,
        "calidad": "regular",
        "calificacion": 3.83,
        "notaPromedio": 4.59,
        "resenasOcultas": 25,
        "resena": {
          "texto": "El man le sabe mucho, es muy apasionado con el tema, eso se ve expresado en la manera como los estudiantes lo escuchan atentamente por 3 horas, los parciales son, hacer un meme, hacer un motor eléctrico, un podcast, y un video de un proyecto re x que trate de ciencia, y ya, es una materia para dejarla arriva de 45, es parchadisima",
          "pros": "Es entregado con las clases hay tinto gratis",
          "contras": "algunos temas son aburridos, pero no son todos,",
          "periodo": "2026-1",
          "calificacion": 4.5,
          "dificultad": 1.7
        }
      },
      {
        "nombre": "Shirley Gomez Paez",
        "slug": "shirley-gomez-paez",
        "resenas": 48,
        "calidad": "regular",
        "calificacion": 3.56,
        "notaPromedio": 3.7,
        "resenasOcultas": 47,
        "resena": {
          "texto": "La mejor profesora que ha dado FEM, se esmera que uno aprenda en su clase, dinámica con las formas de participar y hacer actividades en el salón, siempre llega de buen humor, parciales de pregunta cerrada, junto con Quiz de cuaderno abierto junto a un compañero, y son los mismo ejercicios que deja en clase de taller o magistral.",
          "pros": "Amable Aprende y enseña muy bien Parciales de pregunta cerrada Quices en parejas y con cuaderno abierto ¿Qué más quieres?",
          "contras": "~Ruleta con el de laboratorio ~Faltando 5 minutos para empezar la clase, a veces escribía que no iba a darla ~Ya no va a dar FEM.",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 4.3
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
        "nombre": "Juan Domingo Baena Doello",
        "slug": "juan-domingo-baena-doello",
        "resenas": 15,
        "calidad": "regular",
        "calificacion": 3.54,
        "notaPromedio": 4.52,
        "resenasOcultas": 14,
        "resena": {
          "texto": "El profe sabe y le gusta mucho la materia, es amable, se deja hablar, y es actualmente campeón del mundo ¿Qué más quieren? Hizo 7 quices de selección múltiple, hizo un parcial final, hizo proyecto final y aparte hizo recuperación de esa nota de quices. No, el tipo es el goat.",
          "pros": null,
          "contras": null,
          "periodo": "2026-2",
          "calificacion": 5,
          "dificultad": 4
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
        "nombre": "Carlos Mario Garzon Ospina",
        "slug": "carlos-mario-garzon-ospina",
        "resenas": 24,
        "calidad": "regular",
        "calificacion": 3.44,
        "notaPromedio": 3.87,
        "resenasOcultas": 23,
        "resena": {
          "texto": "No es muy bueno explicando pero no es tan difícil pasar. Cuando medio explica bien, explica en el tablero, entonces solo los que están al frente ven y entienden y la otra mitad de la clase hace speedrun de las diapositivas. Odia los celulares jajaja entonces comienza a gritar cuando ve a alguien en el celular. A veces pone preguntas entre las diapositivas y esas si son bien útiles de estudiar para los parciales porque puede que las ponga iguales. Hay que estudiarle pero no es taaan difícil. Hubo harta gente el semestre pasado que cinqueó los parciales. Creo que es el único profe que divide el…",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Ian Mitchel Rossi Rincón",
        "slug": "ian-mitchel-rossi-rincon",
        "resenas": 3,
        "calidad": "mala",
        "calificacion": 3.17,
        "notaPromedio": 3.83,
        "resenasOcultas": 2,
        "resena": {
          "texto": "No sé qué habrá pasado en otros semestres, pero por lo menos este semestre el profesor fue un amor. Califica un poco duro los laboratorios, pero precisamente por eso les da un porcentaje menor. Lo más importante es leer a conciencia la bibliografía que el profesor pone para hacer bien los informes. Si se da cuenta de que abusaron de la IA, les va a ir mal, por lo menos en los informes. Hubo compañeros que incluso pusieron que habían usado herramientas que ni siquiera aparecían en los laboratorios y les puso 0. Entonces, de verdad, no abusen de la IA. Para el proyecto final nos dio bastante…",
          "pros": "Es amable Retroalimenta Ayuda si ha trabajado",
          "contras": "Califica asistencia Se da cuenta de la ia Califica duro los laboratorios",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Clara Lilia Calderon Triana",
        "slug": "clara-lilia-calderon-triana",
        "resenas": 18,
        "calidad": "regular",
        "calificacion": 2.98,
        "notaPromedio": 3.66,
        "resenasOcultas": 17,
        "resena": {
          "texto": "No hubo 1 sola clase que no me diera sueño. Explica muy regular y es absurdamente tediosa. La clase de taller es aburrida y complicada. El primer parcial es una mierda y ya en los otros suelta un poquito.",
          "pros": null,
          "contras": null,
          "periodo": "2024-1",
          "calificacion": 2,
          "dificultad": 3.7
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
        "nombre": "joan sebastian ibañez sotelo",
        "slug": "joan-sebastian-ibanez-sotelo",
        "resenas": 2,
        "calidad": "regular",
        "calificacion": 2.95,
        "notaPromedio": 3,
        "resenasOcultas": 1,
        "resena": {
          "texto": "No entiendo por qué esta tan mal calificado si es un buen profesor, o sea si deja mucho trabajo, pero no se sufre tanto, si hay que esforzarse, pero si uno le trabaja bien es buena gente, explica si uno lo necesita, y es relajado en laboratorio, no me parece que sea tan cuchilla",
          "pros": "No es tan duro calificando los informes Es flexible con las fechas y laboratorios No es tan dificil",
          "contras": "Deja mucho trabajo",
          "periodo": "2024-2",
          "calificacion": 4.4,
          "dificultad": 2
        }
      },
      {
        "nombre": "William Jaramillo Garzon",
        "slug": "william-jaramillo-garzon",
        "resenas": 6,
        "calidad": "regular",
        "calificacion": 2.93,
        "notaPromedio": 3.7,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Vi el laboratorio con el, podria decir que es un muy buen docente, califica en los informes exactamente lo que pide, sus explicaciones antes de practica se entienden a la perfeccion y se puede negociar con el los tiempos de entrega",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jaime Villalobos Velasco",
        "slug": "jaime-villalobos-velasco",
        "resenas": 26,
        "calidad": "regular",
        "calificacion": 2.85,
        "notaPromedio": 4.5,
        "resenasOcultas": 25,
        "resena": {
          "texto": "Nop, mejor saltarse en lo mas posible, para laboratorio de Mecanica.",
          "pros": "Te anima a mirar mas alla de las notas y los trabajos Le gusta hablar de muchos temas",
          "contras": "Deja DEMASIADOS trabajos y no califica la mitad, y la otra mitad los califica en los ultimos 3 dias MUY PERO MUY IRRESPONSABLE CON LAS NOTAS. A nosotros no subio la nota a tiempo y fue un 0.0 en el SIA",
          "periodo": "2025-2",
          "calificacion": 2.7,
          "dificultad": 4
        }
      },
      {
        "nombre": "Roberto Franco Peñaloza",
        "slug": "roberto-franco-peñaloza",
        "resenas": 18,
        "calidad": "regular",
        "calificacion": 2.79,
        "notaPromedio": 3.9,
        "resenasOcultas": 17,
        "resena": {
          "texto": "Franco es una buena persona y también profesor. En clase realmente se preocupa porque uno le entienda, pues suele preguntar seguido si hay dudas respecto al tema. Se le puede preguntar lo que considere y él, le responde o lo orienta de una buena manera. Evaluaba con un taller y un parcial en los tres cortes y en los parciales dejaba sacar el taller si lo necesitaba. También solo nos dejó problemas de Serway entonces bien, también. Pese a lo anterior, suele ser muy desorganizado con el tablero y como a veces va un tanto rápido era fácil perderse en los cálculo que hacía",
          "pros": "Enseña bien Se preocupa porque usted aprenda No es difícil pasar",
          "contras": "Desorganizado con el tablero",
          "periodo": "2024-2",
          "calificacion": 4.5,
          "dificultad": 4.6
        }
      },
      {
        "nombre": "Plinio Del Carmen Teheran Sermeno",
        "slug": "plinio-del-carmen-teheran-sermeno",
        "resenas": 17,
        "calidad": "regular",
        "calificacion": 2.79,
        "notaPromedio": 3.83,
        "resenasOcultas": 16,
        "resena": {
          "texto": "Se le hizo tarde para subir notas y nos puso 5 a todos, en general da buenas clases pero si ya tuviste clases virtuales sabras lo aburridas y faciles de evitar que son, entonces si eres juicioso y pones cuidado quiza aprendas algo pero si no los parciales son en moodle y con un buen prompt y notebook lm pasas, tambien hay bastante gente que los hace si les pagas entonces puedes pasar pagando pero pues tin",
          "pros": "-Es virtual -Si da clase y mientras que entregue lo que debe(que es bastante a mi parecer)",
          "contras": "-Es virtual -Lo unico malo ademas de eso es que aveces se inspira y se pone a hablar de politica",
          "periodo": "2026-2",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "José José Barba Ortega",
        "slug": "josé-josé-barba-ortega",
        "resenas": 10,
        "calidad": "regular",
        "calificacion": 2.79,
        "notaPromedio": 3.44,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Pésimo profesor. La verdad, no se aprende absolutamente nada en la clase. Si uno quiere pasar, le toca estudiar todo por su cuenta porque las explicaciones no ayudan mucho. Los parciales parecen hechos para hacer perder a todo el mundo, no para evaluar lo que realmente se ve en clase. Es demasiado frustrante porque una cosa es que la materia sea difícil y otra que las evaluaciones estén completamente desconectadas de lo que enseñan.",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "German Arenas Sicard",
        "slug": "german-arenas-sicard",
        "resenas": 4,
        "calidad": "mala",
        "calificacion": 2.73,
        "notaPromedio": 4.4,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Un hombre maravilloso, un caballero la nota es lo de menos pues si se le trabaja queda alto",
          "pros": "Nota alta Acepta recomendaciones",
          "contras": "Es difícil la comunicación con el",
          "periodo": "2020-20 (virtual)",
          "calificacion": 4.1,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Hector Fabio Castro Serrato",
        "slug": "hector-fabio-castro-serrato",
        "resenas": 15,
        "calidad": "mala",
        "calificacion": 2.72,
        "notaPromedio": 3.51,
        "resenasOcultas": 14,
        "resena": {
          "texto": "(Laboratorio) Hector es un caso de estudio, enseña bien, no es malo de hecho cuando enseña creo que es bastante bueno, pero el profesor es sumamente desinteresado por la materia, realmente no hay mucho que decir de el, si usted no le puso atención en como explico la práctica paila, si usted llega tarde lo más probable es que el le haga perder el tiempo. Un día nadie llevo bitacora porque no subió la práctica al moodle y nos culpo xd (siendo que varios le enviamos correo el día anterior y no contesto). Ayudo con una práctica extra la cual reponia la peor nota.",
          "pros": "bueno explicando. fácil dejarla \"alta\"",
          "contras": "Sus retroalimentaciones es poner \"?\" y esperar que uno sepa que es.",
          "periodo": "2026-1",
          "calificacion": 3,
          "dificultad": 4
        }
      },
      {
        "nombre": "Gil Capote Rodriguez",
        "slug": "gil-capote-rodriguez",
        "resenas": 50,
        "calidad": "mala",
        "calificacion": 2.7,
        "notaPromedio": 2.74,
        "resenasOcultas": 49,
        "resena": {
          "texto": "Increíble que el profe tenga tan malas calificaciones jaja es chistoso, en laboratorio es fácil dejarla alta, es un amor cuando explica los fenomenos de fem y es entusiasta. En taller hay que competir por puntos y los talleres, quices semanales y parciales de magistral pueden ser difíciles pero si se estudia se pasan. Aprende con él si estudia a conciencia y las clases son amenas.",
          "pros": "chistoso, carismatico, buena gente, ordenado",
          "contras": "tira duro en los parciales, taller es una competencia",
          "periodo": "2024-1",
          "calificacion": 4.3,
          "dificultad": 4.6
        }
      },
      {
        "nombre": "Jose Edgar Alfonso Orjuela",
        "slug": "jose-edgar-alfonso-orjuela",
        "resenas": 17,
        "calidad": "mala",
        "calificacion": 2.25,
        "notaPromedio": 2.62,
        "resenasOcultas": 16,
        "resena": {
          "texto": "Mejor evitar. El profesor sabe mucho de FEM y se nota, pero es súper grosero y además tira a matar. Jamás lo vi poner una nota de un informe por encima de 3,5, y fue solo en una ocasión; las notas promedio son 2,0 y 2,5. La verdad, pone unos estándares altísimos que seguro que ni él alcanza, enseña un poco a los golpes (figurativamente, claro) y bastante a la carrera (aunque la labor de enseñar los temas realmente no es del profesor de laboratorio, para ser honestos). A mí me cayó bien, pero no debería. Evite inscribir con él y, si no puede, entonces demuestre interés, estudie y dedíquese lo…",
          "pros": "No hay, honestamente.",
          "contras": "Estándares altísimos y muy cuchilla. Grosero (a mí me hacía gracia, pero un profesor no debería actuar así).",
          "periodo": "2025-2",
          "calificacion": 2,
          "dificultad": 4.8
        }
      },
      {
        "nombre": "Yuly Edith Sanchez Mendoza",
        "slug": "yuly-edith-sanchez-mendoza",
        "resenas": 8,
        "calidad": "mala",
        "calificacion": 2.08,
        "notaPromedio": 3.86,
        "resenasOcultas": 7,
        "resena": {
          "texto": "No meta con ella, que pereza, solo les voy a decir que desde que empezamos laboratorio nos organizó los grupos al azar y hace guías de laboratorio larguísimas echas totalmente con ChatGPT y es curioso porque ni ella es consciente de todo el trabajo que deja porque luego se le acumula y al dia de hoy, el último dia del semestre todavía no tengo ni una nota de laboratorio jajajjajajja. Siempre llega tarde a clase o a veces ni va, tambien si le da la gana dice que mandemos los informes a mano y pues lo único bueno la verdad es que explica chimba el laboratorio aunque a veces se confunde con las…",
          "pros": "Hace la clase medio dinámica",
          "contras": "Guías larguisisiisisisisimas hechas con ChatGPT y no da notas.",
          "periodo": "2025-2",
          "calificacion": 2.5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Rafael Antonio Pineda Medina",
        "slug": "rafael-antonio-pineda-medina",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 1.5,
        "notaPromedio": 3.6,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Vi con este señor laboratorio de electricidad y magnetismo y que persona tan pedante, nada recomendado cada clase se perdía y daba temas super avanzados y se enojaba si nadie le respondía además esos temas al final no terminaban sirviendo para nada, se hicieron pocas practicas y molestaba mucho en cada entrega, en si no lo haga compa.",
          "pros": null,
          "contras": null,
          "periodo": "2021-10 (virtual)",
          "calificacion": 1.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Alvaro Valdes De Luxan",
        "slug": "alvaro-valdes-de-luxan",
        "resenas": 7,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Buen esquema general de clase, cuenta con la debilidad al programar y da un tiempo para asimilar esto. Los programas son muy realizables y aún más con la ayuda de él solventando los detalles. El parcial se puede dejar alto si se practica lo suficiente en programación y en específico a programar los métodos numéricos en cuestión.",
          "pros": "Claro y receptivo a dudas Ayuda con el código",
          "contras": null,
          "periodo": "2018-20",
          "calificacion": 4,
          "dificultad": 2.5
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
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.83,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Es el goat, laboratorio entretenido, hace \"magistral\" para aclarar mejor el laboratorio y en general califica bien los informes.",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Silvia Niño Peña",
        "slug": "silvia-nino-pena",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 5,
        "resenasOcultas": 1,
        "resena": {
          "texto": "La profe es un amor, es comprensiva con los estudiantes y si es juicioso con sus informes la deja muy alta. Aquí el truco está en que en su grupo no hagan los informes por turnos sino que distribuyan bien sus partes y en general sean pulidos con redacción y demás cositas, de igual manera su forma de enseñar es directa y al grano, por lo que no se hace ladrilluda la materia.",
          "pros": "Buena gente Comprensiva La puede dejar muy alta Aprende a hacer buenos informes",
          "contras": "Ninguno",
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Miguel Angel Bulla Rivas",
        "slug": "miguel-angel-bulla-rivas",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 4.99,
        "notaPromedio": 4.88,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Este profesor es un amor <3 Uno aprende demasiado en el laboratorio aunque haya sido virtual, especialmente a usar Tracker y hacer informes.",
          "pros": "Amable Responde dudas siempre y rápido Paciente Sabe mucho",
          "contras": "Se demora en calificar",
          "periodo": "2021-10 (virtual)",
          "calificacion": 4.9,
          "dificultad": 4
        }
      },
      {
        "nombre": "David Alejandro Barón Ospina",
        "slug": "david-alejandro-baron-ospina",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 4.96,
        "notaPromedio": 4.53,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Al profe le echan muchas flores y la verdad es que en parte se las merece, pero creo que como todos los demás profesores puede mejorar, por lo que voy a intentar ser imparcial (aunque creo que la clase solo tiene una cosa negativa). Primero, comencemos con que la mentalidad del profesor con respecto a la materia es maravillosa. Él quiere que usted apruebe porque aprende. Además, califica bien y da tiempo para correcciones, explica todo lo que pide en clase y lo que no, lo manda por videos. Responde dudas por WhatsApp a cualquier hora (por favor, no abusen de esto) y aunque no sea de…",
          "pros": "-El profesor tiene una buena actitud y quiere que aprendas. -El profesor califica de forma justa y te da oportunidades de mejorar. -El profesor te explica todo lo que pide y te envía material complementario. -El…",
          "contras": "-Los talleres son pesados y requieren mucho tiempo y esfuerzo",
          "periodo": "2023-2",
          "calificacion": 4.7,
          "dificultad": 2.6
        }
      },
      {
        "nombre": "Fabian Felipe Quevedo Farieta",
        "slug": "fabian-felipe-quevedo-farieta",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.93,
        "notaPromedio": 4.6,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Un profe de lab muy bueno, dispuesto a que los estudiantes entiendan las clases de forma fácil y sencilla. No le molesta poner buenas notas y enseña cosas que no están en el curso pero que son necesarias aprenderlas como es un poquito de estadística. Lo único a tener en cuenta es que el profe pide que los informes sean a mano, sin embargo, si usted o alguno de su grupo toma apuntes en tablet el permite que pueda imprimir esas hojas facilitando enormemente el trabajo a realizar. Es muy recomendable ver con el.",
          "pros": "Calificaciones justas Clases de lab interesantes Flexible con las clases Ordenado con las clases y con las notas dispuesto a responder dudas",
          "contras": "Habla muy pasito, casi no se le escucha nada Los informes son a mano El horario(era de 7am a 9am)",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jose Antonio Sanchez Monroy",
        "slug": "jose-antonio-sanchez-monroy",
        "resenas": 18,
        "calidad": "buena",
        "calificacion": 4.91,
        "notaPromedio": 4.41,
        "resenasOcultas": 17,
        "resena": {
          "texto": "(Laboratorio) Es un profesor con la siguiente consigna: \"El laboratorio no debe estar al servicio de la teoría\", lo cual me parece maravilloso conceptualmente, por otra parte el no le va a pedir informes largos y con ecuaciones que describan los fenómenos, a el le importa más un análisis cualitativo que permite entender los sucesos.",
          "pros": null,
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
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
        "nombre": "Ever David Alcala Cajar",
        "slug": "ever-david-alcala-cajar",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.85,
        "notaPromedio": 4.35,
        "resenasOcultas": 1,
        "resena": {
          "texto": "(laboratorio) El mejor profe de laboratorio. Super comprensivo en general, nos explicaba los marcos teóricos incluso antes de hacer la práctica. No tocaba hacer pre informe sino llegar con la guia ya leída. Incluso es tan crack q podíamos entregar los trabajos un poco tarde siempre y cuando el no los haya calificado antes. En general un buen profesor y ojala siga dictando laboratorio",
          "pros": "Crack idolo Fiera CR7 Messi GOAT",
          "contras": "Ninguno",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2
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
        "nombre": "Julian Mateo Mendoza Guitierrez",
        "slug": "julian-mateo-mendoza-guitierrez",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.83,
        "notaPromedio": 4.47,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Muy bueno para laboratorio, explica bien, deja guías para los informes, ayuda mucho a que la nota quede alta, no se siente como profesor, sino como un compañero que le enseña de mecánica.",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2
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
        "nombre": "Gladys Aminta Mendoza Baron",
        "slug": "gladys-aminta-mendoza-baron",
        "resenas": 26,
        "calidad": "buena",
        "calificacion": 4.71,
        "notaPromedio": 4.52,
        "resenasOcultas": 25,
        "resena": {
          "texto": "Es una docente increible, fomenta la curiosidad, ama lo que hace y se esmera para q los alumnos aprendan",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Oscar Giovanni Toerres Diaz",
        "slug": "oscar-giovanni-toerres-diaz",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.6,
        "notaPromedio": 4.6,
        "resenasOcultas": 2,
        "resena": {
          "texto": "El profesor Oscar me dio laboratorio en fundamentos de mecánica. Es un profesor muy chevere, los experimentos y sus clases me parecieron muy interesantes. Me gustaba que el hiciera taller de lo visto en la misma clase con el y que no dejaba tareas para la casa. El explica muy bien los temas que se ven, los explica muy intuitivamente, el me hizo entender cosas que no habia entendido muy claramente en la clase magistral. El ayuda con la nota y hace un proyecto final. En el proyecto que presente me encontró resto de errores y cosas que no había tenido en cuenta, mas aun así me coloco buena nota;…",
          "pros": "Explica de forma intuitiva. Hace experimentos interesantes. Es chistoso y chevere. No deja cosas para la casa. Ayuda con la nota.",
          "contras": "Ninguno la verdad",
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jorge Iván Montes Monsalve",
        "slug": "jorge-ivan-montes-monsalve",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4.6,
        "notaPromedio": 4.4,
        "resenasOcultas": 0,
        "resena": {
          "texto": "El profesor es apasionado, y no exagero cuando lo digo. Nunca había conocido a una persona más activa como el profe Montes. El señor siempre está caminando a través del salón y ¡Hasta salta en las sillas! Eso sí, enseña desde el razonamiento, así que prepárate para probablemente no entenderle todos los conceptos que enseña en sus materias.",
          "pros": "Muy activo y conversador. Tiene muchos años de experiencia. Realmente quiere que aprendamos. Hace laboratorios interesantes. Parciales en parejas. Ejercicios de la clase y del Serway salen en el parcial",
          "contras": "No le gusta que le usen IA. Es física, así que espera muchos conceptos abstractos que te harán frustrar la primera vez. A veces se va muy lejos para lo que se debería enseñar en el curso. Requiere mucho estudio…",
          "periodo": "2025-2",
          "calificacion": 4.6,
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
        "nombre": "Juan Santiago Cortes Gonzalez",
        "slug": "juan-santiago-cortes-gonzalez",
        "resenas": 21,
        "calidad": "buena",
        "calificacion": 4.56,
        "notaPromedio": 4.33,
        "resenasOcultas": 19,
        "resena": {
          "texto": "Juan Santiago es un excelente profesor, muy atento a las dudas de cada estudiante y muy organizado con los temas y las notas. Maneja un sistema de bonos por exposiciones grupales, en el cual, la primera exposición del corte suma unidades para el parcial que se califica sobre 4 y la segunda da puntos para sumar a la nota más baja. La nota de talleres la saca de los pre-parciales que hace por Moodle y además de ello manda ejercicios de repaso. Los parciales también se hacen por Moodle y no suelen ser muy complicados salvo por uno o dos puntos que le añaden dificultad, en cuanto a los talleres,…",
          "pros": "Deja talleres pre-parciales Da bonos Manda retroalimentaciones Utiliza herramientas tecnológicas",
          "contras": "Ninguna",
          "periodo": "2021-10 (virtual)",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "William Fernando Oquendo Patiño",
        "slug": "william-fernando-oquendo-patiño",
        "resenas": 20,
        "calidad": "buena",
        "calificacion": 4.56,
        "notaPromedio": 4.34,
        "resenasOcultas": 19,
        "resena": {
          "texto": "El profesor, en general, tiene una excelente metodología de enseñanza basada principalmente en trabajos y tareas. Se parte desde cero conocimiento y se logra comprender por completo lo básico de C++. Las evaluaciones de los trabajos se califican sobre 6 puntos, lo que facilita obtener una buena nota siempre que se entreguen todos. Cada semana deja una tarea con una duración aproximada de dos horas. Además, al final del semestre se realiza un proyecto final que corresponde a un cuarto de la nota. Para este, se otorgan entre dos y tres semanas de desarrollo, y su dificultad es moderada, sin…",
          "pros": "Muy buenas explicaciones Se puede dejar alta",
          "contras": "Muchos trabajos Los parciales suelen bajar la nota",
          "periodo": "2025-1",
          "calificacion": 4.7,
          "dificultad": 1.7
        }
      },
      {
        "nombre": "Francisco Javier Novegil Anleo",
        "slug": "francisco-javier-novegil-anleo",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.52,
        "notaPromedio": 4.26,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Es muy amable, escucha a los estudiantes, intenta encontrar metodologías para que los estudiantes aprendan de la mejor forma, meter taller con el ayuda a que electromagnetismo sea un poco menos infierno de lo que ya es, hay que meterle trabajo autonomo, Explica y ayuda mucho",
          "pros": "Se preocupa por los estudiantes Es buena persona Explica las veces que sea necesario",
          "contras": "Ninguno",
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Rodrigo Castellano Caro",
        "slug": "rodrigo-castellano-caro",
        "resenas": 19,
        "calidad": "buena",
        "calificacion": 4.51,
        "notaPromedio": 4.59,
        "resenasOcultas": 18,
        "resena": {
          "texto": "EL profe es muy buena opción para fisica. Es demostrativo y le gusta derivar las formulas. Este semestre por el paro no vimos el ultimo tema de óptica. Al final se hicieron 3 quices y 2 parciales. El tercer quiz reemplazo un parcial porque ya no teníamos tiempo y teníamos una nota faltando 3 semanas para que se acabara el semestre. Es flexible con las fechas y los trabajos y si le pregunta algo que no entiende el le explica. Es una exclelente opción. La mayoría de gente paso y es facil pasarla.",
          "pros": "facil de pasar explica bien buena gente evaluaciones virtuales",
          "contras": "cuando habla puedo que le de un poco de sueño.",
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Jose Alfredo Gomez Mateus",
        "slug": "jose-alfredo-gomez-mateus",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.8,
        "resenasOcultas": 0,
        "resena": {
          "texto": "El profe es bastante relajado, tuvimos clase de taller con él solo las primeras 6 semanas porque estaba reemplazando al profe Ramiro Cardona que estaba de sabático. La clase consistía en que el dejaba algunos ejercicios del Serway y se tenían que traer resueltos para la sesión siguiente, cada uno pasaba al tablero a exponer uno (a veces se podía elegir cual, otras veces era el azar, por lo que es importante hacer todos los ejercicios que deja, no obstante, son entre mucho 10 - 15 ejercicios), de ahí sacaba una nota semanal.",
          "pros": "En general me pareció un buen profe. Responde preguntas. Cuando no se entiende algo él mismo explica el tema. Califica suave.",
          "contras": "Que no volvimos a tener clase con el porque estaba de reemplazo :(((",
          "periodo": "2025-2",
          "calificacion": 4.5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Miguel Enrique Gamez Lopez",
        "slug": "miguel-enrique-gamez-lopez",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.9,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Dicto el taller de mecánica, es joven y muy dado a que el estudiante aprenda, deja muchas actividades, prácticamente quiz semanal. Algunas veces solo hace quizz por la asistencia de lo que se hace en clase, fácil de dejar altos.",
          "pros": "Amable Si presta atención la deja alta",
          "contras": "Ninguna",
          "periodo": "2025-1",
          "calificacion": 4.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Orlando Carrillo Bohórquez",
        "slug": "orlando-carrillo-bohórquez",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 4.47,
        "notaPromedio": 4.38,
        "resenasOcultas": 3,
        "resena": {
          "texto": "fue mi profesor de taller y me parecio muy muy bueno, aveces bajaba mucho por cosas tontas, pero en general el profesor es excelente",
          "pros": "- es muy buena gente - el profesor mas organizado que conoci - explica si usted no entiende puntos de los talleres - la verdad es muy buen profesor",
          "contras": "- un poco aburridor aveces, pero nada grave - aveces se da garra calificando",
          "periodo": "2021-10 (virtual)",
          "calificacion": 4,
          "dificultad": 3.6
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
        "nombre": "Edgar Felipe Galindez Ruales",
        "slug": "edgar-felipe-galindez-ruales",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.34,
        "notaPromedio": 4.76,
        "resenasOcultas": 4,
        "resena": {
          "texto": "(Taller y Laboratorio) No hay duda de que es una excelente persona sin embargo para personas que no tienen bases del tema y además no son de ir muy rápido en las explicaciones puede que les quede completamente difícil comprender la materia. Su metodología de calificación es elegida por los estudiantes \"cada curso se echa la cuerda al cuello como quiere\" dicho por el mismo jaja, creo que una desventaja importante en contra del profesor es que nunca se comunico con el profesor de magistral o por lo menos no aparento por ende la clase de taller no era de taller, pues solo traducía unas…",
          "pros": "Es buena gente y deja elegir porcentajes. Sabe mucho pero no lo sabe transmitir bien. Califica suave.",
          "contras": "Explicaciones siempre de afán la clase que mas duro fue de 30 minutos. Nunca explico ni un ejercicio en las clases a menos que sea una de las dos sesiones \"preparcial\" y son ejercicios del profesor de magistral. En los…",
          "periodo": "2021-10 (virtual)",
          "calificacion": 2.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Jose Daniel Muñoz Castaño",
        "slug": "jose-daniel-muñoz-castaño",
        "resenas": 20,
        "calidad": "buena",
        "calificacion": 4.26,
        "notaPromedio": 4.02,
        "resenasOcultas": 19,
        "resena": null
      },
      {
        "nombre": "Luis Luis Agulles Pedrós",
        "slug": "luis-luis-agulles-pedrós",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.15,
        "notaPromedio": 4.15,
        "resenasOcultas": 5,
        "resena": {
          "texto": "El profesor es atento, comprensible y amable, siempre está dispuesto a colaborarle a sus estudiantes y hasta quizás llegue a pasarse de flexible, pero no creo que nadie pueda verlo como una queja. El tema que abarcó para el semestre 2024-II fue extrañamente denso al final del curso, quizás no se planificaron bien algunas clases y no se abarcó el tema correctamente. Sus parciales me parecen todos muy justos; los exámenes de taller suelen ser sencillos y no muy largos, mientras que los teóricos tienen la ventaja de ser virtuales. A veces se traba o se confunde él sólo, pero siempre se corrige…",
          "pros": "Carismático y buena persona Parciales sencillos Notas altas",
          "contras": "Recomendación: Practiquen lo básico de cálculo diferencial, álgebra y trigonometría",
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 3
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
        "nombre": "Carlos Eduardo Sandoval Usme",
        "slug": "carlos-eduardo-sandoval-usme",
        "resenas": 19,
        "calidad": "buena",
        "calificacion": 4.03,
        "notaPromedio": 3.77,
        "resenasOcultas": 18,
        "resena": {
          "texto": "Sus clases son 50 a 70 diapositivas en hora y media masomenos, puede ir muy rapido, hay tanta informacion que no se sabe muy bien que pueda salir en el parcial, responde preguntas, es amable, y si lleva su tiempo estudiar",
          "pros": "Amable Respetusoso",
          "contras": "Myuy rapido Mucha informacion",
          "periodo": "2025-1",
          "calificacion": 4.2,
          "dificultad": 4
        }
      },
      {
        "nombre": "Hector Mauricio Martinez Camargo",
        "slug": "hector-mauricio-martinez-camargo",
        "resenas": 12,
        "calidad": "buena",
        "calificacion": 4.02,
        "notaPromedio": 4.11,
        "resenasOcultas": 11,
        "resena": {
          "texto": "buen profe, chistoson, algo enojon pero me senti bien en su clase. Te diria que la metas pero que tienes que meterle en serio su tiempo al estudio de parciales (son practicos y un poco de teoria)",
          "pros": "suave calificando en los parciales",
          "contras": "dan ganas de zzzzzz no responde mucho a las dudas, puesto que busca que uno mismo \"entienda que está haciendo\" a nosotros nos calificó los artículos que pide de seguido, por ende, los errores del primero se repitieron…",
          "periodo": "2024-1",
          "calificacion": 4,
          "dificultad": 4
        }
      },
      {
        "nombre": "Andres Mauricio Bernal Forigua",
        "slug": "andres-mauricio-bernal-forigua",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4,
        "notaPromedio": 4.4,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Vi taller con él. Siento que el profe se esfuerza por explicar lo mejor posible, sin embargo a veces se enreda un poco. Los parciales son acordes a lo que explica y es flexible a las peticiones de los estudiantes.",
          "pros": "Responsable y puntual Organizado Amable",
          "contras": "Se enreda un poco",
          "periodo": "2021-10 (virtual)",
          "calificacion": 3.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Yaimy Dallana Camargo Camargo",
        "slug": "yaimy-dallana-camargo-camargo",
        "resenas": 2,
        "calidad": "regular",
        "calificacion": 4,
        "notaPromedio": 3.2,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Es bien dificil todo con ella, solo meta con ella si en magistral y taller tiene profes que hagan que valga la pena, ademas laboratorio solo tiene el 20%, por lo que no vale la pena dedicarle todo el esfuerzo que implica ver con ella, tan solo aplique la del minimo esfuerzo y ya, no se preocupe y no se estrese (y consiga un buen grupo de trabajo, que por lo menos no le quede tan baja la nota)",
          "pros": "Explica bien Sabe del tema",
          "contras": "Muy quisquillosa con las bitacoras Es cuchilla y tira a matar",
          "periodo": "2024-1",
          "calificacion": 4,
          "dificultad": 5
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
        "nombre": "Edna Carolina Pinilla",
        "slug": "edna-carolina-pinilla",
        "resenas": 31,
        "calidad": "regular",
        "calificacion": 3.87,
        "notaPromedio": 4.01,
        "resenasOcultas": 30,
        "resena": {
          "texto": "FUE HORRIBLE la profesora explica bien y es buena persona pero la clase fue terrible, los porcentajes eran 20 taller 20 lab y 60 para magistral (20% cada parcial) si la quiere sacar alta NO inscriba con ella a menos que se quiera matar estudiando si piensa copiarle a menos que no sepa como lo va a hacer no lo haga, anula los parciales por sospecha y es bastante complicado sin alguien ayudando desde afuera no se sabe que estudiar, ella da los libros guias pero no dice que temas va a sacar ni cual libro estudiar para repasar los parciales entonces hay que estudiar TODO las clases son cheveres,…",
          "pros": "buena gente (al menos) explicaciones decentes va a aprender si mete con ella",
          "contras": "muy dificil copiarle un parcial se debe estudiar todas las guias y libros que de para estar preparado no regala nota o talleres para subir",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 4.8
        }
      },
      {
        "nombre": "Juan Pablo Rubio Ospina",
        "slug": "juan-pablo-rubio-ospina",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 3.84,
        "notaPromedio": 4.34,
        "resenasOcultas": 7,
        "resena": {
          "texto": "El profesor fue muy bueno, las explicaciones fueron claras, nos permito presentar cuatro parciales y solo tomaba las tres notas más altas, eso me beneficio bastante, los parciales fueron en moodle pero eran casi idénticos a los del taller, aprendí a manejar latex y tracker, me toco estudiar un poco más porque hasta ahora estaba viendo calculo integral y en la segunda clase coloco integrales por sustitución, dijo que iba a entregar las notas rápido, pero en realidad fue hasta el final la entrega, tuve un buen grupo de trabajo, eso nos benefició a todos. Dio muchos bonos, si uno es medianamente…",
          "pros": "Bonos en la notas Explica bien es buena persona y mable",
          "contras": "saber calculo integral notas tarde",
          "periodo": "2021-10 (virtual)",
          "calificacion": 4.8,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Diego Alejandro Torres Galindo",
        "slug": "diego-alejandro-torres-galindo",
        "resenas": 26,
        "calidad": "regular",
        "calificacion": 3.83,
        "notaPromedio": 4.59,
        "resenasOcultas": 25,
        "resena": {
          "texto": "El man le sabe mucho, es muy apasionado con el tema, eso se ve expresado en la manera como los estudiantes lo escuchan atentamente por 3 horas, los parciales son, hacer un meme, hacer un motor eléctrico, un podcast, y un video de un proyecto re x que trate de ciencia, y ya, es una materia para dejarla arriva de 45, es parchadisima",
          "pros": "Es entregado con las clases hay tinto gratis",
          "contras": "algunos temas son aburridos, pero no son todos,",
          "periodo": "2026-1",
          "calificacion": 4.5,
          "dificultad": 1.7
        }
      },
      {
        "nombre": "Diana Elizabeth Saavedra Mesa",
        "slug": "diana-elizabeth-saavedra-mesa",
        "resenas": 10,
        "calidad": "regular",
        "calificacion": 3.68,
        "notaPromedio": 4.34,
        "resenasOcultas": 9,
        "resena": {
          "texto": "me parecio muy buena en general (magistral) , pero en una ocasion ella se enfermo por dos semanas, lo cual se comprende y ella mando grabaciones. pero aun asi sin ver la clase con ell ni resolver dudas, el parcial estuvo complicado compicado lo que no me parecio muy justo. y al final todo correr y explico 3 temas del ultimo parcial en solo 30 minutos de clase, y pues obvio nadie entendio bien eso. y toco estudiar por cuenta propia",
          "pros": "-amable -explica bien - parciales trabajables",
          "contras": "-corre mucho -se atrasa mucho(fuera de le enfermedad que eso se comprende)",
          "periodo": "2021-10 (virtual)",
          "calificacion": 3.4,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Carlos Leonardo Viviescas Ramirez",
        "slug": "carlos-leonardo-viviescas-ramirez",
        "resenas": 15,
        "calidad": "regular",
        "calificacion": 3.67,
        "notaPromedio": 3.85,
        "resenasOcultas": 14,
        "resena": {
          "texto": "el mejor profe del fem, es muy atento en general y es apasionado por el tema",
          "pros": "explica muy bien saca muchas notas",
          "contras": "talleres largos",
          "periodo": "2025-2",
          "calificacion": 4.9,
          "dificultad": 4.4
        }
      },
      {
        "nombre": "Rigoberto Angel Casas Miranda",
        "slug": "rigoberto-angel-casas-miranda",
        "resenas": 15,
        "calidad": "regular",
        "calificacion": 3.67,
        "notaPromedio": 4.13,
        "resenasOcultas": 14,
        "resena": {
          "texto": "El profesor puede ser algo condescendiente a veces, el trato frío y distante (en todos los aspectos). En cuanto a la clase es un poco básica, él pasa a leer unas diapositivas y de vez en cuando pregunta cosas. Desde el inicio del curso dijo que no iba a pasar lista entonces a las clases íbamos como 5 personas xd. Los parciales son idénticos al taller que deja para estudiar, hizo quices virtuales, 3 parciales y un proyecto que consistió en un vídeo de 20 minutos acerca de un tema. Me memoricé los talleres la semana anterior al día del exámen y pasé sin pena ni gloria, fue muy pasable.",
          "pros": null,
          "contras": null,
          "periodo": "2026-2",
          "calificacion": 3.5,
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
        "nombre": "Jereson Silva Valencia",
        "slug": "jereson-silva-valencia",
        "resenas": 30,
        "calidad": "regular",
        "calificacion": 3.59,
        "notaPromedio": 3.86,
        "resenasOcultas": 29,
        "resena": {
          "texto": "Este profesor es excelente en todos los aspectos, notas balanceadas entre talleres, parciales y laboratorios. pero, le hace comer tema como cena de 24, no termina de interiorizar un tema y ya va explicando otros dos; si usted estudia átonamente debería parecerle relativamente fácil, haga muchos ejercicios",
          "pros": "Sabe mucho Es justo con la nota",
          "contras": "Va demasiado rápido",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Shirley Gomez Paez",
        "slug": "shirley-gomez-paez",
        "resenas": 48,
        "calidad": "regular",
        "calificacion": 3.56,
        "notaPromedio": 3.7,
        "resenasOcultas": 47,
        "resena": {
          "texto": "La mejor profesora que ha dado FEM, se esmera que uno aprenda en su clase, dinámica con las formas de participar y hacer actividades en el salón, siempre llega de buen humor, parciales de pregunta cerrada, junto con Quiz de cuaderno abierto junto a un compañero, y son los mismo ejercicios que deja en clase de taller o magistral.",
          "pros": "Amable Aprende y enseña muy bien Parciales de pregunta cerrada Quices en parejas y con cuaderno abierto ¿Qué más quieres?",
          "contras": "~Ruleta con el de laboratorio ~Faltando 5 minutos para empezar la clase, a veces escribía que no iba a darla ~Ya no va a dar FEM.",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 4.3
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
        "nombre": "Carlos Mario Garzon Ospina",
        "slug": "carlos-mario-garzon-ospina",
        "resenas": 24,
        "calidad": "regular",
        "calificacion": 3.44,
        "notaPromedio": 3.87,
        "resenasOcultas": 23,
        "resena": {
          "texto": "No es muy bueno explicando pero no es tan difícil pasar. Cuando medio explica bien, explica en el tablero, entonces solo los que están al frente ven y entienden y la otra mitad de la clase hace speedrun de las diapositivas. Odia los celulares jajaja entonces comienza a gritar cuando ve a alguien en el celular. A veces pone preguntas entre las diapositivas y esas si son bien útiles de estudiar para los parciales porque puede que las ponga iguales. Hay que estudiarle pero no es taaan difícil. Hubo harta gente el semestre pasado que cinqueó los parciales. Creo que es el único profe que divide el…",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Doris Yaneth Cadavid Rodriguez",
        "slug": "doris-yaneth-cadavid-rodriguez",
        "resenas": 20,
        "calidad": "regular",
        "calificacion": 3.44,
        "notaPromedio": 3.78,
        "resenasOcultas": 19,
        "resena": {
          "texto": "Buena profeasora, es muy amable, te explica todo con detalle, pero es MUY EXIGENTE, aprendes nuevos conceptos de nanomateriales, le toca estudiar cosas por su cuenta, ya que las tecnias las exponen compañeros de clase cada 2 semanas mientras trabaja en un proyecto de un material, es casi que una tesis.",
          "pros": "Es amable",
          "contras": "Muy exigente",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 5
        }
      },
      {
        "nombre": "Pedro Hernan Sanchez Machet",
        "slug": "pedro-hernan-sanchez-machet",
        "resenas": 17,
        "calidad": "regular",
        "calificacion": 3.39,
        "notaPromedio": 3.81,
        "resenasOcultas": 16,
        "resena": {
          "texto": "La verdad es de los peores profes que he tenido hasta el momento. Califica como se le da la gana y te baja un montón por cualquier cosa. Te pone a hacer 12 informes de los cuales califica 4 y de ahí sale la nota. No se le entiende casi, tanto por lo bajo que habla como por el hecho de que a veces le da por inventarse la práctica en el momento en vez de seguir la guía que mandó a imprimir",
          "pros": "No pide bitácora ni preinforme",
          "contras": "Todo lo demás",
          "periodo": "2025-2",
          "calificacion": 2,
          "dificultad": 4
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
      },
      {
        "nombre": "Omar Eduardo Olarte Pataquiva",
        "slug": "omar-eduardo-olarte-pataquiva",
        "resenas": 8,
        "calidad": "regular",
        "calificacion": 3.35,
        "notaPromedio": 3.81,
        "resenasOcultas": 7,
        "resena": {
          "texto": "El profesor en general es muy amable. Las notas consisten en 3 parciales, tareas y un proyecto. Dentro de la tarea entran quices que hace durante la clase como metodo de tomar asistencia. El profesor dicta la tematica muy bien y es detallista cuando ve que alguien no esta entendiendo. Algo negativo es que cuando una demostración no sale la deja de tarea y en ocaciones hace que se pierda el ritmo de la clase. Ademas, los talleres suelen ser largos.",
          "pros": "Amable Suave calificando quices y tareas",
          "contras": "Suele demorarse en entregar las primeras notas Tareas largas",
          "periodo": "2025-2",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Ovidio Amado Almanza Montero",
        "slug": "ovidio-amado-almanza-montero",
        "resenas": 50,
        "calidad": "regular",
        "calificacion": 3.15,
        "notaPromedio": 3.64,
        "resenasOcultas": 49,
        "resena": {
          "texto": "Es un docente apasionado por la enseñanza, se aprende mucho con él, lo recomiendo bastante, sus clases son amenas y muchas veces cuenta historias con las que uno se ríe en clase. Es costeño, por lo que es recochero, pero cuando se enoja el cuento es otro, por lo general suele suceder que si no le ponen cuidado en clase o están en el celular y los ve, los regaña bien feo. En clases muchas veces se la monta a algún estudiante, pero no en mal plan, es de recocha mayormente. Si se requiere bastante estudio autónomo, pero si usted hace con juicio los ejercicios de las diapositivas que envía, pasa…",
          "pros": "-Clases amenas: Muchas veces cuenta chistes y consejos de vida -Aprendizaje: Se aprende mucho con él -Ayuda mucho en los parciales, muchas veces las formulas las muestra, pero no deja sacar calculadora.",
          "contras": "-Suele ser grosero si usted llega tarde a sus clases (no siempre, a veces hasta le da igual) -Si no se le contesta en clase se enoja y se vuelve cansón. -No sé qué tan negativo sea esto, pero no está permitido el uso de…",
          "periodo": "2026-1",
          "calificacion": 4.5,
          "dificultad": 3.4
        }
      },
      {
        "nombre": "Yeimy Dallana Camargo Camargo",
        "slug": "yeimy-dallana-camargo-camargo",
        "resenas": 16,
        "calidad": "regular",
        "calificacion": 3.14,
        "notaPromedio": 3.82,
        "resenasOcultas": 15,
        "resena": {
          "texto": "Al inicio odie a Yeimy porque hizo un quiz raro el primer día de taller para el nivel que se manejaba (recuerdo que muchos cancelaron -.- ), aunque tengo entendido que fue la primera vez de ella, después se volvió manejable taller, en magistral es denso es más por lo temas que por ella, las diapositivas son muy tiernas y me gusta ciertas analogías que maneja, ella está dispuesta a explicarte y a veces te da charlas filosóficas fuera de clase, en el ultimo parcial nos dio gomitas.",
          "pros": "Es muy organizada, lo saco de su hermana administradora de empresa, demasiado organizada, te dará las notas cumplidamente.",
          "contras": "La Yeimi de la primera clase, después se volvio parchaa",
          "periodo": "2024-1",
          "calificacion": 4.1,
          "dificultad": 4
        }
      },
      {
        "nombre": "Jhon Morales Aponte",
        "slug": "jhon-morales-aponte",
        "resenas": 18,
        "calidad": "mala",
        "calificacion": 3.03,
        "notaPromedio": 3.39,
        "resenasOcultas": 16,
        "resena": {
          "texto": "El profe ahora es consciente de que tiene fama de ser dificil con el y manda los parciales para la casa. Los parciales no son faciles pero la IA los saca y hay videos de los problemas por ahì en internet. De resto lo mismo de siempre, el profe enseña muy bien, claro y completo.",
          "pros": "Curso de muy alto nivel. Parciales para la casa.",
          "contras": "No regala el curso, si hay que hacer los ejercicios para entender.",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Juan Manuel Gonzales Toro",
        "slug": "juan-manuel-gonzales-toro",
        "resenas": 7,
        "calidad": "mala",
        "calificacion": 3.03,
        "notaPromedio": 4.54,
        "resenasOcultas": 6,
        "resena": {
          "texto": "aunque es un profesor que explica bien en la modalidad de laboratorio, se aprende y no tiene problema con volver a explicar, incomoda demasiado a sus estudiantes mujeres, al punto que se prefiere no volver a sus clases, muchas veces tiene comentarios sexistas hacia ellas, si la tiene entre ojos seguramente siempre esté pendiente de ud y busque la excusa para hablarle, preguntarle cosas fuera de lugar y acosarla, por esto que no recomiendo a este profesor. es curioso que al principio de semestre alardeó con su nota de Los estudiantes, seguramente no lo vuelva hacer.",
          "pros": "se aprende lo suficiente es flexible con las notas se puede dejar alta",
          "contras": "es incomodo comentarios sexistas y fuera de lugar acosador pervertido",
          "periodo": "2022-2",
          "calificacion": 1.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Camilo Calderón",
        "slug": "camilo-calderon",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 3,
        "notaPromedio": 4.6,
        "resenasOcultas": 0,
        "resena": {
          "texto": "vi laboratorio con el man, explica bien pero explcia cosas super random avece que no tiene nada que ver, califica todo el ultimo dia LITERAL, el man poco corrige o dice como son las cosas, solo deja la de trabajos y no te da una retroalimentacion. no es mal profesor, pero no me parece tampoco el mejor",
          "pros": "- explica bien -responde correos y ayuda en las asesorias -facil sacar nota alta -calificacion justa",
          "contras": "- demasiado trabajo y carga - informes muy muy largos - califica todo el ultimo dia - flato las primeras dos semanas de clase",
          "periodo": "2021-10 (virtual)",
          "calificacion": 3,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Alvaro Mariño Camargo",
        "slug": "alvaro-mariño-camargo",
        "resenas": 10,
        "calidad": "mala",
        "calificacion": 2.95,
        "notaPromedio": 3.8,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Es un profe agradable y se le nota la pasión por enseñar. Explica los temas con detenimiento y se aprende bastante. Siempre intenta resolver dudas y en laboratorio está pendiente de cada equipo y atiende sus solicitudes. Puede pasarla fácil si le dedica algo de tiempo. Lo malo es que sus clases magistrales son solo leer diapositivas y puede ser aburrido.",
          "pros": "Enseña con pasión Es amable y respetuoso Está atento a dudas y al correo Es relativamente fácil pasar",
          "contras": "Lee diapositivas y se torna aburrida su clase a veces",
          "periodo": "2025-2",
          "calificacion": 3.5,
          "dificultad": 3
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
        "nombre": "joan sebastian ibañez sotelo",
        "slug": "joan-sebastian-ibanez-sotelo",
        "resenas": 2,
        "calidad": "regular",
        "calificacion": 2.95,
        "notaPromedio": 3,
        "resenasOcultas": 1,
        "resena": {
          "texto": "No entiendo por qué esta tan mal calificado si es un buen profesor, o sea si deja mucho trabajo, pero no se sufre tanto, si hay que esforzarse, pero si uno le trabaja bien es buena gente, explica si uno lo necesita, y es relajado en laboratorio, no me parece que sea tan cuchilla",
          "pros": "No es tan duro calificando los informes Es flexible con las fechas y laboratorios No es tan dificil",
          "contras": "Deja mucho trabajo",
          "periodo": "2024-2",
          "calificacion": 4.4,
          "dificultad": 2
        }
      },
      {
        "nombre": "Jaime Villalobos Velasco",
        "slug": "jaime-villalobos-velasco",
        "resenas": 26,
        "calidad": "regular",
        "calificacion": 2.85,
        "notaPromedio": 4.5,
        "resenasOcultas": 25,
        "resena": {
          "texto": "Nop, mejor saltarse en lo mas posible, para laboratorio de Mecanica.",
          "pros": "Te anima a mirar mas alla de las notas y los trabajos Le gusta hablar de muchos temas",
          "contras": "Deja DEMASIADOS trabajos y no califica la mitad, y la otra mitad los califica en los ultimos 3 dias MUY PERO MUY IRRESPONSABLE CON LAS NOTAS. A nosotros no subio la nota a tiempo y fue un 0.0 en el SIA",
          "periodo": "2025-2",
          "calificacion": 2.7,
          "dificultad": 4
        }
      },
      {
        "nombre": "Felipe Valencia Hernandez",
        "slug": "felipe-valencia-hernandez",
        "resenas": 25,
        "calidad": "mala",
        "calificacion": 2.84,
        "notaPromedio": 3.56,
        "resenasOcultas": 24,
        "resena": {
          "texto": "El profe se nota que es apasionado, y que sabe de sobra y aún más. Pero es jodido entenderle en las clases de magistral y si no le entendió el tema en ese momento, el quiz que le va a hacer en esa misma clase se lo va a echar. La clave es meter taller y magistral con el, porque los puntos del parcial se parecen a los de taller. Lo más jodido con el profe es entederle, porque explica a veces cosas más difíciles que las que pregunta en los parciales. Tenga bases de cálculo dif e integral, porque este es un curso de física basada en calculo y no en álgebra como en el colegio. Aún con todo lo…",
          "pros": "Es chimba y sabe y le explica las veces que usted quiera. Hace quices pero toma los mejores 50-60% de estos.",
          "contras": "Jodido de entender, y si no entiende rápido se jodio",
          "periodo": "2025-2",
          "calificacion": 3.7,
          "dificultad": 4
        }
      },
      {
        "nombre": "Plinio Del Carmen Teheran Sermeno",
        "slug": "plinio-del-carmen-teheran-sermeno",
        "resenas": 17,
        "calidad": "regular",
        "calificacion": 2.79,
        "notaPromedio": 3.83,
        "resenasOcultas": 16,
        "resena": {
          "texto": "Se le hizo tarde para subir notas y nos puso 5 a todos, en general da buenas clases pero si ya tuviste clases virtuales sabras lo aburridas y faciles de evitar que son, entonces si eres juicioso y pones cuidado quiza aprendas algo pero si no los parciales son en moodle y con un buen prompt y notebook lm pasas, tambien hay bastante gente que los hace si les pagas entonces puedes pasar pagando pero pues tin",
          "pros": "-Es virtual -Si da clase y mientras que entregue lo que debe(que es bastante a mi parecer)",
          "contras": "-Es virtual -Lo unico malo ademas de eso es que aveces se inspira y se pone a hablar de politica",
          "periodo": "2026-2",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Astrid Baquero Bernal",
        "slug": "astrid-baquero-bernal",
        "resenas": 19,
        "calidad": "mala",
        "calificacion": 2.72,
        "notaPromedio": 3.78,
        "resenasOcultas": 18,
        "resena": {
          "texto": "clases teoricas bastante pesadas, se necesita mucho estudio autonomo, se esmera por dar las explicaciones a fondo y por esto mismo las clases son pesadas, no tomaria asignaturas mas avanzadas con ella pero siento que para fisica exptal no esta tan mal estudiando lo suficiente para os parciales es facil sacar buena nota",
          "pros": "buena persona se puede negociar",
          "contras": "si no se estudia autonomamente va a ser practicamennte imposible entender los textos guia no concuerdan con las explicaciones de clase, lo q es confuso laboratorios muy largos y clases con mas trabajo del q es posible…",
          "periodo": "2026-2",
          "calificacion": 3.6,
          "dificultad": 4
        }
      },
      {
        "nombre": "Hector Fabio Castro Serrato",
        "slug": "hector-fabio-castro-serrato",
        "resenas": 15,
        "calidad": "mala",
        "calificacion": 2.72,
        "notaPromedio": 3.51,
        "resenasOcultas": 14,
        "resena": {
          "texto": "(Laboratorio) Hector es un caso de estudio, enseña bien, no es malo de hecho cuando enseña creo que es bastante bueno, pero el profesor es sumamente desinteresado por la materia, realmente no hay mucho que decir de el, si usted no le puso atención en como explico la práctica paila, si usted llega tarde lo más probable es que el le haga perder el tiempo. Un día nadie llevo bitacora porque no subió la práctica al moodle y nos culpo xd (siendo que varios le enviamos correo el día anterior y no contesto). Ayudo con una práctica extra la cual reponia la peor nota.",
          "pros": "bueno explicando. fácil dejarla \"alta\"",
          "contras": "Sus retroalimentaciones es poner \"?\" y esperar que uno sepa que es.",
          "periodo": "2026-1",
          "calificacion": 3,
          "dificultad": 4
        }
      },
      {
        "nombre": "Jairo Arbey Rodriguez Martinez",
        "slug": "jairo-arbey-rodriguez-martinez",
        "resenas": 12,
        "calidad": "regular",
        "calificacion": 2.64,
        "notaPromedio": 3.44,
        "resenasOcultas": 11,
        "resena": {
          "texto": "El profe es buena gente, está pendiente de que todos le presten atención, a veces deja talleres para la casa y otros para resolver en clase, después de recoger los talleres, los resuelve en el tablero. Una vez a la mayoría nos quedó mal un taller y decidió no calificarlo, desde que usted le asista al profesor y haga los talleres no tiene de qué preocuparse.",
          "pros": "Los talleres son trabajables. No hace parcial (en la clase de taller). Deja que los estudiantes decidan qué tema quiere que les explique.",
          "contras": "A veces llega tarde Es un poco quisquilloso en los trabajos, le gusta que lo resulvan por el método que enseñó. si ve a alguien distraído se la monta un rato pero nada del otro mundo.",
          "periodo": "2023-2",
          "calificacion": 4.5,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Rafael Ramon Rey Gonzalez",
        "slug": "rafael-ramon-rey-gonzalez",
        "resenas": 8,
        "calidad": "mala",
        "calificacion": 2.27,
        "notaPromedio": 3.46,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Vi con el taller, y la vdd viendo las otras calificaciones estaba medio asustado. Pero ya conociendolo los ejercicios que deja son medio raros pero despues de que los explica nos damos cuenta de q en realidad estaban faciles, sino que toca saber pensarlos, saber pensar el problema. En general me gusto mucho ver con él, no es tan malo como lo pintan. De hecho aprendi mucho mas con él q en la magistral a decir vdd, no c si era pq volvia de su sabatico pero igual se me hizo super entretenido y chevere ver con él.",
          "pros": "Explica bien Como era epoca mundialista haciamos pollas y nos daba puntos si acertabamos",
          "contras": "A veces si llegas muy tarde no te deja entrar Califica un poco duro",
          "periodo": "2026-1",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Thomas Dittrich",
        "slug": "thomas-dittrich",
        "resenas": 4,
        "calidad": "regular",
        "calificacion": 2.2,
        "notaPromedio": 3.45,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Un absoluto arrogante y neurótico como persona y como profesor. Ni al momento de hacer preguntas era amable o decente, era grosero y no se le podía hacer al final ninguna pregunta porque \"detestaba\" que le preguntaran en espacios fuera de la clase. Conocedor indiscutible de su campo, pero como persona y pedagogo, pésimo.",
          "pros": null,
          "contras": "Clases aburridas y contraproducentes Muchas veces incomprensible Jamás aclaraba dudas",
          "periodo": "antes",
          "calificacion": 2,
          "dificultad": 4
        }
      },
      {
        "nombre": "Yuly Edith Sanchez Mendoza",
        "slug": "yuly-edith-sanchez-mendoza",
        "resenas": 8,
        "calidad": "mala",
        "calificacion": 2.08,
        "notaPromedio": 3.86,
        "resenasOcultas": 7,
        "resena": {
          "texto": "No meta con ella, que pereza, solo les voy a decir que desde que empezamos laboratorio nos organizó los grupos al azar y hace guías de laboratorio larguísimas echas totalmente con ChatGPT y es curioso porque ni ella es consciente de todo el trabajo que deja porque luego se le acumula y al dia de hoy, el último dia del semestre todavía no tengo ni una nota de laboratorio jajajjajajja. Siempre llega tarde a clase o a veces ni va, tambien si le da la gana dice que mandemos los informes a mano y pues lo único bueno la verdad es que explica chimba el laboratorio aunque a veces se confunde con las…",
          "pros": "Hace la clase medio dinámica",
          "contras": "Guías larguisisiisisisisimas hechas con ChatGPT y no da notas.",
          "periodo": "2025-2",
          "calificacion": 2.5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Rafael Antonio Pineda Medina",
        "slug": "rafael-antonio-pineda-medina",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 1.5,
        "notaPromedio": 3.6,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Vi con este señor laboratorio de electricidad y magnetismo y que persona tan pedante, nada recomendado cada clase se perdía y daba temas super avanzados y se enojaba si nadie le respondía además esos temas al final no terminaban sirviendo para nada, se hicieron pocas practicas y molestaba mucho en cada entrega, en si no lo haga compa.",
          "pros": null,
          "contras": null,
          "periodo": "2021-10 (virtual)",
          "calificacion": 1.5,
          "dificultad": 4
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
      },
      {
        "nombre": "Yohany Rodriguez Garcia",
        "slug": "yohany-rodriguez-garcia",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 2,
        "resena": {
          "texto": "El profesor explica regular, si se tiene un buen profesor de taller se suple la falencia, los parciales son en parejas",
          "pros": "Parcial en pareja",
          "contras": "Estudio autonomo",
          "periodo": "2017-10",
          "calificacion": 1.9,
          "dificultad": 3
        }
      },
      {
        "nombre": "Andres Felipe Urquijo Rodriguez",
        "slug": "andres-felipe-urquijo-rodriguez",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": null
      },
      {
        "nombre": "Jose Alejandro Rojas Venegas",
        "slug": "jose-alejandro-rojas-venegas",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Buen profesor, joven y empático.",
          "pros": "Es muy atento, responde cualquier duda súper rápido. Es claro con entregas y plazos.",
          "contras": null,
          "periodo": "2020-10 (virtual)",
          "calificacion": 4.5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Maicol Cardenas Hernandez",
        "slug": "maicol-cardenas-hernandez",
        "resenas": 2,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Es un profesor joven que se basa en el libro de Zemansky \"Física Universitaria\". Por sesión adelanta uno o dos capítulos del libro según él lo vea necesario. Si las primeras clases no entiende nada, le recomiendo que estudie por su cuenta con el libro, ya que todo lo que él dice, es casi que un libreto del libro guía (a veces, hasta los ejemplos). Cada 4 capitulos hace parcial, por capitulo deja de 10 a 20 ejercicios, los cuales se entregan en grupos de máx 4-5 personas. Los quices no son sorpresa, generalmente los hace en la sesión de taller antes del parcial para que conozcan la complejidad…",
          "pros": "* El profe es buena persona, en el sentido de que atiende tus dudas, es respetuoso, se deja hablar y se nota que sabe del tema en general. * Para magistral sus diapositivas no son saturadas, suelen entenderse y a veces…",
          "contras": "Salta muchos términos que a mi parecer son importantes (pero supongo que es por el poco tiempo), igual, se encuentran en el libro.",
          "periodo": "2020-10 (virtual)",
          "calificacion": 3.5,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Queeny Madueño Pinto",
        "slug": "queeny-madueño-pinto",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Vi talleres y laboratorio con ella. Es muy buena profe. Sabe muchísimo de física y se preocupa porque sus estudiantes aprendan. Se demora un poco en entregar las calificaciones pero igual se dejan altas las notas. Recomendada.",
          "pros": null,
          "contras": null,
          "periodo": "2019-20",
          "calificacion": 4.3,
          "dificultad": 3.1
        }
      },
      {
        "nombre": "Rosana del Pilar Adames Prada",
        "slug": "rosana-del-pilar-adames-prada",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es una buena profesora se preocupa por sus estudiantes, califica los laboratorios de acuerdo a lo que enseña, las calificaciones fueron muy buenas para todos los estudiantes, siempre estuvo abierta a ofrecer explicaciones a los estudiantes respecto a los temas del curso. Dio las notas del curso siempre a tiempo y siempre ofrecio espacios para su revision",
          "pros": "Buena profesora Puntual Califica lo que enseña",
          "contras": null,
          "periodo": "2014-20",
          "calificacion": 4,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Juan Sebastian Alvarado Galeano",
        "slug": "juan-sebastian-alvarado-galeano",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
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
        "resenas": 48,
        "calidad": "buena",
        "calificacion": 3.89,
        "notaPromedio": 4.48,
        "resenasOcultas": 47,
        "resena": {
          "texto": "Buen profesor en general, se notaba como le interesaba el tema e intentaba transmitir eso a los estudiantes. A pesar de ser cuantica, intentaba pasar conceptos complejos a situaciones del comun y para ser una rama de la fisica no se ve matematica. Siempre estaba abierto a preguntas y estaba dispuesto a responderlas sabiendo que muchos estudiantes no eran estudiantes de fisica.",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 4.5,
          "dificultad": 1.7
        }
      },
      {
        "nombre": "cristian giovanny bernal",
        "slug": "cristian-giovanny-bernal",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 3.7,
        "notaPromedio": 3.67,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Con el docente vi tanto el taller como la magistral del curso y manejaba una buena dinámica. La clase magistral es el leyendo y explicando un archivo pdf desplegable. La calificación se divide en 4, 3 parciales y talleres todos con el mismo porcentaje. Los parciales son respuesta múltiple y sin procedimiento, los talleres son respuesta abierta y solo se puede poner una linea de calculo. Por otro lado, le molesta el uso de teléfonos y en generar, dispositivos electrónicos. En mi caso, opte por comprar un cuaderno para la materia o llevar los apuntes de la tableta impresos para los talleres. En…",
          "pros": "- Es chistoso - Explica bien -Puedes sacar una hoja de formulas en el parcial - es un detox tecnologíco",
          "contras": "- Es exigente con la asistencia - Las notas son difíciles de recuperar por lo que faltar al taller no es una opción",
          "periodo": "2025-2",
          "calificacion": 4.1,
          "dificultad": 3
        }
      },
      {
        "nombre": "Rigoberto Angel Casas Miranda",
        "slug": "rigoberto-angel-casas-miranda",
        "resenas": 15,
        "calidad": "regular",
        "calificacion": 3.67,
        "notaPromedio": 4.13,
        "resenasOcultas": 14,
        "resena": {
          "texto": "El profesor puede ser algo condescendiente a veces, el trato frío y distante (en todos los aspectos). En cuanto a la clase es un poco básica, él pasa a leer unas diapositivas y de vez en cuando pregunta cosas. Desde el inicio del curso dijo que no iba a pasar lista entonces a las clases íbamos como 5 personas xd. Los parciales son idénticos al taller que deja para estudiar, hizo quices virtuales, 3 parciales y un proyecto que consistió en un vídeo de 20 minutos acerca de un tema. Me memoricé los talleres la semana anterior al día del exámen y pasé sin pena ni gloria, fue muy pasable.",
          "pros": null,
          "contras": null,
          "periodo": "2026-2",
          "calificacion": 3.5,
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
        "nombre": "Julio Alberto Clavijo Penagos",
        "slug": "julio-alberto-clavijo-penagos",
        "resenas": 40,
        "calidad": "buena",
        "calificacion": 4.58,
        "notaPromedio": 3.96,
        "resenasOcultas": 39,
        "resena": {
          "texto": "Es un profesor muy dedicado a la profesion, entiende la dificultad de la materia y te brinda sin ningun problema todas las ayudas que necesites para sobrevivir a analisi quimico. Ademas que enseña lo complejo de la manera mas simple posible.",
          "pros": "Se puede pedir ayuda con temas o conceptos sin ningún problema. Muy buena gente Deja muchas actividades para complementar los temas ( no son hacen parte de la nota final)",
          "contras": "La materia que dicta es muy pesada La nota se basa en los parciales, y llegan a ser un poco complejos",
          "periodo": "2025-2",
          "calificacion": 4.8,
          "dificultad": 4.4
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
        "nombre": "Josue Itsman Clavijo Penagos",
        "slug": "josue-itsman-clavijo-penagos",
        "resenas": 40,
        "calidad": "buena",
        "calificacion": 4.54,
        "notaPromedio": 4.04,
        "resenasOcultas": 39,
        "resena": {
          "texto": "La verdad es un gran profe, esta abierto a resolver dudas incluso fuera de sus clases, no considero que los parciales fueran muy dificiles, da packs de estudio y donde conseguir ejercicios ademas de que lleva la clase con calma y se tira sus chistes",
          "pros": "es super bueno explicando y muy amable",
          "contras": "es medio fastidioso con el tema de tomar apuntes y el cel, ademas q es dificl estar despieto en su clase de 7 am",
          "periodo": "2026-1",
          "calificacion": 4.9,
          "dificultad": 3
        }
      },
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
        "nombre": "Fabio Castillo Rivera",
        "slug": "fabio-castillo-rivera",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.08,
        "notaPromedio": 3.88,
        "resenasOcultas": 4,
        "resena": {
          "texto": "En general es un profesor relajado y, a mi parecer, justo con las calificaciones. La dinámica de la materia fueron quices virtuales en google forms antes de empezar cada laboratorio sobre el tema correspondiente, la información está en el libro guía con el que se hizo el preinforme. En algunos casos se entrega una hoja con los resultados del laboratorio, lleve computador, ojalá con las fórmulas ya puestas en un excel, facilita bastante las cosas. Sepa un poco de análisis estadístico, ayuda al momento de responder las preguntas que pone en las hojas de resultados. En otras ocasiones se deben…",
          "pros": "Quices virtuales",
          "contras": "Entrega las calificaciones de las hojas de resultados y de los informes muy tarde, así que no espere a saber cómo le fue para mejorar para la siguiente entrega",
          "periodo": "2025-1",
          "calificacion": 3.9,
          "dificultad": 3.8
        }
      },
      {
        "nombre": "Carlos Enrique Daza Velasquez",
        "slug": "carlos-enrique-daza-velasquez",
        "resenas": 43,
        "calidad": "regular",
        "calificacion": 3.93,
        "notaPromedio": 3.75,
        "resenasOcultas": 42,
        "resena": {
          "texto": "Todo un concha su madre para bien o para mal y como consejo nunca le vaya a llegar tarde a ese man. 6/10 y normalito",
          "pros": "Sabe mucho",
          "contras": "El diablo si lo agarra entre ojos",
          "periodo": "2019-2",
          "calificacion": 3.5,
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
        "nombre": "Oscar Javier Patiño Ladino",
        "slug": "oscar-javier-patiño-ladino",
        "resenas": 30,
        "calidad": "regular",
        "calificacion": 3.55,
        "notaPromedio": 4.31,
        "resenasOcultas": 29,
        "resena": {
          "texto": "No hace casi que nada, apenas entrabamos ponia quiz, recogia a los 30 minutos y hacia la explicacion de lo que ibamos a hacer en mas o menos una hora, despues de eso solo se sentaba a ver facebook o hablar con sus colegas, el resto del trabajo lo hacía el auxiliar, Santiago se ponia la 10 y nos vigilaba, nos corregia, calificaba preinformes e informes parciales, hacia todo el trabajo de patiño, y en los parciales ayudaba. Son temáticas faciles y son acarreables, pero lo tedioso son los trabajos escritos, dediquele buen tiempo a los preinformes y los informes parciales, no lo deje a ultima…",
          "pros": "- las tematicas y los laboratorios son breves - usualmente sale temprano si hace todo bien - si hizo bien y a conciencia los preinformes, los quices son breves en su mayoria, solo repase lo que copio en los preinformes…",
          "contras": "- El parcial teorico es muy largo - trabajos absurdamente largos - hace mas trabajo el monitor que el profesor, y entre los dos a veces tienden a dar instrucciones diferentes, por lo que se puede llegar a perder",
          "periodo": "2025-2",
          "calificacion": 2,
          "dificultad": 3
        }
      },
      {
        "nombre": "Carlos Alexander Trujillo",
        "slug": "carlos-alexander-trujillo",
        "resenas": 50,
        "calidad": "regular",
        "calificacion": 3.42,
        "notaPromedio": 3.39,
        "resenasOcultas": 49,
        "resena": {
          "texto": "Es un profesor bastante dinámico en ciertas cosas, le gusta tirar datos random y te da el contexto de muchos compuestos, tiene muchas malas reseñas pero en realidad es un buen profesor siempre dice en que horario hacerle reclamos y no se enoja si los haces, sus parciales son bastante complicados a veces pero si prestas atención en clase son pasables, si llevas una usb te regala los libros que se estén usando.",
          "pros": "Tira chistes flojos No es amargado Explica bien y manda las diapositivas Lleva compuestos para ser mas dinámico",
          "contras": "Parciales medio complicaditos",
          "periodo": "2026-1",
          "calificacion": 4.3,
          "dificultad": 4
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
          "texto": "Es como tener una abuelita, aunq si ensena mal ya que solo muestra un monton de demostraciones y cosas de laboratorio, tambien es facil pasarla por sus porcentajes, pues no hay muchas opciones yo la verdad si la recomiendo, con estudio autonomo se logra, ademas si ves tambien el lab con ella te tiene en cuenta.",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 4,
          "dificultad": 3
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
        "nombre": "Leon Dario Perez",
        "slug": "leon-dario-perez-perez",
        "resenas": 35,
        "calidad": "mala",
        "calificacion": 3.07,
        "notaPromedio": 3.47,
        "resenasOcultas": 34,
        "resena": {
          "texto": "Excelente profesor, se preocupa porque los estudiantes tengan una buena preparación en los temas básicos.",
          "pros": "Buen dominio del tema y disponibilidad a explicar.",
          "contras": "Hace muchos quices y exámenes",
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
        "nombre": "Jose Gregorio Carriazo Baños",
        "slug": "jose-gregorio-carriazo-baños",
        "resenas": 20,
        "calidad": "buena",
        "calificacion": 3.92,
        "notaPromedio": 3.69,
        "resenasOcultas": 19,
        "resena": {
          "texto": "Me parece que es un profesor muy curioso, por su personalidad, es interesante y comodo estar en una clase que es amena porque el mismo profesor se encarga de asi hacerla. Son 3 parciales y ya, lo cual puede ser o muy malo o muy bueno, al menos creo que con el profesor es muy bueno porque califica lo que enseña en gran medida, donde se puede ir mas alla en los parciales es en la parte teorica, aunque por la cantidad de puntos que hay en el parcial es probable que eso no afecte tanto la nota. Dejarla alta es facil si se hacen los ejercicios y uno le da tiempo para reflexionar sobre los…",
          "pros": "Chistoso Explica bien y no se hace complicado Se aprende Parciales relativamente faciles Clase amena",
          "contras": "Hay momentos en los que divaga un poco y termina hablando de cosas un poco nada que observar",
          "periodo": "2026-1",
          "calificacion": 4.5,
          "dificultad": 3.5
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
        "resenas": 18,
        "calidad": "regular",
        "calificacion": 3.55,
        "notaPromedio": 3.54,
        "resenasOcultas": 17,
        "resena": {
          "texto": "El docente habla mucho en clase y no se esmera por el aprendizaje de sus estudiantes, los parciales son un poco confusos y su material de estudio no es el adecuado.",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 2,
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
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.47,
        "notaPromedio": 4.35,
        "resenasOcultas": 9,
        "resena": {
          "texto": "La materia en si es pesada, requiere mucho estudio autonomo, el profe manda talleres para cada corte antes del parcial, responde correos para dudas, y los parciales en si no son tan complejos, mas bien cascarosos ajja, pero si estudias y sabes del tema no se te va a dificultar, depenediendo de como te va en los 3 parciales anteriores el ultimo te lo puede exonerar (si sacaste mas de 4.0 en los 3 primeros parciales), tambien no lo hagan enojar pues no los deja sacar apuntes, aunque de por si los apuntes se sienten inutiles en el parcial, aproveche a pasar al tablero para que le de puntos que…",
          "pros": "Responde dudas Deja salir temprano Facil dejarla en alto Explica muy bien Manda material de soporte",
          "contras": "Perezoso Se distrae mucho Hace chistes malosxd Mucha cascarita",
          "periodo": "2026-1",
          "calificacion": 4.4,
          "dificultad": 4.3
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
        "nombre": "Cristian Ochoa Puentes",
        "slug": "cristian-ochoa-puentes",
        "resenas": 15,
        "calidad": "regular",
        "calificacion": 3.74,
        "notaPromedio": 3.99,
        "resenasOcultas": 14,
        "resena": {
          "texto": "Usted depende mucho de su aprendizaje autonomo a mi parecer el pasa los mecanismo de reaccion rapido y por encima, aunque el contesta todas las preguntas del mundo incluso si se las envia por correo, los porcentajes que maneja hace que sea dificil de pasar, apuntele a los dos primeros parciales que son los mas sencillos los otros dos son bastante duros, y suele repetir puntos de parciales pasados o puntos que son literalmente como los del libro entonces hagalos, al inicio no quiere pasar las diapositivas pero si insiste las pasa igual las diapositivas son literalmente el libro",
          "pros": "No toma asistencia Responde dudas",
          "contras": "depende en gran parte de su estudio autonomo Los porcentajes hacen que sea dificil pasar, depende totalmente de los parciales, si alguno lo pierde bien bajito va a ser dificil de pasar",
          "periodo": "2026-1",
          "calificacion": 3,
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
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.78,
        "notaPromedio": 4.23,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Yo vi el laboratorio con ella y con la profe Ivonne, y la profesora carolina hace ese laboratorio muy llevadero, las explicaciones que da son las mejores, solo estudie y entienda lo que esta haciendo, si tiene dudas pregunte antes de que se equivoque, califica suave y no tira duro en las exposiciones, las unicas cosas malas que diria yo es que se ausento varias veces durante el semestre dejandonos solos con la profesora Ivonne, tambien este semestre empezaron una metodologia nueva y eso genero un desorden en las practicas y en la realizacion de pre-informes",
          "pros": "Todo",
          "contras": "La profesora Ivonne Da notas hasta el final de semestre",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 1.5
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
        "resenas": 9,
        "calidad": "regular",
        "calificacion": 3.49,
        "notaPromedio": 4.03,
        "resenasOcultas": 8,
        "resena": {
          "texto": "A mi esta profesora no me parece amable, es bastante pasivo agresiva, en este semestre probaron con hacer exposiciones e informes dentro del laboratorio, le recomiendo lleve ya analizado todo para cuando le toque hacer los informes, para las exposiciones tiene que llevar cartelera (realizada a mano) y le van a hacer preguntas, se va a pegar de todo lo que usted diga, la recomendacion por mediocre que parezca es que no busque respuestas super elaboradas, diga solo lo necesario entienda bien la practica y las distintas caracteristicas de los compuestos de interes y reactivos que va a usar,…",
          "pros": "Cuaderno e informes no tira duro Es dificil que pierda (pero no imposible) Las practicas son cheveres Sabe un monto y a veces le da ideas de porque pasan ciertas reacciones y de porque obtiene ciertos resultados",
          "contras": "Es pasivo agresiva Usted puede estar haciendo su practica normal y lo empieza a afanar tambien le puede hacer preguntas y si se equivoca no lo va a tratar mal pero lo va a hacer sentir como un estupido Tiene algunas…",
          "periodo": "2026-1",
          "calificacion": 3.5,
          "dificultad": 1.5
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
        "nombre": "Ariel Rodolfo Quevedo Pastor",
        "slug": "ariel-rodolfo-quevedo-pastor",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.47,
        "notaPromedio": 4.35,
        "resenasOcultas": 9,
        "resena": {
          "texto": "La materia en si es pesada, requiere mucho estudio autonomo, el profe manda talleres para cada corte antes del parcial, responde correos para dudas, y los parciales en si no son tan complejos, mas bien cascarosos ajja, pero si estudias y sabes del tema no se te va a dificultar, depenediendo de como te va en los 3 parciales anteriores el ultimo te lo puede exonerar (si sacaste mas de 4.0 en los 3 primeros parciales), tambien no lo hagan enojar pues no los deja sacar apuntes, aunque de por si los apuntes se sienten inutiles en el parcial, aproveche a pasar al tablero para que le de puntos que…",
          "pros": "Responde dudas Deja salir temprano Facil dejarla en alto Explica muy bien Manda material de soporte",
          "contras": "Perezoso Se distrae mucho Hace chistes malosxd Mucha cascarita",
          "periodo": "2026-1",
          "calificacion": 4.4,
          "dificultad": 4.3
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
        "nombre": "Cristian Ochoa Puentes",
        "slug": "cristian-ochoa-puentes",
        "resenas": 15,
        "calidad": "regular",
        "calificacion": 3.74,
        "notaPromedio": 3.99,
        "resenasOcultas": 14,
        "resena": {
          "texto": "Usted depende mucho de su aprendizaje autonomo a mi parecer el pasa los mecanismo de reaccion rapido y por encima, aunque el contesta todas las preguntas del mundo incluso si se las envia por correo, los porcentajes que maneja hace que sea dificil de pasar, apuntele a los dos primeros parciales que son los mas sencillos los otros dos son bastante duros, y suele repetir puntos de parciales pasados o puntos que son literalmente como los del libro entonces hagalos, al inicio no quiere pasar las diapositivas pero si insiste las pasa igual las diapositivas son literalmente el libro",
          "pros": "No toma asistencia Responde dudas",
          "contras": "depende en gran parte de su estudio autonomo Los porcentajes hacen que sea dificil pasar, depende totalmente de los parciales, si alguno lo pierde bien bajito va a ser dificil de pasar",
          "periodo": "2026-1",
          "calificacion": 3,
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
        "resenas": 26,
        "calidad": "buena",
        "calificacion": 4.06,
        "notaPromedio": 4.13,
        "resenasOcultas": 25,
        "resena": {
          "texto": "Es una de las mejores opciones para fisicoquímica 1, aunque en el semestre en el que vi la materia no hubo notas que no fueran las de 4 parciales; estos no eran tan difíciles y varias preguntas dependían de leer bien o de ver pequeños matices. Es un profesor que explica bien y que está dispuesto a resolver preguntas. Sin embargo, hay que tener cuidado con la asistencia y la participación (más que todo en las sesiones de talleres), dado que en algunos casos al profe se le puede salir la rabia. En el laboratorio es relajado y ayuda si hay dudas de las prácticas; solo se calificaron 3 informes y…",
          "pros": "Se hace entender y de no ser así, repite las explicaciones y resueve preguntas, parciales relativamente sencillos",
          "contras": "Por el bien del grupo (no quieren llevarlo en la mala) ir a clase y participar de vez en cuando en los talleres.",
          "periodo": "2026-1",
          "calificacion": 4.8,
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
          "texto": "Es como tener una abuelita, aunq si ensena mal ya que solo muestra un monton de demostraciones y cosas de laboratorio, tambien es facil pasarla por sus porcentajes, pues no hay muchas opciones yo la verdad si la recomiendo, con estudio autonomo se logra, ademas si ves tambien el lab con ella te tiene en cuenta.",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
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
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.77,
        "notaPromedio": 3.76,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Sonia definitivamente es una profe que impone respeto desde el principio, pero al final de semestre ya estara riendose con todos, le gustan mucho los ejercicios y las berracas conversiones de unidades, definitivamente hay que estudiar constantemente ya que sus parciales tienden a tener un buen nivel de dificultad, pero nada que resolver los ejercicios en clase no solucione",
          "pros": "Me hizo cogerle amor a la fisicoquímica",
          "contras": "Aveces pone puntos muy difíciles en los parciales, que ni encuentras en libros xd",
          "periodo": "2026-1",
          "calificacion": 5,
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
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.77,
        "notaPromedio": 3.76,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Sonia definitivamente es una profe que impone respeto desde el principio, pero al final de semestre ya estara riendose con todos, le gustan mucho los ejercicios y las berracas conversiones de unidades, definitivamente hay que estudiar constantemente ya que sus parciales tienden a tener un buen nivel de dificultad, pero nada que resolver los ejercicios en clase no solucione",
          "pros": "Me hizo cogerle amor a la fisicoquímica",
          "contras": "Aveces pone puntos muy difíciles en los parciales, que ni encuentras en libros xd",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Josue Itsman Clavijo Penagos",
        "slug": "josue-itsman-clavijo-penagos",
        "resenas": 40,
        "calidad": "buena",
        "calificacion": 4.54,
        "notaPromedio": 4.04,
        "resenasOcultas": 39,
        "resena": {
          "texto": "La verdad es un gran profe, esta abierto a resolver dudas incluso fuera de sus clases, no considero que los parciales fueran muy dificiles, da packs de estudio y donde conseguir ejercicios ademas de que lleva la clase con calma y se tira sus chistes",
          "pros": "es super bueno explicando y muy amable",
          "contras": "es medio fastidioso con el tema de tomar apuntes y el cel, ademas q es dificl estar despieto en su clase de 7 am",
          "periodo": "2026-1",
          "calificacion": 4.9,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jose Gregorio Carriazo Baños",
        "slug": "jose-gregorio-carriazo-baños",
        "resenas": 20,
        "calidad": "buena",
        "calificacion": 3.92,
        "notaPromedio": 3.69,
        "resenasOcultas": 19,
        "resena": {
          "texto": "Me parece que es un profesor muy curioso, por su personalidad, es interesante y comodo estar en una clase que es amena porque el mismo profesor se encarga de asi hacerla. Son 3 parciales y ya, lo cual puede ser o muy malo o muy bueno, al menos creo que con el profesor es muy bueno porque califica lo que enseña en gran medida, donde se puede ir mas alla en los parciales es en la parte teorica, aunque por la cantidad de puntos que hay en el parcial es probable que eso no afecte tanto la nota. Dejarla alta es facil si se hacen los ejercicios y uno le da tiempo para reflexionar sobre los…",
          "pros": "Chistoso Explica bien y no se hace complicado Se aprende Parciales relativamente faciles Clase amena",
          "contras": "Hay momentos en los que divaga un poco y termina hablando de cosas un poco nada que observar",
          "periodo": "2026-1",
          "calificacion": 4.5,
          "dificultad": 3.5
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
        "resenas": 27,
        "calidad": "mala",
        "calificacion": 2.29,
        "notaPromedio": 3.27,
        "resenasOcultas": 26,
        "resena": {
          "texto": "Tarda demasiado en avanzar con los temas, las clases son monótonas y en ocasiones dicta el mismo tema con las mismas diapositivas más de una vez. Los parciales son o muy extensos o muy cortos, hay que estar atento a todo lo que menciona aunque no tenga que ver con el curso. Responde dudas y es amable; cuando vi la materia eran 3 parciales cada uno del mismo valor.",
          "pros": "Responde dudas. Si estudia lo que envía al correo, es posible dejarla alta.",
          "contras": "Parciales muy específicos. Clases monótonas. No sigue el temario del curso.",
          "periodo": "2026-1",
          "calificacion": 3.4,
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
        "nombre": "Humberto Sarria Zapata",
        "slug": "humberto-sarria-zapata",
        "resenas": 18,
        "calidad": "buena",
        "calificacion": 4.42,
        "notaPromedio": 4.22,
        "resenasOcultas": 17,
        "resena": {
          "texto": "Es uno de los mejores profesores que he tenido, las clases son entretenidas y siempre se cubre harto tema. El profesor es muy organizado y justo calificando. Si asisten a todas sus clases les va a ir bien, con la gente que no asiste los corcha en las sustentaciones xd",
          "pros": "Muy amable Enseña con vocación",
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 4.8,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Hector Fabian Ramirez Ospina",
        "slug": "hector-fabian-ramirez-ospina",
        "resenas": 51,
        "calidad": "regular",
        "calificacion": 4.23,
        "notaPromedio": 3.86,
        "resenasOcultas": 50,
        "resena": {
          "texto": "Héctor es la cabra, las clases con el son pesadas pero explica bien, califica los parciales sobre 6, la clase antes del parcial se vota 1 o 2 ejercicios que van a salir en el parcial y a lo largo del semestre va diciendo que puntos salen, anotelos y los ejercicios del taller son muy díficiles busquen ejercicios parecidos a los de la clase en el taller para no perder el tiempo haciendo ejercicios jodidos que no salen",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 5
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
        "nombre": "Juan Carlos Hernandez Rincon",
        "slug": "juan-carlos-hernandez-rincon",
        "resenas": 15,
        "calidad": "regular",
        "calificacion": 3.93,
        "notaPromedio": 3.65,
        "resenasOcultas": 14,
        "resena": {
          "texto": "Quien escribe esto ya conocía al profesor Juan Carlos. No de vista, sino de haber sufrido en carne propia la decepción académica más grande de mi carrera. El semestre pasado cursé Cálculo Integral con él, y aunque su calidad como docente era innegable, el comportamiento deplorable de mis compañeros logró lo que parecía imposible: que un curso de alto nivel se convirtiera en una farsa. La presión, las súplicas y el berrinche colectivo de una mayoría que no estaba preparada llevaron a que el profesor cediera y \"regalara\" la asignatura. Aquello me afectó tan profundamente que perdí todo el…",
          "pros": "Excelencia docente: Juan Carlos es, sin lugar a dudas, un profesor de primer nivel. Su conocimiento es profundo, su didáctica es clara y su compromiso con enseñar bien es genuino. Los contenidos fueron abordados con…",
          "contras": "Falta de preparación generalizada: Nuevamente, una gran porción del estudiantado demostró que no tenía el nivel mínimo para enfrentar Cálculo Vectorial. Y lo peor: no hicieron nada por subsanarlo. Cultura del facilismo:…",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3.4
        }
      },
      {
        "nombre": "German Preciado Lopez",
        "slug": "german-preciado-lopez",
        "resenas": 41,
        "calidad": "regular",
        "calificacion": 3.91,
        "notaPromedio": 3.83,
        "resenasOcultas": 40,
        "resena": {
          "texto": "Es un gran profesor, Explica muy bien, da una clase chevere y es muy buena gente, por lo menos a nosotros como dejo el primer parcial durísimo dijo que la nota del segundo parcial la remplazaba y de resto de parciales fueron mas faciles a comparacion y hagan los ejercicio sugeridos, eso es todo con este profesor",
          "pros": "se deja hablar si sustenta un punto que no le valió en el parcial le sube la nota ud aprende si o si",
          "contras": "molesta por la puntualidad en los parciales uno piensa que no toma asistencia, pero el siempre se acuerda de uno y si ve que alguien falta muchisimo, se la tira por fallas",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 4.5
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
        "nombre": "Eduardo Cardenas Gomez",
        "slug": "eduardo-cardenas-gomez",
        "resenas": 31,
        "calidad": "buena",
        "calificacion": 3.73,
        "notaPromedio": 3.91,
        "resenasOcultas": 30,
        "resena": {
          "texto": "El profesor es buena gente y es alguien relajado. Hizo parciales en grupos entonces xd. El último parcial sí fue individual. No saca más notas, si le fue mal en un parcial le va a quedar baja la nota. La clase es seguir el libro de Korgi, no está mal.",
          "pros": "Parciales justos Buena gente y chill",
          "contras": "Saca pocas notas Tiene pésima caligrafía, era hasta mejor ni ir a clase para verlo escribir esos garabatos xd",
          "periodo": "2026-1",
          "calificacion": 3.9,
          "dificultad": 3.5
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
        "nombre": "Victor Manuel Ardila De La Peña",
        "slug": "victor-manuel-ardila-de-la-peña",
        "resenas": 74,
        "calidad": "regular",
        "calificacion": 3.5,
        "notaPromedio": 3.82,
        "resenasOcultas": 73,
        "resena": {
          "texto": "El profesor se centra únicamente en dictar la clase ya que casi ni se voltea del tablero desde que que llega, la cuál si usted se esfuerza bastante puede llegar a entender, en mi caso creo que me fue más fácil estudiar autónomamente haciendo los talleres que dejaba ya que de ahí sacaba ejercicios muy parecidos a los del parcial, los parciales no fueron tan difíciles y no tiraba duro, ahora bien los quices estuvieron mejor ya que uno fue en grupo el cuál creo que se podía sacar el celular, otro fue normal y el último fue a manera de taller que se hacía en la casa, en mi opinión este es el…",
          "pros": "-facil de pasar -facil de dejar alta -no tira a matar -deja talleres para estudiar",
          "contras": "- difícil para aprender de la clase -la clase es aburrida",
          "periodo": "2025-2",
          "calificacion": 4.3,
          "dificultad": 3.9
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
        "nombre": "Edward Samuel Becerra Rojas",
        "slug": "edward-samuel-becerra-rojas",
        "resenas": 54,
        "calidad": "regular",
        "calificacion": 3.27,
        "notaPromedio": 3.13,
        "resenasOcultas": 53,
        "resena": {
          "texto": "el ego de este señor es horrible, pareciera que no se va a morir nunca, como si flotara, se supone que un profesor es transformador de vidas, no entiendo como a este señor lo dejan postularse a decano jaja, qué chiste esto, tengo información de la mano de sus mismos colegas que dicen que este señor es horrible, no inscriba con él, no debería enseñar, si pudiera le pondría una nota negativa -5 por ejemplo, hasta se nota que él mismo es quien responde los comentarios a estas reviews jaja",
          "pros": "ninguno",
          "contras": "todo",
          "periodo": "2026-2",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Omar Duque Gomez",
        "slug": "omar-duque-gomez",
        "resenas": 44,
        "calidad": "regular",
        "calificacion": 3.24,
        "notaPromedio": 3.5,
        "resenasOcultas": 43,
        "resena": {
          "texto": "Es buena gente en parte, califica algo duro; se fija en detalles particulares para bajar nota, ayuda un poco en la nota de quices( que en realidad solo hizo uno pero medio la subió con un taller entregable que colocó).",
          "pros": "A veces tira buenos chistes. Explica bien Buena gente",
          "contras": "Algo impuntual No dejó ver bien la corrección de los parciales Los ejercicios recomendados eran muy diferentes al parcial",
          "periodo": "2024-2",
          "calificacion": 3.5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Guillermo Rodriguez Blanco",
        "slug": "guillermo-rodriguez-blanco",
        "resenas": 31,
        "calidad": "regular",
        "calificacion": 3.16,
        "notaPromedio": 4.28,
        "resenasOcultas": 30,
        "resena": {
          "texto": "El man para explicar es bueno, el man sabe de esa materia al dedillo, pero casi regala la materia, no hay necesidad de ir a clase, de por si usted quiere ver esa materia por si solo pues bien pueda porque al man no le importa, si le pones atención se aprende, es MUY relajado en los parciales, porque tienen nivel, pero usted puede sacar lo que sea",
          "pros": "- Muy relajado en los parciales - Muy madre",
          "contras": "- No se aprende mucho",
          "periodo": "2025-1",
          "calificacion": 4,
          "dificultad": 1.5
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
        "nombre": "Rene Erlin Castillo",
        "slug": "rene-erlin-castillo",
        "resenas": 31,
        "calidad": "mala",
        "calificacion": 1.68,
        "notaPromedio": 2.35,
        "resenasOcultas": 30,
        "resena": null
      }
    ]
  },
  "2015270": {
    "nombre": "Fundamentos De Economia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015270",
    "profesores": [
      {
        "nombre": "oscar david hidalgo jaimes",
        "slug": "oscar-david-hidalgo-jaimes",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4,
        "resenasOcultas": 0,
        "resena": {
          "texto": "El profesor cuenta con amplios conocimientos de la materia, además de saber como manejar a sus estudiantes y la información que nos brinda. Lo único es que habla un poco rapido, pero si estan dispuesto a ponerle cuidado a las clases y apoyarse con las lecturas que el recomienda, no habrá ningún problema para entender sus clases",
          "pros": "Dinámico, amplios conocimientos, muy flexible, buen profesor.",
          "contras": "Habla rápido",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3.9
        }
      },
      {
        "nombre": "sandra patricia daza",
        "slug": "sandra-patricia-daza",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.85,
        "notaPromedio": 3.65,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Sandra es una profesora muy crítica de la economía desde su recorrido en varias áreas de la misma, sabe mucho y le da un aire nuevo a lo académico en la facultad yendo más allá de teoría y módelos. Antropología con ella es una materia que si definitivamente no le abre la mente sobre la economía usted fue de parche a la clase o no hizo nada en el semestre. Repetiría la materia mil veces y debo decir que Sandra es de las mejores profes que conozco de la facultad",
          "pros": "-Atenta y de las pocas profes que les interesa saber quienes son sus estudiantes. -Enseña con humanidad. -Trae invitados a clase - Contagia su alegría en clase :) - Hace ejercicios dinámicos y de compartit",
          "contras": "-Son varias lecturas y algunas muy largas al principio de la materia. -Hay que hacer todas las reseñas para dejarla alta y si se trabaja le va bien.",
          "periodo": "2024-2",
          "calificacion": 4.7,
          "dificultad": 3
        }
      },
      {
        "nombre": "Mario Garcia Molina",
        "slug": "mario-garcia-molina",
        "resenas": 31,
        "calidad": "buena",
        "calificacion": 4.84,
        "notaPromedio": 4.52,
        "resenasOcultas": 30,
        "resena": {
          "texto": "El profesor da buenas explicaciones y pasar su materia no es complicado siempre que se realicen los retos de Moodle para prepararse para los quizzes y los parciales. La clase se puede tornar un poco monótona pero es interesante.",
          "pros": "Temas interesantes. Buenas explicaciones.",
          "contras": "La clase puede ser un poco monótona. Es exigente con la puntualidad y cierra la puerta.",
          "periodo": "2024-1",
          "calificacion": 4.4,
          "dificultad": 4.3
        }
      },
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
        "nombre": "Irina Rosa España Eljaiek",
        "slug": "irina-rosa-espana-eljaiek",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 4.69,
        "notaPromedio": 4.06,
        "resenasOcultas": 6,
        "resena": {
          "texto": "la profesora irina es lo mejor que puede existir en la facultad de economia, es simplemente maravillosa como profesora, exigente eso si, pero aprendes bastante con sus clases y las lecturas que deja que son muy buenas. recomiendo ver la clase con ella si su objetivo es profundizar en conocimientos, pero si busca dejar una nota alta tiene que dar el 200% porque es dificil.",
          "pros": null,
          "contras": "nunca nombra san andres en toda la materia >:(",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Alvaro Zerda Sarmiento",
        "slug": "alvaro-zerda-sarmiento",
        "resenas": 40,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 3.81,
        "resenasOcultas": 39,
        "resena": {
          "texto": "Solo tenga en cuenta lo siguiente: Si llega a ver con este profesor, prácticamente todas las preguntas de los parciales están basadas exclusivamente en la bibliografía del curso, así que no se confíe si solo presta atención a la clase, hay que leerse t o d a la bibliografía si se quiere tener buena nota (en su clase, el 80% de la nota son parciales). De resto, es un excelente profesor y explica muy bien los temas. Muy recomendado",
          "pros": "Explica muy bien el tema y se preocupa por que se entienda bien el contenido de la clase.",
          "contras": "Por mas que se preste atención a sus clases, hay preguntas en sus parciales que preguntan cosas muy específicas de la bibliografía, tengan cuidado con eso.",
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Yuli Yaneth Vargas Monroy",
        "slug": "yuli-yaneth-vargas-monroy",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 3.8,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Era la profe auxiliar y aún así logró que las temáticas sean más \"digeribles\" para los alumnos y está pendiente del aprendizaje del grupo.",
          "pros": null,
          "contras": null,
          "periodo": "2023-1",
          "calificacion": 4.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Stanley Simon Malinowitz",
        "slug": "stanley-simon-malinowitz",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.24,
        "notaPromedio": 4.3,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Muy amable. Algo ideológico pero muy respetuoso y paciente con los estudiantes. Pone buenas notas en general. Las lecturas muy interesantes, y las clases entretenidas y amenas.",
          "pros": null,
          "contras": null,
          "periodo": "2017-1",
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
        "nombre": "Jose Guillermo Garcia Isaza",
        "slug": "jose-guillermo-garcia-isaza",
        "resenas": 26,
        "calidad": "regular",
        "calificacion": 4.04,
        "notaPromedio": 3.95,
        "resenasOcultas": 25,
        "resena": {
          "texto": "Es una buena elección para ver Fundamentos de Economía, aunque aveces su manera de explicar pueda generar aburrimiento (hablar del tema por las dos horas de clase) por lo general se le entiende y se detiene a responder las preguntas que le hagan. Para realmente tener claro los contenidos que enseña es vital que se profundize con las lecturas del programa, estudio autonomo y asistir a las monitorias, en el caso de nuestro monitor, fue de gran ayuda. Es una materia muy teorica, así es buena idea llevar apuntes para repasar los contenidos",
          "pros": "Incentiva a observar múltiples enfoques y/o perspectivas. Maneja muy bien el tema Es crítico Se puede dejar alta. Solo cuatro notas (Dos talleres y dos parciales)",
          "contras": "Metodología que puede generar aburrimiento Solo cuatro notas Si te pierdes en algún momento de la clase es probable que no entiendas después. No manda las diapositivas :(",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 4
        }
      },
      {
        "nombre": "William Chavarro Rojas",
        "slug": "william-chavarro-rojas",
        "resenas": 24,
        "calidad": "buena",
        "calificacion": 3.9,
        "notaPromedio": 4.39,
        "resenasOcultas": 23,
        "resena": {
          "texto": "en un profesor que se esfuerza en que materia como economía generen un interés en los estudiantes, su programa esta pensado para ver desde todos los puntos de vista y trata siempre de llevar las clases de manera dinámica.",
          "pros": "-ves puntos de vista de la economía que no verías en otras clases -actividades dinámicas y creativas en la mayoría de las clases",
          "contras": "- si esta desconcentrado o cansado le puede dar sueño fácilmente",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3.7
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
        "resenas": 40,
        "calidad": "regular",
        "calificacion": 3.52,
        "notaPromedio": 4.3,
        "resenasOcultas": 39,
        "resena": {
          "texto": "Benavides, a mi parecer es un excelente académico por toda su trayectoria y también como persona. Es amable, entusiasta y siempre da oportunidad para mejorar la nota, algo que me gustaría que mejorara para términos de clase, es que no solo se enfoque en pasar las 271 diapositivas que tiene, sino profundizar un poco más en lo teórico, partir del hecho de donde proviene la teoría, étc. Además, extrapolarse más allá de las diapositivas y utilizar el tablero. De resto, completamente destacar al profesor por su labor, porque se nota que le pone amor a la enseñanza y sacar buenos profesionales con…",
          "pros": "Amable Sabe demasiado Analiza la teoría con la realidad Colombiana",
          "contras": "Solo se enfoca en sus diapositivas",
          "periodo": "2026-1",
          "calificacion": 4.6,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Orlando Gutierrez Rozo",
        "slug": "orlando-gutierrez-rozo",
        "resenas": 21,
        "calidad": "regular",
        "calificacion": 3.48,
        "notaPromedio": 4.15,
        "resenasOcultas": 20,
        "resena": {
          "texto": "Es el profesor más monótono y aburrido que conozco, toda su clase es el hablando una versión diluida de las lecturas recomendadas para la clase, se interesa mínimamente en que los estudiantes aprendan y las notas con casi inexistentes, es obligatorio repasar e investigar por cuenta de uno si espera aprender.",
          "pros": "Fácil conseguir buena nota Amable",
          "contras": "Aburrido Desinteresado",
          "periodo": "2021-2",
          "calificacion": 2,
          "dificultad": 2
        }
      },
      {
        "nombre": "Sergio Leon Álvarez Fernandez",
        "slug": "sergio-leon-alvarez-fernandez",
        "resenas": 8,
        "calidad": "regular",
        "calificacion": 3.23,
        "notaPromedio": 4,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Bueno, Sergio al ser el profe Auxiliar, se le entiende su preocupación por enseñar. El primer sábado de clases, le metió miedo a la mayoría de la clase y demostró una actitud un poco tosca, pero, al transcurrir el semestre, cambió totalmente de actitud y es allí donde uno se da cuenta que uno como estudiante necesita de esa exigencia para afrontar la vida profesional. A él le corresponde la evaluación del 50% del curso que constaba de un Proyecto final investigativo (Minitesis) y Talleres que a mi parecer, si o si debía dedicarle al menos dos semanas, para alcanzar una nota exorbitante, la…",
          "pros": "Exigente, no premia la mediocridad",
          "contras": "Puede caerle mal a la mayoría del curso Siembra miedo al principio de semestre",
          "periodo": "2026-1",
          "calificacion": 4,
          "dificultad": 5
        }
      },
      {
        "nombre": "Raul Alberto Chamorro Narvaez",
        "slug": "raul-alberto-chamorro-narvaez",
        "resenas": 33,
        "calidad": "mala",
        "calificacion": 2.74,
        "notaPromedio": 3.57,
        "resenasOcultas": 31,
        "resena": {
          "texto": "no tengo una calificacion como tal al profesor pero solo dire que aprendi mas con solo mankiw que con las diapositivas y el profesor, si lee el libro de mankiw con atencion puede pasar la materia sin problema.",
          "pros": "no me paso, pero muchos perdian, es una masacre al inicio",
          "contras": "no sabemos que vamos a ver cada clase, el papel del curso nunca es claro",
          "periodo": "2025-1",
          "calificacion": 3.5,
          "dificultad": 4
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
        "nombre": "Juan Manuel Monroy Barragan",
        "slug": "juan-manuel-monroy-barragan",
        "resenas": 3,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Las lecturas del curso fueron todas muy buenas, bien seleccionadas. Pero las explicaciones de clase por lo general no eran tan claras, no era muy evidente que hubiera preparado la clase. Tal vez él esperaba que los estudiantes ya hubiéramos estudiado el tema por nuestra cuenta o que lo comprendiéramos nosotros mismos después. Pero unos cuantos temas se cubrieron bien, en cuanto a explicación y profundidad. La exigencia es alta, no lo recomendaría mucho, a menos que se disponga de bastante tiempo para dedicar a esa asignatura.",
          "pros": "Muy buen syllabus. Sin discursos políticos o posiciones ideológicas en la clase.",
          "contras": "Alta demanda de tiempo. Prácticamente imposible de dejar por encima de 4.7.",
          "periodo": "2018-20",
          "calificacion": 3.5,
          "dificultad": 4.3
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
        "nombre": "Sonia Moreno Guaqueta",
        "slug": "sonia-moreno-guaqueta",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.77,
        "notaPromedio": 3.76,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Sonia definitivamente es una profe que impone respeto desde el principio, pero al final de semestre ya estara riendose con todos, le gustan mucho los ejercicios y las berracas conversiones de unidades, definitivamente hay que estudiar constantemente ya que sus parciales tienden a tener un buen nivel de dificultad, pero nada que resolver los ejercicios en clase no solucione",
          "pros": "Me hizo cogerle amor a la fisicoquímica",
          "contras": "Aveces pone puntos muy difíciles en los parciales, que ni encuentras en libros xd",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
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
        "nombre": "Ariel Rodolfo Quevedo Pastor",
        "slug": "ariel-rodolfo-quevedo-pastor",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.47,
        "notaPromedio": 4.35,
        "resenasOcultas": 9,
        "resena": {
          "texto": "La materia en si es pesada, requiere mucho estudio autonomo, el profe manda talleres para cada corte antes del parcial, responde correos para dudas, y los parciales en si no son tan complejos, mas bien cascarosos ajja, pero si estudias y sabes del tema no se te va a dificultar, depenediendo de como te va en los 3 parciales anteriores el ultimo te lo puede exonerar (si sacaste mas de 4.0 en los 3 primeros parciales), tambien no lo hagan enojar pues no los deja sacar apuntes, aunque de por si los apuntes se sienten inutiles en el parcial, aproveche a pasar al tablero para que le de puntos que…",
          "pros": "Responde dudas Deja salir temprano Facil dejarla en alto Explica muy bien Manda material de soporte",
          "contras": "Perezoso Se distrae mucho Hace chistes malosxd Mucha cascarita",
          "periodo": "2026-1",
          "calificacion": 4.4,
          "dificultad": 4.3
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
        "nombre": "Claudia Consuelo Rubiano Castellanos",
        "slug": "claudia-consuelo-rubiano-castellanos",
        "resenas": 14,
        "calidad": "buena",
        "calificacion": 4.27,
        "notaPromedio": 4.05,
        "resenasOcultas": 13,
        "resena": {
          "texto": "En general es muy buena profe, muy cercana con sus estudiantes. Este semestre en particular todas las notas se sacaron por medio de quices y aunque al principio parecía ser así más fácil por qué no se acumulaban temas para parciales, llegamos a tener dos quices a la semana por meses, lo cual puede llegar a ser agotador, pero ps eso es mucho mejor que un parcial. La profe es organizada, aunque las fechas siempre terminan corriendose. Todas las actividades evaluativas fueron en grupos, y saca muchas notas, es básicamente imposible perderla y la puedes dejar más alta, te lo prometo.",
          "pros": "- Énfasis en fisiología -No te va a preguntar las rutas, no pierdas el tiempo memorizandolas, con que las entiendas de manera general basta -Saca muchas notas y da puntos extra etc -Nos dió dulces el último día xd -Es…",
          "contras": "-Si no tienes un grupo o con quién hacerte, lo lamento, todo es en grupo -Muchas exposiciones (Son el 30% de la materia) -No se esmero tanto en la parte de cinética enzimática como para evaluar como lo hizo 💀",
          "periodo": "2026-1",
          "calificacion": 4.5,
          "dificultad": 3.4
        }
      },
      {
        "nombre": "Jaiver Eduardo Rosas Perez",
        "slug": "jaiver-eduardo-rosas-perez",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.23,
        "notaPromedio": 3.88,
        "resenasOcultas": 5,
        "resena": null
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
        "nombre": "Zuly Jenny Rivera Monroy",
        "slug": "zuly-jenny-rivera-monroy",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.17,
        "notaPromedio": 3.96,
        "resenasOcultas": 9,
        "resena": {
          "texto": "De las mejores profesoras de la carrera, tiene una amor increíble por la cromatografía y lo demuestra en sus enseñanzas, califica siempre lo que envía en sus talleres, ademas como persona es un gran ser humano",
          "pros": "Si quieren aprender cromatografía como debe ser, inscriba con ella",
          "contras": "Tuvimos poco tiempo por los festivos y tuvo que correr con últimos temas :(",
          "periodo": "2026-1",
          "calificacion": 4.9,
          "dificultad": 2
        }
      },
      {
        "nombre": "Mauricio Maldonado Villamil",
        "slug": "mauricio-maldonado-villamil",
        "resenas": 15,
        "calidad": "buena",
        "calificacion": 4.14,
        "notaPromedio": 3.94,
        "resenasOcultas": 14,
        "resena": {
          "texto": "El profesor es bueno, sabe de los temas, al inicio le costó adaptarse a la virtualidad, optó por enviar las clases grabadas, con el paso de las clases se iba acostumbrando. Deja talleres trabajables y los parciales son basados en los puntos que desarrolla en la clase o que deja en los talleres. Eso si, no da retroalimentación de nada, solo envía un documento con las notas.",
          "pros": "Responde dudas por correo Talleres y parciales trabajables",
          "contras": "No hay retroalimentación de nada",
          "periodo": "2020-10 (virtual)",
          "calificacion": 4,
          "dificultad": 4
        }
      },
      {
        "nombre": "Gerardo Gordillo Guzman",
        "slug": "gerardo-gordillo-guzman",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.13,
        "notaPromedio": 4.49,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Es un buen profesor, es buena gente, y en general es relativamente facil de pasar",
          "pros": "Lo unico malo es que las clases pueden ser algo aburridas en algunos momentos, las diapostivas usadas se ven muy desfasadas",
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 4.7,
          "dificultad": 2.6
        }
      },
      {
        "nombre": "Edgar Eduardo Daza Caicedo",
        "slug": "edgar-eduardo-daza-caicedo",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.11,
        "notaPromedio": 3.75,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Es uno de los mejores profes que he tenido en la carrera. Sabe mucho y esta dispuesto a explicar un tema 10 veces con tal de que los estudiantes entiendan. Aunque no tome asistencia las clases son muy equilibridas; el profesor cuenta anecdotas divertidas y lleva de forma completa las explicaciones de temas, que a pesar de ser abstractos, se pueden entender prestando atención, preguntando o viendo la guia y presentaciones del curso. Los parciales no son tan dificiles (4, cada uno vale 20% y el otro 20% es de quices de classroom) y más allá de si la respuesta esta bien o no, se califica que…",
          "pros": "Profesor que sabe mucho, hace la clase amena y en los parciales se evalua lo necesario (Daza es idolo).",
          "contras": "A veces se equivoca en algunos despejes y operaciones que son tediosas, hay que estar atento y preguntar cuando son clases con estos procedimientos, igual ni se evaluan (la clase donde se ven las transformaciones de…",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 4
        }
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
      },
      {
        "nombre": "Eduard Ricardo Romero Malagon",
        "slug": "eduard-ricardo-romero-malagon",
        "resenas": 33,
        "calidad": "regular",
        "calificacion": 3.95,
        "notaPromedio": 3.94,
        "resenasOcultas": 32,
        "resena": {
          "texto": "La clase se basa en aprender a usar la calculadora que él mismo programó, si aprende es fijo que le queda la definitiva mínimo en 4, en los parciales y quizes que hace, no le importa el procedimiento solo el resultado, por ende si tiene errores pequeños en decimales, le cuenta como mal, dependiendo del grupo puede llegar a hacer pocos o muchos quizes (cada clase 1, mi caso), importante poner atención al uso de la calculadora en los ejercicios que hace en clase, regularmente hace los mismos pero con datos diferentes. Si tiene buenas notas al final del curso, lo exonera del parcial final. A…",
          "pros": "La calculadora, es enredada pero ayuda mucho con los ejercicios Entrega notas casi el mismo día del parcial Puede hacer que se tomen solo las mejores notas de los quizes (en mi caso fueron los mejores 10 de los 15 en…",
          "contras": "Casi todo Favoritismo por grupos de farmacia Pide tareas que deja días random, las puede pedir para quitar un quiz o quitar puntos en el parcial Cuando se le preguntan cosas, puede llegar a responder sarcásticamente y…",
          "periodo": "2025-1",
          "calificacion": 2,
          "dificultad": 1.9
        }
      },
      {
        "nombre": "Carlos Enrique Daza Velasquez",
        "slug": "carlos-enrique-daza-velasquez",
        "resenas": 43,
        "calidad": "regular",
        "calificacion": 3.93,
        "notaPromedio": 3.75,
        "resenasOcultas": 42,
        "resena": {
          "texto": "Todo un concha su madre para bien o para mal y como consejo nunca le vaya a llegar tarde a ese man. 6/10 y normalito",
          "pros": "Sabe mucho",
          "contras": "El diablo si lo agarra entre ojos",
          "periodo": "2019-2",
          "calificacion": 3.5,
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
        "nombre": "Cristian Ochoa Puentes",
        "slug": "cristian-ochoa-puentes",
        "resenas": 15,
        "calidad": "regular",
        "calificacion": 3.74,
        "notaPromedio": 3.99,
        "resenasOcultas": 14,
        "resena": {
          "texto": "Usted depende mucho de su aprendizaje autonomo a mi parecer el pasa los mecanismo de reaccion rapido y por encima, aunque el contesta todas las preguntas del mundo incluso si se las envia por correo, los porcentajes que maneja hace que sea dificil de pasar, apuntele a los dos primeros parciales que son los mas sencillos los otros dos son bastante duros, y suele repetir puntos de parciales pasados o puntos que son literalmente como los del libro entonces hagalos, al inicio no quiere pasar las diapositivas pero si insiste las pasa igual las diapositivas son literalmente el libro",
          "pros": "No toma asistencia Responde dudas",
          "contras": "depende en gran parte de su estudio autonomo Los porcentajes hacen que sea dificil pasar, depende totalmente de los parciales, si alguno lo pierde bien bajito va a ser dificil de pasar",
          "periodo": "2026-1",
          "calificacion": 3,
          "dificultad": 4
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
        "nombre": "Ivonne Jeannette Nieto Ramirez",
        "slug": "ivonne-jeannette-nieto-ramirez",
        "resenas": 9,
        "calidad": "regular",
        "calificacion": 3.49,
        "notaPromedio": 4.03,
        "resenasOcultas": 8,
        "resena": {
          "texto": "A mi esta profesora no me parece amable, es bastante pasivo agresiva, en este semestre probaron con hacer exposiciones e informes dentro del laboratorio, le recomiendo lleve ya analizado todo para cuando le toque hacer los informes, para las exposiciones tiene que llevar cartelera (realizada a mano) y le van a hacer preguntas, se va a pegar de todo lo que usted diga, la recomendacion por mediocre que parezca es que no busque respuestas super elaboradas, diga solo lo necesario entienda bien la practica y las distintas caracteristicas de los compuestos de interes y reactivos que va a usar,…",
          "pros": "Cuaderno e informes no tira duro Es dificil que pierda (pero no imposible) Las practicas son cheveres Sabe un monto y a veces le da ideas de porque pasan ciertas reacciones y de porque obtiene ciertos resultados",
          "contras": "Es pasivo agresiva Usted puede estar haciendo su practica normal y lo empieza a afanar tambien le puede hacer preguntas y si se equivoca no lo va a tratar mal pero lo va a hacer sentir como un estupido Tiene algunas…",
          "periodo": "2026-1",
          "calificacion": 3.5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Carlos Alexander Trujillo",
        "slug": "carlos-alexander-trujillo",
        "resenas": 50,
        "calidad": "regular",
        "calificacion": 3.42,
        "notaPromedio": 3.39,
        "resenasOcultas": 49,
        "resena": {
          "texto": "Es un profesor bastante dinámico en ciertas cosas, le gusta tirar datos random y te da el contexto de muchos compuestos, tiene muchas malas reseñas pero en realidad es un buen profesor siempre dice en que horario hacerle reclamos y no se enoja si los haces, sus parciales son bastante complicados a veces pero si prestas atención en clase son pasables, si llevas una usb te regala los libros que se estén usando.",
          "pros": "Tira chistes flojos No es amargado Explica bien y manda las diapositivas Lleva compuestos para ser mas dinámico",
          "contras": "Parciales medio complicaditos",
          "periodo": "2026-1",
          "calificacion": 4.3,
          "dificultad": 4
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
        "nombre": "Leon Dario Perez",
        "slug": "leon-dario-perez-perez",
        "resenas": 35,
        "calidad": "mala",
        "calificacion": 3.07,
        "notaPromedio": 3.47,
        "resenasOcultas": 34,
        "resena": {
          "texto": "Excelente profesor, se preocupa porque los estudiantes tengan una buena preparación en los temas básicos.",
          "pros": "Buen dominio del tema y disponibilidad a explicar.",
          "contras": "Hace muchos quices y exámenes",
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 4
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
        "nombre": "Fabian Parada Alfonso",
        "slug": "fabian-parada-alfonso",
        "resenas": 16,
        "calidad": "mala",
        "calificacion": 2.13,
        "notaPromedio": 3.26,
        "resenasOcultas": 15,
        "resena": {
          "texto": "Creería que este semestre fue más amable que como fue en otros. Jamás entendí como iban los porcentajes y realmente el que te pueda ir bien va más bien ligado a como le caigas, no hay un criterio claro de calificación te baja por bobadas y baja mucho (+1 unidad), casi imposible dejar un informe en +3,5 de vdd. Es gritón, si, a veces se altera bien feo, respóndele con seguridad y no intentes contradecirlo.No hay nota de cuaderno, perfectamente puedes no hacer ningún pre informe, los parciales son de un nivel medio y te puede llegar a eximir del final, pero eso en realidad es más bien cuestión…",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 3,
          "dificultad": 3.4
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
        "resenas": 13,
        "calidad": "regular",
        "calificacion": 3.35,
        "notaPromedio": 3.76,
        "resenasOcultas": 12,
        "resena": {
          "texto": "Modesto es un buen profesor, solo que tiene sus momentos donde tiende a ser un poquito rajon, tiene buen dominio de los temas, pero muchas veces da mucha teoria y al final termina diciendo que nada de eso importa que no es necesario, las clases tienden a ser un poco aburridas. Sin embargo, en cuanto a los parciales solo hace uno, y da la opcion de reempalazar esa nota por laboratorios. Lo que mas vale es la salida de campo, este semestre fueron 11 dias, en si la salida es bien, se pueden parchar arto, en base a la salida toca hacer una libreta, entonces toca estar pendiente con eso, y…",
          "pros": "Dominio de los temas Califica suave (no se si es porque somos de civil) Salida de campo",
          "contras": "A veces es amargado En campo se estresa un poco si se da cuenta que no se le esta entendiendo o si nos ve perdidos",
          "periodo": "2026-1",
          "calificacion": 4,
          "dificultad": 4
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
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.87,
        "notaPromedio": 4.4,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Sin duda es uno de los mejores profesores de bioquimica, explica super bien, siempre dispuesto a resolver dudas, amable, respetuoso y buena onda (ojala poder ver mas clases con el)",
          "pros": "con esfuerzo se deja alta, pero lo mas importante se aprende de verdad",
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3.5
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
        "resenas": 14,
        "calidad": "buena",
        "calificacion": 4.27,
        "notaPromedio": 4.05,
        "resenasOcultas": 13,
        "resena": {
          "texto": "En general es muy buena profe, muy cercana con sus estudiantes. Este semestre en particular todas las notas se sacaron por medio de quices y aunque al principio parecía ser así más fácil por qué no se acumulaban temas para parciales, llegamos a tener dos quices a la semana por meses, lo cual puede llegar a ser agotador, pero ps eso es mucho mejor que un parcial. La profe es organizada, aunque las fechas siempre terminan corriendose. Todas las actividades evaluativas fueron en grupos, y saca muchas notas, es básicamente imposible perderla y la puedes dejar más alta, te lo prometo.",
          "pros": "- Énfasis en fisiología -No te va a preguntar las rutas, no pierdas el tiempo memorizandolas, con que las entiendas de manera general basta -Saca muchas notas y da puntos extra etc -Nos dió dulces el último día xd -Es…",
          "contras": "-Si no tienes un grupo o con quién hacerte, lo lamento, todo es en grupo -Muchas exposiciones (Son el 30% de la materia) -No se esmero tanto en la parte de cinética enzimática como para evaluar como lo hizo 💀",
          "periodo": "2026-1",
          "calificacion": 4.5,
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
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.47,
        "notaPromedio": 4.35,
        "resenasOcultas": 9,
        "resena": {
          "texto": "La materia en si es pesada, requiere mucho estudio autonomo, el profe manda talleres para cada corte antes del parcial, responde correos para dudas, y los parciales en si no son tan complejos, mas bien cascarosos ajja, pero si estudias y sabes del tema no se te va a dificultar, depenediendo de como te va en los 3 parciales anteriores el ultimo te lo puede exonerar (si sacaste mas de 4.0 en los 3 primeros parciales), tambien no lo hagan enojar pues no los deja sacar apuntes, aunque de por si los apuntes se sienten inutiles en el parcial, aproveche a pasar al tablero para que le de puntos que…",
          "pros": "Responde dudas Deja salir temprano Facil dejarla en alto Explica muy bien Manda material de soporte",
          "contras": "Perezoso Se distrae mucho Hace chistes malosxd Mucha cascarita",
          "periodo": "2026-1",
          "calificacion": 4.4,
          "dificultad": 4.3
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
        "nombre": "Claudia Consuelo Rubiano Castellanos",
        "slug": "claudia-consuelo-rubiano-castellanos",
        "resenas": 14,
        "calidad": "buena",
        "calificacion": 4.27,
        "notaPromedio": 4.05,
        "resenasOcultas": 13,
        "resena": {
          "texto": "En general es muy buena profe, muy cercana con sus estudiantes. Este semestre en particular todas las notas se sacaron por medio de quices y aunque al principio parecía ser así más fácil por qué no se acumulaban temas para parciales, llegamos a tener dos quices a la semana por meses, lo cual puede llegar a ser agotador, pero ps eso es mucho mejor que un parcial. La profe es organizada, aunque las fechas siempre terminan corriendose. Todas las actividades evaluativas fueron en grupos, y saca muchas notas, es básicamente imposible perderla y la puedes dejar más alta, te lo prometo.",
          "pros": "- Énfasis en fisiología -No te va a preguntar las rutas, no pierdas el tiempo memorizandolas, con que las entiendas de manera general basta -Saca muchas notas y da puntos extra etc -Nos dió dulces el último día xd -Es…",
          "contras": "-Si no tienes un grupo o con quién hacerte, lo lamento, todo es en grupo -Muchas exposiciones (Son el 30% de la materia) -No se esmero tanto en la parte de cinética enzimática como para evaluar como lo hizo 💀",
          "periodo": "2026-1",
          "calificacion": 4.5,
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
        "resenas": 17,
        "calidad": "buena",
        "calificacion": 4.24,
        "notaPromedio": 3.46,
        "resenasOcultas": 16,
        "resena": {
          "texto": "Excelente ser humano y profesora, siempre trata de que sus estudiantes entiendan y super ordenada. Aun que es bastante exigente y es fácil perderse por la complejidad de los temas, personalmente se me hace muy graciosa, siempre te saca una sonrisa aunque sabes que te vas a tirar la materia.",
          "pros": "Muy honesta y se nota que sabe mucho. Al final ayudó a los estudiantes que les fue mal. Deja talleres no obligatorios para estudiar.",
          "contras": "Sus parciales son dificiles. Hace quizzes sorpresa. Cuando usa diapositivas (rara vez lo hace) las clases se hacen aburridas.",
          "periodo": "2026-1",
          "calificacion": 4,
          "dificultad": 5
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
        "resenas": 27,
        "calidad": "mala",
        "calificacion": 2.29,
        "notaPromedio": 3.27,
        "resenasOcultas": 26,
        "resena": {
          "texto": "Tarda demasiado en avanzar con los temas, las clases son monótonas y en ocasiones dicta el mismo tema con las mismas diapositivas más de una vez. Los parciales son o muy extensos o muy cortos, hay que estar atento a todo lo que menciona aunque no tenga que ver con el curso. Responde dudas y es amable; cuando vi la materia eran 3 parciales cada uno del mismo valor.",
          "pros": "Responde dudas. Si estudia lo que envía al correo, es posible dejarla alta.",
          "contras": "Parciales muy específicos. Clases monótonas. No sigue el temario del curso.",
          "periodo": "2026-1",
          "calificacion": 3.4,
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
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.47,
        "notaPromedio": 4.35,
        "resenasOcultas": 9,
        "resena": {
          "texto": "La materia en si es pesada, requiere mucho estudio autonomo, el profe manda talleres para cada corte antes del parcial, responde correos para dudas, y los parciales en si no son tan complejos, mas bien cascarosos ajja, pero si estudias y sabes del tema no se te va a dificultar, depenediendo de como te va en los 3 parciales anteriores el ultimo te lo puede exonerar (si sacaste mas de 4.0 en los 3 primeros parciales), tambien no lo hagan enojar pues no los deja sacar apuntes, aunque de por si los apuntes se sienten inutiles en el parcial, aproveche a pasar al tablero para que le de puntos que…",
          "pros": "Responde dudas Deja salir temprano Facil dejarla en alto Explica muy bien Manda material de soporte",
          "contras": "Perezoso Se distrae mucho Hace chistes malosxd Mucha cascarita",
          "periodo": "2026-1",
          "calificacion": 4.4,
          "dificultad": 4.3
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
        "nombre": "Cristian Ochoa Puentes",
        "slug": "cristian-ochoa-puentes",
        "resenas": 15,
        "calidad": "regular",
        "calificacion": 3.74,
        "notaPromedio": 3.99,
        "resenasOcultas": 14,
        "resena": {
          "texto": "Usted depende mucho de su aprendizaje autonomo a mi parecer el pasa los mecanismo de reaccion rapido y por encima, aunque el contesta todas las preguntas del mundo incluso si se las envia por correo, los porcentajes que maneja hace que sea dificil de pasar, apuntele a los dos primeros parciales que son los mas sencillos los otros dos son bastante duros, y suele repetir puntos de parciales pasados o puntos que son literalmente como los del libro entonces hagalos, al inicio no quiere pasar las diapositivas pero si insiste las pasa igual las diapositivas son literalmente el libro",
          "pros": "No toma asistencia Responde dudas",
          "contras": "depende en gran parte de su estudio autonomo Los porcentajes hacen que sea dificil pasar, depende totalmente de los parciales, si alguno lo pierde bien bajito va a ser dificil de pasar",
          "periodo": "2026-1",
          "calificacion": 3,
          "dificultad": 4
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
        "resenas": 20,
        "calidad": "buena",
        "calificacion": 3.92,
        "notaPromedio": 3.69,
        "resenasOcultas": 19,
        "resena": {
          "texto": "Me parece que es un profesor muy curioso, por su personalidad, es interesante y comodo estar en una clase que es amena porque el mismo profesor se encarga de asi hacerla. Son 3 parciales y ya, lo cual puede ser o muy malo o muy bueno, al menos creo que con el profesor es muy bueno porque califica lo que enseña en gran medida, donde se puede ir mas alla en los parciales es en la parte teorica, aunque por la cantidad de puntos que hay en el parcial es probable que eso no afecte tanto la nota. Dejarla alta es facil si se hacen los ejercicios y uno le da tiempo para reflexionar sobre los…",
          "pros": "Chistoso Explica bien y no se hace complicado Se aprende Parciales relativamente faciles Clase amena",
          "contras": "Hay momentos en los que divaga un poco y termina hablando de cosas un poco nada que observar",
          "periodo": "2026-1",
          "calificacion": 4.5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Rafael Alberto Molina Gallego",
        "slug": "rafael-alberto-molina-gallego",
        "resenas": 18,
        "calidad": "regular",
        "calificacion": 3.55,
        "notaPromedio": 3.54,
        "resenasOcultas": 17,
        "resena": {
          "texto": "El docente habla mucho en clase y no se esmera por el aprendizaje de sus estudiantes, los parciales son un poco confusos y su material de estudio no es el adecuado.",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 2,
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
        "resenas": 50,
        "calidad": "regular",
        "calificacion": 3.42,
        "notaPromedio": 3.39,
        "resenasOcultas": 49,
        "resena": {
          "texto": "Es un profesor bastante dinámico en ciertas cosas, le gusta tirar datos random y te da el contexto de muchos compuestos, tiene muchas malas reseñas pero en realidad es un buen profesor siempre dice en que horario hacerle reclamos y no se enoja si los haces, sus parciales son bastante complicados a veces pero si prestas atención en clase son pasables, si llevas una usb te regala los libros que se estén usando.",
          "pros": "Tira chistes flojos No es amargado Explica bien y manda las diapositivas Lleva compuestos para ser mas dinámico",
          "contras": "Parciales medio complicaditos",
          "periodo": "2026-1",
          "calificacion": 4.3,
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
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.47,
        "notaPromedio": 4.35,
        "resenasOcultas": 9,
        "resena": {
          "texto": "La materia en si es pesada, requiere mucho estudio autonomo, el profe manda talleres para cada corte antes del parcial, responde correos para dudas, y los parciales en si no son tan complejos, mas bien cascarosos ajja, pero si estudias y sabes del tema no se te va a dificultar, depenediendo de como te va en los 3 parciales anteriores el ultimo te lo puede exonerar (si sacaste mas de 4.0 en los 3 primeros parciales), tambien no lo hagan enojar pues no los deja sacar apuntes, aunque de por si los apuntes se sienten inutiles en el parcial, aproveche a pasar al tablero para que le de puntos que…",
          "pros": "Responde dudas Deja salir temprano Facil dejarla en alto Explica muy bien Manda material de soporte",
          "contras": "Perezoso Se distrae mucho Hace chistes malosxd Mucha cascarita",
          "periodo": "2026-1",
          "calificacion": 4.4,
          "dificultad": 4.3
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
        "nombre": "Lina Juliana Bulla Casas",
        "slug": "lina-juliana-bulla-casas",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 5,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es una muy buena profesora, prepara muy bien sus clases y comparte todo el material. Aveces da las clases virtuales cuando son de excel y hace bonus para subir las notas. Hace dos parciales de 30% cada uno y talleres, pero los parciales y la materia en general es muy sencilla. Vería más materias con ella. Linagod.",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Maria Fernanda Galarza Pedraza",
        "slug": "maria-fernanda-galarza-pedraza",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 4.73,
        "notaPromedio": 4.31,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Muy buena profesora, las explicaciones son muy detalladas, hace ejercicios sencillos y que explican el tema de la mejor manera, los talleres son fáciles al igual que los parciales que son muy parecidos a estos talleres. Los porcentajes de las notas están bien distribuidos, talleres en parejas, un par de quices y los parciales. Buena gente, resuelve dudas de la mejor manera. Va a pasar y va a aprender.",
          "pros": "Todo",
          "contras": "Nada",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 1.6
        }
      },
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
        "nombre": "Cesar Augusto Roa Lemus",
        "slug": "cesar-augusto-roa-lemus",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 4.69,
        "notaPromedio": 4.24,
        "resenasOcultas": 6,
        "resena": {
          "texto": "El profesor es amable y enseña bien, tiene mucha experiencia y se nota. Deja bastantes notas, bastantes.. Y se sigue el programa que él manda desde el inicio donde dice fecha para todo. Algunos parciales son demasiado largos tanto que uno no alcanza a resolverlos en dos horas.",
          "pros": "Amable Sabe mucho Enseña bien",
          "contras": "Proyecto final, el cual debe presentar algo bien elaborado, coordine con su grupo. Parciales largos",
          "periodo": "2025-2",
          "calificacion": 4.5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Lucas Adolfo Giraldo Rios",
        "slug": "lucas-adolfo-giraldo-rios",
        "resenas": 17,
        "calidad": "buena",
        "calificacion": 4.66,
        "notaPromedio": 4.75,
        "resenasOcultas": 16,
        "resena": {
          "texto": "sus clases son super entretenidas, el man habla mucho y casi nunca aburre, se nota que sabe muchisimo y maneja muy bien los temas, lo unico es que la mayoria de las clases es hable y hable, nada mas, pero el acento paisa hace todo mas chevere JAJA, eso si, al comienzo del curso dice que va a hacer un parcial y termina sacando notas super rebuscadas, no cumple lo que dice, no dice nada de porcentajes y deja unos talleres nada que ver, se nota que es perezoso porque hace que todo el mundo haga los talleres y luego sortea a 10 personas y solo califica eso. no tiene nada de palabra con las…",
          "pros": "super buena gente acento paisa sabe mucho",
          "contras": "desordenado con las notas",
          "periodo": "2024-2",
          "calificacion": 4,
          "dificultad": 2.4
        }
      },
      {
        "nombre": "Carlos Andres Cubillos Rincon",
        "slug": "carlos-andres-cubillos-rincon",
        "resenas": 24,
        "calidad": "buena",
        "calificacion": 4.53,
        "notaPromedio": 4.31,
        "resenasOcultas": 23,
        "resena": {
          "texto": "El profe es una persona que sabe mucho, es una buena gente, tiene una buena pedagogía, se deja hablar, da muchas ayudas para subir la nota, es fácil de dejar en 42 para arriba, lo feo es que el man tiene más trabajos y por lo general llega muy tarde a clase; dice “La entrada será a las 6:30”, cosa que siempre incumple porque llega como a las 7. Tener la posibilidad de ver las clases virtuales con la ruta de aprendizaje es algo que ayuda, ya que permite entender mejor las clases, por lo general da más de un intento en los parciales y la mayoría de las veces todos tienen el mismo parcial, ahí…",
          "pros": "Los parciales son fáciles Se deja hablar y ayuda Da muchas oportunidades para subir la nota de los parciales Maneja clases por plataforma El libro Guía es superútil Antes de los parciales deja Workshop para prepararse…",
          "contras": "Llega siempre tarde a veces lo asfixia a uno con tantas tareas, pero son fáciles",
          "periodo": "2024-1",
          "calificacion": 4.6,
          "dificultad": 2.5
        }
      },
      {
        "nombre": "Javier Ricardo Ojeda Sanchez",
        "slug": "javier-ricardo-ojeda-sanchez",
        "resenas": 34,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.84,
        "resenasOcultas": 33,
        "resena": {
          "texto": "El profe es muy relajado , por lo cual es muy ha igual que llegue tarde a la clase, el semestre pasado muchas veces se perdía clase por esa razón y no se veía a plenitud los temas y por ende era más complicado ya que se asumía aprenderlos de forma autónoma es buena opción pero hayejores",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 3,
          "dificultad": 3.9
        }
      },
      {
        "nombre": "Julio Cesar Cañon Rodriguez",
        "slug": "julio-cesar-cañon-rodriguez",
        "resenas": 21,
        "calidad": "buena",
        "calificacion": 4.41,
        "notaPromedio": 4.2,
        "resenasOcultas": 20,
        "resena": {
          "texto": "Es un profesor amable y comprensivo, bastante metódico con su curso y siempre orientado a destacar los talentos de sus estudiantes. La asignatura consiste en diseñar un proyecto en equipo durante todo el semestre, y las clases son explicaciones teóricas de cómo desarollar un buen proyecto; la metodología de calificación es variada, hay tanto actividades individuales como en grupo, incluyendo desde documentos entregables hasta exposiciones y evaluaciones. Esta es una de esas materias en las que los estudiantes dejan de asistir y el profesor se puede llegar a sentir frustrado, por lo cual llegó…",
          "pros": "Explicaciones divertidas e incluso graciosas Flexible con las entregas",
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 4,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Giovanni Muñoz Puerta",
        "slug": "giovanni-muñoz-puerta",
        "resenas": 13,
        "calidad": "buena",
        "calificacion": 4.3,
        "notaPromedio": 4.55,
        "resenasOcultas": 12,
        "resena": {
          "texto": "Es una buena persona, la metodologia de la clase no es muy convencional, pero al menos entretiene a ratos, muchas veces solo son charlas y el contando sus anecdotas y chismes. evalua suave, aunque casi nunca deja conocer las notas, las notas son por puntos de participacion o puntos que se ganan con algun trabajo, quiz o parcial y saca la definitiva por curva",
          "pros": null,
          "contras": null,
          "periodo": "2024-2",
          "calificacion": 4,
          "dificultad": 3.7
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
        "nombre": "Hugo Alberto Herrera Fonseca",
        "slug": "hugo-alberto-herrera-fonseca",
        "resenas": 29,
        "calidad": "buena",
        "calificacion": 4.17,
        "notaPromedio": 4.17,
        "resenasOcultas": 28,
        "resena": {
          "texto": "Un profesor excelente, los temas son interesantes y el conocimiento se le nota. La verdad volvería a tomar una clase con el docente. La nota es muy fácil de dejar alta, a mi me quedo bajita por confiado (culpa mía). Si le cuadra el horario no dude en meter con el",
          "pros": "- Todo",
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2.4
        }
      },
      {
        "nombre": "Angela Maria Arboleda Restrepo",
        "slug": "angela-maria-arboleda-restrepo",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 4.16,
        "notaPromedio": 4.17,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Es una profesora con metodología muy escuelera. Llama lista, pone a la gente a leer las diapositivas, te llama la atención si no estás pondiendo cuidado. Además de esto, es buena gente, explica bien (aunque muy despacio) y suele ser flexible con presentar talleres o parciales.",
          "pros": "Explica bien. Todo el material está en el moodle.",
          "contras": "No nos dijo los porcentajes de la materia hasta mitad de semestre. Califica duro, pero sube la nota si uno habla con ella. Llama a lista a inicio de clase.",
          "periodo": "2026-1",
          "calificacion": 3.7,
          "dificultad": 2
        }
      },
      {
        "nombre": "Diego Alejandro Hernández Castañeda",
        "slug": "diego-alejandro-hernandez-castaneda",
        "resenas": 7,
        "calidad": "regular",
        "calificacion": 4,
        "notaPromedio": 4.26,
        "resenasOcultas": 6,
        "resena": {
          "texto": "EL GOAT. La verdad un profesor que explica bien los temas, es justo con las califcaciones (casi 5 todo) y muy paciente. La verdad una materia en la que se aprende y se puede dejar en 5 facilmente. Deja varios talleres en el semestre y los quices y parciales son iguales a estos talleres, ademas que el proyecto final sale super facil con la IA (ÉL NOS INCITA A USARLA xd)",
          "pros": "El goat Nos trajó dulces de Canada Facil dejar alto la materia Trabajos no tan dificiles Se aprende",
          "contras": "Que hace los grupos aleatoriamente y por ejemplo, todos mis compañeros eran como miembros de Al Qaeda porque no hacian nada, y si hacian algo, estaba mal hecho.",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 1.5
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
        "nombre": "Sandra Liliana Rojas Martinez",
        "slug": "sandra-liliana-rojas-martinez",
        "resenas": 42,
        "calidad": "regular",
        "calificacion": 3.66,
        "notaPromedio": 4.7,
        "resenasOcultas": 41,
        "resena": {
          "texto": "Las clases con Sandra son algo monótonas, las diapositivas y lecturas eternas que envía dudo sean leídas por la mayoría, tanto los parciales como las actividades que asigna son basicamente comprensión de lectura, muy inferibles, lo único distinto es el proyecto que tampoco tiene mucha ciencia. No la cinqueé por algún trabajo que pendejamente no entregué :v de igual forma IISYC tampoco es una materia que pueda tener mucho más misterio.",
          "pros": "- No es muy exigente",
          "contras": "- Clases bastante olvidables, recuerdo más bien poco de lo visto",
          "periodo": "2024-1",
          "calificacion": 3.5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Juan Pablo Escamilla Mejia",
        "slug": "juan-pablo-escamilla-mejia",
        "resenas": 5,
        "calidad": "regular",
        "calificacion": 3.62,
        "notaPromedio": 4.16,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Es un profesor muy activo, realmente sus clases requieren de mucha concentración, el se guía mucho de un libro y los temas van de la mano con cada capítulo de dicho libro, se ven temas bastante interesantes y el profesor ahonda en cada tema cuanto quiera o pregunten los estudiantes, el problema es que dejaba tareas de cada capítulo que se veía, y muchas veces eran trabajos un poco largos (pedía 4 soluciones por cada problema en Excel, Matemática, Teórica y a veces a Mano).",
          "pros": "-Queda 1A en la materia. -Enseña muchas herramientas que sirven para el día a día (economía personal). -Es facil de pasar, solo es hacer las tareas juicioso. -Los parciales son las mismas tareas pero con enunciados…",
          "contras": "-A veces es un poco fastidioso pelear por lo estricto de sus fechas y trabajos. -Los parciales salen de las tareas, pero no por eso son fáciles xd. -Toca leer mucho para solucionar problemas de Excel :s",
          "periodo": "2021-10 (virtual)",
          "calificacion": 4,
          "dificultad": 2.1
        }
      },
      {
        "nombre": "Diego Fernando Hernandez Losada",
        "slug": "diego-fernando-hernandez-losada",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 2.8,
        "notaPromedio": 4.3,
        "resenasOcultas": 0,
        "resena": {
          "texto": "El profesor es una persona muy amable que dicta la clase de manera alegre y apasionada. Tiene toda la intención de enseñar muchas cosas pero siento que se enreda haciéndolo, cuando vi el módulo con él, las clases constaban de verlo hacer flechas y líneas en un excel lleno de información, que realmente confundían. Entender los temas con él fue muy complicado, pues solo mostraba los datos y no el por qué o cómo se hacían. Con estudio autónomo se puede llegar a entender pero pienso que sus clases pueden ser muy agobiantes, por la cantidad de información y por la manera en la que la presenta.",
          "pros": "Es muy amable, siempre responde correos y está atento a las dudas. Le gusta enseñar. Comparte mucho material adicional e información relevante.",
          "contras": "Habla mucho de sus trabajos pasados para intentar ejemplificar los temas pero eso se vuelve aburridor. Sus exceles son rellenos de información y los muestra de manera desordenada y sin especificar, lo cual confunde.…",
          "periodo": "2023-2",
          "calificacion": 2.8,
          "dificultad": 3.6
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
        "nombre": "Aida Mayerly Fuquene Montañez",
        "slug": "aida-mayerly-fuquene-montañez",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Enseña lo necesario y es muy buena gente, talleres fundamentales para entender bien la materia y los parciales son parecidos a ellos y no son difíciles.",
          "pros": "Se deja alta Explica bien",
          "contras": "Falta mucho a clase",
          "periodo": "2019-10",
          "calificacion": 4,
          "dificultad": 2.8
        }
      },
      {
        "nombre": "Jose Antonio Ruiz Gonzalez",
        "slug": "jose-antonio-ruiz-gonzalez",
        "resenas": 2,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Dicta los temas que le parecen pertinentes, así sean menos temas que otros grupos. Inicia con una introducción a economía que ayuda a que todo el resto del curso tenga más sentido. No deja mucha tarea y califica de manera justa con respecto a las clases.",
          "pros": "No sobrecarga de tareas. Los talleres pesan mucho en la nota final.",
          "contras": "Mucha demora para entregar notas. Si se enreda no lo corrige inmediatamente y tarda en corregir el error.",
          "periodo": "2019-10",
          "calificacion": 4.4,
          "dificultad": 3.5
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
        "nombre": "Andres Felipe Torres Plaza",
        "slug": "andres-felipe-torres-plaza",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es un muy buen profesor, al cual le importa poco la nota y se preocupa mucho que sus estudiantes aprendan sobre la tematica del curso y en general sobre cosas que deberia saber alguien graduado de una universidad de elite, cosas como etiqueta, administracion y presentacion, las clases son didacticas y los trabajos grupales. Un profesor muy completo, recomendado.",
          "pros": "Buen profesor Se preocupa mucho por sus estudiantes la nota no es un problema para el",
          "contras": null,
          "periodo": "2015-20",
          "calificacion": 5,
          "dificultad": 1.6
        }
      },
      {
        "nombre": "Fredy Leonardo Estupiñan Rincon",
        "slug": "fredy-leonardo-estupiñan-rincon",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Fredy \"cincos locos\" Estupiñan, se caracteriza por ser lapso y poco exigente. La verdad inscribí la materia por como me quedaban los horarios, uno no aprende mucho y la exigencia tan baja, sumada a la irresponsabilidad del mismo Fredy, hace que uno en realidad no aprenda nada. Lo recomiendo si uno sabe como estudiar por su cuenta",
          "pros": "- Es fácil pasar con él. - No exige mucho de puntualidad de uno ni en la presentación de trabajos",
          "contras": "- Aveces ni llega a clase, otra llega tarde. - No se aprende nada",
          "periodo": "2013-10",
          "calificacion": 2.5,
          "dificultad": 1.6
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
      },
      {
        "nombre": "Jaime Humberto Niño Peña",
        "slug": "jaime-humberto-niño-peña",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Maria Fernanda Galarza Ramírez",
        "slug": "maria-fernanda-galarza-ramirez",
        "resenas": 0,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Oscar Fernando Caicedo Pardo",
        "slug": "oscar-fernando-caicedo-pardo",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Victor Hugo Contreras Ordoñez",
        "slug": "victor-hugo-contreras-ordoñez",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
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
        "nombre": "Dolly Santos Barbosa",
        "slug": "dolly-santos-barbosa",
        "resenas": 26,
        "calidad": "mala",
        "calificacion": 1.92,
        "notaPromedio": 3.8,
        "resenasOcultas": 25,
        "resena": {
          "texto": "Es un horror de profesora. Nunca sabe uno qué espera o qué quiere exactamente, porque todo depende de cómo ella interprete las cosas. Es muy escuelera y, si quiere que medianamente le vaya bien, tiene que seguir absolutamente todas las reglas y todos los pasos al pie de la letra. Si intenta hacer algo diferente, aunque esté bien hecho, es muy probable que no le guste. Además, cambia mucho de estado de ánimo. Si se enoja, lo trata mal y el ambiente se vuelve bastante incómodo. También acostumbra a escribir mensajes a horas que no son apropiadas, como a las 11 de la noche o incluso más tarde.…",
          "pros": "Nada ;)",
          "contras": "Todo",
          "periodo": "2025-2",
          "calificacion": 1.6,
          "dificultad": 4
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
        "nombre": "Lucas Gomez Llanos",
        "slug": "lucas-gomez-llanos",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.68,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Es un profesor muy organizado, respetuoso, abierto a contestar cualquier tipo de preguntas, maneja Python pero utiliza Google Colab para guardar lo que se haga en cada clase como también se preocupa por que los estudiantes aprendan y logren desafiar nuevos desafios De los mejores profesores que tiene la Universidad",
          "pros": "- Los parciales son muy parecidos a los talleres - Abierto a cualquier pregunta sobre los temas - Ayuda y da ciertos consejos para el proyectos - Puntual con las clases y un manejo excelente del tema",
          "contras": "Ninguno",
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Alejandro Martin Salcedo",
        "slug": "alejandro-martin-salcedo",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 5,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Es un profesor que se esmera por enseñar, da parte de la clase teórica y la mayor parte es práctica donde deja ejercicios para práctica, también deja talleres y los puntos de estos salen en los parciales, es un profesor increíbles no pone problema por nada, sabe enseñar muy bien y da margen de puntos para poder cinquear la materia, también es una clase muy disfrutable y en la que te entretienes mucho. Sin duda Alejandro el besto profe de la universidad",
          "pros": "Todo",
          "contras": "Nada",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 2.8
        }
      },
      {
        "nombre": "Andres Felipe Cantor albarracin",
        "slug": "andres-felipe-cantor-albarracin",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.5,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Un porfesor muy bueno, es claro en las explicacines que hacer, utiliza ejemplos muy didacticos para uno enteder, deja bastantes ejercicios de bonificaciones para subir las notas bajitas, hay que tener mucho cuidado con el uso de la IA ya que es un profesor muy experimentado en codigo asi que se dara cuenta facilmente, si el considera que hubo IA en algun taller o ejercicio el dara la opcion de sustentar el codigo o asumir la verdad y perder con una nota \"no tan bajita\" tipo un 2, hay veces que hace clase virtual, si es nesesario devolverse en el tema se devolvera para explicar si algo no se…",
          "pros": "Ejercicios para subir nota Atento a culquier duda Muy Amable Se preucupa que los estudiantes entiendan",
          "contras": "puede hacer clases en tablero lol",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Javier Eduardo Duarte Aunta",
        "slug": "javier-eduardo-duarte-aunta",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.9,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Si tienen la oportunidad de inscribir programación con él NO la desaproveche. El man es buen profesor, atiende todas las dudas con la mayor paciencia y siempre esta dispuesto a sugerencias. La materia es relativamente fácil porque es virtual, además hace pequeños quices a la semana de lo que dijo en la clase",
          "pros": "-Responde todas las dudas -Explica las veces que sea necesario -Usa diapositivas visualmente buenas",
          "contras": "-Nada",
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Diego Felipe Gomez Alvarado",
        "slug": "diego-felipe-gomez-alvarado",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 5,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Al inicio de clases deja que escojan el porcentaje entre pruebas, actividades, talleres y proyecto final, da muchas oportunidades para tener puntos extras (hasta subiendo temprano un trabajo te da +0.2) además de que si no los llegas a necesitar se te acumulan para la nota final del curso, da muchas opciones par entrega de los trabajos y está muy pendiente del correo. Creo que es la primera vez que dicta una clase y ya tiene creada una página con diapositivas e info del curso (Enseña python y hace al final sesiones complementarias de lo que los estudiantes hayan votado)",
          "pros": "Se comunica constantemente, responde rápido, es comprensivo, en total son 5 actividades, 2 talleres, 5 pruebas y un proyecto final. Si se aprende.",
          "contras": "Según yo nada, pero a veces no se le escucha nada. Haga los trabajos completos",
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "jhon felipe Delgado salazar",
        "slug": "jhon-felipe-delgado-salazar",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 5,
        "resenasOcultas": 0,
        "resena": {
          "texto": "nose si vaya a volver a dar clase por que es de maestria , pero igual queria dejar aqui que es una chimba de profesor , se aprende y se puede dejar alta , hay que dedicarle algo de tiempo al proyecto , pero es una chimba de persona y un estudiante mas , al principio estaba un poco nervioso y se notaba que no habia dado clase antes , pero luego cogio confianza y se volvio muy ameno . al final nos regalo un posillo con un codigo escrito muy chevere y chistoso, es el mejor profesor que he tenido hasta ahora en la carrera :)",
          "pros": "Todo",
          "contras": "nose creo que nada",
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "No lo se",
        "slug": "no-lo-se",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 5,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Diego Camilo Talero Osorio",
        "slug": "diego-camilo-talero-osorio",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 4.91,
        "notaPromedio": 4.89,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Excelente docente, amable, tranquilo, explica muy bien, responde correos rapido, motiva y apasiona a sus estudiantes y ademas es muy flexible.",
          "pros": "amable responsable apasionado tranquilo explica bien con dedicación se cinquea",
          "contras": "demanda tiempo ya que hay talleres en uncode, ejercicios en moodle, el proyecto que se desarrolla durante todo el curso y un curso adicional del programa.",
          "periodo": "2021-10 (virtual)",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Kevin Julián Franco Cuervo",
        "slug": "kevin-julián-franco-cuervo",
        "resenas": 12,
        "calidad": "buena",
        "calificacion": 4.85,
        "notaPromedio": 4.18,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Es un muy buen profesor uno aprende bastante con el y hace que los temas sean comprendidos muy fácilmente además que las practicas que usa para calificar ayudan a sentirse más confiado en los parciales prácticos",
          "pros": null,
          "contras": null,
          "periodo": "2021-10 (virtual)",
          "calificacion": 5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Jhonatan Sneider Rico Pinto",
        "slug": "jhonatan-sneider-rico-pinto",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 4.81,
        "notaPromedio": 4.73,
        "resenasOcultas": 6,
        "resena": {
          "texto": "El mejor profesor que eh tenido en mi vidaaaa, buenisimo conocedor, aprendes si o si y es una lastima que no dicte mas materias para pregrado.",
          "pros": "Buenisimos talleres y explicaciones",
          "contras": "ninguna",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Daniel Alejandro Escobar Prieto",
        "slug": "daniel-alejandro-escobar-prieto",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.78,
        "notaPromedio": 4.73,
        "resenasOcultas": 9,
        "resena": null
      },
      {
        "nombre": "Fabiel Natán Espinoza Castañeda",
        "slug": "fabiel-natan-espinoza-castaneda",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.75,
        "notaPromedio": 5,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Es buen profesor, da las clases un poco rápido entonces a veces uno queda con vacíos, sin embargo, hace varios ejemplos en clase, es muy justo con las notas, los parciales son realizable y deja un proyecto final que es de grupos, pero es sencillo con el, no pide nada que no haya explicado ya. Bastante suave a la hora de calificar, se deja hablar para notas, y deja un curso de coursera opcional que da un 0.5 en la definitiva, entonces es fácil dejarla alta",
          "pros": "Dicta bien Suave para calificar Muy flexible Parciales faciles",
          "contras": "Dicta rápido Deja talleres largos",
          "periodo": "2026-1",
          "calificacion": 4.5,
          "dificultad": 3.6
        }
      },
      {
        "nombre": "Andrés Ricardo Arévalo Murillo",
        "slug": "andrés-ricardo-arévalo-murillo",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 4.68,
        "notaPromedio": 4.9,
        "resenasOcultas": 4,
        "resena": {
          "texto": "De los mejores profesores que he tenido en la carrera, sabe muchísimo y motiva a aprender bastante acerca de videojuegos y computación gráfica. Además, es súper ordenado y maneja una metodología bastante cómoda, una serie de talleres, una Expo y un proyecto final aplicando alguno de los conceptos vistos durante el semestre (todo en grupo) Super recomendado el profesor Andrés, profes como él son los que motivan a meterle la ficha a cualquier asignatura.",
          "pros": "- Todo",
          "contras": null,
          "periodo": "2023-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Fabio Augusto Gonzalez Osorio",
        "slug": "fabio-augusto-gonzalez-osorio",
        "resenas": 20,
        "calidad": "buena",
        "calificacion": 4.53,
        "notaPromedio": 4.33,
        "resenasOcultas": 19,
        "resena": {
          "texto": "El profesor Fabio es amable y se nota su interés por enseñar. Solamente hay clase una vez por semana y estas son dinámicas porque utiliza la metodología de aula invertida: los estudiantes explican los temas y el profesor hace preguntas para evaluar lo aprendido. El material del curso está disponible desde el primer día en una página web, que incluye videos grabados por el mismo profesor, prácticas no evaluables para resolver antes de las sesiones y más material de apoyo. Durante todo el semestre se realiza un curso adicional en línea sobre Machine Learning con Python; los ejercicios no son…",
          "pros": "Organizado con las notas y las fechas",
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Alexei Gabriel Ochoa Duarte",
        "slug": "alexei-gabriel-ochoa-duarte",
        "resenas": 48,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.79,
        "resenasOcultas": 47,
        "resena": {
          "texto": "Super amable nada de que quejarse es super paciente tiempos flexibles y tareas muy sencillas",
          "pros": "Facil",
          "contras": "La actitud del profe hace que no se quiera trabajar es demasiado parchado, puede pasarle como a mi que deje todo a chatgpt, o puede usar ese tiempo de clase para aprender mucho por SU CUENTA",
          "periodo": "2026-2",
          "calificacion": 4.4,
          "dificultad": 1.6
        }
      },
      {
        "nombre": "Stephanie Torres Jimenez",
        "slug": "stephanie-torres-jimenez",
        "resenas": 22,
        "calidad": "buena",
        "calificacion": 4.5,
        "notaPromedio": 4.36,
        "resenasOcultas": 21,
        "resena": {
          "texto": "Es muy buena profesora, explica todo muy bien y con clama, si uno no entiende vuelve y explica, sus clases son dinámicas y es muy amable, ella hace quiz por tema y los parciales (son un poco difíciles pero consisten en saber leer y haber practicado), también tiene una nota de participación que sube bastante. En el proyecto final es exigente y pide entregas a lo largo del semestre, da igual es super comprensiva con los tiempos y si necesitas ayuda ella cuadra tutorías para tu grupo. PD. CUIDADO CON LA COPIA",
          "pros": "-Amable -Clase dinámica y explica muy bien -Uno en serio siente que aprende -es una buena introducción a los que es programación -Puntual -Entrega notas rápido y da tiempo de reclamos -Da puntos y eso ayuda a subir la…",
          "contras": "-Es exigente sobre todo con el proyecto final (pero completamente entendible)",
          "periodo": "2020-10 (virtual)",
          "calificacion": 4.5,
          "dificultad": 3.5
        }
      },
      {
        "nombre": "Henry Zarate Ceballos",
        "slug": "henry-zarate-ceballos",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.31,
        "notaPromedio": 4.43,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Es un muy buen profe, sabe muchisimo de lo que sea asi que aproveche y aprenda todo lo que pueda de él, hasta consejos para la vida da. Las clases son magistrales y ya que la materia es tan conceptualmente pesada puede ser algo aburrido y difícil llevarle el hilo siempre. Deja talleres para hacer en grupos y hace sustentaciones, escoge a uno del grupo al azar para que lo haga, así que si puede consiga buen grupo. Su enfoque es ciberseguridad asi que personalmente disfruté mucho las clases. No dañen al profe, respondanle sus preguntas y pasen a sustentar y exponer voluntariamente.",
          "pros": "Da bonos por llegar temprano y hacer un par de cursos en HTB, al final del semestre yo ya tenia mas de 1.0 en bono para la definitiva. Responde cualquier pregunta Da más plazo para las entregas",
          "contras": "Llama a lista siempre A veces es monotono. Califica muy suave (hubo exposiciones re pichas y aun asi les puso 4, tampoco es bueno alimentar la mediocridad de los estudiantes)",
          "periodo": "2026-2",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Fernando Ospina Marin",
        "slug": "fernando-ospina-marin",
        "resenas": 20,
        "calidad": "buena",
        "calificacion": 4.29,
        "notaPromedio": 4.36,
        "resenasOcultas": 19,
        "resena": {
          "texto": "ay Dios que decir de este profe se la pasa las dos horas de clase hablando autentica basura y echando facha de si mismo, en los temas explica por ahi diez minutos nada mas, muestra vainas que no explica bien y las quita rapido, esas vainas que muestra son las que despues pide asi que ojo a eso. si usted es una persona seria y le gustan las cosas claras no meta con este profe y aprenda a programar mejor con un curso de coursera no es claro con las notas ni con el metodo de calificacion, hace dos proyectos que ni se sabe cuanto vale cada uno, los proyectos son en grupos que el arma como se le…",
          "pros": "se aprende cositas",
          "contras": "sales de clase sintiendo que has perdido dos horas de tu vida escuchando historias de un señor x",
          "periodo": "2024-2",
          "calificacion": 2,
          "dificultad": 3
        }
      },
      {
        "nombre": "Oscar Agudelo Rojas",
        "slug": "oscar-agudelo-rojas",
        "resenas": 38,
        "calidad": "buena",
        "calificacion": 4.28,
        "notaPromedio": 4.7,
        "resenasOcultas": 37,
        "resena": {
          "texto": "realmente para perder con este profesor hay que ser demasiado vago, la verdad explica bien pero las clases no son muy entretenidas, pero si uno más o menos para bolas la verdad que pasar es demasiado fácil, lo único es que toma en cuenta la asistencia y si falla a más de cierta cantidad de clases lo pone a hacer un trabajo extra que realmente no es muy complicado, y a veces llega tarde",
          "pros": "muy relajado muy fácil pasar con mas de 4.5",
          "contras": "a veces llega tarde pura presentación muy poco trabajo práctico (en clase)",
          "periodo": "2025-2",
          "calificacion": 4,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Joseph Alejandro Gallego Mejia",
        "slug": "joseph-alejandro-gallego-mejia",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 4.25,
        "notaPromedio": 4.45,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Esta materia es muy buena en temas de material y pedagogía del profesor. Es alguien que se nota la pasión que tiene por la programación y por las nuevas forma de aprendizaje. Muchas veces suelta datos que no tienen nada que ver con la clase pero que no dejan de ser interesantes. Las clases son virtuales y por lo mismo pueden llegar un punto en que se vuelvan aburridas o cansonas. Pero se puede pasar alta y fácil.",
          "pros": null,
          "contras": null,
          "periodo": "2023-1",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Restrepo Calle Felipe",
        "slug": "restrepo-calle-felipe",
        "resenas": 12,
        "calidad": "buena",
        "calificacion": 4.17,
        "notaPromedio": 4.42,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Sin duda alguna ha sido el profesor que más he respetado y admirado de la carrera, no solamente es un buen educador sino también una excelente persona. Siempre fue respestuoso y demostró su amor por enseñar, incluso cuando algunos de sus estudiantes no actuaban de la mejor manera, y dedicaba suficiente tiempo al curso para ofrecer una experiencia muy agradable para quienes desean aprender. El curso de por sí puede llegar a ser complejo, pero con la paciencia y el conocimiento de Felipe (y dedicación personal por supuesto) se puede llegar a entender a profundidad las temáticas de la…",
          "pros": "Muy organizado Empático y respetuoso Flexible con entregas",
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 4.5
        }
      },
      {
        "nombre": "Victor Collazos",
        "slug": "victor-collazos",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.17,
        "notaPromedio": 4.05,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Es un buen docente, sabe mucho de los temas del curso y ejemplifica muy bien todos los temas",
          "pros": "Amable Explica muy bien",
          "contras": null,
          "periodo": "2021-10 (virtual)",
          "calificacion": 3,
          "dificultad": 3
        }
      },
      {
        "nombre": "Andrés René Gutiérrez Tiuso",
        "slug": "andres-rene-gutierrez-tiuso",
        "resenas": 26,
        "calidad": "buena",
        "calificacion": 4.16,
        "notaPromedio": 4.05,
        "resenasOcultas": 25,
        "resena": {
          "texto": "Es un profesor que le gusta hablar bien de el mismo como si fuera el mejor profesor de la materia vista, en lugar de dar puntos por participar amenaza al grupo con quitar nota en los parciales si nadie participa. El curso lo da en Java, tienes que hacer un curso de java en Hacker Rank muy bueno pero no esperes pedagogía por parte del profesor ya que solo te lee presentaciones que proyecta en los televisores. El mayor obstáculo pienso que es realizar los parciales(en clase), ya que pone condiciones c*las como tener que hacer el primer punto para que te valga el segundo y así sabiendo que no…",
          "pros": "Es muy bueno programando y te da tips para programar mejor y mas rápido.",
          "contras": "Solo te da tus notas al final del curso. La forma de hacer sus parciales, no los puntos en sí. Da sueño el 70% del tiempo. Pareciera que quiere que pierdan la materia.",
          "periodo": "2023-2",
          "calificacion": 1.6,
          "dificultad": 4
        }
      },
      {
        "nombre": "GUSTAVO ADOLFO MOJICA PERDIGON",
        "slug": "gustavo-adolfo-mojica-perdigon",
        "resenas": 16,
        "calidad": "buena",
        "calificacion": 4.03,
        "notaPromedio": 4.29,
        "resenasOcultas": 15,
        "resena": {
          "texto": "El profesor es muy amable y sabe bastante, pero la organización del curso no fue la mejor. Al principio avanzaba muy lento y luego nos tocó correr con todo porque cambió varias fechas de entrega del proyecto y parciales, además de cancelar varias clases casi sobre el tiempo. Aunque pone límites de hora para los trabajos, igual los recibe después, lo que genera confusión. Para rematar, al final cambió los porcentajes de las notas como quiso y en el proyecto final, exigió cosas que nunca enseñó en el curso, y si no lo tenías, bajaba bastante la nota. En general, el curso fue más estresante de…",
          "pros": "Saca varias notas que permiten subir la final. Resuelve cualquier duda y es atento.",
          "contras": "Quizzes todas las semanas aunque fáciles. Talleres con grupos aleatorios que no responden.",
          "periodo": "2024-2",
          "calificacion": 2.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Felipe Gonzales Roldán",
        "slug": "felipe-gonzales-roldan",
        "resenas": 14,
        "calidad": "buena",
        "calificacion": 4.01,
        "notaPromedio": 3.86,
        "resenasOcultas": 13,
        "resena": {
          "texto": "Tratare de ser objetivo, por mi parte es buen profesor pero hay cosas por mejorar, Esto son mis opiniones: - Entrega todo el programa desde el principio de manera organizada en un repositorio de Git Hub (temas que veremos, fechas de los parciales, que notas sacará, su correo, programas que usaremos, etc). - Es exigente, pero valora y reconoce el esfuerzo del estudiante (lo ve en el perfil de GitHub, en las colaboraciones de contribuidor que hace, en los aportes de los dos proyectos, etc). - El hace chistes, pero no es para tratar de ofender a la persona, por eso es mejor estar tranquilo y…",
          "pros": "- Da ayudas para mejorar las notas desde el principio, si quiere uno ser PM (organizador del proyecto Pokerepo), o ser el Admin de slack (aplicación que se usa para enviar información, los retos que deja el profesor,…",
          "contras": "- Llega muy tarde (aprox: 35 a 45 min), por el otro trabajo que tiene. - Los parciales son un poco duros, asi que hay que practicar bastante y estar con un buen equipo, ya que tambien depende de eso.",
          "periodo": "2026-2",
          "calificacion": 4,
          "dificultad": 4.1
        }
      },
      {
        "nombre": "Elizabeth Leon Guzman",
        "slug": "elizabeth-leon-guzman",
        "resenas": 23,
        "calidad": "buena",
        "calificacion": 4,
        "notaPromedio": 4.41,
        "resenasOcultas": 22,
        "resena": {
          "texto": "Es una profesora que tiene un conocimiento amplio de la asignatura pero no sabe enseñar muy bien. Es demasiado desorganizada, sus apuntes de semestres pasadas tienen errores que la profesora se dedica a arreglar en clase. Califica por talleres largos y tediosos en grupo, con plazos de entrega cortos. Durante el semestre hay un proyecto que es importante para la calificación final, y una semana antes de terminar pidió programar una interfaz para la base de datos.",
          "pros": "Calificaciones suaves No hay parciales",
          "contras": "Llega tarde Plazos de entrega cortos Desorganizada",
          "periodo": "2024-2",
          "calificacion": 2.5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Alfredo Jose Bayuelo Sierra",
        "slug": "alfredo-jose-bayuelo-sierra",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4,
        "notaPromedio": 4,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Creo que ya no da clases. Buen profesor, parciales interesantes por lo temas que trataba. Un proyecto final orientado a la carrera de cada estudiante. A veces era hasta chistoso",
          "pros": null,
          "contras": null,
          "periodo": "2016-2",
          "calificacion": 4,
          "dificultad": 3
        }
      },
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
        "nombre": "Juan Diego Escobar Mejía",
        "slug": "juan-diego-escobar-mejía",
        "resenas": 5,
        "calidad": "mala",
        "calificacion": 3.94,
        "notaPromedio": 4.34,
        "resenasOcultas": 4,
        "resena": null
      },
      {
        "nombre": "Santiago Toledo Cortes",
        "slug": "santiago-toledo-cortes",
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 3.88,
        "notaPromedio": 4.67,
        "resenasOcultas": 7,
        "resena": {
          "texto": "Tal vez porque el grupo era bastante grande (150) se noto como que el profesor no estubo tan presente en el curso por lo que lo que aprenda de programación depende de que tanta dedicación le tuvo a la materia, si se hacen los talleres a conciencia y el curso de Ticademia queda uno con buenas bases de programación. Por el formato de ese grupo que fue virtual el estudio autonomo es todo, eso puede ser algo positivo o negativo segun la persona.",
          "pros": "100% Estudio autónomo",
          "contras": "100% Estudio autónomo",
          "periodo": "2021-10 (virtual)",
          "calificacion": 3,
          "dificultad": 3.8
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
        "nombre": "Sandra Liliana Rojas Martinez",
        "slug": "sandra-liliana-rojas-martinez",
        "resenas": 42,
        "calidad": "regular",
        "calificacion": 3.66,
        "notaPromedio": 4.7,
        "resenasOcultas": 41,
        "resena": {
          "texto": "Las clases con Sandra son algo monótonas, las diapositivas y lecturas eternas que envía dudo sean leídas por la mayoría, tanto los parciales como las actividades que asigna son basicamente comprensión de lectura, muy inferibles, lo único distinto es el proyecto que tampoco tiene mucha ciencia. No la cinqueé por algún trabajo que pendejamente no entregué :v de igual forma IISYC tampoco es una materia que pueda tener mucho más misterio.",
          "pros": "- No es muy exigente",
          "contras": "- Clases bastante olvidables, recuerdo más bien poco de lo visto",
          "periodo": "2024-1",
          "calificacion": 3.5,
          "dificultad": 1.5
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
        "nombre": "Edwin Andres Niño Velasquez",
        "slug": "edwin-andres-niño-velasquez",
        "resenas": 37,
        "calidad": "regular",
        "calificacion": 3.59,
        "notaPromedio": 3.81,
        "resenasOcultas": 36,
        "resena": {
          "texto": "Es genial Te motiva a la programación competitiva, es agradable, aunque en mi caso no pude ponerle mucho cuidado por ese horario de 2 a 4",
          "pros": "Comandante Edwin de la legión del reconocimiento.",
          "contras": "Se fueee y tal vez no vuelva.",
          "periodo": "2024-2",
          "calificacion": 5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Tito Florez Calderon",
        "slug": "tito-florez-calderon",
        "resenas": 44,
        "calidad": "regular",
        "calificacion": 3.32,
        "notaPromedio": 4.36,
        "resenasOcultas": 43,
        "resena": {
          "texto": "Tito GOD, este profesor es buenísimo, usted aprende y se ríe mucho, anécdotas, historias, actividades que hacen que la clase sea de lo mas bonita",
          "pros": "El man sabe mucho Se le puede negociar la nota algunas veces Explica bien Hace que usted se interese por su clase y le interesa que aprenda",
          "contras": "Pone 0 o 5, pero literalmente es solos ser disciplinado con hacer las cosas Algunas tareas son una mamera de hacer por que toca pelar muchooooo cable Se va bastante plata",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Oscar Leonardo Garcia Navarrete",
        "slug": "oscar-leonardo-garcia-navarrete",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 3.3,
        "notaPromedio": 3.7,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Es muy paciente, tiene un gran conocimiento, a pesar de la virtualidad es muy abierto con sus estudiantes, y trata de ser lo más dinámico posible, siempre responde a toda las preguntas y se preocupa porque sus estudiantes aprendan.",
          "pros": "Es muy buena gente, tiene gran conocimiento en el área, y siempre pregunta si alguien tiene dudas.",
          "contras": null,
          "periodo": "2020-20 (virtual)",
          "calificacion": 4.3,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jhon Alexander López Fajardo",
        "slug": "jhon-alexander-lópez-fajardo",
        "resenas": 49,
        "calidad": "regular",
        "calificacion": 3.21,
        "notaPromedio": 4.73,
        "resenasOcultas": 48,
        "resena": {
          "texto": "Este profesor es demasiado parchado para su bien, la mayoría de clases se habla de temas que nada que ver con la clase, pero cuando da clase se le entiende, y los trabajos que pone ayudan a complementar y entender los temas de los que habla en la clase, dejando un par de trabajos que parecen imposibles la mayoría son simples ejercicios de lógica hechos para entender como programar",
          "pros": "Con nomas haga los trabajos y preste atención y va a pasar Cuando se comunica da información importante",
          "contras": "A veces no da el tema completo por andar parchando No suele comunicarse por fuera de la clase Llega tarde a clase",
          "periodo": "2026-1",
          "calificacion": 4.6,
          "dificultad": 3
        }
      },
      {
        "nombre": "Diego Alejandro Orjuela Hurtado",
        "slug": "diego-alejandro-orjuela-hurtado",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 3,
        "notaPromedio": 4.6,
        "resenasOcultas": 0,
        "resena": {
          "texto": "El profesor es buena persona, y sabe del tema, pero a veces no va a clases, acaba las clases media hora antes y las clases solo se basan en explicar cuadernos de Colab que él ya tenía previamente hechos.",
          "pros": "Es fácil dejar la nota alta si entrega todos los trabajos",
          "contras": "El profesor no es muy responsable con las clases, y no es claro con las notas de los talleres y parciales que él deja.",
          "periodo": "2025-1",
          "calificacion": 3,
          "dificultad": 2
        }
      },
      {
        "nombre": "Hernando Rodríguez González",
        "slug": "hernando-rodriguez-gonzalez",
        "resenas": 35,
        "calidad": "regular",
        "calificacion": 2.84,
        "notaPromedio": 3.75,
        "resenasOcultas": 34,
        "resena": {
          "texto": "Horrible, no aprendí ni mierda aparte de scrum",
          "pros": "A veces es chévere mamar gallo",
          "contras": "Es super pedante A veces saca notas que nada que ver con la clase Scrum le va a saber a mierda después de esto",
          "periodo": "2025-1",
          "calificacion": 1.5,
          "dificultad": 4
        }
      },
      {
        "nombre": "Fernando Salazar Delgado",
        "slug": "fernando-salazar-delgado",
        "resenas": 27,
        "calidad": "mala",
        "calificacion": 2.78,
        "notaPromedio": 3.77,
        "resenasOcultas": 26,
        "resena": {
          "texto": "a ver si no sabe nada de programcion no la meta con el , porque no va a ver nada de progrmacion basica , va a empezar de una vez con crear programaas , y va a empezar su royecto final , eso si aprende muuucho , no solo programando si no tambien en matematica ,, la clase es chevere , es si toca muuuuuuuucho trabajo autonomo",
          "pros": "- va a aprender mucho - la clase es amena -es muy facil sacar 5 se los juro",
          "contras": "- es dificil muchoooo trabajo autonomo -si no sabe de programacion no la meta con el -cada vez las entregas son mas complicadas y largas",
          "periodo": "2024-2",
          "calificacion": 3.9,
          "dificultad": 4.4
        }
      },
      {
        "nombre": "Oswaldo Rojas Camacho",
        "slug": "oswaldo-rojas-camacho",
        "resenas": 42,
        "calidad": "mala",
        "calificacion": 2.73,
        "notaPromedio": 4.2,
        "resenasOcultas": 41,
        "resena": {
          "texto": "No es tan bueno pero tampoco tan malo. Al parecer este semestre cambió su metodología y si calificaba más cosas, pero es verdad que hasta al final se sabia la nota.",
          "pros": null,
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 3.8,
          "dificultad": 4
        }
      },
      {
        "nombre": "Gabriel Jose Mañana Guichon",
        "slug": "gabriel-jose-mañana-guichon",
        "resenas": 29,
        "calidad": "mala",
        "calificacion": 2,
        "notaPromedio": 2.52,
        "resenasOcultas": 28,
        "resena": {
          "texto": "Pésimo, terrible, horrible, MUY PERO MUY MALO, de los peores profesores si no el peor con los que se puede encontrar. Si tiene la oportunidad no inscriba con él. Es muy mala persona, es grosero y humillante, asume que todo el mundo ya sabe programar por lo que no explica nada y se enoja porque no le responden. No se aprende absolutamente nada, empiezan con scratch y terminan viendo programación orientada a objetos, sin tener claros si quiera los conceptos básicos. Todas las clases repite lo mismo y por más cuidado que se le ponga no se le entiende. Ni califica los parciales y al final la nota…",
          "pros": "- NADA, no tiene nada bueno ese señor. Sabe mucho pero es terrible persona y docente.",
          "contras": "- Irrespetuoso. - No explica absolutamente nada. -Humillante. - Se inventa las notas. - A veces ni llega a clase o la acaba temprano porque se harta de sus estudiantes. -Todas las clases dice lo mismo. - Todo lo malo…",
          "periodo": "2021-10 (virtual)",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "William Daniel Cristancho Ballesteros",
        "slug": "william-daniel-cristancho-ballesteros",
        "resenas": 25,
        "calidad": "mala",
        "calificacion": 1.85,
        "notaPromedio": 3.54,
        "resenasOcultas": 24,
        "resena": {
          "texto": "No metan con ese man.",
          "pros": "Da apreciativa. Maneja el material de trabajo que da.",
          "contras": "Puede llegar tarde (o no llega). Solo pasa diapositivas. No responde dudas de estudiantes.",
          "periodo": "2025-1",
          "calificacion": 2.9,
          "dificultad": 3.9
        }
      },
      {
        "nombre": "Diego A Vega Vega",
        "slug": "diego-a-vega-vega",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Muy buen profesor, muy amable, está pendiente de que todos entiendan y vuelve a explicar si es necesario. Deja bastante tiempo para hacer los talleres y siempre responde dudas. Los parciales no son muy complicados. El trabajo final requiere trabajo pero él siempre estará pendiente si hay problemas o consultas.",
          "pros": "Amable Respetuoso Justo con las notas Se aprende bastante",
          "contras": null,
          "periodo": "2020-20 (virtual)",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Santiago Carvajal",
        "slug": "santiago-carvajal",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Es una chimba de profe uwu, a veces (muy rara vez tho) se impacienta pero en general es chimbita",
          "pros": null,
          "contras": null,
          "periodo": "2019-20",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jeisson Andrés Prieto Velandia",
        "slug": "jeisson-andrés-prieto-velandia",
        "resenas": 4,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 3,
        "resena": {
          "texto": "Muy buen profesor, siempre esta atento de sus estudiantes. Los temas se pasan volando entonces es importante estar atento, tiene muy buen material de apoyo. Les recomiendo que hagan los talleres por que les ayuda a entender mejor el tema. Al final pide un proyecto de programación que puede ser de cualquier tema y el incluso si conoce del tema los ayuda. Muy recomendado",
          "pros": "Explica bien Esta pendiente de sus estudiantes Fácil de pasar si se estudia",
          "contras": "Los temas pasan muy rápido",
          "periodo": "2018-20",
          "calificacion": 4.8,
          "dificultad": 1.7
        }
      },
      {
        "nombre": "Daniel Felipe Mejia Lozano",
        "slug": "daniel-felipe-mejia-lozano",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Es un buen profesor, se esfuerza para que se logre un buen aprendizaje, es justo pero flexible para la calificación, es exigente respecto a la asistencia. Son tres parciales virtuales (mucha lectura y teoría) y un proyecto final.",
          "pros": null,
          "contras": null,
          "periodo": "2017-10",
          "calificacion": 4.5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Andrea Marcela Cruz Moreno",
        "slug": "andrea-marcela-cruz-moreno",
        "resenas": 2,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Pésima docente, como es recién graduada de maestría se cree lo ultimo y no domina los contenidos, se enreda bastante, ella cree que es exigente y rigurosa pero no lo es, pasar con ella es fácil, pero no van a aprender mucho, si ud le cae bien desde el principio ya tiene la materia asegurada de lo contrario va sufrir",
          "pros": "no tiene ningún pro",
          "contras": "la descripción en si describe todos los contra",
          "periodo": "2015-10",
          "calificacion": 1,
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
        "nombre": "David Orlando Rodriguez Duarte",
        "slug": "david-orlando-rodriguez-duarte",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Excelente profesor.",
          "pros": "Explica Se entiende fácilmente",
          "contras": null,
          "periodo": "2017-10",
          "calificacion": 5,
          "dificultad": 5
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
        "nombre": "John Jairo Chavez",
        "slug": "john-jairo-chavez-chavez",
        "resenas": 1,
        "calidad": "mala",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
      },
      {
        "nombre": "Luis Alejandro Cañon Tafur",
        "slug": "luis-alejandro-cañon-tafur",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es un poco estricto, su método de enseñanza no es ni bueno ni malo, se preocupa por el aprendizaje de sus estudiantes y es muy amable",
          "pros": null,
          "contras": null,
          "periodo": "2017-20",
          "calificacion": 3.8,
          "dificultad": 4
        }
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
        "nombre": "Mayra Alejandra Macias Cano",
        "slug": "mayra-alejandra-macias-cano",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": {
          "texto": "La profesora es buena, explica bien aunque a veces no iba a clases porque se sentía indispuesta, es generosa calificando, las últimas notas no se conocen pero se dejan altas",
          "pros": null,
          "contras": null,
          "periodo": "2015-10",
          "calificacion": 4.5,
          "dificultad": 1.4
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
        "nombre": "Johan David Rodríguez Portela",
        "slug": "johan-david-rodríguez-portela",
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
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.69,
        "notaPromedio": 4.33,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Un profesor estupendo y carismático. Para su clase de estructura de la sociedad moderna suele dejar una o dos lecturas para luego hablar/debatir sobre estas en clase. Además se debe realizar una reseña no muy larga de las lecturas hechas.",
          "pros": null,
          "contras": null,
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 2
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
        "nombre": "Jhon Alexis Parra Abril",
        "slug": "jhon-alexis-parra-abril",
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.88,
        "notaPromedio": 4.6,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Yo ame a este profe super amable, explica bien, le apasiona el tema, prepara las clases, atento a dudas",
          "pros": "amable puntual",
          "contras": "nada",
          "periodo": "2020-20 (virtual)",
          "calificacion": 5,
          "dificultad": 3
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
        "nombre": "Camilo Andres Arias Campos",
        "slug": "camilo-andres-arias-campos",
        "resenas": 12,
        "calidad": "buena",
        "calificacion": 4.54,
        "notaPromedio": 4.68,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Camilo es excelente profesor, cuanta con diversas actividades de donde saca las notas, además hay muchos bonos en todo el semestre por lo cual se puede dejar alta la materia, por otro lado, es una materia en extremo dinámica, en donde el profe hace todo lo posible para que los estudiantes aprendan, el profe es comprensivo y muy buena persona y le brinda a los estudiantes un espacio muy bueno para hacer preguntas e integrarse entre ellos.",
          "pros": "Es un gusto entrar a clase Se aprende demasiado Conoces a las personas con las que estudias Hay muchos Bonos Los parciales son de acuerdo a lo visto en clase",
          "contras": "La clase se puede volver aburrida por tantas exposiciones de grupos",
          "periodo": "2021-10 (virtual)",
          "calificacion": 4.6,
          "dificultad": 3.5
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
        "nombre": "Claudia Alexandra Garzon Santos",
        "slug": "claudia-alexandra-garzon-santos",
        "resenas": 30,
        "calidad": "buena",
        "calificacion": 4.11,
        "notaPromedio": 4.59,
        "resenasOcultas": 29,
        "resena": {
          "texto": "Claudia es demasiado buena, domina el tema con una naturalidad impresionante, no tengo mucho por decir, ponga de su parte y pasará con una nota excelente, la nota no es una preocupación en esta materia, así que dedíquese a aprender y a disfrutarla",
          "pros": "todo",
          "contras": "nada",
          "periodo": "2023-2",
          "calificacion": 4.9,
          "dificultad": 3
        }
      },
      {
        "nombre": "Edison Jair Duque Oliva",
        "slug": "edison-jair-duque-oliva",
        "resenas": 12,
        "calidad": "buena",
        "calificacion": 4.08,
        "notaPromedio": 4.17,
        "resenasOcultas": 11,
        "resena": {
          "texto": "Decir que este profesor es paupérrimo, terrible y una tortura... seria poco, es el peor profesor que he tenido en la universidad Resumen: Ese profesor no hace absolutamente nada",
          "pros": "Tiene demasiados conocimientos, sabe bastante de la materia y lo demuestra en las pocas clases que hace, en las cuales se aprende",
          "contras": "Si hizo 3 clases en todo el semestre fueron demasiadas, nunca hace clase, ni hace absolutamente nada!! Toda su materia es leer del libro guía, ya que las clases de un día eran hacer un taller basado en el libro, y la…",
          "periodo": "2021-10 (virtual)",
          "calificacion": 1.8,
          "dificultad": 3.7
        }
      },
      {
        "nombre": "Martin Eduardo Espitia Nery",
        "slug": "martin-eduardo-espitia-nery",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 4,
        "notaPromedio": 4.5,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Es un profesor muy agradable, que se interesa por enseñar, pero es algo desordenado, intenta experimentar con la clase y su metodología con pocas notas, sin parciales y dónde los estudiantes dan las clases puede causar que se aprenda poco de Fundamentos de Administración como tal.",
          "pros": "Amable y agradable Se puede dejar alta",
          "contras": "Pocas notas y algo abstractas",
          "periodo": "2021-2",
          "calificacion": 4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Brabham Emmanuel Cruz Rincón",
        "slug": "brabham-emmanuel-cruz-rincon",
        "resenas": 6,
        "calidad": "regular",
        "calificacion": 3.6,
        "notaPromedio": 4.65,
        "resenasOcultas": 5,
        "resena": {
          "texto": "El profesor en terminos generales es bueno, si quieres expandir nuevos pensamientos y aprender de nuevos temas el es muy buena opción, mas si eres alguien más rigido y que le gusta llevar una linea clara de trabajo, este no es tu profesor, los temas que en todos cursos de Fundamentos de administracion se ven, aqui pasan a segundo plano, pero si se ven incluso deja videos con la tematica completa.",
          "pros": "Muy buen profesor para expandir horizontes",
          "contras": "Como persona fuera del cargo puede ser un asco",
          "periodo": "2022-1",
          "calificacion": 4.6,
          "dificultad": 3
        }
      },
      {
        "nombre": "Nicolas Smith Sarmiento Caro",
        "slug": "nicolas-smith-sarmiento-caro",
        "resenas": 1,
        "calidad": "buena",
        "calificacion": 3.6,
        "notaPromedio": 3.7,
        "resenasOcultas": 0,
        "resena": {
          "texto": "Aunque en el SIA, la materia sale a nombre de Liliana Chicaiza, ella lo deja encargado en su mayoría a el. Profesor riguroso que se puede tomar como fastidioso en caso de que no participe la clase o haya mucho ruido, materia que exige pero no es imposible, parciales fáciles y lógicos pero es fundamental llevar las lecturas al dia para no sufrir ya que chagtp no ayuda en los talleres de el.",
          "pros": "Puntualidad Conocmiento de los temas exigencia y rigurosidad. 10% de regalo por un curso virtual",
          "contras": "asistencia y quices exposiciones Metodologia Calificaciones",
          "periodo": "2025-2",
          "calificacion": 3.6,
          "dificultad": 3.4
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
        "nombre": "Luis Alberto Cabuya Montaño",
        "slug": "luis-alberto-cabuya-montaño",
        "resenas": 9,
        "calidad": "mala",
        "calificacion": 2.34,
        "notaPromedio": 3.46,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Enseña a las patadas, con él no se puede utilizar dispositivos, amante de humillar a sus estudiantes y reírsele en la cara. Poco dinámico y prepotente, SIEMPRE tiene la razón. Pésimo profesor...",
          "pros": "Nada",
          "contras": "Todo",
          "periodo": "2025-2",
          "calificacion": 2,
          "dificultad": 5
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
        "nombre": "Yuly Marcela Suarez Rico",
        "slug": "yuly-marcela-suarez-rico",
        "resenas": 5,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.48,
        "resenasOcultas": 4,
        "resena": {
          "texto": "Una de las mejores docentes que me he topado en toda la carrera, mas allá de lo académico es un amor de persona, incentiva a que seamos criticos e integros en nuestra profesion, lo cual valoro demasiado, el semestre se baso en lo siguiente, 2 parciales de 20% cada uno, controles de lectura y talleres 30% (haganse un favor y consigan un buen grupo de trabajo(por favor)) y un examen final que vale el 30%, para mi es uno de esos docentes que son obligatorios si quiere disfrutar la carrera y aprender en la misma proporcion.",
          "pros": "Deja MUCHOS BONOS (aprovechen) Excelente persona Incentiva la lectura Clases Dinamicas",
          "contras": "Un pequeño detalle es que los controles de lectura los hace en los primeros 15 minutos de la clase, si no llega a tiempo la nota le queda en 0 (esto me bajo bastante el promedio) Quede entusado",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 4
        }
      },
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
        "nombre": "Isabel Cristina Moncayo Vega",
        "slug": "isabel-cristina-moncayo-vega",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 5,
        "notaPromedio": 4.5,
        "resenasOcultas": 1,
        "resena": {
          "texto": "Excelente profesora, al principio la materia puede ser un poco aburridora por lo técnica que es, pero después del primer parcial es muy entretenida la materia y la manera en la que la profesora explica y el dinamismo que tiene, como actividades de debate que hace, exposiciones o de participación para ganar bonos. Hay un gran porcentaje en la calificación de trabajos que son en grupo, es esencial tener un buen grupo y hacerlos para aprender, ya que los parciales son muy sencillos si se hacen estos talleres.",
          "pros": "Excelentes explicaciones. Califica proceso y trata de ayudar mucho al estudiante Siempre está dispuesta a explicar.",
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 2
        }
      },
      {
        "nombre": "Camilo Andrés Orjuela Segura",
        "slug": "camilo-andrés-orjuela-segura",
        "resenas": 20,
        "calidad": "buena",
        "calificacion": 4.95,
        "notaPromedio": 4.57,
        "resenasOcultas": 19,
        "resena": {
          "texto": "El mejor profesor de todos los tiempos. Si fuera menos cascarero le pondría el 5.",
          "pros": "Muy bueno enseñando Le gusta mucho lo que hace Clases dinámicas",
          "contras": "Cascarero Muchos talleres Llega tarde",
          "periodo": "2022-1",
          "calificacion": 4.9,
          "dificultad": 4
        }
      },
      {
        "nombre": "Mauricio Gomez Villegas",
        "slug": "mauricio-gomez-villegas",
        "resenas": 16,
        "calidad": "buena",
        "calificacion": 4.88,
        "notaPromedio": 4.01,
        "resenasOcultas": 15,
        "resena": {
          "texto": "Es simplemente la cabra, si no es el mejor profe de la carrera pega en el palo, quiero resaltar lo excelente persona que es, es de esos profesores que intentan formar personas integras y no simplemente maquinas de registrar, el semestre se baso en la siguiente metodología, 2 parciales, cada uno vale un 20% (son bastantes memoristicos) 25% corresponde a talleres y reseñas sobre las lecturas (todos los martes hay que entregar una reseña y todos los jueves un taller) 25% un ensayo sobre alguna de las problematicas del curso y 10% de participacion, por otro lado, es la mejor catedra que he tenido…",
          "pros": "Incentiva la lectura Enfoque critico Clases entretenidas Mauricio es mi pastor y nada me faltara",
          "contras": "Bastante trabajo Es muy critico con los malos profesionales, por lo tanto se molesta cuando nota que tenemos alguna laguna en nuestro aprendizaje Solo hay un mauricio en el planeta tierra",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 4.5
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
        "nombre": "Wendy Alejandra Trilleras Yara",
        "slug": "wendy-alejandra-trilleras-yara",
        "resenas": 9,
        "calidad": "buena",
        "calificacion": 4.73,
        "notaPromedio": 4.43,
        "resenasOcultas": 8,
        "resena": {
          "texto": "Es jóven, buena gente y sabe de lo que habla. Buena metodologia no es para nada dificil de pasar, pero es super delicada con lo que uno le dice, en virtual le dije como 2 bromas y hp casi me saca, también regaña mucho de que toca estar participando y duró como 5 clases hablando de etica en vez de enseñar como hacer asientos contables. Muchos trabajos grupales y \"creativos\" (mapas mentales, exposiciones de un periodico que ud haga, cosas así).",
          "pros": "No es dificil de pasar. Saca varias notas.",
          "contras": "Delicada, regaña muchisimo. Cansona con temas de participación. Muuy lenta con temas de la clase",
          "periodo": "2021-1",
          "calificacion": 3.5,
          "dificultad": 2.5
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
        "nombre": "Zuray Andrea Melgarejo Molina",
        "slug": "zuray-andrea-melgarejo-molina",
        "resenas": 29,
        "calidad": "buena",
        "calificacion": 4.49,
        "notaPromedio": 4.15,
        "resenasOcultas": 28,
        "resena": {
          "texto": "muy buena profesora, de pronto uno se aburre porque la clase va muy pausada y lenta, pero alguien que tenga buena calidad de atencion la pasa facil, es atenta con los estudiantes, abierta a las dudas, responde los correos y un extra es que los monitores que me tocaron fueron muy bueno (ian y christian)",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
          "calificacion": 5,
          "dificultad": 3
        }
      },
      {
        "nombre": "Jonatan Fernando Neiva Ardila",
        "slug": "jonatan-fernando-neiva-ardila",
        "resenas": 7,
        "calidad": "buena",
        "calificacion": 4.47,
        "notaPromedio": 4.33,
        "resenasOcultas": 6,
        "resena": {
          "texto": "Se nota que le gusta enseñar y explica muy bien, también motiva la participación de los estudiantes y siempre está dispuesto a responder preguntas. Es chistoso y es muy amigable con los estudiantes. La materia es pesada, cada semana había que entregar un resumen de la norma que sobre la que se fuera a trabajar y el dejaba un taller de la misma norma, el taller es práctico. Hay 2 parciales, el primero es un análisis de caso, el segundo es un parcial de memoria, da 10 minutos para que escribas todo lo que recuerdas de una norma al azar. Hay que trabajar bastante, pero se puede dejar alta.",
          "pros": "Todo:)",
          "contras": "El primer parcial me humillo.",
          "periodo": "2025-1",
          "calificacion": 4.7,
          "dificultad": 3.6
        }
      },
      {
        "nombre": "Monica Eunice Sarmiento Reyes",
        "slug": "monica-eunice-sarmiento-reyes",
        "resenas": 3,
        "calidad": "buena",
        "calificacion": 4.33,
        "notaPromedio": 3.9,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Una profesora que tiene mucho conocimiento, realmente ella da muchas ayudas y si tienen la oportunidad de inscribir con ella no la desaprovechen.",
          "pros": "Deja tener ayudas en el parcial, se devuelve al inicio del tema si es necesario, le interesa que todos participen",
          "contras": "No tengo cons",
          "periodo": "2024-1",
          "calificacion": 4,
          "dificultad": 3.9
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
        "nombre": "Luis Antonio Gonzalez Santos",
        "slug": "luis-antonio-gonzalez-santos",
        "resenas": 42,
        "calidad": "regular",
        "calificacion": 4.16,
        "notaPromedio": 4.2,
        "resenasOcultas": 41,
        "resena": {
          "texto": "Este curso es probablemente el mayor relleno y la más grande vendida de humo en la facultad. La primera teoría contable abre algunos debates interesantes, pero en esta materia, sobre todo con el profesor Luis Antonio, se diluye todo ese conocimiento y se abre el paso a la mediocridad. Para resumirlo en pocas palabras, no se hace NADA en este curso. Realice todos los entregables con IA, incluso su exposición, y aprobará sin ninguna dificultad la materia.",
          "pros": "Puede aprovechar el espacio de la clase para descansar o adelantar otros trabajos El profesor es amable a fin de cuentas",
          "contras": "El profesor hace todo con IA, así que no espere retroalimentación ni nada por el estilo. Incluso las calificaciones se las pide a Gemini, por lo que pueden ser totalmente arbitrarias No se aprende absolutamente nada. Es…",
          "periodo": "2026-1",
          "calificacion": 3,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Diego Alexander Quintanilla Ortiz",
        "slug": "diego-alexander-quintanilla-ortiz",
        "resenas": 16,
        "calidad": "regular",
        "calificacion": 3.95,
        "notaPromedio": 3.79,
        "resenasOcultas": 15,
        "resena": {
          "texto": "El profesor es una persona empática. El está dispuesto a escuchar y a resolver dudas, manteniendo una actitud respetuosa y abierta durante las clases. Pero realmente es exigente con la materia, explicando los temas con un gran grado de profundidad, aunque no es problema de el, los temas de la materia exige un estudio autónomo muy alto. Para poder pasar la materia con el se debe estudiar bastante y llegar preparados con las lecturas para entender mejor los temas, para el desarrollo de sus parciales el profesor exige que se sepa interpretar muy bien los temas. Su primer parcial fue en parejas,…",
          "pros": "Dispuesto a la escucha Dedicación como profesor Explica de manera muy buena La Monitoria ayuda a subir la nota",
          "contras": "Califica duro los parciales Parciales un poco tediosos Exigencia y toma de asistencia",
          "periodo": "2026-2",
          "calificacion": 4.5,
          "dificultad": 4.6
        }
      },
      {
        "nombre": "Luz Mary Bastidas Castro",
        "slug": "luz-mary-bastidas-castro",
        "resenas": 3,
        "calidad": "regular",
        "calificacion": 3.93,
        "notaPromedio": 4.57,
        "resenasOcultas": 2,
        "resena": {
          "texto": "La profe luz intenta dar lo mejor, sin embargo, no es muy buena explicando los temas, la clase se tiende aburrida y se aprende mas de las lecturas de Mendoza que de la misma clase (Que es la repetición textual de las lecturas) la mayoría de actividades son en grupo y en general se puede dejar la nota alta pero creo que si el estudiante es de contaduría debería buscar otro profe. El monitor para este semestre tenia mucha energía e intento darla toda pero también era muy inexperto.",
          "pros": "La profe es en extremo comprensiva Se puede dejar alta Las actividades son en grupo",
          "contras": "Clases aburridas",
          "periodo": "2021-10 (virtual)",
          "calificacion": 4,
          "dificultad": 3
        }
      },
      {
        "nombre": "Yesica Alejandra Daza Tacha",
        "slug": "yesica-alejandra-daza-tacha",
        "resenas": 3,
        "calidad": "regular",
        "calificacion": 3.5,
        "notaPromedio": 3.27,
        "resenasOcultas": 2,
        "resena": {
          "texto": "Es muy buena profesora, se interesa mucho por que los estudiantes aprendan. En lo personal no me interesa mucho la contabilidad, pero la profesora me hizo generar cierto interes, ya que se esforzaba porque los estudiantes aprendieran y mostraba cosas muy interesantes, lo parciales son acordes a lo visto en clase. La materia no es dificil, en algun momento puede parecer un poco tediosa.",
          "pros": "Buena profesora Se puede dejar alta Buena persona Se preocupa porque aprendan los estudiantes Actividades dinamicas en clase",
          "contras": "Nada, excelente profesora.",
          "periodo": "2022-2",
          "calificacion": 4.5,
          "dificultad": 2.4
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
        "nombre": "Flor Esther Salazar Guatibonza",
        "slug": "flor-esther-salazar-guatibonza",
        "resenas": 6,
        "calidad": "mala",
        "calificacion": 1.65,
        "notaPromedio": 3.47,
        "resenasOcultas": 5,
        "resena": {
          "texto": "esta profe fue lo peor que me pudo haber pasado... llevo 5 semestres y realmente hizo que me atrasara un poco por el miedo a que no pudiera entender lo que me estaba explicando, cuando mis talleres estaban mal y no me daban lo que ella decia que deberian dar me llegue a sentir mal, corrobore la info y otros compañeros opinan lo mismo, en mi curso, la profe se desaparecio y llego un profe excelente, nos dio 4 clases muy pero muy buenas y al final volvio flor esther... ese curso puso salvarse con ese profe... que hubiera sido de todos mis compañeros si no hubieramos tenido una profe tan mala",
          "pros": null,
          "contras": null,
          "periodo": "2024-2",
          "calificacion": 1.5,
          "dificultad": 3.8
        }
      },
      {
        "nombre": "Luis Carlos Mingan",
        "slug": "luis-carlos-mingan",
        "resenas": 6,
        "calidad": "regular",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 5,
        "resena": null
      },
      {
        "nombre": "Mateo Bedoya García",
        "slug": "mateo-bedoya-garcía",
        "resenas": 2,
        "calidad": "buena",
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 1,
        "resena": {
          "texto": "es un buen profe, tiene un trato cercano con sus estudiantes, sin embargo es el tipo de profe de colegio y deja algunos vacíos importantes para las siguientes materias de contaduría.",
          "pros": "trato cercano, buena resolucion de dudas",
          "contras": "vacios en las bases para las siguientes materias",
          "periodo": "2018-10",
          "calificacion": 3.5,
          "dificultad": 2.7
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
      },
      {
        "nombre": "Jenniffer Navas Muñoz",
        "slug": "jenniffer-navas-muñoz",
        "resenas": 0,
        "calidad": null,
        "calificacion": 0,
        "notaPromedio": 0,
        "resenasOcultas": 0,
        "resena": null
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
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.11,
        "notaPromedio": 3.75,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Es uno de los mejores profes que he tenido en la carrera. Sabe mucho y esta dispuesto a explicar un tema 10 veces con tal de que los estudiantes entiendan. Aunque no tome asistencia las clases son muy equilibridas; el profesor cuenta anecdotas divertidas y lleva de forma completa las explicaciones de temas, que a pesar de ser abstractos, se pueden entender prestando atención, preguntando o viendo la guia y presentaciones del curso. Los parciales no son tan dificiles (4, cada uno vale 20% y el otro 20% es de quices de classroom) y más allá de si la respuesta esta bien o no, se califica que…",
          "pros": "Profesor que sabe mucho, hace la clase amena y en los parciales se evalua lo necesario (Daza es idolo).",
          "contras": "A veces se equivoca en algunos despejes y operaciones que son tediosas, hay que estar atento y preguntar cuando son clases con estos procedimientos, igual ni se evaluan (la clase donde se ven las transformaciones de…",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 4
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
        "nombre": "Hernan Garzon Gutierrez",
        "slug": "hernan-garzon-gutierrez",
        "resenas": 53,
        "calidad": "buena",
        "calificacion": 4.37,
        "notaPromedio": 4.32,
        "resenasOcultas": 52,
        "resena": {
          "texto": "Tratare de ser objetivo, por mi parte es buen profesor, y estos son mis argumentos que son los siguientes: - Entrega todo el programa desde el principio de manera organizada (temas que veremos, fechas de los parciales, que notas sacará, la duración de cada tema aproximadamente, su correo, etc). - Deja tareas para estudiar por nuestra cuenta (que sirve bastante) - Deja talleres, aunque no los califica, sirven mucho para los parciales (hay veces que los ejercicios de los talleres están en los parciales) - Los parciales los califica la siguiente clase (nos dice cuales son las respuestas…",
          "pros": "- Califica el procedimiento y si argumentas de buena manera, te puede subir la nota (si ve el profe que si las cosas están bien hechas, sino, no intentes explicar de más) - A ratos hace chistes para entretener la clase…",
          "contras": "- Llega tarde (aprox: 15 min). - La mayoría de las veces sus notas solo son 3 parciales que valen lo mismo, asi que no hay que confiarse demasiado.",
          "periodo": "2026-1",
          "calificacion": 4.4,
          "dificultad": 3.6
        }
      },
      {
        "nombre": "Sergio Alejandro Carrillo Torres",
        "slug": "sergio-alejandro-carrillo-torres",
        "resenas": 20,
        "calidad": "buena",
        "calificacion": 4.12,
        "notaPromedio": 3.68,
        "resenasOcultas": 19,
        "resena": {
          "texto": "No sé ni cómo lo recomiendan. Es un pasivo-agresivo que volvió un infierno mi semestre. Imposible pasarle por más que le estudie.",
          "pros": "Ninguna",
          "contras": "No explica bien clases tan avanzadas. Asume excelentes bases. Va rápido. Parciales difíciles. Hace todo lo posible para hacerlo perder. El peor profesor que he tenido en toda mi carrera.",
          "periodo": "2026-1",
          "calificacion": 1.6,
          "dificultad": 5
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
        "nombre": "Juan Carlos Hernandez Rincon",
        "slug": "juan-carlos-hernandez-rincon",
        "resenas": 15,
        "calidad": "regular",
        "calificacion": 3.93,
        "notaPromedio": 3.65,
        "resenasOcultas": 14,
        "resena": {
          "texto": "Quien escribe esto ya conocía al profesor Juan Carlos. No de vista, sino de haber sufrido en carne propia la decepción académica más grande de mi carrera. El semestre pasado cursé Cálculo Integral con él, y aunque su calidad como docente era innegable, el comportamiento deplorable de mis compañeros logró lo que parecía imposible: que un curso de alto nivel se convirtiera en una farsa. La presión, las súplicas y el berrinche colectivo de una mayoría que no estaba preparada llevaron a que el profesor cediera y \"regalara\" la asignatura. Aquello me afectó tan profundamente que perdí todo el…",
          "pros": "Excelencia docente: Juan Carlos es, sin lugar a dudas, un profesor de primer nivel. Su conocimiento es profundo, su didáctica es clara y su compromiso con enseñar bien es genuino. Los contenidos fueron abordados con…",
          "contras": "Falta de preparación generalizada: Nuevamente, una gran porción del estudiantado demostró que no tenía el nivel mínimo para enfrentar Cálculo Vectorial. Y lo peor: no hicieron nada por subsanarlo. Cultura del facilismo:…",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 3.4
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
        "nombre": "Alexandre Sinitsyne",
        "slug": "alexandre-sinitsyne",
        "resenas": 71,
        "calidad": "regular",
        "calificacion": 3.63,
        "notaPromedio": 4.39,
        "resenasOcultas": 70,
        "resena": {
          "texto": "no se le entiende un culo, se le entiende más cuando habla en ingles, de las peores experiencias que he tenido la verdad",
          "pros": "lit no se le entiende",
          "contras": "se pasa autonomamente",
          "periodo": "2025-2",
          "calificacion": 1.5,
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
        "nombre": "Omar Duque Gomez",
        "slug": "omar-duque-gomez",
        "resenas": 44,
        "calidad": "regular",
        "calificacion": 3.24,
        "notaPromedio": 3.5,
        "resenasOcultas": 43,
        "resena": {
          "texto": "Es buena gente en parte, califica algo duro; se fija en detalles particulares para bajar nota, ayuda un poco en la nota de quices( que en realidad solo hizo uno pero medio la subió con un taller entregable que colocó).",
          "pros": "A veces tira buenos chistes. Explica bien Buena gente",
          "contras": "Algo impuntual No dejó ver bien la corrección de los parciales Los ejercicios recomendados eran muy diferentes al parcial",
          "periodo": "2024-2",
          "calificacion": 3.5,
          "dificultad": 3.5
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
        "nombre": "Edixon Manuel Rojas Santana",
        "slug": "edixon-manuel-rojas-santana",
        "resenas": 36,
        "calidad": "mala",
        "calificacion": 2.72,
        "notaPromedio": 2.97,
        "resenasOcultas": 35,
        "resena": {
          "texto": "edixon es un completo hp es una basura como persona y trata a todos como basura no es capaz de entender que un estudiante puede tener dudas o no comprender algo , tira durisimo en los parciales y es un lloron porque le quitaron su curso de cedo . Ademas es un veneco hp y habia un malparido de matematicas que tambien es veneco y se la pasaba chupandole la verga el hp ese y por eso pasaba la materia",
          "pros": "sabe los temas",
          "contras": "ser una basura de ser humano ser un hijueputa su favoritismo por ese matematico chupavergas veneco",
          "periodo": "2026-1",
          "calificacion": 1.5,
          "dificultad": 5
        }
      },
      {
        "nombre": "Mohammed El Aidi",
        "slug": "mohammed-el-aidi",
        "resenas": 46,
        "calidad": "mala",
        "calificacion": 2.59,
        "notaPromedio": 2.97,
        "resenasOcultas": 45,
        "resena": {
          "texto": "Sobrehateado, no sé como habrá sido en el pasado, pero por lo menos en los últimos dos semestres se nota que ha hecho cosas por mejorar la forma en la que da su clase, (él mismo dijo que tomaba los consejos que se ponian en la evaluacion docente). Ahora bien, el profesor Mohammed no es ni de lejos el mejor profesor con el que he tenido clase, pero igual de lejos está de ser el peor. La clase y la calificación es bastante simple, tres parciales y los quices que haga, tambien de vez en cuando un taller para reforzar temas de parcial. En cuanto a la dificultad, yo diría que el 90% de los puntos…",
          "pros": "-Da material de semestres pasados -Es amable si se la lleva bien con el -Soluciona cualquier duda, sabe mucho de la materia y de matematicas en general. - Le ayuda si ve que usted se esta esforzando aunque le haya ido…",
          "contras": "-Se enoja bastante si sacan celulares en clase - No tolera que alguien llegue despues de la llamada a lista (20 o 30min despues de iniciada la clase) -No recomendado si no está acostumbrado a estudiar autonomamente,…",
          "periodo": "2026-1",
          "calificacion": 3.6,
          "dificultad": 3.4
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
      },
      {
        "nombre": "Mauricio Lopez Hernandez",
        "slug": "mauricio-lopez-hernandez",
        "resenas": 26,
        "calidad": "mala",
        "calificacion": 2.46,
        "notaPromedio": 3.5,
        "resenasOcultas": 25,
        "resena": {
          "texto": "el profesor es terrible, no tiene pedagogia, califica duro y es tosco al responder las dudas. Los parciales son virtuales pero duros, no se dejan muy altos ni siquiera con IA, el man no se deja hablar y la clase no es para nada agradable.",
          "pros": "parciales virtuales",
          "contras": "parciales virtuales pero jodidos JAJAJA califica duro no se deja tan alta",
          "periodo": "2026-1",
          "calificacion": 1.6,
          "dificultad": 4.7
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
        "resenas": 8,
        "calidad": "buena",
        "calificacion": 4.45,
        "notaPromedio": 4.06,
        "resenasOcultas": 7,
        "resena": {
          "texto": "El profesor es fácilmente el mejor profesor experimental que he tenido. Se nota su pasión por la materia, los temas y la física en general. A pesar de ser frio y serio al hablar, es muy amable y justo con sus comentarios. Es exigente pero deja que uno se equivoque en los primeros informes para que uno sepa bien que esta pidiendo, muy importante para el es todo lo referente a incertidumbre. Uno suele gastar arto tiempo en la materia pues los preinformes son fuera del horario de clase, sin embargo esto se compensa pues muchos experimentos duran menos de 2 horas por lo que uno sale antes.",
          "pros": "Tiene mucha pasión por los temas Amable y justo",
          "contras": "Se gasta arto tiempo por fuera de la clase Hay unas 3 o 4 clases teoricas, duran 4 horas y desgastan mucho",
          "periodo": "2026-1",
          "calificacion": 4.9,
          "dificultad": 3.6
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
        "resenas": 19,
        "calidad": "mala",
        "calificacion": 2.72,
        "notaPromedio": 3.78,
        "resenasOcultas": 18,
        "resena": {
          "texto": "clases teoricas bastante pesadas, se necesita mucho estudio autonomo, se esmera por dar las explicaciones a fondo y por esto mismo las clases son pesadas, no tomaria asignaturas mas avanzadas con ella pero siento que para fisica exptal no esta tan mal estudiando lo suficiente para os parciales es facil sacar buena nota",
          "pros": "buena persona se puede negociar",
          "contras": "si no se estudia autonomamente va a ser practicamennte imposible entender los textos guia no concuerdan con las explicaciones de clase, lo q es confuso laboratorios muy largos y clases con mas trabajo del q es posible…",
          "periodo": "2026-2",
          "calificacion": 3.6,
          "dificultad": 4
        }
      },
      {
        "nombre": "Fabio Enrique Fajardo Tolosa",
        "slug": "fabio-enrique-fajardo-tolosa",
        "resenas": 14,
        "calidad": "mala",
        "calificacion": 2.65,
        "notaPromedio": 4.04,
        "resenasOcultas": 13,
        "resena": {
          "texto": "Probablemente el peor profesor que tuve en toda la carrera. No sé si no sabe explicar porque nunca lo intentó. Una vez nos dijo: \"¿Qué quieren, que les enseñe? Busquen en Google\" y procedió a desperidicar 2 horas de clase destrozando el informe de un compañero, o \"compita\", como diría él. Dejaba talleres absurdamente largos (tomaban cerca de 20 horas cada semana) y calificaba injustamente. En cada taller dejaba una \"corrección\" diferente para tener una excusa para bajar la nota, en lugar de dar una retroalimentación completa. Sus \"correcciones\" incluían cosas como decir que las gráficas eran…",
          "pros": "Nada.",
          "contras": "Todo. Me dejó traumas. - Trabajos ridículamente largos. - Califica arbitraria e injustamente. - Es grosero. - Nunca explica. - Uso excesivo de la palabra \"compa\".",
          "periodo": "2020-20 (virtual)",
          "calificacion": 1.5,
          "dificultad": 5
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
        "resenas": 19,
        "calidad": "buena",
        "calificacion": 3.65,
        "notaPromedio": 4.27,
        "resenasOcultas": 18,
        "resena": {
          "texto": "Exelente persona es un profe muy amable y ayuda bastante a entender la materia y realizar los ejercicios y proyectos, fue muy flexible a la hora de realizar las entregas a pesar de todo, y la materia pues es pesada son proyectos cada semana pero muy amena y el profe califica muy suave entonces o la cinqauea o si no hace mucho le queda en 3 (ojo son 8 creditos importantes)",
          "pros": "-Facil dejarla alta si hace todo -Lo importante es que aprenda -si no sabe de estatica metala",
          "contras": "-Es mucho pero mucho trabajo",
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 1.5
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
        "resenas": 6,
        "calidad": "buena",
        "calificacion": 4.78,
        "notaPromedio": 4.23,
        "resenasOcultas": 5,
        "resena": {
          "texto": "Yo vi el laboratorio con ella y con la profe Ivonne, y la profesora carolina hace ese laboratorio muy llevadero, las explicaciones que da son las mejores, solo estudie y entienda lo que esta haciendo, si tiene dudas pregunte antes de que se equivoque, califica suave y no tira duro en las exposiciones, las unicas cosas malas que diria yo es que se ausento varias veces durante el semestre dejandonos solos con la profesora Ivonne, tambien este semestre empezaron una metodologia nueva y eso genero un desorden en las practicas y en la realizacion de pre-informes",
          "pros": "Todo",
          "contras": "La profesora Ivonne Da notas hasta el final de semestre",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 1.5
        }
      },
      {
        "nombre": "Ivonne Jeannette Nieto Ramirez",
        "slug": "ivonne-jeannette-nieto-ramirez",
        "resenas": 9,
        "calidad": "regular",
        "calificacion": 3.49,
        "notaPromedio": 4.03,
        "resenasOcultas": 8,
        "resena": {
          "texto": "A mi esta profesora no me parece amable, es bastante pasivo agresiva, en este semestre probaron con hacer exposiciones e informes dentro del laboratorio, le recomiendo lleve ya analizado todo para cuando le toque hacer los informes, para las exposiciones tiene que llevar cartelera (realizada a mano) y le van a hacer preguntas, se va a pegar de todo lo que usted diga, la recomendacion por mediocre que parezca es que no busque respuestas super elaboradas, diga solo lo necesario entienda bien la practica y las distintas caracteristicas de los compuestos de interes y reactivos que va a usar,…",
          "pros": "Cuaderno e informes no tira duro Es dificil que pierda (pero no imposible) Las practicas son cheveres Sabe un monto y a veces le da ideas de porque pasan ciertas reacciones y de porque obtiene ciertos resultados",
          "contras": "Es pasivo agresiva Usted puede estar haciendo su practica normal y lo empieza a afanar tambien le puede hacer preguntas y si se equivoca no lo va a tratar mal pero lo va a hacer sentir como un estupido Tiene algunas…",
          "periodo": "2026-1",
          "calificacion": 3.5,
          "dificultad": 1.5
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
        "resenas": 27,
        "calidad": "mala",
        "calificacion": 2.29,
        "notaPromedio": 3.27,
        "resenasOcultas": 26,
        "resena": {
          "texto": "Tarda demasiado en avanzar con los temas, las clases son monótonas y en ocasiones dicta el mismo tema con las mismas diapositivas más de una vez. Los parciales son o muy extensos o muy cortos, hay que estar atento a todo lo que menciona aunque no tenga que ver con el curso. Responde dudas y es amable; cuando vi la materia eran 3 parciales cada uno del mismo valor.",
          "pros": "Responde dudas. Si estudia lo que envía al correo, es posible dejarla alta.",
          "contras": "Parciales muy específicos. Clases monótonas. No sigue el temario del curso.",
          "periodo": "2026-1",
          "calificacion": 3.4,
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
        "resenas": 26,
        "calidad": "buena",
        "calificacion": 4.06,
        "notaPromedio": 4.13,
        "resenasOcultas": 25,
        "resena": {
          "texto": "Es una de las mejores opciones para fisicoquímica 1, aunque en el semestre en el que vi la materia no hubo notas que no fueran las de 4 parciales; estos no eran tan difíciles y varias preguntas dependían de leer bien o de ver pequeños matices. Es un profesor que explica bien y que está dispuesto a resolver preguntas. Sin embargo, hay que tener cuidado con la asistencia y la participación (más que todo en las sesiones de talleres), dado que en algunos casos al profe se le puede salir la rabia. En el laboratorio es relajado y ayuda si hay dudas de las prácticas; solo se calificaron 3 informes y…",
          "pros": "Se hace entender y de no ser así, repite las explicaciones y resueve preguntas, parciales relativamente sencillos",
          "contras": "Por el bien del grupo (no quieren llevarlo en la mala) ir a clase y participar de vez en cuando en los talleres.",
          "periodo": "2026-1",
          "calificacion": 4.8,
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
          "texto": "Es como tener una abuelita, aunq si ensena mal ya que solo muestra un monton de demostraciones y cosas de laboratorio, tambien es facil pasarla por sus porcentajes, pues no hay muchas opciones yo la verdad si la recomiendo, con estudio autonomo se logra, ademas si ves tambien el lab con ella te tiene en cuenta.",
          "pros": null,
          "contras": null,
          "periodo": "2025-1",
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
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.88,
        "notaPromedio": 4.23,
        "resenasOcultas": 9,
        "resena": {
          "texto": "La profesora Andrea sabe mucho y te va basicamente a llevar de la mano ensenando, verdaderamente tomar el laboratorio con ella es de lo mejor, es muy justa con las notas y nunca tira duro",
          "pros": "Todo",
          "contras": "Aveces tiene preferencia con algunos grupos",
          "periodo": "2026-1",
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
        "resenas": 40,
        "calidad": "buena",
        "calificacion": 4.54,
        "notaPromedio": 4.04,
        "resenasOcultas": 39,
        "resena": {
          "texto": "La verdad es un gran profe, esta abierto a resolver dudas incluso fuera de sus clases, no considero que los parciales fueran muy dificiles, da packs de estudio y donde conseguir ejercicios ademas de que lleva la clase con calma y se tira sus chistes",
          "pros": "es super bueno explicando y muy amable",
          "contras": "es medio fastidioso con el tema de tomar apuntes y el cel, ademas q es dificl estar despieto en su clase de 7 am",
          "periodo": "2026-1",
          "calificacion": 4.9,
          "dificultad": 3
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
        "nombre": "Edgar Eduardo Daza Caicedo",
        "slug": "edgar-eduardo-daza-caicedo",
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.11,
        "notaPromedio": 3.75,
        "resenasOcultas": 9,
        "resena": {
          "texto": "Es uno de los mejores profes que he tenido en la carrera. Sabe mucho y esta dispuesto a explicar un tema 10 veces con tal de que los estudiantes entiendan. Aunque no tome asistencia las clases son muy equilibridas; el profesor cuenta anecdotas divertidas y lleva de forma completa las explicaciones de temas, que a pesar de ser abstractos, se pueden entender prestando atención, preguntando o viendo la guia y presentaciones del curso. Los parciales no son tan dificiles (4, cada uno vale 20% y el otro 20% es de quices de classroom) y más allá de si la respuesta esta bien o no, se califica que…",
          "pros": "Profesor que sabe mucho, hace la clase amena y en los parciales se evalua lo necesario (Daza es idolo).",
          "contras": "A veces se equivoca en algunos despejes y operaciones que son tediosas, hay que estar atento y preguntar cuando son clases con estos procedimientos, igual ni se evaluan (la clase donde se ven las transformaciones de…",
          "periodo": "2026-1",
          "calificacion": 5,
          "dificultad": 4
        }
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
        "nombre": "Oscar Javier Patiño Ladino",
        "slug": "oscar-javier-patiño-ladino",
        "resenas": 30,
        "calidad": "regular",
        "calificacion": 3.55,
        "notaPromedio": 4.31,
        "resenasOcultas": 29,
        "resena": {
          "texto": "No hace casi que nada, apenas entrabamos ponia quiz, recogia a los 30 minutos y hacia la explicacion de lo que ibamos a hacer en mas o menos una hora, despues de eso solo se sentaba a ver facebook o hablar con sus colegas, el resto del trabajo lo hacía el auxiliar, Santiago se ponia la 10 y nos vigilaba, nos corregia, calificaba preinformes e informes parciales, hacia todo el trabajo de patiño, y en los parciales ayudaba. Son temáticas faciles y son acarreables, pero lo tedioso son los trabajos escritos, dediquele buen tiempo a los preinformes y los informes parciales, no lo deje a ultima…",
          "pros": "- las tematicas y los laboratorios son breves - usualmente sale temprano si hace todo bien - si hizo bien y a conciencia los preinformes, los quices son breves en su mayoria, solo repase lo que copio en los preinformes…",
          "contras": "- El parcial teorico es muy largo - trabajos absurdamente largos - hace mas trabajo el monitor que el profesor, y entre los dos a veces tienden a dar instrucciones diferentes, por lo que se puede llegar a perder",
          "periodo": "2025-2",
          "calificacion": 2,
          "dificultad": 3
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
      },
      {
        "nombre": "Leon Dario Perez",
        "slug": "leon-dario-perez-perez",
        "resenas": 35,
        "calidad": "mala",
        "calificacion": 3.07,
        "notaPromedio": 3.47,
        "resenasOcultas": 34,
        "resena": {
          "texto": "Excelente profesor, se preocupa porque los estudiantes tengan una buena preparación en los temas básicos.",
          "pros": "Buen dominio del tema y disponibilidad a explicar.",
          "contras": "Hace muchos quices y exámenes",
          "periodo": "2024-1",
          "calificacion": 5,
          "dificultad": 4
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
        "resenas": 9,
        "calidad": "regular",
        "calificacion": 3.64,
        "notaPromedio": 3.58,
        "resenasOcultas": 8,
        "resena": {
          "texto": "de las mejores profes que he tenido en la U, la verdad es una profe muy organizada, explica todo super claro, hace muchos ejercicios pero la verdad todos son muy utiles para reforzar los temas, su curso es muy completo, si tiene la opción de ver clase con ella APROVÉCHELA SIN DUDA",
          "pros": "carismática, chevere clases dinámicas comprensiva parciales justos",
          "contras": null,
          "periodo": "2025-2",
          "calificacion": 5,
          "dificultad": 3.8
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
        "resenas": 10,
        "calidad": "buena",
        "calificacion": 4.17,
        "notaPromedio": 3.96,
        "resenasOcultas": 9,
        "resena": {
          "texto": "De las mejores profesoras de la carrera, tiene una amor increíble por la cromatografía y lo demuestra en sus enseñanzas, califica siempre lo que envía en sus talleres, ademas como persona es un gran ser humano",
          "pros": "Si quieren aprender cromatografía como debe ser, inscriba con ella",
          "contras": "Tuvimos poco tiempo por los festivos y tuvo que correr con últimos temas :(",
          "periodo": "2026-1",
          "calificacion": 4.9,
          "dificultad": 2
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
        "resenas": 40,
        "calidad": "buena",
        "calificacion": 4.58,
        "notaPromedio": 3.96,
        "resenasOcultas": 39,
        "resena": {
          "texto": "Es un profesor muy dedicado a la profesion, entiende la dificultad de la materia y te brinda sin ningun problema todas las ayudas que necesites para sobrevivir a analisi quimico. Ademas que enseña lo complejo de la manera mas simple posible.",
          "pros": "Se puede pedir ayuda con temas o conceptos sin ningún problema. Muy buena gente Deja muchas actividades para complementar los temas ( no son hacen parte de la nota final)",
          "contras": "La materia que dicta es muy pesada La nota se basa en los parciales, y llegan a ser un poco complejos",
          "periodo": "2025-2",
          "calificacion": 4.8,
          "dificultad": 4.4
        }
      }
    ]
  }
};
