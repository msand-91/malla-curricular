/* ============================================================================
   carga.test.js — la app arranca sin los datos pesados y los pide al usarlos
   ----------------------------------------------------------------------------
   Las pruebas de cada carrera concatenan todos los archivos, así que no cubren
   la carga diferida real de la página publicada: aquí se carga solo lo ligero
   (carrera.js + datos.js + temas.js + app.js) y se comprueba que la malla se
   pinta igual y que cada pestaña pide sus datos al abrirse (una sola vez).
   Uso:  node tests/carga.test.js [--carrera=<slug>]
   ========================================================================== */
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const { listarCarreras, slugPedido, DIR_CARRERAS, RAIZ } = require('../herramientas/_carrera');

const errores = [];
const chk = (cond, msg) => { console.log((cond ? '  OK   ' : '  FALLA') + '  ' + msg); if (!cond) errores.push(msg); };
const microtareas = () => new Promise(r => setImmediate(r));

async function probar(slug) {
  console.log(`\n== ${slug}`);
  const dirC = path.join(DIR_CARRERAS, slug);
  const dom = new JSDOM(fs.readFileSync(path.join(RAIZ, slug, 'index.html'), 'utf8'),
    { runScripts: 'outside-only', url: 'http://localhost/' + slug + '/', pretendToBeVisual: true });
  const w = dom.window;
  w.HTMLDialogElement.prototype.showModal = function () { this.open = true; };
  w.HTMLDialogElement.prototype.close = function () { this.open = false; };

  /* Los <script> que inyecta la app se sirven desde el disco, como haría el
     navegador; se anota cuáles pide para verificar que solo pide lo necesario. */
  const pedidos = [];
  const crear = w.document.createElement.bind(w.document);
  w.document.createElement = tag => {
    const el = crear(tag);
    if (String(tag).toLowerCase() !== 'script') return el;
    let src = '';
    Object.defineProperty(el, 'src', {
      get: () => src,
      set: v => {
        src = v;
        const f = path.basename(v);
        pedidos.push(f);
        try {
          /* Un <script> externo declara sus `const` en el ámbito global y otros
             scripts las ven; `eval` no, así que se exportan a window a mano. */
          const codigo = fs.readFileSync(path.join(dirC, f), 'utf8');
          const nombres = [...codigo.matchAll(/^const ([A-Z][A-Z_0-9]*) =/gm)].map(m => m[1]);
          w.eval(codigo + '\n;' + nombres.map(n => `window.${n} = ${n};`).join(''));
          el.onload && el.onload();
        } catch (e) { el.onerror && el.onerror(e); }
      },
    });
    return el;
  };

  const fuente = ['carrera.js', 'datos.js'].map(f => fs.readFileSync(path.join(dirC, f), 'utf8')).join('\n')
    + '\n' + fs.readFileSync(path.join(RAIZ, 'js/temas.js'), 'utf8')
    + '\n' + fs.readFileSync(path.join(RAIZ, 'js/app.js'), 'utf8')
    + '\n;window.__api = { get PLAN(){return PLAN} };';
  w.eval(fuente);
  w.document.dispatchEvent(new w.Event('DOMContentLoaded'));

  const $ = s => w.document.querySelector(s);
  const $$ = s => [...w.document.querySelectorAll(s)];
  const abrir = async v => { $(`[data-vista="${v}"]`).dispatchEvent(new w.MouseEvent('click', { bubbles: true })); await microtareas(); };

  chk($$('#malla .card').length === w.__api.PLAN.length, `la malla se pinta sin los datos pesados (${$$('#malla .card').length} tarjetas)`);
  chk($('h1').textContent.includes('Malla'), 'con el título de la carrera puesto');
  chk(pedidos.length === 0, `y sin pedir todavía ningún archivo pesado (${pedidos.join(', ') || 'ninguno'})`);

  await abrir('vElectivas');
  chk(pedidos.includes('electivas.js'), 'al abrir Electivas se pide electivas.js');
  chk(!pedidos.includes('oferta.js'), 'sin pedir la oferta, que esa pestaña no necesita');
  chk($$('#eleCont .cat-item').length > 10, `y se pintan las electivas (${$$('#eleCont .cat-item').length})`);

  await abrir('vHorario');
  chk(pedidos.includes('oferta.js'), 'al abrir Horario se pide oferta.js');
  chk(!$('#horCont').textContent.includes('Cargando'), 'y el horario queda pintado');

  await abrir('vMalla');
  $$('#malla .card')[0].dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
  await microtareas();
  chk($('#detalle').open, 'la ficha de una asignatura se abre');
  $('#detalle').close();

  chk(new Set(pedidos).size === pedidos.length, `cada archivo se pide una sola vez (${pedidos.join(', ')})`);
  dom.window.close();
}

(async () => {
  for (const slug of (slugPedido() ? [slugPedido()] : listarCarreras())) await probar(slug);
  console.log(errores.length ? `\n✗ ${errores.length} FALLA(S)` : '\n✓ TODAS LAS COMPROBACIONES PASAN');
  process.exit(errores.length ? 1 : 0);
})();
