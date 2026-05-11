import {container, PokemonsMostrar} from './Scripts/PokemonsMostrar.js';
import {PokeLimits, Pagina, pInput} from './Scripts/PokeLimits.js';
import {botao,botao2,botao3,botaoProximo, botaoAnterior,Apertei1,Apertei2,Apertei3,AperteiProximo, AperteiAnterior} from './Scripts/Botoes.js';
import { salvarStorage } from './Scripts/Localstorage.js';
import { mostrarTamanhoHeader } from './Scripts/MostrarTamanho.js';


function init(){    
    if(botao){
        botao.addEventListener("click", Apertei1)
    }
    if(botao2){
        botao2.addEventListener("click", Apertei2)
    }
    if(botao3){
        botao3.addEventListener("click", Apertei3)
    }
    if(botaoProximo){
        botaoProximo.addEventListener("click", AperteiProximo)
    }
    if(botaoAnterior){
        botaoAnterior.addEventListener("click", AperteiAnterior)
    }
    if(pInput){
    pInput.addEventListener("change", Pagina);
    }
    PokeLimits();
    salvarStorage();
    PokemonsMostrar();
    window.onload = mostrarTamanhoHeader();
    console.log("Pokemons Iniciado");
}
document.addEventListener('DOMContentLoaded', init);