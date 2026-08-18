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

// Temas (color, icono, patrón) para pintar la portada con la identidad de cada carrera.
const vm = require('vm');
const ctxT = {}; vm.createContext(ctxT);
vm.runInContext(fs.readFileSync(path.join(RAIZ, 'js/temas.js'), 'utf8') + ';this.TEMAS = TEMAS; this.temaDe = temaDe; this.fondoTema = fondoTema;', ctxT);
const conTema = carreras.map(x => ({ ...x, t: ctxT.temaDe(x.c) }));
const tarjeta = ({ slug, c, t }, i) => `    <a class="carrera" href="${slug}/" style="--c:${t.acento};--c2:${t.acento2};--fondo:${ctxT.fondoTema(t, 0.16).replace(/"/g, '&quot;')}">
      <span class="ico">${t.icono}</span>
      <b>${esc(c.nombre)}</b>
      <small>${esc((c.subtitulo || '').replace(/^Universidad Nacional de Colombia · Sede Bogotá · ?/, ''))}</small>
      <span class="ir">Abrir <span aria-hidden="true">→</span></span>
    </a>`;

const portada = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Mallas curriculares · UNAL Bogotá</title>
<link rel="stylesheet" href="css/estilos.css">
<style>
  body { min-height: 100vh; background:
      radial-gradient(900px 500px at 8% -10%, color-mix(in srgb, #0f9aa8 22%, transparent), transparent 60%),
      radial-gradient(800px 500px at 100% 0%, color-mix(in srgb, #5b6cf5 22%, transparent), transparent 60%),
      radial-gradient(700px 500px at 50% 110%, color-mix(in srgb, #2f9e5b 18%, transparent), transparent 60%),
      var(--bg); }
  .portada { max-width: 980px; margin: 0 auto; padding: 56px 20px 40px; }
  /* Cabecera centrada y sobria: el color va en las tarjetas, no en el título. */
  .portada .encabezado { text-align: center; margin-bottom: 34px; }
  .portada .marca { display: inline-flex; align-items: center; gap: 10px; font-size: 12px; letter-spacing: .16em; text-transform: uppercase; color: var(--texto-2); margin-bottom: 16px; }
  .portada .marca i { width: 26px; height: 2px; background: linear-gradient(90deg, #0f9aa8, #2f9e5b, #5b6cf5); display: inline-block; border-radius: 2px; }
  .portada h1 { font-size: clamp(34px, 5.4vw, 56px); line-height: 1.04; letter-spacing: -.03em; font-weight: 750; margin: 0 auto 8px; max-width: 15ch; }
  .portada h1 span { font-weight: 400; }                     /* el contraste lo da el peso, no el color */
  .portada .filete { width: 64px; height: 3px; margin: 0 auto 18px; border-radius: 3px; background: linear-gradient(90deg, #0f9aa8, #2f9e5b 50%, #5b6cf5); }
  .portada p.sub { color: var(--texto-2); margin: 0 auto; max-width: 60ch; font-size: 15.5px; text-wrap: balance; }
  .carreras { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
  .carrera { position: relative; overflow: hidden; display: flex; flex-direction: column; gap: 6px; min-height: 190px;
    background: var(--panel); border: 1px solid var(--borde); border-radius: 16px; padding: 22px 20px 18px; text-decoration: none; color: var(--texto);
    box-shadow: var(--sombra); transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease; }
  .carrera::before { content: ""; position: absolute; inset: 0; background-image: var(--fondo); background-size: auto; opacity: .9; pointer-events: none;
    mask-image: linear-gradient(160deg, rgba(0,0,0,.9), transparent 70%); -webkit-mask-image: linear-gradient(160deg, rgba(0,0,0,.9), transparent 70%); }
  .carrera::after { content: ""; position: absolute; left: 0; right: 0; top: 0; height: 4px; background: linear-gradient(90deg, var(--c), var(--c2)); }
  .carrera:hover { transform: translateY(-3px); border-color: var(--c); box-shadow: 0 10px 28px color-mix(in srgb, var(--c) 28%, transparent); }
  .carrera .ico { position: relative; width: 48px; height: 48px; border-radius: 14px; display: grid; place-items: center; color: #fff; margin-bottom: 8px;
    background: linear-gradient(135deg, var(--c), var(--c2)); box-shadow: 0 6px 16px color-mix(in srgb, var(--c) 40%, transparent); }
  .carrera .ico svg { width: 26px; height: 26px; }
  .carrera b { position: relative; font-size: 17px; letter-spacing: -.01em; }
  .carrera small { position: relative; color: var(--texto-2); font-size: 12.5px; line-height: 1.4; }
  .carrera .ir { position: relative; margin-top: auto; padding-top: 10px; font-size: 13px; font-weight: 650; color: var(--c); }
  .portada .nota { margin-top: 28px; font-size: 12.5px; color: var(--texto-2); max-width: 640px; }
  .portada .nota a { color: var(--texto-2); }
  .contacto { margin-top: 26px; display: flex; align-items: center; gap: 14px; background: var(--panel); border: 1px solid var(--borde); border-radius: 14px; padding: 12px 16px; font-size: 13.5px; box-shadow: var(--sombra); max-width: 640px; }
  .contacto img { border-radius: 12px; background: #fbfaf6; padding: 3px; flex: none; }
  .contacto > div { line-height: 1.55; }
  .contacto b { display: block; margin-bottom: 2px; }
  .contacto a { color: var(--acento, #2563c4); font-weight: 600; text-decoration: none; }
  .contacto a:hover { text-decoration: underline; }
  @media (max-width: 560px) { .contacto { align-items: flex-start; } }
</style>
</head>
<body>
<main class="portada">
  <header class="encabezado">
    <div class="marca"><i></i> Quimisand · Universidad Nacional de Colombia · Sede Bogotá</div>
    <h1>Mallas curriculares <span>interactivas</span></h1>
    <div class="filete"></div>
    <p class="sub">Elige tu carrera. Marca lo aprobado, mira qué puedes inscribir, planea los semestres que faltan y arma el horario con la oferta real del SIA.</p>
  </header>
  <div class="carreras">
${conTema.map(tarjeta).join('\n')}
  </div>
  <p class="nota">El avance se guarda en tu navegador, por carrera. Datos públicos del SIA, sin sesión ni credenciales; confirma siempre en el SIA antes de inscribir.</p>
  <section class="contacto">
    <img src="img/quimisand.png" alt="" width="44" height="44">
    <div>
      <b>¿Sugerencias, errores o necesitas ayuda?</b>
      <div>Matías Sandoval · <a href="https://wa.me/573223513477" target="_blank" rel="noopener">322 351 3477</a> · <a href="mailto:msandovalsu@unal.edu.co">msandovalsu@unal.edu.co</a> · <a href="https://instagram.com/matiassandoval715" target="_blank" rel="noopener">@matiassandoval715</a></div>
    </div>
  </section>
</main>
</body>
</html>
`;
fs.writeFileSync(path.join(RAIZ, 'index.html'), portada);
console.log('  index.html (portada)');
