const params = new URLSearchParams(window.location.search);
let filme = params.get('filme');

let title = document.getElementById("title");
let img = document.getElementById("imgFilme");
let nomeFilme = document.getElementById("nomeFilme");
let generoEDuracao = document.getElementById("generoEDuracao");
let sinopseFilme = document.getElementById("sinopseFilme");
let generoFilme = document.getElementById("generoFilme");
let classificacaoFilme = document.getElementById("classificacaoFilme");
let duracaoFilme = document.getElementById("duracaoFilme");
let direcaoFilme = document.getElementById("direcaoFilme");
let elencoFilme = document.getElementById("elencoFilme");
let btnComprar = document.getElementById("btnComprar");
let btnTrailer = document.querySelector('.btn-trailer');
let trailerModalTitle = document.getElementById("trailerModalLabel");
let trailerVideo = document.getElementById("trailerVideo");

switch (filme) {
    case "operacaoVinganca":
        title.textContent = "Operação Vingança";
        img.src = "../img/operacaoVinganca.jpg";
        nomeFilme.textContent = "Operação Vingança";
        generoEDuracao.textContent = "AÇÃO - 123 MIN";
        sinopseFilme.textContent = "A esposa de Charlie, um pacato programador da CIA, é assassinada em um ataque terrorista. Seus superiores se recusam a caçar os culpados, então ele usa seu conhecimento para rastrear e eliminar todos os criminosos por conta própria.";
        generoFilme.textContent = "AÇÃO";
        classificacaoFilme.textContent = "14+";
        duracaoFilme.textContent = "123 MIN";
        direcaoFilme.textContent = "James Hawes";
        elencoFilme.textContent = "Rami Malek, Laurence Fishburne, Rachel Brosnahan";
        btnComprar.href = "comprar.html?filme=operacaoVinganca";
        btnTrailer.setAttribute("data-title", "Operação Vingança");
        btnTrailer.setAttribute("data-video", "https://www.youtube.com/embed/y3YWAXJKPes");
        break;

    case "dropAmeacaAnonima":
        title.textContent = "Drop: Ameaça Anônima";
        img.src = "../img/dropAmeacaAnonima.jpg";
        nomeFilme.textContent = "Drop: Ameaça Anônima";
        generoEDuracao.textContent = "AÇÃO - 85 MIN";
        sinopseFilme.textContent = "Violet é uma mãe viúva que vai a um restaurante para se encontrar com Henry. No entanto, ela logo recebe mensagens de telefone de uma figura misteriosa encapuzada que ameaça matar seu filho pequeno e sua irmã, a menos que ela mate Henry.";
        generoFilme.textContent = "AÇÃO";
        classificacaoFilme.textContent = "14+";
        duracaoFilme.textContent = "85 MIN";
        direcaoFilme.textContent = "Christopher Landon";
        elencoFilme.textContent = "Meghann Fahy, Brandon Sklenar, Violett Beane";
        btnComprar.href = "comprar.html?filme=dropAmeacaAnonima";
        btnTrailer.setAttribute("data-title", "Drop: Ameaça Anônima");
        btnTrailer.setAttribute("data-video", "https://www.youtube.com/embed/dv-XeNIFvNA");
        break;

    case "brancaDeNeve":
        title.textContent = "Branca de Neve";
        img.src = "../img/brancaDeNeve.jpg";
        nomeFilme.textContent = "Branca de Neve";
        generoEDuracao.textContent = "AVENTURA - 109 MIN";
        sinopseFilme.textContent = "Uma recriação do clássico animado de Walt Disney de 1937 sobre uma bela jovem princesa que, enquanto é perseguida por uma rainha ciumenta, busca refúgio em uma cabana em uma floresta.";
        generoFilme.textContent = "AVENTURA";
        classificacaoFilme.textContent = "14+";
        duracaoFilme.textContent = "109 MIN";
        direcaoFilme.textContent = "Marc Webb";
        elencoFilme.textContent = "Rachel Zegler, Gal Gadot, Andrew Burnap";
        btnComprar.href = "comprar.html?filme=brancaDeNeve";
        btnTrailer.setAttribute("data-title", "Branca de Neve");
        btnTrailer.setAttribute("data-video", "https://www.youtube.com/embed/X3o9GyKda1k");
        break;

    case "theChosenUltimaCeia":
        title.textContent = "The Chosen - Última Ceia";
        img.src = "../img/theChosenUltimaCeia.jpg";
        nomeFilme.textContent = "The Chosen - Última Ceia";
        generoEDuracao.textContent = "DRAMA - 98 MIN";
        sinopseFilme.textContent = "Jesus entra na cidade sagrada como rei, mas encontra a casa de Seu Pai transformada de um lugar de oração em um mercado corrupto. Enquanto o sumo sacerdote judeu trama contra o que seria Messias, Jesus age primeiro—dando uma reviravolta na corrupção religiosa.";
        generoFilme.textContent = "DRAMA";
        classificacaoFilme.textContent = "12+";
        duracaoFilme.textContent = "98 MIN";
        direcaoFilme.textContent = "Dallas Jenkins";
        elencoFilme.textContent = "Jonathan Roumie, Shahar Isaac, Catherine Lidstone";
        btnComprar.href = "comprar.html?filme=theChosenUltimaCeia";
        btnTrailer.setAttribute("data-title", "The Chosen - Última Ceia");
        btnTrailer.setAttribute("data-video", "https://www.youtube.com/embed/o519C3i0Jng");
        break;

    case "umFilmeMinecraft":
        title.textContent = "Um Filme Minecraft";
        img.src = "../img/umFilmeMinecraft.jpg";
        nomeFilme.textContent = "Um Filme Minecraft";
        generoEDuracao.textContent = "AÇÃO - 120 MIN";
        sinopseFilme.textContent = "Um portal misterioso atrai quatro desajustados para o Overworld, uma terra das maravilhas bizarras e cúbicas que prospera com a imaginação. Para voltar para casa, eles têm que dominar o terreno enquanto embarcam em uma missão mágica com um construtor inesperado chamado Steve.";
        generoFilme.textContent = "AÇÃO";
        classificacaoFilme.textContent = "10+";
        duracaoFilme.textContent = "120 MIN";
        direcaoFilme.textContent = "Jared Hess";
        elencoFilme.textContent = "Jack Black, Jason Momoa, Danielle Brooks";
        btnComprar.href = "comprar.html?filme=umFilmeMinecraft";
        btnTrailer.setAttribute("data-title", "Um Filme Minecraft");
        btnTrailer.setAttribute("data-video", "https://www.youtube.com/embed/3IVPHxs4NoM");
        break;

    case "codigoAlarum":
        title.textContent = "Código Alarum";
        img.src = "../img/codigoAlarum.jpg";
        nomeFilme.textContent = "Código Alarum";
        generoEDuracao.textContent = "AÇÃO - 95 MIN";
        sinopseFilme.textContent = "Vivendo isolados durante as férias em um resort de inverno, os espiões casados Joe e Lara são atacados por membros da velha guarda que suspeitam que eles se juntaram a uma equipe de elite de espiões renegados.";
        generoFilme.textContent = "AÇÃO";
        classificacaoFilme.textContent = "16+";
        duracaoFilme.textContent = "95 MIN";
        direcaoFilme.textContent = "Michael Polish";
        elencoFilme.textContent = "Scott Eastwood, Sylvester Stallone, Willa Fitzgerald";
        btnComprar.href = "comprar.html?filme=codigoAlarum";
        btnTrailer.setAttribute("data-title", "Código Alarum");
        btnTrailer.setAttribute("data-video", "https://www.youtube.com/embed/bnjaf3slscs");
        break;
}

btnTrailer.addEventListener("click", () => {
    let titulo = btnTrailer.getAttribute("data-title");
    let video = btnTrailer.getAttribute("data-video");

    trailerModalTitle.textContent = titulo;
    trailerVideo.src = video + "?autoplay=1";
});

document.getElementById('trailerModal').addEventListener('hidden.bs.modal', () => {
    trailerVideo.src = "";
});
