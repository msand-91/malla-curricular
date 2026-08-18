/* ============================================================================
   correr.js — ejecuta las pruebas de todas las carreras (o de una)
   Uso:  node tests/correr.js [--carrera=<slug>]
   ========================================================================== */
'use strict';
const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const { listarCarreras, slugPedido, DIR_CARRERAS } = require('../herramientas/_carrera');

const pedido = slugPedido();
const carreras = pedido ? [pedido] : listarCarreras();
let fallos = 0;
for (const slug of carreras) {
  const dir = path.join(DIR_CARRERAS, slug, 'tests');
  if (!fs.existsSync(dir)) { console.log(`\n== ${slug}: sin pruebas`); continue; }
  for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.test.js')).sort()) {
    console.log(`\n== ${slug} / ${f}`);
    const r = spawnSync(process.execPath, [path.join(dir, f)], { stdio: ['ignore', 'pipe', 'inherit'] });
    const out = r.stdout.toString();
    const lineas = out.trim().split('\n');
    console.log(lineas.filter(l => /FALLA|✗|✓|MAL\b|ERROR/.test(l)).join('\n') || lineas.slice(-1)[0]);
    if (r.status !== 0) fallos++;
  }
}
/* Prueba transversal: la carga diferida de los datos pesados. */
console.log('\n== carga diferida (todas las carreras)');
{
  const r = spawnSync(process.execPath, [path.join(__dirname, 'carga.test.js'), ...(pedido ? ['--carrera=' + pedido] : [])],
    { stdio: ['ignore', 'pipe', 'inherit'] });
  const out = r.stdout.toString().trim().split('\n');
  console.log(out.filter(l => /FALLA|✗|✓/.test(l)).join('\n') || out.slice(-1)[0]);
  if (r.status !== 0) fallos++;
}

console.log(fallos ? `\n✗ ${fallos} archivo(s) de pruebas con fallas` : '\n✓ Todas las pruebas de todas las carreras pasan');
process.exit(fallos ? 1 : 0);
