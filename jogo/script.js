const escuridao = document.getElementById("escuro");

function acenderLanterna() {
    escuridao.style.background = "radial-gradient(circle 200px at center, transparent, black)";
}

function apagarLanterna() {
    escuridao.style.background = "black";
}

document.addEventListener("pointerdown", acenderLanterna);
document.addEventListener("pointerup", apagarLanterna);

//Quit button//

const quitButton = document.getElementById("QuitButton");

quitButton.addEventListener("click", function() {
    window.location.href = "index.html";
}
