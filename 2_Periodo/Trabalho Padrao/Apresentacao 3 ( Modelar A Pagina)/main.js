import {container, PokemonsMostrar} from './Scripts/PokemonsMostrar.js';
import {PokemonsPorPagina, AtualPagina, PokeLimits} from './Scripts/PokeLimits.js'
import { botao, botao2, botao3, Apertei1, Apertei2, Apertei3} from './Scripts/Botoes.js';

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
    PokemonsMostrar();
    PokeLimits();
}
document.addEventListener('DOMContentLoaded', init);