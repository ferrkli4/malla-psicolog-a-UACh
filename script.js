const malla = [
  {
    semestre: "1° semestre",
    ramos: [
      { id: "opg1", nombre: "OPG 1" },
      { id: "ingles1", nombre: "Inglés 1", abre: ["ingles2"] },
      { id: "edufisica", nombre: "Educación física y salud" },
      { id: "filosofia", nombre: "Filosofía y Epistemología" },
      { id: "teoria", nombre: "Teoría y Sistemas psicológicos", abre: ["procesospsico", "psicoaprendizaje", "cognitivas", "humanistas", "sistemica", "psicoanalitica"] },
      { id: "biocomp", nombre: "Fundamentos biológicos del comportamiento", abre: ["psicofisio"] },
      { id: "desarrollopersonal", nombre: "Desarrollo personal" }
    ]
  },
  {
    semestre: "2° semestre",
    ramos: [
      { id: "opg2", nombre: "OPG 2" },
      { id: "ingles2", nombre: "Inglés 2", req: ["ingles1"] },
      { id: "comunicacion", nombre: "Comunicación oral y escrita" },
      { id: "procesospsico", nombre: "Procesos psicológicos", req: ["teoria"], abre: ["personalidad", "evaluacion1"] },
      { id: "sociales", nombre: "Procesos sociales", abre: ["social1"] },
      { id: "psicofisio", nombre: "Psicofisiología", req: ["biocomp"], abre: ["psicopatologia"] }
    ]
  },
  {
    semestre: "3° semestre",
    ramos: [
      { id: "opg3", nombre: "OPG 3" },
      { id: "psicoaprendizaje", nombre: "Psicología del aprendizaje", req: ["teoria"], abre: ["educacional1"] },
      { id: "ciclovital1", nombre: "Ciclo vital 1", abre: ["ciclovital2", "personalidad"] },
      { id: "social1", nombre: "Psicología social 1", req: ["sociales"], abre: ["social2"] },
      { id: "metodocuanti1", nombre: "Metodología de la investigación cuantitativa 1", abre: ["metodocuanti2"] },
      { id: "competenciasacad", nombre: "Desarrollo de competencias académicas", abre: ["tallermedio"] }
    ]
  },
  {
    semestre: "4° semestre",
    ramos: [
      { id: "opg4", nombre: "OPG 4" },
      { id: "personalidad", nombre: "Psicología de la personalidad", req: ["procesospsico", "ciclovital1"], abre: ["psicopatologia"] },
      { id: "ciclovital2", nombre: "Ciclo vital 2", req: ["ciclovital1"] },
      { id: "social2", nombre: "Psicología social 2", req: ["social1"], abre: ["organizacional1", "comunitaria1"] },
      { id: "metodocuanti2", nombre: "Metodología de la investigación cuantitativa 2", req: ["metodocuanti1"] },
      { id: "tallermedio", nombre: "Taller de evaluación con el medio", req: ["competenciasacad"] }
    ]
  },
  {
    semestre: "5° semestre",
    ramos: [
      { id: "optativo1", nombre: "Optativo profesional 1" },
      { id: "metodocuali", nombre: "Metodología de la investigación cualitativa", abre: ["teoriaintervencion"] },
      { id: "evaluacion1", nombre: "Evaluación psicológica 1", req: ["procesospsico"], abre: ["evaluacion2"] },
      { id: "psicopatologia", nombre: "Psicopatología", req: ["psicofisio", "personalidad"], abre: ["evaluacion2", "psiquiatria"] },
      { id: "cognitivas", nombre: "Teorías Cognitivo-Conductuales", req: ["teoria"] },
      { id: "humanistas", nombre: "Teorías humanistas", req: ["teoria"] }
    ]
  },
  {
    semestre: "6° semestre",
    ramos: [
      { id: "optativo2", nombre: "Optativo profesional 2" },
      { id: "evaluacion2", nombre: "Evaluación psicológica 2", req: ["evaluacion1", "psicopatologia"], abre: ["clinicaadulto", "infantojuvenil"] },
      { id: "psiquiatria", nombre: "Psiquiatría", req: ["psicopatologia"], abre: ["clinicaadulto", "infantojuvenil"] },
      { id: "sistemica", nombre: "Teoría sistémica", req: ["teoria"] },
      { id: "psicoanalitica", nombre: "Teoría psicoanalítica", req: ["teoria"] },
      { id: "teoriaintervencion", nombre: "Teorías de investigación e intervención", req: ["metodocuali"], abre: ["seminariolic"] }
    ]
  },
  {
    semestre: "7° semestre",
    ramos: [
      { id: "optativo3", nombre: "Optativo profesional 3" },
      { id: "clinicaadulto", nombre: "Psicología clínica adultos", req: ["evaluacion2", "psiquiatria"] },
      { id: "organizacional1", nombre: "Psicología organizacional 1", req: ["social2"], abre: ["organizacional2"] },
      { id: "comunitaria1", nombre: "Psicología comunitaria 1", req: ["social2"], abre: ["comunitaria2"] },
      { id: "educacional1", nombre: "Psicología educacional 1", req: ["psicoaprendizaje"], abre: ["educacional2"] },
      { id: "competenciaslab", nombre: "Desarrollo de competencias laborales y emprendimiento" }
    ]
  },
  {
    semestre: "8° semestre",
    ramos: [
      { id: "optativo4", nombre: "Optativo profesional 4" },
      { id: "infantojuvenil", nombre: "Psicología infanto-juvenil", req: ["evaluacion2", "psiquiatria"] },
      { id: "organizacional2", nombre: "Psicología organizacional 2", req: ["organizacional1"] },
      { id: "comunitaria2", nombre: "Psicología comunitaria 2", req: ["comunitaria1"] },
      { id: "educacional2", nombre: "Psicología educacional 2", req: ["educacional1"] },
      { id: "seminariolic", nombre: "Seminario de licenciatura", req: ["teoriaintervencion"] }
    ]
  },
  {
    semestre: "9° semestre",
    ramos: [
      { id: "talleresp1", nombre: "Taller de especialización 1", req: ["optativo1", "optativo2", "optativo3", "optativo4", "clinicaadulto", "infantojuvenil", "comunitaria2", "organizacional2", "educacional2"] },
      { id: "practica1", nombre: "Práctica profesional 1", req: ["talleresp1"] },
      { id: "titulacion1", nombre: "Seminario de titulación 1", req: ["talleresp1"] }
    ]
  },
  {
    semestre: "10° semestre",
    ramos: [
      { id: "talleresp2", nombre: "Taller de especialización 2", req: ["talleresp1"] },
      { id: "practica2", nombre: "Práctica profesional 2", req: ["practica1"] },
      { id: "titulacion2", nombre: "Seminario de titulación 2", req: ["titulacion1"] }
    ]
  }
];

const mallaContainer = document.getElementById("malla");
const aprobados = new Set();

function crearMalla() {
  malla.forEach(({ semestre, ramos }) => {
    const div = document.createElement("div");
    div.classList.add("semestre");
    const h2 = document.createElement("h2");
    h2.textContent = semestre;
    div.appendChild(h2);

    ramos.forEach(ramo => {
      const btn = document.createElement("div");
      btn.textContent = ramo.nombre;
      btn.classList.add("ramo");
      btn.dataset.id = ramo.id;

      if (ramo.req) btn.classList.add("bloqueado");

      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      if (ramo.abre) tooltip.textContent = "Abre: " + ramo.abre.join(", ");
      if (ramo.req) tooltip.textContent += "\nRequiere: " + ramo.req.join(", ");
      btn.appendChild(tooltip);

      btn.onclick = () => {
        if (btn.classList.contains("bloqueado")) return;
        btn.classList.toggle("aprobado");
        const id = btn.dataset.id;

        if (btn.classList.contains("aprobado")) {
          aprobados.add(id);
        } else {
          aprobados.delete(id);
        }

        actualizarBloqueos();
      };

      div.appendChild(btn);
    });
    mallaContainer.appendChild(div);
  });
}

function actualizarBloqueos() {
  document.querySelectorAll(".ramo").forEach(el => {
    const id = el.dataset.id;
    const ramo = malla.flatMap(s => s.ramos).find(r => r.id === id);
    if (!ramo || !ramo.req) return;

    const requisitosCumplidos = ramo.req.every(req => aprobados.has(req));
    if (requisitosCumplidos) {
      el.classList.remove("bloqueado");
    } else {
      el.classList.remove("aprobado");
      el.classList.add("bloqueado");
      aprobados.delete(id);
    }
  });
}

crearMalla();


