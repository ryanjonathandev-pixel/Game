const escuridao = document.getElementById("escuro");
const quitButton = document.getElementById("Quitbutton");

document.addEventListener("mousemove", function(evento) {
  escuridao.style.background =
        `radial-gradient(circle 200px at ${evento.clientX}px ${evento.clientY}px, transparent, black)`;
});

quitButton.addEventListener("click", voltar);

function voltar() {
  window.location.href = "../index.html";
}