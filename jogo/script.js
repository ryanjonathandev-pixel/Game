const escuridao = document.getElementById("escuro");

document.addEventListener("mousemove", function(evento) {
  escuridao.style.background =
        `radial-gradient(circle 200px at ${evento.clientX}px ${evento.clientY}px, transparent, black)`;
});