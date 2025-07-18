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
      { id: "desarrollo", nombre: "Desarrollo personal" }
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
  // Agrega más semestres y ramos aquí siguiendo el patrón
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
      if (ramo.abre) tooltip.textContent = "Abre: " + ramo.abre.map(id => id).join(", ");
      if (ramo.req) tooltip.textContent += "\nRequiere: " + ramo.req.map(id => id).join(", ");
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

