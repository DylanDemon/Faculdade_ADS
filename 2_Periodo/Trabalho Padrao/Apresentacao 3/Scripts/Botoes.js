import { proximaPagina, anteriorPagina } from "./PokeLimits.js"; // Adicionado .js

const botaoHome = document.getElementById("B_Home");
function aperteiHome() {
    try{
        const imagemNormal = "./CSS/Imagems_Extras/Botao_Home_0.png";
        const imagemClicada = "./CSS/Imagems_Extras/Botao_Home_1.png";
        botaoHome.src = imagemClicada;
        setTimeout(() => {
            botaoHome.src = imagemNormal;
            window.location.href = "./index.html";
        }, 200);
    }
    catch(erro){
        console.error("DEU UM ERRO NO FUNÇAO >> aperteiHome << LOCALIZADO NA Botoes.js" + erro.message);
    }
}

const botaoDeck = document.getElementById('B_Deck');
function aperteiDeck() {
    try{
        const imagemNormal = "./CSS/Imagems_Extras/Botao_Deck_0.png";
        const imagemClicada = "./CSS/Imagems_Extras/Botao_Deck_1.png";
        botaoDeck.src = imagemClicada;
        setTimeout(() => {
            botaoDeck.src = imagemNormal;
            window.location.href = "./Deck.html";
        }, 200);
    }
    catch(erro){
        console.error("DEU UM ERRO NO FUNÇAO >> aperteiDeck << LOCALIZADO NA Botoes.js" + erro.message);
    }
}

const botaoLogin = document.getElementById('B_Login');
function aperteiLogin() {
    try {
        const imagemNormal = "./CSS/Imagems_Extras/Botao_Login_0.png";
        const imagemClicada = "./CSS/Imagems_Extras/Botao_Login_1.png";
        botaoLogin.src = imagemClicada;
        setTimeout(() => {
            botaoLogin.src = imagemNormal;
            window.location.href = "./Login.html";
        }, 200);
    } 
    catch (erro) {
        console.error("DEU UM ERRO NO FUNÇAO >> aperteiLogin << LOCALIZADO NA Botoes.js" + erro.message);
    }
}

const botaoProximo = document.getElementById('B_Proximo');
function aperteiProximo(){
    try {
        
        const imagem4Normal = "./CSS/Imagems_Extras/botao_proximo_0.png";
        const imagem4Clicada = "./CSS/Imagems_Extras/botao_Proximo_1.png";
        botaoProximo.src = imagem4Clicada;
        botaoProximo.style.filter = "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.8))";
        setTimeout(() => {
            botaoProximo.src = imagem4Normal;
            botaoProximo.style.filter = "";
            proximaPagina(); // Agora chamando a função importada
        }, 200);
    } 
    catch (error) {
        console.error("DEU UM ERRO NO FUNÇAO >> aperteiProximo << LOCALIZADO NA Botoes.js" + erro.message);
    }
}

const botaoAnterior = document.getElementById('B_Anterior');
function aperteiAnterior(){
    try {
        const imagem5Normal = "./CSS/Imagems_Extras/botao_proximo_0.png";
        const imagem5Clicada = "./CSS/Imagems_Extras/botao_Proximo_1.png";
        botaoAnterior.src = imagem5Clicada;
        setTimeout(() => {
            botaoAnterior.src = imagem5Normal;
            botaoAnterior.style.filter = "";
            anteriorPagina(); // Agora chamando a função importada
        }, 200);
    } 
    catch (error) {
        console.error("DEU UM ERRO NO FUNÇAO >> aperteiAnterior << LOCALIZADO NA Botoes.js" + erro.message);
    }
}

export { botaoHome, botaoDeck, botaoLogin, botaoProximo, botaoAnterior, aperteiHome, aperteiDeck, aperteiLogin, aperteiProximo, aperteiAnterior};