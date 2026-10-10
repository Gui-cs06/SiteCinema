let numIngressos = document.getElementById("numIngressos");
let botoes = document.querySelectorAll('.assento');
let btnComprar = document.getElementById("btnComprar");
let botoesSessao = document.querySelectorAll('.sessao');

let limite = 0;
let selecionados = 0;
let sessaoSelecionada = '';
let ingressosDisponiveis = 50;
let assentosOcupados = [];

function gerarChaveSessao() {
    return `${filme}_${sessaoSelecionada}`;
}

botoesSessao.forEach(btn => {
    btn.addEventListener('click', () => {
        sessaoSelecionada = btn.textContent.trim();

        carregarDadosSessao(sessaoSelecionada);

        botoesSessao.forEach(b => b.classList.remove('ativo'));
        btn.classList.add('ativo');
    });
});


function carregarDadosSessao(sessao) {
    sessaoSelecionada = sessao;
    const chave = gerarChaveSessao();

    let dados = JSON.parse(localStorage.getItem(chave));

    assentosOcupados = dados?.assentosOcupados || [];
    ingressosDisponiveis = dados?.ingressosDisponiveis ?? 50;

    botoes.forEach(btn => {
        btn.classList.remove('ocupado', 'selecionado');
        btn.disabled = false;
    });

    assentosOcupados.forEach(assento => {
        let btn = Array.from(botoes).find(b => b.textContent === assento);
        if (btn) {
            btn.classList.add('ocupado');
            btn.disabled = true;
        }
    });

    selecionados = 0;
    limite = 0;
    numIngressos.value = '';
    numIngressos.max = ingressosDisponiveis;
}


function salvarDadosSessao() {
    if (!sessaoSelecionada) return;

    const chave = gerarChaveSessao();

    const dados = {
        assentosOcupados,
        ingressosDisponiveis
    };

    localStorage.setItem(chave, JSON.stringify(dados));
}


numIngressos.addEventListener('focusout', () => {
    let novoLimite = parseInt(numIngressos.value) || 0;

    if (novoLimite > ingressosDisponiveis) {
        alert(`Só há ${ingressosDisponiveis} ingressos disponíveis.`);
        numIngressos.value = ingressosDisponiveis;
        limite = ingressosDisponiveis;
        return;
    }

    if (novoLimite >= selecionados) {
        limite = novoLimite;
    } else {
        let desmarcar = selecionados - novoLimite;

        botoes.forEach(btn => {
            if (btn.classList.contains('selecionado') && desmarcar > 0) {
                btn.classList.remove('selecionado');
                desmarcar--;
                selecionados--;
            }
        });

        limite = novoLimite;
    }
});

botoes.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.disabled) return;

        if (limite === 0) {
            alert('Selecione a quantidade de ingressos.');
            return;
        }

        if (btn.classList.contains('selecionado')) {
            btn.classList.remove('selecionado');
            selecionados--;
        } else {
            if (selecionados < limite) {
                btn.classList.add('selecionado');
                selecionados++;
            } else {
                alert('Limite de ingressos atingido!');
            }
        }
    });
});


btnComprar.addEventListener('click', () => {
    if (!sessaoSelecionada) {
        alert('Selecione um horário antes de comprar!');
        return;
    }

    let assentosSelecionados = [];

    botoes.forEach(btn => {
        if (btn.classList.contains('selecionado')) {
            assentosSelecionados.push(btn.textContent);
        }
    });

    if (assentosSelecionados.length === 0) {
        alert('Selecione pelo menos um assento antes de comprar.');
        return;
    }

    if (assentosSelecionados.length < limite) {
        alert(`Você selecionou apenas ${assentosSelecionados.length} assento(s), mas escolheu ${limite} ingresso(s).`);
        return;
    }

    assentosSelecionados.forEach(num => {
        let btn = Array.from(botoes).find(b => b.textContent === num);
        if (btn) {
            btn.classList.remove('selecionado');
            btn.classList.add('ocupado');
            btn.disabled = true;
        }
        assentosOcupados.push(num);
    });

    ingressosDisponiveis -= assentosSelecionados.length;
    selecionados = 0;
    limite = 0;

    numIngressos.max = ingressosDisponiveis;
    numIngressos.value = '';

    salvarDadosSessao();

    alert(`Compra realizada! Assentos comprados: ${assentosSelecionados.join(', ')}`);
});


// Resetar dados salvos
function resetarDadosFilmes() {
    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        if (chave.includes('_')) { 
            localStorage.removeItem(chave);
            i--;
        }
    }
    location.reload();
}
//aaaaaaaaaaaaaaaaaaaaaaaaa



const params = new URLSearchParams(window.location.search);
let filme = params.get('filme');
let title = document.getElementById("title");
let img = document.getElementById("imgFilme");
let nomeFilme = document.getElementById("nomeFilme");
let generoEDuracao = document.getElementById("generoEDuracao");

switch (filme) {
    case "operacaoVinganca":
        title.textContent = "Operação Vingança";
        img.src = "../img/operacaoVinganca.jpg";
        nomeFilme.textContent = "Operação Vingança";
        generoEDuracao.textContent = "AÇÃO - 123 MIN";
        btnComprar.href = "comprar.html?filme=operacaoVinganca";
    break;
    case "dropAmeacaAnonima":
        title.textContent = "Drop: Ameaça Anônima";
        img.src = "../img/dropAmeacaAnonima.jpg";
        nomeFilme.textContent = "Drop: Ameaça Anônima";
        generoEDuracao.textContent = "AÇÃO - 85 MIN";
        btnComprar.href = "comprar.html?filme=dropAmeacaAnonima";
    break;
    case "brancaDeNeve":
        title.textContent = "Branca de Neve";
        img.src = "../img/brancaDeNeve.jpg";
        nomeFilme.textContent = "Branca de Neve";
        generoEDuracao.textContent = "AVENTURA - 109 MIN";
        btnComprar.href = "comprar.html?filme=brancaDeNeve";
    break;
    case "theChosenUltimaCeia":
        title.textContent = "The Chosen - Última Ceia";
        img.src = "../img/theChosenUltimaCeia.jpg";
        nomeFilme.textContent = "The Chosen - Última Ceia";
        generoEDuracao.textContent = "DRAMA - 98 MIN";
        btnComprar.href = "comprar.html?filme=theChosenUltimaCeia";
    break;
    case "umFilmeMinecraft":
        title.textContent = "Um Filme Minecraft";
        img.src = "../img/umFilmeMinecraft.jpg";
        nomeFilme.textContent = "Um Filme Minecraft";
        generoEDuracao.textContent = "AÇÃO - 120 MIN";
        btnComprar.href = "comprar.html?filme=umFilmeMinecraft";
    break;
    case "codigoAlarum":
        title.textContent = "Código Alarum";
        img.src = "../img/codigoAlarum.jpg";
        nomeFilme.textContent = "Código Alarum";
        generoEDuracao.textContent = "AÇÃO - 95 MIN";
        btnComprar.href = "comprar.html?filme=codigoAlarum";
    break;
}