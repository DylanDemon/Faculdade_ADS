import {container, PokemonsMostrar} from './Scripts/PokemonsMostrar.js';
import {PokeLimits, Pagina, pInput} from './Scripts/PokeLimits.js';
import {botaoHome, botaoDeck, botaoLogin,botaoProximo, botaoAnterior, aperteiHome, aperteiDeck, aperteiLogin,AperteiProximo, AperteiAnterior} from './Scripts/Botoes.js';
import { salvarStorage } from './Scripts/Localstorage.js';
import { mostrarTamanhoHeader } from './Scripts/MostrarTamanho.js';


function init(){    
try{
    if(botaoHome)     botaoHome.addEventListener("click", aperteiHome)
    if(botaoDeck)     botaoDeck.addEventListener("click", aperteiDeck)
    if(botaoLogin)    botaoLogin.addEventListener("click", aperteiLogin)
    if(botaoProximo)  botaoProximo.addEventListener("click", AperteiProximo)
    if(botaoAnterior) botaoAnterior.addEventListener("click", AperteiAnterior)
    if(pInput)        pInput.addEventListener("change", Pagina);

    PokeLimits();
    salvarStorage();
    PokemonsMostrar();
    window.onload = mostrarTamanhoHeader();

    console.log("Pokemons Iniciado");
}
catch(erro){
    console.error("DEU UM ERRO NO FUNÇAO INICIADOR LOCALIZADO NA MAIN.JS" + erro.message);
}
}
document.addEventListener('DOMContentLoaded', init);