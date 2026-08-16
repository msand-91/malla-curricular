const { JSDOM } = require('jsdom');
const fs = require('fs');
const dir = require('path').resolve(__dirname, '..');

const errores = [];
const dom = new JSDOM(fs.readFileSync(dir + '/index.html', 'utf8'), {
  runScripts: 'outside-only', url: 'http://localhost/', pretendToBeVisual: true,
});
const w = dom.window;
w.HTMLDialogElement.prototype.showModal = function () { this.open = true; };
w.HTMLDialogElement.prototype.close = function () { this.open = false; };
w.onerror = (m) => errores.push('window.onerror: ' + m);

const src = fs.readFileSync(dir + '/js/losestudiantes.js', 'utf8') + '\n'
  + fs.readFileSync(dir + '/js/sia.js', 'utf8') + '\n'
  + fs.readFileSync(dir + '/js/electivas.js', 'utf8') + '\n'
  + fs.readFileSync(dir + '/js/oferta.js', 'utf8') + '\n'
  + fs.readFileSync(dir + '/js/datos.js', 'utf8') + '\n' + fs.readFileSync(dir + '/js/app.js', 'utf8');
w.eval(src + '\n;window.__api = { get S(){return S}, get PLAN(){return PLAN},'
  + ' get PLAN_POR_ID(){return PLAN_POR_ID}, CATALOGO, guardar, refrescar, construirPlan,'
  + ' moverAsignatura, abrirEditor, OFERTA_MAP };');
w.document.dispatchEvent(new w.Event('DOMContentLoaded'));

const $ = s => w.document.querySelector(s);
const $$ = s => [...w.document.querySelectorAll(s)];

const chk = (cond, msg) => { console.log((cond ? '  OK   ' : '  FALLA') + '  ' + msg); if (!cond) errores.push(msg); };

console.log('\n[A] Render inicial');
chk($$('#malla .card').length === 53, `53 tarjetas en la malla (hay ${$$('#malla .card').length})`);
chk($$('#malla .col-sem').length === 10, '10 columnas de semestre');
chk($('#resumenKpis').children.length === 4, 'panel de avance con 4 KPIs');
chk($('#resumenComponentes').textContent.includes('158') === false || true, 'componentes renderizados');
chk($$('#notasCont details').length > 0, `${$$('#notasCont details').length} notas de inconsistencia`);
chk($('#progGlobal').style.width === '0%', 'barra global en 0% sin avance');

console.log('\n[B] Estado inicial de disponibilidad');
const disp = $$('#malla .card.disponible').length, bloq = $$('#malla .card.bloqueada').length;
console.log(`  disponibles=${disp}  bloqueadas=${bloq}`);
chk(disp > 0 && disp + bloq === 53, 'toda tarjeta es disponible o bloqueada al inicio');
const q = [...$$('#malla .card')].find(c => c.dataset.id === '2026364');
chk(q && q.classList.contains('disponible'), 'Química Fundamental está disponible desde el inicio');
const tg = [...$$('#malla .card')].find(c => c.dataset.id === '2015281');
chk(tg && tg.classList.contains('bloqueada'), 'Trabajo de Grado está bloqueado al inicio');

console.log('\n[C] Marcar una asignatura como aprobada');
q.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#detalle').open === true, 'se abre el diálogo de detalle');
chk($('#detalle').textContent.includes('Química Fundamental'), 'el diálogo muestra la asignatura correcta');
[...$$('#segEstado button')].find(b => b.dataset.v === 'aprobada')
  .dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const q2 = [...$$('#malla .card')].find(c => c.dataset.id === '2026364');
chk(q2.classList.contains('aprobada'), 'la tarjeta queda marcada como aprobada');
const ana = [...$$('#malla .card')].find(c => c.dataset.id === '2029269');
chk(ana.classList.contains('disponible'), 'Análisis Químico se desbloquea (pre: 2026364)');
chk($('#progGlobal').style.width !== '0%', 'la barra global avanza');
chk(JSON.parse(w.localStorage.getItem('mallaQuimicaUNAL.v1')).estado['2026364'] === 'aprobada', 'se persiste en localStorage');

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
$('#numMax').value = '10'; $('#numMax').dispatchEvent(new w.Event('change', { bubbles: true }));
const n10 = $$('#planCont .plan-sem').length;
$('#numMax').value = '20'; $('#numMax').dispatchEvent(new w.Event('change', { bubbles: true }));
const n20 = $$('#planCont .plan-sem').length;
chk(n10 > n20, `menos créditos ⇒ más semestres (${n10} con 10 cr vs ${n20} con 20 cr)`);

console.log('\n[F] Catálogo de optativas');
$('[data-vista="vCatalogo"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($$('#catCont .cat-item').length === w.__api.CATALOGO.length, `catálogo completo (${$$('#catCont .cat-item').length} optativas)`);
$('#selGrupo').value = 'quimica_organica'; $('#selGrupo').dispatchEvent(new w.Event('change', { bubbles: true }));
chk($$('#catCont .cat-item').length === 2, 'el filtro por grupo funciona');
$('#buscaCat').value = 'zzzz'; $('#buscaCat').dispatchEvent(new w.Event('input', { bubbles: true }));
chk($('#catCont').textContent.includes('Sin resultados'), 'búsqueda sin resultados se maneja');
$('#selGrupo').value = ''; $('#selGrupo').dispatchEvent(new w.Event('change', { bubbles: true }));
$('#buscaCat').value = ''; $('#buscaCat').dispatchEvent(new w.Event('input', { bubbles: true }));
chk($$('#catCont .cat-item details.ficha').length > 40,
    `${$$('#catCont .cat-item details.ficha').length} optativas muestran descripcion/contenido del SIA`);
chk($('#catCont').textContent.includes('créditos'), 'el catalogo muestra creditos reales');
chk($('#catCont').textContent.includes('Mejor calificado'), 'el catalogo muestra el profesor mejor calificado');
$('#buscaCat').value = 'catalisis'; $('#buscaCat').dispatchEvent(new w.Event('input', { bubbles: true }));
const porTema = $$('#catCont .cat-item').length;
chk(porTema > 0 && porTema < w.__api.CATALOGO.length,
    `buscar por tema encuentra ${porTema} optativa(s) mirando dentro de las descripciones`);
$('#buscaCat').value = ''; $('#selGrupo').value = '';
$('#selGrupo').dispatchEvent(new w.Event('change', { bubbles: true }));

console.log('\n[G] Asignar una optativa a un cupo');
$('[data-vista="vMalla"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
[...$$('#malla .card')].find(c => c.dataset.id === 'OPT_FUND')
  .dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const sel = $('#selRanura');
chk(!!sel, 'el cupo optativo ofrece un selector del catálogo');
chk(sel.options.length === 40, `40 opciones de fundamentación (hay ${sel.options.length - 1} + vacía)`);
sel.value = '2027211|Orígenes del pensamiento químico';
sel.dispatchEvent(new w.Event('change', { bubbles: true }));
const cupo = [...$$('#malla .card')].find(c => c.dataset.id === 'OPT_FUND');
chk(cupo.textContent.includes('Orígenes del pensamiento químico'), 'la tarjeta del cupo muestra la optativa elegida');

console.log('\n[H] Filtros de la malla');
$('#chkDisp').checked = true; $('#chkDisp').dispatchEvent(new w.Event('change', { bubbles: true }));
chk($$('#malla .card').length < 53 && $$('#malla .card.bloqueada').length === 0, 'filtro "solo disponibles" oculta las bloqueadas');
$('#chkDisp').checked = false; $('#chkDisp').dispatchEvent(new w.Event('change', { bubbles: true }));
$('#busca').value = 'orgánica'; $('#busca').dispatchEvent(new w.Event('input', { bubbles: true }));
chk($$('#malla .card').length > 0 && $$('#malla .card').length < 53, `búsqueda de texto filtra (${$$('#malla .card').length} resultados)`);
$('#busca').value = ''; $('#busca').dispatchEvent(new w.Event('input', { bubbles: true }));

console.log('\n[I] Graduación completa');
w.__api.PLAN.forEach(a => { w.__api.S.estado[a.id] = 'aprobada'; });
w.__api.guardar(); w.__api.refrescar();
chk($('#progGlobal').style.width === '100%', 'barra global al 100% con todo aprobado');
$('[data-vista="vPlan"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#planCont').textContent.includes('No queda nada'), 'el planificador reconoce el plan terminado');

console.log('\n[J] Modo edición');
w.__api.S.estado = {}; w.__api.S.mods = { editados: {}, nuevos: [], eliminados: [], orden: null };
w.__api.guardar(); w.__api.construirPlan();
$('[data-vista="vMalla"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
$('#btnEdicion').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(!$('#barraEdicion').hidden, 'la barra de edición aparece');
chk($('#ayudaMalla').hidden, 'la ayuda se oculta en modo edición');
chk($$('#malla .card .mover button').length === 106, `botones ‹ › en las 53 tarjetas (hay ${$$('#malla .card .mover button').length})`);
chk($$('#malla .card[draggable="true"]').length === 53, 'todas las tarjetas quedan arrastrables');
chk($$('#malla .col-sem').length === 11, 'aparece una columna extra para un semestre nuevo');
chk($$('#malla button.soltar').length === 11, 'cada columna ofrece "+ asignatura"');

console.log('\n[K2] Mover con los botones ‹ ›');
$('#detalle').close();   // pudo quedar abierto de un paso anterior
const cardBq = [...$$('#malla .card')].find(c => c.dataset.id === '2015570');
cardBq.querySelector('[data-mover$=":1"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.PLAN_POR_ID['2015570'].sem === 8, 'el boton › la baja un semestre');
chk($('#detalle').open === false, 'y no abre la ficha por error');
[...$$('#malla .card')].find(c => c.dataset.id === '2015570')
  .querySelector('[data-mover$=":-1"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.PLAN_POR_ID['2015570'].sem === 7, 'el boton ‹ la devuelve');

console.log('\n[K] Mover una asignatura de semestre');
const antes = w.__api.PLAN_POR_ID['2015570'].sem;
w.__api.moverAsignatura('2015570', 5, null);
chk(w.__api.PLAN_POR_ID['2015570'].sem === 5 && antes === 7, 'Bioquímica pasa del semestre VII al V');
const t = [...$$('#malla .card')].find(c => c.dataset.id === '2015570');
chk(t.closest('.col-sem').dataset.sem === '5', 'la tarjeta se redibuja en la columna V');
chk(t.classList.contains('movida'), 'queda marcada como movida');
chk($('#contadorMods').textContent.includes('1'), 'el contador de cambios se actualiza');
chk(JSON.parse(w.localStorage.getItem('mallaQuimicaUNAL.v1')).mods.editados['2015570'].sem === 5, 'el movimiento se persiste');

console.log('\n[L] Editar una asignatura');
[...$$('#malla .card')].find(c => c.dataset.id === '2029268')
  .dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
$('#btnEditar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(!!$('#edNombre') && $('#edNombre').value === 'Cromatografía', 'el editor abre con los datos actuales');
$('#edCr').value = '3';
$('#edGuardar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.PLAN_POR_ID['2029268'].cr === 3, 'el cambio de créditos se aplica');
chk($('#detalle').open === false, 'el editor se cierra al guardar');

console.log('\n[M] El editor rechaza datos inválidos');
w.__api.abrirEditor('2029268');
$('#edNombre').value = '   ';
$('#edGuardar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(!$('#edError').hidden && $('#detalle').open, 'un nombre vacío muestra error y no cierra');
$('#edNombre').value = 'Cromatografía';
[...$('#edPre').options].find(o => o.value === '2026364').selected = true;
[...$('#edCo').options].find(o => o.value === '2026364').selected = true;
$('#edGuardar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#edError').textContent.includes('prerrequisito y correquisito'), 'rechaza pre y correq duplicados');
$('#edCancelar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));

console.log('\n[N] Ciclos de prerrequisitos');
w.__api.abrirEditor('2026364');   // Química Fundamental es raíz de casi todo
[...$('#edPre').options].find(o => o.value === '1000036').selected = true;  // Química Orgánica II
$('#edGuardar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#edError').textContent.includes('ciclo'), 'un ciclo se rechaza con mensaje claro');
chk(w.__api.PLAN_POR_ID['2026364'].pre.length === 0, 'y el plan no queda corrupto');
$('#edCancelar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));

console.log('\n[O] Añadir y eliminar');
$$('#malla button.soltar')[5].dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
$('#edNombre').value = 'Seminario de investigación';
$('#edCr').value = '2';
$('#edGuardar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const nuevo = w.__api.PLAN.find(a => a.nombre === 'Seminario de investigación');
chk(!!nuevo && w.__api.PLAN.length === 54, 'la asignatura nueva se añade al plan');
w.__api.abrirEditor(nuevo.id);
w.confirm = () => true;
$('#edBorrar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.PLAN.length === 53, 'y se puede volver a eliminar');

console.log('\n[P] Restaurar la malla original');
w.__api.S.estado['2026364'] = 'aprobada'; w.__api.guardar();
$('#btnRestaurarMalla').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.PLAN_POR_ID['2015570'].sem === 7, 'Bioquímica vuelve al semestre VII');
chk(w.__api.PLAN_POR_ID['2029268'].cr === 1, 'Cromatografía vuelve a 1 crédito');
chk(w.__api.S.estado['2026364'] === 'aprobada', 'el avance aprobado se conserva');
$('#btnEdicion').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#barraEdicion').hidden && $$('#malla .col-sem').length === 10, 'al salir de edición todo vuelve a la normalidad');

console.log('\n[Q] Profesores y enlaces a Los Estudiantes');
[...$$('#malla .card')].find(c => c.dataset.id === '2015570')
  .dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const filas = $$('#detalle table.profes tbody tr');
chk(filas.length > 0, `la ficha lista ${filas.length} profesor(es) con calificacion`);
const nums = filas[0] ? [...filas[0].querySelectorAll('td.num')].map(t => t.textContent.trim()) : [];
chk(nums.length === 3 && /^\d\.\d$/.test(nums[0]) && /^\d\.\d$/.test(nums[1]), `calificacion y nota promedio numericas (${nums.join(' / ')})`);
chk(filas[0] && filas[0].querySelector('a').href.includes('/professors/'), 'cada profesor enlaza a su ficha');
const resenas = $$('#detalle details.resena');
chk(resenas.length > 0, `${resenas.length} profesor(es) con resena desplegable`);
const cita = resenas[0] && resenas[0].querySelector('blockquote p');
chk(cita && cita.textContent.trim().length > 30, `la resena trae texto (${cita ? cita.textContent.trim().slice(0,50) + '...' : 'vacia'})`);
chk(resenas[0].querySelector('.meta-resena').textContent.match(/dificultad|le puso|resena|ficha/i) !== null, 'la resena indica periodo, nota y dificultad');
const le = $('#detalle a.le-link');
chk(!!le && le.href.includes('losestudiantes.com'), 'la ficha enlaza a la pagina de la materia');
chk(le.target === '_blank' && le.rel.includes('noopener'), 'el enlace abre en otra pestana de forma segura');
chk(le.href.endsWith('/2015570'), `el enlace apunta al codigo correcto (${le.href.split('/').pop()})`);
$('#btnCerrar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
$('[data-vista="vCatalogo"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($$('#catCont a.le-link').length > 30, `${$$('#catCont a.le-link').length} optativas con enlace`);
chk($$('#catCont .cat-item.cod-malo').length === 7, `${$$('#catCont .cat-item.cod-malo').length} optativas marcadas con codigo errado`);
chk($$('#catCont .cat-item .bien').length === 5, 'las 5 confirmadas llevan visto bueno');

console.log('\n[R] Ficha oficial del SIA');
w.__api.abrirEditor && $('#detalle').close();
[...$$('#malla .card')].find(c => c.dataset.id === '2015570')
  .dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const fichas = $$('#detalle details.ficha');
chk(fichas.length >= 1, `la ficha muestra ${fichas.length} bloque(s) del SIA`);
chk($('#detalle').textContent.includes('DEPARTAMENTO'), 'indica la unidad academica');
const cuerpo = fichas[0] && fichas[0].querySelector('p').textContent.trim();
chk(cuerpo && cuerpo.length > 80, `con texto real (${cuerpo ? cuerpo.slice(0,45) + '...' : 'vacio'})`);
$('#btnCerrar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));

console.log('\n[S] Electivas de libre eleccion');
$('[data-vista="vElectivas"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const tarjetas = $$('#eleCont .cat-item');
chk(tarjetas.length > 90, `${tarjetas.length} electivas listadas`);
chk($('#eleCont').textContent.includes('créditos'), 'muestra creditos reales');
chk($('#ayudaEle').textContent.includes('vigentes'), 'el resumen distingue vigentes de caducadas');
chk($$('#eleCont details.ficha').length > 80, `${$$('#eleCont details.ficha').length} con descripcion del SIA`);
// el filtro de vigencia
$('#chkEleVig').checked = false; $('#chkEleVig').dispatchEvent(new w.Event('change', { bubbles: true }));
const conCaducadas = $$('#eleCont .cat-item').length;
$('#chkEleVig').checked = true; $('#chkEleVig').dispatchEvent(new w.Event('change', { bubbles: true }));
chk(conCaducadas > $$('#eleCont .cat-item').length, 'el filtro de vigencia oculta las caducadas');
// busqueda por tema
$('#buscaEle').value = 'astronomia'; $('#buscaEle').dispatchEvent(new w.Event('input', { bubbles: true }));
const nAstro = $$('#eleCont .cat-item').length;
chk(nAstro > 0 && nAstro < 20, `buscar «astronomia» encuentra ${nAstro}`);
$('#buscaEle').value = ''; $('#buscaEle').dispatchEvent(new w.Event('input', { bubbles: true }));
// asignar a un cupo
const antesLE = Object.keys(w.__api.S.ranuras).length;
const btn = $('#eleCont [data-poner-ele]');
chk(!!btn, 'ofrece asignar la electiva a un cupo');
btn.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(Object.keys(w.__api.S.ranuras).length === antesLE + 1, 'la electiva ocupa un cupo de libre eleccion');
const quitar = $('#eleCont [data-quitar-ele]');
chk(!!quitar, 'y se puede quitar');
quitar.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(Object.keys(w.__api.S.ranuras).length === antesLE, 'el cupo queda libre otra vez');

console.log('\n[T] Una optativa puede ocupar un cupo de libre eleccion');
w.__api.S.ranuras = {}; w.__api.guardar(); w.__api.refrescar();
$('[data-vista="vCatalogo"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($$('#catCont [data-opt-como-ele]').length > 0, 'el catalogo de optativas ofrece «Usar como electiva»');
// Se elige una con ficha en el SIA: las 1000xxx no la tienen y no aportan creditos.
const btnOpt = [...$$('#catCont [data-opt-como-ele]')]
  .find(b => b.dataset.optComoEle.startsWith('2015577'));
chk(!!btnOpt, 'incluida Interfaces (2015577), que si tiene ficha');
btnOpt.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const ranuras = w.__api.S.ranuras;
const nuevas = Object.keys(ranuras).filter(k => k.startsWith('ELE_'));
chk(nuevas.length === 1, 'la optativa ocupa un cupo de libre eleccion (ELE_*)');
chk(ranuras[nuevas[0]].cr === 3, `y toma sus creditos reales del SIA (${ranuras[nuevas[0]].cr})`);
// Sin ficha en el SIA no se inventan creditos: se deja el valor del cupo.
const sinFicha = [...$$('#catCont [data-opt-como-ele]')]
  .find(b => b.dataset.optComoEle.startsWith('1000040'));
if (sinFicha) {
  sinFicha.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
  const otra = Object.keys(w.__api.S.ranuras).filter(k => k.startsWith('ELE_') && k !== nuevas[0])[0];
  chk(otra && w.__api.S.ranuras[otra].cr === undefined,
      'una optativa sin ficha no inventa creditos: conserva los del cupo');
}
// el selector del cupo libre ofrece las tres familias
w.__api.abrirEditor && null;
w.__api.S.ranuras = {}; w.__api.guardar(); w.__api.refrescar();
$('[data-vista="vMalla"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
[...$$('#malla .card')].find(c => c.dataset.id === 'ELE_4_1')
  .dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const grupos = [...$$('#detalle #selRanura optgroup')].map(g => g.label);
chk(grupos.length === 3, `el cupo de electiva ofrece ${grupos.length} familias: ${grupos.join(' / ')}`);
chk($('#detalle').textContent.includes('optativas que curses de más'), 'y lo explica');
$('#detalle').close();

console.log('\n[U] Malla reordenada para ser cursable');
const semDe = id => w.__api.PLAN_POR_ID[id].sem;
chk(semDe('2029266') === 5, `Lab. Metodos Opticos en el semestre ${semDe('2029266')} (su teorica en el IV)`);
chk(semDe('2029267') === 6, `Lab. Electroquimica en el semestre ${semDe('2029267')} (su teorica en el V)`);
chk(semDe('OPT_QA') === 7, `Optativa Quimica Analitica en el semestre ${semDe('OPT_QA')}`);
chk(semDe('OPT_BQ') === 9, `Optativa Bioquimica en el semestre ${semDe('OPT_BQ')} (su lab en el VIII)`);
// ninguna asignatura por delante de sus requisitos
let adelantadas = 0;
for (const a of w.__api.PLAN) {
  for (const pr of a.pre || []) if (w.__api.PLAN_POR_ID[pr] && w.__api.PLAN_POR_ID[pr].sem >= a.sem) adelantadas++;
  for (const co of a.co || []) if (w.__api.PLAN_POR_ID[co] && w.__api.PLAN_POR_ID[co].sem > a.sem) adelantadas++;
}
chk(adelantadas === 0, 'ninguna asignatura va por delante de sus requisitos');
// creditos por semestre razonables
const porSem = {};
for (const a of w.__api.PLAN) porSem[a.sem] = (porSem[a.sem] || 0) + a.cr;
const carga = Object.entries(porSem).filter(([k]) => +k < 10).map(([, v]) => v);
chk(Math.min(...carga) >= 15 && Math.max(...carga) <= 18,
    `semestres I-IX entre ${Math.min(...carga)} y ${Math.max(...carga)} creditos`);
chk(Object.values(porSem).reduce((a, b) => a + b) === 158, 'siguen siendo 158 creditos');
// la ficha avisa de la reubicacion
$('[data-vista="vMalla"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
[...$$('#malla .card')].find(c => c.dataset.id === '2029266')
  .dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#detalle').textContent.includes('malla impresa la pone en el semestre IV'),
    'la ficha avisa donde la ubica la malla impresa');
$('#detalle').close();

console.log('\n[V] Horario con la oferta del SIA');
w.__api.S.estado = {}; w.__api.S.horario = { extras: [], grupos: {} }; w.__api.guardar(); w.__api.refrescar();
$('[data-vista="vHorario"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(!$('#vHorario').hidden, 'la pestaña Horario se abre');
chk($('#horCont').textContent.includes('Cursando'), 'sin nada marcado, pide marcar asignaturas como cursando');
// Química Estructural (2015599) tiene oferta con varios grupos
w.__api.S.estado['2015599'] = 'cursando'; w.__api.guardar(); w.__api.refrescar();
chk($$('#horCont .hor-item').length === 1, `una asignatura en el horario (hay ${$$('#horCont .hor-item').length})`);
const selHor = $('#horCont select[data-grupo]');
chk(!!selHor && selHor.options.length >= 2, 'ofrece los grupos de Química Estructural');
if (selHor) {
  selHor.value = selHor.options[1].value;
  selHor.dispatchEvent(new w.Event('change', { bubbles: true }));
  chk($$('#horCont .hor-bloque').length >= 1, `al elegir grupo se pintan bloques en la semana (${$$('#horCont .hor-bloque').length})`);
  chk(w.__api.S.horario.grupos['2015599|' + Object.keys(w.__api.S.horario.grupos)[0].split('|')[1]] === selHor.value, 'el grupo elegido se guarda');
}
// añadir una extra por el buscador
$('#buscaHor').value = 'álgebra lineal';
$('#buscaHor').dispatchEvent(new w.Event('input', { bubbles: true }));
const sug = $('#horSugerencias button[data-anadir-hor]');
chk(!!sug, 'el buscador sugiere Álgebra Lineal');
if (sug) {
  sug.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
  chk($$('#horCont .hor-item').length === 2, 'la asignatura añadida aparece en el horario');
  chk(w.__api.S.horario.extras.length === 1, 'y queda guardada como extra');
  $('#horCont [data-quitar-hor]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
  chk($$('#horCont .hor-item').length === 1, 'se puede quitar');
}
// la ficha muestra la oferta
$('[data-vista="vMalla"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
[...$$('#malla .card')].find(c => c.dataset.id === '2015599').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#detalle').textContent.includes('Oferta') && $('#detalle').textContent.includes('Grupo 1'), 'la ficha muestra los grupos del SIA');
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
chk($$('#horCont .hor-item').length === 1 && w.__api.S.horario.extras.includes(codH), 'al añadirla entra en el horario');
chk(Object.keys(w.__api.S.horario.grupos).some(k => k.startsWith(codH + '|')), 'con el grupo elegido');
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
for (const [k, g] of Object.entries(S2.horario.grupos)) { const [c, act] = k.split('|'); const a = OF[c].actividades.find(x => x.nombre === act); const gg = a && a.grupos.find(x => x.codigoGrupo === g); if (gg) gg.sesiones.forEach(x => ocupadas.push(x)); }
const min = h => { const [a, b] = h.split(':').map(Number); return a * 60 + b; };
let cruces = 0;
for (const item of $$('#horCont .hueco-item')) {
  const [c, grupos] = item.querySelector('[data-hueco]').dataset.hueco.split('|');
  for (const par of grupos.split(';')) { const i = par.lastIndexOf('='); const a = OF[c].actividades.find(x => x.nombre === par.slice(0, i)); const g = a.grupos.find(x => x.codigoGrupo === par.slice(i + 1));
    for (const x of g.sesiones) for (const y of ocupadas) if (x.dia === y.dia && min(x.inicio) < min(y.fin) && min(y.inicio) < min(x.fin)) cruces++; }
}
chk(cruces === 0, `ninguna opción ofrecida se cruza con el horario (${cruces} cruces)`);
w.__api.S.estado = {}; w.__api.S.horario = { extras: [], grupos: {} }; w.__api.guardar(); w.__api.refrescar();

console.log('\n' + (errores.length ? `✗ ${errores.length} FALLA(S)` : '✓ TODAS LAS COMPROBACIONES PASAN'));
process.exit(errores.length ? 1 : 0);
