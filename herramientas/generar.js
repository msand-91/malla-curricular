/* ============================================================================
   generar.js — genera la página de cada carrera y la portada
   ----------------------------------------------------------------------------
   La app es una sola (app/plantilla.html + js/app.js + css/). Cada carrera vive
   en carreras/<slug>/ con su carrera.js, datos.js y los archivos generados del
   SIA. Este script escribe:
     <slug>/index.html   la app con los <script> de esa carrera
     index.html          la portada para elegir carrera
   No hay build ni servidor: son archivos estáticos.

   Uso:  node herramientas/generar.js
   ========================================================================== */
'use strict';
const fs = require('fs');
const path = require('path');
const { listarCarreras, cargarCarrera } = require('./_carrera');

const RAIZ = path.resolve(__dirname, '..');
const plantilla = fs.readFileSync(path.join(RAIZ, 'app/plantilla.html'), 'utf8');
const esc = s => String(s ?? '').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));

const carreras = listarCarreras().map(slug => ({ slug, c: cargarCarrera(slug) })).filter(x => x.c);
for (const { slug, c } of carreras) {
  const html = plantilla.replace(/\{\{SLUG\}\}/g, slug).replace(/\{\{TITULO\}\}/g, esc(c.titulo || 'Malla curricular'));
  fs.mkdirSync(path.join(RAIZ, slug), { recursive: true });
  fs.writeFileSync(path.join(RAIZ, slug, 'index.html'), html);
  console.log(`  ${slug}/index.html  ← ${c.titulo}`);
}

const portada = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Mallas curriculares · UNAL Bogotá</title>
<link rel="stylesheet" href="css/estilos.css">
<style>
  .portada { max-width: 760px; margin: 40px auto; padding: 0 16px; }
  .portada h1 { font-size: 26px; margin: 0 0 6px; }
  .portada p.sub { color: var(--texto-2); margin: 0 0 22px; }
  .carreras { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; }
  .carreras a { display: block; background: var(--panel); border: 1px solid var(--borde); border-radius: var(--r); padding: 18px 16px; text-decoration: none; color: var(--texto); box-shadow: var(--sombra); transition: transform .12s, border-color .12s; }
  .carreras a:hover { transform: translateY(-2px); border-color: var(--disp); }
  .carreras .logo { font-size: 30px; margin-bottom: 8px; }
  .carreras b { display: block; font-size: 15px; margin-bottom: 4px; }
  .carreras small { color: var(--texto-2); font-size: 12.5px; }
  .portada .nota { margin-top: 26px; font-size: 12.5px; color: var(--texto-2); }
</style>
</head>
<body>
<main class="portada">
  <h1>Mallas curriculares interactivas</h1>
  <p class="sub">Universidad Nacional de Colombia · Sede Bogotá. Elige tu carrera: marca lo aprobado, planea los semestres que faltan y arma el horario con la oferta real del SIA.</p>
  <div class="carreras">
${carreras.map(({ slug, c }) => `    <a href="${slug}/"><div class="logo">${esc(c.logo || '🎓')}</div><b>${esc(c.nombre)}</b><small>${esc((c.subtitulo || '').replace(/^Universidad Nacional de Colombia · Sede Bogotá · ?/, ''))} · plan ${esc(c.plan)}</small></a>`).join('\n')}
  </div>
  <p class="nota">El avance se guarda en tu navegador, por carrera. Datos del SIA (acceso público, sin sesión); confirma siempre en el SIA antes de inscribir.</p>
</main>
</body>
</html>
`;
fs.writeFileSync(path.join(RAIZ, 'index.html'), portada);
console.log('  index.html (portada)');
