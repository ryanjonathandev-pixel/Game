function abrirPopup() {
    fatalError()
    document.body.insertAdjacentHTML("beforeend", `

<div id="popup" class="popup">
        <img
            src="personagem.png"
            class="personagem"
            alt=""
        >
    <div class="barra">
        <div class="titulo">
            YOU'VE GOT MAIL :D
        </div>

        <a href="#" class="fechar" onclick="fecharPopup(event)">
            <img src="close_popup.png" alt="Fechar">
        </a>
    </div>

    <div class="conteudo">

        <!-- Personagem na FRENTE da janela -->

        <p>I LOVE YOU :)</p>

    </div>

</div>

  
   <style>
.popup {
    width: 420px;
    height: 150px;

    background: #eee0b9;

    border: 3px solid #04032a;
    border-radius: 2px;

    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.45);

    font-family: "Segoe UI", Tahoma, Arial, sans-serif;

    position: absolute;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    overflow: visible;
    transform-origin: center;

    animation: entradaGlitch 0.15s steps(1, end) forwards;
}

@keyframes entradaGlitch {

    /* 1 — começa achatado verticalmente */
    0% {
        transform: translate(-50%, -50%)
                   scaleX(1.15) scaleY(0.5);
    }

    /* 2 — comprime e estica para os lados */
    20% {
        transform: translate(-50%, -50%)
                   scaleX(0.75) scaleY(1.15);
    }

    /* 3 — fica extremamente fino horizontalmente */
    40% {
        transform: translate(-50%, -50%)
                   scaleX(0.10) scaleY(2);
    }

    /* 4 — volta rapidamente, passando um pouco do tamanho */
    60% {
        transform: translate(-50%, -50%)
                   scaleX(1.12) scaleY(0.88);
    }

    /* 5 — pequena deformação de retorno */
    80% {
        transform: translate(-50%, -50%)
                   scaleX(0.96) scaleY(1.04);
    }

    /* 6 — normal */
    100% {
        transform: translate(-50%, -50%)
                   scaleX(1) scaleY(1);
    }
}

/* =========================
   BARRA
   ========================= */

.barra {
    height: 34px;

    background: #0874c9;

    position: relative;

    display: flex;
    align-items: center;

    z-index: 5;
}


.titulo {
    color: white;

    font-size: 16px;
    font-weight: normal;

    padding-left: 12px;
}


/* =========================
   BOTÃO X
   ========================= */

.fechar {
    position: absolute;

    right: 5px;
    top: 3px;

    width: 28px;
    height: 28px;

    display: block;

    z-index: 10;
}

.fechar img {
    width: 28px;
    height: 28px;

    display: block;

    cursor: pointer;
}


/* =========================
   CONTEÚDO
   ========================= */

.conteudo {
    height: calc(100% - 34px);

    background: #eee0b9;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: visible;

    z-index: 1;
}


.conteudo p {
    margin: 0;

    color: #26325d;

    font-family: "Segoe UI", Tahoma, Arial, sans-serif;

    font-size: 28px;
    font-weight: 600;

    position: relative;
    z-index: 2;

    /* empurra o texto para a direita */
    margin-left: 100px;
}


/* =========================
   PERSONAGEM
   ========================= */

/* PERSONAGEM */

.personagem {
    position: absolute;

    width: 200px;

    left: -25px;
    bottom: -33px;

    z-index: 8;

    pointer-events: none;
}
</style>

`);
}

document.addEventListener("DOMContentLoaded", abrirPopup);


function fecharPopup(event) {
    event.preventDefault();
    document.getElementById("popup").remove();
}

function fatalError() {
    const som = new Audio("fatalError.mp3");
    som.play();
}
