const escuridao = document.getElementById("escuro");
const quitButton = document.getElementById("Quitbutton");

function acenderLanterna() {
    escuridao.style.background =
        "radial-gradient(circle, transparent 100px, black 250px)";
}

function apagarLanterna() {
    escuridao.style.background = "black";
}

document.addEventListener("pointerdown", acenderLanterna);
document.addEventListener("pointerup", apagarLanterna);

quitButton.addEventListener("click", function () {
    window.location.href = "../index.html";
});
