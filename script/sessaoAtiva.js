const loginInput = document.getElementById('login');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const botaoEnviar = document.getElementById('enviar');
const btnSessao = document.getElementById('btnSessao');

function fazerLogout() {
    localStorage.removeItem("sessao");
}

function mostrarSessao() {
    let sessaoSalva = JSON.parse(localStorage.getItem("sessao"));
    console.log(sessaoSalva)
}

function sessaoAtiva() {
    const sessao = JSON.parse(localStorage.getItem("sessao")) || {};
    const sessaoValida = sessao.ativa || false;

    if (sessaoValida) {
        btnSessao.textContent = "SAIR";
        btnSessao.removeAttribute("href");
        btnSessao.addEventListener("click", () => {
            fazerLogout();
            location.reload();
        });
    } else {
        // btnSessao.textContent = "ENTRAR";
        // btnSessao.href = "paginas/login.html";
    }

    const compra = document.getElementById("compra");
    if (compra && compra.value == "compra" && !sessaoValida) {
        alert("Você precisa estar logado para comprar um ingresso");
        window.location.href = "../paginas/login.html";
    }
}

sessaoAtiva();
