import {container, PokemonsMostrar} from './Scripts/PokemonsMostrar.js';
import {PokeLimits, Pagina, pInput} from './Scripts/2.PokeLimits.js';
import {botaoHome, botaoDeck, botaoLogin,botaoProximo, botaoAnterior, aperteiHome, aperteiDeck, aperteiLogin,aperteiProximo, aperteiAnterior} from './Scripts/Botoes.js';
import { PrincipalStorage } from './Scripts/Localstorage.js';
import { mostrarTamanhoHeader } from './Scripts/MostrarTamanho.js';
import { botao_Buscar, Texto_Buscar, Procurar} from './Scripts/2.Buscador.js';

function init(){    
    if(botaoHome)     botaoHome.addEventListener("click", aperteiHome)
    if(botaoDeck)     botaoDeck.addEventListener("click", aperteiDeck)
    if(botaoLogin)    botaoLogin.addEventListener("click", aperteiLogin)
    if(botaoProximo)  botaoProximo.addEventListener("click", aperteiProximo)
    if(botaoAnterior) botaoAnterior.addEventListener("click", aperteiAnterior)
    if(botao_Buscar)  botao_Buscar.addEventListener("click", Procurar)

    if(pInput)        pInput.addEventListener("change", Pagina)
    if (!localStorage.getItem("Favoritos")) {
        console.log("Primeira execução detectada! Criando banco de dados inicial...");
        PrincipalStorage([],[],[],[]); 
    } else {
        console.log("Bem-vindo de volta! Dados carregados do navegador.");
    }

    PokeLimits();
    if(!window.location.pathname.includes("Deck.html") || !window.location.pathname.includes("Login.html")){
        PokemonsMostrar();
    }
    mostrarTamanhoHeader();

    console.log("Pokemons Iniciado");
}
document.addEventListener('DOMContentLoaded', init);