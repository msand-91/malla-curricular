/* ============================================================================
   _carrera.js — resolución de la carrera para las herramientas
   ----------------------------------------------------------------------------
   Las herramientas trabajan sobre carreras/<slug>/. El slug llega por
   `--carrera=<slug>` (o `--carrera <slug>`), o por la variable de entorno
   CARRERA. Si solo hay una carrera, se usa esa.
   ========================================================================== */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const RAIZ = path.resolve(__dirname, '..');
const DIR_CARRERAS = path.join(RAIZ, 'carreras');

function listarCarreras() {
  return fs.readdirSync(DIR_CARRERAS).filter(d => fs.existsSync(path.join(DIR_CARRERAS, d, 'carrera.js'))).sort();
}

/** El objeto CARRERA de carreras/<slug>/carrera.js (o null si no existe). */
function cargarCarrera(slug) {
  const f = path.join(DIR_CARRERAS, slug, 'carrera.js');
  if (!fs.existsSync(f)) return null;
  const c = {}; vm.createContext(c);
  vm.runInContext(fs.readFileSync(f, 'utf8') + ';this.C = CARRERA', c);
  return c.C;
}

/** Slug pedido en la línea de comandos (--carrera=x | --carrera x | CARRERA=x). */
function slugPedido(argv = process.argv) {
  const i = argv.findIndex(a => a === '--carrera' || a.startsWith('--carrera='));
  if (i >= 0) return argv[i].includes('=') ? argv[i].split('=')[1] : argv[i + 1];
  return process.env.CARRERA || null;
}

/** Quita --carrera de argv para que las herramientas sigan leyendo sus argumentos. */
function argvSinCarrera(argv = process.argv) {
  const out = [];
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--carrera') { i++; continue; }
    if (argv[i].startsWith('--carrera=')) continue;
    out.push(argv[i]);
  }
  return out;
}

/** { slug, dir, carrera } de la carrera con la que se trabaja. Termina con
    mensaje claro si no se indicó y hay varias. */
function resolverCarrera() {
  const todas = listarCarreras();
  let slug = slugPedido();
  if (!slug && todas.length === 1) slug = todas[0];
  if (!slug || !todas.includes(slug)) {
    console.error(`Indica la carrera con --carrera=<slug> (o CARRERA=<slug>). Disponibles: ${todas.join(', ')}`);
    process.exit(2);
  }
  return { slug, dir: path.join(DIR_CARRERAS, slug), carrera: cargarCarrera(slug) };
}

module.exports = { RAIZ, DIR_CARRERAS, listarCarreras, cargarCarrera, slugPedido, argvSinCarrera, resolverCarrera };
