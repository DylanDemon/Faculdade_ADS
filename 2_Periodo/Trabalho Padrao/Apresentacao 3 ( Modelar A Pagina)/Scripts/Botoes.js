import { proximaPagina, anteriorPagina } from "./PokeLimits.js"; // Adicionado .js

// Botao Pokemons Animado
const botao = document.getElementById("B_Home");
function Apertei1() {
    const imagem1Normal = "./CSS/Imagems_Extras/Botao_Home_0.png";
    const imagem1Clicada = "./CSS/Imagems_Extras/Botao_Home_1.png";
    botao.src = imagem1Clicada;
    setTimeout(() => {
        botao.src = imagem1Normal;
        window.location.href = "./Main.html";
    }, 200);
}

// Botao Deck Animado
const botao2 = document.getElementById('B_Deck');
function Apertei2() {
    const imagem2Normal = "./CSS/Imagems_Extras/Botao_Deck_0.png";
    const imagem2Clicada = "./CSS/Imagems_Extras/Botao_Deck_1.png";
    botao2.src = imagem2Clicada;
    setTimeout(() => {
        botao2.src = imagem2Normal;
        window.location.href = "./Deck.html";
    }, 200);
}

// Botao Login Animado
const botao3 = document.getElementById('B_Login');
function Apertei3() {
    const imagem3Normal = "./CSS/Imagems_Extras/Botao_Login_0.png";
    const imagem3Clicada = "./CSS/Imagems_Extras/Botao_Login_1.png";
    botao3.src = imagem3Clicada;
    setTimeout(() => {
        botao3.src = imagem3Normal;
        window.location.href = "./Login.html";
    }, 200);
}

// Botao Proximo Animado
const botaoProximo = document.getElementById('B_Proximo');
function AperteiProximo(){
    const imagem4Normal = "./CSS/Imagems_Extras/botao_proximo_0.png";
    const imagem4Clicada = "./CSS/Imagems_Extras/botao_Proximo_1.png";
    botaoProximo.src = imagem4Clicada;
    botaoProximo.style.filter = "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.8))";
    setTimeout(() => {
        botaoProximo.src = imagem4Normal;
        botaoAnterior.style.filter = "";
        proximaPagina(); // Agora chamando a função importada
    }, 200);
}

// Botao Anterior Animado
const botaoAnterior = document.getElementById('B_Anterior');
function AperteiAnterior(){
    const imagem5Normal = "./CSS/Imagems_Extras/botao_proximo_0.png";
    const imagem5Clicada = "./CSS/Imagems_Extras/botao_Proximo_1.png";
    botaoAnterior.src = imagem5Clicada;
    setTimeout(() => {
        botaoAnterior.src = imagem5Normal;
        botaoAnterior.style.filter = "";
        anteriorPagina(); // Agora chamando a função importada
    }, 200);
}
// Exportando Tudo para a Main (Corrigido o final)
export { botao, botao2, botao3, botaoProximo, botaoAnterior, Apertei1, Apertei2, Apertei3, AperteiProximo, AperteiAnterior};