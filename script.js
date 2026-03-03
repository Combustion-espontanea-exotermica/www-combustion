async function loadProyectos() {
  const res = await fetch("data/proyectos.json");
  const proyectos = await res.json();

  const rejilla = document.getElementById("proyectos-rejilla");

  proyectos.forEach(proyecto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${proyecto.titulo}</h3>
      <p>${proyecto.descripcion}</p>
    `;

    card.onclick = () => {
      window.location.href = `proyecto.html?id=${proyecto.id}`;
    };

    rejilla.appendChild(card);
  });
}

async function loadArticulos() {
  const res = await fetch("data/articulos.json");
  const articulos = await res.json();

  const list = document.getElementById("articulos-list");

  articulos.forEach(articulo => {
    const link = document.createElement("a");
    link.href = `articulo.html?id=${articulo.id}`;
    link.textContent = articulo.titulo;
    list.appendChild(link);
  });
}

loadProyectos();
loadArticulos();
