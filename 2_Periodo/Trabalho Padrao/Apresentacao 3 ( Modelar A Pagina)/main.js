import {container, PokemonsMostrar} from './Scripts/PokemonsMostrar.js';
import {PokemonsPorPagina, AtualPagina, PokeLimits} from './Scripts/PokeLimits.js';
import {botao,botao2,botao3,botao4, botao5,Apertei1,Apertei2,Apertei3,Apertei4, Apertei5} from './Scripts/Botoes.js';
import { salvarStorage } from './Scripts/Localstorage.js';
function init(){
    console.log("Pokemons Iniciado");
    if(botao){
        botao.addEventListener("click", Apertei1)
    }
    if(botao2){
        botao2.addEventListener("click", Apertei2)
    }
    if(botao3){
        botao3.addEventListener("click", Apertei3)
    }
    if(botao4){
        botao4.addEventListener("click", Apertei4)
    }
    if(botao5){
        botao5.addEventListener("click", Apertei5)
    }
    PokemonsMostrar();
    PokeLimits();
    salvarStorage(); 
}
document.addEventListener('DOMContentLoaded', init);