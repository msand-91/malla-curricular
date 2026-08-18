# Contexto — Medicina Veterinaria (plan 2555)

Creada el 2026-08-17. Fuente en `fuentes/malla_veterinaria.pdf` (malla de 12 semestres con
agrupaciones y créditos por componente); los prerrequisitos vinieron de capturas de las tablas del
acuerdo del plan (con las modificaciones de los Acuerdos CF 80/2018, 85, 96, 97 y 101/2020 y
3/2023) que pasó la persona usuaria.

**Estado: completa.** Códigos, créditos y nombres verificados contra el plan 2555 del SIA (69
asignaturas): cero discrepancias. Créditos por componente exactos: FO 35, FP 3, DO 110, DP 10,
TG 10, LE 41 = 209 (el acuerdo suma el trabajo de grado dentro de los 120 disciplinares; aquí va
aparte). Prerrequisitos y correquisitos completos, incluidos los correquisitos mutuos
(Anatomía↔Histología, Biología molecular avanzada↔Inmunología, Semiología↔Imagenología,
Cirugía I↔Patología clínica, Salud de hato↔Teriogenología I y la cadena de las cuatro Clínicas).

**Novedades que esta carrera trajo al motor** (genéricas, sirven para las demás):
- `preCreditos`: umbrales de crédito por componente o por agrupación —«8 créditos de Producción»
  (Salud de hato), «88 del disciplinar» (Trabajo de grado), «38 de fundamentación + 120 del
  disciplinar» (Práctica integrada). Acepta varias reglas y las evalúa todas.
- `preFund` ahora exige solo la fundamentación (FO+FP); el trabajo de grado sigue exigiendo además
  lo disciplinar obligatorio.
- El planificador da semestre propio a un bloque que por sí solo excede el tope de créditos (las
  32 de Clínicas encadenadas, la Práctica integrada de 20).

**Pendiente/ojo:** cuatro optativas de Producción del acuerdo no están hoy en el plan 2555 del SIA
(2017083, 2017082, 2025807, 2026248): van marcadas `fueraDelSia`. Las prácticas integradas tampoco
aparecen en la oferta del semestre (no son del componente 2CLE). Las líneas de profundización se
modelan como cupos de libre elección porque el programa no publica su lista.
