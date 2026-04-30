import {proximaPagina,anteriorPagina} from "./PokeLimits.js"
// Botao Pokemons Animado
const botao = document.getElementById("B_Pokemons");
function Apertei1() {
    // 2. Definimos os caminhos das suas imagens
    const imagem1Normal = "./Imagems_Extras/Botao_Pokemon_0.gif";
    const imagem1Clicada = "./Imagems_Extras/Botao_Pokemon_1.png"; // Supondo que a pressionada seja a '1'

    // 3. Troca para a imagem de "pressionado"
    botao.src = imagem1Clicada;

    // 4. Timer para voltar ao normal após 200 milissegundos
    setTimeout(() => {
        botao.src = imagem1Normal;
    }, 200);
}

// Botao Deck Animado
const botao2 = document.getElementById('B_Deck');
function Apertei2() {
    // 2. Definimos os caminhos das suas imagens
    const imagem2Normal = "./Imagems_Extras/Botao_Deck_0.png";
    const imagem2Clicada = "./Imagems_Extras/Botao_Deck_1.png"; // Supondo que a pressionada seja a '1'

    // 3. Troca para a imagem de "pressionado"
    botao2.src = imagem2Clicada;

    // 4. Timer para voltar ao normal após 200 milissegundos
    setTimeout(() => {
        botao2.src = imagem2Normal;
    }, 200);
}

// Botao Login Animado
const botao3 = document.getElementById('B_Login');
function Apertei3() {
    // 2. Definimos os caminhos das suas imagens
    const imagem3Normal = "./Imagems_Extras/Botao_Login_0.png";
    const imagem3Clicada = "./Imagems_Extras/Botao_Login_1.png"; // Supondo que a pressionada seja a '1'

    // 3. Troca para a imagem de "pressionado"
    botao3.src = imagem3Clicada;

    // 4. Timer para voltar ao normal após 200 milissegundos
    setTimeout(() => {
        botao3.src = imagem3Normal;
    }, 200);
}

// Exportando Tudo A Main
export{botao,botao2,botao3,Apertei1,Apertei2,Apertei3}