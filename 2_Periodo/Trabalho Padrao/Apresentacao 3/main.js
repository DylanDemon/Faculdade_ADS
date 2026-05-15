import {container, PokemonsMostrar} from './Scripts/4.PokemonsMostrar.js';
import {PokeLimits, Pagina, pInput} from './Scripts/3.PokeLimits.js';
import {botaoHome, botaoDeck, botaoLogin,botaoProximo, botaoAnterior, aperteiHome, aperteiDeck, aperteiLogin,aperteiProximo, aperteiAnterior} from './Scripts/3.Botoes.js';
import { PrincipalStorage } from './Scripts/1.LocalStorage.js';
import { mostrarTamanhoHeader } from './Scripts/1.MostrarTamanho.js';
import { botao_Buscar, Texto_Buscar, Procurar} from './Scripts/2.Procurador (Dylan).js';

function init(){    
    if(botaoHome)     botaoHome.addEventListener("click", aperteiHome)
    if(botaoDeck)     botaoDeck.addEventListener("click", aperteiDeck)
    if(botaoLogin)    botaoLogin.addEventListener("click", aperteiLogin)
    if(botaoProximo)  botaoProximo.addEventListener("click", aperteiProximo)
    if(botaoAnterior) botaoAnterior.addEventListener("click", aperteiAnterior)

    if(pInput)        pInput.addEventListener("change", Pagina)
    if (!localStorage.getItem("Favoritos")) {
        console.log("Primeira execução detectada! Criando banco de dados inicial...");
        PrincipalStorage([],[],[],[]); 
    } else {
        console.log("Bem-vindo de volta! Dados carregados do navegador.");
    }   
    if(!window.location.pathname.includes("Deck.html") && !window.location.pathname.includes("Login.html")){
        PokeLimits();
        PokemonsMostrar();
        if(botao_Buscar)  botao_Buscar.addEventListener("click", Procurar)
    }
    mostrarTamanhoHeader();

    console.log("Pokemons Iniciado");
}
document.addEventListener('DOMContentLoaded', init);