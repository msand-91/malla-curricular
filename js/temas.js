/* ============================================================================
   temas.js — identidad visual por carrera: color de acento, icono minimalista
   (SVG de línea) y patrón de fondo. Cada carrera indica su tema en carrera.js
   con `tema: 'quimica'` (o define uno propio con la misma forma).
   Los patrones son SVG en línea, en el color de acento y muy tenues; se ponen
   como fondo fijo del <body> para que la página respire un poco de la carrera.
   ========================================================================== */
const TEMAS = {
  quimica: {
    acento: '#0f9aa8', acento2: '#5cc8d2',
    icono: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 3h5M10.5 3v5.2L5.6 16.6A2.6 2.6 0 0 0 7.9 20.5h8.2a2.6 2.6 0 0 0 2.3-3.9L13.5 8.2V3"/><path d="M8 14.5h8"/></svg>',
    // Hexágonos: anillos de benceno, muy tenues.
    patron: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="97" viewBox="0 0 56 97"><g fill="none" stroke="ACENTO" stroke-width="1"><path d="M28 2 54 17v30L28 62 2 47V17z"/><path d="M28 50 54 65v30L28 110 2 95V65z"/><path d="M0 -14 26 1v30L0 46 -26 31V1z"/><path d="M56 -14 82 1v30L56 46 30 31V1z"/></g></svg>',
  },
  biologia: {
    acento: '#2f9e5b', acento2: '#7fd39c',
    icono: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 19.5C4.5 11 10 5.5 20 4c-1 10-6.5 15.5-15.5 15.5z"/><path d="M4.5 19.5C8 14.5 11.5 11 16 8"/></svg>',
    // Nervaduras / hojas estilizadas.
    patron: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><g fill="none" stroke="ACENTO" stroke-width="1" stroke-linecap="round"><path d="M10 110C10 70 40 40 90 30c-8 45-35 72-80 80z"/><path d="M10 110c15-25 32-42 55-58"/><path d="M75 15c20-3 35 5 42 20"/><path d="M85 12c4 8 6 14 6 22"/></g></svg>',
  },
  sistemas: {
    acento: '#5b6cf5', acento2: '#9aa5ff',
    icono: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6.5" r="2.2"/><circle cx="18" cy="6.5" r="2.2"/><circle cx="12" cy="18" r="2.2"/><path d="M8.2 6.5h7.6M7 8.6l4 7.2M17 8.6l-4 7.2"/></svg>',
    // Circuito: nodos y trazas ortogonales.
    patron: '<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140"><g fill="none" stroke="ACENTO" stroke-width="1" stroke-linecap="round"><path d="M10 20h40v30h40M50 20v-15M90 50v40h-30v40M90 90h35M10 110h25v-30"/><circle cx="10" cy="20" r="2.5"/><circle cx="90" cy="50" r="2.5"/><circle cx="60" cy="90" r="2.5"/><circle cx="125" cy="90" r="2.5"/><circle cx="35" cy="80" r="2.5"/><circle cx="10" cy="110" r="2.5"/></g></svg>',
  },
  veterinaria: {
    acento: '#c2410c', acento2: '#f4a261',
    // Estetoscopio + huella: cuidado animal, en una sola línea.
    icono: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v5a4 4 0 0 0 8 0V3"/><path d="M10 15v1.5a4.5 4.5 0 0 0 9 0V14"/><circle cx="19.5" cy="12" r="2"/><path d="M6 3H4.5M14 3h1.5"/></svg>',
    // Huellas: patrón orgánico y disperso.
    patron: '<svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 110 110"><g fill="ACENTO"><ellipse cx="30" cy="40" rx="7" ry="9"/><ellipse cx="18" cy="26" rx="4" ry="5"/><ellipse cx="29" cy="21" rx="4" ry="5"/><ellipse cx="40" cy="27" rx="4" ry="5"/><ellipse cx="80" cy="90" rx="7" ry="9"/><ellipse cx="68" cy="76" rx="4" ry="5"/><ellipse cx="79" cy="71" rx="4" ry="5"/><ellipse cx="90" cy="77" rx="4" ry="5"/></g></svg>',
  },
  generico: {
    acento: '#2563c4', acento2: '#7aa6f0',
    icono: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-4 9 4-9 4-9-4z"/><path d="M7 11v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5"/></svg>',
    patron: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="1.2" fill="ACENTO"/></svg>',
  },
};

/** Tema resuelto para una carrera (por nombre de tema o por objeto propio). */
function temaDe(carrera) {
  const t = carrera && carrera.tema;
  return (typeof t === 'object' && t) || TEMAS[t] || TEMAS[carrera && carrera.slug] || TEMAS.generico;
}

/** Fondo del <body>: el patrón del tema, en su color y con la opacidad dada. */
function fondoTema(tema, opacidad = 0.07) {
  const svg = tema.patron.replace(/ACENTO/g, tema.acento).replace(/stroke="([^"]+)"/g, 'stroke="$1" stroke-opacity="' + opacidad + '"').replace(/fill="(#[^"]+)"/g, 'fill="$1" fill-opacity="' + opacidad + '"');
  return 'url("data:image/svg+xml;utf8,' + encodeURIComponent(svg) + '")';
}

/** Aplica la identidad de la carrera al documento: variables CSS, icono y fondo. */
function aplicarTemaCarrera(carrera) {
  const t = temaDe(carrera);
  const r = document.documentElement;
  r.style.setProperty('--acento', t.acento);
  r.style.setProperty('--acento-2', t.acento2);
  document.body.style.backgroundImage = fondoTema(t);
  document.body.style.backgroundAttachment = 'fixed';
  document.querySelectorAll('.logo').forEach(el => { el.innerHTML = t.icono; });
  return t;
}
