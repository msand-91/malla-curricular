const { JSDOM } = require('jsdom');
const fs = require('fs');
const dir = require('path').resolve(__dirname, '../../..');   // raíz del repositorio
const cdir = require('path').resolve(__dirname, '..');        // carreras/<slug>
const slug = require('path').basename(cdir);

const errores = [];
const dom = new JSDOM(fs.readFileSync(dir + '/' + slug + '/index.html', 'utf8'), {
  runScripts: 'outside-only', url: 'http://localhost/', pretendToBeVisual: true,
});
const w = dom.window;
w.HTMLDialogElement.prototype.showModal = function () { this.open = true; };
w.HTMLDialogElement.prototype.close = function () { this.open = false; };
w.onerror = (m) => errores.push('window.onerror: ' + m);

const src = fs.readFileSync(cdir + '/carrera.js', 'utf8') + '\n'
  + fs.readFileSync(cdir + '/losestudiantes.js', 'utf8') + '\n'
  + fs.readFileSync(cdir + '/sia.js', 'utf8') + '\n'
  + fs.readFileSync(cdir + '/electivas.js', 'utf8') + '\n'
  + fs.readFileSync(cdir + '/oferta.js', 'utf8') + '\n'
  + fs.readFileSync(cdir + '/datos.js', 'utf8') + '\n' + fs.readFileSync(dir + '/js/temas.js', 'utf8') + '\n' + fs.readFileSync(dir + '/js/app.js', 'utf8');
w.eval(src + '\n;window.__api = { get S(){return S}, get PLAN(){return PLAN},'
  + ' get PLAN_POR_ID(){return PLAN_POR_ID}, CATALOGO, guardar, refrescar, construirPlan,'
  + ' moverAsignatura, abrirEditor, GRUPOS_CATALOGO, GRUPOS_DISCIPLINARES, metricas, OFERTA_MAP };');
w.document.dispatchEvent(new w.Event('DOMContentLoaded'));

const $ = s => w.document.querySelector(s);
const $$ = s => [...w.document.querySelectorAll(s)];

const chk = (cond, msg) => { console.log((cond ? '  OK   ' : '  FALLA') + '  ' + msg); if (!cond) errores.push(msg); };

const N = w.__api.PLAN.length;   // 63 casillas en la malla de Veterinaria
const LS = 'mallaVeterinariaUNAL.v1';
const QB = '1000041', BQ = '1000042', INTRO = '2017066', ANAT = '2017046', HIST = '2017063', FISIO = '2017061';
const ING1 = '1000044', ING2 = '1000045', ING4 = '1000047', TG = '2017249';
const HACT = () => w.__api.S.horario.escenarios[w.__api.S.horario.activo];

console.log('\n[A] Render inicial');
chk($$('#malla .card').length === N && N === 63, `63 tarjetas en la malla (hay ${$$('#malla .card').length})`);
chk($$('#malla .col-sem').length === 12, '12 columnas de semestre');
chk($('h1').textContent.includes('Medicina Veterinaria'), 'el título es el de Medicina Veterinaria');
chk($('.logo svg') !== null, 'el logo es el icono SVG de la carrera');
chk(w.document.documentElement.style.getPropertyValue('--acento') !== '', 'el color de acento de la carrera está aplicado');
chk($$('#notasCont details').length > 0, `${$$('#notasCont details').length} notas sobre los datos`);
chk(!$('#btnNivelacion').hidden, 'la carrera tiene nivelación y se ofrece el atajo');

console.log('\n[B] Estado inicial de disponibilidad');
const disp = $$('#malla .card.disponible').length, bloq = $$('#malla .card.bloqueada').length;
chk(disp > 0 && disp + bloq === N, 'toda tarjeta es disponible o bloqueada al inicio');
chk([...$$('#malla .card')].find(c => c.dataset.id === QB).classList.contains('disponible'), 'Química básica está disponible desde el inicio');
chk([...$$('#malla .card')].find(c => c.dataset.id === BQ).classList.contains('bloqueada'), 'Bioquímica básica está bloqueada (exige Química básica)');
chk([...$$('#malla .card')].find(c => c.dataset.id === TG).classList.contains('bloqueada'), 'Trabajo de grado está bloqueado al inicio');

console.log('\n[C] Marcar una asignatura como aprobada');
[...$$('#malla .card')].find(c => c.dataset.id === QB).dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#detalle').open === true, 'se abre el diálogo de detalle');
chk($('#detalle').textContent.includes('Química básica'), 'el diálogo muestra la asignatura correcta');
[...$$('#segEstado button')].find(b => b.dataset.v === 'aprobada').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
$('#detalle').close();
chk([...$$('#malla .card')].find(c => c.dataset.id === BQ).classList.contains('disponible'), 'Bioquímica básica se desbloquea');
chk($('#progGlobal').style.width !== '0%', 'la barra global avanza');
chk(JSON.parse(w.localStorage.getItem(LS)).estado[QB] === 'aprobada', 'se persiste con la clave de Veterinaria');

console.log('\n[D] Pestañas');
for (const b of $$('nav.tabs button')) {
  b.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
  const v = $('#' + b.dataset.vista);
  chk(!v.hidden && v.textContent.trim().length > 20, `pestaña ${b.dataset.vista} se muestra con contenido`);
}

console.log('\n[E] Plan sugerido');
$('[data-vista="vPlan"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($$('#planCont .plan-sem').length > 0, `${$$('#planCont .plan-sem').length} semestres proyectados`);
chk(!$('#planCont').textContent.includes('Sin ruta viable'), 'ninguna asignatura sin ruta viable');

console.log('\n[F] Catálogo de asignaturas opcionales');
$('[data-vista="vCatalogo"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($$('#catCont .cat-item').length === w.__api.CATALOGO.length, `catálogo completo (${$$('#catCont .cat-item').length} opciones)`);
$('#selGrupo').value = 'biologia_opt'; $('#selGrupo').dispatchEvent(new w.Event('change', { bubbles: true }));
chk($$('#catCont .cat-item').length === 3, 'el filtro por grupo funciona (las 3 biologías)');
$('#selGrupo').value = 'practicas'; $('#selGrupo').dispatchEvent(new w.Event('change', { bubbles: true }));
chk($$('#catCont .cat-item').length === 14, 'y las 14 prácticas integradas');
$('#selGrupo').value = ''; $('#selGrupo').dispatchEvent(new w.Event('change', { bubbles: true }));

console.log('\n[G] Cupos y herencia de requisitos');
$('[data-vista="vMalla"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
[...$$('#malla .card')].find(c => c.dataset.id === 'BIO_OPT').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const sel = $('#selRanura');
chk(!!sel && sel.options.length === 4, `el cupo de biología ofrece las 3 opciones (hay ${sel ? sel.options.length - 1 : 0})`);
sel.value = '1000009|Biología general'; sel.dispatchEvent(new w.Event('change', { bubbles: true }));
$('#detalle').close();
chk([...$$('#malla .card')].find(c => c.dataset.id === 'BIO_OPT').textContent.includes('Biología general'), 'la tarjeta del cupo muestra la elegida');
// el cupo de producción hereda los prerrequisitos de la optativa asignada
w.__api.S.ranuras['PROD_2'] = { cod: '2017089', nombre: 'Sistemas de producción I', cr: 2 };
w.__api.guardar(); w.__api.refrescar();
chk(w.__api.PLAN_POR_ID['PROD_2'].pre.includes('2017076') && w.__api.PLAN_POR_ID['PROD_2'].pre.includes('2017062'),
    'un cupo de producción con Sistemas de producción I hereda Nutrición y Genética');
w.__api.S.ranuras = {}; w.__api.guardar(); w.__api.refrescar();

console.log('\n[H] Correquisitos de esta malla');
w.__api.S.estado = {}; w.__api.guardar(); w.__api.refrescar();
chk(w.__api.PLAN_POR_ID[ANAT].co.includes(HIST) && w.__api.PLAN_POR_ID[HIST].co.includes(ANAT),
    'Anatomía comparada e Histología y embriología son correquisitos mutuos');
const clin = ['2017054', '2017056', '2017055', '2017086'];
chk(clin.every(id => (w.__api.PLAN_POR_ID[id].co || []).length === 1), 'las cuatro Clínicas encadenan correquisitos');
chk(w.__api.PLAN_POR_ID[FISIO].pre.length === 4, 'Fisiología exige cuatro asignaturas (Anatomía, Histología, Bioquímica y Biofísica)');

console.log('\n[I] Requisitos por créditos');
$('[data-vista="vMalla"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
[...$$('#malla .card')].find(c => c.dataset.id === '2017068').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#detalle').textContent.includes('8 créditos de la agrupación de Producción'), 'la ficha de Salud de hato explica el umbral de créditos');
$('#detalle').close();
[...$$('#malla .card')].find(c => c.dataset.id === TG).dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#detalle').textContent.includes('88 créditos'), 'la de Trabajo de grado, los 88 créditos disciplinares');
$('#detalle').close();

console.log('\n[J] Graduación completa');
w.__api.PLAN.forEach(a => { w.__api.S.estado[a.id] = 'aprobada'; });
w.__api.guardar(); w.__api.refrescar();
chk($('#progGlobal').style.width === '100%', 'barra global al 100% con todo aprobado');
w.__api.S.estado = {}; w.__api.guardar(); w.__api.refrescar();

console.log('\n[U] Coherencia de la malla de Veterinaria');
let adelantadas = 0;
for (const a of w.__api.PLAN) {
  for (const pr of a.pre || []) if (w.__api.PLAN_POR_ID[pr] && w.__api.PLAN_POR_ID[pr].sem >= a.sem) adelantadas++;
  for (const co of a.co || []) if (w.__api.PLAN_POR_ID[co] && w.__api.PLAN_POR_ID[co].sem > a.sem) adelantadas++;
}
chk(adelantadas === 0, 'ninguna asignatura va por delante de sus requisitos');
const porSem = {};
for (const a of w.__api.PLAN.filter(a => a.comp !== 'NV')) porSem[a.sem] = (porSem[a.sem] || 0) + a.cr;
chk(porSem[1] === 14 && porSem[10] === 32 && porSem[11] === 20 && porSem[12] === 10,
    `los créditos por semestre cuadran con la malla (${Object.values(porSem).join('/')})`);
const m = w.__api.metricas();
chk(m.total.meta === 209 && m.comp.FO.plan === 35 && m.comp.FP.plan === 3 && m.comp.DO.plan === 110 && m.comp.DP.plan === 10 && m.comp.TG.plan === 10 && m.comp.LE.plan === 41,
    'los componentes cuadran (35/3/110/10/10/41 = 209)');
$('[data-vista="vNotas"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#notasCont').textContent.includes('del acuerdo del plan'), 'las notas explican de dónde salen los prerrequisitos');

console.log('\n[V] Horario con la oferta del SIA');
w.__api.S.estado = {}; w.__api.S.horario = { extras: [], grupos: {} }; w.__api.guardar(); w.__api.refrescar();
$('[data-vista="vHorario"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(!$('#vHorario').hidden, 'la pestaña Horario se abre');
chk($('#horCont').textContent.includes('Cursando'), 'sin nada marcado, pide marcar asignaturas como cursando');
// una asignatura del plan con varios grupos en la oferta
const conGrupos = w.__api.PLAN.filter(a => a.cod && w.__api.OFERTA_MAP[a.cod] && w.__api.OFERTA_MAP[a.cod].actividades.some(x => x.grupos.length >= 2))[0];
chk(!!conGrupos, `hay asignaturas del plan con varios grupos en la oferta (${conGrupos && conGrupos.nombre})`);
w.__api.S.estado[conGrupos.id] = 'cursando'; w.__api.guardar(); w.__api.refrescar();
chk($$('#horCont .hor-item').length === 1, `una asignatura en el horario (hay ${$$('#horCont .hor-item').length})`);
const selHor = $('#horCont select[data-grupo]');
chk(!!selHor && selHor.options.length >= 2, `ofrece los grupos de ${conGrupos.nombre}`);
if (selHor) {
  selHor.value = selHor.options[1].value;
  selHor.dispatchEvent(new w.Event('change', { bubbles: true }));
  chk($$('#horCont .hor-bloque').length >= 1, `al elegir grupo se pintan bloques en la semana (${$$('#horCont .hor-bloque').length})`);
  chk(Object.values(HACT().grupos)[0] === selHor.value, 'el grupo elegido se guarda');
}
$('#buscaHor').value = 'anatomía';
$('#buscaHor').dispatchEvent(new w.Event('input', { bubbles: true }));
const sug = $('#horSugerencias button[data-anadir-hor]');
chk(!!sug, 'el buscador sugiere asignaturas de la oferta');
if (sug) {
  sug.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
  chk($$('#horCont .hor-item').length === 2, 'la asignatura añadida aparece en el horario');
  chk(HACT().extras.length === 1, 'y queda guardada como extra');
  $('#horCont [data-quitar-hor]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
  chk($$('#horCont .hor-item').length === 1, 'se puede quitar');
}
$('[data-vista="vMalla"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
[...$$('#malla .card')].find(c => c.dataset.id === conGrupos.id).dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#detalle').textContent.includes('Oferta') && $('#detalle').textContent.includes('Grupo'), 'la ficha muestra los grupos del SIA');
$('#detalle').close();
w.__api.S.estado = {}; w.__api.S.horario = { extras: [], grupos: {} }; w.__api.guardar(); w.__api.refrescar();

console.log('\n[W] ¿Qué cabe en mis huecos?');
w.__api.S.estado = {}; w.__api.S.ranuras = {}; w.__api.S.horario = { extras: [], grupos: {} }; w.__api.guardar(); w.__api.refrescar();
$('[data-vista="vHorario"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(!!$('#horCont .hor-huecos'), 'el panel de huecos aparece aunque el horario esté vacío');
const nVacio = $$('#horCont .hueco-item').length;
chk(nVacio > 0, `con el horario vacío ofrece ${nVacio} opciones (limitadas a 30 por página)`);
chk($('#horCont .hor-huecos').textContent.includes('Obligatorias del plan') && $('#horCont .hor-huecos').textContent.includes('Libre elección'), 'los filtros distinguen obligatorias, optativas y libre elección');
// la primera opción es una obligatoria del plan disponible (van primero)
const primera = $('#horCont .hueco-item');
chk(primera && /sem [IVX]+ · disponible/.test(primera.textContent), `la primera opción es una obligatoria disponible del plan (${primera && primera.querySelector('b').textContent})`);
// añadirla al horario con el grupo que cabe
const btnH = primera.querySelector('[data-hueco]');
const codH = btnH.dataset.hueco.split('|')[0];
btnH.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($$('#horCont .hor-item').length === 1 && HACT().extras.includes(codH), 'al añadirla entra en el horario');
chk(Object.keys(HACT().grupos).some(k => k.startsWith(codH + '|')), 'con el grupo elegido');
chk($$('#horCont .hor-bloque').length > 0, 'y se pinta en la semana');
// lo que se ofrece ahora no se cruza con lo que hay
const sesAhora = [...$$('#horCont .hor-bloque')].length;
const cand2 = $$('#horCont .hueco-item');
chk(cand2.length > 0 && !cand2.some(c => c.textContent.includes(codH)), 'las opciones nuevas no incluyen la ya añadida');
chk($('#horCont .hueco-libres').textContent.includes('–'), 'muestra los huecos libres por día');
// filtro por tipo: libre elección
const selTipo = $('#horCont [data-hueco-f="tipo"]'); selTipo.value = 'libre'; selTipo.dispatchEvent(new w.Event('change', { bubbles: true }));
const soloLibre = $$('#horCont .hueco-item');
chk(soloLibre.length > 0 && soloLibre.every(c => c.textContent.includes('Libre elección')), `el filtro «Libre elección» deja solo electivas (${soloLibre.length})`);
// filtro de créditos
const inCr = $('#horCont [data-hueco-f="maxCr"]'); inCr.value = '2'; inCr.dispatchEvent(new w.Event('change', { bubbles: true }));
chk($$('#horCont .hueco-item').every(c => /· [12] cr/.test(c.textContent)), 'el tope de créditos se respeta');
// mostrar más
const selTipo2 = $('#horCont [data-hueco-f="tipo"]'); selTipo2.value = 'todas'; selTipo2.dispatchEvent(new w.Event('change', { bubbles: true }));
$('#horCont [data-hueco-f="maxCr"]').value = ''; $('#horCont [data-hueco-f="maxCr"]').dispatchEvent(new w.Event('change', { bubbles: true }));
const antesMas = $$('#horCont .hueco-item').length;
const mas = $('#horCont [data-hueco-mas]');
if (mas) { mas.dispatchEvent(new w.MouseEvent('click', { bubbles: true })); chk($$('#horCont .hueco-item').length > antesMas, '«Mostrar más» amplía la lista'); }
// nada de lo ofrecido se cruza con el horario actual (comprobación dura)
const S2 = w.__api.S; const OF = w.__api.OFERTA_MAP;
const ocupadas = [];
for (const [k, g] of Object.entries(HACT().grupos)) { const [c, act] = k.split('|'); const a = OF[c].actividades.find(x => x.nombre === act); const gg = a && a.grupos.find(x => x.codigoGrupo === g); if (gg) gg.sesiones.forEach(x => ocupadas.push(x)); }
const min = h => { const [a, b] = h.split(':').map(Number); return a * 60 + b; };
let cruces = 0;
for (const item of $$('#horCont .hueco-item')) {
  const [c, grupos] = item.querySelector('[data-hueco]').dataset.hueco.split('|');
  for (const par of grupos.split(';')) { const i = par.lastIndexOf('='); const a = OF[c].actividades.find(x => x.nombre === par.slice(0, i)); const g = a.grupos.find(x => x.codigoGrupo === par.slice(i + 1));
    for (const x of g.sesiones) for (const y of ocupadas) if (x.dia === y.dia && min(x.inicio) < min(y.fin) && min(y.inicio) < min(x.fin)) cruces++; }
}
chk(cruces === 0, `ninguna opción ofrecida se cruza con el horario (${cruces} cruces)`);
w.__api.S.estado = {}; w.__api.S.horario = { extras: [], grupos: {} }; w.__api.guardar(); w.__api.refrescar();

const LS_HOR = LS;
console.log('\n[X] Varios horarios (escenarios) y comparación');
// formato antiguo → se migra
w.__api.S.estado = {}; w.__api.S.horario = { extras: [], grupos: {} }; w.__api.guardar(); w.__api.refrescar();
$('[data-vista="vHorario"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(Array.isArray(w.__api.S.horario.escenarios) && w.__api.S.horario.escenarios.length === 1, 'el formato antiguo se migra a un escenario «Horario A»');
chk($$('#horCont .hor-escenarios .esc').length >= 2, 'aparece la barra de escenarios');
// añadir una asignatura por huecos y luego duplicar
$('#horCont [data-hueco]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const codA = w.__api.S.horario.escenarios[0].extras[0];
$('#horCont [data-esc-duplicar]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.S.horario.escenarios.length === 2 && w.__api.S.horario.activo === 1, 'duplicar crea «Horario B» y lo activa');
chk(w.__api.S.horario.escenarios[1].extras.includes(codA), 'con la misma asignatura');
// en B añadimos otra; A no cambia
$('#horCont [data-hueco]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.S.horario.escenarios[1].extras.length === 2 && w.__api.S.horario.escenarios[0].extras.length === 1, 'los cambios en B no tocan A');
// cambiar a A
$('#horCont [data-esc="0"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.S.horario.activo === 0 && $$('#horCont .hor-item').length === 1, 'volver a A muestra su horario');
// comparar
$('#horCont [data-esc-comparar]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($$('#horCont table.hor-comparar tbody tr').length === 2, 'la comparación lista los dos escenarios');
chk($$('#horCont .hor-comparar-semanas .hor-semana').length === 2, 'con sus dos semanas lado a lado');
$('#horCont [data-esc="1"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(!$('#horCont table.hor-comparar') && w.__api.S.horario.activo === 1, '«abrir» sale de la comparación al escenario elegido');
// nuevo vacío y eliminar
$('#horCont [data-esc-nuevo]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.S.horario.escenarios.length === 3 && $$('#horCont .hor-item').length === 0, 'nuevo crea un escenario vacío');
w.confirm = () => true;
$('#horCont [data-esc-eliminar]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.S.horario.escenarios.length === 2, 'eliminar lo quita');
chk(JSON.parse(w.localStorage.getItem(LS_HOR)).horario.escenarios.length === 2, 'los escenarios se persisten');

console.log('\n[Y] Optimizador de horario');
// escenario B tiene 2 asignaturas; añadimos una tercera con varios grupos si existe
w.__api.S.horario.activo = 1; w.__api.guardar(); w.__api.refrescar();
const itemsB = w.__api.S.horario.escenarios[1].extras.slice();
$('#horCont [data-opt-buscar]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const props = $$('#horCont .opt-lista .hueco-item');
chk(props.length >= 1, `el optimizador propone ${props.length} combinación(es)`);
chk($('#horCont .hor-optimizar').textContent.includes('combinaciones exploradas'), 'e informa cuántas combinaciones exploró');
// aplicar la primera: sin cruces y todos los grupos elegidos
props[0].querySelector('[data-opt-aplicar]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(!$('#horCont .hor-resumen').textContent.includes('con cruce'), 'la propuesta aplicada no tiene cruces');
chk(!$('#horCont .hor-resumen').textContent.includes('Falta elegir grupo'), 'y deja grupo elegido en todas las actividades');
// guardar como nuevo
$('#horCont [data-opt-buscar]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const nAntes = w.__api.S.horario.escenarios.length;
const btnG = $('#horCont [data-opt-guardar]');
if (btnG) { btnG.dispatchEvent(new w.MouseEvent('click', { bubbles: true })); chk(w.__api.S.horario.escenarios.length === nAntes + 1, '«Guardar como horario nuevo» crea otro escenario con esos grupos'); }
// límite horario imposible → aviso claro
w.__api.S.horario.activo = 1; w.__api.guardar(); w.__api.refrescar();
const desde = $('#horCont [data-opt-f="desde"]'); desde.value = '19:00'; desde.dispatchEvent(new w.Event('change', { bubbles: true }));
$('#horCont [data-opt-buscar]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#horCont .hor-optimizar .aviso.malo') !== null, 'con una ventana imposible avisa en vez de fallar');
const desde2 = $('#horCont [data-opt-f="desde"]'); desde2.value = ''; desde2.dispatchEvent(new w.Event('change', { bubbles: true }));
w.__api.S.estado = {}; w.__api.S.horario = { extras: [], grupos: {} }; w.__api.guardar(); w.__api.refrescar();

console.log('\n[Z] Homologada / exenta');
w.__api.S.estado = {}; w.__api.guardar(); w.__api.refrescar();
$('[data-vista="vMalla"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
[...$$('#malla .card')].find(c => c.dataset.id === '1000044').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const bH = [...$$('#segEstado button')].find(b => b.dataset.v === 'homologada');
chk(!!bH, 'la ficha ofrece «Homologada / exenta»');
bH.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
$('#detalle').close();
chk([...$$('#malla .card')].find(c => c.dataset.id === '1000044').classList.contains('homologada'), 'la tarjeta queda como homologada');
chk([...$$('#malla .card')].find(c => c.dataset.id === '1000045').classList.contains('disponible'), 'desbloquea lo que dependía de ella');
$('#btnNivelacion').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const niv = w.__api.PLAN.filter(a => a.comp === 'NV');
chk(niv.length === 4 && niv.every(a => w.__api.S.estado[a.id] === 'homologada'), 'el botón «Nivelación: exento» marca los 4 niveles de inglés');
chk($('#progGlobal').style.width === '0%', 'sin que eso mueva la barra de los 209 créditos');
w.__api.S.estado = {}; w.__api.guardar(); w.__api.refrescar();

console.log('\n' + (errores.length ? `✗ ${errores.length} FALLA(S)` : '✓ TODAS LAS COMPROBACIONES PASAN'));
process.exit(errores.length ? 1 : 0);
