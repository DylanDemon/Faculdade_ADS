import { proximaPagina, anteriorPagina } from "./PokeLimits.js"; // Adicionado .js

// Botao Pokemons Animado
const botao = document.getElementById("B_Pokemons");
function Apertei1() {
    const imagem1Normal = "./Imagems_Extras/Botao_Pokemon_0.gif";
    const imagem1Clicada = "./Imagems_Extras/Botao_Pokemon_1.png";
    botao.src = imagem1Clicada;
    setTimeout(() => {
        botao.src = imagem1Normal;
    }, 200);
}

// Botao Deck Animado
const botao2 = document.getElementById('B_Deck');
function Apertei2() {
    const imagem2Normal = "./Imagems_Extras/Botao_Deck_0.png";
    const imagem2Clicada = "./Imagems_Extras/Botao_Deck_1.png";
    botao2.src = imagem2Clicada;
    setTimeout(() => {
        botao2.src = imagem2Normal;
    }, 200);
}

// Botao Login Animado
const botao3 = document.getElementById('B_Login');
function Apertei3() {
    const imagem3Normal = "./Imagems_Extras/Botao_Login_0.png";
    const imagem3Clicada = "./Imagems_Extras/Botao_Login_1.png";
    botao3.src = imagem3Clicada;
    setTimeout(() => {
        botao3.src = imagem3Normal;
    }, 200);
}

// Botao Proximo Animado
const botao4 = document.getElementById('B_Proximo');
function Apertei4(){
    const imagem4Normal = "./Imagems_Extras/botao_proximo_0.png";
    const imagem4Clicada = "./Imagems_Extras/botao_Proximo_1.png";
    botao4.src = imagem4Clicada;

    setTimeout(() => {
        botao4.src = imagem4Normal;
        proximaPagina(); // Agora chamando a função importada
    }, 200);
}

// Botao Anterior Animado
const botao5 = document.getElementById('B_Anterior');
function Apertei5(){
    const imagem5Normal = "./Imagems_Extras/botao_proximo_0.png";
    const imagem5Clicada = "./Imagems_Extras/botao_Proximo_1.png";
    botao5.src = imagem5Clicada;

    setTimeout(() => {
        botao5.src = imagem5Normal;
        anteriorPagina(); // Agora chamando a função importada
    }, 200);
}
// Exportando Tudo para a Main (Corrigido o final)
export { botao, botao2, botao3, botao4, botao5, Apertei1, Apertei2, Apertei3, Apertei4, Apertei5};